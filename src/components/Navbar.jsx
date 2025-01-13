import React from "react";
import Logo from "../assets/svg/Logo";
import NavLinkStyled from "./NavLinkStyled";

const Navbar = () => {
  return (
    <header className="flex justify-between fixed top-5 left-0 w-full z-50 px-5 md:px-16">
      <div className="logo flex items-center">
        <Logo />
      </div>
      <nav className="hidden border-4 border-gray-800 bg-[#0f0f0f] text-white md:flex items-center justify-evenly rounded-lg">
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/movie">Movies & Shows</NavLinkStyled>
        <NavLinkStyled to="/support">Support</NavLinkStyled>
        <NavLinkStyled to="/subscription">Subscription</NavLinkStyled>
      </nav>
      <button className="hidden md:inline-flex font-urbanist items-center justify-between border border-white text-white rounded-md px-6 font-sm hover:bg-white hover:text-dark">
        Register
      </button>
    </header>
  );
};

export default Navbar;
