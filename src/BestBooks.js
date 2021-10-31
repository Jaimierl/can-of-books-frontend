import React from 'react';
import axios from 'axios';
import BookCarousel from './BookCarousel.js'

class BestBooks extends React.Component {

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_SERVER}/books`)
      .then(passedBook => passedBook.data)
      .then(data => this.setState({
        books: data,
        showBooks: true
      }))
      .catch(err => console.log('error:', err.message));

  }

  render() {

    // console.log('bookDatafromserver: ', this.state.books);
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.props.item.length ? (
          <BookCarousel
            booksData={this.props.item}
            handleDelete={this.props.handleDelete}
            handleUpdate={this.props.handleUpdate} />
        ) : (
          <h3>Unfortunately the Book Collection is empty :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
