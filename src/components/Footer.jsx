import LinkedInIcon from '../assets/Linkedin Icon.png';
import GitHubIcon from '../assets/GitHub Icon.png';

export default function Footer() {
    return (
        <div className="footer">
            <a href="https://www.linkedin.com/in/annie-zha-b7a9a3193/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedInIcon} alt="Linkedin Icon" />
            </a>
            <a href="https://github.com/AnnieZha99" target="_blank" rel="noopener noreferrer">
            <img src={GitHubIcon} alt="Github Icon" />
            </a>
        </div>
    );
}