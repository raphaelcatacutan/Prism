import PageContainer from '@/components/layout/page-container';
import { buttonVariants } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import EmployeeTable from './employee-tables';

// type TEmployeeListingPage = {};

export default function EmployeeListingPage({}: object) {
  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <Heading
            title={`Employee (${1})`}
            description="Manage employees (Server side table functionalities.)"
          />

          <Link
            href={process.env.NODE_ENV === 'production' ? '/Prism/database/add' : '/database/add'}
            className={cn(buttonVariants({ variant: 'default' }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
        <Separator />
        <EmployeeTable data={[]} totalData={1} />
      </div>
    </PageContainer>
  );
}
