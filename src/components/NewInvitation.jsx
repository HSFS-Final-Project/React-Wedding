import { react } from "@babel/types";
import React from "react";
import Card from "./Card";
import axios from "axios";

const NewInvitation = () => {
  const [data, setData] = React.useState();

  React.useEffect(() => {
    getDataTheme();
  }, []);

  const getDataTheme = async () => {
    const respons = await axios.get("http://localhost:3030/alltheme");
    setData(respons.data.data);
  };

  if (data)
    return (
      <div className="border w-full flex flex-col items-center">
        <dir>Filter</dir>
        <div className="flex flex-wrap gap-5 items-center justify-center">
          {data.map((item) => {
            return <Card key={item.id} item={item} />;
          })}
        </div>
      </div>
    );
};

export default NewInvitation;
