
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { TRPCReactProvider } from "@/trpc/react";
import { ThemeProvider } from "@/app/_components/theme-provider";
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from "sonner";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GitMind.ai - AI-Powered GitHub Workflow Optimization',
  description: 'Transform your GitHub workflows with AI-powered repository intelligence, automated PR reviews, and collaborative project management tools.',
  keywords: ['GitHub', 'AI', 'workflow', 'developer tools', 'code review', 'project management'],
  authors: [{ name: 'GitMind.ai' }],
  openGraph: {
    title: 'GitMind.ai - AI-Powered GitHub Workflow Optimization',
    description: 'Transform your GitHub workflows with AI-powered repository intelligence, automated PR reviews, and collaborative project management tools.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
             <TRPCReactProvider>{children}</TRPCReactProvider>
             <Toaster richColors/>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}