import React, { useState } from "react";
import "./Donate.css";
import axios from "axios";

export const Donate = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [foodCategory, setFoodCategory] = useState("veg");
  const [foodQuantity, setFoodQuantity] = useState("");
  const [foodDate, setFoodDate] = useState("");
  const [area, setArea] = useState("");
  const [collectionAddress, setCollectionAddress] = useState("");
  const [message, setMessage] = useState("");

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

  const validateFoodQuantity = (quantity) => {
    // Food quantity should be more than 0
    return parseFloat(quantity) > 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const donationData = {
      name,
      email,
      phone,
      foodCategory,
      foodQuantity,
      foodDate,
      area,
      collectionAddress,
      message,
    };

    if (!validateEmail(email)) {
      alert("Invalid email format");
      return;
    }

    if (!validatePhoneNo(phone)) {
      alert("Phone number should be 10 digits");
      return;
    }

    if (!validateFoodQuantity(foodQuantity)) {
      alert("Food quantity must be more than 0");
      return;
    }

    axios
      .post("http://localhost:8081/donate", donationData)

      .then((response) => {
        // Handle success, for example, show a success message to the user
        console.log("Donation data submitted successfully:", response.data);

        // Clear the form fields after submission
        setName("");
        setEmail("");
        setPhone("");
        setFoodCategory("veg");
        setFoodQuantity("");
        setFoodDate("");
        setArea("");
        setCollectionAddress("");
        setMessage("");
      })
      .catch((error) => {
        // Handle errors, show an error message to the user
        console.error("Error:", error);
      });
  };

  return (
    <div className="donate-bg">
      <div className="donate-container">
        <h2>DONATE</h2>
        <p>
          "We make a living by what we get, but we make a life by what we give."
          - Winston Churchill
        </p>
        <form className="donate-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone No.</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Category of Food</label>
            <div className="food-category-radio">
              <label>
                <input
                  type="radio"
                  name="foodCategory"
                  value="veg"
                  checked={foodCategory === "veg"}
                  onChange={() => setFoodCategory("veg")}
                />
                Vegetarian
              </label>
              <label>
                <input
                  type="radio"
                  name="foodCategory"
                  value="non-veg"
                  checked={foodCategory === "non-veg"}
                  onChange={() => setFoodCategory("non-veg")}
                />
                Non-Vegetarian
              </label>
              <label>
                <input
                  type="radio"
                  name="foodCategory"
                  value="both"
                  checked={foodCategory === "both"}
                  onChange={() => setFoodCategory("both")}
                />
                Both
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="foodQuantity">Food Quantity (in kg)</label>
            <input
              type="number"
              id="foodQuantity"
              name="foodQuantity"
              value={foodQuantity}
              onChange={(e) => setFoodQuantity(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="foodDate">Food Preparation Date </label>
            <input
              type="date"
              id="foodDate"
              name="foodDate"
              value={foodDate}
              onChange={(e) => setFoodDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="area">Area</label>
            <input
              type="text"
              id="area"
              name="area"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="collectionAddress">Collection Address</label>
            <input
              type="text"
              id="collectionAddress"
              name="collectionAddress"
              value={collectionAddress}
              onChange={(e) => setCollectionAddress(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default Donate;
