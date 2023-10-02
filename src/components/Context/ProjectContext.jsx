import React, { useState } from "react";
import { projectContext } from "./projectContext";

export default function ProjectContext({ children }) {
  const [classLink, setClassLink] = useState("");
  const classLinkFunc = () => {};
  return (
    <projectContext.Provider value={{}}>{children}</projectContext.Provider>
  );
}
