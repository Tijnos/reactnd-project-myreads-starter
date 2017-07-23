import React from 'react';
import {Link} from 'react-router-dom';
import Bookshelf from './Bookshelf';
import PropTypes from 'prop-types';

class Bookcase extends React.Component {

    static propTypes = {
        bookshelvesBooks: PropTypes.array.isRequired,
        moveToShelf: PropTypes.func.isRequired
    };

    render() {
        let {bookshelvesBooks, moveToShelf} = this.props;

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>

                <div className="list-books-content">
                    <div>
                        {Bookshelf.bookshelves.map((bookshelf) => (
                            (<Bookshelf
                                    moveToShelf={moveToShelf}
                                    books={bookshelvesBooks.filter((book) => book.shelf === bookshelf.name)}
                                    title={bookshelf.title}
                                    key={bookshelf.name}
                                    name={bookshelf.name}
                                />
                            )))}
                    </div>
                </div>

                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        );
    };
}

export default Bookcase;
