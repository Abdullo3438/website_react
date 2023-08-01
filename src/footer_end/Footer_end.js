import React from 'react'
import "./Footer_end.css"
import img1 from "../images/icon111.svg"
import img2 from "../images/Social icon.svg"
import img3 from "../images/Social icon.png"
import img4 from "../images/Group.svg"
import img5 from "../images/Group (1).svg"

function footer_end() {
    return (
        <div className="footer_2">
            <div className="ready">
                <div className='get_start'>
                    <h1>
                        Ready to get started ?
                    </h1>

                    <p>If there are questions you want to ask, we will answer all your question</p>


                    <div className='Input_btn'>
                        <input type="email" placeholder='Enter your email' />
                        <button>Join now</button>
                    </div>

                </div>

                <div className='maybe'>
                    <h1>
                        Maybe your question is have been answered, check this out.
                    </h1>

                    <div className='nn'>
                        <p> What is Coca Soft</p>
                        <img src={img1} alt="" />
                    </div>
                    <div className='nn2'>
                        <p> How can I get service from Coca Soft</p>
                        <img src={img1} alt="" />
                    </div>
                    <div>
                        <p> What kind of service will I get</p>
                        <img src={img1} alt="" />
                    </div>

                </div>
            </div>

            <div className="icon_brand">
                <div className="left_brand">
                    <div className="icon_all">
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                        <img src={img5} alt="" />
                    </div>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>
                <div className="right_email">
                    <a href="">© Coca All Rights Reserved</a>

                </div>
            </div>

        </div>
    )
}

export default footer_end