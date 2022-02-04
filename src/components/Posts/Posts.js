import { useEffect, useState } from "react";
import Post from "./Post";
import Loader from "./Loader";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className="posts">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Posts;
