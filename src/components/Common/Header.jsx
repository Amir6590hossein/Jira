import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  useEffect(() => {
    console.log("hrader");
  }, []);
  return (
    <div className="Header-Parent">
      <div className="Header">
        <h1>Train</h1>
        <h3>
          <Link to="/Home">Home</Link>
        </h3>
        <h3>
          <a href={"https://www.youtube.com/"}>Demo</a>
        </h3>
        <h3>
          <Link to={"/#contact"}>Contact</Link>
        </h3>
      </div>
    </div>
  );
}
