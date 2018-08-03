import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'


class Search extends Component {
  state = {
    query: '',
    availableBooks: []
  }

  updateQuery = (query)=> {
    this.setState({
        query: query
    })
    this.getMatchedBooks(query)
  }

  getMatchedBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then((availableBooks) => {
        this.setState({
          availableBooks: availableBooks
        })   
      })
    }else{
      this.setState({ availableBooks: [] })
    }
 
  }  

    render() {
      const moveBook = this.props.moveBook

        return (
          <div className="search-books">
          <div className="search-books-bar">
            <Link
              to = '/'
              className="close-search" 
            >Close</Link>
            <div className="search-books-input-wrapper">
              {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
              <input
                type="text"
                value = {this.state.query}
                onChange = {(event) => this.updateQuery(event.target.value)}
                placeholder="Search by title or author"
               />

            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {
                 this.state.availableBooks!==null && this.state.availableBooks!== undefined && this.state.availableBooks.length >0 &&
                  this.state.availableBooks.map(availableBooks => {
                    let shelf = "none"
                    this.props.books.map( book => (
                      book.id === availableBooks.id ? shelf = book.shelf : ''
                    ) )
                    return (
                      <li key={availableBooks.id}>
                        <Book 
                          book = {availableBooks}
                          moveBook = {moveBook}
                          shelf = {shelf}
                        />
                      </li>
                    )
                  })   
               }
            </ol>
          </div>
        </div>
        )
    }
}

export default Search