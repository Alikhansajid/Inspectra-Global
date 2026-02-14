import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';


const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'], variable: '--font-poppins' });

export const metadata: Metadata = {
    title: 'Inspectra Global | Global Sourcing & Inspection Experts',
    description: 'Global Sourcing & Inspection Experts',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${poppins.variable} font-sans bg-white text-slate-900 overflow-x-hidden flex flex-col min-h-screen`}>
                <Navbar />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
                <FloatingButtons />

            </body>
        </html>
    );
}
