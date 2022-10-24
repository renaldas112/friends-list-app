import "./App.css";
import { FriendForm } from "./Components/Friend-form";
import { FriendCard } from "./Components/Friend-card";
import { Container } from "reactstrap";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <FriendForm />
      <Container className="d-flex">
        <FriendCard />
      </Container>
    </React.Fragment>
  );
}

export default App;
