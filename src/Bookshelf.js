import React from 'react';
import Book from './Book';

class Bookshelf extends React.Component {

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

    static books = [
        {
            id: 1,
            imageLinks: {
                smallThumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                thumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            image: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api',
            title: 'To Kill a Mockingbird',
            authors: ['Harper Lee'],
        },
        {
            id: 2,
            imageLinks: {
                smallThumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                thumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            title: 'Ender\'s Game',
            authors: ['Harper Lee'],
        },
    ];

    render() {
        let {title, name} = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {Bookshelf.books.map((book) => (
                            <li key={book.id}>
                                <Book
                                    image={book.imageLinks.thumbnail}
                                    authors={book.authors}
                                    bookshelfName={name}
                                    title={book.title}
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
