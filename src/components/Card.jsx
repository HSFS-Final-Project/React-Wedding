import React from "react";
import { SidebarContext } from "../context/SidebarContext";

const Card = ({ item }) => {
  const { hendleCreateInvitation } = React.useContext(SidebarContext);
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          class="rounded-t-lg"
          src={`http://localhost:3030${item.image}`}
          alt=""
        />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item.nama_tema}
          </h5>
        </a>
        <div className="flex justify-evenly">
          <a
            href={item.link}
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Lihat Tema
          </a>
          <a
            onClick={hendleCreateInvitation}
            class="inline-flex items-center px-3 cursor-pointer py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Gunakan Tema
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
