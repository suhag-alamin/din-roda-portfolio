import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import businessProcess from "../../../images/business-process.png";
import checkCirle from "../../../images/check-circle.svg";

const BusinessProcess = () => {
  return (
    <Container className="py-5">
      <Row className="g-4">
        <Col md={4}>
          <div className="text-center">
            <img src={businessProcess} alt="" />
          </div>
        </Col>
        <Col md={8}>
          <div>
            <p>
              We focus on 5 lateral processes in the business, build, improve
              and connect them together to achieve maximum efficiency, based on
              business automation systems based on up-to-date technology.
            </p>
            <h3 className="business-title">
              The business processes we will handle:
            </h3>
            <div className="my-4">
              <div className="d-flex  align-items-start gap-3">
                <img src={checkCirle} alt="" />
                <div>
                  <h5 className="process-title">Marketing</h5>
                  <p>
                    Products, marketing funnels, lead collection systems and
                    tracking the effectiveness of marketing channels
                  </p>
                </div>
              </div>
              <div className="d-flex  align-items-start gap-3">
                <img src={checkCirle} alt="" />
                <div>
                  <h5 className="process-title">Sales</h5>
                  <p>
                    Sales process, folau up mechanisms, contracting process,
                    documents, sales tracking
                  </p>
                </div>
              </div>
              <div className="d-flex  align-items-start gap-3">
                <img src={checkCirle} alt="" />
                <div>
                  <h5 className="process-title">
                    Operations and customer service{" "}
                  </h5>
                  <p>
                    Customer absorption, service delivery processes, customer
                    service, vendor management
                  </p>
                </div>
              </div>
              <div className="d-flex  align-items-start gap-3">
                <img src={checkCirle} alt="" />
                <div>
                  <h5 className="process-title">
                    Money management and collection - collection mechanisms,
                  </h5>
                  <p>Payment tracking, cash flow, business forecast</p>
                </div>
              </div>
              <div className="d-flex  align-items-start gap-3">
                <img src={checkCirle} alt="" />
                <div>
                  <h5 className="process-title">Customer retention</h5>
                  <p>
                    Customer retention mechanisms that exist in the business
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p>
                Among the common examples of business automation systems are the
                CRM systems (customer management system), automated
                communication mechanisms with leads and customers through a
                variety of channels (email, whatsapp, SMS), management of the
                landing/sale page system, connection to clearing systems and the
                UAV and more...
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BusinessProcess;
