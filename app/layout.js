"use client"
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  const pathName = usePathname();
  const googleAuthPaths = [
    "/login",
    "/signup",
    "/reset",
    "/verifyAccount",
    "/resetEmail",
    "/reset",
  ];
  const isAuthPage = googleAuthPaths.includes(pathName);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Japa</title>
        <meta
          name="description"
          content="Discover the ultimate platform where we upskill, empower, and walk with you to your dream career"
        />
      </head>
      <body className={`relative ${poppins.className}`}>
        {!isAuthPage && <Header />}
        <main>{children}</main>
        {!isAuthPage && <Footer />}
      </body>
    </html>
  );
}
