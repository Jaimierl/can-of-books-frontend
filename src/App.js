import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import BestBooks from './BestBooks';
import Profile from './Profile';
// import LoginButton from './LoginButton';
import axios from 'axios';



import { withAuth0 } from '@auth0/auth0-react';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showCreateForm: false,
      user: null,
      itemData: [],
      showItem: false,
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
    // console.log th e response back to make sure that the data was sent.
    console.log('postRes', postRes.data);
    //update the state when we get new information.
    this.setState({ itemData: [...this.state.itemData, postRes.data] })
  }

  handleDelete = async (bookId) => {
    let URL = `${process.env.REACT_APP_SERVER}/books/${bookId}`
    // Make axios call to delete
    let deletedBook = await axios.delete(`${URL}`);
    console.log('!!!!!!!!!!!!!!!!!!!!', URL, deletedBook.data);

    // Class version- look how elegant:
    // let copyState = this.state.books;
    // let filteredArr = copyState.filter((item) => item._id !== bookId)

    // receive the deleted object back
    // to update status
    //make a copy of state
    let copyState = this.state.itemData;
    //filter to find the id
    let filteredData = copyState.filter((item) => item._id !== deletedBook._id)
    console.log(filteredData)
    //set the copy back to state.
    this.setState({ itemData: filteredData });
  }

  handleUpdate = async (itemObj) => {
    let URL = `${process.env.REACT_APP_SERVER}/books/${itemObj._id}`
    // Now we need to do the axios Put. Do not send the _id or _version properties to the server or it will error.
    let bookObj = {
      title: itemObj.title,
      description: itemObj.description,
      status: itemObj.status,
      email: itemObj.email,
      _id: itemObj._id,
    }
    let putRequest = await axios.put(URL, bookObj)
    let putData = putRequest.data;
    console.log('putData: ', putData)

    //Update the state
    let copyState = this.state.itemData.map((book, idx) => {
      if (this.state.itemData._id === putData._id) return putData;
      else { return book }
    })
    this.setState({ itemData: copyState, showUpdateForm: false })

  }

  setCreateForm = () => this.setState({ showCreateForm: true });
  hideCreateForm = () => this.setState({ showCreateForm: false });

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user}
            setCreateForm={this.setCreateForm}
          />
          <Switch>

            <Route exact path="/">
              {this.props.auth0.isAuthenticated ? < BestBooks
                showCreateForm={this.state.showCreateForm}
                hideCreateForm={this.hideCreateForm}
                handleDelete={this.handleDelete}
                handleUpdate={this.handleUpdate}
                handlePost={this.handlePost}
              /> : ''
              }
            </Route>

            <Route exact path="/profile">
              <Profile />
            </Route>

          </Switch>
          <Footer />
        </Router>
        {/* {this.props.auth0.isAuthenticated ? < BestBooks

          item={this.state.itemData}
          handlePost={this.handlePost}
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
        /> : ''} */}

      </>
    )
  }
}

export default withAuth0(App);
