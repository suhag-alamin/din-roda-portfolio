import React from "react";
import { Button, Container, Form, Stack } from "react-bootstrap";

const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <Container className="p-5">
        <div className="text-center my-5">
          <h3>Want to find out about an automation package for businesses?</h3>
          <p>
            please leave your details and i will get back to you as soon as
            possible
          </p>
        </div>
        <Stack
          className="mb-5 d-flex flex-column flex-md-row"
          direction="horizontal"
          gap={3}
        >
          <Form.Control className="me-auto" type="text" placeholder="Name" />
          <Form.Control className="me-auto" type="email" placeholder="Email" />
          <Form.Control
            className="me-auto"
            type="tell"
            placeholder="Phone No."
          />
          <Button
            variant="text"
            style={{ backgroundColor: "#EFCB68", width: "100%" }}
          >
            Send
          </Button>
        </Stack>
      </Container>
    </div>
  );
};

export default Newsletter;
