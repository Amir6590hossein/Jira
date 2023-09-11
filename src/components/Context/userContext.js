import { createContext } from "react";

export const userContext = createContext({
  fullName: "",
  setFullName: () => {},
  email: "",
  setEmail: () => {},
  password: "",
  setPassword: () => {},
  confirmPassword: "",
  setConfirmPassword: () => {},
});
