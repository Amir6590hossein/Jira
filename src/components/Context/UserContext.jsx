import React, { useRef, useState } from "react";
import { userContext } from "./context";
import { registerAxios } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import { errorMessage, successMessage } from "../../utils/Message";
import SimpleReactValidator from "simple-react-validator";

export default function UserContext({ children }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  // 88940976
  //

  const validator = useRef(
    new SimpleReactValidator({
      validators: {
        password: {
          message: "Password must be more than 8 characters",
          rule: (val) => {
            return val.length > 7;
          },
        },
      },
      messages: {
        in: "Must match a string in options.",
        phone: "Must be a valid phone number format",
        required: "Filling this field is necessary",
        min: "most be than 3 characters",
        email: "The email entered is not correct",
      },
      element: (message) => <div style={{ color: "red" }}>{message}</div>,
    })
  );

  const resetStates = () => {
    setEmail("");
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setConfirmPassword("");
    setPassword("");
  };
  const handleRegister = async (event) => {
    event.preventDefault();
    const user = {
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
    };

    try {
      if (validator.current.allValid()) {
        const a = await registerAxios(user);
        // console.log(a);
        if (a.status == 201) {
          successMessage("User registered successfully");
          navigate("/login");
        } else {
        }
      }
    } catch (error) {
      console.log(error.data);
      errorMessage(error.response.data.message);
    }
  };

  return (
    <userContext.Provider
      value={{
        firstName,
        setFirstName,
        lastName,
        setLastName,
        phoneNumber,
        setPhoneNumber,
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        handleRegister,
        validator,
      }}
    >
      {children}
    </userContext.Provider>
  );
}
