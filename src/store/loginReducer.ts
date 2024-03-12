import { PayloadAction, createSlice } from "@reduxjs/toolkit";



type LoginState = {
    isLogin: boolean,
    error: null | string,
    isDisplay: boolean
}
const initialState : LoginState = {
    isLogin: false,
    error: null ,
    isDisplay: false
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {

    handleLogin: (state, action: PayloadAction<{ email: string, password: string }>) => {
        const { email, password } = action.payload;

        if (email === "" || password === "") {
            state.error = "Wrong credentials";
        } else {
          
            if (email === "admin" && password === "admin") {
                state.isLogin = true;
                state.error = null;
            } else {
                state.isLogin = false;
                state.error = "Wrong credentials";
            }
        }
    }, 

    handleDisplay : (state) => {
        return {...state, isDisplay: !state.isDisplay}
    },


    handleLogout: () => {
        return initialState
    }

  },
});

export const {
    handleLogin,
    handleDisplay,
    handleLogout
} = loginSlice.actions;
export default loginSlice.reducer;