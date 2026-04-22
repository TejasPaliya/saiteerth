import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Anek_Latin } from "next/font/google";
import { Poppins } from 'next/font/google';
import Loader from "@/components/Loader";
import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})


// new shit for ur Anek Latin default font
const anek = Anek_Latin({
  variable: "--font-anek",
  subsets: ["latin"],
});

export const metadata = {
  title: "Saiteerth",
  description: "Devotional Theme Park",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Meta Pixel (Facebook Pixel) */}
        <Script id="meta-pixel-init" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '647996379064631');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Fallback for users with JS disabled */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=647996379064631&ev=PageView&noscript=1`}
            alt="facebook-pixel"
          />
        </noscript>
      </head>
      <body
        className={`${geistSans.variable} ${poppins.variable} ${geistMono.variable} ${anek.variable} antialiased`}>
        <Loader />
        {children}
      </body>
    </html>
  );
}
