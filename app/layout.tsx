import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


import SideBar from "./components/SideBar"
import Bar from "./components/Bar"
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Najm's CV",
  description: "Najm's CV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
            <body className={inter.className}>
        <div className="grid grid-cols-12 gap-6 my-14 lg:px-48 px-5 sm:p-20 md:px-32 ">
          <div className="lg:col-span-3 bg-white rounded-2xl col-span-12 text-center p-4">
             <SideBar />
          </div>
          <div className="lg:col-span-9 bg-white rounded-2xl col-span-12 text-center flex flex-col">
              <Navbar />
              <Bar />
              {/* {children} */}
          </div>
        </div>
      </body>
    </html>
  );
}
