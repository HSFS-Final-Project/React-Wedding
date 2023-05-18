import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const history = useNavigate();
  useEffect(() => {
    history("/");
  }, []);
};

export default ErrorPage;
