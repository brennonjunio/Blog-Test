import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, CardGroup } from "react-bootstrap";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  return (
    <CardGroup>
      {users.map((u) => (
        <Col key={u.id} xs={12} sm={6} md={4} lg={3}>
          <UserCard user={u} />
        </Col>
      ))}
    </CardGroup>
  );
};

const UserCard = ({ user }) => {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    const fetchDog = async () => {
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      setDogUrl(response.data.message);
    };
    fetchDog();
  }, []);

  return (
    <div className="container">
      <Card className="mb-4">
        <div className="d-flex align-items-center">
          <Card.Img
            src={dogUrl}
            style={{ maxWidth: "100px", maxHeight: "100px", float: "left" }}
          />
          <Card.Body className="flex-grow-1">
            <Card.Title
              className="text-black"
              style={{ fontWeight: "100px", fontFamily: "monospace" }}
            >
              {user.name}
            </Card.Title>
            <Card.Text className="text-black">📩 {user.email} </Card.Text>
            <Card.Text className="text-black">📱 {user.phone} </Card.Text>
            <Card.Text className="text-black">
              🔗
              {user.website}
            </Card.Text>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};
export default Users;
