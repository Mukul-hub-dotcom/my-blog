import React from "react";
import { useParams } from "react-router-dom";
import articles from "./article-content";
import NotFoundPage from "./NotFoundPage";
const ArticlePage = () => {
  const { articleId } = useParams();
  const article = articles.find((article) => article.name == articleId);
  if (!article) {
    return <NotFoundPage />;
  }
  return (
    <div>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, i) => {
        return <p key={i}>{paragraph}</p>;
      })}
    </div>
  );
};

export default ArticlePage;
