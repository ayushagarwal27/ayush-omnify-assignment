import React, { FC, useState } from "react";
import Image from "next/image";
import sidebarIcon from "../assets/images/sidebar-icon.png";

interface FilterModalProps {
  setIsFilterOpen: (val: boolean) => void;
}

const ScheduledDate = () => {
  return (
    <div className={"flex flex-col p-4 gap-5 text-[16px]"}>
      <div className={"flex flex-col gap-1"}>
        <p className={"w-[200px]"}>Show orders for</p>
        <select
          className={"border border-gray-600 px-4 py-2 w-[200px] rounded-md"}
        >
          <option value={"all"}>All</option>
        </select>
      </div>

      <div className={"flex flex-col sm:flex-row gap-4"}>
        <div>
          <label htmlFor="from" className={"text-[16px] mb-1"}>
            From:
          </label>
          <input
            type="date"
            id="from"
            name="from"
            placeholder={"Pick a date"}
            className={
              "border  text-[14px] border-gray-600 px-4 py-2 rounded-md"
            }
          />
        </div>{" "}
        <div>
          <label htmlFor="from" className={"text-[16px] mb-1"}>
            To:
          </label>
          <input
            type="date"
            id="from"
            name="from"
            placeholder={"Pick a date"}
            className={
              "border text-[14px] border-gray-600 px-4 py-2 rounded-md"
            }
          />
        </div>
      </div>
    </div>
  );
};

const FilterModal: FC<FilterModalProps> = ({ setIsFilterOpen }) => {
  const [selectedTab, setSelectedTab] = useState<string | null>(null);

  const modalData = [
    { icon: sidebarIcon, label: "Scheduled Date" },
    { icon: sidebarIcon, label: "People" },
    { icon: sidebarIcon, label: "Services / Products" },
  ];

  return (
    <div className="absolute  border-[1px] border-gray-300 bg-white rounded-lg inset-0  sm:top-[20vh] sm:left-[18rem] lg:left-[30vw]  xl:left-[20vw]  sm:h-[400px]   sm:w-[612px]">
      <div className={"h-full flex flex-col"}>
        <div className={"grid grid-cols-12 h-full"}>
          <div
            className={
              "bg-gray-100 h-[50%] p-6 sm:h-full col-span-12 sm:col-span-4 sm:p-2 sm:pr-1 flex flex-col gap-2 border-r border-gray-200"
            }
          >
            <div
              className={
                "absolute top-5 bg-black rounded-full text-white right-4 w-4 p-[13px] h-4 flex justify-center items-center cursor-pointer text-[18px] sm:hidden"
              }
              onClick={() => setIsFilterOpen(false)}
            >
              X
            </div>
            {modalData.map((data) => (
              <div
                className={
                  "flex items-center gap-2 p-1  hover:bg-gray-300 rounded" +
                  ` ${selectedTab === data.label && "bg-gray-300"}`
                }
                key={data.label}
                onClick={() => setSelectedTab(data.label)}
              >
                <Image src={data.icon} alt={"icon"} width={18} height={18} />
                <p className={"text-[16px]"}>{data.label}</p>
              </div>
            ))}
          </div>
          <div className={"w-full p-5 sm:p-2"}>
            {selectedTab === "Scheduled Date" && <ScheduledDate />}
          </div>
        </div>
        <div
          className={
            "flex flex-col sm:flex-row bg-white gap-2 justify-end p-6  sm:p-2 border-t border-gray-200"
          }
        >
          <button
            className={"px-4 py-1 sm:py-2 bg-gray-200 text-[16px] rounded-lg"}
          >
            Reset to Default
          </button>
          <button
            className={
              "px-4 py-1 bg-black text-white min-w-36 border border-gray-400 text-[16px] rounded-lg"
            }
            onClick={() => {
              setIsFilterOpen(false);
            }}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
