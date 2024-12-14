import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'

const SingleBLog = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const [blog, setBlog] = useState({});

    const fetchSingleBlog = async () => {
        const response = await axios.get("http://localhost:3000/blog/" + id)
        setBlog(response.data.data)
    }

    const deleteOnclick = async () => {
        const response = await axios.delete("http://localhost:3000/blog/" + id);
        (response.status === 200) ? navigate("/") : alert("Something went wrong");

    }

    useEffect(() => {
        fetchSingleBlog()
    }, [])

    return (
        <>
            <Navbar />
            <div className="bg-gray-100 dark:bg-gray-800 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                <img className="w-full h-full object-cover" src={"http://localhost:3000/" + blog.image} alt="Blog Image" />
                            </div>
                            <div className="flex -mx-2 mb-4">
                                <div className="w-1/2 px-2">
                                    <Link to={`/edit/${id}`}>
                                        <button className="w-full bg-blue-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Edit Blog</button>
                                    </Link>
                                </div>
                                <div className="w-1/2 px-2">
                                    <button className="w-full bg-red-600 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600" onClick={deleteOnclick}>Delete Blog</button>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex-1 px-4">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{blog.title}</h2>
                            <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
                                {blog.subtitle}
                            </p>

                            <div>
                                <span className="font-bold text-gray-700 dark:text-gray-300">Blog Description:</span>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                    {blog.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SingleBLog