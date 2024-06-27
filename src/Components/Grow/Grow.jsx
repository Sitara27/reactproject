import React from 'react'
import './Grow.css'
import pic from '../../assets/img-1.png'
import { FaCheck } from "react-icons/fa";

const Grow = () => {
    return (
        <>
            <div className="container-fluid mt-5 mb-5">
                <div className="growSection">
                    <div className="grow_img">
                        <img src={pic} alt="" />
                    </div>

                    <div className="grow_content">
                        <small>Get to know us </small>
                        <h1>Grow your skills learn with us from anywhere</h1>
                        <p className='mt-4'>
                            At EduLearns, you can enhance your skills from anywhere in the world through a diverse range of online courses tailored to meet your educational and professional needs.
                             Here are some of the standout offerings:</p>

                        <div className="grow-check">
                            <div className="box1">
                                <div className="grow_box">
                                    <p id='gowIcon' style={{ background: "#e9627c" }}><FaCheck /></p>
                                    <p>Expertise trainers</p>
                                </div>
                                <div className="grow_box">
                                    <p id='gowIcon' style={{ background: " #d67130" }}><FaCheck /></p>
                                    <p>Lifetime access</p>
                                </div>
                            </div>
                            <div className="box1">
                                <div className="grow_box">
                                    <p id='gowIcon' style={{ background: "#6955f5" }}><FaCheck /></p>
                                    <p>Online learning</p>
                                </div>
                                <div className="grow_box">
                                    <p id='gowIcon' style={{ background: "#3d9d94" }}><FaCheck /></p>
                                    <p>Great results</p>
                                </div>
                            </div>

                        </div>

                        <button className='mt-4'>DISCOVER MORE</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Grow