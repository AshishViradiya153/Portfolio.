"use client";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const [loading, setloading] = useState(true);
  const currentPage = usePathname();
  console.log(
    "🚀 ~ file: layout.js:11 ~ RootLayout ~ currentPage:",
    currentPage
  );
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);
  return (
    <html lang="en">
      <body className="">
        {loading ? (
          <Loading />
        ) : (
          <>
            {currentPage !== "/thankYou" && <Navbar />}
            {children}
          </>
        )}
      </body>
    </html>
  );
}
