import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./CommentsUsers.css";
import ListGroup from 'react-bootstrap/ListGroup';
import { ListGroupItem } from "react-bootstrap";





const CommentsUsers = ({postId}) => {
  const [comentario, setComentario] = useState([]);

  useEffect(() => {
    const fetchComentarios = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      );

      setComentario(response.data);
    };

    fetchComentarios();
    console.log("Qtd de Comentarios")
  }, [postId]);
  return (
    <div className="container">
      <div >
        {comentario.map((c) => (
          <ListGroup key={c.id}>
            <ListGroupItem >
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

export default CommentsUsers;
