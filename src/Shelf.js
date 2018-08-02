import React , { Component } from 'react'
import Book from './Book'

class Shelf extends Component {
    render () {  
        const AllBooks = this.props.AllBooks
        const moveBook = this.props.moveBook
        const shelf = this.props.myshelf
 
        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              {
                AllBooks
                .filter(book => book.shelf === shelf)
                .map(book => (
                  <li key={book.id}>
                    <Book 
                      book = {book}
                      moveBook = {moveBook} 
                    />
                  </li>
                ))
              }
              </ol>
            </div>
          </div> 
        )
    }
}


export default Shelf