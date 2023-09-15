import { createBrowserRouter } from "react-router-dom";
import Login from "./../components/Login/Login";
import Register from "../components/Register/Register";
import Home from "../components/Common/Home";
import App from "../components/Containers/App";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/", element: <Home /> },
    ],
  },
]);
