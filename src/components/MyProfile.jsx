import React from "react";
import { useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import DataUser from "./profile/DataUser";
import ChangePassword from "./profile/ChangePassword";

const MyProfile = () => {
  const [changePassword, setChangePassword] = React.useState(false);
  const singOut = useSignOut();
  const history = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logOut = () => {
    localStorage.removeItem("user");
    singOut();
    history("/");
  };

  return (
    <div className="flex gap-5 p-5 shadow-slate-500 shadow rounded-xl w-full">
      <div>
        <img
          className="h-40 rounded-xl object-cover border-4 border-gray-800"
          src="https://fakeimg.pl/200x100/?retina=1&text=Profile&font=noto"
          alt=""
        />
        <div className="flex w-full justify-center mt-2">
          <button
            className="bg-orange-500 text-white w-full hover:bg-gray-800 font-bold p-1 rounded-md"
            onClick={logOut}
          >
            LogOut
          </button>
        </div>
      </div>
      {!changePassword && (
        <DataUser user={user} setChangePassword={setChangePassword} />
      )}
      {changePassword && (
        <ChangePassword
          setChangePassword={setChangePassword}
          email={user.email}
        />
      )}
    </div>
  );
};

export default MyProfile;
