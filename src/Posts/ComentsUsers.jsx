import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./CommentsUsers.css";

const ComentsUsers = () => {
  const [comentario, setComentario] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchComentarios = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );

      setComentario(response.data);
    };

    fetchComentarios();
  }, []);
  return (
    <div className="container">
      Comentarios
      <NavLink to="/">Home</NavLink>
      <div>
        {comentario.map((c) => (
          <div className="commentsUsers">
            <p>Post: {c.postId}</p>
            <p>CommentsID: {c.id}</p>
            <p>Title Comment: {c.name}</p>
            <p>Body Comment: {c.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComentsUsers;
