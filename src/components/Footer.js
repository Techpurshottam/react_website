import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="imk">
                <img src="/images/img-27.png"></img>
            </div>

            <div className="know-container">
               <div className="know-1">
                   <span className="same">Know us</span>
                   <ul>
                       <li className="com">About Abillis</li>
                       <li className="com">Contact</li>
                   </ul>
               </div>

               <div className="know-2">
                   <span className="same">Abilis</span>
                   <ul>
                       <li className="com">News</li>
                       <li className="com">How to join</li>
                       <li className="com">Advantages</li>
                       <li className="com">Faq</li>
                   </ul>
               </div>

               <div className="know-3">
                   <span className="same">Legal Notice</span>
                   <ul>
                       <li className="com">Term and Conditions</li>
                       <li className="com">Confidentiality and data protection</li>
                   </ul>
               </div>

               <div className="know-4">
                   <span className="same">Health professionals</span>
                   <ul>
                       <li className="com">To become partner</li>
                       <li className="com">To log in</li>
                   </ul>
               </div>

            </div>

            <div className="follower">
               <div className="follow">
                   <span>Stay informed with our Abilis newsletter <a className="link"> Register </a></span>
                   
               </div>

               <div className="socialmedia">
                  <span id="goal">Follow Us</span>
                  <i id="come" className="fab fa-facebook"></i>
                  <i id="come" className="fab fa-twitter"></i>
                  <i id="come" className="fab fa-instagram"></i>
                  <i id="come" className="fab fa-linkedin-in"></i>
               </div>
            </div>

            <div className="security">
                <div className="pgf">
                    <p className="s-head">The security of your data is guaranteed.</p>
                    <p className="page">Protecting your personal data is one of Abilis' priorities. 
                    The identification and authentication system put in place, based on the use of an 
                    electronic identifier certified by the <br></br> Confederation, guarantees that only you can 
                    access your sensitive data. Located in Switzerland, the secure datacenters that host
                     this data benefit from certifications attesting to <br></br> compliance with legislation on IT
                      security and data protection.</p>
                </div> 

                <div className="s-image">
                     <img src="/images/img-28.png"></img>
                     <img src="/images/img-29.png"></img>
                     <img src="/images/img-30.png"></img>
                </div>

            </div>
            
        </div>
    )
}

export default Footer
