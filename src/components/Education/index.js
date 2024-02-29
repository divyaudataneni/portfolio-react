import { Component } from "react";


import './index.css'
class Education extends Component{
    render(){
        return(
            <>
           
            <div className="education-bg">
               <div className="education">
                  <h1 className="ed">Education</h1>
                  <hr/>
                  <p>Completed a Master of Technology in from
                        G.Narayanamma Institute of Technology & Science, achieving a CGPA of 9.1 during the period of 2020 to 2022.<br />
                        Pursuing MERN Full Stack Development from NxtWave CCBP</p>
               </div>
               <div className="study-bg">
               <div className="clg">
                <h2 className="h2">M.tech -  Electronics & Telematics</h2>
                <p>2020 - 2022</p>
                <p> G.Narayanamma Institute of Technology & Science| Hyderabad</p>
                <p>CGPA - 9.1</p>
               </div>
               <div className="clg">
                <h2 className="h2">Certification Course</h2>
                <p>2022 - 2024</p>
                <p> NxtWave CCBP| Hyderabad</p>
                <p>Student</p>
               </div>
               </div>
            </div>
            </>
            
        )
    }
}

export default Education