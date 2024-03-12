import { PostType } from "../types";

const url = "https://jsonplaceholder.typicode.com/posts";

const getAllPosts = async (): Promise<PostType[]> => {
  try {
    const response = await fetch(url);
    const toJson = await response.json();

    return toJson as Array<PostType>;
  } catch (error) {
    throw new Error("Error fetching posts");
  }
};

export default getAllPosts;
