import React from 'react'
import {
  FaEnvelopeOpen, 
  FaPhoneSquare,
  FaLinkedinIn,
  FaGithub,
  FaDiscord  
} from 'react-icons/fa'
import {FaMedium} from 'react-icons/fa6'
import {FiSend} from 'react-icons/fi'
import './contact.css'

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container rcontainer container">
        <div className="contact__data">
          <h3 className="contact__title">
            Let's Connect
          </h3>
          <p className="contact__desc">
            Thank you for visiting my portfolio! Whether it's internships, advice, 
            or just a friendly chat, I'm all ears. I'm enthusiastic about learning, 
            growing, and contributing. Reach out with your questions, collaboration ideas, 
            or anything else. Your feedback is valuable, and I'm excited about the possibilities. 
            Let's connect and achieve great things together.
          </p>

        </div>
      </div>
    </section>
  )
}

export default Contact