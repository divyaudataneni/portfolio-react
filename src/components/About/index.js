import { Component } from "react";

import './index.css'

class About extends Component{
    render(){
        return(
            <>
          
            <div className="profile-bg">
                <div className="name-div">
                <h1 className="who">Who I am</h1>
                <p>As an enthusiastic fresher web developer, I bring a keen interest and burgeoning expertise in MERN stack development. With proficiency in HTML,
                            CSS, JavaScript, Node.js, Express.js, React.js,
                            and MongoDB, I am equipped to tackle diverse challenges in web development. My passion lies in
                            crafting robust web applications that seamlessly integrate cutting-edge technologies, ensuring optimal user
                            experiences.<br /><br />

                            I'm a driven and curious web developer, eager to contribute to dynamic software projects.
                            in collaborative environments, I'm committed to continuous learning and staying at the forefront of web development trends.</p>
                <h1 className="skills-h1">Skills</h1>
                <div className="skills">
                    <p className="skill">HTML</p>
                    <p className="skill">CSS</p>
                    <p className="skill">JavaScript</p>
                    <p className="skill">React.Js</p>
                    <p className="skill">Node.Js</p>
                    <p className="skill">MySql</p>
                    <p className="skill" >Python</p>
                    <p className="skill">Python</p>
                    <p className="skill">Python</p>
                    <p className="skill">Github</p>
                    <p className="skill">Vscode</p>
                    <p className="skill">Express.Js</p>

                </div>
                </div>
            </div>
            </>
        )
    }
}

export default About