import React from "react";
import { SidebarContext } from "../context/SidebarContext";
import axios from "axios";
import { BsFillArrowThroughHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const { hendleCreateInvitation } = React.useContext(SidebarContext);
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg"
          src={`http://localhost:3030${item.image}`}
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item.nama_tema}
          </h5>
        </a>
        <div className="flex justify-evenly">
          <a
            href={item.link}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Lihat Tema
          </a>
          <a
            onClick={() => hendleCreateInvitation(item.id)}
            className="inline-flex items-center px-3 cursor-pointer py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Gunakan Tema
          </a>
        </div>
      </div>
    </div>
  );
};

export const CardMyInvitation = ({ data }) => {
  const [tema, setTema] = React.useState();

  React.useEffect(() => {
    getDataTheme();
  }, []);

  const getDataTheme = async () => {
    const respons = await axios.get(
      `http://localhost:3030/theme/${data.id_tema}`
    );
    setTema(respons.data.data);
  };

  if (tema)
    return (
      <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg"
            src={`http://localhost:3030${tema.image}`}
            alt=""
          />
        </a>
        <div className="flex absolute items-center w-full justify-center top-44 left-0">
          <img
            className="h-10 w-10 border-2 border-white rounded-[50%] object-cover"
            src={`http://localhost:3030${data.m_img_profile}`}
            alt=""
          />
          &
          <img
            className="h-10 w-10 border-2 border-white rounded-[50%] object-cover"
            src={`http://localhost:3030${data.f_img_profile}`}
            alt=""
          />
        </div>
        <div className="flex flex-col mt-11 justify-center gap-2 items-center w-full">
          {data.m_nama}
          <BsFillArrowThroughHeartFill
            className="text-orange-500"
            size={"25px"}
          />
          {data.f_nama}
        </div>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
              {tema.nama_tema}
            </h5>
          </a>
          <div className="flex justify-center">
            <Link
              to={`/invitation/${data.id}`}
              state={{ data }}
              className="inline-flex w-full justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Lihat Undangan
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Card;
