import React, { useRef }  from 'react'
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
import emailjs from '@emailjs/browser';


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_s6ryey9', 
        'template_ptk79vm', 
      form.current, 
        '8l4HLiO3bG1xP4rZZ')

      .then((result) => {
          console.log(result.text);
          console.log("Message Sent");
      }, (error) => {
          console.log(error.text);
      });
  };
  
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

          {/*-----contact info-----*/}
          <div className="contact__info">   
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon'/>

              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">dlravindukavinda@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquare className='info__icon'/>

              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+94 77 835 6450</h4>
              </div>
            </div>

          </div>

          {/*-----social media----- */}
          <div className="contact__social">
            <a href="/" className='social__link'> <FaLinkedinIn/> </a>  
            <a href="/" className='social__link'> <FaGithub/> </a> 
            <a href="/" className='social__link'> <FaMedium/> </a> 
            <a href="/" className='social__link'> <FaDiscord/> </a>          
          </div>

        </div>

        {/*-----massage box-----*/}
        <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <div className="form__input-group">

            <div className="form__input">
              <input
                type='text'
                placeholder='Your Name'
                className='form__control'
                name='user__name'/>
            </div>
            <div className="form__input">
              <input
                type='email'
                placeholder='Your Email'
                className='form__control'
                name='user__email'/>
            </div>
            <div className="form__input">
              <input
                type='text'
                placeholder='Your Subject'
                className='form__control'
                name='user__subject'/>
            </div>
          </div>

          <div className="form__input">
            <textarea 
              placeholder='Your Message'
              className='form__control textarea'
              name='message'></textarea>
          </div>

          <button type='submit' className="button">
            Send Message
            <span className="button__icon contact__btn-icon">
              <FiSend/>
            </span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact