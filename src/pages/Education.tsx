import { useState } from 'react';
import '../styles/education.css';
import universityIcon from '../assets/images/mapua.png';
import CertificateCard from '../components/CertificateCard';
import Popup from '../components/popupPDF';
import GitLab_CI_CD_from_a_GitLab_Hero_Learn_valuable_DevOps_skills_Build_pipelines_and_Deploy_to_AWS from '/GitLab_CI_CD_from_a_GitLab_Hero_Learn_valuable_DevOps_skills_Build_pipelines_and_Deploy_to_AWS.pdf';
import Machine_Learning_for_Data_Analysis_Classification_Modeling from '/Classification_Modeling.pdf';
import Machine_Learning_for_Data_Analysis_Data_Profiling_and_QA from '/Data_Profiling_QA.pdf';
import User_Experience_Design_and_User_Interface_Design_Fundamentals from '/User_Experience_Design_and_User_Interface_Design_Fundamentals.pdf';
import iOS_App_Development_Test_Driven_Development from '/iOS_App_Development_Test_Driven_Development.pdf';
import Learning_Design_Thinking_Lead_Change_in_Your_Organization from '/Learning_Design_Thinking_Lead_Change_in_Your_Organization.pdf';
import Nodejs_Essential_Training_2019 from '/Nodejs_Essential Training_2019.pdf';

function EducationPage() {

    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const certificates = [
        {
            title: "User Experience Design and User Interface Design Fundamentals",
            date: "August 2025",
            source: "udemy",
            certificateUrl: User_Experience_Design_and_User_Interface_Design_Fundamentals
        },
        {
            title: "GitLab CI/CD: Pipelines, Cl/CD and Dev Ops for Beginners",
            date: "July 2025",
            source: "udemy",
            certificateUrl: GitLab_CI_CD_from_a_GitLab_Hero_Learn_valuable_DevOps_skills_Build_pipelines_and_Deploy_to_AWS
        },
        {
            title: "Machine Learning for Data Analysis: Classification Modeling",
            date: "February 2025",
            source: "udemy",
            certificateUrl: Machine_Learning_for_Data_Analysis_Classification_Modeling
        },
        {
            title: "Machine Learning for Data Analysis: Data Profiling and QA",
            date: "January 2025",
            source: "udemy",
            certificateUrl: Machine_Learning_for_Data_Analysis_Data_Profiling_and_QA
        },
        {
            title: "iOS App Development: Test-Driven Development",
            date: "July 2022",
            source: "linkedin",
            certificateUrl: iOS_App_Development_Test_Driven_Development
        },
        {
            title: "Learning Design Thinking: Lead Change in Your Organization",
            date: "June 2022",
            source: "linkedin",
            certificateUrl: Learning_Design_Thinking_Lead_Change_in_Your_Organization
        },
        {
            title: "Node.js Essential Training (2019)",
            date: "June 2022",
            source: "linkedin",
            certificateUrl: Nodejs_Essential_Training_2019
        }
    ]

    return (
        <div className="background-container">
            <div className='background-squares'>
                <img id="university-icon" src={universityIcon}/>
                <div id='university-text'>
                    <h4>Bachelor of Science in Computer Science</h4>
                    <h5>Specialization in Artificial Intelligence</h5>
                </div>
            </div>

            <div className='background-squares'>
                <div id='online-course-container'>
                    <h1 id='online-courses'> Online Courses and certificates </h1>
                </div>

                <div id='certificate-container'>
                    {certificates.map((cert, index) => (
                        <div 
                            key={index}
                            onClick={() => {
                                setActiveIndex(index);
                                setIsPopupOpen(true);
                            }}
                        >
                            <CertificateCard
                                title={cert.title}
                                issueDate={cert.date}
                                cerificate="sample"
                                source={cert.source}
                            />
                        </div>
                    ))}
                </div>

                <div id='footer-note'> 
                    <p> Please scroll and click through the courses to see the certificate </p>
                </div>
            </div>
            <Popup 
                isOpen={isPopupOpen} 
                onClose={() => setIsPopupOpen(false)} 
                pdfUrl={activeIndex !== null ? certificates[activeIndex].certificateUrl : ""}
            />
        </div>
    );
}

export default EducationPage;