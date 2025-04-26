import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins, Orbitron } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap'
});

const orbitron = Orbitron({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Crazy Chicken 3D - Wild Poultry Adventure Game',
  description: 'Join the most exciting chicken adventure in 3D! Run, jump, and solve puzzles in this action-packed game featuring the craziest chickens in town.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} ${orbitron.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}