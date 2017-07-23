import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class Bookshelf extends React.Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        moveToShelf: PropTypes.func.isRequired
    };

    static bookshelves = [
        {
            title: 'Currently reading',
            name: 'currentlyReading'
        },
        {
            title: 'Want to read',
            name: 'wantToRead'
        },
        {
            title: 'Read',
            name: 'read'
        }
    ];

    render() {
        let {title, name, books, moveToShelf} = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>

                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) => (
                            <li key={book.id}>
                                <Book
                                    book={book}
                                    moveToShelf={moveToShelf}
                                    bookshelfName={name}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default Bookshelf;
