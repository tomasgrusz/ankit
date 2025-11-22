import { SymbolPosition } from "@/data/file-context";
import cleanLine from "./cleanLine";

type Props = {
    lines: string[];
    choicesPerQuestion?: 2 | 3 | 4 | 5 | 6;
    correctSymbol: string;
    symbolPosition: SymbolPosition;
};

export const checkCorrectSymbol = (line: string, symbolPosition: SymbolPosition, correctSymbol: string): boolean => {
    if (symbolPosition === "anywhere") {
        return line.includes(correctSymbol);
    } else if (symbolPosition === "start") {
        return line.startsWith(correctSymbol);
    } else { // "end"
        return line.endsWith(correctSymbol);
    }
}

const convertLinesToMultipleChoice: (props: Props) => string[][] = ({ lines, choicesPerQuestion = 4, correctSymbol, symbolPosition }) => {
    const result = [["Title", "Question", "QType", 
        ...Array.from({ length: choicesPerQuestion }, (_, i) => `Q_${i + 1}`),
     "Answers"]]; // CSV headers

    // Process each line
    for (let i = 0; i < lines.length; i++) {
        const question = cleanLine(lines[i].trim());
        if (question && i + 1 < lines.length) {
            const answers = [];
            const correct = [];
            while (true) {
                i++;
                let line = cleanLine(lines[i].trim());
                if (!line) {
                    break;
                }
                if (checkCorrectSymbol(line, symbolPosition, correctSymbol)) {
                    line = line.replace(correctSymbol, "");
                    correct.push("1");
                } else {
                    correct.push("0");
                }
                answers.push(line);
            }
            while (answers.length <= choicesPerQuestion) {
                answers.push("");
            }
            result.push([question, question, "1", ...answers.slice(0, choicesPerQuestion), correct.join(" ")]);
        }
    }

    return result;
};

export default convertLinesToMultipleChoice;