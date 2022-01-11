import "./about.css";
import Me from "../../img/me.jpg";

const About = () => {
    return (
        <div>
             <h1 className="a-title">About</h1>
             <div className="a-desc"> I'm a Sophomore Student in the National University of Singapore with great interest in Software Engineering and Cyber Security. </div> 
              <p className="a-desc"> Contact me for Collaboration or Job Opportunities!</p>
            <div className="all">
            <div className="a-left">
               
                <div className="a-card">
                    <img src={Me} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title"> My Skills</h1>
            <div class="skill-bars">
                    <div class="bar">
                    <div class="info">
                        <span>Programming</span>
                    </div>
                    <div class="progress-line p">
                        <span></span>
                    </div>
                    </div>
                    <div class="bar">
                    <div class="info">
                        <span>Web Development</span>
                    </div>
                    <div class="progress-line web">
                        <span></span>
                    </div>
                    </div>
                    <div class="bar">
                    <div class="info">
                        <span>Cyber Security</span>
                    </div>
                    <div class="progress-line cyber">
                        <span></span>
                    </div>
                    </div>
                    <div class="bar">
                    <div class="info">
                        <span>Database Administration</span>
                    </div>
                    <div class="progress-line database">
                        <span></span>
                    </div>
                    </div>
                    
                </div>
          
                </div>
         
        </div>
      
           
           
            
            </div>
          
        
    )
}

export default About
