import React, { useEffect, useState } from "react";
import Img from "../assets/FilterData/eka-andy.png";
import Andy from "../assets/FilterData/andy.jpg";
import Eka from "../assets/FilterData/eka.jpg";
import FilterData from "./FilterData";
import { getValue } from "@testing-library/user-event/dist/utils";

const SelectFilter = () => {
  const [dataFilter, Setdatafilter] = useState(FilterData);

  const filderItem = (catItem) => {
    if (!catItem) {
      Setdatafilter(FilterData);
    } else {
      const updateItem = FilterData.filter((elm) => {
        return elm.category === catItem;
      });
      Setdatafilter(updateItem);
    }
  };
  const [dataTerbaru, Setdataterbaru] = useState("terbaru");
  const [dataterpopuler, Setdataterpopuler] = useState("terpopuler");

  const FilderShort = (catShort) => {
    if (catShort === dataTerbaru && catShort !== dataterpopuler) {
      const updateFilter1 = FilterData.sort((a, b) => {
        return a.id - b.id;
      });
      Setdataterbaru(updateFilter1);
    } else {
      const updateFilter2 = FilterData.sort((a, b) => {
        return a.viewUser - b.viewUser;
      });
      Setdataterpopuler(updateFilter2);
    }
  };
  return (
    <div className="mx-14">
      <div>
        <h1 className="text-right text-red-500 font-bold">
          Lihat Semua Testonomial
        </h1>
      </div>
      <div className="flex gap-5 bg-gray-200 p-5 rounded-xl">
        <div className="text-xs w-[50%] md:text-base">
          <h1>Filter Berdasarkan Paket</h1>
          <select
            className="w-full h-[35px] px-2 rounded-md"
            onChange={(e) => filderItem(e.target.value)}
          >
            <option value="">All</option>
            <option value="Basic">Basic</option>
            <option value="Premium">Premium</option>
            <option value="Ekslusif">Eklusif</option>
          </select>
        </div>
        <div className="text-xs w-[50%] md:text-base">
          <h1>Urutkan</h1>
          <select
            className="w-full h-[35px] px-2 rounded-md"
            onChange={(e) => FilderShort(e.target.value)}
          >
            <option value="terbaru">Terbaru</option>
            <option value="terpopuler">Terpopuler</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-3">
          {dataFilter.map(
            ({
              id,
              userImg,
              category,
              img1,
              img2,
              userName,
              viewUser,
              style,
            }) => (
              <div
                key={id}
                className="relative flex flex-col rounded-lg md:w-72 w-80 p-3 shadow-2xl my-5"
              >
                <div className="h-[10%]">
                  <img className="rounded-2xl" src={userImg} alt="" />
                </div>
                <div
                  className={`absolute text-white font-bold w-fit px-6 rounded-tl-2xl rounded-br-2xl ${style}`}
                >
                  <p>{category}</p>
                </div>
                <div className="flex absolute justify-center items-end top-[82%] left-[34%] md:top-[80%] md:left-[34%]">
                  <img className="w-10 rounded-[50%]" src={img1} alt="" />
                  <p>&</p>
                  <img className="w-10 rounded-[50%]" src={img2} alt="" />
                </div>
                <div className="mt-10 flex flex-col justify-center items-center">
                  <p>{userName}</p>
                  <p>{viewUser}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectFilter;
