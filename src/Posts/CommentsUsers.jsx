import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./CommentsUsers.css";
import ListGroup from 'react-bootstrap/ListGroup';
import { ListGroupItem } from "react-bootstrap";





const ComentsUsers = ({postId}) => {
  const [comentario, setComentario] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchComentarios = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );

      setComentario(response.data);
    };

    fetchComentarios();
  }, [postId]);
  return (
    <div className="container">
      <NavLink to="/">Home</NavLink>
      <div>
        {comentario.map((c) => (
          <ListGroup>
            <ListGroupItem key={c.id}>
            <p>Post: {c.postId}</p>
            <p>CommentsID: {c.id}</p>
            <p>Title Comment: {c.name}</p>
            <p>Body Comment: {c.body}</p>
            </ListGroupItem>
          </ListGroup>
        ))}
        
      </div>
    </div>
  );
};

export default ComentsUsers;
