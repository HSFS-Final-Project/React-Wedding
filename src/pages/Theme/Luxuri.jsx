import React from "react";
import HeaderInvitation from "../../components/Theme/luxuri/HeaderInvitation";
import ContentInvitation from "../../components/Theme/luxuri/ContentInvitation";
import { useLocation } from "react-router-dom";

const Luxuri = () => {
  const data = useLocation().state.data;

  return (
    <>
      <HeaderInvitation nama_pria={data.m_nama} nama_wanita={data.f_nama} />
      <ContentInvitation data={data} />
    </>
  );
};

export default Luxuri;
