import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="h-[1000px]">
      <Navbar />
      <Hero />
      <Categories />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
