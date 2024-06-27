import React from 'react';
import './Learning.css';
import girl from '../../assets/a12.png';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip'; // Import Tooltip from react-bootstrap
import teacher from '../../assets/team-3.jpg'
import teacher2 from '../../assets/team-5.jpg'
const Learning = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="learningSection">
                    <div className="learnImg">
                        <img src={girl} alt="girl" />
                    </div>

                    <div className="learnContent">
                        <h1>Over 36 years in distant learning for skills</h1>
                        <p className='mt-4'>EduLearns, with over 36 years of experience in distance learning, offers a rich array of courses designed to enhance your skills from anywhere in the world. Their extensive expertise in online education ensures a high-quality learning experience tailored to meet diverse educational and professional needs.</p>

                        <div className="toolTip">
                            {['top'].map((placement) => (
                                <OverlayTrigger
                                    key={placement}
                                    placement={placement}
                                    overlay={
                                        <Tooltip id={`tooltip-${placement}`}>
                                            Best canvas program <strong>{placement}</strong>.
                                        </Tooltip>
                                    }
                                >
                                    {/* <Button variant="secondary">Tooltip on {placement}</Button> */}

                                    <div className="CardContainer">
                                        <div className="toolCart" style={{ background: "#e9627c", color: "white" }}>
                                            <img src={teacher} alt="" />
                                            <p>john leo</p>
                                            <small>Assitant professor </small>
                                        </div>
                                        <div className="toolCart mt-5" style={{ background: "#3d9d94", color: "white" }}>
                                            <img src={teacher} alt="" />
                                            <p>john leo</p>
                                            <small>Assitant professor</small>
                                        </div>
                                    </div>
                                </OverlayTrigger>
                            ))}
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}

export default Learning;
