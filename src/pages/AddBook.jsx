import React, { useState } from "react";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [intro, setIntro] = useState("");
  const [completed, setCompleted] = useState(false);
  const [review, setReview] = useState("");

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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <p>Title</p>
          <input
            name="title"
            onChange={handleChange}
            value={title}
            className="border"
          />
        </div>
        <div>
          <p>Author</p>
          <input
            name="author"
            onChange={handleChange}
            value={author}
            className="border"
          />
        </div>
        <div>
          <p>Cover</p>
          <input
            type="file"
            name="cover"
            onChange={handleFile}
            className="border"
          />
          <div>
            {!!cover ? <img src={cover} width="200" alt="preview" /> : ""}
          </div>
        </div>
        <div>
          <p>Introduction</p>
          <input
            name="intro"
            onChange={handleChange}
            value={intro}
            className="border"
          />
        </div>
        <div>
          <p>Completed</p>
          <input
            type="checkbox"
            name="completed"
            onChange={handleChange}
            value={completed}
            className="border"
          />
        </div>
        <div>
          <p>Review</p>
          <input
            name="review"
            onChange={handleChange}
            value={review}
            className="border"
          />
        </div>
        <button>Register book</button>
      </form>
    </div>
  );
};

export default AddBook;
