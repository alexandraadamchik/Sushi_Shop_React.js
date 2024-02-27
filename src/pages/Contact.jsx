import React, {useState} from "react"
import banner from "../images/sushi_02.jpg";
import { useForm, ValidationError } from '@formspree/react';
import "../styles/Contact.css";

function Contact() {
  const [state, handleSubmit] = useForm("mjvdedqb");
  if (state.succeeded) {
      return (<div className="side" style={{ backgroundImage: `url(${banner})` }}>
          <p className="feedback">Thanks for the feedback!</p>
      </div>);
  }

  return (
    <div className="contact">
      <div className="side" style={{ backgroundImage: `url(${banner})` }}>
        <div className="rightSide">
          <h1> CONTACT US</h1>

          <form onSubmit={handleSubmit} id="contact-form" method="POST">
            <label htmlFor="name">Full Name</label>
            <input name="name" placeholder="Enter full name..." type="text" />
            <label htmlFor="email">Email</label>
            <input name="email" placeholder="Enter email..." type="email" />
            <label htmlFor="message">Message</label>
            <textarea
              rows="6"
              placeholder="Enter message..."
              name="message"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
