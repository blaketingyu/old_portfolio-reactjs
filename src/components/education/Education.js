import "./education.css";
import nus from "../../img/nus.png";
import tp from "../../img/tp.png";
import redhat from "../../img/redhat.png";
const Education = () => {
    return (
        
        <div className="background">
            <h1 className="e-title"> Education </h1>
            <div className="ed">
                <div className="e-left">
                    <div className="box">
                    <h1 className="e-et"> Academic Education </h1>
                    
                        <img src={nus} alt="" className="nus-icon" />
                        <p className="e-t"> Bachelor of Computing (Hons), Computer Science </p>
                        <p className="e-sub"> National University of Singapore</p>
                        <p> August 2020 to <strong> Present </strong></p>
                        <img src={tp} alt="" className="tp-icon" />
                        <p className="e-t"> Diploma (Merit) in Digital Forensics </p>
                        <p className="e-sub"> Temasek Polytechnic</p>
                        <p> cGPA: <strong>3.83/4.00</strong></p>
                        <p> February 2015 to February 2018</p>
                    </div>
                </div>
                <div className="e-right">
                    
                    <div className="abox">
                    <h1 className="e-et"> Certifications </h1>
                    <img src={redhat} alt="" className="rh-icon" />
                    <p className="e-t"> Red Hat Certified System Administrator</p>
                        <p className="e-sub"> Red Hat Enterprise Linux 7</p>
                        
                    </div>
                    </div>
                      
               
            </div>
              
        </div>
    )
}

export default Education
