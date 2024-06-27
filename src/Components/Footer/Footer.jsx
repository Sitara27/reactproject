import React from 'react'
import { FaFacebook ,FaInstagram ,FaTwitterSquare,FaGooglePlusG  } from "react-icons/fa";
import './Footer.css'
function Footer() {
    return (
        <>
            <>
                <>

                    <div className="container-fluid mt-5 pt-5" id='foot'>

                        <footer
                            className="text-center text-lg-start text-white" 
                            // style={{ backgroundColor: " #21262c" }}
                        >

                            <div className="container-fluid p-4 pb-0" >

                                <section className="">

                                    <div className="row">

                                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                            <h6 className="text-uppercase mb-4 font-weight-bold" style={{color:"#3d9d94"}}>
                                            EduLearns
                                            </h6>
                                            <p>
                                            EduLearns is dedicated to providing high-quality online education that helps you grow your skills from anywhere in the world. Our diverse range of courses is designed to meet your educational and professional needs, ensuring
                                             you receive the best possible learning experience.
                                            </p>
                                            <a
                                                className="btn btn-outline-light btn-floating m-1"
                                                role="button"
                                            >
                                                <FaFacebook />
                                            </a>

                                            <a
                                                className="btn btn-outline-light btn-floating m-1"
                                                role="button"
                                            >
                                                <FaTwitterSquare />
                                            </a>

                                            <a
                                                className="btn btn-outline-light btn-floating m-1"
                                                role="button"
                                            >
                                                <FaGooglePlusG  />
                                            </a>

                                            <a
                                                className="btn btn-outline-light btn-floating m-1"
                                                role="button"
                                            >
                                                <FaInstagram  />
                                            </a>

                                        </div>

                                        <hr className="w-100 clearfix d-md-none" />

                                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                            <h6 className="text-uppercase mb-4 font-weight-bold">Services</h6>
                                            <p>
                                                <a className="text-white">Business Management</a>
                                            </p>
                                            <p>
                                                <a className="text-white">Data Science</a>
                                            </p>
                                            <p>
                                                <a className="text-white">Fianance</a>
                                            </p>
                                            <p>
                                                <a className="text-white">Programming</a>
                                            </p>
                                        </div>

                                        <hr className="w-100 clearfix d-md-none" />

                                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                            <h6 className="text-uppercase mb-4 font-weight-bold">
                                            Popular Courses
                                            </h6>
                                            <p>
                                                <a className="text-white">
                                                HTML5/CSS3 Essentials</a>
                                            </p>
                                            <p>
                                                <a className="text-white">JavaScript Development</a>
                                            </p>
                                            <p>
                                                <a className="text-white">WordPress Basic Tutorial</a>
                                            </p>
                                            <p>
                                                <a className="text-white">Introduction to Coding</a>
                                            </p>
                                        </div>

                                        <hr className="w-100 clearfix d-md-none" />

                                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                            <p>
                                                <i className="fas fa-home mr-3" /> New York, NY 10012, US
                                            </p>
                                            <p>
                                                <i className="fas fa-envelope mr-3" /> info@gmail.com
                                            </p>
                                            <p>
                                                <i className="fas fa-phone mr-3" /> + 01 234 567 88
                                            </p>
                                            <p>
                                                <i className="fas fa-print mr-3" /> + 01 234 567 89
                                            </p>
                                        </div>

                                    </div>

                                </section>

                                <hr className="my-3" />

                                <section className="p-3 pt-0 ">
                                    <div className="row d-flex align-items-center">

                                        <div className="col-md-7 col-lg-12 text-center text-md-start">

                                            <div className="p-3 text-center">
                                                © 2020 Copyright:
                                                <a className="text-white" href="https://mdbootstrap.com/">
                                                    Cyvero.com
                                                </a>
                                            </div>

                                        </div>


                                    </div>
                                </section>

                            </div>

                        </footer>

                    </div>
             
                </>

            </>

        </>
    )
}

export default Footer