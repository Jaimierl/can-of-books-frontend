import { Component } from 'react'
import Button from 'react-bootstrap/Button'
import LoginForm from './LoginForm'

export default class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginForm: false,
      userInfo: false,
      userName: '',
      userEmail: '',
    }
  }

  handleUser = (newUser) => {
    this.setState({ userInfo: true, userName: newUser.userName, userEmail: newUser.userEmail })
    console.log(this.state.userName, this.state.userEmail)
  }

  onClick = () => {
    this.setState({ showLoginForm: true, });
  }
  render() {
    /* TODONE: Render a button with label 'Log In'. When the button is clicked then show LoginForm instead */
    return (
      <>
        {this.state.showLoginForm ? <LoginForm handleUser={this.handleUser} /> : <Button onClick={this.onClick}>Log In</Button>}
      </>
    )
  }
}
