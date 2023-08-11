import React, { useState } from "react";
import image from "../assets/hamburger-menu-svgrepo-com.svg";
const Navbar = () => {
const [manue, setmanue] = useState(true);

  return (
    <nav>
      <h2>logo</h2>
      <div className="links">
        <a className="link-item" href="/">Home</a>
        <a className="link-item" href="/tools">Tools</a>
        <a className="link-item" href="/contact">Contact</a>
        <img
          src={image}
          className="burger"
          alt="Burger Icone"
          onClick={() => setmanue((manue) => !manue)}
        />

        <div className={`${manue ?'sideBarNav':'showSide'}`}>
          <a href="/">Home</a>
          <a href="/tools">Tools</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
