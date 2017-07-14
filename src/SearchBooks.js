import React from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class SearchBooks extends React.Component {

    state =  {
        query: '',
        books: []
    };

    // componentDidMount() {
    //
    // }

    updateQuery = (query) => {
        this.setState({
            query: query
        });

        BooksAPI.search(query.trim()).then((books) => {
            if (typeof books.error === 'undefined') {
                this.setState({
                    books: books
                });
            }
        });
    };

    render()  {
        let { query, books } = this.state;

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
                                    image={book.imageLinks.thumbnail}
                                    authors={book.authors}
                                    title={book.title}
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
