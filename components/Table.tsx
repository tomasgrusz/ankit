import {
  Table as UITable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type TableDemoProps = {
  data: string[][];
};

const Table: React.FC<TableDemoProps> = ({ data }) => {
  return (
    <UITable className="w-full overflow-scroll">
      <TableHeader>
        <TableRow>
          {data[0].map((header, index) => (
            <TableHead className="max-w-[200px] overflow-x-scroll" key={index}>
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.slice(1).map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <TableCell
                className="max-w-[200px] overflow-x-scroll"
                key={cellIndex}
              >
                {cell}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </UITable>
  );
};

export default Table;
