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
  title: 'Mohamed Rayan Benchekroun — Cybersecurity & IT Portfolio',
  description:
    'Portfolio of Rayan Benchekroun — 3rd-year Cybersecurity student at AP Hogeschool Antwerpen. Penetration testing, network security, vulnerability assessment. Multilingual (NL/EN/AR/FR). Available Mon–Wed.',
  keywords: [
    'cybersecurity', 'penetration testing', 'network security', 'ethical hacking',
    'AP Hogeschool Antwerpen', 'portfolio', 'Mohamed Rayan Benchekroun',
    'vulnerability assessment', 'IT security', 'Antwerpen',
  ],
  authors: [{ name: 'Mohamed Rayan Benchekroun' }],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Mohamed Rayan Benchekroun — Cybersecurity Portfolio',
    description: 'Cybersecurity student · Penetration testing · Network security · AP Hogeschool Antwerpen',
    type: 'website',
    locale: 'en_BE',
    siteName: 'MRB Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohamed Rayan Benchekroun — Cybersecurity Portfolio',
    description: 'Cybersecurity student · AP Hogeschool Antwerpen · Available Mon–Wed',
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
