import { createAction } from "@reduxjs/toolkit";

export const updateTime = createAction('reducerClickTime/update', value => {
    // console.log(value);
    return {
        type: 'update',
        payload: value
    }
});