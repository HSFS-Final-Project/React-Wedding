import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="relative lg:block justify-between items-center container mx-auto mt-5">
        <div className="flex items-center justify-between">
          <div className="">
            <Link to="/" className="text-3xl font-bold text-logoColor">
              Our Wedding
            </Link>
          </div>

          <div className="hidden lg:flex space-x-12">
            <a href="#" className="text-xl text-smallTextColor cursor-pointer">
              Preset/Design
            </a>
            <Link
              to="/Portofolio"
              className="text-xl text-smallTextColor cursor pointer"
            >
              Portofolio
            </Link>
            <a href="#" className="text-xl text-smallTextColor cursor pointer">
              Lainnya
            </a>
          </div>
          <div className="hidden lg:flex flex-row space-x-5">
            <Link
              to="/signuppage"
              className="text-xl text-smallTextColor font-semibold p-3 px-6 pt-2"
            >
              Daftar
            </Link>
            <Link
              to="/signinpage"
              className="text-xl text-white p-3 px-6 pt-2 bg-buttonColor rounded-lg baseline hover:bg-gray md:block"
            >
              Masuk
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
