import axios from "axios";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DataUser = ({ user, setChangePassword }) => {
  const [email, setEmail] = React.useState(user.email);
  const [emailBaru, setEmailBaru] = React.useState(user.email);
  const [namaPria, setNamaPria] = React.useState(user.nama_pria);
  const [namaWanita, setNamaWanita] = React.useState(user.nama_wanita);

  const hendleUpdate = async (e) => {
    try {
      const update = await axios.put(
        "http://localhost:3030/user/change_data_user",
        {
          email: email,
          emailBaru: emailBaru,
          namaPria: namaPria,
          namaWanita: namaWanita,
        }
      );
      localStorage.setItem("user", JSON.stringify(update.data.data));
      toast.success(update.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      toast.error(error.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="flex flex-col w-full">
      <label>Email</label>
      <input
        type="email"
        defaultValue={user ? email : "Nama Pria"}
        className="border-b-2 rounded-lg border-orange-400 px-1"
        onChange={(e) => setEmailBaru(e.target.value)}
      />
      <label>Nama Pria</label>
      <input
        type="text"
        defaultValue={user ? namaPria : "Nama Pria"}
        className="border-b-2 rounded-lg border-orange-400 px-1"
        onChange={(e) => setNamaPria(e.target.value)}
      />
      <label>Nama Wanita</label>
      <input
        type="text"
        defaultValue={user ? namaWanita : "Nama Wanita"}
        className="border-b-2 rounded-lg border-orange-400 px-1"
        onChange={(e) => setNamaWanita(e.target.value)}
      />
      <div className="flex w-full justify-between pr-10 mt-5">
        <button
          onClick={() => setChangePassword(true)}
          className="bg-orange-500 text-white hover:bg-gray-800 font-bold p-1 rounded-md"
        >
          Change Password
        </button>
        <button
          className="bg-orange-500 text-white hover:bg-gray-800 font-bold p-1 rounded-md"
          onClick={hendleUpdate}
        >
          Perbarui
        </button>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default DataUser;
