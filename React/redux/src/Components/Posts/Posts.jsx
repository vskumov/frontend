import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../../actions/post";

function Posts() {

    const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts);

  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <button onClick={() => dispatch(deletePost(post.id))}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default Posts;
