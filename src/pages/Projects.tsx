import '../styles/projects.css';
import ProjectCard from '../components/ProjectCard';

function ProjectsPage() {
    const projectList = [
        {
            title: "PokeSet",
            githubUrl: "https://github.com/mawi-delosreyes/PokeSet",
            description: "A Pokemon pokedex and VGC team builder where users can view pokemon details, save their team layouts, and see analytics and team coverages. ",
            languages: ["Java", "React", "TypeScript"],
            database: "MySQL"
        },
        {
            title: "Trakua",
            githubUrl: "https://github.com/mawi-delosreyes/Trakua",
            description: "A web and mobile application that allows users to track their financial habits and goals. This focuses on the flexibility of tracking from multiple sources.",
            languages: ["Flutter", "Dart"],
            database: "MySQL, SQLite"
        },
        {
            title: "Harvest",
            githubUrl: "https://github.com/mawi-delosreyes/Harvest",
            description: "A cryptocurrency algorithmic trader for Coins.ph platform. This connects to their API to execute trades from a 1GB - RAM Raspberry Pi 4 that runs 24/7.",
            languages: ["Python"],
            database: "MySQL"
        },
        {
            title: "Kards",
            githubUrl: "https://github.com/mawi-delosreyes/Kards",
            description: "A Baccarat mobile application that tracks game progress and provides analytics for the current turn.",
            languages: ["Dart", "Flutter"],
            database: "SQLite"
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