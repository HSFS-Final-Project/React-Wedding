import React from "react";
import { SidebarContext } from "../context/SidebarContext";
const Sidebar = () => {
  const { hendleNewInvitation, hendleMyInvitation, hendleMyProfile } =
    React.useContext(SidebarContext);
  return (
    <div className="fixed left-0 top-0 h-screen lg:basis-1/5 bg-white text-black shadow-md ">
      <div className="w-full p-3 bg-orange-500 shadow-md ">
        <div className="text-2xl text-white font-bold">
          <p>DASHBOARD</p>
        </div>
      </div>
      <div className="text-lg p-5">
        <ul className="flex flex-col gap-3 font-semibold">
          <div className="relative group">
            <li
              className="hover:text-gray-600 cursor-pointer group"
              onClick={hendleNewInvitation}
            >
              New Invitation
            </li>
            <div className="flex w-full">
              <span className="absolute top-6 bg-orange-500 h-[2px] w-5 group-hover:w-[120px] duration-300" />
            </div>
          </div>
          <div className="relative group">
            <li
              className="hover:text-gray-600 cursor-pointer group"
              onClick={hendleMyInvitation}
            >
              My Invitation
            </li>
            <div className="flex w-full">
              <span className="absolute top-6 bg-orange-500 h-[2px] w-4 group-hover:w-[108px] duration-300" />
            </div>
          </div>
          <div className="relative group">
            <li
              className="hover:text-gray-600 cursor-pointer group"
              onClick={hendleMyProfile}
            >
              My Profile
            </li>
            <div className="flex w-full">
              <span className="absolute top-6 bg-orange-500 h-[2px] w-4 group-hover:w-[83px] duration-300" />
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
