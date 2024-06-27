import React from 'react'
import './About.css'
import abt from '../../assets/about-4.png'

const About = () => {
    return (
        <>
            <div className="container-fluid mt-5 mb-5">
                <div className="about-Container">
                    <div className="abt_img">
                        <img src={abt} alt="logo" />
                    </div>

                    <div className="abt-Content">
                        <small>about us</small>
                        <h3 className='mt-4'>EduLerns: Empowering Learners Worldwide for Over 36 Years</h3>
                        <p className='mt-4'>At EduLerns, we pride ourselves on over 36 years of
                            excellence in distance learning, dedicated to empowering
                            learners worldwide. Our mission is to provide accessible
                            , high-quality online education that caters to a
                            diverse range of educational and professional needs.</p>

                        <h4 className='mt-5'>Our Vision</h4>
                        <p className='mt-4'>We believe in the transformative power of education and
                            strive to make learning opportunities accessible to
                            everyone, regardless of geographical or time constraints.
                            Our vision is to create a global learning community where
                            knowledge and skills can be shared and
                            developed to drive personal and professional growth.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About