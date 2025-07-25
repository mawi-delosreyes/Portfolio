import '../styles/projectcard.css';

interface ProjectCardProps {
  title: string;
  githubUrl: string;
  liveUrl?: string;
  description: string;
  languages: string[];
  database?: string;
}

function ProjectCard({ title, githubUrl, liveUrl, description, languages, database }: ProjectCardProps) {
  return (
    <div className="project-card">

      <h3> {title} </h3>


      <div className='project-buttons-container'>
        <button className='project-button'> Github </button>
        <button className='project-button'>
          {liveUrl ? 'Live' : 'Figma'}
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
