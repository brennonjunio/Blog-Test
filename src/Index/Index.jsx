import React from "react";
import { Button, Container, Stack } from "react-bootstrap";
import PostList from "../Components/Posts/PostList";
import "./Index.css";

const Index = () => {
  return (
    <>
      <Container>
        <h1
          style={{ color: "#198754", textAlign: "center", fontWeight: "bold" }}
        >
          Posts
        </h1>
        <PostList />
      </Container>
    </>
  );
};

export default Index;
