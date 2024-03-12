import React, { useState } from 'react'
import "./Login.scss"
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useDispatch } from 'react-redux';
import { handleLogin } from '../../store/loginReducer';

const Login = () => {
const dispatch = useDispatch()
const {isDisplay, error, isLogin} = useSelector((state : RootState) => state.login)

    const [form, setForm] = useState({
        email: "admin",
        password: "admin",
      });
    
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    
      };
    
      const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
    dispatch(handleLogin(form))
      
      };
    
      return (
        <form className={`log-form ${isDisplay && !isLogin && "display-login"}`} action="submit" onSubmit={handleSubmit}>
          <span>Log in</span>
          <div className="box-inputs">
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={form.email}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={form.password}
            />
          </div>
    
          <button className="btn-style">Login</button>

         <p>{error}</p> 
          <span>
            <a href="">Did you forget your password?</a>
          </span>
        </form>
      )
}

export default Login