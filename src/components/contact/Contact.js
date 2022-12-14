import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <section className="contact text-center text-white pb-3" id="contact">
            <br /><h1>Contact</h1> <br />
            <hr className="contactLine" /><br />
            <div id="contactForm" className="mx-md-auto text-center container">
                <form action="https://formspree.io/f/maykaywk" method="post" name="contact">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="form-group mt-2">
                        <label htmlFor="uname">Username:</label>
                        <input type="text" className="form-control" id="uname" placeholder="Enter username" name="uname" required="" />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="email">Email:</label>
                        <input type="Email" required className="form-control" id="email" placeholder="Enter Email" name="email" />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" id="message" placeholder='Message' className="form-control" cols="30" rows="10"></textarea>
                    </div>
                    <button type="submit" className="btn mt-2">Message Me</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;