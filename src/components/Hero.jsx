import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="w-full" id="hero">
        <div className="flex flex-col sm:flex-col-reverse lg:flex-row justify-between items-center">
          <div className="mt-20 p-5 md:p-32 text-center lg:text-start">
            <h1 className="text-logoColor text-3xl font-bold text-center lg:text-5xl lg:text-left">Website Undangan Pernikahan</h1>
            <p className="mt-5 text-[22px]">Masa aktif selamanya dan edit tanpa batas!</p>
            <p className="mt-3 text-[22px] font-medium">Fitur paling lengkap banyak preset siap pakai</p>

            <button className="bg-buttonColor font-semibold p-5 rounded-2xl text-white mt-5 hover:scale-110 duration-200 shadow-lg">Buat undanganmu sekarang</button>
          </div>

          <div className="">
            <img src={require("../assets/Wed.png")} alt="" class="w-[1020px]" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
