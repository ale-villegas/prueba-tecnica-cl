import { useState } from "react";
import { PostType } from "../../types";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";

import { FaSave } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { editPost } from "../../store/postsReducer";

interface PropsPost {
  post: PostType;
  handleBack: () => void;
}

const PostEdit = ({ post, handleBack }: PropsPost) => {
  const [form, setForm] = useState({
    title: post.title,
    body: post.body,
  });

  const dispatch = useDispatch();

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const updatedPost = {
      id: post.id,
      userId: post.userId,
      title: form.title,
      body: form.body,
    };

    dispatch(editPost(updatedPost));

    handleBack();
  };
  return (
    <motion.form
      className="box-post form-edit"
      initial={{ opacity: 0.1 }}
      whileInView={{ opacity: 1 }}
      onSubmit={handleSubmit}
    >
      <button className="btn-user">
        <FaUser size={15} /># {post.userId}
      </button>
      <div className="content-box">
        <input name="title" value={form.title} onChange={handleChange} />
        <textarea
          name="body"
          defaultValue={form.body}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="update-btn">
        <button className="btn-style">
          <FaSave size={15} />
        </button>
        <button className="btn-style btn-red" onClick={handleBack}>
          <MdCancel size={15} />
        </button>
      </div>
    </motion.form>
  );
};

export default PostEdit;
