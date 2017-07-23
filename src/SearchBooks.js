import React from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import PropTypes from 'prop-types';

class SearchBooks extends React.Component {

    static propTypes = {
        moveToShelf: PropTypes.func.isRequired
    };

    state = {
        query: '',
        books: []
    };

    updateQuery = (query) => {
        this.setState({
            query: query
        });

        BooksAPI.search(query.trim()).then((response) => {
            let {bookshelvesBooks} = this.props;

            let books = response.map((book) => {
                let foundBookshelfBook = bookshelvesBooks.find(
                    (bookshelvesBook) => (bookshelvesBook.id === book.id)
                );

                if (foundBookshelfBook) {
                    book.shelf = foundBookshelfBook.shelf;
                }

                return book;
            });

            this.setState({
                books: books
            });
        });
    };

    render() {
        let {moveToShelf} = this.props;
        let {query, books} = this.state;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>

                    <div className="search-books-input-wrapper">
                        <input
                            onChange={(event) => this.updateQuery(event.target.value)}
                            value={query}
                            type="text"
                            placeholder="Search by title or author"
                        />
                    </div>
                </div>

                <div className="search-books-results">
                    <ol className="books-grid">
                        {books.map((book) => (
                            <li key={book.id}>
                                <Book
                                    book={book}
                                    moveToShelf={moveToShelf}
                                    bookshelfName={book.shelf}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    };
}

export default SearchBooks;
