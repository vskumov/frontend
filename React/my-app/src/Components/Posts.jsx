import React, { useState } from "react";
import Post from "./Post";

function Posts() {
  const [posts, setPosts] = useState([
    { id: 1, text: "Post 1", marked: false },
    { id: 2, text: "Post 2", marked: false },
    { id: 3, text: "Post 3", marked: true },
    { id: 4, text: "Post 4", marked: false },
  ]);

  function changeMarked(id) {
    setPosts((prevPosts) => {
      return prevPosts.map((post) => {
        if (post.id === id) {
          return { ...post, marked: !post.marked };
        }
        return post;
      });
    });
  }

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} changeMarked={changeMarked} />
      ))}
    </div>
  );
}

export default Posts;
