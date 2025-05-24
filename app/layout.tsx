import { Metadata } from 'next';
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from './ThemeContext';
import Script from 'next/script';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Rishabh Shukla | Data Science Portfolio',
  description: 'Data Science student and developer passionate about solving real-world problems through data analysis and machine learning.',
  keywords: ['Data Science', 'Machine Learning', 'Python', 'Data Analysis', 'Portfolio'],
  authors: [{ name: 'Rishabh Shukla' }],
  openGraph: {
    title: 'Rishabh Shukla | Data Science Portfolio',
    description: 'Data Science student and developer passionate about solving real-world problems through data analysis and machine learning.',
    url: 'https://your-portfolio-url.com',
    siteName: 'Rishabh Shukla Portfolio',
    images: [
      {
        url: '/og-image.jpg', // Add your portfolio preview image
        width: 1200,
        height: 630,
        alt: 'Rishabh Shukla Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rishabh Shukla | Data Science Portfolio',
    description: 'Data Science student and developer passionate about solving real-world problems through data analysis and machine learning.',
    images: ['/og-image.jpg'], // Add your portfolio preview image
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'YOUR_GA_ID');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {/* Sticky Navigation Bar */}
          <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-[#CFAEFF]/10 shadow-sm flex justify-center">
            <div className="max-w-6xl w-full flex items-center justify-between px-6 py-3">
              <span className="text-[#CFAEFF] font-bold text-lg tracking-widest">Rishabh</span>
              <ul className="flex gap-6 text-white/90 font-medium text-base">
                <li><a href="#home" className="hover:text-[#CFAEFF] transition-colors">Home</a></li>
                <li><a href="#projects" className="hover:text-[#CFAEFF] transition-colors">Projects</a></li>
                <li><a href="#about" className="hover:text-[#CFAEFF] transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-[#CFAEFF] transition-colors">Contact</a></li>
              </ul>
            </div>
          </nav>
          <main className="pt-20">{/* Add padding for sticky nav */}
          {children}
          </main>
          {/* Footer */}
          <footer className="w-full text-center py-6 bg-black text-white/60 text-sm font-mono border-t border-[#CFAEFF]/10">
            Made by Rishabh | © 2025
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
