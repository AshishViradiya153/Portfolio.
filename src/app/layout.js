"use client";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { useEffect, useState } from "react";
import Loading from "./Loading";

export default function RootLayout({ children, showNavbar = true }) {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 1500);
  }, []);
  return (
    <html lang="en">
      <body className="">
        {loading ? (
          <Loading />
        ) : (
          <>
            {showNavbar && <Navbar />}
            {children}
          </>
        )}
      </body>
    </html>
  );
}
