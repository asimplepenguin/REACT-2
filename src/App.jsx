import Profile from "./assets/8ce8f351-0127-4d36-ae74-4f2a86cf23b4.jpeg"
import './App.scss';
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";





function App() {
  return (
    <div className="profile-card" >
      <div className="profile-image">
        <img src= {Profile} alt="Laura Smith" /> 
     
      </div>
      <h1 className="profile-name">Laura Smith</h1>
      <p className="profile-tagline">A Girl Boss</p>
      <a className="Twitter_link" href="">@Person1234</a>
      

      <div className="profile-buttons">
        <button className="batana email-button"><MdEmail />Email</button>
        <button className="batana linkedin-button"><FaLinkedin />LinkedIn</button>
      </div>

     

      <div className="profile-about">
        <h2>About</h2>
        <p>
          I am a frontend developer with a particular interest in making things simple and automating daily tasks.
          I try to keep up with security and best practices, and am always looking for new things to learn.
        </p>
      </div>

      <div className="profile-interests">
        <h2>Interests</h2>
        <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek.
        </p>
      </div>
      <div className="Icons">
        
        <FaInstagram /> 
        <BsTwitterX /> 
        <FaGithubAlt />
        <FaFacebook />
        </div>
    </div>
  );
}

export default App;
