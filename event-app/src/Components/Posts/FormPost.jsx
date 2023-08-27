import React from "react";

function FormPost({ addNewPost }) {
  // деструктуризация объекта props — {}, берём из него только функцию, иначе бы писалось props.addNewPost

  function handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const text = e.target.text.value;
    // записываем с инпутов значения в переменные,
    // передаём объект с переменными в функцию

    addNewPost({
      id: Date.now(),
      // title: title,
      title,
      // text: text,
      text,
    });
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Title"
        style={{ display: "block", width: "300px" }}
        required
      />
      <textarea
        name="text"
        type="text"
        placeholder="Text..."
        style={{ display: "block", width: "300px" }}
        required
      />
      <button>add post</button>
    </form>
  );
}

export default FormPost;
