import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  useEffect(() => {
    console.log("hrader");
  }, []);
  return (
    <div className=" Header-parent">
      <div className="Header">
        <h1 className="Header-Child Train">
          <i class="fa-solid fa-train"></i>
          Train
        </h1>
        <h5>
          <Link to="/" className="Header-Child">
            Home
          </Link>
        </h5>
        <h5>
          <a href={"https://www.youtube.com/"} className="Header-Child">
            Demo
          </a>
        </h5>
        <h5>
          <Link to={"/#contact"} className="Header-Child">
            Contact
          </Link>
        </h5>
      </div>

      <div>
        <button className="btn btn-danger">Sign in</button>
      </div>
    </div>
  );
}
