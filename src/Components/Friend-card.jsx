import React from "react";
import { Card, ListGroup, ListGroupItem } from "reactstrap";
import { friends } from "./Friend-form";

export const FriendCard = (props) => {
  return (
    <Card
    style={{
      width: "18rem",
    }}
    className="m-5"
  >
    <ListGroup flush>
      <ListGroupItem>First Name: {friends[0].firstName} </ListGroupItem>
      <ListGroupItem>last Name: {friends[0].lastName} </ListGroupItem>
      <ListGroupItem>age: {friends[0].age}</ListGroupItem>
      <ListGroupItem>city: {friends[0].city}</ListGroupItem>
    </ListGroup>
  </Card>
  );
};
