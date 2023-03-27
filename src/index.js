import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./Index/Index";
import "bootstrap/dist/css/bootstrap.min.css";
import CommentsUsers from "./Components/CommentsUsers";
import Users from "./Users/Users";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App/>

    <Routes>

      <Route path="/" element={<Index />} />
      <Route path="/comments/:id" element={<CommentsUsers />} />
      <Route path="/user" element={<Users />} />
    </Routes>
  </BrowserRouter>
);
