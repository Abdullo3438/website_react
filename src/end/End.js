import React from 'react'
import './End.css'
import img1 from "../images/Icon.png"
import img2 from "../images/Icon (1).png"
import img3 from "../images/Icon (2).png"

function End() {
    return (
        <div className="end">
            <div className="heading">
              <h1>
              Awesome Features Optimizing Your Website
              </h1>
            </div>

            <div className="all_card">
              <div className="card">
                <div className='icon'>
                  <img src={img1} alt="" />
                </div>
                <h2>
                Improving UX with A/B
                </h2>
                <p>
                A/B testing is useful when you're launching something new or if you already have a large audience.
                </p>
              </div>
              <div className="card">
                <div className='icon'>
                  <img src={img2} alt="" />
                </div>
                <h2>
                Improving UX with A/B
                </h2>
                <p>
                A/B testing is useful when you're launching something new or if you already have a large audience.
                </p>
              </div>
              <div className="card">
                <div className='icon'>
                  <img src={img3} alt="" />
                </div>
                <h2>
                Improving UX with A/B
                </h2>
                <p>
                A/B testing is useful when you're launching something new or if you already have a large audience.
                </p>
              </div>
            </div>
        </div>
  )
}

export default End