import { Component } from 'react'
import Button from 'react-bootstrap/Button'
import LoginForm from './LoginForm'

export default class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginForm: false,
    }
  }

  onClick = () => {
    this.setState({ showLoginForm: true });
  }
  render() {
    /* TODONE: Render a button with label 'Log In'. When the button is clicked then show LoginForm instead */
    return (
      <>
        {this.state.showLoginForm ? <LoginForm /> : <Button onClick={this.onClick}>Log In</Button>}
      </>
    )
  }
}
