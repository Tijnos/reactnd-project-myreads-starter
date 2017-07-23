import React from 'react'
import SearchBooks from './SearchBooks';
import Bookcase from './Bookcase';
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom';
import './App.css'

class BooksApp extends React.Component {

    state = {
        bookshelvesBooks: []
    };

    componentDidMount = () => {
        BooksAPI.getAll().then((books) => {
            this.setState({
                bookshelvesBooks: books
            });
        });
    };

    moveToShelf = (book, shelf) => {
        book.shelf = shelf;
        BooksAPI.update({id: book.id}, shelf).then(() => {
            let books = this.state.bookshelvesBooks;
            let bookInState = books.find((stateBook) => {
                return stateBook.id === book.id
            });

            if (bookInState) {
                books = books.map((mappedBook) => {
                    if (mappedBook.id === book.id) {
                        mappedBook.shelf = shelf;
                    }

                    return mappedBook;
                });
            } else {
                books = [...books, book];
            }

            this.setState({
                bookshelvesBooks: books
            });
        });
    };

    render() {
        let {bookshelvesBooks} = this.state;

        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <Bookcase
                        moveToShelf={this.moveToShelf}
                        bookshelvesBooks={bookshelvesBooks}
                    />
                )}/>
                <Route exact path="/search" render={() => (
                    <SearchBooks
                        moveToShelf={this.moveToShelf}
                        bookshelvesBooks={bookshelvesBooks}
                    />
                )}/>
            </div>
        )
    }
}

export default BooksApp;
