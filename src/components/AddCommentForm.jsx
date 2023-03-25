import React, { useState } from "react";
import axios from "axios";

const AddCommentForm = ({ articleName, onArticleUpdated }) => {
  const [name, setName] = useState("");
  const [commentText, setCommentText] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL;
  const addComment = async () => {
    const res = await axios.post(
      apiUrl + `api/articles/${articleName}/comments`,
      {
        postedBy: name,
        text: commentText,
      }
    );
    const updatedArticle = res.data;
    onArticleUpdated(updatedArticle);
    setCommentText("");
    setName("");
  };
  return (
    <div id="add-comment-form">
      <h3>Add a comment</h3>
      <label htmlFor="">
        Name:
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
      </label>
      <label htmlFor="">
        Comment:
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          name=""
          id=""
          cols="50"
          rows="4"
        ></textarea>
      </label>
      <button onClick={addComment}>Add comment</button>
    </div>
  );
};

export default AddCommentForm;
