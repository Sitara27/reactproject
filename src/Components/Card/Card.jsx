import React from 'react'
import './Card.css'
import blog1 from '../../assets/study-group.jpg';
import blog2 from '../../assets/std.jpg';
import blog3 from '../../assets/study-group.jpg';
import { FaBookOpen } from "react-icons/fa";
import { RiAncientPavilionLine } from "react-icons/ri";
import { IoMdStar } from "react-icons/io";
const Card = () => {
    return (
        <>
            <div className="container-fluid mt-5 mb-5 my-5 "
            >
                <div className="container">
                    <div className="card-section">
                        <small>popular courses</small>
                        <h1>Pick a courses to get started your study</h1>

                        <div className="cardGallery">
                            <div className="cardBox">
                                <img src={blog1} alt="" />

                                <div className="cardbtn">
                                    <p id='p'>detail here</p>
                                    <p>read more</p>
                                </div>

                                <h3>web design & <br /> development</h3>

                                <div className="cardChapter">
                                    <p><FaBookOpen />lessons</p>
                                    <p><RiAncientPavilionLine />tutor</p>
                                </div>

                                <div className="cardPrice">
                                    <p><IoMdStar /></p>
                                    <p><IoMdStar /></p>
                                    <p><IoMdStar /></p>
                                    <p><IoMdStar /></p>
                                </div>
                            </div>
                            <div className="cardBox">
                                <img src={blog3} alt="" />

                                <div className="cardbtn">
                                    <p id='p'>detail here</p>
                                    <p>read more</p>
                                </div>

                                <h3>web design & <br /> development</h3>

                                <div className="cardChapter">
                                    <p><FaBookOpen />lessons</p>
                                    <p><RiAncientPavilionLine />tutor</p>
                                </div>

                                <div className="cardPrice">
                                    <p><IoMdStar /></p>
                                    <p><IoMdStar /></p>
                                    <p><IoMdStar /></p>
                                    <p><IoMdStar /></p>
                                    <p><IoMdStar /></p>
                                </div>
                            </div>

                            <div className="cardBox">
                                <img src={blog1} alt="" />

                                <div className="cardbtn">
                                    <p id='p'> detail here</p>
                                    <p>read more</p>
                                </div>

                                <h3>web design & <br /> development</h3>

                                <div className="cardChapter">
                                    <p><FaBookOpen />lessons</p>
                                    <p><RiAncientPavilionLine />tutor</p>
                                </div>

                                <div className="cardPrice">
                                    <p><IoMdStar /></p>
                                    <p><IoMdStar /></p>
                                    <p><IoMdStar /></p>
                                    <p><IoMdStar /></p>
                                </div>
                            </div>
                        </div>

                        <div className="searchBtn mt-5 mb-5">
                            <input type="search" placeholder='23,400+ there are the cousres' />
                            <button>Exploare all courses</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Card