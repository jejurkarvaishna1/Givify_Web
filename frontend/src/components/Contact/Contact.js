import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";
import contact_main from "./contact_main.jpg";
export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (email) => {
    // Email validation regular expression
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here, such as sending the message.
    const contactdata = {
      name,
      email,
      message,
    };
    if (!validateEmail(email)) {
      alert("Invalid email format");
      return;
    }

    axios
      .post("http://localhost:3500/contact", contactdata)

      .then((response) => {
        // Handle success, for example, show a success message to the user
        console.log("Contact data submitted successfully:", response.data);

        // Clear the form fields after submission
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        // Handle errors, show an error message to the user
        console.error("Error:", error);
      });
  };

  return (
    <div className="contact-us-container">
      <div className="imageheading">
        <img src={contact_main} alt="contact_main" className="dimmed-image" />
        <div className="text-overlay">
          <h1 className="contact-heading">CONTACT US</h1>
        </div>
      </div>

      <div className="contact-cards">
        <div className="contact-card">
          <h3>Email Us</h3>
          <p>Send us an email at example@example.com</p>
        </div>
        <div className="contact-card">
          <h3>Call Us</h3>
          <p>Call our support team at +1234567890</p>
        </div>
        <div className="contact-card">
          <h3>Address</h3>
          <p>Visit our office at 123 Street, City, Country</p>
        </div>
      </div>
      <div className="contact-content">
        <div className="form-div">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="youremail@example.com"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message..."
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="help-text">
          <h2>HOW CAN WE HELP YOU</h2>
          <p>Feel free to contact us with your questions or concerns.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
