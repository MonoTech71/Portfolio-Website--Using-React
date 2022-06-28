import React from 'react';
import './Icons.css';
import Img1 from '../Icons/Img1.jpg';
import graphic1 from '../Icons/graphic1.png';
import laptop from '../Icons/laptop.jpg';

function Icons() {
    return(
        <section id='Home'>
            
        
        <div className='card-group'>
            <div className='card'>
                <img src={Img1} alt="" />
                <div className='card-body'>
                <h5 className='card-title'><b>Front-end development</b></h5>
                    <h6>Responsive websites built for an optimal user experience that achieves your business goals.</h6>
                <button className="hire-button">Hire Now</button>
                </div>
            </div>
        </div>

        <div className='card-group'>
            <div className='card'>
                <img src={graphic1} alt="" />
                <div className='card-body'>
                    <h5 className='card-title'><b>Graphic Design</b> </h5>
                    <h6>I have 6 Years Experience in UI/UX & Graphic Design, mostly using software Photoshop, Illustrator Figma</h6>
                    <button className="hire-button">Hire Now</button>
                </div>
            </div>
        </div>

        <div className='card-group'>
            <div className='card'>
                <img src={laptop} alt="" />
                <div className='card-body'>
                    <h5 className='card-title'><b>Wix WebSite</b></h5>
                    <h6>Build-up multiple Wix websites as my client expectation.</h6>
                    <button className="hire-button">Hire Now</button>
                </div>
            </div>
        </div>


        </section>
    );
    
}

export default Icons;