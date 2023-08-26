import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { SiViber } from 'react-icons/si';

import { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_mgf44k4',
        'template_57051to',
        form.current,
        'S_CR-rys1DaoZRbbl'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h1>Contact Me</h1>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <div className="contact__icon">
              <MdOutlineEmail className="contact__option-icon" />
            </div>
            <h4>Email</h4>
            <h5>it_jamesmiayo25@yahoo.com</h5>
            <a href="mailto:it_jamesmiayo25@yahoo.com" target="##">
              Open Mail
            </a>
          </article>

          <article className="contact__option">
            <div className="contact__icon">
              <RiMessengerLine className="contact__option-icon" />
            </div>
            <h4>Messenger</h4>
            <h5>james.miayo</h5>
            <a href="https://m.me/james.miayo" target="##">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <div className="contact__icon">
              <SiViber className="contact__option-icon" />
            </div>
            <h4>Viber</h4>
            <h5>09913787181</h5>
            <a href="https://account.viber.com/en/login" target="##">
              Send a message
            </a>
          </article>
        </div>
        {/* End of contact option */}
        <div className="mail__container">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Full Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea
              name="message"
              rows="7"
              placeholder="Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
