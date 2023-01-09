import React from "react";
import { useAppContext } from "../components/Store";
import Layout from "../components/layout";
import Book from "../components/book";

const Home = () => {
  const store = useAppContext();
  return (
    <Layout>
      <h1 className="my-5">All books available</h1>
      <div className="m-8 flex gap-4">
        {store.items.map((item) => (
          <Book book={item} key={item.id}></Book>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
