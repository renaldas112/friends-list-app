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

export class FriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      firstName: "",
      lastName: "",
      age: "",
      city: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddFriend = this.handleAddFriend.bind(this);
    this.handleDeleteFriend = this.handleDeleteFriend.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    e.preventDefault();
    this.setState({ [e.target.id]: e.target.value });
  }

  handleAddFriend(e) {
    e.preventDefault();
    const rand = String(Math.floor(1 + Math.random() * (10000 - 1)));
    this.setState((prevState) => ({
      friends: [
        ...prevState.friends,
        {
          id: this.state.id + rand,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          age: this.state.age,
          city: this.state.city,
        },
      ],
    }));
  }

  handleDeleteFriend(e) {
    const id = e.target.id;
    const filteredFriends = this.state.friends.filter(
      (friend) => friend.id !== id
    );

    this.setState((state) => ({
      ...state,
      friends: filteredFriends,
    }));
  }

  handleSubmit = (e) => {
    this.setState({
      firstName: "",
      lastName: "",
      age: "",
      city: "",
    });
  };

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
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
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
                    value={this.state.age}
                    onChange={this.handleInputChange}
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
                    value={this.state.city}
                    onChange={this.handleInputChange}
                    required
                  />
                </FormGroup>
              </Col>
            </Row>
            <Button
              type="submit"
              onClick={(e) => {
                this.handleAddFriend(e);
                this.handleSubmit();
              }}
            >
              Add a friend
            </Button>
          </Form>
        </Container>
        <Container className="d-flex flex-wrap">
          {this.state.friends.map((friend) => {
            return (
              <Card
                style={{
                  width: "18rem",
                }}
                className="m-5"
                key={friend.id}
              >
                <ListGroup flush>
                  <ListGroupItem>First Name: {friend.firstName} </ListGroupItem>
                  <ListGroupItem>Last Name: {friend.lastName} </ListGroupItem>
                  <ListGroupItem>Age: {friend.age}</ListGroupItem>
                  <ListGroupItem>City: {friend.city}</ListGroupItem>
                </ListGroup>
                <Button
                  className="btn btn-danger"
                  onClick={this.handleDeleteFriend}
                  id={friend.id}
                >
                  Delete Friend
                </Button>
              </Card>
            );
          })}
        </Container>
      </>
    );
  }
}

export default FriendForm;
