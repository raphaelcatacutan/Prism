// 'use client';
//
// import { Input } from '@/components/ui/input';
// import { cn } from '@/lib/utils';
// import { useTransition } from 'react';

// interface DataTableSearchProps {
//   searchKey: string;
//   searchQuery: string;
//   setSearchQuery: (
//     value: string | ((old: string) => string | null) | null,
//     options?: undefined
//   ) => Promise<URLSearchParams>;
//   setPage: <Shallow>(
//     value: number | ((old: number) => number | null) | null,
//     options?: undefined
//   ) => Promise<URLSearchParams>;
// }

// export function DataTableSearch({
//   searchKey,
//   searchQuery,
//   setSearchQuery,
//   setPage
// }: DataTableSearchProps) {
//   const [isLoading] = useTransition();
//
//   const handleSearch = (value: string) => {
//     setSearchQuery(value);
//     setPage(1); // Reset page to 1 when search changes
//   };
//
//   return (
//     <Input
//       placeholder={`Search ${searchKey}...`}
//       value={searchQuery ?? ''}
//       onChange={(e) => handleSearch(e.target.value)}
//       className={cn('w-full md:max-w-sm', isLoading && 'animate-pulse')}
//     />
//   );
// }
