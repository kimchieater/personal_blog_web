import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/nav/page";
import Footer from "./components/footer/page";




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
      <body className="bg-stone-300 min-h-screen text-neutral-950 p-5 mx-auto xs:max-w-[475px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] w-[90%]">
        <Nav></Nav>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
