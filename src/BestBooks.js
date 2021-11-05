import React from 'react';
import axios from 'axios';
import BookCarousel from './BookCarousel.js'
import AddBook from './AddBook';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showBooks: false,
      showUpdateForm: false,
      updateObject: {}
    };
  }

  //put into a function and have this run a function and have the update delete also run that function
  componentDidMount() {
    // console.log("Component Did Mount Function Running Start")
    axios.get(`${process.env.REACT_APP_SERVER}/books`)
      .then(passedBook => passedBook.data)
      .then(data => this.setState({
        books: data,
        showBooks: true
      }))
      .catch(err => console.log('error:', err.message));
    // console.log("Component Did Mount Function Running End")
  }

  handlePost = async (postObj) => {
    console.log(postObj);
    // create an object to post to the server
    let URL = `${process.env.REACT_APP_SERVER}/books`;
    let postRes = await axios.post(URL, postObj);
    // console.log th e response back to make sure that the data was sent.
    console.log('postRes', postRes.data);
    //update the state when we get new information.
    this.setState({ books: [...this.state.books, postRes.data] })
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
    let copyState = this.state.books;
    //filter to find the id
    let filteredData = copyState.filter((item) => item._id !== deletedBook._id)
    console.log(filteredData)
    //set the copy back to state.
    this.setState({ books: filteredData });
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
    let copyState = this.state.books.map((book, idx) => {
      if (this.state.books._id === putData._id) return putData;
      else { return book }
    })
    this.setState({ books: copyState, showUpdateForm: false })
  }

  updateForm = (itemObj) => {
    this.setState({
      showUpdateForm: true,
      updateObject: itemObj
    });

    console.log('showUpdateForm:', itemObj);
  }

  render() {
    // console.log("-------------------", this.props);
    // console.log('bookDatafromserver: ', this.state.books);
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <BookCarousel
            booksData={this.state.books}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
            showUpdateForm={this.state.showUpdateForm}
            updateForm={this.updateForm}
            updateObject={this.state.updateObject}
          />

        ) : (
          <h3>This Book Collection Empty (Yeet!)</h3>
        )}

        <AddBook handlePost={this.handlePost} />

      </>
    )
  }
}

export default BestBooks;