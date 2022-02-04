import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SinglePostPage = (props) => {
  const params = useParams();
  const postId = params.id;
  const [post, setPost] = useState({});
  const getSinglePost = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      const data = await res.json();
      setPost(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSinglePost();
  }, []);
  return (
    <div className="postPage">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to="/posts" className="linkToHome">
        Back to posts page
      </Link>
    </div>
  );
};

export default SinglePostPage;
