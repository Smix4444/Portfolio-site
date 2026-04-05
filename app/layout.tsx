import type { Metadata } from 'next';
import { Syne, DM_Mono } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-dm-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mohamed Rayan Benchekroun — Cybersecurity Student',
  description:
    '3rd-year Cybersecurity student at AP Hogeschool Antwerpen. Analytical, customer-oriented, multilingual. Available Mon–Wed for student roles.',
  openGraph: {
    title: 'Mohamed Rayan Benchekroun',
    description: 'Cybersecurity student · AP Hogeschool Antwerpen',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${syne.variable} ${dmMono.variable}`}>
      <body className="bg-[#0f0f0f] text-[#f5f5f5] antialiased overflow-x-hidden font-[family-name:var(--font-syne)]">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
