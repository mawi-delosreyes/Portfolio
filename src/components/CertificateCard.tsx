import '../styles/certificatecard.css';
import LinkedinIcon from '../assets/logo/linkedin-blue.svg';
import UdemyIcon from '../assets/logo/udemy.svg';
import LinkIcon from '../assets/logo/link.svg';

interface CertificateCardProps {
  title: string;
  issueDate: string;
  source: string;
  onLinkClick?: () => void;
}

function CertificateCard({ title, issueDate, source, onLinkClick }: CertificateCardProps) {
  return (
    <div id='certificate-cards'>
      {source === "linkedin" ? (
        <img id="source-icon" src={LinkedinIcon} />
      ) : (
        <img id="source-icon" src={UdemyIcon} />
      )}
      <div>
        <h3>{title}</h3>
        <p>Issued: {issueDate}</p>
      </div>
      <img id="link-icon" src={LinkIcon} onClick={onLinkClick} />
    </div>

  );
}

export default CertificateCard;
