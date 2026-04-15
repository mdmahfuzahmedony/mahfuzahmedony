import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";

import { ThemeProvider } from "./Components/ThemePorvider/ThemProvider";
import Footer from "./Components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mahfuz Ahmed",
  description: "Web Developer Portfolio",
  icons: {
    icon: '/mahfuzahmedony.png',
  },
};

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning অবশ্যই html ট্যাগের ভেতরে থাকতে হবে
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}