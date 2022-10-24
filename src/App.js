import "./App.css";
import { React, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

export const friends = [
  { firstName: "Renaldas", lastName: "Barzdaitis", age: 22, city: "Kaunas" },
  { firstName: "Tadas", lastName: "Blinda", age: 100, city: "Lietuva" },
  { firstName: "Rytis", lastName: "Cicinas", age: 69, city: "Kazlai" },
];

export class FriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      city: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    e.preventDefault();
    this.setState({ firstName: e.target.value });
  }

  render() {
    return (
      <>
        <Container>
          <h1 className="m-5">Friends List App</h1>
          <Form>
            <Row>
              <Col md={3}>
                <FormGroup>
                  <Label for="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="Enter friends first name"
                    type="text"
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Enter friends last name"
                    type="text"
                    required
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="age">Age</Label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    placeholder="Enter friends age"
                    min="1"
                    required
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="city">City</Label>
                  <Input
                    id="city"
                    name="city"
                    placeholder="Enter friends city"
                    required
                  />
                </FormGroup>
              </Col>
            </Row>
            <Button
              onClick={(e) => {
                this.handleInputChange(e);
              }}
            >
              Add a friend
            </Button>
          </Form>
        </Container>
        <Container className="d-flex">
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
                  <ListGroupItem>Last Name: {friend.lastName} </ListGroupItem>
                  <ListGroupItem>Age: {friend.age}</ListGroupItem>
                  <ListGroupItem>City: {friend.city}</ListGroupItem>
                </ListGroup>
              </Card>
            );
          })}
        </Container>
      </>
    );
  }
}


export default FriendForm;
