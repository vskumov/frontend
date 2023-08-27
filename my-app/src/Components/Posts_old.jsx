import React from "react";

function Posts() {
  const posts = [
    {
      id: 1,
      title: "Heading1",
      text: "Description1",
      marked: true,
    },
    {
      id: 2,
      title: "Heading2",
      text: "Description2",
      marked: false,
    },
    {
      id: 3,
      title: "Heading3",
      text: "Description3",
      marked: true,
    },
    {
      id: 4,
      title: "Heading4",
      text: "Description4",
      marked: false,
    },
  ];

  return <div>
    
    {posts.map(post => (
        <div key={post.id}>
            <h1 style={{color: post.marked ? "red" : "blue"}}>{post.title}</h1>
            <p>{post.text}</p>
        </div>
    ))}
    
  </div>;
}

export default Posts;
