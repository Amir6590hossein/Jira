import { createContext } from "react";

// this context for login and user
export const userContext = createContext({
  firstName: "",
  setFirstName: () => {},
  lastName: "",
  setLastName: () => {},
  phoneNumber: "",
  setPhoneNumber: () => {},
  validator:null,

  email: "",
  setEmail: () => {},
  password: "",
  setPassword: () => {},
  confirmPassword: "",
  setConfirmPassword: () => {},
  handleRegister: () => {},
});
