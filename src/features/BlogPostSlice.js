import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getAllPosts = createAsyncThunk(
    "getAllPost",
    async () => {
        try {
            // const res = await fetch("https://jsonplaceholder.org/posts");
            // const res=await fetch("https://jsonplaceholder.typicode.com/posts");
            const res=await fetch("https://64de055c825d19d9bfb1e4af.mockapi.io/blog");
            const data = await res.json();
            return data;
        } catch (error) {
            console.log("Error while get all post", error);
            return error;
        }
    }
)
export const postBlog = createAsyncThunk(
    "postBlog",
    async (postData) => {
        try {
            // const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            const res = await fetch("https://64de055c825d19d9bfb1e4af.mockapi.io/blog", {
                method: 'POST',
                body: JSON.stringify({
                    title: postData.title,
                    author: postData.author,
                    desc:postData.content
                    // userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            console.log(res);
            const data=await res.json();
            return data;
        } catch (error) {
            console.log("error while post",error);
            return error
        }
    }
)
const blogPostSlice = createSlice({
    name: "blogPOstSlice",
    initialState: {
        data: [],
        loading: false,
        error: false,
        errorMessage: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getAllPosts.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(getAllPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        builder.addCase(getAllPosts.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            state.errorMessage = action.error.message;
        })
        // ==============post-=======================
        builder.addCase(postBlog.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(postBlog.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        builder.addCase(postBlog.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            state.errorMessage = action.error.message;
        })


    }
})

export default blogPostSlice.reducer;