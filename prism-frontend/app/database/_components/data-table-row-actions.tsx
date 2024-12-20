"use client"

import {MoreHorizontal} from "lucide-react"

import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {PersonalInfo} from "@/app/database/data/schema";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle, DialogTrigger
} from "@/components/ui/dialog";

interface CellActionProps {
    data: PersonalInfo;
}

export const DataTableRowActions: React.FC<CellActionProps> = ({ data }) => {
    return (
        <Dialog>
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                >
                    <MoreHorizontal/>
                    <span className="sr-only">Open menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[160px]">
                <DropdownMenuItem onClick={() => {
                    const url = process.env.NODE_ENV === 'production' ? `/Prism/database/add?person_id=${data.personId}` : `/database/add?person_id=${data.personId}`;
                    window.open(url, '_self');
                }}>Edit</DropdownMenuItem>
                <DropdownMenuItem>
                    <DialogTrigger>
                        Delete
                    </DialogTrigger>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                    This action cannot be undone. Are you sure you want to permanently
                    delete this data from our servers?
                </DialogDescription>
            </DialogHeader>
            <DialogFooter>
                <Button onClick={() => {
                    try {
                        fetch("http://localhost:8081/Prism/database_delete", {
                            method: "POST",
                            headers: {
                                'Accept': 'application/json',
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                "deleteInfo": data.personId
                            }),
                        }).then(response => {
                            if (!response.ok) {
                                throw new Error('Network response was not ok');
                            }
                            return response.json();
                        }).then(data => {
                            console.log(data);
                            window.location.reload();
                        })
                    } catch (error) {
                        console.error("Error:", error);
                    }
                }}>
                    Confirm
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
    )
}
