import React from "react";
import { useAppContext } from "../components/Store";
import Layout from "../components/layout";
import Book from "../components/book";

const Home = () => {
  const store = useAppContext();

  return (
    <Layout>
      <h1 className="my-5">All books available</h1>
      <div className="m-8 flex gap-4 items-center justify-center">
        {store.items.length > 0 ? (
          store.items.map((item) => <Book book={item} key={item.id}></Book>)
        ) : (
          <p>Items not found. Please add one in the Add Book section</p>
        )}
      </div>
    </Layout>
  );
};

export default Home;
