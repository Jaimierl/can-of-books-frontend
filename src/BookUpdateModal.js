import { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class BookUpdateModal extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    let newBook = {
      title: (e.target.title.value) ? e.target.title.value : this.props.item.title,
      description: (e.target.description.value) ? e.target.description.value : this.props.item.description,
      status: (e.target.selectOption.value) ? e.target.selectOption.value : this.props.item.status,
      email: (e.target.email.value) ? e.target.email.value : this.props.item.email,
      _id: this.props.item._id
    }
    console.log('newBook (changed): ', newBook)
    this.props.handleUpdate(newBook);
  }
  render() {
    console.log('updated Book Props:', this.props);
    return (
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Make A Change!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={this.handleSubmit} >
            <Form.Group className="mb-3" controlId="changeBook">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" id="title" placeholder={this.props.item.title}></Form.Control>

              <Form.Label>Description</Form.Label>
              <Form.Control type="text"
                id="description"
                placeholder={this.props.item.description}></Form.Control>

              <Form.Label>Status</Form.Label>
              <Form.Control type="text" id="status" placeholder={this.props.item.status}></Form.Control>

              <Form.Label>Email</Form.Label>
              <Form.Control type="text" id="email" placeholder={this.props.item.email}></Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit The Update
            </Button>
          </Form>
        </Modal.Body>
      </Modal.Dialog >

    );
  }
};

export default BookUpdateModal;