import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";
import Sidebar from "./components/SideBar";
import BootstrapClient from "./components/BoostrapClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{ display: 'flex'}}>
          <Sidebar />
          <main style={{ flex: 1 }}>
            {children}
          </main>
        </div>
        <BootstrapClient />
      </body>
    </html>
  );
}