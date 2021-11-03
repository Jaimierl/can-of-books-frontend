import { Component } from "react";
import Button from 'react-bootstrap/Button';

class DeleteButton extends Component {
  render() {
    return (
      <Button onClick={() => { this.props.handleDelete(this.props.books._id) }}>Delete Book</Button>
    )
  }
}

export default DeleteButton;