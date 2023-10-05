import axios from "axios";

export const getPosts = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");

            dispatch({ type: "POSTS_SUCCESS", payload: response.data });
        } catch (err) {
            dispatch({ type: "POSTS_ERROR", payload: err.message });
        }
    };
};

export const deletePost = (postId) => {
    return async (dispatch) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            dispatch({ type: "DELETE_SUCCESS", payload: postId });
        } catch (err) {
            dispatch({ type: "DELETE_ERROR", payload: err.message });
        }
    };
};

export const addPost = (post) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/posts", post);
            dispatch({ type: "ADD_POST_SUCCESS", payload: response.data });

        } catch (err) {
            dispatch({ type: "ADD_POST_ERROR", payload: err.message });
        }
    }
}
