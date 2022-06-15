import React from "react";
import Banner from "../Banner/Banner";
import Mission from "../Mission/Mission";
import Projects from "../Projects/Projects";
import TechSkills from "../TechSkills/TechSkills";

const Home = () => {
  return (
    <div>
      <Banner />
      <TechSkills />
      <Projects />
      <Mission />
    </div>
  );
};

export default Home;
