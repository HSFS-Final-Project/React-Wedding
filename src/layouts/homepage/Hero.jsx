import React from "react";
import Banner from "../../assets/Wed.png";

const Hero = () => {
  return (
    <div>
      <section className="w-full" id="hero">
        <div className="flex flex-col-reverse lg:flex-row  justify-between items-center">
          <div className="mt-20 p-5 md:p-32 text-start">
            <h1 className="hidden lg:block text-logoColor text-3xl font-bold text-start lg:text-4xl">Website Undangan Pernikahan</h1>

            <h1 className="block lg:hidden text-logoColor text-3xl font-bold text-start lg:text-4xl">
              <span className="font-normal">Website</span>
              <br />
              Undangan Pernikahan
            </h1>

            <div className="hidden lg:block">
              <p className="mt-5 text-[22px]">Masa aktif selamanya dan edit tanpa batas!</p>
              <p className="mt-3 text-[22px] font-medium">Fitur paling lengkap banyak preset siap pakai</p>
            </div>

            <div className="block lg:hidden">
              <p className="mt-5 text-[18px] font-semibold">Fitur paling lengkap banyak preset siap pakai</p>
              <p className="mt-1 text-[18px]">Masa aktif selamanya dan edit tanpa batas!</p>
            </div>
            <button className="bg-buttonColor font-semibold p-5 rounded-2xl text-white mt-5 hover:scale-110 duration-200 shadow-lg">Buat undanganmu sekarang</button>
          </div>

          <div className="">
            <img src={Banner} alt="" class="w-[1020px]" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
