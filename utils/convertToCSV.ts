export default function convertToCSV(data: string[][]): string {
  return data
    .map((row) =>
      row.map((item) => `"${item}"`).join(";")
    )
    .join("\n");
};