import React from 'react'
import Home from './home/Home';
import About from './about/About';
import Work from './work/Work';
import Navbar from './Navbar';
import Education from './education/Education';
import Contact from './contact/Contact';


const Mainpage = () => {
    return (
        <div>
            <Home/>
            <About/>
            <Education/>
            <Work/>
            <Contact/>
        </div>
    )
}

export default Mainpage
