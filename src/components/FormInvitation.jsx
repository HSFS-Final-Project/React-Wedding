import React from "react";
import PengantinPria from "./formComponent/PengantinPria";
import PengantinWanita from "./formComponent/PengantinWanita";
import DataAcara from "./formComponent/DataAcara";
import TurutMengundang from "./formComponent/TurutMengundang";
import GaleriFoto from "./formComponent/GaleriFoto";
import { InvitationContext } from "../context/InvitationContext";

const FormInvitation = () => {
  const { hendlePostInvitation } = React.useContext(InvitationContext);
  return (
    <div className="">
      <form
        method="post"
        encType="multipart/form-data"
        className="border px-7 rounded-md shadow-md"
        onSubmit={hendlePostInvitation}
      >
        <div className="text-2xl font-bold my-6 text-center">
          Input <span className="text-orange-500">Data</span> Undangan
        </div>
        <PengantinPria />

        <PengantinWanita />

        <DataAcara />

        <TurutMengundang />

        <GaleriFoto />

        <button
          type="submit"
          href="#"
          className="bg-buttonColor p-2 rounded-full w-full block self-center my-4 text-white text-center hover:scale-110 duration-200 shadow-lg"
        >
          Kirim Data
        </button>
      </form>
    </div>
  );
};

export default FormInvitation;
