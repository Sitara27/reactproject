import React from 'react'
import './Upcoming.css'

const Upcoming = () => {
    return (
        <>
            <div className="container-fluid" id='upClr'>
                <div className="upcomingContent">
                    <small>Book your seat now</small>
                    <h1>Upcoming study trip</h1>
                    <div className="study">
                        <div className="studyCircle" style={{ background: "#e9627c" }}>
                            <h3>26</h3>
                            <small>Days</small>
                        </div>
                        <div className="studyCircle" style={{ background: "#d67130" }}>
                            <h3>16</h3>
                            <small>Hours</small>
                        </div>
                        <div className="studyCircle" style={{ background: "#ab8bc4" }}>
                            <h3>60</h3>
                            <small>Minutes</small>
                        </div>
                        <div className="studyCircle" style={{ background: "#3d9d94" }}>
                            <h3>09</h3>
                            <small>Seconds</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Upcoming