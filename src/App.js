import React from 'react'
import { Route } from 'react-router-dom' 

import * as BooksAPI from './BooksAPI'
import './App.css'
import HomePage from './HomePage';
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  }


  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({
        books : books
      })
    })
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf)

    BooksAPI.getAll().then((books) => {
      this.setState({
        books : books
      })
    })
  }
  render() {
    return (
      <div className="app">

          <Route  exact path="/" render={() => (
              <HomePage 
                AllBooks = {this.state.books}
                moveBook = {this.moveBook}
              />  
          )}/>

          <Route  path="/Search" render={() => (
              <Search
                moveBook = {this.moveBook}
                books = {this.state.books}
              />
          )}/> 

      </div>
    )
  }
}

export default BooksApp
