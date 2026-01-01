import { Geist, Geist_Mono } from "next/font/google"; // সঠিক ইম্পোর্ট দেখে নিন
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { ThemeProvider } from "./Components/ThemePorvider/ThemProvider"; // প্রোভাইডার ইম্পোর্ট করুন

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mahfuz - Portfolio",
  description: "Web Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" > {/* suppressHydrationWarning যোগ করা জরুরি */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}