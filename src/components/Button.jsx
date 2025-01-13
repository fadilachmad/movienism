import React from "react";

const Button = ({ children }) => {
  return (
    <button className="hidden md:inline-flex items-center justify-center border border-white text-white rounded-md px-6 py-3 font-medium hover:bg-black hover:text-white">
      {children}
    </button>
  );
};

export default Button;
