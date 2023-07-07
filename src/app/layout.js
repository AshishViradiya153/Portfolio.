import Navbar from "@/components/navbar/Navbar";
import "./globals.css";

export default function RootLayout({ children, showNavbar = true }) {
  return (
    <html lang="en">
      <body className="">
        <>
          {showNavbar && <Navbar />}
          {children}
        </>
      </body>
    </html>
  );
}
