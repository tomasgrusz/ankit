import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ankit: Anki Converter",
  description: "Convert text to Anki flashcards easily.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>{children}</body>
    </html>
  );
}
