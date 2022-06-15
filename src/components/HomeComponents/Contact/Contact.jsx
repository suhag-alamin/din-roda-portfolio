import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <Container className="py-5">
        <div className="contact-form-box py-5 px-5 rounded-3">
          <h3 className="section-title">CONTACT ME</h3>
          <div>
            <Form>
              <Form.Control className="mb-4" type="text" placeholder="Name" />
              <Form.Control className="mb-4" type="tell" placeholder="Phone" />
              <Form.Control className="mb-4" type="email" placeholder="Email" />
              <Form.Control
                className="mb-4"
                type="text"
                placeholder="Project Type"
              />
              <Button
                variant="primary"
                style={{ backgroundColor: "#2A3177", width: "100%" }}
              >
                SEND
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
