import React from "react";
import Navbar from "../components/Navbar";
import BackdropImage from "../components/BackdropImage";

const Movies = () => {
  return (
    <div>
      <Navbar />
      <BackdropImage query="/movie/now_playing">
        <h1>kons</h1>
      </BackdropImage>
    </div>
  );
};

export default Movies;
