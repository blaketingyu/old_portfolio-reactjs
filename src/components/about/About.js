import "./about.css";
import Me from "../../img/me.jpg";

const About = () => {
    return (
        <div>
             <h1 className="a-title">About</h1>
             <hr style={{width:'40%', margin:'auto'}}></hr>
            <div className="all">
            <div className="a-left">
                <div className="a-card">
                    <img src={Me} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <div className="a-section">
                <h1 className="a-subHeadingLinux">whoami</h1>
                <hr></hr>
                <ul className="a-bulletPoints">
                    <li>I'm a student from the National University Of Singapore (NUS) majoring in <span style={{fontFamily:'Courier New'}}>Computer Science</span></li>
                    <li>I love problem-solving and working with people, <span style={{fontStyle:'italic'}}>I'm really extroverted</span></li>
                </ul>
                </div> 
                <div className="a-section">
                <h1 className="a-subHeading">Fun Facts</h1>
                <hr></hr>
                <ul className="a-bulletPoints">
                    <li>I have passion for software engineering and I really hate hardware-related topics</li>
                    <li>I do frontend for fun even though I am
                        <span style={{color:'red'}}> C</span>
                        <span style={{color:'green'}}>O</span>
                        <span style={{color:'blue'}}>L</span>
                        <span style={{color:'pink'}}>O</span>
                        <span style={{color:'purple'}}>U</span>
                        <span style={{color:'orange'}}>R</span>
                        <span style={{color:'black'}}>B</span>
                        <span style={{color:'red'}}>L</span>
                        <span style={{color:'green'}}>I</span>
                        <span style={{color:'blue'}}>N</span>
                        <span style={{color:'pink'}}>D</span>
                        </li>
                    <li>Gym is my only personality. I wake up 6 every morning and hit the gym 6 times a week</li>
                </ul>
                </div>
                <div className="a-section">
                <h1 className="a-subHeading">Technical Skills</h1>
                <hr></hr>
                <ul className="a-bulletPoints">
                    <li>Web Development: ReactJS, HTML, CSS, JavaScript</li>
                    <li>App Development: JUnit5, Java, JavaFX</li>
                    <li>Database Management: MySQL, PostgreSQL</li>
                    <li>Software Testing: Postman, SoapUI, Selenium</li>
                    <li>ETL: CloverDX</li>
                    <li>Cyber Security: Malware Analysis, OSINT, Digital Forensics</li>
                    <li>System Administrator (RHCSA) </li>
                </ul>

                </div>
          
                </div>
         
        </div>
      
           
           
            
            </div>
          
        
    )
}

export default About
