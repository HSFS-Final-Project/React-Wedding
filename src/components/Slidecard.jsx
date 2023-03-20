import React from "react";
import { BsStarFill } from "react-icons/bs";
import ReviewUserData from "./ReviewUserData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slidecard = () => {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="flex flex-col my-36 justify-center w-full px-[10%] gap-2">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-extrabold text-gray-700">Portofolio</h1>
          <p>
            <span className="text-red-500 text-2xl font-extrabold">
              25.328 pasangan
            </span>{" "}
            yang berbahagia sudah membuat undangnya. Giliran kamu untuk mencoba
            :)
          </p>
        </div>
        <Slider {...settings}>
          {ReviewUserData.map(({ id, img1, img2, review, tgl, Coment }) => (
            <div key={id}>
              <div className="p-5 rounded-2xl h-56 shadow-md my-10 mx-1">
                <div className="flex">
                  <img
                    className="w-8 rounded-[50%] border-2"
                    src={img1}
                    alt=""
                  />
                  <img
                    className="w-8 rounded-[50%] border-2"
                    src={img2}
                    alt=""
                  />
                </div>
                <div>
                  <h1>
                    dari{" "}
                    <span className="font-bold text-red-500">{review}</span>
                  </h1>
                  <p className="text-[13.5px] text-gray-600">{tgl}</p>
                </div>
                <div className="flex text-yellow-300 gap-1">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </div>
                <div className="my-3 h-[5.5rem] overflow-auto">
                  <p>{Coment}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Slidecard;
