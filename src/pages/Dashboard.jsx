import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Formpage.css";
import Sidebar from "../components/Sidebar";
import NewInvitation from "../components/NewInvitation";
import { SidebarContext } from "../context/SidebarContext";
import MyInvitation from "../components/MyInvitation";
import MyProfile from "../components/MyProfile";
import FormInvitation from "../components/FormInvitation";

const Dashboard = () => {
  const {
    showNewInvitation,
    showMyInvitation,
    showMyProfile,
    createInvitation,
  } = React.useContext(SidebarContext);

  return (
    <div className="mt-20 ml-44">
      <div className="container px-8 mx-auto">
        <div className="relative flex justify-center items-center">
          <Sidebar />
          {showNewInvitation && <NewInvitation />}
          {showMyInvitation && <MyInvitation />}
          {showMyProfile && <MyProfile />}
          {createInvitation && <FormInvitation />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
