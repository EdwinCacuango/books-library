import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../components/Store";
import Layout from "../components/layout";
import Book from "../components/book";

const Home = () => {
  const store = useAppContext();
  return (
    <Layout>
      {store.items.map((item) => (
        <Book book={item} key={item.id}></Book>
      ))}
    </Layout>
  );
};

export default Home;
