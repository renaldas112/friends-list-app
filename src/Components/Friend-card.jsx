import React from "react";
import { Card, ListGroup, ListGroupItem } from "reactstrap";

export const friends = [
  { firstName: "Renaldas", lastName: "Barzdaitis", age: 22, city: "Kaunas" },
  { firstName: "Tadas", lastName: "Blinda", age: 100, city: "Lietuva" },
  { firstName: "Rytis", lastName: "Cicinas", age: 69, city: "Kazlai" },
];

export const FriendCard = (props) => {
  return (
    <>
      {friends.map((friend) => {
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
        </Card>;
      })}
    </>
  );
};
