import { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

class LoginForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    let newUser = {
      userName: (e.target.UserName.value),
      userEmail: (e.target.email.value)
    }
    this.props.handleUser(newUser);
  }
  render() {
    /* TODO: create a simple login form that collects username and and email, and lets parent component know when form has been submitted */

    return (
      <Form onSubmit={this.handleSubmit} >
        <Form.Group className="mb-3" controlId="UserName">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter Username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Log Me In!
        </Button>

      </Form>
    );
  }
};

export default LoginForm;
