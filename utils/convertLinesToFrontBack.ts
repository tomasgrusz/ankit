import cleanLine from "./cleanLine";

const convertLinesToFrontBack = (lines: string[]) => {
    const result = [["Front", "Back"]];

    for (let i = 0; i < lines.length; i++) {
        const question = cleanLine(lines[i]);
        if (question.length === 0) {
            continue;
        }
        let answer = cleanLine(lines[i + 1]);
        i++;
        while (answer.length === 0 && i < lines.length) {
            i++;
            answer = cleanLine(lines[i]);
        }
        result.push([question, answer]);
        i++;
    }

    return result;
}

export default convertLinesToFrontBack;