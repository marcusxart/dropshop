/* eslint-disable react/jsx-key */
import { useTable } from "react-table";

const Table = ({ columns, data, onRowClick }) => {
  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className="w-full h-[90%] p-4">
      <div className="overflow-x-auto max-md:w-[22rem]">
        <table {...getTableProps()} className="min-w-full bg-[#0B0B0D] rounded">
          <thead className="bg-[#0b0b0b0d]">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="px-4 py-2 text-left text-gray-50 font-semibold"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className="border-b px-4 hover:bg-gray-800"
                  onClick={() => onRowClick(row.original)}
                >
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      className="px-4 py-[15px] text-gray-400"
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
