import React from "react";
import Logo from "../assets/svg/Logo";
import NavLinkStyled from "./NavLinkStyled";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center fixed top-5 left-0 w-full z-50 px-5 md:px-16">
      <Link to={"/"} className="logo w-36 md:w-fit flex items-center">
        <Logo />
      </Link>
      <nav className="hidden border-4 border-gray-800 bg-[#0f0f0f] text-white md:flex items-center justify-evenly rounded-lg">
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/movies">Movies</NavLinkStyled>
        <NavLinkStyled to="/tv">TV Shows</NavLinkStyled>
        <NavLinkStyled to="/people">People</NavLinkStyled>
      </nav>
      <SearchInput placeholder="Search Movie..." />
    </header>
  );
};

export default Navbar;
