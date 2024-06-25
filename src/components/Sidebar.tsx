"use client";
import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import SideBarImage from "../assets/images/sidebar-image.png";
import SideBarCollapseIcon from "../assets/images/sidebar-icon.png";
import arrowLeftRight from "../assets/images/icon/arrow-left-right.png";
import dashboardIcon from "../assets/images/icon/layout-dashboard.png";
import avatar from "../assets/images/icon/Ellipse 1.png";
import helpIcon from "../assets/images/icon/help-circle.png";
import subscriptionIcon from "../assets/images/icon/Frame.png";
import orderIcon from "../assets/images/icon/inbox.png";
import calendarIcon from "../assets/images/icon/calendar-days.png";
import waitlistIcon from "../assets/images/icon/hourglass.png";
import secondaryIcon from "../assets/images/icon/secondary icon.png";

const sidebarData = {
  tabData: [
    { icon: orderIcon, label: "Orders" },
    { icon: subscriptionIcon, label: "Subscriptions" },
    { icon: calendarIcon, label: "Calendar" },
    { icon: waitlistIcon, label: "Waitlist" },
  ],
};

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  setOpenSidebar: (state: boolean) => void;
  openSidebar: boolean;
}

const Sidebar: FC<SidebarProps> = ({
  isOpen,
  setIsOpen,
  openSidebar,
  setOpenSidebar,
}) => {
  return (
    <aside
      id="logo-sidebar"
      className={
        "fixed top-0  left-0 z-40 h-screen transition-transform  sm:translate-x-0" +
        `${openSidebar ? " translate-x-0" : " -translate-x-full "}` +
        `${isOpen ? " w-64" : " w-20"}`
      }
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
        <div className="flex justify-between items-center ps-2.5 mb-5">
          <div className={"flex items-center"}>
            <Image
              src={SideBarImage}
              className="h-6 w-6 object-cover cursor-pointer"
              alt="Logo"
              fill={false}
              onClick={() => {
                if (!isOpen) {
                  setIsOpen(true);
                }
              }}
            />
            {isOpen && (
              <span className="text-black font-bold ml-2">Front·Desk</span>
            )}
          </div>
          {isOpen && (
            <Image
              src={SideBarCollapseIcon}
              className="h-4 w-4 object-cover cursor-pointer"
              alt="Logo"
              fill={false}
              onClick={() => {
                if (openSidebar) {
                  setOpenSidebar(false);
                  return;
                }
                setIsOpen(!isOpen);
              }}
            />
          )}
        </div>
        <div className={"flex flex-col justify-between min-h-[75%]"}>
          <ul className="text-black">
            <li
              className={
                "bg-white py-2 px-3 shadow rounded-[6px] flex items-center mb-6"
              }
            >
              {isOpen && (
                <Link href={""} className={"text-[16px]"}>
                  Location Name
                </Link>
              )}
              <Image
                src={arrowLeftRight}
                className="h-4 w-4 ml-auto object-cover cursor-pointer"
                alt="Logo"
                fill={false}
              />
            </li>
            {sidebarData.tabData.map((tab) => (
              <li
                className={
                  "py-2 px-3 flex items-center hover:bg-white rounded-[6px] hover:shadow"
                }
                key={tab.label}
              >
                <Image
                  src={tab.icon}
                  className="h-4 w-4 mr-2 object-cover cursor-pointer"
                  alt="Logo"
                  fill={false}
                />
                {isOpen && (
                  <Link href={""} className={"text-[16px]"}>
                    {tab.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <ul className={"text-black absolute bottom-[20px] left-[20px] "}>
            <li
              className={
                "py-2 px-3 flex items-center hover:bg-white rounded-[6px] hover:shadow"
              }
            >
              <Image
                src={dashboardIcon}
                className="h-4 w-4 mr-2 object-cover cursor-pointer"
                alt="Logo"
                fill={false}
              />
              {isOpen && (
                <Link href={""} className={"text-[16px]"}>
                  Dashboard
                </Link>
              )}
              {isOpen && (
                <Image
                  src={secondaryIcon}
                  className="h-4 w-4 mr-2 ml-auto object-cover cursor-pointer"
                  alt="Logo"
                  fill={false}
                />
              )}
            </li>
            <li
              className={
                "py-2 px-3 flex items-center hover:bg-white rounded-[6px] hover:shadow mt-8"
              }
            >
              <Image
                src={avatar}
                className="h-7 w-7 mr-2 object-cover cursor-pointer rounded-full self-start mt-1 -ml-1"
                alt="Logo"
                fill={false}
              />

              {isOpen && (
                <div>
                  <p className={"text-[16px]"}>Admin name</p>
                  <p className={"text-gray-600 text-[16px]"}>
                    adminname@mail.com
                  </p>
                </div>
              )}
              {isOpen && (
                <Image
                  src={arrowLeftRight}
                  className="h-4 w-4 mr-2  ml-[20px] object-cover cursor-pointer rounded-full"
                  alt="Logo"
                  fill={false}
                />
              )}
            </li>
            <li
              className={
                "py-2 px-3 flex items-center hover:bg-white rounded-[6px] hover:shadow mt-[6px]"
              }
            >
              <Image
                src={helpIcon}
                className="h-5 w-5 mr-2 object-cover cursor-pointer rounded-full self-start mt-1"
                alt="Logo"
                fill={false}
              />

              {isOpen && (
                <div>
                  <p className={"text-[16px]"}>Help center</p>
                  <p className={"text-gray-600 text-[14px]"}>
                    @2024 Omnify.Inc.
                  </p>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
