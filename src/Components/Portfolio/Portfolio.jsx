import React from "react";
import './Portfolio.css';
import web1 from '../Portfolio/web1.png';
import web2 from '../Portfolio/web2.PNG';
import web3 from '../Portfolio/web3.PNG';
import web4 from '../Portfolio/web4.png'



function Portfolio() {
    return(
        <div className="Portfolio">
            <h3>PORTFOLIO</h3>
            <h5>MY LATEST WORK.</h5>

            <section id="prodetails">
                <div class="single-pro-image">
                    <img src={web1} alt="" />
                </div>

                <div class="sinle-prro-details">
                    <p><b>Your Arrival</b></p>
                    <br />
                    <p>The client, provided me with a PSD <br />
                        design of what they wanted their site to look like. <br /><br />

                        I took the PSD and built the new website and <br />
                        custom assets that I created. <br />
                        In return, the site has done amazing and <br />
                        looks great on all devices.</p>
                </div>
            </section>

            <section id="prodetails">
                <div class="single-pro-image">
                    <img src={web2} alt="" />
                </div>

                <div class="sinle-prro-details">
                    <p><b>Your Arrival</b></p>
                    <br />
                    <p>The client, provided me with a PSD <br />
                        design of what they wanted their site to look like. <br /><br />

                        I took the PSD and built the new website and <br />
                        custom assets that I created. <br />
                        In return, the site has done amazing and <br />
                        looks great on all devices.</p>
                </div>
            </section>

            <section id="prodetails">
                <div class="single-pro-image">
                    <img src={web3} alt="" />
                </div>

                <div class="sinle-prro-details">
                    <p><b>Your Arrival</b></p>
                    <br />
                    <p>The client, provided me with a PSD <br />
                        design of what they wanted their site to look like. <br /><br />

                        I took the PSD and built the new website and <br />
                        custom assets that I created. <br />
                        In return, the site has done amazing and <br />
                        looks great on all devices.</p>
                </div>
            </section>

            <section id="prodetails">
                <div class="single-pro-image">
                    <img src={web4} alt="" />
                </div>

                <div class="sinle-prro-details">
                    <p><b>Your Arrival</b></p>
                    <br />
                    <p>The client, provided me with a PSD <br />
                        design of what they wanted their site to look like. <br /><br />

                        I took the PSD and built the new website and <br />
                        custom assets that I created. <br />
                        In return, the site has done amazing and <br />
                        looks great on all devices.</p>
                </div>
            </section>
        </div>
    );
}

export default Portfolio;