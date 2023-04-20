import React from 'react'
import './contact.css'
import {TfiEmail} from 'react-icons/tfi'
import {RiMessengerLine} from 'react-icons/ri'
import {IoLogoWhatsapp} from 'react-icons/io'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <TfiEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>priya@gmail.com</h5>
            <a href='mailto:priya@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine  className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>patutorials</h5>
            <a href="https://www.facebook.com/" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <IoLogoWhatsapp  className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+123456789</h5>
            <a href=''target='_blank'>Send a message</a>
          </article>
        </div>
        {/*End of contact options*/}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email'required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact