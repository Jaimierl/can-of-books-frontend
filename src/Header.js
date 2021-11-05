import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './Header.css';
import { withAuth0 } from '@auth0/auth0-react';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        {/* TODONE: if the user is logged in, render a navigation link to profile page */}
        {this.props.user !== null &&
          <NavItem><Link to="/profile" className="nav-link">Profile</Link></NavItem>
        }
        {this.props.auth0.isAuthenticated &&
          <Button onClick={this.props.setCreateForm}>Add Book</Button>}
        {this.props.auth0.isAuthenticated ?
          <Button onClick={() => this.props.auth0.logout({ returnTo: window.location.origin })}>Logout</Button> :
          <Button onClick={() => this.props.auth0.loginWithRedirect()}>Login</Button>}
      </Navbar>
    )
  }
}

export default withAuth0(Header);