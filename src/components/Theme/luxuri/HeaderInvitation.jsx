import React from "react";

const HeaderInvitation = ({ nama_pria, nama_wanita }) => {
  return (
    <div className="fixed h-screen float-left w-[65%]">
      <img
        className="absolute object-cover -z-10 w-full h-full"
        src="https://cdn-uploads.our-wedding.link/9d024560-e7fc-11ed-b2db-9ff0c0d42cfe.jpg"
        alt=""
      />
      <p className="mt-[550px] ml-20 font-dancing text-5xl text-white">
        {nama_pria} & <br />
        {nama_wanita}
      </p>
    </div>
  );
};

export default HeaderInvitation;
