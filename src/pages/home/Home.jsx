import React from 'react'
import Profile from '../../assets/profile.png'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
  return (
    <section className="home section container">
      <img src={Profile} alt="Profile" className='home__img' />

      <div className="home__content">
        <div className="home__info">
          <h1 className="home__title">
            <span>I'm Ravindu Kavinda.</span> <br />
            Software Engineering Undergraduate
          </h1>

          <p className="home__desc">
          I am a creative, professional and responsible undergraduate looking for an internship to 
          improve my skills and experiences for my future career. I’m very interest in Web Development, 
          Mobile application Development and Game Development.
          </p>
          <Link to="/about" className='button'>
            More About Me{''}
            <span className="button__icon">
              <FaArrowRight/>
            </span>
          </Link>

        </div>
      </div>
    </section>
  )
}

export default Home