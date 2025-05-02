import gmail from './assets/gmail-new.svg'
import instagram from './assets/instagram-new.svg'
import linkedin from './assets/linkedin-new.svg'

function Footer() {

  return (
    <div className="footer-container">
       <p className = "footer-text">© Built by Group 11 for Microsoft </p>
       <div className = "contact-boxes">
        <img 
            src={instagram} 
            alt="Instagram" 
            className="contact-icon" 
            onClick={() => window.open("https://www.instagram.com/spamdetection_group11/?utm_source=ig_web_button_share_sheet", "_blank")} 
        />
        <img 
            src={linkedin} 
            alt="LinkedIn" 
            className="contact-icon" 
            onClick={() => window.open("https://www.linkedin.com/company/tcd-scss-sweng/posts/?feedView=all", "_blank")}
        />
        <img 
            src={gmail} 
            alt="Gmail" 
            className="contact-icon" 
            onClick={() => window.open("mailto:sweng.group11@gmail.com")} 
        />
       </div>
    </div>

  )
}

export default Footer;
