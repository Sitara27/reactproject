import React from 'react';
import './Blog.css';
import blog1 from '../../assets/study-group.jpg';
import blog2 from '../../assets/std.jpg';
import blog3 from '../../assets/study-group.jpg';
import { FaRegUser, FaComments } from 'react-icons/fa';

const blogData = [
    {
        image: blog1,
        author: 'Admin',
        comments: 'Two comments',
        title: 'The quality role of the elementary teacher in education'
    },
    {
        image: blog2,
        author: 'Admin',
        comments: 'Two comments',
        title: 'The quality role of the elementary teacher in education'
    },
    {
        image: blog3,
        author: 'Admin',
        comments: 'Two comments',
        title: 'The quality role of the elementary teacher in education'
    }
];

const Blog = () => {
    return (
        <div className="container-fluid mt-5 mb-5 py-5">
            <div className="blogSection ">
                <small>Directly from blog</small>
                <h1>Our latest news & upcoming blog posts</h1>

                <div className="blogCard">
                    {blogData.map((blog, index) => (
                        <div key={index} className="blogDetails">
                            <img src={blog.image} alt="blog" />

                            <div className="blogBottom">
                                <div>
                                    <p><FaRegUser color='#3d9d94' />{blog.author}</p>
                                    <p><FaComments color='#3d9d94' />{blog.comments}</p>
                                </div>
                                <p>{blog.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
