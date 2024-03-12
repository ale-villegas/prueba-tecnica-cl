import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FormType, PostType, PostsState } from "../types";

const initialState: PostsState = {
  posts: [],
  searchResult: [],
  searchForm: {
    search: "Title",
    input: "",
  },
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchInitialPosts: (state, action: PayloadAction<PostType[]>) => {
      return { ...state, posts: action.payload };
    },

    filterSearch: (state, action: PayloadAction<FormType>) => {
      const { search, input } = action.payload;
      if (search === "Title") {
        const searchResult = state.posts.filter((post) =>
          post.title.includes(input.toLowerCase())
        );
        return {
          ...state,
          searchResult: searchResult.length > 0 ? searchResult : null,
          searchForm: {search, input}
        };
      } else if (search === "Body") {
        const searchResult = state.posts.filter((post) =>
          post.body.includes(input.toLowerCase())
        );
        return {
          ...state,
          searchResult: searchResult.length > 0 ? searchResult : null,
          searchForm: {search, input}
        };
      }
    },
    resetSearchResults: (state) => {
      return { ...state, searchResult: [], searchForm: {search: "Title", input: ""} };
    },

    actionFilterById: (state, action) => {
      const { userId } = action.payload;

      const searchById = state.posts.filter((post) => post.userId === userId);

      return { ...state, searchResult: searchById };
    },

    deletePost: (state, action) => {
      const { id } = action.payload;
      const filterAllPosts = state.posts.filter((post) => post.id !== id);
      const filterSearchResults = state.searchResult
        ? state.searchResult.filter((post) => post.id !== id)
        : [];

      return {
        ...state,
        posts: filterAllPosts,
        searchResult: filterSearchResults,
      };
    },

    editPost: (state, action) => {
      const updatedPost = action.payload;

      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === updatedPost.id ? updatedPost : post
        ),
        searchResult:
          state.searchResult &&
          state.searchResult.map((post) =>
            post.id === updatedPost.id ? updatedPost : post
          ),
      };
    },

    createPost : (state, action) => {

      const newPost = action.payload
      console.log(newPost)


      return {
        ...state, posts: [ newPost, ...state.posts]
      }



    }

  },
});

export const {
  fetchInitialPosts,
  filterSearch,
  resetSearchResults,
  actionFilterById,
  deletePost,
  editPost,
  createPost
} = postsSlice.actions;
export default postsSlice.reducer;
