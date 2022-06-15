import React from "react";
import Navigation from "../../Navigation/Navigation";
import ArticleHeader from "../ArticleHeader/ArticleHeader";
import BusinessProcess from "../BusinessProcess/BusinessProcess";
import Workflow from "../Workflow/Workflow";
import "./Article.css";

const Article = ({ transparent }) => {
  return (
    <div>
      <Navigation transparent={transparent} />
      <ArticleHeader />
      <Workflow />
      <BusinessProcess />
    </div>
  );
};

export default Article;
