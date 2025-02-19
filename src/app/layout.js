import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // title: "Now Models",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>Now Models</title>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
