import React from "react";
import { Button, Container, Stack } from "react-bootstrap";
import PostList from "../Posts/PostList";
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
