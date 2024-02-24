import { object, string } from "yup";


export const postSchema=object({
    title:string().required("Title is required").min(3,"At least 3 character"),
    author:string().required("Author is required").min(3,"At least 3 character"),
    content:string().required("Description is required").min(10,"at least 10 character")
})