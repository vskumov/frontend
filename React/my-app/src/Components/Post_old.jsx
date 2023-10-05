import React from "react";

function Post({ post }) {
//   const title = "Book";
//   const text = "Kafka";
//   const img =
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Kafka1906_cropped.jpg/274px-Kafka1906_cropped.jpg";

//   const marked = true;

  return (
    <div>
      <h1
        style={{
          color: "red",
          backgroundColor: post.marked ? "whitesmoke" : "azure",
        }}
      >
        {post.title}
      </h1>
      <p>{post.text}</p>
      <img src={post.img} alt="Franz Kafka" />
    </div>
  );
}

export default Post;
