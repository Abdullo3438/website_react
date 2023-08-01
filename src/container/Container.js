import React from 'react'
import "./Container.css"
import img3 from "../images/foto.png"
import img4  from "../images/n.svg"
import img5  from "../images/n2.svg"

function Container({image}) {
  return (
   <div className="container">
    <div className="left">
        <div className="information">
            <h1>Growing your business comes down to 1- thing</h1>
            <p>That's where we come in. We make it easy for you to boost your online search results and grow your business online. Contact us today to get started!</p>
            
            <div className="btn_submit">
                <button>Get Started Free</button>
                <img className='arrow' src={image} alt="" />
            </div>

        </div>
    </div>
    <div className="right">
            <div className='foto'>
            <img src={img3} alt="" />
            <div className='table_1'>
            <img src={img4} alt="" />

            </div>
            <div className='table_2'>
                <img src={img5} alt="" />
            </div>
            </div>
    </div>
   </div>

  )
}

export default Container