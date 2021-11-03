import { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class BookFormModal extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    let newBook = {
      title: (e.target.title.value),
      description: (e.target.description.value),
      status: (e.target.status.value),
      email: (e.target.email.value),
    }
    console.log(newBook);
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
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>What is your Favourite Book?</Form.Label>
              <Form.Control type="text" placeholder="Enter The Best Book" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Describe your Favourite Book?</Form.Label>
              <Form.Control type="text" placeholder="Describe The Best Book" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="status">
              <Form.Label>How Would You Rank Your Favourite Book?</Form.Label>
              <Form.Control type="text" placeholder="1-5 Stars?" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>What Is Your Email?</Form.Label>
              <Form.Control type="text" placeholder="Email" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit The Book
            </Button>
          </Form>
        </Modal.Body>
      </Modal.Dialog>

    );
  }
};

export default BookFormModal;