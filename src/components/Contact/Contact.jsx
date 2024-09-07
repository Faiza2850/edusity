import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message</h3>
        <p>
          We’d love to hear from you! Whether you have a question, feedback, or
          just want to say hello, feel free to reach out. Fill out the form
          below, and we’ll get back to you as soon as possible.
        </p>
        <ul>
            <li>Contact@FaizaFatima.dev</li>
            <li>+1 455-5443-345v</li>
            <li>77 NewCity , Phase#02<br/>Wah Cantt , Pakistan</li>
            
        </ul>
      </div>
      <div className="contact-col"></div>
    </div>
  );
};
