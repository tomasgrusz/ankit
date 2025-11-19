"use client";
import { AppSidebar } from "@/components/Sidebar";
import Table from "@/components/Table";
import { useFileContext } from "@/data/file-context";

export default function PageContent() {
  const { processedLines } = useFileContext();
  return (
    <div>
      <AppSidebar />
      <main className="page-content">
        {processedLines && <Table data={processedLines} />}
      </main>
    </div>
  );
}
