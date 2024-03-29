import { Component } from 'react'
import Button from 'react-bootstrap/Button'
import BookFormModal from './BookFormModal'

export default class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBookFormModal: false,
      userFavBook: false,
    }
  }

  handleBook = (newBook) => {
    this.setState({
      userFavBook: true,
      showBookFormModal: false
    })
    console.log(this.state.userFavBook)
  }

  onClick = () => {
    this.setState({ showBookFormModal: true });
  }


  render() {
    return (
      <>
        {this.state.showBookFormModal ?
          <BookFormModal
            handleBook={this.handleBook}
            handlePost={this.props.handlePost}
            onClose={this.onClose} /> :
          <Button onClick={this.onClick}>Add Book</Button>}
      </>
    )
  }
}
