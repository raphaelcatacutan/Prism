"use client";

import React, {useEffect, useState} from 'react';
import {Heading} from "@/components/ui/heading";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import {Plus} from "lucide-react";
import PageContainer from "@/components/layout/page-container";

import {z} from "zod"

import {columns} from "@/app/database/_components/columns"
import {DataTable} from "@/app/database/_components/data-table"
import {infoSchema} from "./data/schema"

export default function Page() {
    const [ data, setData] = useState( z.array(infoSchema).parse([]));

    const fetchData = () => {
        fetch('http://localhost:8081/Prism/database_read')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched data:', data);
                setData(data);  // Update the state with the fetched data
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <PageContainer scrollable>
            <div className="space-y-4">
                <div className="flex items-start justify-between">
                    <Heading
                        title={`Personal Information (${data.length})`}
                        description="Manage personal information saved in the database"
                    />

                    <Link
                        href={process.env.NODE_ENV === 'production' ? '/Prism/database/add' : '/database/add'}
                        className={cn(buttonVariants({variant: 'default'}))}
                    >
                        <Plus className="mr-2 h-4 w-4"/> Add New
                    </Link>
                </div>
                <DataTable
                    data={data}
                    columns={columns}
                    showPagination={true}
                    showToolbar={true}
                />
            </div>
        </PageContainer>
    )
}
