import React from "react";
import { Link } from "react-router-dom";

function Blog() {
  const blogPosts = [
    {
      id: "1",
      title: "Как правильно ухаживать за домашними цветами",
      content:
        "Советы по поливу, подкормке, обрезке и другие правила ухода за домашними цветами. Расскажем как выбрать правильную почву, как убрать шерсть с кактуса и многое другое.",
    },
    {
      id: "2",
      title: "Топ-10 самых популярных цветов для дома",
      content:
        "Вдохновляющие идеи для флористического декора в домашней обстановке. Расскажем, как создать уютную атмосферу в доме, как выбрать цветочный дизайн, который будет отражать вашу индивидуальность и создаст незабываемую атмосферу.",
    },
    {
      id: "3",
      title: "Как выбрать букет для подарка",
      content:
        "Советы по выбору цветов для разных случаев и отношений. Расскажем как выбрать правильный букет для своей девушки, как сделать приятный сюрприз в виде букета роз, как выбрать цветы для подруги и многое другое.",
    },
  ];

  return (
    <div className="container first-element">
      <h1>Our blog</h1>
      <div className="posts-container">
        {blogPosts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <Link to={`/blog/posts/${post.id}`}>read more</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
