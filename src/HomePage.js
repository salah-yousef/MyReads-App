import React , { Component } from 'react'
import Shelf from './Shelf'

class HomePage extends Component {
    render() {
      const AllBooks = this.props.AllBooks
      const moveBook = this.props.moveBook
      const Shelfs = ["currentlyReading","wantToRead","read"]
        return (
          <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Shelf
                myshelf = {Shelfs[0]}
                AllBooks = {AllBooks} 
                moveBook = {moveBook} 
              />
              <Shelf
                myshelf = {Shelfs[1]} 
                AllBooks = {AllBooks} 
                moveBook = {moveBook} 
              />
              <Shelf
                myshelf = {Shelfs[2]}
                AllBooks = {AllBooks} 
                moveBook = {moveBook} 
              />
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
          </div>
        </div>
        )
    }
}

export default HomePage