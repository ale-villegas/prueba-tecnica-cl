import { motion } from "framer-motion";
import { useState } from "react";
import { FaSave } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { useDispatch } from "react-redux";
import { createPost } from "../../store/postsReducer";
import "./FormNewPost.scss"


type PropsFormPost = {
    setShow : () => void
}

const FormNewPost = ({setShow} : PropsFormPost) => {

    const [form, setForm] = useState({
        title: "",
        body: "",
        userId: ""
      });
    
      const dispatch = useDispatch();
    
      const handleChange = (
        event:
          | React.ChangeEvent<HTMLInputElement>
          | React.ChangeEvent<HTMLTextAreaElement>
          | React.ChangeEvent<HTMLSelectElement>
      ) => {
        const { name, value } = event.target;
    
        setForm({ ...form, [name]: value });
      };
    
      const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    if(form.title && form.body){
        const newPost = {
            id: Date.now(),
            userId: Number(form.userId) ,
            title: form.title,
            body: form.body,
          };
  
      dispatch(createPost(newPost))
    }else{
        window.alert("Complete all fields to create a new post")
    }
       
       
      };

  return (
   <>
   <motion.form
  className="box-post form-edit create-post"
  initial={{ opacity: 0.1 }}
  whileInView={{ opacity: 1 }}
  onSubmit={handleSubmit}
>


  <div className="content-box">
  <h3>Create new post</h3>
  <div className="box-select-input">

    <label htmlFor="title">Title:</label>
    <input name="title" id="title" value={form.title} onChange={handleChange} />
    <label htmlFor="userId">User ID:</label>
    <select name="userId" id="userId" onChange={handleChange}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option> 
      <option value="9">9</option>
    </select>
    </div>
    <label htmlFor="body">Body:</label>
    <textarea
      name="body"
      id="body"
      defaultValue={form.body}
      onChange={handleChange}
    ></textarea>
  </div>

  <div className="update-btn">
    <button className="btn-style">
      <FaSave size={15} />
    </button>
    <button className="btn-style btn-red" onClick={setShow}>
      <MdCancel size={15} />
    </button>
  </div>
</motion.form>
   </>
  )
}

export default FormNewPost