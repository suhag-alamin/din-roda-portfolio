import React from "react";
import Navigation from "../../Navigation/Navigation";
import ArticleHeader from "../ArticleHeader/ArticleHeader";
import "./Article.css";

const Article = ({ transparent }) => {
  return (
    <div>
      <Navigation transparent={transparent} />
      <ArticleHeader />
    </div>
  );
};

export default Article;
