import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Container from "./container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xpenses",
  description: "Keep track of your Xpenses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen flex bg-black`}>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
