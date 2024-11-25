


import localFont from "next/font/local";
import "./globals.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CartProvider } from './contexts/CartContext';
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Re Plastify",
  description: "Turning Plastic Waste into a Sustainable Future",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="/Logo2.png" type="image/png"  />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
      <CartProvider>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        </CartProvider>
      </body>
    </html>
  );
}