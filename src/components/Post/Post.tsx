import { useState } from "react";
import { PostType } from "../../types";
import "./Post.scss";
import PostEdit from "./PostEdit";
import PostRead from "./PostRead";
import { useDispatch } from "react-redux";
import { actionFilterById } from "../../store/postsReducer";


interface PropsPost {
  post: PostType;
}

const Post = ({ post }: PropsPost) => {
  const [editMode, setEditMode] = useState(false);

  const dispatch = useDispatch();

  const handleBack = () => {
    setEditMode(!editMode);
  };

  const filterByUserId = () => {
    dispatch(actionFilterById(post));
  };

  return (
    <>
      {editMode ? (
        <PostEdit post={post} handleBack={handleBack} />
      ) : (
        <PostRead
          filterByUserId={filterByUserId}
          post={post}
          handleClick={handleBack}
        />
      )}
    </>
  );
};

export default Post;
