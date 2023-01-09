import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  return (
    <Link to={`/view/${book.id}`}>
      <img src={book.cover} width={200} alt={book.title} />
      <h2>{book.title}</h2>
    </Link>
  );
};

export default Book;
