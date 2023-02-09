import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3xt58ij', 'template_9mm835a', form.current, 'N02KPi7w1OJtcBCfe')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <div className='Contactsect py-5'>
      <div class="col-md-12 heading-section text-center text-white py-5">
        <span class="subheading text-center">Contact Us</span>
        <h2 class="mb-4 Mainheading">Have a Project?</h2>
        <p className='intro'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
      </div>
        <div className="d-flex justify-content-center">
      <div class="container contact-form p-0 m-0">
        <div class="contact-image">
          <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <h3>Drop Us a Message</h3>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <input type="text" name="user_name" className="form-control mb-2" placeholder="Your Name *" required/>
              </div>
              <div class="form-group">
                <input type="text" name="user_email" className="form-control mb-2" placeholder="Your Email *"  required/>
              </div>
            </div>
            <div class="col-md-6">
            <div class="form-group">
                <input type="text" name="subject" className="form-control mb-2" placeholder='Your Subject'/>
              </div>
              <div class="form-group">
                <textarea name="message" className="form-control" placeholder="Your Message *" style={{ width: '100%', height: '150px' }}></textarea>
              </div>
            </div>
            <div class="form-group col-12 mt-2">
                <input type="submit" name="btnSubmit" className="btnContact" value="Send Message" />
              </div>
          </div>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Contact
