import React, { useState } from "react";
import Layout from "../components/layout";
import { useAppContext } from "../components/Store";
import { BsFillCloudArrowUpFill } from "react-icons/bs";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [intro, setIntro] = useState("");
  const [completed, setCompleted] = useState(false);
  const [review, setReview] = useState("");

  const store = useAppContext();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "author":
        setAuthor(value);
        break;
      case "intro":
        setIntro(value);
        break;
      case "completed":
        setCompleted(e.target.checked);
        break;
      case "review":
        setReview(value);
        break;
      default:
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: crypto.randomUUID(),
      title,
      author,
      cover,
      intro,
      completed,
      review,
    };

    store.createItem(newBook);

    setTitle("");
    setAuthor("");
    setCover("");
    setIntro("");
    setCompleted(false);
    setReview("");
  };
  const handleFile = (e) => {
    const element = e.target;
    const file = element.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = function () {
      setCover(reader.result.toString());
    };
  };
  return (
    <Layout>
      <h1 className="mt-4 m text-4xl">Add a new book</h1>
      <div className="flex justify-between items-center mx-2">
        <form onSubmit={handleSubmit} className="w-1/2 text-left mx-4">
          <div className="my-3">
            <label className="text-lg">Title</label>
            <input
              name="title"
              onChange={handleChange}
              value={title}
              className="border w-full rounded-md px-2 py-1"
            />
          </div>
          <div className="my-3">
            <label>Author</label>
            <input
              name="author"
              onChange={handleChange}
              value={author}
              className="border w-full rounded-md px-2 py-1"
            />
          </div>
          <div className="my-3">
            <label for="file-upload" className="flex items-center gap-3">
              <BsFillCloudArrowUpFill />
              Add a cover
            </label>
            <input
              type="file"
              name="cover"
              id="file-upload"
              onChange={handleFile}
              className="hidden"
            />
            <div className="my-3">
              {!!cover ? <img src={cover} width="200" alt="preview" /> : ""}
            </div>
          </div>
          <div className="my-3">
            <label>Introduction</label>
            <textarea
              name="intro"
              onChange={handleChange}
              value={intro}
              className="border w-full rounded-md px-2 py-1"
            />
          </div>
          <div className="my-3 flex gap-3">
            <label>Completed</label>
            <input
              type="checkbox"
              name="completed"
              onChange={handleChange}
              value={completed}
              className="border"
            />
          </div>
          <div>
            <label>Review</label>
            <textarea
              name="review"
              onChange={handleChange}
              value={review}
              className="border w-full rounded-md px-2 py-1"
            />
          </div>
          <button className="my-3 bg-orange-500 text-white font-bold w-full">
            Register book
          </button>
        </form>
        <div className="w-1/2">
          <img src="./pileBooks.jpg" className="w-full" />
        </div>
      </div>
    </Layout>
  );
};

export default AddBook;
