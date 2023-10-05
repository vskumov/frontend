import React from "react";

function Post({ post, changeMarked }) {
  return (
    <div>
      <h3
        style={{
          color: post.marked ? "orange" : "gray",
          fontWeight: post.marked ? 900 : 100,
        }}
      >
        {post.text}
      </h3>
      <button onClick={() => changeMarked(post.id)}>
        {post.marked ? "убрать" : "добавить"}
      </button>
    </div>
  );
}

export default Post;
