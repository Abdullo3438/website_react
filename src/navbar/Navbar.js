import React from 'react'
import "./Navbar.css"

function Navbar({image}) {
  return (
    <div className="navbar">
        <div className="all_detail">
          <div className='Logo'>
            <img src={image} alt="" />
          </div>
            <ul className='ul_nav'>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </div>

  )
}

export default Navbar