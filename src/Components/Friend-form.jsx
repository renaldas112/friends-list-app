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
  Button
} from "reactstrap";

export class FriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    e.preventDefault();
    this.setState({
      firstName: e.target.value,
    });
  }

  render() {
    return (
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
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="city">City</Label>
                <Input id="city" name="city" placeholder="Enter friends city" />
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
    );
  }
}
