import React from "react";
import { Card, ListGroup, ListGroupItem } from "reactstrap";

export const friends = [
  {firstName: "Renaldas", lastName: "Barzdaitis", age: 22, city: "Kaunas" },
  {firstName: "Tadas", lastName: "Blinda", age: 100, city: "Lietuva" },
  {firstName: "Rytis", lastName: "Cicinas", age: 69, city: "Kazlai" },
];

export const FriendCard = (props) => {
  return (
    <>
      {friends.map((friend) => {
        return (
          <Card
            style={{
              width: "18rem",
            }}
            className="m-5"
          >
            <ListGroup flush>
              <ListGroupItem>First Name: {friend.firstName} </ListGroupItem>
              <ListGroupItem>last Name: {friend.lastName} </ListGroupItem>
              <ListGroupItem>age: {friend.age}</ListGroupItem>
              <ListGroupItem>city: {friend.city}</ListGroupItem>
            </ListGroup>
          </Card>
        );
      })}
    </>
  );
};
