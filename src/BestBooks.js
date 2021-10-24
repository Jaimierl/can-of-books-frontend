import React from 'react';
import axios from 'axios'

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    axios.get(process.env.REACT_APP_SERVER)
      .then(bookUser => bookUser.data)
      .then(data => this.setState({
        books: data,
        showBooks: true
      }))
      .catch(err => console.log('error:', err.message));
  }

  render() {

    /* TODO: render user's books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <p>Book Carousel!</p>
        ) : (
          <h3>Unfortunately the Book Collection is empty :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
