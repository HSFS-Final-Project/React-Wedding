import React from "react";
import { SidebarContext } from "./SidebarContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const InvitationContext = React.createContext();

const InvitationProvider = ({ children }) => {
  const [m_nama, setM_nama] = React.useState("");
  const [m_panggilan, setM_panggilan] = React.useState("");
  const [m_img_profile, setM_img_profile] = React.useState();
  const [m_anakke, setM_anakke] = React.useState("");
  const [m_namaibu, setM_namaibu] = React.useState("");
  const [m_namaayah, setM_namaayah] = React.useState("");
  const [f_nama, setF_nama] = React.useState("");
  const [f_panggilan, setF_panggilan] = React.useState("");
  const [f_img_profile, setF_img_profile] = React.useState();
  const [f_anakke, setF_anakke] = React.useState("");
  const [f_namaibu, setF_namaibu] = React.useState("");
  const [f_namaayah, setF_namaayah] = React.useState("");
  const [d_acara, setD_acara] = React.useState("");
  const [d_tanggal, setD_tanggal] = React.useState();
  const [d_waktu, setD_waktu] = React.useState();
  const [d_alamat, setD_alamat] = React.useState("");
  const [turut_mengundang, setTurut_mengundang] = React.useState("");
  const [foto1, setFoto1] = React.useState();
  const [foto2, setFoto2] = React.useState();
  const [foto3, setFoto3] = React.useState();
  const [foto4, setFoto4] = React.useState();
  const [foto5, setFoto5] = React.useState();

  const hendleImgMale = (e) => {
    setM_img_profile(e.target.files[0]);
  };
  const hendleImgFemale = (e) => {
    setF_img_profile(e.target.files[0]);
  };
  const hendleImg1 = (e) => {
    setFoto1(e.target.files[0]);
  };
  const hendleImg2 = (e) => {
    setFoto2(e.target.files[0]);
  };
  const hendleImg3 = (e) => {
    setFoto3(e.target.files[0]);
  };
  const hendleImg4 = (e) => {
    setFoto4(e.target.files[0]);
  };
  const hendleImg5 = (e) => {
    setFoto5(e.target.files[0]);
  };

  const { id_tema } = React.useContext(SidebarContext);

  const user = JSON.parse(localStorage.getItem("user"));

  // Fatching
  const hendlePostInvitation = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("id_user", user.id);
      formData.append("id_tema", id_tema);
      formData.append("m_nama", m_nama);
      formData.append("m_panggilan", m_panggilan);
      formData.append("m_img_profile", m_img_profile);
      formData.append("m_anakke", m_anakke);
      formData.append("m_namaibu", m_namaibu);
      formData.append("m_namaayah", m_namaayah);
      formData.append("f_nama", f_nama);
      formData.append("f_panggilan", f_panggilan);
      formData.append("f_img_profile", f_img_profile);
      formData.append("f_anakke", f_anakke);
      formData.append("f_namaibu", f_namaibu);
      formData.append("f_namaayah", f_namaayah);
      formData.append("d_acara", d_acara);
      formData.append("d_tanggal", d_tanggal);
      formData.append("d_waktu", d_waktu);
      formData.append("d_alamat", d_alamat);
      formData.append("turut_mengundang", turut_mengundang);
      formData.append("foto1", foto1);
      formData.append("foto2", foto2);
      formData.append("foto3", foto3);
      formData.append("foto4", foto4);
      formData.append("foto5", foto5);

      const pushData = await axios.post(
        "http://localhost:3030/theme/luxuri/create",
        formData
      );
      window.location.reload(false);
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
  };

  return (
    <InvitationContext.Provider
      value={{
        setM_nama,
        setM_panggilan,
        hendleImgMale,
        setM_anakke,
        setM_namaibu,
        setM_namaayah,
        setF_nama,
        setF_panggilan,
        hendleImgFemale,
        setF_anakke,
        setF_namaibu,
        setF_namaayah,
        setD_acara,
        setD_tanggal,
        setD_waktu,
        setD_alamat,
        setTurut_mengundang,
        hendleImg1,
        hendleImg2,
        hendleImg3,
        hendleImg4,
        hendleImg5,
        hendlePostInvitation,
      }}
    >
      {children}
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
    </InvitationContext.Provider>
  );
};

export default InvitationProvider;
