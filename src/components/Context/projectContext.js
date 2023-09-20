import { createContext } from "react";

export const projectContext = createContext({
  projectName: "",
  setProjectName: () => {},
  description: "",
  setDescription: () => {},
});
