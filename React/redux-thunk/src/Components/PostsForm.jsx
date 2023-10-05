import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../actions/postAction";

function PostsForm() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const post = { title, body: desc };
    dispatch(addPost(post));

    setTitle("");
    setDesc("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Post title..."
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        type="text"
        placeholder="Your text..."
        onChange={(e) => setDesc(e.target.value)}
        value={desc}
      />
      <button>Add post</button>
    </form>
  );
}

export default PostsForm;
