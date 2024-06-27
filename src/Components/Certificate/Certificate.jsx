import React from 'react'
import './Certificate.css'
import pic from '../../assets/student.png'

const Certificate = () => {
    return (
        <>
            <div className="container-fluid mt-5 mb-5" id='certificate'>
                <div className="certificate">
                    <div className="stick"></div>
                    <div className="leftContent">
                        <small>got your wealthy</small>
                        <h1>Skills certificate from the edulerns</h1>
                        <button className='mt-2'>get certificate</button>
                    </div>

                    <div className="rightContent">
                        <img src={pic} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Certificate