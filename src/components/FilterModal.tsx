import React, { FC, useState } from "react";
import Image from "next/image";
import sidebarIcon from "../assets/images/sidebar-icon.png";
import searchIcon from "@/assets/images/icon/search.png";

interface FilterModalProps {
  setIsFilterOpen: (val: boolean) => void;
}

const radioButtonData = [
  {
    label: "Search by name",
    value: "Search by name",
  },
  {
    label: "Search by tags",
    value: "Search by tags",
  },
];

const ScheduledDate = () => {
  return (
    <div className={"flex flex-col p-4 gap-5 text-[16px]"}>
      <div className={"flex flex-col gap-1"}>
        <p className={"w-[200px]"}>Show orders for</p>
        <select
          className={"border border-gray-600 px-4 py-2 w-[200px] rounded-md"}
        >
          <option value={"all"}>All</option>
          <option value={"custom"}>Custom</option>
          <option value={"last 30 days"}>Last 30 Days</option>
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

const People = () => {
  return (
    <div className={"w-full"}>
      <div className={"relative w-[88%]  mx-auto mt-4 sm:mt-0 sm:mx-0"}>
        <Image
          src={searchIcon}
          width={22}
          height={22}
          alt={"filter-icon"}
          className={"absolute top-[23%] left-[20%]"}
        />
        <input
          type={"text"}
          placeholder={"Search Payer or attendee name"}
          className={
            "px-4 pl-7 py-[8px] border-2 border-gray-300 rounded-md text-[16px] min-w-[350px]"
          }
        />
      </div>

      <div className={"flex flex-col text-[16px] gap-2 mt-3"}>
        <p className={"min-w-[350px]"}>Showing 2 results matching ‘Al’</p>
        <div className={"flex gap-2 items-center"}>
          <input type={"checkbox"} />
          <p>Alan</p>
          <p className={"bg-gray-100 px-1 py-[2px] rounded-md"}>Prayer</p>
        </div>
        <div className={"flex gap-2 items-center"}>
          <input type={"checkbox"} />
          <p>Alex</p>
          <p className={"bg-gray-100 px-1 py-[2px] rounded-md"}>Attendee</p>
        </div>
      </div>
    </div>
  );
};

const ServiceProduct = () => {
  const [radioVal, setRadioVal] = useState("");
  return (
    <div className={"flex flex-col "}>
      <div className={"flex w-[350px] items-center justify-between"}>
        {[""]}
        {radioButtonData.map((radioData) => (
          <div className="flex items-center mb-4" key={radioData.value}>
            <input
              id="default-radio-1"
              type="radio"
              value={radioData.value}
              name="default-radio"
              className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:accent-black"
              onChange={(e) => setRadioVal(e.target.value)}
            />
            <label
              htmlFor="default-radio-1"
              className="ms-2 text-sm font-medium text-gray-900"
            >
              {radioData.label}
            </label>
          </div>
        ))}
      </div>

      {radioVal === "Search by name" && (
        <div className={"w-full"}>
          <div
            className={"relative w-[88%] mb-4  mx-auto mt-4 sm:mt-0 sm:mx-0"}
          >
            <Image
              src={searchIcon}
              width={22}
              height={22}
              alt={"filter-icon"}
              className={"absolute top-[23%] left-[20%]"}
            />
            <input
              type={"text"}
              placeholder={"Search Payer or attendee name"}
              className={
                "px-4 pl-7 py-[8px] border-2 border-gray-300 rounded-md text-[16px] min-w-[350px]"
              }
            />
          </div>

          {
            <div className={"flex flex-col text-[16px] gap-2 mt-3"}>
              <p className={"min-w-[350px]"}>Showing 2 results matching ‘Al’</p>
              <div
                className={"flex gap-2 items-center justify-between w-[350px]"}
              >
                <div className={"flex gap-2"}>
                  <input type={"checkbox"} />
                  <p>National tennis Class</p>
                </div>
                <div className={"flex gap-2"}>
                  <p className={"bg-gray-100 px-1 py-[2px] rounded-md"}>
                    Class
                  </p>
                  <p
                    className={
                      "bg-green-100 px-1 py-[2px] rounded-md text-green-700"
                    }
                  >
                    Public
                  </p>
                </div>
              </div>
              <div
                className={"flex gap-2 items-center justify-between w-[350px]"}
              >
                <div className={"flex gap-2"}>
                  <input type={"checkbox"} />
                  <p>National tennis court </p>
                </div>
                <div className={"flex gap-2 text-[16px]"}>
                  <p className={"bg-gray-100 px-1 py-[2px] rounded-md"}>
                    Facility
                  </p>
                  <p
                    className={
                      "bg-red-100 px-1 py-[2px] rounded-md text-red-700"
                    }
                  >
                    Private
                  </p>
                </div>
              </div>
            </div>
          }
        </div>
      )}

      {radioVal === "Search by tags" && (
        <div className={"flex flex-col gap-4 text-[18px]"}>
          <div className={"flex flex-col gap-1"}>
            <p className={"w-[200px]"}>Service type</p>
            <select
              className={
                "border border-gray-600 px-4 py-2 w-[200px] rounded-md"
              }
            >
              <option value={"Class"}>Class</option>
              <option value={"Facility"}>Facility</option>
              <option value={"Class Pack"}>Class Pack</option>
            </select>
          </div>

          <div className={"flex flex-col gap-1 "}>
            <p className={"w-[200px]"}>Status</p>
            <select
              className={
                "border border-gray-600 px-4 py-2 w-[200px] rounded-md"
              }
            >
              <option value={"Show all"}>Show all</option>
              <option value={"Public"}>Public</option>
              <option value={"Private"}>Private</option>
            </select>
          </div>
        </div>
      )}
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
        <div className={"grid grid-cols-12 md:h-full"}>
          <div
            className={
              "bg-gray-100  p-6  sm:h-full col-span-12 sm:col-span-4 sm:p-2 sm:pr-1 flex flex-col gap-2 border-r border-gray-200"
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
          <div className={"w-full grid-cols-12 p-5 sm:p-2"}>
            {selectedTab === "Scheduled Date" && <ScheduledDate />}
            {selectedTab === "People" && <People />}
            {selectedTab === "Services / Products" && <ServiceProduct />}
          </div>
        </div>
        <div
          className={
            "flex flex-col h-full sm:h-auto sm:flex-row bg-white gap-2 justify-end p-6  sm:p-2 border-t border-gray-200"
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
