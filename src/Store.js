import { configureStore } from "@reduxjs/toolkit";
import BlogPostSlice from "./features/BlogPostSlice";


export const store=configureStore({
    reducer:{
        blogPostslice:BlogPostSlice,
    }
})