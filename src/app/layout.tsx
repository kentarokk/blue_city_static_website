import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "../components/NavBar/NavBar";
import MouseStalker from "@/components/MouseStalker";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blue city",
  description: "sample static website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <MouseStalker /> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
