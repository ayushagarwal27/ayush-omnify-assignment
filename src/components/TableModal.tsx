import React, { FC, useState } from "react";
import { columnHeaders } from "@/data";

type Columns = { icon: string; label: string; checked: boolean };

interface TableModalProps {
  columns: Columns[];
  setColumns: (columns: Columns[]) => void;
  setIsColumnModalOpened: (value: boolean) => void;
}
const TableModal: FC<TableModalProps> = ({
  columns,
  setColumns,
  setIsColumnModalOpened,
}) => {
  const [changedColumnData, setChangedColumnData] = useState<
    { index: number; state: boolean }[]
  >([]);

  function handleChangeColumn(isDefault = false) {
    if (isDefault) {
      const nextColumn = [...columnHeaders];
      setColumns(nextColumn);
      setChangedColumnData([]);
      setIsColumnModalOpened(false);
      return;
    }

    const nextColumn = [...columns];
    if (changedColumnData.length > 0) {
      changedColumnData.forEach((col) => {
        nextColumn[col.index].checked = col.state;
      });
    }
    setColumns(nextColumn);
    setIsColumnModalOpened(false);
  }

  return (
    <div className="absolute maw-w-[320px] border-[1px] border-gray-300 bg-white rounded-lg  bottom-[5%] right-[2%] p-4 w-full max-w-md max-h-full">
      <div className="bg-white rounded-lg">
        <div className="flex flex-col justify-center gap-2 p-4 md:p-5 border-b rounded-t">
          <h3 className="text-lg font-semibold text-gray-900">Edit Columns</h3>
          <p className={"text-gray-500"}>Select the columns to rearrange</p>
        </div>
        <div className={"flex flex-col gap-2"}>
          {columns.map((column, idx) => (
            <div className={"flex items-center gap-2"} key={column.label}>
              <input
                id="default-checkbox"
                type="checkbox"
                checked={
                  changedColumnData.find((col) => col.index === idx)
                    ? changedColumnData.find((col) => col.index === idx)?.state
                    : column.checked
                }
                value={column.label}
                className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded accent-black"
                onChange={(e) => {
                  const data = changedColumnData.findIndex(
                    (col) => col.index === idx
                  );

                  const nextColumn = [...changedColumnData];
                  if (data !== -1) {
                    nextColumn[data].state = e.target.checked;
                    return;
                  }

                  setChangedColumnData([
                    ...changedColumnData,
                    { index: idx, state: e.target.checked },
                  ]);
                }}
              />
              <p className={"p-1 px-2 border border-gray-300 flex-1 rounded"}>
                {column.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className={"flex flex-col sm:flex-row gap-2 justify-between m-3"}>
        <button
          className={
            "px-5 py-2 bg-white border border-gray-400 text-[16px] rounded-lg"
          }
          onClick={() => handleChangeColumn(true)}
        >
          Reset to Default
        </button>
        <button
          className={
            "px-5 py-2 bg-black text-white min-w-36 border border-gray-400 text-[16px] rounded-lg"
          }
          onClick={() => handleChangeColumn(false)}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default TableModal;
