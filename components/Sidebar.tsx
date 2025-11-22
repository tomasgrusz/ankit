import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { ImportFileButton } from "./ImportFileButton";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import {
  CardType,
  ExportFormat,
  SymbolPosition,
  useFileContext,
} from "@/data/file-context";
import { Field, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function AppSidebar() {
  const {
    processedLines,
    fileName,
    cardType,
    setCardType,
    setSymbol,
    setSymbolPosition,
    setExportFormat,
    exportFile,
  } = useFileContext();
  return (
    <Sidebar side="right">
      <SidebarHeader>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold">Ankit</h1>
          <ThemeToggle />
        </div>
        <ImportFileButton />
        <Field className="mt-4">
          <FieldLabel htmlFor="card-type-field">Card Type</FieldLabel>
          <Select
            defaultValue="front-back"
            onValueChange={(value) => setCardType(value as CardType)}
          >
            <SelectTrigger id="card-type-select">
              <SelectValue placeholder="front-back" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="front-back">Front/Back</SelectItem>
              <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </SidebarHeader>
      <SidebarContent>
        {fileName && cardType === "multiple-choice" && (
          <SidebarGroup className="flex flex-col gap-4">
            <Field>
              <FieldLabel htmlFor="symbol-input">Symbol</FieldLabel>
              <Input
                id="symbol-input"
                placeholder="✓"
                required
                onChange={(e) => setSymbol(e.target.value)}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="symbol-position-input">
                Symbol Position
              </FieldLabel>
              <Select
                defaultValue="end"
                onValueChange={(value) =>
                  setSymbolPosition(value as SymbolPosition)
                }
              >
                <SelectTrigger id="symbol-position-input">
                  <SelectValue placeholder="End" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="start">Start</SelectItem>
                  <SelectItem value="end">End</SelectItem>
                  <SelectItem value="anywhere">Anywhere</SelectItem>
                </SelectContent>
              </Select>
            </Field>
          </SidebarGroup>
        )}
      </SidebarContent>
      <SidebarFooter>
        {processedLines && (
          <SidebarGroup className="flex flex-col gap-4">
            <Field>
              <FieldLabel htmlFor="export-format-input">Convert to</FieldLabel>
              <Select
                defaultValue="csv"
                onValueChange={(value) =>
                  setExportFormat(value as ExportFormat)
                }
              >
                <SelectTrigger id="export-format-input">
                  <SelectValue placeholder="csv" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="csv">.csv (table format)</SelectItem>
                  <SelectItem value="apkg" disabled>
                    .apkg (Anki format)
                  </SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Button
              variant="default"
              size="sm"
              className="w-full"
              onClick={exportFile}
            >
              Export
            </Button>
          </SidebarGroup>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
