import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import { useAppContext } from "../components/Store";
import { FcCheckmark, FcReading } from "react-icons/fc";
import { BsPersonCircle } from "react-icons/bs";

const OneBook = () => {
  const [book, setBook] = useState({});
  const params = useParams();
  const store = useAppContext();

  useEffect(() => {
    const BOOK = store.getItem(params.bookId);
    setBook(BOOK);
  }, []);

  if (!book) {
    return <div>Item not found</div>;
  }
  return (
    <Layout>
      <div className="flex my-8 mx-12 gap-6">
        <div>{book.cover ? <img src={book.cover} width="400" /> : ""}</div>
        <div>
          <div className="text-left">
            <h1>{book.title}</h1>
            <p className="text-2xl flex gap-2 my-2 items-center">
              <BsPersonCircle />
              {book.author}
            </p>
          </div>
          <p className="text-left text-lg mt-6">{book.intro}</p>
          <div className="flex items-center justify-between">
            <div className="text-left my-6">
              <h2 className="text-xl font-semibold">Reviews</h2>
              <p className="flex gap-2 items-center">
                <FcReading fontSize="1.5rem" />
                {book.review}
              </p>
            </div>
            <div className="text-left mr-12">
              <h2 className="text-xl font-semibold">State</h2>
              {book.completed ? (
                <p className="flex gap-3 items-center">
                  <FcCheckmark fontSize="1.5rem" />
                  Done
                </p>
              ) : (
                "No terminado"
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OneBook;
