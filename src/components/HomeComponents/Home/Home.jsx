import React from "react";
import About from "../../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Mission from "../Mission/Mission";
import Projects from "../Projects/Projects";
import Reviews from "../Reviews/Reviews";
import TechSkills from "../TechSkills/TechSkills";

const Home = ({ transparent }) => {
  return (
    <div>
      <Banner transparent={transparent} />
      <TechSkills />
      <Projects />
      <Mission />
      <Reviews />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
