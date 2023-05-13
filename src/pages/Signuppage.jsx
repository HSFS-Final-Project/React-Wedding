import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Formpage.css";
import axios from "axios";

const Signuppage = () => {
  const [email, setEmail] = useState("");
  const [wanita, setWanita] = useState("");
  const [pria, setPria] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [error, setError] = useState("");

  React.useEffect(() => {
    setError("");
  }, [checkbox, email]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (checkbox === true) {
      try {
        const passingData = await axios.post("http://localhost:3030/register", {
          email: email,
          nama_pria: pria,
          nama_wanita: wanita,
          password: password,
        });

        console.log(passingData);
      } catch (error) {
        setError(error.response.data.message);
      }
    } else {
      setError("harap menyetujui syarat penggunaan");
    }

    // if(email.length == 0 || wanita.length == 0 || pria.length == 0 || password.length == 0){
    //   setError(true)
    // }
    // if(email.length, wanita.length, pria.length, password.length > 0  && checkbox == false){
    //   alert("Harap menyetujui syarat penggunaan")
    // }
  };

  return (
    <div>
      <Navbar />
      <div className="mt-20">
        <div className="container px-8 mx-auto">
          <div className="flex flex-wrap">
            <div className="flex lg:basis-3/5">
              <div className="justify-items-center mx-auto">
                <img
                  src={require("../assets/pic-formpage.png")}
                  alt="image"
                  className="w-80"
                />
              </div>
            </div>

            <div className="lg:basis-2/5">
              <div className="text-2xl font-bold my-6">Register</div>
              <div className="mt-4">
                <p className="my-2">
                  Daftar akun terlebih dahulu untuk membuat undangan pernikahan
                  digital mu{" "}
                </p>
                <small className="text-buttonColor">{error}</small>

                <form className="block">
                  <input
                    type="email"
                    placeholder="Alamat email"
                    className="my-2 border-solid border-2 rounded-sm w-full"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Nama panggilan wanita"
                    className="my-2 border-solid border-2 rounded-sm w-full"
                    onChange={(e) => setWanita(e.target.value)}
                  />
                  {/* {error ? (
                    <small className="text-buttonColor">
                      Nama wanita harus diisi
                    </small>
                  ) : (
                    ""
                  )} */}
                  <input
                    type="text"
                    placeholder="Nama panggilan pria"
                    className="my-2 border-solid border-2 rounded-sm w-full"
                    onChange={(e) => setPria(e.target.value)}
                  />
                  {/* {error ? (
                    <small className="text-buttonColor">
                      Nama pria harus diisi
                    </small>
                  ) : (
                    ""
                  )} */}
                  <input
                    type="password"
                    placeholder="Password"
                    className="my-2 border-solid border-2 rounded-sm w-full"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {/* {error ? (
                    <small className="text-buttonColor">
                      Password harus diisi
                    </small>
                  ) : (
                    ""
                  )} */}
                  <div className="flex gap-2 my-2">
                    <input
                      type="checkbox"
                      name=""
                      value="checked"
                      checked={checkbox}
                      onChange={(e) => setCheckbox(e.target.checked)}
                    />
                    <p>saya menyetujui syarat penggunaan</p>
                  </div>
                  <button
                    type="button"
                    href="#"
                    className="bg-buttonColor p-2 rounded-full w-full block self-center my-4 text-white text-center hover:scale-110 duration-200 shadow-lg"
                    onClick={handleSubmit}
                  >
                    Buat Sekarang
                  </button>
                  <button
                    type="button"
                    href="#"
                    className="border-buttonColor border-2 p-2 rounded-full w-full block self-center my-4 text-buttonColor text-center hover:scale-110 duration-200 shadow-lg"
                  >
                    Daftar dengan Google
                  </button>
                  <div></div>
                  Sudah ada akun?
                  <span>
                    <Link to="/signinpage" className="text-buttonColor">
                      {" "}
                      Masuk disini.
                    </Link>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signuppage;
