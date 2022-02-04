import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <li className="post">
      <h2>{post.title}</h2>
      <p>{post.body.substr(0, 100)}...</p>
      <Link to={`/singlePostPage/${post.id}`}>Read more</Link>
    </li>
  );
};

export default Post;
