import { createContext } from "react";

// this context for login and user
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
