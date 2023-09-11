import React from "react";

export default function Register() {
  return (
    <div>
      <input
        type="text"
        name="fullname"
        placeholder="fullname"
        aria-describedby="fullname"
      ></input>
      <input
        type="email"
        placeholder="email"
        aria-describedby="email"
        name="email"
      ></input>
      <input
        type="password"
        placeholder="password"
        name="password"
        aria-describedby="password"
      ></input>
      <input
        type="password"
        placeholder="password"
        name="confirm-password"
        aria-describedby="confirm-password"
      ></input>
    </div>
  );
}
