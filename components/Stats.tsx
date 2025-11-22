import { useFileContext } from "@/data/file-context";
import { useTheme } from "next-themes";

export default function Stats() {
  const { processedLines, cardType } = useFileContext();
  const { theme } = useTheme();
  const themedTextColors =
    theme === "dark" ? ["text-yellow-200"] : ["text-yellow-700"];

  const totalCards = processedLines ? processedLines.length - 1 : 0; // Exclude header row
  const noCorrectCards =
    (cardType === "multiple-choice" &&
      processedLines
        ?.slice(1)
        .filter((row) => !row[row.length - 1].includes("1"))?.length) ||
    0;
  const emptyCards =
    processedLines
      ?.slice(1)
      .filter((row) => row.some((cell) => cell.trim() === ""))?.length || 0;
  const warningCards = noCorrectCards + emptyCards;
  return (
    <div>
      <div className="font-bold">Total Cards: {totalCards}</div>
      {warningCards ? (
        <div className={themedTextColors[0]}>
          {cardType && (
            <div>⚠️ {noCorrectCards} card(s) with no correct answers</div>
          )}
          <div>⚠️ {emptyCards} card(s) with empty fields</div>
        </div>
      ) : null}
    </div>
  );
}
