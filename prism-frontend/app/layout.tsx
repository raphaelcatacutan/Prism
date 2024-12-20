"use client"

import {Lato} from 'next/font/google';
import './globals.css';
import KBar from '@/components/kbar';
import AppSidebar from '@/components/layout/app-sidebar';
import Header from '@/components/layout/header';
import {SidebarInset, SidebarProvider} from '@/components/ui/sidebar';
import NextTopLoader from 'nextjs-toploader';
import {Toaster} from '@/components/ui/sonner';
import Providers from '@/components/layout/providers';


const lato = Lato({
    subsets: ['latin'],
    weight: ['400', '700', '900'],
    display: 'swap'
});

export default function RootLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${lato.className}`}
            suppressHydrationWarning={true}
        >
        <body className={'overflow-hidden'}>
        <NextTopLoader showSpinner={false}/>
        <Providers>
            <KBar>
                <SidebarProvider>
                    <AppSidebar/>
                    <SidebarInset>
                        <Header/>
                        {children}
                        <Toaster/>
                    </SidebarInset>
                </SidebarProvider>
            </KBar>
        </Providers>
        </body>
        </html>
    );
}
