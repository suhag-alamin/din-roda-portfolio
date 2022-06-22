import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { FiLink2 } from "react-icons/fi";
import { BsGithub, BsServer } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import checkCircle from "../../../images/check-circle.svg";

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

const PortfolioModal = ({ handleModalClose, show, project }) => {
  const { gallery } = project;

  // slider
  const settings = {
    dots: false,
    infinite: false,
    lazyLoad: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextBtn />,
    prevArrow: <PreviousBtn />,
    cssEase: "linear",
  };

  return (
    <>
      <Modal size="lg" className="modal" show={show} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title className="project-title">{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {/* gallery */}
            <Slider {...settings}>
              {gallery?.map((g) => (
                <div className="px-5">
                  <img
                    className="gallery-img img-fluid"
                    key={g}
                    src={g}
                    alt=""
                  />
                </div>
              ))}
            </Slider>
          </div>
          {/* body  */}
          <div>
            <div className="project-des">
              <h3 data-aos="fade-down" className="project-box-title">
                Description
              </h3>
              <p data-aos="fade-down" className="project-des">
                {project.description}
              </p>
            </div>
            <div className="features">
              <h3 data-aos="fade-right" className="project-box-title">
                Features
              </h3>
              <div className="my-3">
                {project.features.map((feature) => (
                  <div
                    data-aos="fade-right"
                    className="d-flex align-items-start gap-1 gap-md-2"
                  >
                    <img
                      src={checkCircle}
                      className="check-circle"
                      alt="check-circle"
                    />
                    <p className="project-des">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="tech-used">
              <h3 data-aos="fade-up" className="project-box-title">
                Tech Used
              </h3>
              <div className="my-3 d-flex gap-1 gap-md-3 flex-wrap">
                {project.technologies.map((tech) => (
                  <div
                    data-aos="fade-up"
                    className="d-flex flex-row align-items-start gap-1 gap-md-2"
                  >
                    <img
                      src={checkCircle}
                      className="check-circle"
                      alt="check-circle"
                    />
                    <p className="project-des">{tech}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* button links  */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              marginTop: 5,
              marginBottom: 5,
              cursor: "pointer",
            }}
          >
            <a href="" className="modal-btn" target="_blank" rel="noreferrer">
              <FiLink2 className="me-2" />
              Visit Website
            </a>
            <a className="modal-btn" href="" target="_blank" rel="noreferrer">
              <BsGithub className="me-2" />
              Client-side code
            </a>
            <a className="modal-btn" href="" target="_blank" rel="noreferrer">
              <BsServer className="me-2" />
              server-side code
            </a>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            style={{ backgroundColor: "#2A3177" }}
            onClick={handleModalClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PortfolioModal;
