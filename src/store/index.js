import { createStore } from "redux";
import { postsReducer } from "./reducers/postsReducers";

export const store = createStore(postsReducer)