import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  return (
    <Link to={`/view/${book.id}`}>
      <div className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          src={book.cover}
          alt={book.title}
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        />

        <div className="flex flex-col justify-between p-4 leading-normal">
          <h2 className="mb-2 text-2xl text-left font-bold tracking-tight text-gray-900 dark:text-white">
            {book.title}
          </h2>
          <p className="text-left mb-3 font-normal text-gray-700 dark:text-gray-400">
            {book.intro}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
