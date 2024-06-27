import React from 'react';
import './Category.css';
import { MdGroups2 } from 'react-icons/md';
import { FaBusinessTime } from "react-icons/fa6";

const categories = [
    { color: "#3d9d94", title: "business management" },
    { color: "#d67130", title: "art and design" },
    { color: "#e9627c", title: "computer science" },
    { color: "#6955f5", title: "personal development" },
    { color: "rgb(101, 148, 55)", title: "business and finance" },
    { color: "orange", title: "video and photography" }
];

const Category = () => {
    return (
        <div className="container-fluid mt-5 mb- py-5">
            <div className="categoryContainer">
                <small>Checkout our categories</small>
                <h1>Top categories for popular courses to show</h1>

                <div className="categorySection mt-3">
                    {categories.map((category, index) => (
                        <div className="cat" key={index}>
                            <h3 style={{ border: `2px dotted ${category.color}` }}><MdGroups2 color='#e9627c'/></h3>
                            <p>{category.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Category;
