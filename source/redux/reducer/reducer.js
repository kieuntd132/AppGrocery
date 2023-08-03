import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    click: [
        { key: '1', value: '8 AM - 11 AM', onFocus: false },
        { key: '2', value: '11 AM - 13 PM', onFocus: false },
        { key: '3', value: '13 PM - 15 PM', onFocus: false },
        { key: '4', value: '15 PM - 17 PM', onFocus: false },
        { key: '5', value: '17 PM - 19 PM', onFocus: false },
        { key: '6', value: '19 PM - 21 PM', onFocus: false },
    ]
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'reducerClickTime/update':
            const { key } = action.payload;
            const list = state.click.map(item => {
                if (item.key === key) {
                    return { ...item, onFocus: true };
                } else {
                    return { ...item, onFocus: false };
                }
                return item;
            });
            // console.log({ ...state, click: list }.click);
            return { ...state, click: list };
        default:
            return state;
    }
}