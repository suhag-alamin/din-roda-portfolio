import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import "./About.css";

const About = ({ transparent }) => {
  return (
    <div className="about-page">
      <Navigation transparent={transparent} />
      <div className="about-container">
        <h3 className="section-title text-white">About Me</h3>
      </div>
      <Container className="py-5">
        <h3 className="about-title">Hi there! I am Din roda.</h3>
        <p className="about-des">
          I am a Fullstack developer. I am passionate about my work with a keen
          eye for aesthetics. I am a quick learner, detail oriented and am
          excellent at strategic planning. I am also flexible and easy-going
          with superb interpersonal skills, which makes me a great team player &
          as developer. Loves to learn new things on my own,and i always
          Improves my skills.my goal is always driven towards providing amazing
          experience with the best level of quality and service to them. I live
          and breathe the web app development world that i love so much.
        </p>
      </Container>
    </div>
  );
};

export default About;
