import React, { useEffect } from "react";
import NavBar from "./Components/NavBar/NavBar";

const App = () => {
  useEffect(() => {
    document.title = "Blog";
  }, []);
  return <NavBar />;
};

export default App;
