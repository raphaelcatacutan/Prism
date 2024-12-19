'use client';
import * as React from 'react';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import * as z from 'zod';
import {Button} from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {Input} from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { CalendarIcon, Edit } from "lucide-react"
import { cn } from "@/lib/utils"
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group';
import {Card, CardHeader, CardTitle, CardContent} from '@/components/ui/card';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {useEffect, useState} from "react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,

}
    from '@/components/ui/dialog';
import {Label} from "@/components/ui/label";

const childSchema = z.object({
    childId: z.number().positive(),
    fullName: z.string().min(2, { message: "First name must be at least 2 characters long." }),
    dateOfBirth: z.any()
});
const formSchema = z.object({
    emailAd: z.string().optional(),
    fatherLastName: z.string().optional(),
    spouseEmployer: z.string().optional(),
    motherMiddleName: z.string().optional(),
    pagibig: z.string().optional(),
    sss: z.string().optional(),
    spouseMiddleName: z.string().optional(),
    fatherFirstName: z.string().optional(),
    tin: z.string().optional(),
    height: z.any(),
    permHouseSt: z.string().optional(),
    gsis: z.string().optional(),
    weight: z.any(),
    resZipCode: z.string().optional(),
    telNo: z.string().optional(),
    spouseLastName: z.string().optional(),
    firstName: z.string().min(1, { message: "First name is required." }),
    motherFirstName: z.string().optional(),
    citizenshipAcq: z.string({ message: "Please select a valid citizenship acquisition type." }),
    lastName: z.string().min(1, { message: "Last name is required." }),
    civilStatus: z.string({ message: "Please select a valid civil status." }),
    permHouseNo: z.string().optional(),
    fatherMiddleName: z.string().optional(),
    bloodType: z.string().optional(),
    resHouseSt: z.string().optional(),
    philHealth: z.string().optional(),
    permBrgy: z.string().optional(),
    resBrgy: z.string().optional(),
    permZipCode: z.string().optional(),
    motherLastName: z.string().optional(),
    spouseEmployerAddress: z.string().optional(),
    placeOfBirth: z.string().optional(),
    agency: z.string().optional(),
    sex: z.string({ message: "Please select a valid sex." }),
    citizenship: z.string({ message: "Please select a valid citizenship." }),
    dateOfBirth: z.any(),
    spouseFirstName: z.string().optional(),
    mobileNo: z.string().optional(),
    resHouseNo: z.string().optional(),
    resProv: z.string().optional(),
    spouseOccupation: z.string().optional(),
    permHouseVil: z.string().optional(),
    middleName: z.string().optional(),
    permCity: z.string().optional(),
    resHouseVil: z.string().optional(),
    permProv: z.string().optional(),
    resCity: z.string().optional(),
    children: z.array(childSchema)
});
export default function PersonalInfoForm() {

    const [ data, setData] = useState({});

    const queryParams = new URLSearchParams(window.location.search);
    const personId = queryParams.get('person_id');

    useEffect(() => {
        fetch(`http://localhost:8081/Prism/saved_info?person_id=${personId}`)
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            "lastName": "",
            "emailAd": "",
            "permHouseNo": "",
            "fatherLastName": "",
            "fatherMiddleName": "",
            "spouseEmployer": "",
            "bloodType": "",
            "resHouseSt": "",
            "civilStatus": "",
            "motherMiddleName": "",
            "pagibig": "",
            "sss": "",
            "philHealth": "",
            "permBrgy": "",
            "spouseMiddleName": "",
            "fatherFirstName": "",
            "resBrgy": "",
            "permZipCode": "",
            "motherLastName": "",
            "tin": "",
            "spouseEmployerAddress": "",
            "height": "",
            "placeOfBirth": "",
            "permHouseSt": "",
            "agency": "",
            "gsis": "",
            "sex": "",
            "citizenship": "",
            "weight": "",
            "dateOfBirth": undefined,
            "spouseFirstName": "",
            "mobileNo": "",
            "resHouseNo": "",
            "resZipCode": "",
            "telNo": "",
            "spouseLastName": "",
            "firstName": "",
            "resProv": "",
            "spouseOccupation": "",
            "permHouseVil": "",
            "motherFirstName": "",
            "middleName": "",
            "permCity": "",
            "citizenshipAcq": "",
            "resHouseVil": "",
            "permProv": "",
            "resCity": "",
            "chilren": []
        }
    });



    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(JSON.stringify(values));
        try {
            fetch("http://localhost:8081/Prism/saved_info", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            }).then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // This parses the JSON body of the response
            })
                .then(data => {
                    console.log(data); // Log the parsed response body
                })
        } catch (error) {
            console.error("Error:", error);
        }
    }

    const [isDialogOpen, setDialogOpen] = useState(false)
    const [message, setMessage] = useState("");

    const handleRowClick = (x: string) => {
        setDialogOpen(true);
        setMessage(x)
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    useEffect(() => {
        const fieldNames = [
            "emailAd", "fatherLastName", "spouseEmployer", "motherMiddleName", "pagibig", "sss",
            "spouseMiddleName", "fatherFirstName", "children", "tin", "height", "permHouseSt", "gsis",
            "spouseLastName", "firstName", "motherFirstName", "citizenshipAcq", "civilStatus", "lastName",
            "permHouseNo", "fatherMiddleName", "bloodType", "resHouseSt", "philHealth", "permBrgy", "resBrgy",
            "permZipCode", "motherLastName", "spouseEmployerAddress", "placeOfBirth", "agency", "sex", "citizenship",
            "dateOfBirth", "spouseFirstName", "mobileNo", "resHouseNo", "resProv", "spouseOccupation",
            "permHouseVil", "middleName", "permCity", "resHouseVil", "permProv", "resCity", "weight"
        ];

        // Loop through the field names and set their values dynamically
        fieldNames.forEach((field) => {
            if (data.hasOwnProperty(field)) {
                form.setValue(field, data[field]);  // Set value for each field dynamically
            }
        });
    }, [data]);

    return (
        <Card className="mx-auto w-full">
            <CardHeader>
                <CardTitle className="text-left text-3xl font-bold">
                    Personal Information
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-30 gap-4">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({field}) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>Last Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder="Enter your last name" />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )
                                }}
                            />
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>First Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Enter your first name" />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="middleName"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Middle Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Enter your middle name"/>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="sex"
                                render={({field}) => (
                                    <FormItem className="space-y-4">
                                        <FormLabel>Sex</FormLabel>
                                        <FormControl>
                                            <RadioGroup {...field}
                                                onChange={field.onChange}
                                                value={field.value}
                                                className="flex space-x-4"
                                            >
                                                <FormItem className="flex items-center space-x-2 space-y--3">
                                                    <FormControl>
                                                        <RadioGroupItem value="1"/>
                                                    </FormControl>
                                                    <FormLabel className="font-normal">Male</FormLabel>
                                                </FormItem>
                                                <FormItem className="flex items-center space-x-2 space-y--3">
                                                    <FormControl>
                                                        <RadioGroupItem value="2"/>
                                                    </FormControl>
                                                    <FormLabel className="font-normal">Female</FormLabel>
                                                </FormItem>
                                            </RadioGroup>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="civilStatus"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Civil Status</FormLabel>
                                        <Select {...field}
                                                onValueChange={field.onChange}
                                                value={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a status"/>
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="1">Single</SelectItem>
                                                <SelectItem value="2">Married</SelectItem>
                                                <SelectItem value="3">Annuled</SelectItem>
                                                <SelectItem value="4">Separated</SelectItem>
                                                <SelectItem value="5">Widowed</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="citizenship"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Citizenship</FormLabel>
                                        <Select {...field}
                                                onValueChange={field.onChange}
                                                value={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a citizenship type"/>
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="1">Filipino</SelectItem>
                                                <SelectItem value="2">Dual Citizenship</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="citizenshipAcq"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Citizenship Acquisition</FormLabel>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select an acquisition"/>
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="1">Birth</SelectItem>
                                                <SelectItem value="2">Naturalization</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="bloodType"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Blood Type</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your middle name"  {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="height"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Height</FormLabel>
                                        <FormControl>
                                            <Input type={"number"} {...field} placeholder="Enter your hieght" />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="weight"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Weight</FormLabel>
                                        <FormControl>
                                            <Input type={"number"} {...field} placeholder="Enter your weight" />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="placeOfBirth"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Place of Birth</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your middle name" {...field}/>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="dateOfBirth"
                                render={({field}) => (
                                    <FormItem className="grid grid-cols-1 space-y-1 top-20">
                                        <FormLabel>Date of birth</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "col-span-1 pl-3 text-left font-normal",
                                                            !field.value && "text-muted-foreground"
                                                        )}
                                                    >
                                                        {field.value ? (
                                                            format(field.value, "PPP")
                                                        ) : (
                                                            <span>Pick a date</span>
                                                        )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent align="start">
                                                <Calendar
                                                    mode="single"
                                                    onSelect={field.onChange}
                                                    initialFocus={true}
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <Accordion type="multiple" className={"my-4"}>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    <h3 className="text-2xl font-bold tracking-tight">Government Issued Information</h3>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                                        <FormField
                                            control={form.control}
                                            name="gsis"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>GSIS Number</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your last name"  {...field}/>
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="pagibig"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>PagIBIG Number</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your first name"  {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="philHealth"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>PhilHealth Number</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your middle name"  {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="sss"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>SSS Number</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your middle name" {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="tin"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>TIN</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your middle name"   {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="agency"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Agency Employee Number</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your middle name"   {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>
                                    <h2 className="text-2xl font-bold tracking-tight">Contact Information</h2>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                                        <FormField
                                            control={form.control}
                                            name="resHouseNo"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Resident House Number</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your last name"  {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="resHouseSt"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Resident House Street</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your first name"  {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="resHouseVil"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Resident House Village</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your middle name"  {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="resBrgy"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Resident House Barangay</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your middle name"  {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="resCity"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Resident House City</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your middle name"  {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="resProv"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Resident House Province</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your middle name"  {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="resZipCode"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Resident House ZIP Code</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your middle name"  {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="permHouseNo"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Permanent House Number</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your middle name"  {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="permHouseSt"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Permanent House Street</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your middle name"  {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="permHouseVil"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Permanent House Village</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your middle name"  {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="permBrgy"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Permanent House Barangay</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your middle name" {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="permCity"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Permanent House City</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your middle name"  {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="permProv"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Permanent House Province</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your middle name"  {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="permZipCode"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Permanent House ZIP Code</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your middle name"  {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="telNo"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Permanent Telephone Number</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your middle name"  {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="mobileNo"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Mobile Number</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your middle name" {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="emailAd"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Email Address</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your middle name"  {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>
                                    <h2 className="text-2xl font-bold tracking-tight">Family Background</h2>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                                        <FormField
                                            control={form.control}
                                            name="spouseLastName"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Spouse Last Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your last name"  {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="spouseFirstName"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Spouse First Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your first name"  {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="spouseMiddleName"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Spouse Middle Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your middle name"  {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="spouseOccupation"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Spouse Occupation</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your middle name"  {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="spouseEmployer"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Spouse Employer/Business Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your middle name"  {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="spouseEmployerAddress"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Spouse Business Address</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your middle name"  {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="fatherLastName"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Father Last Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your middle name"  {...field}/>
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="fatherFirstName"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Father First Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your middle name"  {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="fatherMiddleName"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Father Middle Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your middle name"  {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="motherLastName"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Mother Maiden Last Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your middle name"   {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="motherFirstName"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Mother Maiden First Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your middle name"  {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="motherMiddleName"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Mother Maiden Middle Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your middle name"  {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div>
                                        <h2 className="mt-5 mb-5 text-2xl tracking-tight ">List of Children</h2>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>Full Name</TableHead>
                                                    <TableHead>Date of Birth</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {data.children && data.children.map((child) => (
                                                    <TableRow className="h-[50px]" key={child["childId"]} onClick={()=> handleRowClick(child["fullName"])}>
                                                        <TableCell>{child["fullName"]}</TableCell>
                                                        <TableCell>{child["dateOfBirth"]}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </div>
                                    <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
                                        <DialogContent className="sm:max-w-md">
                                            <DialogHeader>
                                                <DialogTitle>Child Information</DialogTitle>
                                            </DialogHeader>
                                            <div className="grid flex gap-2">
                                                <Label htmlFor="chfullname">
                                                    Full Name
                                                </Label>
                                                <Input
                                                    id="chfullname"
                                                    defaultValue={message}
                                                />
                                            </div>
                                            <div className="grid flex gap-2">
                                                <Label htmlFor="chdateofbirth">
                                                    Date of Birth
                                                </Label>
                                                <Input
                                                    id="chdateofbirth"
                                                    defaultValue="https://ui.shadcn.com/docs/installation"
                                                />
                                            </div>
                                            <DialogFooter className="sm:justify-start">
                                                <Button>Save changes</Button>
                                                <DialogClose asChild>
                                                    <Button type="button" variant="secondary"
                                                            onClick={handleCloseDialog}>
                                                        Close
                                                    </Button>
                                                </DialogClose>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Button type={"submit"} className={"w-48"} onClick={() => onSubmit(form.getValues())}>Submit</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
