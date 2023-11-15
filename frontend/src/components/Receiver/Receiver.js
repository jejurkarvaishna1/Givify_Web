import React, { useState, useEffect } from "react";
import axios from "axios";
import Popup from "./PopUp";
import "./ReceiverStyle.css";
export const Receiver = () => {
  //const [donationDID, setdonationDID] = useState("");
  const [ID, setID] = useState("");
  const [donations, setDonations] = useState([]);
  const [searchArea, setSearchArea] = useState(""); // State for the search input
  const [searchResults, setSearchResults] = useState([]); // State for displaying search results
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Fetch all donations when the component mounts
    axios
      .get("http://localhost:7800/receive")
      .then((response) => {
        setDonations(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Function to handle the search button click
  const handleSearch = () => {
    // Make a request to search donations by area
    axios
      .get(`http://localhost:7800/search?area=${searchArea}`)
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => {
        // Handle the error here
      });
  };
  const handleRequestInfo = (ID) => {
    console.log(`Request more info for donation with ID: ${ID}`);
    //setdonationDID(DonationDID);
    setID(ID);

    console.log("receiver page" + ID);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="donate-main">
      <div className="donate-container">
        <div>
          <h2>DONATION LIST</h2>

          <input
            type="text"
            placeholder="Search by Area"
            value={searchArea}
            onChange={(e) => setSearchArea(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>

          <ul>
            {searchResults.length > 0
              ? // Display search results if available
                searchResults.map((donation, index) => (
                  <div className="Reciever-li">
                    <li key={index}>
                      <div className="info-group">
                        <div className="info-item">
                          ID: {donation.ID}, Name: {donation.name}
                        </div>
                        <div className="info-item">
                          {" "}
                          Email: {donation.email}, Phone: {donation.phone}
                        </div>
                        <div className="info-item">
                          {" "}
                          Food Category: {donation.foodCategory}, Food Quantity:{" "}
                          {donation.foodQuantity}{" "}
                        </div>
                        <div className="info-item">
                          Area: {donation.area}, Collection Address:{" "}
                          {donation.collectionAddress}
                        </div>
                        <div className="info-item">
                          <span className="status">
                            Status :{donation.status}
                          </span>
                        </div>
                      </div>
                      {donation.status !== "unavailable" && (
                        <button onClick={() => handleRequestInfo(donation.ID)}>
                          Request
                        </button>
                      )}
                      {/* Add more fields as needed */}
                    </li>
                  </div>
                ))
              : // Display all donations if no search results
                donations.map((donation, index) => (
                  <div className="Reciever-li">
                    <li key={index}>
                      <div className="info-item">
                        ID: {donation.ID}, Name: {donation.name}
                      </div>
                      <div className="info-item">
                        Email: {donation.email}, Phone: {donation.phone}
                      </div>{" "}
                      <div className="info-item">
                        Food Category: {donation.foodCategory}, Food Quantity:{" "}
                        {donation.foodQuantity}
                      </div>
                      <div className="info-item">
                        Area: {donation.area}, Collection Address:{" "}
                        {donation.collectionAddress}
                      </div>
                      <div className="info-item">
                        <span className="status">
                          Status :{donation.status}
                        </span>
                      </div>
                      {donation.status !== "unavailable" && (
                        <button onClick={() => handleRequestInfo(donation.ID)}>
                          Request
                        </button>
                      )}
                      {/* Add more fields as needed */}
                    </li>
                  </div>
                ))}
          </ul>
          <Popup isOpen={isPopupOpen} onClose={closePopup} ID={ID} />
        </div>
      </div>
    </div>
  );
};

export default Receiver;
