'use client'
import {
  BarChart2,
  BookCheck,
  CableCar,
  Calendar,
  CircleUserRound,
  Home,
  MessageCircleMore,
  PenLine,
  Wallet,
} from "lucide-react";
import React from "react";

function Sidebar() {
  const sidebar = [
    {
      name: "Dashboard",
      icon: <Home className="text-white" />,
    },
    {
      name: "My Course",
      icon: <BookCheck />,
    },
    {
      name: "Calendar",
      icon: <Calendar />,
    },
    {
      name: "Resource",
      icon: <CableCar />,
    },
    {
      name: "Quiz",
      icon: <PenLine />,
    },
    {
      name: "Message",
      icon: <MessageCircleMore />,
    },
    {
      name: "My Status",
      icon: <BarChart2 />,
    },
    {
      name: "Wallet",
      icon: <Wallet />,
    },
    {
      name: "My Account",
      icon: <CircleUserRound />,
    },
  ];
  return (
    <>
      <div className=" fixed h-full hidden md:flex flex-col top-0 left-0 w-64 bg-purple-700 border-r">
        <div className="flex items-center justify-center h-14 border-b">
          <h1 className="text-xl font-bold text-white">Skillify Admin</h1>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            {sidebar?.map((side: any) => {
              return (
                <>
                  <li>
                    <a
                      href="#"
                      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                    >
                      <span className="inline-flex justify-center items-center ml-4 text-white">
                        {side.icon}
                      </span>
                      <span className="ml-5 text-sm font-normal text-white tracking-wide truncate">
                        {side.name}
                      </span>
                    </a>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
