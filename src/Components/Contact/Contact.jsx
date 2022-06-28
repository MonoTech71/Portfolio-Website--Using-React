import React from 'react';
import './Contact.css';

function Contact() {
  return (
      <div className="main">
        <div className="content">
          <div className="content-2">
          <span>CONTACT</span> <br />
          <p> I'm a paragraph. Click here to add <br />
            your own text and edit me. <br />
            I’m a great place for you to tell a <br />
            story and let your users  <br />
            know a little more about you. <br /> <br />

            mmost7190@gmail.com <br />

            Mobile: +8801731688619
            </p>
            </div>

          <div className="container5">
              <div className="input-name">
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Email'/>
              </div>

              <div className="input-name2">
                <input type="text" placeholder='Phone'/>
              </div>

              <div className="input-name3">
                <input type="text" placeholder='Message'/>
              </div>
              <div className="input-name2">
                <button className="button5">Send</button>
              </div>

          </div>
            
           <div className='form-icons'>
            <ul>
              <a href="https://www.linkedin.com/in/murshida-khatun/"></a><i class="fa-brands fa-linkedin-in"></i>
              <i class="fa-brands fa-github"><a href="https://github.com/MonoTech71"></a></i>
              <i class="fa-brands fa-whatsapp"><a href="https://www.linkedin.com/in/murshida-khatun/"></a></i>
              <i class="fa-solid fa-envelope"><a href="https://www.linkedin.com/in/murshida-khatun/"></a></i>
            </ul>
           </div>

        </div>
          
      </div>
      
  );
}
export default Contact;