import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
    <html lang="en" style={{ margin: 0, padding: 0, boxSizing: 'border-box', backgroundColor: 'rgb(37,42,51)'}}>
      <body className={inter.className} style={{ margin: 0, padding: 0, boxSizing: 'border-box' }}>
        <main style={{ 
          flex: 1, 
          width: '100%',
          margin: '0 auto',
          boxSizing: 'border-box'
        }}>
          {children}
        </main>
      </body>
    </html>
  );
}