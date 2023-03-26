import React from "react";
import { Button, Container, Stack } from "react-bootstrap";
import NavBar from "../Components/NavBar/NavBar";
import PostList from "../Components/PostList";
import "./Index.css";

const Index = () => {
  return (
    <>
      <Container>
        <h1>Posts</h1>
        <PostList />
      </Container>
    </>
  );
};

export default Index;
