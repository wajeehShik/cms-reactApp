import { categoriesReducer } from "./categories-slice";
import { configureStore } from "@reduxjs/toolkit";
export const reduxStore=configureStore({
    reducer:{
        categories:categoriesReducer,
    }
})