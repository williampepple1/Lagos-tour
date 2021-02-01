import React from 'react'
import "./Navbar.scss"
function Navbar() {
    return (
        <div className='navbar'>
             <img src="https://media.istockphoto.com/vectors/lagos-stamp-lagos-grunge-round-isolated-sign-vector-id1227342926" alt="Lagos" className="lagos-logo"/>
           <ul className="navlinks">
              <li>
                  <a href="/" className="navlink">Wanna visit fun places in Lagos?<br/> look below</a>
              </li>
           </ul>
        </div>
    )
}

export default Navbar
