import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PostList.css";
import { Link, NavLink } from "react-router-dom";
import { Button, Stack } from "react-bootstrap";

const PostList = () => {
  const [posts, setPosts] = useState([]);

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
                alt="Brennon Junio"
              />
            </NavLink>
            <h4 className="text-white ">User Id: {post.userId}</h4>
            <span> Id Post: {post.id}</span>
          </div>

          <h2>Title: {post.title}</h2>
          <p>Post: {post.body}</p>
          <NavLink to="/comments">Comentarios</NavLink>
        </div>
      ))}
    </div>
  );
};

export default PostList;
