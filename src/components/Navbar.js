import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                   <img src="/images/img-1.png"></img>
                </div>

                <div className="input-container">
                    <div className="set-input">
                    <i className="fas fa-search"></i>
                   <input 
                   type="text" 
                   className="search-input" 
                   placeholder="Search">
                   </input>
                   </div>
                </div>

                <div className="navbar-links">
                    <div className="nav-link-1">     
                     <span id="sp">How To Join</span>
                  </div>
                  <div className="nav-link-2">
                  <i id="ic-1" className="fa fa-shopping-cart"></i>
                  </div>
                  <div className="nav-link-3">
                  <i id="ic-2" className="fa fa-user"></i>
                  </div>
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar
