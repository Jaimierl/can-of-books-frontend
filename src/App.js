import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import BestBooks from './BestBooks';
import Profile from './Profile';
import LoginButton from './LoginButton';
import AddBook from './AddBook';
import DeleteButton from './DeleteButton';
import axios from 'axios';

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
      itemData: [],
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

  handlePost = async (postObj) => {
    console.log(postObj);
    // create an object to post to the server
    let URL = `${process.env.REACT_APP_SERVER}/books`;
    let postRes = await axios.post(URL, postObj);
    // console.log the response back to make sure that the data was sent.
    console.log('postRes', postRes.data);
    //update the state when we get new information.
    this.setState({ itemData: [...this.state.itemData, postRes.data] })
  }

  handleDelete = async (itemId) => {
    let URL = `${process.env.REACT_APP_SERVER}/books/:${itemId}`
    // Make axios call to delete
    let delObj = axios.delete(URL);
    console.log(delObj.data);

    let delObjData = delObj.data;
    // receive the deleted object back
    // to update status
    //make a copy of state
    let copyState = this.state.itemData;
    //filter to find the id
    let filteredData = copyState.filter((item) => item._id !== delObj._id)
    console.log(filteredData)
    //set the copy back to state.
    this.setState({ itemData: filteredData });

  }



  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              {this.state.user ?
                < BestBooks /> : <LoginButton />}
              {/* TODONE: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
            </Route>
            <Route exact path="/profile">
              <Profile />
              {/* TODONE: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
            </Route>

          </Switch>
          <Footer />
        </Router>
        <AddBook handlePost={this.handlePost} />
        <DeleteButton handleDelete={this.handleDelete} />
      </>
    )
  }
}

export default App;
