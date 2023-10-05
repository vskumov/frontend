const posts = [
    { id: 1, title: "Post1" },
    { id: 2, title: "Post2" },
    { id: 3, title: "Post3" },
    { id: 4, title: "Post4" },
];

export const postReducer = (state = posts, action) => {
    switch (action.type) {
        case "ADD_POST":
            return [...state, action.payload];
        case "DELETE_POST":
            return state.filter((post) => post.id !== action.payload);
        default:
            return state;
    };
}