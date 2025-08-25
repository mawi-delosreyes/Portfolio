import { useState } from 'react';
import '../styles/experience.css';
import dtnLogo from '../assets/logo/dtn.png';
import solenergyLogo from '../assets/logo/solenergy.png';
import cooeeLogo from '../assets/logo/cooee.png';
import realtairLogo from '../assets/logo/realtair.png';

function ExperiencePage() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const experiences = [
        { role: "Software Engineer", company: "DTN Philippines Inc.", period: "2024 to Present", top: '10%', logo: dtnLogo },
        { role: "Backend Developer", company: "Solenergy Systems Inc.", period: "2023 to 2024", top: '30%', logo: solenergyLogo },
        { role: "Junior Backend Developer", company: "Solenergy Systems Inc.", period: "2022 to 2023", top: '50%', logo: solenergyLogo },
        { role: "Backend Developer", company: "Cooee Inc.", period: "2021 to 2021", top: '70%', logo: cooeeLogo },
        { role: "Software Engineer - Data Science Intern", company: "Realtair Inc.", period: "2021 to 2021", top: '90%', logo: realtairLogo }
    ];

    const experienceDetails = [
        [
          "Develop and maintain backend services using Java, Node.js, and PHP for consumer-facing web and mobile platforms (iOS & Android)",
          "Write test cases using JUnit and Mockito",
          "Support 6 million monthly Australian active users by ensuring and maintaining backend infrastructure",
          "Review and address customer support issues",
          "Ensure functionality of the CMS tool used by meteorologists to publish weather news content",
          "Integrate Apple News API, increasing content delivery efficiency for meteorologists",
          "Troubleshoot and monitor system performance using Datadog; resolve incident and support tickets",
          "Refactor and modernize legacy codebases for improved maintainability",
          "Implement CI/CD pipelines via GitLab and manage version control using GitLab",
          "Collaborate with cross-functional teams and stakeholders across departments",
          "Produce technical documentation, architecture diagrams, and research reports for backend systems",
          "Project Handled: Weatherzone (Australia)"
        ],
        [
          "Developed and maintained Python Flask-based APIs integrated with websites and mobile apps",
          "Maintained Flask-based API for real-time data from over 50 IoT hardware devices across 15+ project sites enabling reliable data collection and monitoring",
          "Designed and implemented relational database schemas using MySQL",
          "Optimized and refactored backend codebases for scalability and maintainability",
          "Managed cloud infrastructure using AWS services: EC2, IAM, Lambda, RDS, S3, SES, VPC, and CloudWatch",
          "Integrated payment gateways and weather APIs for internal systems",
          "Authored internal backend coding standards and comprehensive technical documentation",
          "Led 2 major projects:",
          "Envision Monitoring - web and mobile - based analytics for monitoring solar grid-level data",
          "Envision EV - remote EV charger control system and monitoring"
        ],
        [
          "Developed and maintained Python Flask-based APIs integrated with websites and mobile apps, processing incoming data from IoT hardware",
          "Designed and implemented relational database schemas using MySQL",
          "Optimized and refactored backend codebases for scalability and maintainability",
          "Managed cloud infrastructure using AWS services: EC2, IAM, Lambda, RDS, S3, SES, VPC, and CloudWatch",
          "Authored internal backend coding standards and comprehensive technical documentation",
        ],
        [
          "Built and maintained websites using PHP, HTML, CSS, and JavaScript",
          "Created automation scripts using Puppeteer for backend data operations",
          "Integrated REST APIs for database communication"
        ],
        [
          "Analyzed and organized structured data from internal databases",
          "Delivered actionable insights to stakeholders through data-driven presentations"
        ]
      ];

    return (
        <div id="experience">

            {activeIndex !== null ? (
                <div>
                    <div className="timeline-content-container">
                        <div id='timeline-content-selected'>
                            <div id="company-header">
                                <img src={experiences[activeIndex].logo} alt="company logo" id="company-logo" />
                                <h3>{experiences[activeIndex].company}</h3>
                            </div>
                            <h4>{experiences[activeIndex].role}</h4>
                            <p>{experiences[activeIndex].period}</p>

                            <div id='experience-details-container'>
                                <ul>
                                    {experienceDetails[activeIndex].map((detail, index) => (
                                        <li key={index}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p className='note'> Please scroll through some job experiences </p>
                </div>
            ) : (
                <div>
                    <div className="timeline-content-container">
                        <div id='timeline-content-not-selected'>
                            <p>Please select an experience to view details.</p>
                        </div>
                    </div>
                    <p className='note'> Please scroll through some job experiences </p>
                </div>
            )}

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