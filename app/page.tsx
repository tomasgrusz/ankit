"use client";
import { FileProvider } from "@/data/file-context";
import PageContent from "./page-content";
import { ThemeProvider } from "@/data/theme-context";

export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <FileProvider>
        <PageContent />
      </FileProvider>
    </ThemeProvider>
  );
}
