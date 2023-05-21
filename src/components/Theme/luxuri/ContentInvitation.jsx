import React from "react";

const ContentInvitation = ({ data }) => {
  return (
    <div className="relative float-right w-[35%] bg-stone-200">
      <div
        className="flex flex-col gap-10 items-center justify-center h-[100vh] bg-cover"
        style={{
          backgroundImage: `url(https://cdn-uploads.our-wedding.link/460a3af0-74aa-11eb-aaf4-dd70c1fd42bd.jpg)`,
        }}
      >
        <h1 className="text-lg">UNDANGAN PERNIKAHAN</h1>
        <p className="font-dancing text-5xl text-center">
          {data.m_nama} & {data.f_nama}
        </p>
        <p>Tanggal : {data.d_tanggal}</p>
        <img
          className="w-20"
          src={require("../../../assets/1_u6dWj4ZvD52PlhguJO35nw.gif")}
          alt=""
        />
      </div>
      <div
        className="relative w-full h-[40vh] bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${require("../../../assets/New_Project__21_.png")})`,
          backgroundSize: "100%",
        }}
      >
        <p className="absolute top-20 px-5">
          "The man dreams of a perfect woman and the woman dreams of a perfect
          man and they don't know that Allah created them to perfect one
          another." -Ahmad Al Shugairi
        </p>
      </div>
      <div
        className="relative flex flex-col items-center w-full h-40 bg-cover"
        style={{
          backgroundImage: `url(https://images.ctfassets.net/q40z6pfqje6o/2f0fXzCdxy6KCemIofkxTG/c5b5ad5b87a6dda7b26a492ad30c1a4b/New_Project__20_.png)`,
        }}
      >
        <p className="absolute top-20 font-dancing text-5xl text-stone-600">
          Calon Pengantin
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          src="https://images.ctfassets.net/q40z6pfqje6o/1nk7QSCdq2bynkxMOA12Hs/85ac6daf484705d9fb248475d16bf264/New_Project__13_.png"
          alt=""
        />
        <div
          className="relative flex flex-col items-center justify-center w-[330px] h-[280px] bg-cover"
          style={{
            backgroundImage: `url(https://api.our-wedding.link/uploads/assets/couple_decor_20.png)`,
          }}
        >
          <img
            className="rounded-full w-52 h-52 mt-5 object-cover"
            src={`http://localhost:3030${data.m_img_profile}`}
            alt=""
          />
        </div>
        <div className="mt-5 flex flex-col items-center justify-center">
          <p className="font-dancing text-yellow-900 text-4xl">{data.m_nama}</p>
          <p className="text-yellow-600">Putra dari</p>
          <p className="text-yellow-600 text-lg">
            {data.m_namaayah} & {data.m_namaibu}
          </p>
          <p className="text-yellow-600 text-lg"></p>
        </div>
        <img
          src="https://images.ctfassets.net/q40z6pfqje6o/5N8eky35tTWbmdOZj3MCyo/0b6f57e181ae427e412ef2bc07044368/New_Project__14_.png"
          alt=""
        />
      </div>
      <div
        className="relative flex flex-col items-center w-full h-40 bg-cover"
        style={{
          backgroundImage: `url(https://images.ctfassets.net/q40z6pfqje6o/2f0fXzCdxy6KCemIofkxTG/c5b5ad5b87a6dda7b26a492ad30c1a4b/New_Project__20_.png)`,
        }}
      >
        <p className="absolute top-20 font-dancing text-5xl text-yellow-800 font-extrabold">
          &
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          src="https://images.ctfassets.net/q40z6pfqje6o/1nk7QSCdq2bynkxMOA12Hs/85ac6daf484705d9fb248475d16bf264/New_Project__13_.png"
          alt=""
        />
        <div
          className="relative flex flex-col items-center justify-center w-[330px] h-[280px] bg-cover"
          style={{
            backgroundImage: `url(https://api.our-wedding.link/uploads/assets/couple_decor_20.png)`,
          }}
        >
          <img
            className="rounded-full w-52 h-52 mt-5 object-cover"
            src={`http://localhost:3030${data.f_img_profile}`}
            alt=""
          />
        </div>
        <div className="mt-5 flex flex-col items-center justify-center">
          <p className="font-dancing text-yellow-900 text-4xl">{data.f_nama}</p>
          <p className="text-yellow-600">Putri dari</p>
          <p className="text-yellow-600 text-lg">
            {data.f_namaayah} & {data.f_namaibu}
          </p>
          <p className="text-yellow-600 text-lg"></p>
        </div>
        <img
          src="https://images.ctfassets.net/q40z6pfqje6o/5N8eky35tTWbmdOZj3MCyo/0b6f57e181ae427e412ef2bc07044368/New_Project__14_.png"
          alt=""
        />
      </div>
      <div
        className="relative flex flex-col items-center w-full h-40 bg-cover"
        style={{
          backgroundImage: `url(https://images.ctfassets.net/q40z6pfqje6o/2f0fXzCdxy6KCemIofkxTG/c5b5ad5b87a6dda7b26a492ad30c1a4b/New_Project__20_.png)`,
        }}
      >
        <p className="absolute top-20 font-dancing text-5xl text-yellow-800 font-extrabold">
          Our Love Galery
        </p>
      </div>
      <div className="flex overflow-y-auto gap-2">
        <img
          className="w-40 h-40 rounded-full object-cover"
          src={`http://localhost:3030${data.foto1}`}
          alt=""
        />
        <img
          className="w-40 h-40 rounded-full object-cover"
          src={`http://localhost:3030${data.foto2}`}
          alt=""
        />
        <img
          className="w-40 h-40 rounded-full object-cover"
          src={`http://localhost:3030${data.foto3}`}
          alt=""
        />
        <img
          className="w-40 h-40 rounded-full object-cover"
          src={`http://localhost:3030${data.foto4}`}
          alt=""
        />
        <img
          className="w-40 h-40 rounded-full object-cover"
          src={`http://localhost:3030${data.foto5}`}
          alt=""
        />
      </div>
      <div
        className="relative flex flex-col items-center w-full h-40 bg-cover"
        style={{
          backgroundImage: `url(https://images.ctfassets.net/q40z6pfqje6o/2f0fXzCdxy6KCemIofkxTG/c5b5ad5b87a6dda7b26a492ad30c1a4b/New_Project__20_.png)`,
        }}
      >
        <p className="absolute top-20 font-dancing text-5xl text-yellow-800 font-extrabold">
          Turut Mengundang
        </p>
      </div>
      <div className="text-yellow-600 text-center px-10">
        {data.turut_mengundang}
      </div>
    </div>
  );
};

export default ContentInvitation;
