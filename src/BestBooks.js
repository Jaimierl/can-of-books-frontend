import React from 'react';
import axios from 'axios';
import BookCarousel from './BookCarousel.js'
import AddBook from './AddBook';
// import DeleteButton from './DeleteButton';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showBooks: false,
    };
  }

  componentDidMount() {
    console.log("Component Did Mount Function Running Start")
    axios.get(`${process.env.REACT_APP_SERVER}/books`)
      .then(passedBook => passedBook.data)
      .then(data => this.setState({
        books: data,
        showBooks: true
      }))
      .catch(err => console.log('error:', err.message));
    console.log("Component Did Mount Function Running End")
  }

  // refreshBookData() {
  //   console.log('REFRESH BOOK DATA IN BESTBOOKS COMP');
  //   axios.get(`${process.env.REACT_APP_SERVER}/books`)
  //     .then(passedBook => passedBook.data)
  //     .then((data) => {
  //       this.setState({
  //         books: data,
  //         showBooks: true
  //       });
  //     })
  //     .catch(err => console.log('error:', err.message));
  // }

  render() {
    console.log("-------------------", this.props);
    // console.log('bookDatafromserver: ', this.state.books);
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <BookCarousel
            refreshBookData={this.refreshBookData}
            booksData={this.state.books}
            handleDelete={this.props.handleDelete}
            handleUpdate={this.props.handleUpdate}
          />
        ) : (
          <h3>This Book Collection Empty (Yeet!)</h3>
        )}

        <AddBook handlePost={this.props.handlePost} />
        {/* <DeleteButton handleDelete={this.handleDelete} books={this.state.books} /> */}
      </>
    )
  }
}

export default BestBooks;
