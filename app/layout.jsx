import './globals.css';

export const metadata = {
  title: 'ByteSpace - Get Access to Hundreds Courses Available',
  description: 'Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500;1,600&display=swap" rel="stylesheet" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&f[]=clash-display@400,500,600,700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#003BE2] text-white font-satoshi overflow-x-hidden min-h-screen relative antialiased selection:bg-[#D5FF00] selection:text-[#0F172A]">
        {children}
      </body>
    </html>
  );
}

