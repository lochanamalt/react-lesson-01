import twitterLogo from '../assets/social-media/twitter.svg'
import instaLogo from '../assets/social-media/insta.svg'
import facebookLogo from '../assets/social-media/facebook.svg'
import githubLogo from '../assets/social-media/github.svg'

function Footer () {
    return (
        <footer className="footer">
            <img src={twitterLogo}/>
            <img src={facebookLogo}/>
            <img src={instaLogo}/>
            <img src={githubLogo}/>
        </footer>
    )
}

export default Footer;