import React, {useRef, useState} from 'react';
import "./contact.css";
import Email from "../../img/email.png";
import CV from "../../img/cv.pdf";
import resume from "../../img/resume.png";
import emailjs from 'emailjs-com';



const Contact = () => {

    const form = useRef();
    const [done, setDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_k557z6u', 'template_cl4nobc', form.current, 'user_mhwIwvXCphSwciTsBkT2r')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });

    };

    return (
        <div className="c">
        
             <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's work together!</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={Email} alt="" className="c-icon" />
                        blaketantingyu@gmail.com
                    </div>
                    <div className="c-info-item">
                    <img src={resume} alt="" className="c-icon" />
                        <a href={CV}  class= "underline" download> Resume </a>
                      
                    </div>
                </div>
            </div>
            <div className="c-right">
            <p className="c-desc">
                <b> Contact me </b> for any job opportunities or collaboration. Always open to projects that might interest me!
            </p>
            <form ref={form} onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" name="user_name" />
                <input type="text" placeholder="Subject" name="user_subject" />
                <input type="text" placeholder="Email" name="user_email" />
                <textarea rows="5" placeholder='Message' name="message"></textarea>
                <button>Submit</button>
                {done && "  Thank You!"}
            </form>
            </div>
            </div>
         
        </div>
      )
}

export default Contact
