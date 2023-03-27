import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, CardGroup } from "react-bootstrap";
import "./Users.css";

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
        <Card.Img src={dogUrl} style={{ height: "150px" }} />
        <Card.Body className="">
       
          <Card.Title className="text-black"> {user.name}</Card.Title>
          <Card.Text className="text-black">Email : {user.email} </Card.Text>
          <Card.Text className="text-black">Phone : {user.phone} </Card.Text>
          <Card.Text className="text-black">
            WebSite : {user.website}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
  }
export default Users;
