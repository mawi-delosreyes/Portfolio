import './App.css'

function App() {
  return (
    <>
      <div id="experience-content">
        <h2 id="experience-text"> Professional Experience Timeline </h2>

        <div id="timeline-path">
          
          <div class="experience-pair">
            <div class="unlocked-circle"></div>
            <div class="experience"> 
                <p> Internship </p>
                <p> 2021 </p>
              </div>
          </div>

          <div class="dashline"></div>

          <div class="experience-pair">
            <div class="unlocked-circle"></div>
              <div class="experience"> 
                <p> Backend Developer </p>
                <p> 2021 </p>
              </div>
          </div>

          <div class="experience-pair">
            <div class="unlocked-circle"></div>
              <div class="experience"> 
                <p> Jr Backend Developer </p>
                <p> 2022 </p>
              </div>
          </div>

          <div class="experience-pair">
            <div class="unlocked-circle"></div>
              <div class="experience"> 
                <p> Backend Developer </p>
                <p> 2023 </p>
              </div>
          </div>

          <div class="experience-pair">
            <div class="locked-circle"></div>
            <div class="experience"> 
              <p> You could be here! </p> 
            </div>
          </div>
        </div>
      </div>

      <div id="personal-details">
        <div id="personal-info">
          <h1> Mark Wilson de los Reyes </h1>
          <h3> Backend Developer </h3>
          <h3> markwilson.delosreyes@gmail.com </h3>
        </div>
      </div>
    </>
  )
}

export default App
