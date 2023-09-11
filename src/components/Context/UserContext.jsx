import React, { useState } from "react";
import { userContext } from "./userContext";

export default function UserContext({ children }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <userContext.Provider
      value={{
        fullName,
        setFullName,
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
      }}
    >
      {children}
    </userContext.Provider>
  );
}
