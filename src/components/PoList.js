import React from 'react';
import _ from 'lodash';
import Po from './Po';

const PoList = ({ books, setBooks }) => {

  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <React.Fragment>
      <div className="book-list">
        <table class="table">
        {!_.isEmpty(books) ? (
          books.map((book) => (
            <Po key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
          ))
        ) : (
          <p className="message">No purchase orders available.</p>
        )}
        </table>
      </div>
    </React.Fragment>
  );
};

export default PoList;