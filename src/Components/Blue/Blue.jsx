import React from 'react'
import './Blue.css'
import { PiCertificateFill } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { RiVidiconLine } from "react-icons/ri";
import { MdGroups2 } from "react-icons/md";

const Blue = () => {
    return (
        <div className="container-fluid" id='blueClr'>
            <div className="blue_container">
                <div className="blueMem">
                    <h3><PiCertificateFill /></h3>
                    <p>Online <br /> Certificate</p>
                </div>
                <div className="blueMem">
                    <h3><FaChalkboardTeacher /></h3>
                    <p>Top <br /> Instructors</p>
                </div>
                <div className="blueMem">
                    <h3><RiVidiconLine /></h3>
                    <p>Unlimited <br /> Online Courses</p>
                </div>
                <div className="blueMem">
                    <h3><MdGroups2 /></h3>
                    <p>Experienced <br /> Members</p>
                </div>
            </div>
        </div>
    )
}

export default Blue