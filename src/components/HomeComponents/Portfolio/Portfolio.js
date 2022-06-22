import { Button, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import projectThumb from "../../../images/project-thumb.svg";
import "./Portfolio.css";
import SinglePortfolio from "./SinglePortfolio";

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
    like: false,
    thumb: projectThumb,
    gallery: [
      projectThumb,
      projectThumb,
      projectThumb,
      projectThumb,
      projectThumb,
      projectThumb,
      projectThumb,
      projectThumb,
      projectThumb,
      projectThumb,
    ],
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
    gallery: [
      projectThumb,
      projectThumb,
      projectThumb,
      projectThumb,
      projectThumb,
      projectThumb,
      projectThumb,
      projectThumb,
      projectThumb,
      projectThumb,
    ],
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
    gallery: [
      projectThumb,
      projectThumb,
      projectThumb,
      projectThumb,
      projectThumb,
      projectThumb,
      projectThumb,
      projectThumb,
      projectThumb,
      projectThumb,
    ],
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
    gallery: [
      projectThumb,
      projectThumb,
      projectThumb,
      projectThumb,
      projectThumb,
      projectThumb,
      projectThumb,
      projectThumb,
      projectThumb,
      projectThumb,
    ],
  },
];

const Portfolio = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   setIsLoading(true);
  //   axios
  //     .get("https://suhag-portfolio.herokuapp.com/projects")
  //     .then((result) => {
  //       setProjects(result.data.projects);
  //       setIsLoading(false);
  //     });
  // }, []);

  const handleClick = () => {
    navigate("/portfolio");
  };

  return (
    <div id="portfolio">
      <Container className="py-5">
        <h3 className="section-title">PROJECTS</h3>
        <div>
          <Row xs={1} md={3} className="g-4">
            {projects.slice(0, 3).map((project) => (
              <SinglePortfolio key={project.id} project={project} />
            ))}
          </Row>
        </div>
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <Button
            onClick={handleClick}
            variant="primary"
            style={{ backgroundColor: "#2A3177" }}
          >
            See All Projects
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
