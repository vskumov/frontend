import React, { useState } from "react";
import { addPost } from "../../actions/post";
import { useDispatch } from "react-redux";

function PostForm() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const sendPost = function(e) {
    e.preventDefault();
    dispatch(addPost({ id: Date.now(), title }));
    e.target.reset();
  };

  return (
    <form onSubmit={sendPost}>
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        name="inputText"
        placeholder="Your text"
      />
      <button>Send</button>
    </form>
  );
}

export default PostForm;
