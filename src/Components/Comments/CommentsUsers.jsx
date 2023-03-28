import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import { ListGroupItem } from "react-bootstrap";
import "./CommentsUsers.css"

const CommentsUsers = ({ postId }) => {
  const [comentario, setComentario] = useState([]);

  useEffect(() => {
    const fetchComentarios = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      );

      setComentario(response.data);
    };

    fetchComentarios();
    console.log("Qtd de Comentarios");
  }, [postId]);
  return (
    <div className="container">
      <div>
        {comentario.map((c) => (
          <ListGroup key={c.id}>
            <ListGroupItem variant="dark" className="mt-4">
              <p> {c.id}</p>
              <p className="titleName"> {c.name}</p>
              <p className="bodyComment">  Body Comment: {c.body}</p>
            </ListGroupItem>
          </ListGroup>
        ))}
      </div>
    </div>
  );
};

export default CommentsUsers;
