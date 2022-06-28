import React from 'react';
import './Nav.css';



function Nav() {
    return (
        <body>
            <nav>
                <label className='logo'>Mono<span>Tech</span></label>
                <ul>
                    <li><a className='active' href="Home.jsx">Home</a></li>
                    <li><a href="Icons.jsx">Services</a></li>
                    <li><a href="Portfolio.jsx">Portfolio</a></li>
                    <li><a href="Experience.jsx">Experience</a></li>
                    <button className="button">Get In Touch</button>

                </ul>
            </nav>
        </body>

    );
  }

export default Nav;