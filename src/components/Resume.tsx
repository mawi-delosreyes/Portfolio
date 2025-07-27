import '../styles/resume.css';

function Resume({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    if (!isOpen) return null;

    return (
        <div className="resume-overlay">
        <div className="resume">
            <button onClick={onClose} className="close-button">X</button>
            <iframe src="/public/Mark_de_los_Reyes_Resume.pdf" title="Resume" className="resume-frame"></iframe>
        </div>
        </div>
    );
}

export default Resume;