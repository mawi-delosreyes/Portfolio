import { useState } from 'react';
import '../styles/experience.css';

function ExperiencePage() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const experiences = [
        { role: "Software Engineer", company: "DTN Philippines Inc.", period: "2024 to Present", top: '10%' },
        { role: "Backend Developer", company: "Solenergy Systems Inc.", period: "2023 to 2024", top: '30%' },
        { role: "Junior Backend Developer", company: "Solenergy Systems Inc.", period: "2022 to 2023", top: '50%' },
        { role: "Backend Developer", company: "Cooee Inc.", period: "2021 to 2021", top: '70%' },
        { role: "Software Engineer - Data Science Intern", company: "Realtair Inc.", period: "2021 to 2021", top: '90%' }
    ];

    return (
        <div id="experience">
            <div id="timeline-content">
            </div>

            <div id="timeline">
                <div id="timeline-line"></div>
                {experiences.map((exp, index) => (
                    <div className="timeline-entry" style={{ top: exp.top }} key={index}>
                        <div
                            className={`timeline-dot ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                        ></div>
                        <div className="timeline-text">
                            <h4 className="timeline-label">{exp.role}</h4>
                            <p>{exp.company}</p>
                            <p>{exp.period}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExperiencePage;