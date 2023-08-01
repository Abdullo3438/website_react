import React from 'react'
import './Question2.css'
import  Img1  from "../images/icon_minus.png"
import  Img2  from "../images/plus-icon.png"


function question2() {
    return (
        <div className="question_2">
            <div className="answer">
                <h1>Awesome features optimizing your website</h1>
                <div className="post">
                    <div className="need">
                        <h2>
                            1. Why You Need SEO Optimization
                        </h2>


                        <div>
                            <p>1
                                When does a mere internet 'SEO' company grow into a trusted partner that stays in front of the latest industry trends? When it's time to partner with Mocer, that's when.
                                </p>

                                   <img src={Img1} alt="" />
                        </div>
                    </div>

                <div className="need_item">
                    <p>2. The Benefits of SEO Optimization</p>
                    <img src={Img2} alt="" />
                </div>
                <div className="need_item">
                    <p>3. How to Get Started with SEO Optimization</p>
                    <img src={Img2} alt="" />
                </div>
                <div className="need_item">
                    <p>4. How to Get Your Business Ready for SEO Optimization</p>
                    <img src={Img2} alt="" />
                </div>
                <div className="need_item">
                    <p>5. What is a Meta Description?</p>
                    <img src={Img2} alt="" />
                </div>
                <div className="need_item">
                    <p>6. How to Write a Meta Description</p>
                    <img src={Img2} alt="" />
                </div>


                </div>
            </div>
        </div>

    )
}

export default question2