import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Formpage.css";
import Sidebar from "../components/Sidebar";
import NewInvitation from "../components/NewInvitation";

const Dashboard = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="mt-20">
      <div className="container px-8 mx-auto">
        <div className="relative flex flex-wrap">
          <Sidebar setShow={setShow} />

          {show && <NewInvitation />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
