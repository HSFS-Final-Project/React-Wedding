import React from "react";

const Promo = () => {
  return (
    <div>
      <section class="w-full flex flex-wrap justify-center gap-10 mt-20">
        <img src={require("../assets/Filter.png")} alt="" class="w-[350px] lg:w-[600px] rounded-lg shadow-lg transform duration-200 hover:scale-110 cursor-pointer" />
        <img src={require("../assets/Undangan.png")} alt="" class="w-[350px] lg:w-[600px] rounded-lg shadow-lg transform duration-200 hover:scale-110 cursor-pointer" />
        <img src={require("../assets/Sale.png")} alt="" class="w-[350px] lg:w-[600px] rounded-lg shadow-lg transform duration-200 hover:scale-110 cursor-pointer" />
      </section>
    </div>
  );
};

export default Promo;
