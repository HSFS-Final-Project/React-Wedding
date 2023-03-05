import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="relative container mx-auto mt-5">
        <div className="flex items-center justify-between">
          <div className="">
            <h1 className="text-3xl font-bold text-logoColor">Our Wedding</h1>
          </div>

          <div className="hidden lg:flex space-x-12">
            <a href="#" className="text-xl text-smallTextColor cursor-pointer">
              Preset/Design
            </a>
            <a href="#" className="text-xl text-smallTextColor cursor pointer">
              Portofolio
            </a>
            <a href="#" className="text-xl text-smallTextColor cursor pointer">
              Lainnya
            </a>
          </div>
          <div className="hidden lg:flex flex-row space-x-5">
            <a href="/src/form-page.html" className="text-xl text-smallTextColor font-semibold p-3 px-6 pt-2">
              Daftar
            </a>
            <a href="#" className="text-xl text-white p-3 px-6 pt-2 bg-buttonColor rounded-lg baseline hover:bg-gray md:block">
              Masuk
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
