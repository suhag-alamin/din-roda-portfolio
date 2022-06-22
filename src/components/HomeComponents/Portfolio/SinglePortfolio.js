import { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { FiLink2 } from "react-icons/fi";
import PortfolioModal from "./PortfolioModal";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const SinglePortfolio = ({ project, projects }) => {
  const { title, description, projectLink, thumb, technologies } = project;

  const [show, setShow] = useState(false);

  const handleModalClose = () => setShow(false);
  const modalOpen = () => setShow(true);

  const [like, setLike] = useState(0);
  const handleLike = (id) => {
    console.log(id);
    projects.find((project) => project.id === id).like += 1;
    setLike(projects.find((project) => project.id === id).like);
    // project.id === id.like += 1
    // setLike(project.id.like);
    console.log(like);
  };

  return (
    <>
      <Col>
        <Card
          data-aos="flip-left"
          data-aos-duration="1000"
          className="project-card h-100"
        >
          <div className="project-thumb-box">
            <img className="project-thumbnail" src={thumb} alt={title} />
          </div>
          <Card.Body>
            <h3 style={{ fontWeight: 700, fontSize: 20 }}>{title}</h3>
            <p>{description.slice(0, 120)}...</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, mt: 2 }}>
              {technologies.slice(0, 5).map((technology) => (
                <span
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  key={technology}
                  className="technology"
                >
                  {technology}
                </span>
              ))}
            </div>
          </Card.Body>
          <Card.Footer
            data-aos="fade-up"
            data-aos-duration="1000"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
            className="px-4 my-2 border-0 bg-white"
          >
            <Button style={{}} size="small" variant="outlined" color="info">
              <div data-aos="fade-up" data-aos-duration="1500">
                <a
                  style={{ color: "#222" }}
                  href={projectLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiLink2 className="me-2" />
                  Visit Website
                </a>
              </div>
            </Button>
            <div>
              <div
                data-aos="fade-up-right"
                data-aos-duration="1500"
                onClick={() => handleLike(project.id)}
                className="like-button"
              >
                {!project.like ? <AiOutlineHeart /> : <AiFillHeart />}
                <span>{project.like}</span>
              </div>
            </div>
            <Button
              variant="primary"
              onClick={modalOpen}
              style={{ backgroundColor: "#2A3177" }}
            >
              Details
            </Button>
          </Card.Footer>
        </Card>
      </Col>
      <PortfolioModal
        modalOpen={modalOpen}
        handleModalClose={handleModalClose}
        show={show}
        project={project}
      />
    </>
  );
};

export default SinglePortfolio;
