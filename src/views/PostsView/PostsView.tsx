import { useEffect, useState } from "react";
import Post from "../../components/Post/Post";
import "./PostView.scss";

import { useDispatch } from "react-redux";
import { fetchInitialPosts } from "../../store/postsReducer";
import { useSelector } from "react-redux";
import useFetch from "../../hooks/useFetch";
import getAllPosts from "../../services/getAllPosts";
import { RootState } from "../../store/store";
import DescriptionSearch from "../../components/DescriptionSearch/DescriptionSearch";
import FormNewPost from "../../components/FormNewPost/FormNewPost";
import { IoMdAddCircle } from "react-icons/io";



const PostsView = () => {
  const { data, isLoading } = useFetch(getAllPosts);
  const [showCreate, setShowCreate] = useState(false)

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(fetchInitialPosts(data));
    }
  }, [dispatch, data]);

  const { posts, login} = useSelector((state: RootState) => state);
 

  const handleCreate = () => {
    if(login.isLogin){
      setShowCreate(!showCreate)
    }else{
      window.alert("Please login to create a new post")
    }
  }

  return (
    <>
     

      {posts.searchResult && posts.searchResult.length > 0 && <h3>Search results:</h3>}

      <div className="box-list"> 
     <div className="posts-create">
      <h1>Posts</h1>
      <IoMdAddCircle size={35} className="btn-add" onClick={handleCreate}/>
      </div>

      {showCreate && login.isLogin && <FormNewPost setShow={handleCreate}/> }
      
      <DescriptionSearch/>
        {isLoading && <span>Loading....</span>}
        {posts.searchResult && posts.searchResult.length > 0 ? (
          posts.searchResult?.map((post) => <Post key={post.id} post={post} />)
        ) : !posts.searchResult ? (
          <h3>No posts found</h3>
        ) : (
          posts.posts &&
          posts.posts.length > 0 &&
          posts.posts.map((post) => <Post key={post.id} post={post} />)
        )}
      </div>
    </>
  );
};

export default PostsView;
