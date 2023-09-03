import React from 'react'
import './About.css'

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

          </div>
        </div>
      </section>
    </main>
  )
}

export default About