import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./reducers/getReducer";
import loginSlice from "./reducers/loginSlice";
import getSalesmanSlice from "./reducers/getSalesmanSlice";

const rootReducer = combineReducers({
  posts: postsReducer,
  login: loginSlice,
  resSalesman: getSalesmanSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
