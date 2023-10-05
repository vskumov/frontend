import React, { useState } from "react";
import FormPost from "./FormPost";

function AddPost() {
  const [posts, setPosts] = useState([]);

  function addNewPost(newPost) {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
    // сохраняем имеющиеся посты и добавляем вначало новый
  }

  return (
    <div>
      <h2>Добавить новый пост</h2>
      <FormPost addNewPost={addNewPost} />
      {/* добавляем новый — не существующий в стандартных — атрибут addNewPost для компонента, данный атрибут является пропсом, который мы передаём компоненту */}

      <h2>Список постов</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.text}</p>
        </div>
      ))}
    </div>
  );
}

export default AddPost;
