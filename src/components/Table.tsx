"use client";
import React, { useState } from "react";
import { columnHeaders, tableData } from "@/data";
import ColumnSelectModal from "@/components/ColumnSelectModal";
import FilterModal from "@/components/FilterModal";
import filterIcon from "../assets/images/icon/filter.png";
import refreshIcon from "../assets/images/icon/refresh-ccw.png";
import downloadIcon from "../assets/images/icon/download.png";
import columnIcon from "../assets/images/icon/columns.png";
import searchIcon from "../assets/images/icon/search.png";

import Image from "next/image";
import Link from "next/link";

const Table = () => {
  const [columns, setColumns] = useState(columnHeaders);
  const [isColumnModalOpened, setIsColumnModalOpened] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  function getBgColor(status: string) {
    if (status === "Active") return "bg-green-300";
    if (status === "Lead") return "bg-blue-300";
    if (status === "Inactive") return "bg-gray-300";
  }
  function getBgColorDark(status: string) {
    if (status === "Active") return "bg-green-800";
    if (status === "Lead") return "bg-blue-800";
    if (status === "Inactive") return "bg-gray-800";
  }
  function getColor(status: string) {
    if (status === "Active") return "green";
    if (status === "Lead") return "blue";
    if (status === "Inactive") return "gray";
  }

  return (
    <div>
      <h2 className={"text-xl font-bold text-gray-600"}>Waitlist</h2>

      <div
        className={
          "flex flex-col mx-auto sm:mx-0 sm:flex-row gap-4 w-[90%] mb-4 mt-6 "
        }
      >
        <p
          className={
            "p-[10px] text-[16px] border border-gray-400 rounded-lg w-full"
          }
        >
          All Waitlists{" "}
          <span className={"text-gray-500 text-[16px] ml-1"}>50</span>
        </p>{" "}
        <p
          className={
            "p-[10px]  text-[16px]  border border-gray-300 rounded-lg w-full"
          }
        >
          Newly Added
          <span className={"text-gray-500 text-[16px] ml-1"}>50</span>
        </p>{" "}
        <p
          className={
            "p-[10px] border text-[16px]  border-gray-300 rounded-lg w-full"
          }
        >
          Leads <span className={"text-gray-500 text-[16px] ml-1"}>50</span>
        </p>
      </div>
      <div
        className={
          "flex flex-col justify-center lg:flex-row lg:justify-between mb-[12px]"
        }
      >
        <div
          className={
            "flex justify-center gap-[6px] bg-gray-200 px-[6px] py-[10px] w-[88%]  mx-auto sm:ml-0  sm:w-fit rounded-lg hover:bg-gray-300 cursor-pointer"
          }
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          {/*<Image src={arr} />*/}
          <Image src={filterIcon} width={16} height={16} alt={"filter-icon"} />
          <p className={"text-[12px] w-fit"}>Add Filter</p>
        </div>

        <div className={"flex flex-col sm:flex-row gap-4"}>
          <div className={"relative w-[88%]  mx-auto mt-4 sm:mt-0 sm:mx-0"}>
            <Image
              src={searchIcon}
              width={16}
              height={16}
              alt={"filter-icon"}
              className={"absolute top-[23%] left-[5%]"}
            />
            <input
              type={"text"}
              placeholder={"Search client"}
              className={
                "px-4 pl-7 py-[8px] shadow rounded text-[16px] w-full sm:w-fit"
              }
            />
          </div>

          <div className={"flex gap-2 justify-center"}>
            <div
              className={
                "bg-white p-2 border border-gray-400 rounded cursor-pointer w-8 h-8 flex justify-center items-center "
              }
            >
              <Image
                src={refreshIcon}
                alt={"refresh-icon"}
                className={"w-full h-full"}
                fill={false}
              />
            </div>
            <div
              className={
                "bg-white p-2 border border-gray-400 rounded cursor-pointer w-8 h-8 flex justify-center items-center "
              }
              onClick={() => setIsColumnModalOpened(!isColumnModalOpened)}
            >
              <Image
                src={columnIcon}
                alt={"refresh-icon"}
                className={"w-full h-full"}
                fill={false}
              />
            </div>
            <div
              className={
                "bg-white p-2 border border-gray-400 rounded cursor-pointer w-8 h-8 flex justify-center items-center "
              }
            >
              <Image
                src={downloadIcon}
                alt={"refresh-icon"}
                className={"w-full h-full"}
                fill={false}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative sm:rounded-lg flex flex-col justify-between overflow-hidden">
        <div
          className={
            "overflow-scroll h-[calc(100vh-550px)] sm:h-[calc(100vh-280px)]"
          }
        >
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 shadow-md relative">
            <thead className="text-xs text-gray-500 capitalize bg-gray-50 sticky top-0">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                {columns.map((col) => {
                  if (!col.checked) {
                    return <></>;
                  }

                  return (
                    <th scope="col" className="px-6 py-3" key={col.label}>
                      {col.label}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {tableData.map((tData, index) => {
                return (
                  <tr
                    className="bg-white border-b hover:bg-gray-50"
                    key={index}
                  >
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 "
                        />
                        <label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    {Object.entries(tData).map((entry, idx) => {
                      if (!columns[idx].checked) {
                        return null;
                      }

                      return (
                        <td
                          className={
                            "px-4 py-1 text-[14px] text-black text-nowrap"
                          }
                          key={idx}
                        >
                          <span
                            className={` ${
                              entry[0] === "status" &&
                              getBgColor(entry[1]) +
                                " py-[2px] px-2 rounded-full flex items-center gap-1"
                            }`}
                          >
                            <span
                              className={
                                "h-1 w-1 bg-black rounded-full" +
                                ` ${
                                  entry[0] === "status" &&
                                  getBgColorDark(entry[1]) +
                                    " inline-block" +
                                    ` text-${getColor(entry[1])}-500`
                                }`
                              }
                            />
                            {entry[1]}
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <nav
          className="flex items-center flex-column  flex-wrap md:flex-row justify-between p-4"
          aria-label="Table navigation"
        >
          <span className="text-center sm:text-left text-sm font-normal text-gray-500 mb-2 sm:mb-4 md:mb-0 block w-full md:inline md:w-auto">
            Showing <span className="font-semibold text-gray-900">1-10</span> of{" "}
            <span className="font-semibold text-gray-900">1000</span>
          </span>
          <ul className="inline-flex mx-auto sm:mx-0 -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 "
              >
                Previous
              </a>
            </li>
            <li>
              <Link
                href="/"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                1
              </Link>
            </li>{" "}
            <li>
              <Link
                href="/"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                2
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
              >
                Next
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {isColumnModalOpened && (
        <ColumnSelectModal
          columns={columns}
          setColumns={setColumns}
          setIsColumnModalOpened={setIsColumnModalOpened}
        />
      )}
      {isFilterOpen && <FilterModal setIsFilterOpen={setIsFilterOpen} />}
    </div>
  );
};

export default Table;
