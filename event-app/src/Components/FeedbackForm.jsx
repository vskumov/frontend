import React, { useState } from "react";

// Создайте компонент для формы обратной связи: имя, почта, категория обращения, текст. После отпрвки выведите отправленное сообщение на экран.

function FeedbackForm() {
  const [data, setData] = useState({});

  function handleForm(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const topic = e.target.topic.value;
    const text = e.target.text.value;

    setData({
      name,
      email,
      topic,
      text,
    });
  }

  return (
    <>
      <form onSubmit={handleForm}>
        <input name="name" type="text" placeholder="Your name" required />
        <input name="email" type="email" placeholder="Your e-mail" required />
        <select name="topic">
          <option value="">--Please choose an option--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
        <textarea
          name="text"
          type="text"
          placeholder="Enter your text"
          required
        ></textarea>
        <button>send</button>
      </form>

      <div>
        <h3>{data.name}</h3>
        <h3>{data.email}</h3>
        <h3>{data.topic}</h3>
        <p>{data.text}</p>
      </div>
    </>
  );
}

export default FeedbackForm;
