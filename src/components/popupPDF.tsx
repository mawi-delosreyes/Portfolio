import '../styles/popup.css';

function Popup({ isOpen, onClose, pdfUrl }: { isOpen: boolean, onClose: () => void, pdfUrl: string }) {
    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
        <div className="popup">
            <button onClick={onClose} className="close-button">X</button>
            <iframe src={pdfUrl} title="Popup" className="popup-frame"></iframe>
        </div>
        </div>
    );
}

export default Popup;