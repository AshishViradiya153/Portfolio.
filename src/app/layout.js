import Navbar from "@/components/navbar/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <>
          <Navbar />
          {children}
        </>
      </body>
    </html>
  );
}
