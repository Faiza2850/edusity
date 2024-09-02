import React from "react";
import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

export const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setStickky(true) : setSticky(false);
    });
  }, []);

  return (
    <>
      <nav className={`container ${sticky ? "dark-nav" : ""}`}>
        <img src={logo} alt="" className="logo" />
        <ul className="nav-items">
          <li>Home</li>
          <li>Program</li>
          <li>About Us</li>
          <li>Testimonials</li>
          <li>Campus</li>
          <li>
            <button className="btn">Contact Us</button>
          </li>
        </ul>
      </nav>
    </>
  );
};
