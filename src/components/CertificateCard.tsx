import '../styles/certificatecard.css';
import LinkedinIcon from '../assets/icons/linkedin-blue.svg';
import UdemyIcon from '../assets/icons/udemy.svg';
import LinkIcon from '../assets/icons/link.svg';

interface CertificateCardProps {
  title: string;
  issueDate: string;
  cerificate: string;
  source: string;
}

function CertificateCard({ title, issueDate, cerificate, source }: CertificateCardProps) {
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
      <img id="link-icon" src={LinkIcon} />
    </div>

  );
}

export default CertificateCard;
