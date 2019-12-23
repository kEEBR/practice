import * as React from "react";

const Navbar = () => {
  return (
    <div className="burger-menu ">
      <a href="#" className="burger-menu__button">
        <span className="burger-menu__lines"></span>
      </a>
      <nav className="burger-menu__nav">
        <a href="/" className="burger-menu__link">
          Home
        </a>
        <a href="/DisplayGit" className="burger-menu__link">
          GitProfile
        </a>
      </nav>
      <div className="burger-menu__overlay"></div>
    </div>
  );
};

export default Navbar;
