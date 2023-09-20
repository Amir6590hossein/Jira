import React, { useState } from "react";
import { projectContext } from "./projectContext";

export default function ProjectContext({ children }) {
  const [classLink, setClassLink] = useState("");
  return <projectContext.Provider>{children}</projectContext.Provider>;
}
