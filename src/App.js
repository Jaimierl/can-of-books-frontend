import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import BestBooks from './BestBooks';
import Profile from './Profile';
import LoginButton from './LoginButton';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

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
    return (
      <>
        <Router>
          <Header user={this.state.user}
            setCreateForm={this.setCreateForm} />
          <Switch>
            <Route exact path="/">

              < BestBooks
              />

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

export default App;