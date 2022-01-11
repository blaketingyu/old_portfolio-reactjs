import './work.css';
import uob from '../../img/uoblogo.png';
import csit from '../../img/csit.png';
import cc from '../../img/cc.jpg';
import ibm from '../../img/ibm.png';

const Work = () => {
    return (
        <div>
        <h1 className="w-title"> Work Experiences </h1>
            <div className="job">
            
            <div className="w-left">
            <img src={uob} alt="" className="logo" />
                <h1 className="j-title">Business Technology Intern</h1>
                <h2 className="sub">United Overseas Banking</h2>
                <h2 className="w-desc">May 2021 - Jul 2021</h2>
            </div>
            <div className="w-right">
                <h1 className = "w-desc"> Stand-in Authorization (STA) Team </h1>
                <p className="w-desc"> The STA Application routes real-time payment & fund transfer between Thailand and Singapore </p>
                <ul> 
                    <li>Developed automation scripts to help automate processes in the SIT and UAT servers using bash scripting.</li>
                    <li>Investigate transactions of interest by reading log files in the server or making SQL queries using Oracle SQL Database to retrieve more information about the transaction.</li>
                    <li>Perform simple software testing on our application simulator based on the test cases that were provided to me by my mentors.</li>
                    <li>Created and managed IBM MQ Queue Objects & Connections</li>
                    <li>Verify logs by making queries with Splunk</li>

                </ul>
               
             
            </div>
            </div>
            <div className="space"></div>
            <div className="job">
            
            <div className="w-left">
            <img src={csit} alt="" className="logo" />
                <h1 className="j-title">Research & Development Intern</h1>
                <h2 className="sub">Centre for Strategic Infocomm Technologies (CSIT)</h2>
                <h2 className="w-desc">Nov 2017 - Feb 2018</h2>
            </div>
            <div className="w-right">
              
                <ul> 
                    <li>Researched on the file system of Android Phones</li>
                    <li>Worked on developing a tool to deter against Android Malwares</li>
                  

                </ul>
               
             
            </div>
            </div>
            <div className="space"></div>
            
            <div className="job">
            
            <div className="w-left">
            <img src={cc} alt="" className="logo1" />
                <h1 className="j-title">Research & Development Intern</h1>
                <h2 className="sub">Certis Cisco</h2>
                <h2 className="w-desc">Sep 2017 - Nov 2017</h2>
            </div>
            <div className="w-right">
                <h1 className = "w-desc"> Innovation Lab </h1>
                
                <ul> 
                    <li>Develop a toolkit which aims to stimulate cyber attacks, provide assessment on whether the enterprise users are well trained on cyber security awareness and how protected and hardened the systems are.</li>
                    <li>Made use of macro and “macro-less” attacks to infect victim computers which would run a stager and turn the host computer into a zombie PC.</li>
                    <li>Researched on developing offline attacks through an Air-Gap Network.</li>
                    

                </ul>
               
             
            </div>
            </div>
            <div className="space"></div>
            
            <div className="job">
            
            <div className="w-left">
            <img src={ibm} alt="" className="logo" />
                <h1 className="j-title">Security Operations Center Analyst Intern</h1>
                <h2 className="sub">TP-IBM Security Operation Centre</h2>
                <h2 className="w-desc">May 2017 - Jun 2017</h2>
            </div>
            <div className="w-right">
                
                
                <ul> 
                    <li>Worked alongside IBM security professionals on security projects as well as leverage IBM’s Global Academic Initiative to support TP’s IT security related subjects.</li>
                    <li>Received unique hands-on experience in all aspects of cyber security monitoring and analysis under the supervision of TP staff as well as IBM consultants and experts.</li>
                   
                    

                </ul>
               
             
            </div>
            </div>
            <div className="space"></div>

      
            
        </div>
        
    )
}

export default Work
