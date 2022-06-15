import React from "react";
import Banner from "../Banner/Banner";
import Mission from "../Mission/Mission";
import Projects from "../Projects/Projects";
import Reviews from "../Reviews/Reviews";
import TechSkills from "../TechSkills/TechSkills";

const Home = () => {
  return (
    <div>
      <Banner />
      <TechSkills />
      <Projects />
      <Mission />
      <Reviews />
    </div>
  );
};

export default Home;
