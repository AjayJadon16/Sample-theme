import React from "react";
import BookForm from "./BookForm";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditBook = ({ books, setBooks }) => {
  const Navigate = useNavigate();
  const { id } = useParams();

  const bookToEdit = books.find((book) => book.id === id);

  const handleOnSubmit = (book) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks([book, ...filteredBooks]);
    Navigate("/userlist");
  };

  return (
    <div>
      <BookForm book={bookToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditBook;
