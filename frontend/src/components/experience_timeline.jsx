import React from 'react'
import { useState, useEffect } from 'react'
import '../assets/styles/App.css'

export function Experience_Timeline() {

    const [isClicked1, setIsClicked1] = useState(true)
    const [color1, setColor1] = useState("unlocked-circle-background")
    
    const [isClicked2, setIsClicked2] = useState(true)
    const [color2, setColor2] = useState("unlocked-circle-background")
    
    const [isClicked3, setIsClicked3] = useState(true)
    const [color3, setColor3] = useState("unlocked-circle-background")
    
    const [isClicked4, setIsClicked4] = useState(true)
    const [color4, setColor4] = useState("unlocked-circle-background")

    const click = (_id) => {
      if (_id === "internship-circle") {
        setIsClicked1(!isClicked1)
        setColor1(isClicked1? "unlocked-circle-background-clicked": "unlocked-circle unlocked-circle-background")
      }
      else if (_id === "job1-circle") {
        setIsClicked2(!isClicked2)
        setColor2(isClicked2? "unlocked-circle-background-clicked": "unlocked-circle unlocked-circle-background")
      }
      else if (_id === "job2-circle") {
        setIsClicked3(!isClicked3)
        setColor3(isClicked3? "unlocked-circle-background-clicked": "unlocked-circle unlocked-circle-background")
      }
      else if (_id === "job2.1-circle") {
        setIsClicked4(!isClicked4)
        setColor4(isClicked4? "unlocked-circle-background-clicked": "unlocked-circle unlocked-circle-background")
      }
    }

    return (
        <div id="experience-content">
          <h2 id="experience-text"> Professional Experience Timeline </h2>

          <div id="timeline-path">
            
            <div className="experience-pair">
              <div id="internship-circle" className= {"unlocked-circle " + color1} onClick={() => click("internship-circle")}></div>
              <div className="experience"> 
                  <p> Internship </p>
                  <p> 2021 </p>
                </div>
            </div>

            <div className="dashline"></div>

            <div className="experience-pair">
              <div id="job1-circle" className={"unlocked-circle " + color2} onClick={() => click("job1-circle")}></div>
                <div className="experience"> 
                  <p> Backend Developer </p>
                  <p> 2021 </p>
                </div>
            </div>

            <div className="dashline"></div>

            <div className="experience-pair">
              <div id="job2-circle" className={"unlocked-circle " + color3} onClick={() => click("job2-circle")}></div>
                <div className="experience">
                  <p> Jr Backend Developer </p>
                  <p> 2022 </p>
                </div>
            </div>

            <div className="dashline"></div>

            <div className="experience-pair">
              <div id="job2.1-circle" className={"unlocked-circle " + color4} onClick={() => click("job2.1-circle")}></div>
                <div className="experience"> 
                  <p> Backend Developer </p>
                  <p> 2023 </p>
                </div>
            </div>

            <div className="experience-pair">
              <div className="locked-circle"></div>
              <div className="experience"> 
                <p> You could be here! </p> 
              </div>
            </div>

        </div>  
      </div>
    )
}