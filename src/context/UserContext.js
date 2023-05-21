import axios from "axios";
import React from "react";

export const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState();

  const getUser = async (email) => {
    const respons = await axios.get(
      `http://localhost:3030/user?email=${email}`
    );
    if (respons) {
      localStorage.setItem("user", JSON.stringify(respons.data.data));
    }
  };

  return (
    <UserContext.Provider value={{ getUser }}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
