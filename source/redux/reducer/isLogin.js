import { createSlice } from "@reduxjs/toolkit";

export default isLogin = createSlice({
    initialState:false,
    name:'isLogin',
    reducers:{
        isLogin:(state, action)=>{
            state = action.payload
        }
    }
})
