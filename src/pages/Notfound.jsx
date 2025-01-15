import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="min-h-screen flex justify-center items-center  text-3xl flex-col">
      <h1>404 | Not Found</h1>
      <Link to={"/"} className="text-xl font-normal underline mt-10">
        Back to Home Page
      </Link>
    </div>
  );
};

export default Notfound;
