import React from 'react'
import "./Costumer.css"
import img1 from "../images/Content.png"


function Costumer() {
    return (

        <div className="costumer">
            <div className='Make_website'>
                <div className="left_cost">
                    <div className='Mijoz'>
                        <img className='pro' src={img1} alt="" />
                    </div>
                </div>


                <div className="right_cost">
                    <div className="informal">
                        <h1>
                            Make Your Website More User-Friendly for Search Engines
                        </h1>
                        <p>We'll match you with our team of expert strategists who will make sure your top-of-the-line strategies are always on target. Contact us today to get started!</p>

                        <div className='smal_box'>
                            <div>
                                <h1>120K </h1>
                                <p>Domains Indexed</p>
                            </div>
                            <div>
                                <h1>8.990 </h1>
                                <p>Project Done</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Costumer