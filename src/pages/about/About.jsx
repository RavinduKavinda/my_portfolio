import React from 'react'
import './About.css'
import Info from '../../components/info'
import Skills from '../../components/Skills'
import EducationItem from '../../components/EducationItem'
import Certifacate from '../../components/Certifacate'
import { certifacate, education } from '../../data'
import { FaDownload } from 'react-icons/fa'
import CV from '../../assets/MyCV.pdf'

const About = () => {
  return (
    <main className="section rcontainer">

      {/*-----Info-----*/}
      <section className="about">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>

        <div className="about__container container about__info">

            <h3 className="section__subtitle">
              Personal Info.
            </h3>

            <ul className="info__list container">
              <Info/>
            </ul>
          </div> 
           
          <a href={CV} download='' className="button">
              Download CV
              <span className="button__icon">
                <FaDownload/>
              </span>
          </a>        
      </section>

      <div className="separator"></div>

      {/*-----Skills-----*/}
      <section className="skills">
        <h2 className="section__title">
          My Skills
        </h2>

        <div className="skills__container container">
          <Skills/>
        </div>
      </section>

      <div className="separator"></div>

      {/*-----Education-----*/}
      <section className="education">
        <h2 className="section__title">
          Education
        </h2>

        <div className="edu__container container">
          <div className="edu__data">
            {education.map((val) => {
              if (val.category === 'education') {
                return <EducationItem key={val.id} {...val} />;
              }
            })}
          </div>

          <div className="edu__data">
            {certifacate.map((val) => {
              if (val.category === 'certifacate') {
                return <Certifacate key={val.id} {...val} />;
              }
            })}
          </div>
        </div>

        
      </section>

    </main>
  )
}

export default About