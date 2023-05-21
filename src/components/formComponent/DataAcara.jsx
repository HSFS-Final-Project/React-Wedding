import React from "react";
import { InvitationContext } from "../../context/InvitationContext";

const DataAcara = () => {
  const { setD_acara, setD_tanggal, setD_waktu, setD_alamat } =
    React.useContext(InvitationContext);
  return (
    <div>
      <p className="text-lg font-bold my-2">
        <span className="text-orange-500">Data</span> Acara
      </p>
      <p>Nama Acara (Akad/Resepsi)</p>
      <input
        type="text"
        className="my-2 border-b rounded-md w-full border-orange-500"
        onChange={(e) => setD_acara(e.target.value)}
      />

      <p>Tanggal Acara</p>
      <input
        type="date"
        className="my-2 border-b rounded-md w-full border-orange-500"
        onChange={(e) => setD_tanggal(e.target.value)}
      />

      <p>Waktu</p>
      <input
        type="time"
        className="my-2 border-b rounded-md w-full border-orange-500"
        onChange={(e) => setD_waktu(e.target.value)}
      />

      <p>Alamat</p>
      <input
        type="text"
        className="my-2 border-b rounded-md w-full border-orange-500"
        onChange={(e) => setD_alamat(e.target.value)}
      />

      {/* {addTwoEvent && (
        <>
          <p className="text-lg font-bold my-2">
            <span className="text-orange-500">Data</span> Acara 2
          </p>
          <p>Nama Acara (Akad/Resepsi)</p>
          <input
            type="text"
            className="my-2 border-solid border-2 rounded-sm w-full"
          />

          <p>Tanggal Acara</p>
          <input
            type="text"
            className="my-2 border-solid border-2 rounded-sm w-full"
          />

          <p>Waktu</p>
          <input
            type="text"
            className="my-2 border-solid border-2 rounded-sm w-full"
          />

          <p>Alamat</p>
          <input
            type="text"
            className="my-2 border-solid border-2 rounded-sm w-full"
          />
        </>
      )}

      {!addTwoEvent && (
        <button className="border" onClick={() => setAddTwoEvent(true)}>
          Add Acara 2
        </button>
      )}

      {addTwoEvent && (
        <button className="border" onClick={() => setAddTwoEvent(false)}>
          hidden Acara 2
        </button>
      )} */}
    </div>
  );
};
export default DataAcara;
