import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import "./PopUpStyle.css";
Modal.setAppElement("#root");

const Popup = ({ isOpen, onClose, ID }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  console.log("pop" + ID);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!/^\S+@\S+\.\S+$/.test(e.target.value)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    if (!/^\d{10}$/.test(e.target.value)) {
      setPhoneError("Phone number should be 10 digits");
    } else {
      setPhoneError("");
    }
  };

  const handleSubmit = () => {
    if (!name || !email || !phone || emailError || phoneError) {
      // Handle invalid input
      return;
    }

    // Data for the POST request to add a new request
    const requestData = {
      name: name,
      email: email,
      phone: phone,
    };

    // Make the POST request to add a new request
    axios
      .post("http://localhost:7800/request", requestData)
      .then((response) => {
        console.log("Data submitted successfully:", response.data);

        console.log("pop1" + ID);
        // After successfully submitting the form, update the status to "unavailable"
        const donationData = {
          ID: ID,
          status: "unavailable",
        };

        console.log("pop2" + ID);
        // Make a POST request to update the status of the specific donation order
        axios
          .post("http://localhost:7800/updateStatus", donationData)
          .then((response) => {
            console.log("pop3" + ID);
            console.log("Status updated successfully:", response.data);
            onClose(); // Close the pop-up
            window.location.reload();
          })
          .catch((error) => {
            console.error("Error updating status:", error);
          });
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
  };

  return (
    <div className="popup form">
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        className="centered-modal"
        contentLabel="Popup Form"
      >
        <h2>Popup Form</h2>
        <div className="PopUpinput">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="PopUpinput">
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
          {emailError && <p className="error">{emailError}</p>}
        </div>
        <div className="PopUpinput">
          <label>Phone:</label>
          <input type="tel" value={phone} onChange={handlePhoneChange} />
          {phoneError && <p className="error">{phoneError}</p>}
        </div>
        <button className="PopUpbutton" onClick={handleSubmit}>
          Submit
        </button>
      </Modal>
    </div>
  );
};

export default Popup;
