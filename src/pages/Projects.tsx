import '../styles/projects.css';
import ProjectCard from '../components/ProjectCard';

function ProjectsPage() {
    const projectList = [
        {
            title: "My Project 1",
            githubUrl: "sample url",
            description: "sample description",
            languages: ["python"],
            database: "MySQL"
        },
        {
            title: "My Project 2",
            githubUrl: "another url",
            description: "another description",
            languages: ["typescript", "react"],
            database: "PostgreSQL"
        },
        {
            title: "My Project 3",
            githubUrl: "another url",
            description: "another description",
            languages: ["typescript", "react"],
            database: "PostgreSQL"
        },
        {
            title: "My Project 4",
            githubUrl: "another url",
            description: "another description",
            languages: ["typescript", "react"],
            database: "PostgreSQL"
        }
    ];

    return (
        <div className='project-card-container'>
            {projectList.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    githubUrl={project.githubUrl}
                    description={project.description}
                    languages={project.languages}
                    database={project.database}
                />
            ))}
        </div>
    );
}

export default ProjectsPage;