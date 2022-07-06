import React from 'react'
import Home from './home/Home';
import About from './about/About';
import Contact from './contact/Contact';
import Projects from './projects/Projects';


const Mainpage = () => {
    return (
        <div>
            <Home/>
            <About/>
            <Projects/>
            <Contact/>
        </div>
    )
}

export default Mainpage
