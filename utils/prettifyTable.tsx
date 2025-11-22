import { CardType } from "@/data/file-context";

const MultipleChoiceTableShowcase: Record<string, string | boolean> = {
  Title: false,
  Question: "Question",
  QType: false,
  Q_1: "Answer 1",
  Q_2: "Answer 2",
  Q_3: "Answer 3",
  Q_4: "Answer 4",
  Q_5: "Answer 5",
  Q_6: "Answer 6",
  Answers: false,
};

const prettifyTable = (table: string[][], cardType: CardType): string[][] => {
  if (cardType === "front-back") {
    return table;
  } else if (cardType === "multiple-choice") {
    const columns = table[0]
      .map((item, index) =>
        MultipleChoiceTableShowcase[item] !== false
          ? {
              name: item,
              index: index,
              newName: MultipleChoiceTableShowcase[item] as string,
            }
          : null
      )
      .filter((idx) => idx !== null);
    const rows = table.slice(1).map((row) =>
      row
        .map((col, index) => {
          const isChoice = table[0][index].includes("Q_");
          if (!isChoice) {
            return col;
          }
          const choiceIndex = isChoice
            ? parseInt(table[0][index].split("_")[1])
            : null;
          const answers = row[row.length - 1]
            .split(" ")
            .map((val) => parseInt(val));
          const isCorrect = answers[choiceIndex || 0 - 1] === 1;
          return isCorrect ? `✅ ${col}` : `❌ ${col}`;
        })
        .filter((_, index) => columns.map((col) => col.index).includes(index))
    );
    const newHeaders = columns.map((col) => col.newName);
    return [newHeaders, ...rows];
  }
  return table;
};

export default prettifyTable;
