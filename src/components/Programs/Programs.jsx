import React from 'react'
import './Programs.css'
import program_1 from '../.../assets/program_1.png'
import program_2 from '../.../assets/program_2.jpg'
import program_3 from '../.../assets/program_3.jpg'


export const Programs = () => {
  return (
    <div className="programs ">
        <div className="program">
            <img src={program_1} alt=''/>
            <div className="caption">
                <img src=' ' alt=''/>
                <p>Graduation Degree</p>

            </div>
            
        </div>
        <div className="program">
            <img src={program_2} alt=''/>
            <div className="caption">
                <img src=' ' alt=''/>
                <p>Masters Degree</p>

            </div>

        </div>
        <div className="program">
            <img src={program_3} alt=''/>
            <div className="caption">
                <img src=' ' alt=''/>
                <p>Post Graduate</p>

            </div>

        </div>
    </div>
    
  )
}
export default Programs