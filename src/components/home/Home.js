import React from 'react'
import './Home.css';
import Video from '../../img/video.mp4';

function Home() {
    return (
        
        <div className = "home">
            <video autoPlay loop muted
            style = {{
                position: "absolute",
                width: "100%",
                left: "50%",
                top: "50%",
                height: "100%",
                objectFit: "cover",
                transform: "translate(-50%, -50%)",
                zIndex: "-1"
            }}>
                <source src ={Video} type = "video/mp4" />
            </video>
            <div className = "h-left">
                <div className = "h-left-wrapper">
                    <h2 className = "h-intro">Hello My name is</h2>
                    <h1 className = "h-name">Blake Tan Ting Yu</h1>
                    <h2 >I'm a Student with strong interest in </h2>
                    <div className="h-title">
                      
                        <div className="h-title-wrapper">
                            <div className="h-title-item">Software Engineering</div>
                            <div className="h-title-item">Cyber Security</div>
                            <div className="h-title-item">Web Development</div>
                            <div className="h-title-item">App Development</div>
                            <div className="h-title-item">System Administration</div>
                        </div>
                    </div>
                   
                </div>
               
            </div>
          
          



        </div>
 
    )
}

export default Home
