export default function cleanLine(line: string): string {
    return line.replace(/\*\*/g, '')
    .replace(/^\s+/, '') // remove leading spaces
    .replace(/^\s*([a-zA-Z]\))?/, '') // remove leading spaces and letter with closing bracket
    // e.g. a) Answer 1 -> Answer 1
    .trim(); // remove trailing spaces
}