import React from "react";

const FormInvitation = () => {
  return (
    <div className="">
      <form action="" className="border px-7 rounded-md shadow-md">
        <div className="text-2xl font-bold my-6 text-center">
          Input <span className="text-orange-500">Data</span> Undangan
        </div>
        <div className="mt-4">
          <div>
            <p className="text-lg font-bold my-2">
              <span className="text-orange-500">Data</span> Pengantin Pria
            </p>
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
          </div>

          <div>
            <p className="text-lg font-bold my-2">
              <span className="text-orange-500">Data</span> Pengantin Wanita
            </p>
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
          </div>

          <div>
            <p className="text-lg font-bold my-2">
              <span className="text-orange-500">Data</span> Acara
            </p>
            <p>Nama Acara (Akad/Resepsi)</p>
            <input
              type="text"
              className="my-2 border-b rounded-md w-full border-orange-500"
            />

            <p>Tanggal Acara</p>
            <input
              type="date"
              className="my-2 border-b rounded-md w-full border-orange-500"
            />

            <p>Waktu</p>
            <input
              type="time"
              className="my-2 border-b rounded-md w-full border-orange-500"
            />

            <p>Alamat</p>
            <input
              type="text"
              className="my-2 border-b rounded-md w-full border-orange-500"
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

          <div>
            <p className="text-lg font-bold my-2">
              <span className="text-orange-500">Daftar</span> Nama Turut
              Mengundang
            </p>
            <textarea className="w-full border" rows="" cols=""></textarea>

            <p className="text-lg font-bold my-2">
              Galeri <span className="text-orange-500">Foto</span>
            </p>
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
          </div>

          <button
            type="submit"
            href="#"
            class="bg-buttonColor p-2 rounded-full w-full block self-center my-4 text-white text-center hover:scale-110 duration-200 shadow-lg"
          >
            Kirim Data
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormInvitation;
