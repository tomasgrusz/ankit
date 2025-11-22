"use client";
import { AppSidebar } from "@/components/Sidebar";
import Table from "@/components/Table";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Spinner } from "@/components/ui/spinner";
import { useFileContext } from "@/data/file-context";

export default function PageContent() {
  const { processedLines, isLoading } = useFileContext();
  return (
    <div>
      <main className="page-content w-screen h-screen">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={20} minSize={15}>
            <AppSidebar />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={80} minSize={20}>
            <div className="p-4 w-full max-w-full h-full max-h-full overflow-scroll">
              {processedLines && !isLoading && <Table data={processedLines} />}
              {isLoading && (
                <div className="w-full h-full overflow-hidden flex justify-center items-center">
                  <Spinner className="w-[50%] h-4 ml-[25%] mr-[25%] size-8" />
                </div>
              )}
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </div>
  );
}
