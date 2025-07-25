import '../styles/education.css';
import universityIcon from '../assets/images/mapua.png';

function EducationPage() {
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
                    <h1 id='online-courses'> Online Courses </h1>
                </div>

                <div id='course-container'>
                    <ul>
                        <li className='course-list'> GitLab CI/CD: Pipelines, Cl/CD and Dev Ops for Beginners </li>
                        <li className='course-list'> Machine Learning for Data Analysis: Classification Modeling </li>
                        <li className='course-list'> Machine Learning for Data Analysis: Data Profiling and QA </li>
                        <li className='course-list'> iOS App Development: Test-Driven Development - June 2022 </li>
                        <li className='course-list'> Learning Design Thinking: Lead Change in Your Organization </li>
                        <li className='course-list'> Node.js Essential Training (2019) </li>
                    </ul>
                </div>
                <div id='footer-note'> 
                    <p> Please click the course to see the certificate </p>
                </div>
            </div>
        </div>
    );
}

export default EducationPage;