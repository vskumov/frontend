import React, { useState } from "react";

function FormsTesting() {
  const [name, setName] = useState("");
  const [score, setScore] = useState("5");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Number(score) <= 5 && comment.length <= 10) {
      alert("Please provide a comment explaining why the experience was poor.");
      return;
    }

    setName("");
    setScore("5");
    setComment("");

    console.log("Form submitted!");
  };

  
  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback form</h2>
          <div className="Field">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label htmlFor="score">Score: {score}</label>
            <input
              type="range"
              min="0"
              max="10"
              value={score}
              id="score"
              onChange={(e) => setScore(e.target.value)}
            />
          </div>
          <div className="Field">
            <label htmlFor="comment">Your comment:</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              id="comment"
            />
          </div>

          <button disabled={!name} type="submit">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default FormsTesting;

// const Form = () => {
//     const [value, setValue] = useState("");

//     const handleChange = (e) => {
//       setValue(e.target.value)
//     }

//     return (
//       <form>
//         <input
//           value={value}
//           onChange={handleChange}
//           type="text"
//         />
//       </form>
//     );
//    };

// In React, an <input type="file" /> is always an uncontrolled component because its value is read-only and can't be set programmatically.

// const Form = () => {
//     const fileInput = useRef(null);

//     const handleSubmit = (e) => {
//       e.preventDefault();
//       const files = fileInput.current.files;
//       // Do something with the files here
//     }

//     return (
//       <form onSubmit={handleSubmit}>
//         <input
//           ref={fileInput}
//           type="file"
//         />
//       </form>
//     );
//    };
