"use client"

import {MoreHorizontal} from "lucide-react"

import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {useRouter} from 'next/navigation';
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
    const router = useRouter();
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
                    const url = `/database/add?person_id=${data.personId}`;
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
                    delete this file from our servers?
                </DialogDescription>
            </DialogHeader>
            <DialogFooter>
                <Button onClick={() => {
                    console.log(data.personId)
                    window.location.reload();
                }}>
                    Confirm
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
    )
}
