import type { Metadata } from "next";
import { Dancing_Script, Lora } from "next/font/google"; // Import romantic fonts
import "./globals.css";

const dancingScript = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export const metadata: Metadata = {
  title: "A Letter for You",
  description: "Happy Valentine's Day",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dancingScript.variable} ${lora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
