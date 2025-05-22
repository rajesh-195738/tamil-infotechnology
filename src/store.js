import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./app/features/loaderSlice";

// Store
const store = configureStore({
    reducer:{
        loader: loaderReducer
    }
})

export default store;