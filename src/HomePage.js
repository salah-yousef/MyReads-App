import React , { Component } from 'react'
import { Link } from 'react-router-dom'
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
            <Link
              to = "/Search"
            >Add a book</Link>
          </div>
        </div>
        )
    }
}

export default HomePage