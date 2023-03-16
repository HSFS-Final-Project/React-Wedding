import React from "react";

const Contacts = () => {
  return (
    <div>
      <section class="p-36 w-full mt-20 flex flex-col lg:flex-row gap-20 items-center justify-between bg-[#fdeded]">
        {/* Left */}
        <div>
          <h1 class="text-[40px] font-bold text-red-400">No. 1 Platform</h1>
          <p class="mt-5 text-[28px]">Website Undangan Pernikahan</p>
          <p class="mt-3 text-[22px]">
            Buat website undangan pernikahanmu secara ekslusif dengan mudah, murah dan cepat.
            <br />
            Solusi website undangan pernikahan kamu jadi lebih berkesan!
          </p>

          <div class="flex flex-wrap gap-4">
            <p class="font-semibold text-[22px] mt-5">Temukan Kami:</p>
            {/* Contacts */}
            <div class="flex flex-row gap-5 mt-5 items-center">
              <i class="fab fa-whatsapp text-[30px] font-bold"></i>
              <p class="text-[20px]">Whatsapp</p>
            </div>
            <div class="flex flex-row gap-5 mt-5 items-center">
              <i class="fab fa-facebook text-[30px] font-bold"></i>
              <p class="text-[20px]">Facebook</p>
            </div>
            <div class="flex flex-row gap-5 mt-5 items-center">
              <i class="fab fa-instagram text-[30px] font-bold"></i>
              <p class="text-[20px]">Instagram</p>
            </div>
          </div>
        </div>
        {/* Right */}
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Icons */}
          <div class="flex items-center gap-3">
            <i class="fa-regular fa-envelope text-[50px] p-5 bg-[#ffedd5] rounded-2xl"></i>
            <div class="flex flex-col">
              <p class="font-bold text-[30px] text-red-400">24.124</p>
              <p class="font-semibold text-[20px]">Undangan Aktif</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <i class="fa-regular fa-envelope-open p-5 bg-[#ffedd5] rounded-2xl text-[50px]"></i>

            <div class="flex flex-col">
              <p class="font-bold text-[30px] text-red-400">24.124</p>
              <p class="font-semibold text-[20px]">Amplop Digital</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <i class="fa-regular fa-newspaper text-[50px] p-5 bg-[#ffedd5] rounded-2xl"></i>
            <div class="flex flex-col">
              <p class="font-bold text-[30px] text-red-400">24.124</p>
              <p class="font-semibold text-[20px]">Doa & Ucapan</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <i class="fa-solid fa-people-group text-[50px] p-5 bg-[#ffedd5] rounded-2xl"></i>

            <div class="flex flex-col">
              <p class="font-bold text-[30px] text-red-400">24.124</p>
              <p class="font-semibold text-[20px]">Tamu Reservasi</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
