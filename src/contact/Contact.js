import React from 'react'
import './Contact.css'
import Img1  from "../images/girl.png"
import Img2  from "../images/Vector.svg"


function Contact() {
  return (
    <div className="Contact_1">
      <div className="laptop">

        <div className="left_11">
          <h1>Contact us today and let us know what you need</h1>
          <p>When does a mere internet 'SEO' company grow into a trusted partner that stays in front of the latest industry trends? When it's time to partner with Mocer, that's when.</p>
          <button>
            Contact with Us
          </button>
        </div>
        <div className="right_11">

          <img className='girl' src={Img1} alt="" />
          <img className='vec' src={Img2} alt="" />

        </div>
      </div>
    </div>
  )
}

export default Contact