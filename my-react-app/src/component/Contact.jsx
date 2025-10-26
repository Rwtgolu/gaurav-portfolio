import React from 'react'

const Contact = () => {
  return (
    <div className="contact" id="CONTACT">
            <h2 className="section-title">Contact</h2>
            <div className="contact-content">
                <div className="contact-info">
                    <div className="contact-item">
                        <h3>Email</h3>
                        <p>golurawat151106@gmail.com</p>
                    </div>
                    <div className="contact-item">
                        <h3>LinkedIn</h3>
                        <p>linkedin.com/in/gaurav-singh</p>
                    </div>
                    <div className="contact-item">
                        <h3>GitHub</h3>
                        <p>github.com/gaurav-singh</p>
                    </div>
                    <div className="contact-item">
                        <h3>Phone</h3>
                        <p>+91  7579096969</p>
                    </div>
                </div>
                <div className="contact-form">
                    <h3>Get In Touch</h3>
                    <form>
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea placeholder="Your Message" rows="5" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Contact;
