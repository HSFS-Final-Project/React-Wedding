import React from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portofolio from "./pages/Portofolio";
import Signuppage from "./pages/Signuppage";
import Signinpage from "./pages/Signinpage";
import Forgotpass from "./pages/Forgotpass";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./components/ErrorPage";
import Luxuri from "./pages/Theme/Luxuri";

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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/signuppage" element={<Signuppage />} />
        <Route path="/signinpage" element={<Signinpage />} />
        <Route path="/forgotpass" element={<Forgotpass />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tema/luxuri" element={<Luxuri />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
