import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PostList.css";
import {  NavLink } from "react-router-dom";
import CommentsUsers from "./CommentsUsers";
import { Button } from "react-bootstrap";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [showComments, setShowComments] = useState(null);

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
    <div className="container">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <div className="userPost">
            <NavLink to="/user">
              <img
                src="https://avatars.githubusercontent.com/u/121310442?v=4"
              />
            </NavLink>
            <h4 className="text-white ">User Id: {post.userId}</h4>
            <span> Id Post: {post.id}</span>
          </div>

          <h2>Title: {post.title}</h2>
          <p>Post: {post.body}</p>
          {post.id === showComments && <CommentsUsers postId={post.id} />}
          {/* Verificando se a chamada é verdadeira, para não vim varios comentarios e/ou null */}



          <Button variant="secondary" onClick={() => setShowComments(post.id === showComments ? null : post.id)}>Comentários</Button>


        </div>
      ))}
    </div>
  );
};

export default PostList;
