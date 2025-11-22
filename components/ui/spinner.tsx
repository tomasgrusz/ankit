import { cn } from "@/lib/utils";
import { BlocksWaveIcon } from "./icons/svg-spinners-blocks-wave";

function Spinner({ className }: React.ComponentProps<"svg">) {
  return (
    <BlocksWaveIcon
      role="status"
      aria-label="Loading"
      className={cn("size-4", className)}
    />
  );
}

export { Spinner };
