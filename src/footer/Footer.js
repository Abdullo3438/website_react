import React from 'react'
import './Footer.css'
import img1 from "../images/Google Logo.png"
import img2 from "../images/Microsoft Logo.png"
import img3 from "../images/Vector.png"
import img4 from "../images/g15.png"
import img5 from "../images/Google Logo.png"
import img6 from "../images/Amazon Logo.png"
import img7 from "../images/Group.png"



function Footer() {
  return (
    <div className="footer">

      <marquee className="around" behavior="alternate" direction="right">

        <div className="posters">
          <div className="poster">
            <img src={img1} alt="" />
          </div>
          <div className="poster">
            <img src={img2} alt="" />
          </div>
          <div className="poster">
            <img src={img3} alt="" />
          </div>
          <div className="poster">
            <img src={img4} alt="" />
          </div>
          <div className="poster">
            <img src={img5} alt="" />
          </div>
          <div className="poster">
            <img src={img6} alt="" />
          </div>
          <div className="poster">
            <img src={img7} alt="" />
          </div>
          
        </div>
      </marquee>

    </div>
  )
}

export default Footer