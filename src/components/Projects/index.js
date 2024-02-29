import { Component } from "react";

import './index.css'

class Projects extends Component{
    render(){
        return(
            <div className="projects-bg"> 
              <h1>Projects</h1>
              <p>Things I've built so far</p>
              <div className="each-project">
                
                <img src="https://res.cloudinary.com/dmm4ddyz6/image/upload/v1709210087/Screenshot_8_kp5z7f.png"
                className="jobby" alt="jobbyapp"/>
                <div className="app">
                    <h1>JOBBY APP</h1>
                    <p>
                        Jobby is the app built in the name of flexibility and 
                        transparency through which you can access hundreds of job opportunities every day s designed by using HTML,CSS,React.JS.
                        Implemented responsive features for optimal usability across mobile and desktop screens, ensuring seamless acces. 
                    </p>
                    <div className="skills">
                        <p className="skill">HTML</p>
                        <p className="skill">CSS</p>
                        <p className="skill">react</p>
                        <p className="skill">Github</p>

                    </div>
                    <a href="https://jobbyapp.ccbp.tech/">Deployed Link</a>
                </div>    
              </div>

              <div className="each-project">
                
                <img src="https://res.cloudinary.com/dmm4ddyz6/image/upload/v1709213327/Screenshot_9_ufurpo.png"
                className="jobby" alt="jobbyapp"/>
                <div className="app">
                    <h1>Food Munch  </h1>
                    <p>
                      Developed a responsive website for food store where users can easilty see food items and detailed information about the items.
                    </p>
                    <div className="skills">
                        <p className="skill">HTML</p>
                        <p className="skill">CSS</p>
                        <p className="skill">Github</p>

                    </div>
                    <a href="https://foodmunchudat.ccbp.tech/">Deployed Link</a>
                </div>    
              </div>
            </div>
        )
    }
}

export default Projects