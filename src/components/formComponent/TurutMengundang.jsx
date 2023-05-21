import React from "react";
import { InvitationContext } from "../../context/InvitationContext";

const TurutMengundang = () => {
  const { setTurut_mengundang } = React.useContext(InvitationContext);
  return (
    <div>
      <p className="text-lg font-bold my-2">
        <span className="text-orange-500">Daftar</span> Nama Turut Mengundang
      </p>
      <textarea
        className="w-full border"
        onChange={(e) => setTurut_mengundang(e.target.value)}
      />
    </div>
  );
};
export default TurutMengundang;
