import reactLogo from '../assets/react.svg'

function Navbar(){
    return <nav className='nav'>
        <img src={reactLogo} className='nav-logo'/>
        <h1>ReactFacts</h1>
        <h3>React - Lesson 01</h3>
        </nav>
}

export default Navbar;