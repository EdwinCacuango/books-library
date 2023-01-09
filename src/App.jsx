import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import OneBook from "./pages/OneBook";
import "./App.css";
import Store from "./components/Store";

function App() {
  return (
    <div className="App">
      <Store>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/view/:bookId" element={<OneBook />} />
        </Routes>
      </Store>
    </div>
  );
}

export default App;
