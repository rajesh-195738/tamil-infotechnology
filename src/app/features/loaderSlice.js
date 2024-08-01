import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    status: false
};

const loaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        showLoader: {
            reducer(state, action) {
                console.log(action.payload)
                state.status = action.payload.status;
            }
        }
    },
})

// export const getLoaderStatus = (state) => state.status;
export const { showLoader } = loaderSlice.actions;
export default loaderSlice.reducer;