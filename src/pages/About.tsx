import '../styles/about.css';
import { useState } from 'react';
import Resume from '../components/Resume';
import profilePicture from '../assets/images/profile_picture.png';
import awsIcon from '../assets/icons/aws.svg';
import cssIcon from '../assets/icons/css.svg';
import dartIcon from '../assets/icons/dart.svg';
import flutterIcon from '../assets/icons/flutter.svg';
import htmlIcon from '../assets/icons/html.svg';
import jsIcon from '../assets/icons/javascript.svg';
import mysqlIcon from '../assets/icons/mysql.svg';
import nodejsIcon from '../assets/icons/nodejs.svg';
import pythonIcon from '../assets/icons/python.svg';
import javaIcon from '../assets/icons/java.svg';
import reactIcon from '../assets/icons/reactjs.svg';
import typescriptIcon from '../assets/icons/typescript.svg';
import dockerIcon from '../assets/icons/docker.svg';


function AboutPage() {
    const [showResume, setShowResume] = useState(false);
    return (
        <div id="about-container">
            <div>
                <img src={profilePicture} id='profile-picture'/>
            </div>

            <div id='about-text'>
                <h2>Hi, I'm Mark!</h2>
                <p>
                    A Software Engineer who builds clean, scalable APIs and infrastructure that teams trust — maintainable by design, performant by default.
                </p>
                <div>
                    <ul id="icons">
                        <li> <img src={htmlIcon} className='icon'/> </li>
                        <li> <img src={cssIcon} className='icon'/> </li>
                        <li> <img src={reactIcon} className='icon'/> </li>
                        <li> <img src={jsIcon} className='icon'/> </li>
                        <li> <img src={typescriptIcon} className='icon'/> </li>
                        <li> <img src={nodejsIcon} className='icon'/> </li>
                        <li> <img src={flutterIcon} className='icon'/> </li>
                        <li> <img src={dartIcon} className='icon'/> </li>
                        <li> <img src={pythonIcon} className='icon'/> </li>
                        <li> <img src={javaIcon} className='icon'/> </li>
                        <li> <img src={mysqlIcon} className='icon'/> </li>
                        <li> <img src={awsIcon} className='icon'/> </li>
                        <li> <img src={dockerIcon} className='icon'/> </li>
                    </ul>
                </div>

                <div id='button-layout'>
                    <button className='buttons' id='email-button'>SEND ME AN EMAIL</button>
                    <button className='buttons' id='resume-button' onClick={() => setShowResume(true)}>VIEW RESUME</button>
                    <Resume isOpen={showResume} onClose={() => setShowResume(false)} />
                </div>
            </div>
        </div>
    )
}

export default AboutPage
