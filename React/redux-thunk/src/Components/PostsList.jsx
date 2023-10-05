import { useDispatch, useSelector } from "react-redux";
import { getPosts, deletePost } from "../actions/postAction";
import { useEffect } from "react";

function PostsList() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsRed);

  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <>
      {posts.error ? (
        <h1>Error; {posts.error}</h1>
      ) : (
        posts.posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => dispatch(deletePost(post.id))}>Delete</button>
          </div>
        ))
      )};
    </>
  );
}

export default PostsList;


// import { useDispatch, useSelector } from "react-redux";
// import { getPosts, deletePost } from "../actions/postAction";
// import { useEffect } from "react";

// function PostList() {
//   const dispatch = useDispatch();
//   const posts = useSelector((state) => state.postsRed);
// //   console.log(posts);

//   useEffect(() => {
//     dispatch(getPosts());
//   }, []);

//   return (
//     <div>
//       {posts.error ? (
//         <h1>Error: {posts.error}</h1>
//       ) : (
//         posts.posts.map((post) => (
//           <div key={post.id}>
//             <h3>{post.title}</h3>
//             <p>{post.body}</p>
//             <button onClick={() => dispatch(deletePost(post.id))}>Delete</button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default PostList;