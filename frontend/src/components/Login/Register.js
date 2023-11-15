import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./RegisterStyle.css";
export const Register = (props) => {
  const [Email, setEmail] = useState("");
  const [F_Name, setF_Name] = useState("");
  const [Phone_no, setPhone_no] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => {
    // Email validation regular expression
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  };

  const validatePhoneNo = (phone) => {
    // Phone number validation: should contain only digits and have a length of 10
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const validatePassword = (password) => {
    // Password validation: minimum length of 6 characters, at least one digit, one lowercase letter, and one uppercase letter
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(Email)) {
      alert("Invalid email format");
      return;
    }

    if (!validatePhoneNo(Phone_no)) {
      alert("Phone number should be 10 digits");
      return;
    }

    if (!validatePassword(password)) {
      alert("Password must be alphanumeric and at least 6 characters long");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/signup", {
        Email,
        F_Name,
        Phone_no,
        password,
      });

      console.log("User registered successfully:", response.data);

      // Display an alert when registration is successful
      alert("Registration successful!");
    } catch (error) {
      console.error("Error registering user:", error);
      // Display an alert when registration fails
      alert("Error registering user.");
    }
  };

  return (
    <div className="auth-form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="heading-form">REGISTRATION FORM</h2>
        <label htmlFor="email">Email</label>
        <input
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />

        <label htmlFor="name">Full name</label>
        <input
          value={F_Name}
          name="name"
          onChange={(e) => setF_Name(e.target.value)}
          id="name"
          placeholder="Full Name"
        />

        <label htmlFor="phoneno">Phone No.</label>
        <input
          value={Phone_no}
          onChange={(e) => setPhone_no(e.target.value)}
          type="tel"
          placeholder="phone no"
          id="phoneno"
          name="phone_no"
        />

        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
          id="password"
          name="password"
        />

        <button type="submit">Register</button>
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
};
export default Register;
