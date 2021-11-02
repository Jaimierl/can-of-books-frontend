import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import neon from './images/Neon.jpg';

class BookCarousel extends React.Component {

  render() {

    return (
      <>
        <Carousel fluid="md">
          {this.props.booksData.map(oneBook =>
            <Carousel.Item key={oneBook._id}>
              <Button variant="danger" onClick={() => this.props.handleDelete(oneBook._id)}>Delete</Button>
              <Button onClick={() => this.props.updateForm(oneBook._id)}>Update</Button>

              <img
                className="d-block w-50"
                src={neon}
                alt="By Drew Beamer on Unsplash"
              />

              <Carousel.Caption>
                <h3><strong>{oneBook.title}</strong></h3>
                <h3>{oneBook.description}</h3>
                <p>{oneBook.status}</p>
                <p>{oneBook.email}</p>
              </Carousel.Caption>


            </Carousel.Item>

          )}

        </Carousel>
      </>
    )
  }
}
export default BookCarousel;

// The Carousel item is one object so its a one-liner function since there is just one item being returned.


// export default BookCarousel;
// See the export above? Rooky Tricks!