import React from "react";
import { FaFacebookSquare, FaWhatsappSquare, FaInstagramSquare } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { RiMailSendLine } from "react-icons/ri";
import { HiOutlineNewspaper } from "react-icons/hi";
import { BiBook } from "react-icons/bi";

const Contacts = () => {
  return (
    <div>
      <div className="p-10 lg:p-36 w-full mt-10 flex flex-col lg:flex-row gap-20 items-center justify-evenly bg-[#fdeded]">
        {/* Left */}
        <div>
          <h1 className="text-[20px] lg:text-[40px] font-bold text-red-400 text-center lg:text-start">No. 1 Platform</h1>
          <p className="mt-0 lg:mt-5 text-[20px] lg:text-[28px] text-center lg:text-start font-medium">Website Undangan Pernikahan</p>
          <p className="mt-3 text-[15px] lg:text-[22px] text-center lg:text-start">
            Buat website undangan pernikahanmu secara ekslusif dengan mudah, murah dan cepat.
            <br />
            Solusi website undangan pernikahan kamu jadi lebih berkesan!
          </p>

          <div className="hidden md:flex flex-wrap gap-4">
            <p className="font-semibold text-[22px] mt-5">Temukan Kami:</p>

            <div className="flex flex-row gap-1 mt-5 items-center">
              <FaWhatsappSquare className="text-[24px] text-gray-500" />
              <p className="text-[20px] text-gray-500">Whatsapp</p>
            </div>
            <div className="flex flex-row gap-1 mt-5 items-center">
              <FaFacebookSquare className="text-[24px] text-gray-500" />
              <p className="text-[20px] text-gray-500">Facebook</p>
            </div>
            <div className="flex flex-row gap-1 mt-5 items-center">
              <FaInstagramSquare className="text-[24px] text-gray-500" />
              <p className="text-[20px] text-gray-500">Instagram</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-col">
          <div className="flex flex-wrap lg:hidden gap-1  items-center mt-7">
            <p className="font-semibold text-[12px] lg:text-[22px]">Temukan Kami:</p>

            {/* Contacts */}
            <div className="flex flex-row gap-1 items-center">
              <FaWhatsappSquare className="text-[20px] text-gray-500" />
              <p className="text-[12px] text-gray-500">Whatsapp</p>
            </div>
            <div className="flex flex-row gap-1  items-center">
              <FaFacebookSquare className="text-[20px] text-gray-500" />
              <p className="text-[12px] text-gray-500">Facebook</p>
            </div>
            <div className="flex flex-row gap-1  items-center">
              <FaInstagramSquare className="text-[20px] text-gray-500" />
              <p className="text-[12px] text-gray-500">Instagram</p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-2 gap-10">
            {/* Icons */}
            <div className="flex items-center gap-3 ">
              <FiMail className="text-[50px] p-1 text-red-500 bg-white lg:bg-[#ffedd5] rounded-2xl" />
              <div className="flex flex-col">
                <p className="font-bold text-[13px] lg:text-[30px] text-red-400">24.124</p>
                <p className="font-semibold text-[11px] lg:text-[20px]">Undangan Aktif</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <RiMailSendLine className="p-1 text-red-500 bg-white lg:bg-[#ffedd5] rounded-2xl text-[50px]" />
              <div className="flex flex-col">
                <p className="font-bold text-[13px] lg:text-[30px] text-red-400">24.124</p>
                <p className="font-semibold text-[11px] lg:text-[20px]">Amplop Digital</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <HiOutlineNewspaper className="text-red-500 text-[50px] p-1 bg-white lg:bg-[#ffedd5] rounded-2xl" />
              <div className="flex flex-col">
                <p className="font-bold text-[13px] lg:text-[30px] text-red-400">24.124</p>
                <p className="font-semibold text-[11px] lg:text-[20px]">Doa & Ucapan</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <BiBook className="text-red-500 text-[50px] p-1 bg-white lg:bg-[#ffedd5] rounded-2xl" />

              <div className="flex flex-col">
                <p className="font-bold text-[13px] lg:text-[30px] text-red-400">24.124</p>
                <p className="font-semibold text-[11px] lg:text-[20px]">Tamu Reservasi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
