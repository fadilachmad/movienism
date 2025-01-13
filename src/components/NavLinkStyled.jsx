import React from "react";
import { NavLink } from "react-router-dom";

const NavLinkStyled = ({ to, children }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `hover:bg-primary mx-2 px-3 py-2 rounded-md text-center my-1 ${
          isActive && "bg-primary"
        }`
      }
      to={to}
    >
      {children}
    </NavLink>
  );
};

export default NavLinkStyled;
