import '../styles/about.css';
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
                        <li> <img src={htmlIcon}/> </li>
                        <li> <img src={cssIcon}/> </li>
                        <li> <img src={reactIcon}/> </li>
                        <li> <img src={jsIcon}/> </li>
                        <li> <img src={typescriptIcon}/> </li>
                        <li> <img src={nodejsIcon}/> </li>
                        <li> <img src={flutterIcon}/> </li>
                        <li> <img src={dartIcon}/> </li>
                        <li> <img src={pythonIcon}/> </li>
                        <li> <img src={javaIcon}/> </li>
                        <li> <img src={mysqlIcon}/> </li>
                        <li> <img src={awsIcon}/> </li>
                        <li> <img src={dockerIcon}/> </li>
                    </ul>
                </div>

                <div id='button-layout'>
                    <button className='buttons' id='email-button'>SEND ME AN EMAIL</button>
                    <button className='buttons' id='resume-button'>VIEW RESUME</button>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
