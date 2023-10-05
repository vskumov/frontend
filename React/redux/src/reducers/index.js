import { combineReducers } from "redux";
import reducerClick from "./clickerReducer";
import { postReducer } from "./postReducer";
import { cartReducer } from "./cartReducer"

const rootReducer = combineReducers ({
    clicker: reducerClick,
    posts: postReducer,
    cart: cartReducer,
})

export default rootReducer;