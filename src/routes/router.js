import { createBrowserRouter } from "react-router-dom";
import Login from "./../components/Login/Login";
import Register from "../components/Register/Register";
import Home from "../components/Common/Home";
import MainLayout from "../components/Layout/MainLayout";
import App from "../components/Containers/App";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <MainLayout>
        {" "}
        <Login />{" "}
      </MainLayout>
    ),
  },
  {
    path: "/register",
    element: (
      <MainLayout>
        <Register />
      </MainLayout>
    ),
  },
  {
    path: "/",
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
]);
