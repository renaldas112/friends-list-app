import "./App.css";
import { FriendForm } from "./Components/Friend-form";
import { FriendCard } from "./Components/Friend-card";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <FriendForm />
      <FriendCard />
    </React.Fragment>
  );
}

export default App;
