import React from "react";
import { Card, Container } from "react-bootstrap";
import "./Projects.css";
import projectThumb from "../../../images/project-thumb.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// slider next prev
const PreviousBtn = (props) => {
  const { onClick } = props;
  return (
    <div className={"PreviousArrow"} onClick={onClick}>
      <IoIosArrowBack />
    </div>
  );
};
const NextBtn = (props) => {
  const { onClick } = props;
  return (
    <div className={"NextArrow"} onClick={onClick}>
      <IoIosArrowForward />
    </div>
  );
};

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
  // slider
  const settings = {
    dots: false,
    infinite: false,
    lazyLoad: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextBtn />,
    prevArrow: <PreviousBtn />,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="projects-section">
      <Container className="py-5">
        <h3 className="section-title">PROJECTS</h3>
        <div className="mt-5">
          <Slider {...settings}>
            {projects.map((project) => (
              <div key={project.id} className="single-slide">
                <Card className="p-4 h-100">
                  <Card.Img variant="top" src={project.thumb} />
                  {console.log(project)}
                  <Card.Body>
                    <Card.Title className="project-title">
                      {project.title}
                    </Card.Title>
                    <Card.Text className="tech-skills-des">
                      The purpose of the meeting is to give the business owner a
                      centralized and organized report with the findings and
                      recommendations for turning the business into an
                      automated, efficient and profitable business.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
