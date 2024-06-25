"use client";
import Sidebar from "@/components/Sidebar";
import Table from "@/components/Table";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <main>
      <div className={"fixed top-0 left-0 bg-white/30 w-full backdrop-blur"}>
        <button
          data-drawer-target="logo-sidebar"
          data-drawer-toggle="logo-sidebar"
          aria-controls="logo-sidebar"
          type="button"
          onClick={() => setOpenSidebar(!openSidebar)}
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setOpenSidebar(openSidebar)}
          >
            <path
              clipRule="evexxnodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
      </div>
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
      />

      <div
        className={
          "p-4 h-screen overflow-hidden my-7 sm:my-0" +
          `${isOpen ? " sm:ml-64" : " sm:ml-16"}`
        }
      >
        <Table />
      </div>
    </main>
  );
}
