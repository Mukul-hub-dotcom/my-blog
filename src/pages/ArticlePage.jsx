import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import articles from "./article-content";
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";
import NotFoundPage from "./NotFoundPage";
const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
  const { articleId } = useParams();
  const apiUrl = process.env.REACT_APP_API_URL;
  useEffect(() => {
    const loadArticleInfo = async () => {
      try {
        const response = await axios.get(apiUrl + `api/articles/${articleId}`);
        const newArticleInfo = response.data;
        // console.log(newArticleInfo);
        setArticleInfo(newArticleInfo);
      } catch (error) {
        console.log(error);
      }
    };

    loadArticleInfo();
  }, [articleId]);

  const article = articles.find((article) => article.name == articleId);
  const addUpvote = async () => {
    const res = await axios.put(apiUrl + `api/articles/${articleId}/upvote`);
    var updatedArticle = res.data;
    setArticleInfo(updatedArticle);
  };
  if (!article) {
    return <NotFoundPage />;
  }
  return (
    <div>
      <h1>{article.title}</h1>
      <div className="upvotes-section">
        <button onClick={addUpvote}>Upvote</button>
        <p>This article has {articleInfo.upvotes} upvotes</p>
      </div>

      {article.content.map((paragraph, i) => {
        return <p key={i}>{paragraph}</p>;
      })}

      <AddCommentForm
        articleName={articleId}
        onArticleUpdated={(updatedArticle) => setArticleInfo(updatedArticle)}
      />
      <CommentsList comments={articleInfo.comments} />
    </div>
  );
};

export default ArticlePage;
