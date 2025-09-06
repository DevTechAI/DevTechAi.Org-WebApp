import './globals.css';
import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DevTechAi.Org - Intelligent Software Solutions',
  description: 'Transform your business with cutting-edge AI software solutions. Machine learning, automation, and intelligent systems for modern enterprises.',
  icons: {
    icon: '/devtechai-logo.png',
    shortcut: '/devtechai-logo.png',
    apple: '/devtechai-logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${orbitron.variable}`}>{children}</body>
    </html>
  );
}