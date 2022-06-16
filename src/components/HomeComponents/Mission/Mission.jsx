import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Mission.css";
import dinStanding from "../../../images/mission.png";

const Mission = () => {
  return (
    <div id="experience">
      <Container fluid className=" px-0">
        <Row className="g-0">
          <Col md={4}>
            <div className="h-100">
              <img className="img-fluid" src={dinStanding} alt="" />
            </div>
          </Col>
          <Col md={8}>
            <div className="mission-des-box h-100">
              <h3 className="mission-title">MISSION STATEMENT</h3>
              <p className="mission-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Venenatis aliquam nulla dictumst vulputate elit consequat
                turpis. Tincidunt commodo posuere commodo velit nunc eget dis
                diam justo. A adipiscing ut aliquam ut id elit auctor. Eget
                tincidunt nibh est scelerisque cursus suspendisse eu cras. Augue
                ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                <br />
                Venenatis aliquam nulla dictumst vulputate elit consequat
                turpis. Tincidunt commodo posuere commodo velit nunc eget dis
                diam justo. A adipiscing ut aliquam ut id elit auctor. Eget
                tincidunt nibh est scelerisque cursus suspendisse eu cras. Augue
                ut.
              </p>
              <Button variant="light">View Article</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Mission;
