import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/nav/page";

export const metadata: Metadata = {
  title: "Code Chronicles",
  description: "Personal coding journal website",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-stone-300 text-neutral-950 p-5 max-w-[1750px] font-normal mx-auto">
        <Nav></Nav>
        {children}
      </body>
    </html>
  );
}
