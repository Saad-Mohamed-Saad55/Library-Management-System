import './Footer.css'

import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className='footer'>
            <div>
                <div className='footer-data'>
                    <div className="contact-details">
                        <h1>Contact Us</h1>
                        <p>Librarian</p>
                        <p>Faculty Staff</p>
                        <p>PREMIUM Team</p>
                        <p>Egypt</p>
                        <p><b>Email:</b>premium.admin@gmail.com</p>
                    </div>
                    <div className='usefull-links'>
                        <h1>Usefull Links</h1>
                        <a href='#home'>Home</a>
                        <a href='#home'>About Us</a>
                        <a href='#home'>Recent Uploaded</a>
                        <a href='#home'>Login</a>
                    </div>
                    <div className='librarian-details'>
                        <h1>Librarian</h1>
                        <p>P R E M I U M</p>
                        <p>Faculty Staff</p>
                        <p>Contact: +201005692130</p>
                    </div>
                </div>
                <div className="contact-social" >
                    <a href='#home' className='social-icon'><TwitterIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                    <a href='#home' className='social-icon'><LinkedInIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                    <a href='#home' className='social-icon'><TelegramIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                    <a href='#home' className='social-icon'><InstagramIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                </div>
            </div>
            <div className='copyright-details'>
                <p className='footer-copyright'>&#169; 2024 copyright all right reserved<br /><span>Designed with ❤️ by P R E M I U M</span></p>
            </div>
        </div>
    )
}

export default Footer