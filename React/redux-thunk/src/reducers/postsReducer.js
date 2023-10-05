const initialState = {
    posts: [],
    error: null,
};

export const postsRed = (state = initialState, action) => {
    switch (action.type) {
        case "POSTS_SUCCESS":
            return { posts: action.payload, error: null };
        case "POSTS_ERROR":
            return { ...state, error: action.payload };
        case "DELETE_SUCCESS":
            const updatedPosts = state.posts.filter((post) => post.id !== action.payload);
            return { ...state, posts: updatedPosts };
        case "DELETE_ERROR":
            return { ...state, error: action.payload };
        case "ADD_POST_SUCCESS":
            const updatedPost = [action.payload, ...state.posts];
            return { ...state, posts: updatedPost }
        case "ADD_POST_ERROR":
            return { ...state, error: action.payload };
            
        default:
            return state;
    };
}