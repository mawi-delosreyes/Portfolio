import '../styles/header.css';
import GithubIcon from '../assets/icons/github.svg?react';
import LinkedinIcon from '../assets/icons/linkedin.svg?react';

function Header() {
    return (
        <div id="header">
            <div id='header-name'>Mark de los Reyes</div>

            <div>
                <ul id="header-media">
                    <li><GithubIcon className="header-icons" /></li>
                    <li><LinkedinIcon className="header-icons" /></li>
                </ul>
            </div>
        </div>
    )
}

export default Header
