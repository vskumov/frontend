const reducerClick = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return action.payload;
        case "DECREMENT":
            return state - action.payload;
        default:
            return state;
    }
};

export default reducerClick;