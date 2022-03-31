import React from 'react';
import BookForm from './BookForm';

const AddBook = ({ books, setBooks }) => {
  const handleOnSubmit = (book) => {
    setBooks([book, ...books]);
    
  };

  return (
    <React.Fragment>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddBook;