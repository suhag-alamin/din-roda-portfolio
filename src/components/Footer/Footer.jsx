import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import linkedin from "../../images/LinkedIN.svg";
import instagram from "../../images/instagram.svg";
import facebook from "../../images/Facebook.svg";

const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <Container className="py-5">
          <Row className="g-5">
            <Col md={4}>
              <div className="text-end">
                <h3 className="footer-title">CONTACT</h3>
                <div className="d-flex flex-column ">
                  <a className="text-black" href="tel:054-456-9872">
                    054-456-9872
                  </a>
                  <a className="text-black" href="mailto:info@dinroda.com">
                    info@dinroda.com
                  </a>
                </div>
                <div className="d-flex gap-2 justify-content-end align-align-items-center my-4">
                  <a
                    href="http://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img width={30} height={30} src={linkedin} alt="" />
                  </a>
                  <a
                    href="http://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img width={30} height={30} src={instagram} alt="" />
                  </a>
                  <a
                    href="http://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img width={30} height={30} src={facebook} alt="" />
                  </a>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-end">
                <h3 className="footer-title">MISSION</h3>
                <p>
                  diagnosing and building a preliminary strategy for using
                  business automation the automated business - accompaniment to
                  the construction of processes and the implementation of
                  automation systems complementary products for turning your
                  business into an effective machine
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-end">
                <h3 className="footer-title">VISION</h3>
                <p>
                  help businesses achieve maximum growth by consulting a
                  business focused on building and implementing effective
                  technology-based work processes and business automation. i'd
                  love to take your business to the next level.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-copyright">
        <Container className="py-3 text-center">
          <p>&copy; DINRODA 2022</p>
        </Container>
      </div>
    </>
  );
};

export default Footer;
