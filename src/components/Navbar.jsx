import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const hendleClick = () => setNav(!nav);
  return (
    <div>
      <nav className="relative flex lg:block justify-between items-center container mx-auto mt-5">
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
            <Link to="/signuppage" className="text-xl text-smallTextColor font-semibold p-3 px-6 pt-2">Daftar</Link>
            <Link to="/signinpage" className="text-xl text-white p-3 px-6 pt-2 bg-buttonColor rounded-lg baseline hover:bg-gray md:block">Masuk</Link>
          </div>
        </div>
        <button onClick={hendleClick} className="lg:hidden z-10 ">
          {!nav ? (
            <FaBars className=" bg-pinkColor h-[40px] w-[40px] p-[5px] rounded text-white hover:bg-slate-700" />
          ) : (
            <FaTimes className=" bg-pinkColor h-[40px] w-[40px] p-[5px] rounded text-white hover:bg-slate-700" />
          )}
        </button>
        <div
          className={
            !nav
              ? "hidden"
              : "absolute flex flex-col top-20 left-10 gap-10 shadow-xl w-[85%] rounded-lg p-16 justify-center items-center bg-white z-50"
          }
        >
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
          <div className="lg:flex flex-row space-x-5">
            <a
              href="/src/form-page.html"
              className="text-xl text-smallTextColor font-semibold p-3 px-6 pt-2"
            >
              Daftar
            </a>
            <a
              href="#"
              className="text-xl text-white p-3 px-6 pt-2 bg-buttonColor rounded-lg baseline hover:bg-gray lg:block"
            >
              Masuk
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
