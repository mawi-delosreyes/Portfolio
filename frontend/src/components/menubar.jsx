import '../assets/styles/menubar.css'

function Menubar() {
    return (
        <>
            <div id="menubar">                
                <ul className="menubar">
                    <li className="menubar-download">Download CV</li>
                    <li className="menubar-general">Home</li>
                    <li className="menubar-general">Education</li>
                    <li className="menubar-general">Skills</li>
                    <li className="menubar-general">About Mark</li>
                </ul>
            </div>
        </>
    )
}

export default Menubar