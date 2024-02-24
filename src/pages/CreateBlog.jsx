import { useFormik } from 'formik';
import React from 'react';
import { postSchema } from '../utils/formValidation';
import { useDispatch } from 'react-redux';
import { postBlog } from '../features/BlogPostSlice';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            title: '',
            author: '',
            content: ''
        },
        validationSchema: postSchema,
        onSubmit: (values) => {
            try {
                dispatch(postBlog(values))
                alert("data posted successfully");
                navigate("/");
            } catch (error) {
                console.log(error);
            }
        }
    })
    return (
        <div className=" bg-gray-100">
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 className="mb-4 text-2xl border-b-2 border-gray-900 text-center font-bold text-gray-900 dark:text-white">Write New Blog </h2>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="sm:col-span-2">
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title of blog</label>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    value={formik.values.title}
                                    onChange={formik.handleChange}
                                    className="bg-gray-50 border border-gray-600 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                                    placeholder="write blog title"
                                    required="" />
                                <p className='text-red-500 text-xs'>{formik.errors.title}</p>
                            </div>


                            <div className="sm:col-span-2">
                                <label htmlFor="author" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Auther Name</label>
                                <input
                                    type="text"
                                    name="author"
                                    id="author"
                                    value={formik.values.author}
                                    onChange={formik.handleChange}
                                    className="bg-gray-50 border border-gray-600 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                    placeholder="Author name"
                                    required="" />
                                <p className='text-red-500 text-xs'>{formik.errors.author}</p>
                            </div>


                            <div className="sm:col-span-2">
                                <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <textarea
                                    id="content"
                                    name='content'
                                    rows="8"
                                    value={formik.values.content}
                                    onChange={formik.handleChange}
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-600"
                                    placeholder="Write blog here "
                                >
                                </textarea>
                                <p className='text-red-500 text-xs'>{formik.errors.content}</p>
                            </div>
                        </div>
                        <button type="submit" className="inline-flex bg-blue-600 items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white  rounded-lg hover:bg-blue-800">
                            Post blog
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default CreateBlog;
