import {
  Table as UITable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
import { useState } from "react";
import { useTheme } from "next-themes";

type TableDemoProps = {
  data: string[][];
};

const ROWS_PER_PAGE = 20;

const Table: React.FC<TableDemoProps> = ({ data }) => {
  const pageCount = Math.ceil(data.length / ROWS_PER_PAGE);
  const [page, setPage] = useState<number>(1);
  const { theme } = useTheme();
  return (
    <>
      {pageCount > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => page > 1 && setPage(page - 1)}
              />
            </PaginationItem>
            {page - 1 > 0 && (
              <PaginationItem>
                <PaginationLink href="#" onClick={() => setPage(1)}>
                  {1}
                </PaginationLink>
              </PaginationItem>
            )}
            {page - 2 > 0 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem
              className={`rounded font-bold ${
                theme === "dark"
                  ? "bg-[rgba(255,255,255,0.1)]"
                  : "bg-[rgba(0,0,0,0.1)]"
              }`}
            >
              <PaginationLink href="#" onClick={() => setPage(page)}>
                {page}
              </PaginationLink>
            </PaginationItem>
            {page + 1 < pageCount && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            {page < pageCount && (
              <PaginationItem>
                <PaginationLink href="#" onClick={() => setPage(pageCount)}>
                  {pageCount}
                </PaginationLink>
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() => page < pageCount && setPage(page + 1)}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
      <UITable className="w-full overflow-scroll">
        <TableHeader>
          <TableRow>
            {data[0].map((header, index) => (
              <TableHead
                className="max-w-[200px] overflow-x-scroll"
                key={index}
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data
            .slice(1 + (page - 1) * ROWS_PER_PAGE, 1 + page * ROWS_PER_PAGE)
            .map((row, rowIndex) => (
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
    </>
  );
};

export default Table;
