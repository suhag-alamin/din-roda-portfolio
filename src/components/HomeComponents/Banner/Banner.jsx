import { Button, Col, Container, Row } from "react-bootstrap";
import din from "../../../images/din-roda.png";
import github from "../../../images/Github.svg";
import linkedin from "../../../images/LinkedIN.svg";
import quote from "../../../images/quote.svg";
import Navigation from "../../Navigation/Navigation";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-section">
      <Navigation />
      <Container fluid className="pt-5">
        <Row className="">
          <Col md={6} className="d-none d-md-block">
            <div className="banner-col ps-5 text-end">
              <div className="text-end">
                <img src={quote} alt="" />
              </div>
              <h2 className="my-4 fs-2">
                effective business conduct based on up-to-date technology is the
                basis for success in the current era.
              </h2>
              <h3 className="my-2 fs-1">Din Roda</h3>
              <p>I am a Full Stack Developer</p>
              <div>
                <div className="d-flex gap-3 justify-content-end">
                  <Button variant="light">About me</Button>
                  <Button variant="light">Talk with me</Button>
                </div>
                <div className="d-flex gap-2 justify-content-end my-4">
                  <a
                    href="http://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                  <a
                    href="http://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={github} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="din-roda text-end">
              <img src={din} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;