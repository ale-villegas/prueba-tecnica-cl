import { useDispatch } from "react-redux";
import { PostType } from "../../types";
import { motion } from "framer-motion";

import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { deletePost } from "../../store/postsReducer";

interface PropsPost {
  post: PostType;
  handleClick: () => void;
  filterByUserId: () => void;
}

const PostRead = ({ post, handleClick, filterByUserId }: PropsPost) => {
  const dispatch = useDispatch();



  const handleDelete = () => {
    dispatch(deletePost(post));
  };




  
  return (
    <motion.div
      className="box-post"
      initial={{ opacity: 0.1 }}
      whileInView={{ opacity: 1 }}
    >
      <button className="btn-user" onClick={filterByUserId}>
        <FaUser size={15} /># {post.userId}
      </button>
      <div className="content-box">
        <h3>{post.title}</h3>
        
        <p>{post.body}</p>

      </div>

      <div className="update-btn">
        <button className="btn-style" onClick={handleClick}>
      
          <MdEdit size={15} /> 
         
        </button>
        <button className="btn-style btn-red" onClick={handleDelete} >
          <MdDelete size={15} />
        </button>
      </div>
    </motion.div>
  );
};

export default PostRead;
