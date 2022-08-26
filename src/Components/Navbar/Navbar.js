import React, { useState } from "react";
import logo from './logo.svg'
import './navbar.css';

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <img className="logo" src={logo} alt="logo" />
      
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Courses
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Hire Talent
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Blog
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            ISA
          </a>
        </li>
      </ul>
      <button className="callback">Request Call Back</button>
      
    </nav>
  );
}

export default Navbar;