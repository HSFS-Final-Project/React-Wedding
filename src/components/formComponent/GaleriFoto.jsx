import React from "react";
import { InvitationContext } from "../../context/InvitationContext";

const GaleriFoto = () => {
  const { hendleImg1, hendleImg2, hendleImg3, hendleImg4, hendleImg5 } =
    React.useContext(InvitationContext);
  return (
    <div>
      <p className="text-lg font-bold my-2">
        Galeri <span className="text-orange-500">Foto</span>
      </p>
      <div>
        <p className="my-2">Foto 1</p>
        <input type="file" onChange={hendleImg1} />
        <p className="my-2">Foto 2</p>
        <input type="file" onChange={hendleImg2} />
        <p className="my-2">Foto 3</p>
        <input type="file" onChange={hendleImg3} />
        <p className="my-2">Foto 4</p>
        <input type="file" onChange={hendleImg4} />
        <p className="my-2">Foto 5</p>
        <input type="file" onChange={hendleImg5} />
      </div>
    </div>
  );
};
export default GaleriFoto;
