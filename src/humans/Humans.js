import React from 'react'
import "./Humans.css"
import img1 from "../images/111.png"
import img2 from "../images/12.png"
import img3 from "../images/13.png"
import img4 from "../images/14.png"


function Humans() {
    return (
        <div className="humans">
            <div className="start">
                <h1>Get to know our mastah & super keren</h1>
                <p>We provide SEO services to help your website rank higher on search engines like Google.</p>
            </div>


            <div className="human">
                <div className="young">
                    <img src={img1} alt="" />
                    <h1>
                        Rakabuming Suhu
                    </h1>
                    <span>
                        Founder, CTO
                    </span>

                </div>
                <div className="young">
                    <img src={img2} alt="" />
                    <h1>
                        Jessica Aduhai
                    </h1>
                    <span>
                        SEO Master
                    </span>

                </div>
                <div className="young">
                    <img src={img3} alt="" />
                    <h1>
                        Azalea Perumahan
                    </h1>
                    <span>
                        Account Executive
                    </span>

                </div>
                <div className="young">
                    <img src={img4} alt="" />
                    <h1>
                        Gatot Bambang
                    </h1>
                    <span>
                        Admin Bro
                    </span>

                </div>
            </div>
        </div>
    )
}

export default Humans