import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import OneBook from "./pages/OneBook";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/view/:bookId" element={<OneBook />} />
      </Routes>
    </div>
  );
}

export default App;
