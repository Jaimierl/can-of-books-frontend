import { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


class BookUpdateModal extends Component {

  handleSubmit = async (e) => {
    e.preventDefault();
    let newBook = {
      title: (e.target.title.value) ? e.target.title.value : this.props.updateObject.title,
      description: (e.target.description.value) ? e.target.description.value : this.props.updateObject.description,
      status: (e.target.status.value) ? e.target.status.value : this.props.updateObject.status,
      email: (e.target.email.value) ? e.target.email.value : this.props.updateObject.email,
      _id: this.props.updateObject._id
    }
    console.log('newBook (changed): ', newBook)
    await this.props.handleUpdate(newBook);
  }

  render() {
    // console.log('updated Book Props:', this.props);
    return (
      <Modal show={this.props.show}>

        <Modal.Header closeButton>
          <Modal.Title>Make A Change!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={this.handleSubmit} >
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder={this.props.updateObject.title}></Form.Control>
            </Form.Group>


            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text"
                placeholder={this.props.updateObject.description}></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="status">
              <Form.Label>Status</Form.Label>
              <Form.Control type="text" placeholder={this.props.updateObject.status}></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder={this.props.updateObject.email}></Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit The Update
            </Button>
          </Form>
        </Modal.Body >

      </Modal >
    );
  }
};

export default BookUpdateModal;