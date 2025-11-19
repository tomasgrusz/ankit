import cleanLine from "@/utils/cleanLine";
import convertLinesToMultipleChoice from "@/utils/convertLinesToMultipleChoice";
import convertToCSV from "@/utils/convertToCSV";
import exportCSV from "@/utils/exportCSV";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type FileContextType = {
  content: string | undefined;
  fileName?: string | undefined;
  rawLines?: string[] | undefined;
  processedLines?: string[][] | undefined;
  update: (content: string, fileName?: string) => void;
  clear: () => void;
  setSymbol: (symbol: string) => void;
  setSymbolPosition: (position: SymbolPosition) => void;
  setExportFormat: (format: ExportFormat) => void;
  exportFile: () => void;
};

export type SymbolPosition = "start" | "end" | "anywhere";
export type ExportFormat = "csv" | "apkg";

const FileContext = createContext<FileContextType | undefined>(undefined);

export const FileProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [content, setContent] = useState<string | undefined>(undefined);
  const [fileName, setFileName] = useState<string | undefined>(undefined);
  const [rawLines, setRawLines] = useState<string[] | undefined>(undefined);

  const [symbol, setSymbol] = useState<string>("✓");
  const [symbolPosition, setSymbolPosition] = useState<SymbolPosition>("end");

  const [processedLines, setProcessedLines] = useState<string[][] | undefined>(
    undefined
  );

  const [exportFormat, setExportFormat] = useState<ExportFormat>("csv");

  // Process the raw lines into processed lines
  const process = useCallback(() => {
    if (!rawLines) return;

    const result = convertLinesToMultipleChoice({
      lines: rawLines,
      choicesPerQuestion: 4,
      correctSymbol: symbol,
      symbolPosition: symbolPosition,
    });
    setProcessedLines(result);
  }, [rawLines, symbol, symbolPosition]);

  // Update the content and raw lines when a new file is loaded
  const update = (content: string, name?: string) => {
    setContent(content);
    if (name) {
      setFileName(name);
    }
    const lines = content.split("\n");
    const cleanedLines = lines.map((line) => cleanLine(line));
    setRawLines(cleanedLines);
  };

  // Clear all data
  const clear = useCallback(() => {
    setContent(undefined);
    setFileName(undefined);
    setRawLines(undefined);
    setProcessedLines(undefined);
    setSymbol("✓");
    setSymbolPosition("end");
    setExportFormat("csv");
  }, []);

  // Export the processed lines to the selected format
  const exportFile = useCallback(() => {
    if (!processedLines || !fileName) return;
    if (exportFormat !== "csv") {
      alert("Only CSV export is supported at the moment.");
      return;
    }
    const result = convertToCSV(processedLines);
    exportCSV(result, fileName);
  }, [exportFormat, processedLines, fileName]);

  // Automatically process the file
  useEffect(() => {
    if (rawLines && symbol && symbolPosition) {
      const id = setTimeout(() => {
        process();
      }, 100);
      return () => clearTimeout(id);
    }
  }, [process, symbolPosition, symbol, rawLines]);

  const context = {
    content,
    fileName,
    rawLines,
    processedLines,
    update,
    clear,
    setSymbol,
    setSymbolPosition,
    setExportFormat,
    exportFile: exportFile,
  };

  return (
    <FileContext.Provider value={context}>{children}</FileContext.Provider>
  );
};

export function useFileContext(): FileContextType {
  const ctx = useContext(FileContext);
  if (!ctx) {
    throw new Error("useFileContext must be used within a FileProvider");
  }
  return ctx;
}
