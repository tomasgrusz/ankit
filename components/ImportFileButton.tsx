import { useFileContext } from "@/data/file-context";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

export const ImportFileButton: React.FC = () => {
  const { fileName, update, clear } = useFileContext();
  return (
    <div className="grid w-full max-w-sm items-center gap-3">
      <div className="flex items-center justify-between">
        <Label htmlFor="file-upload">Text file</Label>
        {fileName && (
          <Button
            className="cursor-pointer p-0 text-sm h-auto"
            variant="link"
            onClick={() => {
              const input = document.getElementById(
                "file-upload"
              ) as HTMLInputElement | null;
              if (input) (input as HTMLInputElement).value = "";
              clear();
            }}
          >
            Clear
          </Button>
        )}
      </div>
      <Input
        id="file-upload"
        type="file"
        accept=".txt"
        onChange={async (e) => {
          const file = e.target.files?.[0];
          if (file) {
            const content = await file.text();
            update(content, file.name);
          }
        }}
      />
    </div>
  );
};
