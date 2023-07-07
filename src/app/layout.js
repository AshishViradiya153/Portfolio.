"use client";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const [loading, setloading] = useState(true);
  const currentPage = usePathname();
  const [path] = useState(currentPage);
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
            {path.includes("thankYou") === false && <Navbar />}
            {children}
          </>
        )}
      </body>
    </html>
  );
}
