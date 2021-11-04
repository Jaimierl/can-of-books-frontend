import React from 'react';
import axios from 'axios';
import BookCarousel from './BookCarousel.js'
import AddBook from './AddBook';
// import DeleteButton from './DeleteButton';
import { withAuth0 } from '@auth0/auth0-react';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showBooks: false,
      showUpdateForm: false
    };
  }
  //put into a function and have this run a function and have the update delete also run that function
  async componentDidMount() {
    // console.log("Component Did Mount Function Running Start")
    let getIdToken = await this.props.auth0.getIdTokenClaims();
    let jwt = getIdToken.__raw

    console.log(jwt);
    let config = {
      headers: { "Authorization": `Bearer ${jwt}` }
    }

    axios.get(`${process.env.REACT_APP_SERVER}/books`, config)
      .then(passedBook => passedBook.data)
      .then(data => {
        if (data.length > 0) this.setState({
          books: data,
          showBooks: true
        })
        console.log('data:', data);
      })
      .catch(err => console.log('error:', err.message));
    // console.log("Component Did Mount Function Running End")
  }

  refreshBookData = () => {
    console.log('REFRESH BOOK DATA IN BESTBOOKS COMP');
    axios.get(`${process.env.REACT_APP_SERVER}/books`)
      .then(passedBook => passedBook.data)
      .then(data => {
        console.log(data);
        this.setState({
          books: data,
          showBooks: true
        })
      })
      .catch(err => console.log('error:', err.message));
    console.log();
  }

  render() {
    // console.log("-------------------", this.props);
    // console.log('bookDatafromserver: ', this.state.books);
    return (
      <>
        <h2> My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <BookCarousel
            refreshBookData={this.refreshBookData}
            booksData={this.state.books}
            handleDelete={this.props.handleDelete}
            handleUpdate={this.props.handleUpdate}
          />
        ) : (
          <h3>This Book Collection Empty (Yeet!)</h3>
        )}

{/* {this.state.showUpdateForm ? <UpdateEquip handleUpdate={this.handleUpdate} equip={this.state.updateObject} /> : ''} */}
// Done in class, not seeing how it links in
        
        {this.props.showCreateForm ? <AddBook hideCreateForm={this.props.hideCreateForm} handlePost={this.props.handlePost} />: ''}
        
        
      </>
    )
  }
}

export default withAuth0(BestBooks);
