import React from "react";
import { CardMyInvitation } from "./Card";
import axios from "axios";

const MyInvitation = () => {
  const [invitation, setInvitation] = React.useState();

  const user = JSON.parse(localStorage.getItem("user"));

  React.useEffect(() => {
    getMyInvitation();
  }, []);

  const refresPage = () => {
    window.location.reload(true);
  };

  const getMyInvitation = async () => {
    const respons = await axios.get(
      `http://localhost:3030/theme/luxuri/${user.id}`
    );
    setInvitation(respons.data.data);
  };

  if (!invitation) {
    return (
      <div>
        <div className="text-xl">
          <p>Anda Belum Memiliki Invitation</p>
          <button
            onClick={refresPage}
            className="inline-flex w-full justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Refresh
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex gap-2 flex-wrap w-full items-center justify-center">
        {invitation.map((data) => {
          return <CardMyInvitation key={data.id} data={data} />;
        })}
      </div>
    );
  }
};

export default MyInvitation;
