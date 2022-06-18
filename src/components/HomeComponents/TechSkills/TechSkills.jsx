import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./TechSkills.css";
import effectiveBusiness from "../../../images/effective-business.svg";
import businessAutomation from "../../../images/business-automation.svg";
import businessStrategy from "../../../images/business-strategy.svg";
import checkCircle from "../../../images/check-circle.svg";

const TechSkills = () => {
  return (
    <div id="skills" className="tech-skills-section">
      <Container className="py-5">
        <h3 className="section-title">TECH SKILLS</h3>
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card className="p-2 p-md-4 h-100">
              <Card.Img
                variant="top"
                className="tech-skill-icon"
                src={effectiveBusiness}
              />
              <Card.Body>
                <Card.Title className="tech-skills-title">
                  Effective Business Consultancy
                </Card.Title>
                <Card.Text className="tech-skills-des">
                  The main objective of the process of accompanying the
                  effective consultation is to lead the business owner to
                  maximum business growth and accompany him all the way there
                  and includes, among other things:
                </Card.Text>
                <div>
                  <div className="d-flex align-items-start gap-2">
                    <img
                      src={checkCircle}
                      className="check-circle"
                      alt="check-circle"
                    />
                    <p className="tech-skills-des">
                      Define product portfolio and target audience targeting
                    </p>
                  </div>
                  <div className="d-flex align-items-start gap-2">
                    <img
                      src={checkCircle}
                      className="check-circle"
                      alt="check-circle"
                    />
                    <p className="tech-skills-des">
                      Building a strategy and marketing plan
                    </p>
                  </div>
                  <div className="d-flex align-items-start gap-2">
                    <img
                      src={checkCircle}
                      className="check-circle"
                      alt="check-circle"
                    />
                    <p className="tech-skills-des">Writing sales scripts</p>
                  </div>
                  <div className="d-flex align-items-start gap-2">
                    <img
                      src={checkCircle}
                      className="check-circle"
                      alt="check-circle"
                    />
                    <p className="tech-skills-des">
                      Building a business forecas
                    </p>
                  </div>
                </div>
              </Card.Body>
              <Card.Footer className="bg-transparent border-0 text-center">
                <Button
                  variant="primary"
                  style={{ backgroundColor: "#2A3177" }}
                >
                  Learn more
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card className="p-4 h-100">
              <Card.Img
                variant="top"
                className="tech-skill-icon"
                src={businessAutomation}
              />
              <Card.Body>
                <Card.Title className="tech-skills-title">
                  Business automation package - building processes and
                  implementing automation systems
                </Card.Title>
                <Card.Text className="tech-skills-des">
                  The main purpose of this escort program is to give the
                  business owner an orderly, efficient and efficient business.
                  the program is based on building effective work processes and
                  implementing up-to-date automation systems in the business.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="bg-transparent border-0 text-center">
                <Button
                  variant="primary"
                  style={{ backgroundColor: "#2A3177" }}
                >
                  Learn more
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card className="p-4 h-100">
              <Card.Img
                variant="top"
                className="tech-skill-icon"
                src={businessStrategy}
              />
              <Card.Body>
                <Card.Title className="tech-skills-title">
                  Diagnostic meeting and building an initial strategy for using
                  business automation
                </Card.Title>
                <Card.Text className="tech-skills-des">
                  The purpose of the meeting is to give the business owner a
                  centralized and organized report with the findings and
                  recommendations for turning the business into an automated,
                  efficient and profitable business.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="bg-transparent border-0 text-center">
                <Button
                  variant="primary"
                  style={{ backgroundColor: "#2A3177" }}
                >
                  Learn more
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TechSkills;
