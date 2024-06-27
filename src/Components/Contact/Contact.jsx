import React, { useState } from 'react'
import './Contact.css'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaChrome } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import OurLocation from '../OurLocation/OurLocation';



const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    function HandleSubmit(e) {
        e.preventDefault()
        console.log(name)
        console.log(email)
        console.log(subject)
        console.log(message)
    }
    return (
        <>
            <div className="container-fluid mt-5 mb-5">
                <div className="contactContainer">
                    <div className="contactclr">
                        <form onSubmit={HandleSubmit}>
                            <h2>{`Send us a message`}</h2>
                            <input className='mt-4'
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Enter your name'
                                required />

                            <input className='mt-2'
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Enter your email'
                                required />

                            <input className='mt-2'
                                type="text"
                                value={subject} onChange={(e) => setSubject(e.target.value)}
                                placeholder='Subject'
                                required

                            />

                            <textarea className='mt-2'
                                style={{ color: "white" }}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder='Enter Message' />

                            <button className='mt-3' type='submit'>submit</button>
                        </form>
                    </div>

                    <div className="contactDetails">
                        <h2 className='mb-4'>Contact us</h2>
                        <p style={{ textTransform: "capitalize" }}>We're open for any suggestion or just to have a chat</p>

                        <div className="contactIcon">

                            <div className="cont1 mt-4">
                                <p><FaMapMarkerAlt size={20} /></p>
                                <p ><strong>Address:</strong>gaur city center,greator noida 200101</p>
                            </div>

                            <div className="cont1 mt-3">
                                <p><IoCall size={20} /></p>
                                <p ><strong>Phone No:</strong>+91 1234 5678 90</p>
                            </div>
                            <div className="cont1 mt-3">
                                <p><FaLocationArrow size={20} /></p>
                                <p ><strong>Email:</strong>xyz@gmail.com</p>
                            </div>

                            <div className="cont1 mt-3">
                                <p><FaChrome size={20} /></p>
                                <p ><strong>Website:</strong>www.xyz.com</p>
                            </div>


                        </div>
                    </div>
                </div>
                <OurLocation />
            </div>

        </>
    )
}

export default Contact
