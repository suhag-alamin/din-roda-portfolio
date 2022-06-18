import { Button, Card, Col, Container, Row } from "react-bootstrap";
import dinMobile from "../../../images/din-roda-mobile.png";
import din from "../../../images/din-roda.png";
import github from "../../../images/Github.svg";
import linkedin from "../../../images/LinkedIN.svg";
import quote from "../../../images/quote.svg";
import Navigation from "../../Navigation/Navigation";
import "./Banner.css";

const Banner = ({ transparent }) => {
  return (
    <>
      <div className="pb-2 pb-md-0 header-section">
        <div className="banner-section">
          <div className="">
            <Navigation transparent={transparent} />
          </div>
          <Container fluid className="pt-5 banner-container d-none d-md-block">
            <Row className="">
              <Col md={6} className="">
                <div className="banner-col ps-5 text-end">
                  <div className="text-end">
                    <img src={quote} alt="" />
                  </div>
                  <h2 className="my-4 fs-2">
                    effective business conduct based on up-to-date technology is
                    the basis for success in the current era.
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
              <Col className="" md={6}>
                <div className="din-roda text-end">
                  <img src={din} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
          {/* mobile  */}
          <Container className="pt-5 d-block d-md-none mobile-container">
            <Row className="">
              <Col xs={12}>
                <div className="din-roda text-end">
                  <img src={dinMobile} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Container className="d-block d-md-none">
        <Card className="mobile-banner">
          <div className="banner-col text-end">
            <div className="text-end mt-2">
              <img className="w-25" src={quote} alt="" />
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
        </Card>
      </Container>
    </>
  );
};

export default Banner;
