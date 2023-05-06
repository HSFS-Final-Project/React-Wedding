import React from "react";
import Navbar from "../components/Navbar";
import { Hero, Contacts, Promo, Invitation } from "../layouts/homepage/index";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Promo />
      <Contacts />
      <Invitation />
    </div>
  );
};

export default Homepage;
