import React from 'react';
import Bookshelf from './Bookshelf';

class Book extends React.Component {

    render() {
        let {id, image, title, authors, bookshelfName} = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${image}")` }}></div>
                    <div className="book-shelf-changer">
                        <select value={bookshelfName}>
                            <option value="none" disabled>Move to...</option>
                            {Bookshelf.bookshelves.map((bookshelf) => (
                                <option key={bookshelf.name} value={bookshelf.name}>{bookshelf.title}</option>
                            ))}
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{(typeof authors === 'object')?authors.join(', '):''}</div>
            </div>
        );
    }
}


export default Book;
