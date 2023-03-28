import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PostList.css";
import { NavLink, Link, useParams } from "react-router-dom";
import CommentsUsers from "../Comments/CommentsUsers";
import { Button } from "react-bootstrap";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [showComments, setShowComments] = useState(null);
  const { username } = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="container rounded">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <div className="userPost">
            <Link to="/user">
              <img src="https://avatars.githubusercontent.com/u/121310442?v=4" />
            </Link>
            <h4>User {username}</h4>
            <span> Id Post: {post.id}</span>
          </div>

          <h2 className=" m-4 postTitle"> {post.title}</h2>
          <p className=" m-4 postText"> {post.body}</p>
          {post.id === showComments && <CommentsUsers postId={post.id} />}
          {/* Verificando se a chamada é verdadeira, para não vim varios comentarios e/ou null */}

          {/* <Button
            variant="secondary"
            onClick={() =>
              setShowComments(post.id === showComments ? null : post.id)
            }
          >
            Comentários
          </Button> */}
          <div className="d-flex justify-content-center ">
            <Button
              className="mb-2 mt-4 buttonComments"
              variant="success"
              onClick={() =>
                setShowComments(post.id === showComments ? null : post.id)
              }
            >
              Comentários
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
