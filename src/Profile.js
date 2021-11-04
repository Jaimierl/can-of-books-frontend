import { Component } from "react";
// import BestBooks from "./BestBooks.js";
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends Component {

  render() {
    const { user } = this.props.auth0;
    return <div>Hello {user.name}</div>;
  }
}
export default withAuth0(Profile);
