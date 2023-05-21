import React from "react";
import { InvitationContext } from "../../context/InvitationContext";

const PengantinWanita = () => {
  const {
    setF_nama,
    setF_panggilan,
    hendleImgFemale,
    setF_anakke,
    setF_namaibu,
    setF_namaayah,
  } = React.useContext(InvitationContext);
  return (
    <div>
      <p className="text-lg font-bold my-2">
        <span className="text-orange-500">Data</span> Pengantin Wanita
      </p>
      <input type="file" name="Profile" id="" onChange={hendleImgFemale} />
      <input
        type="text"
        placeholder="Nama"
        className="my-2 border-b rounded-md w-full border-orange-500"
        onChange={(e) => setF_nama(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nama Panggilan"
        className="my-2 border-b rounded-md w-full border-orange-500"
        onChange={(e) => setF_panggilan(e.target.value)}
      />
      <input
        type="text"
        placeholder="Anak ke-"
        className="my-2 border-b rounded-md w-full border-orange-500"
        onChange={(e) => setF_anakke(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nama Ibu"
        className="my-2 border-b rounded-md w-full border-orange-500"
        onChange={(e) => setF_namaibu(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nama Ayah"
        className="my-2 border-b rounded-md w-full border-orange-500"
        onChange={(e) => setF_namaayah(e.target.value)}
      />
    </div>
  );
};

export default PengantinWanita;
