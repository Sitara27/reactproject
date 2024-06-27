import React from 'react'
import {Link} from 'react-router-dom'
import './HeroSection.css'
import pic from '../../assets/women.png'

const HeroSection = () => {
  return (
    <>
      <div className="container-fluid" id='heroClr'>
        <div id='row'>

          <div className="heroContent">
            <h1>Best <span style={{ color: "#d67130", fontStyle: "cursive" }}>online</span> cousses from eduLearns</h1>
            <p>EduLearns offers a variety of online courses that cater to different learning needs and professional goals.</p>

            <Link to='about'>
              <button>Read more</button></Link>

            {/* <details>
              <summary>read more</summary>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit
                . Laborum nesciunt ipsum nemo accusantium sed delectus cumque
                 dignissimos iusto perferendis architecto?</p>
            </details> */}
          </div>


          <div className="heroBack">
            <div className="heroBackclr">
              <div className="redcirle"></div>
              <div className="yellowcircle"></div>
              <div className="purplecircle"></div>
              <img src={pic} alt="" />

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection