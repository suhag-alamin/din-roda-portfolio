import React from "react";
import { Container } from "react-bootstrap";
import "./Projects.css";
import projectThumb from "../../../images/project-thumb.svg";

const projects = [
  {
    id: 1,
    title: "Fortnite - buy skins by accumulating points",
    description:
      "An app that pull data from google sheets api, and the system calculates Some total claims opened by the dates entered and see all their details was open. In addition, the system also calculates the total number of claims opened. The user has the ability to choose which column of dates in google sheets the system will perform a calculation, each column returns different information.",
    features: [
      "Google Drive API - get access to google sheets",
      "Real-time API calls",
      "Google-Sheets - pull all the data",
      "Powered by Material UI",
      "Pulls the number of columns, and performs a math calculation on them",
    ],
    technologies: [
      "React",
      "Material UI",
      "Node JS",
      "Express",
      "Google drive API",
      "Google Sheets",
    ],
    projectLink: "example.com",
    like: 0,
    thumb: projectThumb,
  },
  {
    id: 2,
    title: "Fortnite - buy skins by accumulating points",
    description:
      "An app that pull data from google sheets api, and the system calculates Some total claims opened by the dates entered and see all their details was open. In addition, the system also calculates the total number of claims opened. The user has the ability to choose which column of dates in google sheets the system will perform a calculation, each column returns different information.",
    features: [
      "Google Drive API - get access to google sheets",
      "Real-time API calls",
      "Google-Sheets - pull all the data",
      "Powered by Material UI",
      "Pulls the number of columns, and performs a math calculation on them",
    ],
    technologies: [
      "React",
      "Material UI",
      "Node JS",
      "Express",
      "Google drive API",
      "Google Sheets",
    ],
    projectLink: "example.com",
    like: 5,
    thumb: projectThumb,
  },
  {
    id: 3,
    title: "Fortnite - buy skins by accumulating points",
    description:
      "An app that pull data from google sheets api, and the system calculates Some total claims opened by the dates entered and see all their details was open. In addition, the system also calculates the total number of claims opened. The user has the ability to choose which column of dates in google sheets the system will perform a calculation, each column returns different information.",
    features: [
      "Google Drive API - get access to google sheets",
      "Real-time API calls",
      "Google-Sheets - pull all the data",
      "Powered by Material UI",
      "Pulls the number of columns, and performs a math calculation on them",
    ],
    technologies: [
      "React",
      "Material UI",
      "Node JS",
      "Express",
      "Google drive API",
      "Google Sheets",
    ],
    projectLink: "example.com",
    like: 2,
    thumb: projectThumb,
  },
  {
    id: 4,
    title: "Fortnite - buy skins by accumulating points",
    description:
      "An app that pull data from google sheets api, and the system calculates Some total claims opened by the dates entered and see all their details was open. In addition, the system also calculates the total number of claims opened. The user has the ability to choose which column of dates in google sheets the system will perform a calculation, each column returns different information.",
    features: [
      "Google Drive API - get access to google sheets",
      "Real-time API calls",
      "Google-Sheets - pull all the data",
      "Powered by Material UI",
      "Pulls the number of columns, and performs a math calculation on them",
    ],
    technologies: [
      "React",
      "Material UI",
      "Node JS",
      "Express",
      "Google drive API",
      "Google Sheets",
    ],
    projectLink: "example.com",
    like: 10,
    thumb: projectThumb,
  },
];

const Projects = () => {
  return (
    <div className="projects-section">
      <Container className="py-5">
        <h3 className="section-title">PROJECTS</h3>
      </Container>
    </div>
  );
};

export default Projects;
