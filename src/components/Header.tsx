import '../styles/header.css';
import githubIcon from '../assets/icons/github.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';

function Header() {
    return (
        <div id="header">
            <div id='header-name'>Mark de los Reyes</div>

            <div>
                <ul id="header-media">
                    <li> <img src={githubIcon} alt="Github icon" id='header-icons'/> </li>
                    <li> <img src={linkedinIcon} alt="LinkedIn icon" id='header-icons'/> </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
