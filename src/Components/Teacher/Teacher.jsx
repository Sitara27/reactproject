import React from 'react'
import './Teacher.css'
import teacher from '../../assets/team-3.jpg'
import teacher2 from '../../assets/team-5.jpg'
import teacher3 from '../../assets/women.png'

const Teacher = () => {
    return (
        <>
            <div className="container-fluid mt-5 mb-5">
                <div className="teacherContainer">
                    <small>here are the best teachers</small>
                    <h1>Meet the teacher who teaches you online</h1>

                    <div className="teacherGallery mt-3">
                        <div className="teacher">
                            <img src={teacher} alt="" />
                            <p>Amit saxena</p>
                            <small>Data science</small>
                        </div>
                        <div className="teacher">
                            <img src={teacher2} alt="" />
                            <p>Sumit Taneza</p>
                            <small>C programming</small>
                        </div>
                        <div className="teacher">
                            <img src={teacher3} alt="" />
                            <p>Chhaya yadav</p>
                            <small>DBMS</small>
                        </div>
                        <div className="teacher">
                            <img src={teacher} alt="" />
                            <p>Deepak rawat</p>
                            <small>It science</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Teacher