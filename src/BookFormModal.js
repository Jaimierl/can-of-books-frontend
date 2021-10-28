import { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class BookFormModal extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    let newBook = {
      userBook: (e.target.bestBook.value)
    }
    this.props.handleBook(newBook);
    this.props.handlePost(newBook);
  }
  render() {
    return (
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>The Best Books!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={this.handleSubmit} >
            <Form.Group className="mb-3" controlId="bestBook">
              <Form.Label>What is your Favourite Book?</Form.Label>
              <Form.Control type="text" placeholder="Enter The Best Book" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit The Book
            </Button>
          </Form>
        </Modal.Body>
      </Modal.Dialog>
      // NEED TO MAKE THE ON-CLOSE WORK
    );
  }
};

export default BookFormModal;