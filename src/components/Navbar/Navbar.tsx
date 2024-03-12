import { useEffect, useState } from "react";
import "./Navbar.scss";
import { FormType } from "../../types";
import { useDispatch } from "react-redux";
import { filterSearch, resetSearchResults } from "../../store/postsReducer";
import { handleDisplay, handleLogout } from "../../store/loginReducer";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Navbar = () => {
  const [form, setForm] = useState<FormType>({
    search: "Title",
    input: "",
  });

  const dispatch = useDispatch();

  const {isLogin} = useSelector((state : RootState) => state.login)

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    setForm((prevState) => ({ ...prevState, [name]: value }));
    dispatch(filterSearch(form));
  }; 


  const handleLogInLogout = () => {
    if(isLogin){
      dispatch(handleLogout())
    }else{
      dispatch(handleDisplay())
    }
  }

  useEffect(() => {
    if (form.input) {
      dispatch(filterSearch(form));
    } else {
      dispatch(resetSearchResults());
    }
  }, [form, dispatch]);

  return (
    <>
      <div className="nav-bar">
        <nav>
          <span className="logo">Posts App</span>

          <form action="submit" className="search-box">
            <select name="search" onChange={handleChange}>
              <option value="Title">Title</option>
              <option value="Body">Body</option>
            </select>
            <input
              name="input"
              type="text"
              placeholder="Search"
              onChange={handleChange}
              value={form.input}
            />
          </form>

          <button
            className="btn-style"
            onClick={handleLogInLogout}
          >
            {isLogin ? "Logout" : "Login"}
          </button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
