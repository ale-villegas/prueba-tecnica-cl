import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsReducer";
import loginReducer from "./loginReducer";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    login: loginReducer
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>
