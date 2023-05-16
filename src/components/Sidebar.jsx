import React from "react";
const Sidebar = ({ setShow }) => {
  return (
    <div className="fixed left-0 top-0 h-screen lg:basis-1/5 bg-white text-black shadow-md ">
      <div className="w-full p-3 bg-orange-500 shadow-md ">
        <div className="text-2xl text-white font-bold">
          <p>DASHBOARD</p>
        </div>
      </div>
      <div className="text-lg p-5">
        <ul className="flex flex-col gap-3 font-semibold">
          <li
            className="hover:text-orange-500 cursor-pointer"
            onClick={() => setShow(true)}
          >
            New Invitation
          </li>
          <li>My Invitation</li>
          <li>My Profile</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
