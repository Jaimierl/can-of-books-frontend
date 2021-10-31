import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

class BookCarousel extends React.Component {

  runHandleDelete = () => {
    this.props.handleDelete(this.props.booksData._id);
  }

  runUpdateForm = () => {
    this.props.updateForm(this.props.booksData._id);
  }

  render() {

    return (
      <>
        <Carousel>

          {this.props.booksData.map(oneBook =>
            <Carousel.Item key={oneBook._id}>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/150"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3><strong>{oneBook.title}</strong></h3>
                <h3>{oneBook.description}</h3>
                <p>{oneBook.status}</p>
                <p>{oneBook.email}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )}
          <Button variant="danger" onClick={this.runHandleDelete}>Delete</Button>
          <Button onClick={this.runUpdateForm}>Update</Button>

        </Carousel>
      </>
    )
  }
}
export default BookCarousel;

// The Carousel item is one object so its a one-liner function since there is just one item being returned.


// export default BookCarousel;
// See the export above? Rooky Tricks!