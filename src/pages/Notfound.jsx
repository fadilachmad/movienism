import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="min-h-screen flex justify-center items-center font-black text-6xl flex-col">
      <h1>404</h1>
      <h2>Not Found</h2>
      <Link to={"/"} className="text-xl font-normal underline mt-10">
        Go Back
      </Link>
    </div>
  );
};

export default Notfound;
