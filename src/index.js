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
import Signinpage from "./pages/Signinpage";
import Forgotpass from "./pages/Forgotpass";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import SideProvider from "./context/SidebarContext";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/portofolio",
//     element: <Portofolio />,
//   },
//   {
//     path: "/signuppage",
//     element: <Signuppage />,
//   },
//   {
//     path: "/signinpage",
//     element: <Signinpage />,
//   },
//   {
//     path: "/forgotpass",
//     element: <Forgotpass />,
//   },
//   {
//     path: "/dashboard",
//     element: (
//       <>
//         <Sidebar /> <Dashboard />
//       </>
//     ),
//   },
//   {
//     path: "/tema/:id",
//     element: <Theme />,
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SideProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SideProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
