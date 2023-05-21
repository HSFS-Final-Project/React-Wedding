import axios from "axios";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChangePassword = ({ setChangePassword, email }) => {
  const [passwordLama, setPasswordLama] = React.useState();
  const [passwordBaru, setPasswordBaru] = React.useState();
  const [confirmPassword, setConfirmPassword] = React.useState();

  const hendleUpdate = async () => {
    if (passwordBaru !== confirmPassword) {
      toast.error("Confirm Password salah", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      try {
        const changePassword = await axios.put(
          "http://localhost:3030/user/change_password",
          {
            email,
            passwordLama,
            passwordBaru,
          }
        );

        toast.success("Berhasil merubah password", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setPasswordLama("");
        setPasswordBaru("");
        setConfirmPassword("");
        setChangePassword(false);
      } catch (error) {
        toast.error(error.response.data.message, {
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
    }
  };

  return (
    <div className="flex flex-col w-full">
      <label>Password Lama</label>
      <input
        type="password"
        className="border-b-2 rounded-lg border-orange-400 px-1"
        onChange={(e) => setPasswordLama(e.target.value)}
      />
      <label>Password Baru</label>
      <input
        type="password"
        className="border-b-2 rounded-lg border-orange-400 px-1"
        onChange={(e) => setPasswordBaru(e.target.value)}
      />
      <label>Confirm Password</label>
      <input
        type="password"
        className="border-b-2 rounded-lg border-orange-400 px-1"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <div className="flex w-full justify-between pr-10 mt-5">
        <button
          onClick={() => setChangePassword(false)}
          className="bg-orange-500 text-white hover:bg-gray-800 font-bold p-1 px-5 rounded-md"
        >
          Cencel
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

export default ChangePassword;
