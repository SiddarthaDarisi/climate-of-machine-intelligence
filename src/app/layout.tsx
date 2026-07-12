import type { Metadata } from 'next';
import { Bodoni_Moda, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-bodoni',
  display: 'swap',
});

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-sans',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'The Climate of Machine Intelligence — A History of AI',
  description:
    'An interactive timeline of AI history from 1943 to 2025, framed as booms, winters, and thaws.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bodoniModa.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
