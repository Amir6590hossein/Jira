import React, { Fragment, useEffect } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

export default function MainLayout({ children }) {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
}
