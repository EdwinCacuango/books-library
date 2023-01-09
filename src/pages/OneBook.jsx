import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import { useAppContext } from "../components/Store";

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
      <div>
        <img src="/pileBooks.jpg" />
        <div>
          <h1>{book.title}</h1>
          <div>{book.cover ? <img src={book.cover} width="400" /> : ""}</div>
          <div>{book.author}</div>
          <div>{book.intro}</div>
          <div>{book.completed ? "Completado" : "No terminado"}</div>
          <div>{book.review}</div>
        </div>
      </div>
    </Layout>
  );
};

export default OneBook;
