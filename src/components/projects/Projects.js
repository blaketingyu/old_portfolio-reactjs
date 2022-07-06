import "./projects.css";

const Projects = () => {
    return (
        
        <div>
            <h1 className="p-title">Projects</h1>
            <hr style={{width:'40%', margin:'auto'}}></hr>
            <div className='all'></div>
            <section class="container" id="portfolio">
            <p class="port-text">
                Here is some of my work that I've done in various programming languages.
            </p>
            <div class="portfolios">
                <div class="portfolio-item">
                    <div class="image">
                        <img src="img/port1.jpg" alt=""/>
                    </div>
                    <div class="hover-items">
                        <h3>Project Source</h3>
                        <div class="icons">
                            <a href="www.google.com" class="icon">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="www.google.com" class="icon">
                                <i class="fab fa-behance"></i>
                            </a>
                            <a href="www.google.com" class="icon">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
               
                    </div>

        </section>
              
        </div>
    )
}

export default Projects
