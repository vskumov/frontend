import React, { useState } from "react";
import todostate from "../../state/todostate";
import { observer } from "mobx-react-lite";

const AddToDo = observer(() => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== "") {
      todostate.add({ id: Date.now(), title, done: false });
      setTitle("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button>add</button>
      </form>
    </div>
  );
});

export default AddToDo;
