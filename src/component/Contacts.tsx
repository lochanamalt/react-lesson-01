import emailLogo from '../assets/email.svg'
import linkedInLogo from '../assets/social-media/linkedin.svg'

function Contacts() {
    return (
        <div className="btn-panel">
            <button className='email-btn'><img src={emailLogo}/><a href='mailto:lochanatharanganie@gmail.com'>Email</a></button>
            <button className='linkedin-btn'><img src={linkedInLogo}/><a href='lochanatharanganie@gmail.com'>LinkedIn</a></button>
        </div>

    )
}

export default Contacts