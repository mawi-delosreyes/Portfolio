import '../styles/header.css';
import GithubIcon from '../assets/icons/github.svg?react';
import LinkedinIcon from '../assets/icons/linkedin.svg?react';

function Header() {
    return (
        <div id="header">
            <div id='header-name'>Mark de los Reyes</div>

            <div>
                <ul id="header-media">
                    <a href="https://github.com/mawi-delosreyes" target="_blank" rel="noopener noreferrer">
                        <li><GithubIcon className="header-icons" /></li>
                    </a>

                    <a href="https://www.linkedin.com/in/mwdelosreyes/" target="_blank" rel="noopener noreferrer">
                        <li><LinkedinIcon className="header-icons" /></li>
                    </a>
                </ul>
            </div>
        </div>
    )
}

export default Header
