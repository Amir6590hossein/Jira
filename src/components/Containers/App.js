import React from "react";
import Jira from "./Jira";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <div>
      <ToastContainer />

      <Jira />
    </div>
  );
}
