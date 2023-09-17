import { MouseEventHandler } from 'react';
import reactLogo from '../assets/react.svg'

function Navbar(props: any){
    return <nav   className={props.darkMode ? "nav dark": "nav"}>
        <img src={reactLogo} className='nav-logo'/>
        <h1>ReactFacts</h1>
        <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
        </div>
        </nav>
}

export default Navbar;