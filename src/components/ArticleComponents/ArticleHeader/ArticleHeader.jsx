import React from "react";
import { Container } from "react-bootstrap";

const ArticleHeader = () => {
  return (
    <div>
      <div className="article-container">
        <h3 className="page-title">Business Automation Package</h3>
      </div>
      <Container className="py-5">
        <p className="article-des">
          The main goal of a business automation package is to make your
          business organized, effective and efficient. we will do this by
          building effective work processes in the business and implementing
          business automation systems based on up-to-date technology.
        </p>
      </Container>
    </div>
  );
};

export default ArticleHeader;
