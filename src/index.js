import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Portofolio from "./pages/Portofolio";
import Signuppage from "./pages/Signuppage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/portofolio",
    element: <Portofolio />,
  },
  {
    path: "/signuppage",
    element: <Signuppage />,
  },
]);

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
