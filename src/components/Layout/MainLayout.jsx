import React, { Fragment } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import UserContext from "../Context/UserContext";
import { ToastContainer } from "react-toastify";

export default function MainLayout({ children }) {
  return (
    <UserContext>
      <ToastContainer />
      <div className="main">
        <Header />
        {children}
        <Footer />
      </div>
    </UserContext>
  );
}
