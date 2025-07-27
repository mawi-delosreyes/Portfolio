import '../styles/projectcard.css';

interface ProjectCardProps {
  title: string;
  githubUrl: string;
  liveUrl?: string;
  figmaUrl?: string;
  description: string;
  languages: string[];
  database?: string;
}

function ProjectCard({ title, githubUrl, liveUrl, figmaUrl, description, languages, database }: ProjectCardProps) {
  return (
    <div className="project-card">

      <h3> {title} </h3>

      <div className='project-buttons-container'>
        <button className="project-button" onClick={() => window.open(githubUrl, '_blank', 'noopener,noreferrer')}>
          Github
        </button>
        <button
          className="project-button"
          onClick={() => window.open(liveUrl || figmaUrl, '_blank', 'noopener,noreferrer')}
          disabled={!liveUrl && !figmaUrl}
        >
          {liveUrl ? 'Live' : figmaUrl ? 'Figma' : 'Disabled'}
        </button>
      </div>

      <div id='description-box'>
        <p id="description-text"> {description} </p>
      </div>

      <div id="card-footer">
        <p className='footer-text'> Languages: {languages.join(', ')} </p>
        <p className='footer-text'> Database: {database} </p>
      </div>


    </div>

  );
}

export default ProjectCard;
