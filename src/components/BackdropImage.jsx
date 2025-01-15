import React from "react";

const BackdropImage = ({ children }) => {
  return (
    <div className="relative w-screen bg-cover bg-center  bg-no-repeat bg-[url('https://image.tmdb.org/t/p/original/vZG7PrX9HmdgL5qfZRjhJsFYEIA.jpg')]">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-[rgba(26,26,26,0.6)] via-30% to-[rgba(20,20,20,1)] to-75%"></div>
      <div className="scale-90 md:scale-100 relative z-10 text-center flex items-center flex-col">
        {children}
      </div>
    </div>
  );
};

export default BackdropImage;
