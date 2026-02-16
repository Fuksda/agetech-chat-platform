import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgeTech Directory & Chat",
  description:
    "Explore 300+ agetech companies from the 2025 AgeTech Market Map. Search by category, ask questions, and discover solutions for aging technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
