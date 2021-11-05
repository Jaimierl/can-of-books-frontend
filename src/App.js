import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import BestBooks from './BestBooks';
import Profile from './Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      showCreateForm: false,
    }
  }

  loginHandler = (user) => {
    this.setState({
      user,
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }

  setCreateForm = () => this.setState({ showCreateForm: true });
  hideCreateForm = () => this.setState({ showCreateForm: false });

  render() {
    console.log('APPPROPS:', this.props);
    return (
      <>
        <Router>
          <Header user={this.state.user}
            setCreateForm={this.setCreateForm} />
          <Switch>
            <Route exact path="/">
              {/* Main in the root */}
              {this.props.auth0.isAuthenticated ? <BestBooks
                showCreateForm={this.state.showCreateForm}
                hideCreateForm={this.hideCreateForm}
              /> : ''
              }
            </Route>

            <Route exact path="/profile">
              <Profile />
            </Route>

          </Switch>
          <Footer />
        </Router>

      </>
    )
  }
}

export default withAuth0(App);