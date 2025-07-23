import '../styles/projectcard.css';

interface ProjectCardProps {
  title: string;
}

function ProjectCard({ title }: ProjectCardProps) {
  return (
    <div className="project-card-container">
      <div className="project-card"><h3>{title} 1</h3></div>
      <div className="project-card"><h3>{title} 2</h3></div>
      <div className="project-card"><h3>{title} 3</h3></div>
      <div className="project-card"><h3>{title} 4</h3></div>
    </div>
  );
}

export default ProjectCard;
