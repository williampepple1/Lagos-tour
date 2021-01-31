import React from 'react'
import "./Navbar.scss"
function Navbar() {
    return (
        <div className='navbar'>
             <img src="https://media.istockphoto.com/vectors/lagos-stamp-lagos-grunge-round-isolated-sign-vector-id1227342926" alt="Lagos" className="lagos-logo"/>
           <ul className="navlinks">
              <li>
                  <a href="/" className="navlink">Home</a>
              </li>
              <li>
                  <a href="/" className="navlink">About</a>
              </li> 
              <li>
                  <a href="/" className="navlink active">Tours</a>
              </li> 
           </ul>
        </div>
    )
}

export default Navbar
