import React from "react";
import ImgSec4 from "../../assets/animations/sec4.svg";
import Pic1 from "../../assets/inv1.png";
import Pic2 from "../../assets/inv2.png";
import Pic3 from "../../assets/inv3.png";
import Pic4 from "../../assets/inv4.png";
const Invitation = () => {
  return (
    <div className="w-full my-20">
      <div className="flex flex-wrap px-20 lg:px-56 justify-center items-center gap-10">
        <div>
          <img src={ImgSec4} alt="image" className="w-[650px]" />
        </div>

        <div>
          <p className="text-red-500 text-[20px] lg:text-[30px] font-bold text-center lg:text-start">
            25.160
            <span className="text-black"> Undangan Aktif</span>
          </p>
          <p className="text-center lg:text-start text-[14px] lg:text-[17px]">banyak pasangan berbahagia sudah membuat undangnya. giliran kamu untuk mencoba :) </p>
          <div className="flex flex-row gap-5 mt-7 justify-center">
            <img src={Pic1} alt="" className="w-[70px] md:w-[90px] lg:w-[170px] rounded-xl shadow-md" />
            <img src={Pic2} alt="" className="w-[70px] md:w-[90px] lg:w-[170px] rounded-xl shadow-md" />
            <img src={Pic3} alt="" className="w-[70px] md:w-[90px] lg:w-[170px] rounded-xl shadow-md" />
            <img src={Pic4} alt="" className="w-[70px] md:w-[90px] lg:w-[170px] rounded-xl shadow-md" />
          </div>
          <div className="flex flex-wrap mt-5 gap-5">
            <button className="p-5 bg-red-500 text-white rounded-xl shadow-md font-bold">Lihat lebih banyak Portofolio</button>
            <button className="p-5 bg-white border border-red-500 text-red-500 font-bold rounded-xl shadow-md">Buka Undanganmu sekarang, Gratis!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invitation;
