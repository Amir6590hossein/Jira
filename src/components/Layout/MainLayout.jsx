import React, { Fragment } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

export default function MainLayout({ children }) {
  return (
    <Fragment>
      <div className="main">
        <Header />
        {children}
        <Footer />
      </div>
    </Fragment>
  );
}
