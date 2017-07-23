import React from 'react';
import Bookshelf from './Bookshelf';
import PropTypes from 'prop-types';

class Book extends React.Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        bookshelfName: PropTypes.string.isRequired,
        moveToShelf: PropTypes.func.isRequired,
    };

    static noImage = 'http://via.placeholder.com/128x193?text=No+image';

    state = {
        bookshelfName: ''
    };

    render() {
        let {book, bookshelfName, moveToShelf} = this.props;

        if (this.state.bookshelfName) {
            bookshelfName = this.state.bookshelfName;
        }

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${(book.imageLinks.thumbnail)?book.imageLinks.thumbnail:Book.noImage}")` }}></div>

                    <div className="book-shelf-changer">
                        <select value={bookshelfName} onChange={(event => {
                            let bookshelfName = event.target.value;

                            this.setState({
                                bookshelfName: bookshelfName
                            });

                            moveToShelf(book, bookshelfName);
                        })}>
                            <option value="none" disabled>Move to...</option>
                            {Bookshelf.bookshelves.map((bookshelf) => (
                                <option key={bookshelf.name} value={bookshelf.name}>{bookshelf.title}</option>
                            ))}
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>

                <div className="book-title">{book.title}</div>

                <div className="book-authors">{(typeof book.authors === 'object')?book.authors.join(', '):''}</div>
            </div>
        );
    }
}


export default Book;
