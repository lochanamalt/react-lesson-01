import profilePic from "../assets/profile-pic.png"
import Contacts from "./Contacts";

function SidePane(props: any){
    return (
        <div className={ props.darkMode ? "side-pane dark ": "side-pane"}>
            <img src={profilePic} className="profile-pic"/>
            <h1>Lochana Marasinghe</h1>
            <h3>Fullstack Software Engineer</h3>
            <small><a href="https://lochanamarasinghe.me" target="_blank">lochanamarasinghe.me</a></small>
            <Contacts/>
            <h2>About</h2>
            <p>I am a fullstack developer with a particular interest in making things simple and automating daily tasks.
                 I try to keep up with security and best practices, and am always looking for new things to learn.</p>
             <h2>Interests</h2>
             <p>Robotics Enthusiast. Reader. Internet fanatic.
                 Stamp Collector. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                 </p>
        </div>
    )
}

export default SidePane;