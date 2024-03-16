import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <div className="grid grid-cols-12 gap-6 bg-white">
          <div className="col-span-3 bg-white">
             Sidebar
          </div>
          <div className="col-span-9 bg-white">
              {children}
          </div>
        </div>
      </body>
    </html>
  );
}
