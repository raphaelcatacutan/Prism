"use client"

import { ColumnDef } from "@tanstack/react-table"
import { PersonalInfo } from "../data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"

export const columns: ColumnDef<PersonalInfo>[] = [
    {
        accessorKey: "lastName",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Last Name" />
        ),
        cell: ({ row }) => {
            return (
                <span className="max-w-[200px] truncate font-medium">
                    {row.getValue("lastName")}
                </span>
            )
        },
    },
    {
        accessorKey: "firstName",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="First Name" />
        ),
        cell: ({ row }) => {
            return (
                <span className="max-w-[200px] truncate font-medium">
                        {row.getValue("firstName")}
                </span>
            )
        },
    },
    {
        accessorKey: "email",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Email" />
        ),
        cell: ({ row }) => {
            return (
                <span className="max-w-[200px] truncate font-medium">
                        {row.getValue("email")}
                </span>
            )
        },
    },
    {
        accessorKey: "sex",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Sex" />
        ),
        cell: ({ row }) => {
            return (
                <span className="max-w-[200px] truncate font-medium">
                        {row.getValue("sex")}
                </span>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: "citizenship",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Citizenship" />
        ),
        cell: ({ row }) => {
            return (
                <span className="max-w-[200px] truncate font-medium">
                        {row.getValue("citizenship")}
                </span>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        id: "actions",
        cell: ({ row }) => <DataTableRowActions row={row} />,
    },
]
