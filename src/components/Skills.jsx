import React from 'react'
import { skills } from '../data'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
  return (
    <>
    {skills.map(({title, percentage}, index) => {
        return(
            <div className="progress __box" key={index}>
                <div className="progress__circle">
                <CircularProgressbar value={percentage} text={`${percentage}%`}background backgroundPadding={6}
                         styles={buildStyles({
                            backgroundColor: "#3e98c7",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent"})}/>
                </div>

                <h3 className="skills__title">
                    {title}
                </h3>
            </div>    
        )
    })}
    </>
  )
}

export default Skills