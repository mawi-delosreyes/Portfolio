import '../styles/projects.css';
import ProjectCard from '../components/ProjectCard';

function ProjectsPage() {
    const projectList = [
        {
            title: "PokeSet",
            githubUrl: "https://github.com/mawi-delosreyes/PokeSet",
            liveUrl: null,
            figmaUrl: "https://www.figma.com/design/VHqXSTM8zLTkyGYHTuuYPM/PokeSet?m=auto&t=3sq8VCpaShcjR1RL-1",
            description: "A Pokemon pokedex and VGC team builder where users can view pokemon details, save their team layouts, and see analytics and team coverages. ",
            languages: ["Java", "React", "TypeScript"],
            database: "MySQL"
        },
        {
            title: "Trakua",
            githubUrl: "https://github.com/mawi-delosreyes/Trakua",
            liveUrl: null,
            figmaUrl: "https://www.figma.com/design/lKQiwJ35bxSVD7vpDvLHbb/Trakua?m=auto&t=3sq8VCpaShcjR1RL-1",
            description: "A web and mobile application that allows users to track their financial habits and goals. This focuses on the flexibility of tracking from multiple sources.",
            languages: ["Flutter", "Dart"],
            database: "MySQL, SQLite"
        },
        {
            title: "Harvest",
            githubUrl: "https://github.com/mawi-delosreyes/Harvest",
            liveUrl: null,
            figmaUrl: null,
            description: "A cryptocurrency algorithmic trader for Coins.ph platform. This connects to their API to execute trades from a 1GB - RAM Raspberry Pi 4 that runs 24/7.",
            languages: ["Python"],
            database: "MySQL"
        },
        {
            title: "Kards",
            githubUrl: "https://github.com/mawi-delosreyes/Kards",
            liveUrl: null,
            figmaUrl: null,
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
                    liveUrl={project.liveUrl}
                    figmaUrl={project.figmaUrl}
                    description={project.description}
                    languages={project.languages}
                    database={project.database}
                />
            ))}
        </div>
    );
}

export default ProjectsPage;