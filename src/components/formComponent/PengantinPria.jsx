import React from "react";
import { InvitationContext } from "../../context/InvitationContext";

const PengantinPria = () => {
  const {
    setM_nama,
    setM_panggilan,
    hendleImgMale,
    setM_anakke,
    setM_namaibu,
    setM_namaayah,
  } = React.useContext(InvitationContext);

  return (
    <div>
      <p className="text-lg font-bold my-2">
        <span className="text-orange-500">Data</span> Pengantin Pria
      </p>
      <input type="file" name="Profile" id="" onChange={hendleImgMale} />
      <input
        type="text"
        placeholder="Nama"
        className="my-2 border-b rounded-md w-full border-orange-500"
        onChange={(e) => setM_nama(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nama Panggilan"
        className="my-2 border-b rounded-md w-full border-orange-500"
        onChange={(e) => setM_panggilan(e.target.value)}
      />
      <input
        type="text"
        placeholder="Anak ke-"
        className="my-2 border-b rounded-md w-full border-orange-500"
        onChange={(e) => setM_anakke(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nama Ibu"
        className="my-2 border-b rounded-md w-full border-orange-500"
        onChange={(e) => setM_namaibu(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nama Ayah"
        className="my-2 border-b rounded-md w-full border-orange-500"
        onChange={(e) => setM_namaayah(e.target.value)}
      />
    </div>
  );
};
export default PengantinPria;
