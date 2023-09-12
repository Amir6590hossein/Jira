import React from "react";

export default function Login() {
  return (
    <div>
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
    </div>
  );
}
