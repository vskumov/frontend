import { combineReducers } from "redux";
import { postsRed } from "./postsReducer";

export const rootReducer = combineReducers({
    postsRed,
})