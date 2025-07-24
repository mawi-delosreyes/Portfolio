import '../styles/education.css';
import universityIcon from '../assets/images/mapua.png';
import udemyIcon from '../assets/images/udemy.png';

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
                <img id="udemy-icon" src={udemyIcon}/>
            </div>
        </div>
    );
}

export default EducationPage;