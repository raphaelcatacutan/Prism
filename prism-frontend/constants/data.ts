import { NavItem } from '@/types';

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    url: process.env.NODE_ENV === 'production' ? '/Prism/' : '/',
    icon: 'dashboard',
    isActive: false,
    shortcut: ['d', 'd'],
    items: [] // Empty array as there are no child items for Dashboard
  },
  {
    title: 'Database',
    url: process.env.NODE_ENV === 'production' ? '/Prism/database/' : '/database/',
    icon: 'user',
    shortcut: ['e', 'e'],
    isActive: false,
    items: [] // No child items
  }
];
