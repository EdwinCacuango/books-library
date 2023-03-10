import React, { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext({
  items: [],
  createItem: (item) => {},
  getItem: (id) => {},
  updateItem: (item) => {},
});

const Store = ({ children }) => {
  const [items, setItems] = useState([]);

  const createItem = (item) => {
    const temp = [...items];
    temp.push(item);
    setItems(temp);
  };

  useEffect(() => {
    const arr = localStorage.getItem("books");
    if (arr !== null && arr !== undefined) {
      const books = JSON.parse(arr);
      setItems(books);
    }
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      const jsonArr = JSON.stringify(items);
      localStorage.setItem("books", jsonArr);
    }
  }, [items]);

  const getItem = (id) => {
    const item = items.find((item) => item.id === id);
    return item;
  };

  const updateItem = (item) => {
    const index = items.findIndex((element) => element.id === item.id);
    const temp = [...items];

    temp[index] = { ...item };
  };
  return (
    <AppContext.Provider value={{ items, createItem, getItem, updateItem }}>
      {children}
    </AppContext.Provider>
  );
};

export default Store;
export function useAppContext() {
  return useContext(AppContext);
}
