import { createSlice } from "@reduxjs/toolkit";

const stateCreate = {
    click: [
        { "key": "Tuan", "onFocus": false },
        { "key": "Anh", "onFocus": false },
        { "key": "An", "onFocus": false },
        { "key": "A", "onFocus": false }
    ]
};

export const reducerClickTime = createSlice({
    name: 'reducerClickTime',
    initialState: stateCreate,
    reducers: {
        update: (state, action) => {
            const index = state.click.findIndex(item => item.key === action.payload.key);
            if (index !== -1) {
                state.click.forEach((item, i) => {
                    state.click[i].onFocus = i === index;
                });
            }
        }
    }
})

export const { update } = reducerClickTime.actions;
export default reducerClickTime.reducer;