import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducerClickTime } from "./reducer/clickTime";
import isLogin from "./reducer/isLogin";


import { userReducer } from "./reducer/reducer";

const rootStore = combineReducers({
    changeTime: reducerClickTime,
    user: userReducer,
    loginReducer: isLogin
})
const store = configureStore({
    reducer: {
        rootStore
    }
})

export default store