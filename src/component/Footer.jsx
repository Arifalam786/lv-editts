import React from 'react'
import "../componentStyles/Footer.css"
export default function Footer() {
  return (
    <div className='Footer'>
        <div className='Footer_container'>
            <div className='Main_footer'>
                <div className='FooterMassage'>
                    <p><i>There’s <span>no locks</span> to our creativity.</i></p>
                </div>
                <div className='FooterLinks'> 
                   
                   <div className='Contact_Footer'>
                      <p>Contact Us</p>
                      <address>Aftab.alam35520@gmail.com</address>
                      <address>8383016014</address>
                   </div>
                </div>
            </div>
        </div>
        <div className='CopyRights'>
          <div>
              <p>@ All CopyRight Reserved</p>
              <p>Privacy Policy <span>Terms  "" &  Condition</span></p>
          </div>
        </div>   
    </div>
  )
}
