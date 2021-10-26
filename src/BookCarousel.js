import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export class BookCarousel extends React.Component {
  render() {

    return (
      <>
        <Carousel>
          {this.props.map.booksData.map(oneBook =>
            <Carousel.Item key={oneBook._id}>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/150"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3><strong>{oneBook.email}</strong></h3>
                <h3>{oneBook.description}</h3>
                <p>{oneBook.status}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )}
        </Carousel>
      </>
    )
  }
}
// The Carousel item is one object so its a one-liner function since there is just one item being returned.


// export default BookCarousel;
// See the export above? Rooky Tricks!