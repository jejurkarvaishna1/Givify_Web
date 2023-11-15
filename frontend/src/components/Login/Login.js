import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./LoginStyle.css";
import { useAuth } from "../../AuthContext";

export const Login = (props) => {
  const { setIsAuthenticated } = useAuth();
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8082/login", {
        Email,
        password,
      });

      console.log("User logged in successfully:", response.data);
      setIsAuthenticated(true); // Set isAuthenticated to true
      // Display an alert when login is successful
      alert("Login successful!");
    } catch (error) {
      console.error("Error logging in:", error);
      // Display an alert when login fails
      alert("Error logging in.");
    }
  };

  return (
    <div className="auth-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <input
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />

        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="****"
          id="password"
          name="password"
        />

        <button type="submit">Log In</button>
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
