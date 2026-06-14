import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <div>
            <nav>
                <ul class = "Navbar">
                <li class = "list"><Link to="/" class="link">Parent</Link></li>
                <li class = "list"><Link to="/useState" class="link">State</Link></li>
                <li class = "list"><Link to="" class="link">Effect</Link></li>
              </ul>
            </nav>
        </div>
    )
}   
export default Navbar