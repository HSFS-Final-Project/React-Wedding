import React from "react";

const NewInvitation = () => {
  return (
    <div className="ml-48">
      <div className="text-2xl font-bold my-6">
        Input <span className="text-orange-500">Data</span> Undangan
      </div>
      <div className="mt-4">
        <p className="text-lg font-bold my-2">Data Pengantin Pria</p>
        <form className="block">
          <input
            type="text"
            placeholder="Nama"
            className="my-2 border-b rounded-md w-full border-orange-500"
          />
          <input
            type="text"
            placeholder="Nama Panggilan"
            className="my-2 border-b rounded-md w-full border-orange-500"
          />
          <input
            type="text"
            placeholder="Anak ke-"
            className="my-2 border-b rounded-md w-full border-orange-500"
          />
          <input
            type="text"
            placeholder="Nama Ibu"
            className="my-2 border-b rounded-md w-full border-orange-500"
          />
          <input
            type="text"
            placeholder="Nama Ayah"
            className="my-2 border-b rounded-md w-full border-orange-500"
          />
        </form>

        <p className="text-lg font-bold my-2">Data Pengantin Wanita</p>
        <form className="block">
          <input
            type="text"
            placeholder="Nama"
            className="my-2 border-b rounded-md w-full border-orange-500"
          />
          <input
            type="text"
            placeholder="Nama Panggilan"
            className="my-2 border-b rounded-md w-full border-orange-500"
          />
          <input
            type="text"
            placeholder="Anak ke-"
            className="my-2 border-b rounded-md w-full border-orange-500"
          />
          <input
            type="text"
            placeholder="Nama Ibu"
            className="my-2 border-b rounded-md w-full border-orange-500"
          />
          <input
            type="text"
            placeholder="Nama Ayah"
            className="my-2 border-b rounded-md w-full border-orange-500"
          />
        </form>

        <p className="text-lg font-bold my-2">Data Acara 1</p>
        <form className="block">
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
        </form>

        <p className="text-lg font-bold my-2">Data Acara 2</p>
        <form className="block">
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
        </form>

        <p className="text-lg font-bold my-2">Daftar Nama Turut Mengundang</p>
        <textarea className="w-full border" rows="" cols=""></textarea>

        <p className="text-lg font-bold my-2">Galeri Foto</p>
        <div>
          <p className="my-2">Foto 1</p>
          <input type="file" name="" value="" />
          <p className="my-2">Foto 2</p>
          <input type="file" name="" value="" />
          <p className="my-2">Foto 3</p>
          <input type="file" name="" value="" />
          <p className="my-2">Foto 4</p>
          <input type="file" name="" value="" />
          <p className="my-2">Foto 5</p>
          <input type="file" name="" value="" />
        </div>

        <button
          type="button"
          href="#"
          class="bg-buttonColor p-2 rounded-full w-full block self-center my-4 text-white text-center hover:scale-110 duration-200 shadow-lg"
        >
          Kirim Data
        </button>
      </div>
    </div>
  );
};

export default NewInvitation;
