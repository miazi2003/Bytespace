import 'lenis/dist/lenis.css';
import './globals.css';
import { Poppins } from 'next/font/google';
import SmoothScroll from '../components/SmoothScroll';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  title: 'ByteSpace - Get Access to Hundreds Courses Available',
  description: 'Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&f[]=clash-display@400,500,600,700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#003BE2] text-white font-satoshi overflow-x-hidden min-h-screen relative antialiased selection:bg-[#D5FF00] selection:text-[#0F172A]">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
