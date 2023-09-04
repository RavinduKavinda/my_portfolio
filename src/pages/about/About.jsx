import React from 'react'
import './About.css'
import Info from '../../components/info'
import { FaDownload } from 'react-icons/fa'

const About = () => {
  return (
    <main className="section rcontainer">
      <section className="about">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>

        <div className="about__container container">
          <div className="about__info">
            <h3 className="section__subtitle">
              Personal Info.
            </h3>

            <ul className="info__list grid">
              <Info/>
            </ul>
            <a href="" className="button">
              Download CV{''}
              <span className="button__icon">
                <FaDownload/>
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About