'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { Employee } from '@/constants/data';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
// import { Button } from '@/components/ui/button';
// import { ArrowUpDown } from 'lucide-react';
// import { Label } from 'recharts';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const columns: ColumnDef<Employee>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'first_name',
    header: 'NAME'
  },
  {
    accessorKey: 'country',
    header: 'COUNTRY'
  },
  {
    accessorKey: 'email',
    header: 'EMAIL'
  },
  {
    accessorKey: 'job',
    header: 'COMPANY',
    enableSorting: true
  },
  {
    accessorKey: 'gender',
    header: 'GENDER'
  },
  // {
  //   accessorKey: 'profile_picture',
  //   header: () => {
  //     return (
  //       <center>
  //         ada
  //       </center>
  //     )
  //   },
  // },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
