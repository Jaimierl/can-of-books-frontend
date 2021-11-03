import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import neon from './images/Neon.jpg';
import BookUpdateModal from './BookUpdateModal';


class BookCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdateForm: false,
      updateObject: {}
    };
  }

  updateForm = (itemObj) => {
    this.setState({ updateObject: itemObj });
    this.props.handleUpdate(itemObj);
  }

  onClick = (oneBook) => {
    this.setState({ showUpdateForm: true });
    this.updateForm(oneBook);
  }

  onHide = () => {
    this.setState({ showUpdateForm: false });
  }

  render() {

    return (
      <>
        <div className='d-flex justify-content-center' >
          <Carousel fluid="md">
            {this.props.booksData.map(oneBook =>
              <Carousel.Item key={oneBook._id}>


                <img
                  src={neon}
                  alt="By Drew Beamer on Unsplash"
                />

                <Carousel.Caption>
                  <h3><strong>{oneBook.title}</strong></h3>
                  <h3>{oneBook.description}</h3>
                  <p>{oneBook.status}</p>
                  <p>{oneBook.email}</p>

                  <Button variant="danger" onClick={() => { this.props.handleDelete(oneBook._id) }}>Delete</Button>

                  <Button onClick={() => this.onClick(oneBook)}>Update</Button>
                </Carousel.Caption>


              </Carousel.Item>
            )}

          </Carousel>

          {
            this.state.showUpdateForm ?
              <BookUpdateModal
                show={this.state.showUpdateForm}
                onHide={this.onHide}
                handleUpdate={this.props.handleUpdate}
                updateForm={this.updateForm}
                item={this.state.updateObject}
                refreshBookData={this.props.refreshBookData} />
              : ''
          }

        </div>
      </>
    )
  }
}
export default BookCarousel;

// The Carousel item is one object so its a one-liner function since there is just one item being returned.


// export default BookCarousel;
// See the export above? Rooky Tricks!