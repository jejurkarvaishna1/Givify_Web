import React from "react";
import "./HomeStyle.css";
import front_page from "./front_page.jpg";
import image2 from "./image2.jpeg";

const Home = () => {
  return (
    <div>
      <div>
        <div className="image-container">
          <img src={front_page} alt="front_page" className="dimmed-image" />
          <div class="text-overlay">
            <h1 className="givify-heading">GIVIFY</h1>
            <p className="Main_about_p">
              ELEVATING LIVES WITH EVERY MEAL SHARED
            </p>
            <button
              className="donate-button"
              onClick={() => (window.location.href = "/donate")}
            >
              Donate
            </button>
          </div>
        </div>
      </div>
      <div className="div2">
        <div className="left-side">
          <div className="top">
            <h3>SCALABLE</h3>
            <h3>SUSTAINABLE</h3>
            <h3>IMPACTFUL</h3>
          </div>
        </div>
        <div className="right-side">
          <img src={image2} alt="front_page" />
        </div>
      </div>
      <div class="custom-background">
        <div class="box">
          <div class="inside-box">
            <h2 class="box-heading">WHY FOOD DONATION IS IMPORTANT ?</h2>
            <div class="content-box">
              <div class="box-content">
                <ul class="box-content">
                  <li class="animated">
                    Food donations alleviate hunger by providing essential
                    nourishment to those in need.
                  </li>
                  <li class="animated">
                    Donating surplus food reduces waste, promoting
                    sustainability.
                  </li>
                  <li class="animated">
                    Food donation builds stronger, caring communities by
                    fostering cooperation.
                  </li>
                  <li class="animated">
                    It positively impacts physical and mental health through
                    access to nutritious food.
                  </li>
                  <li class="animated">
                    Food donations are critical for immediate relief during
                    disasters, ensuring sustenance during disruptions.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="second-main">
        <h1 className="second-main-h">HOW DO I SIGN UP?</h1>
        <h2 className="second-main-h2">It's Easy!</h2>
      </div>
      <div className="card-container">
        <div className="card">
          <h2>1. Join</h2>
          <p className="card-p">Join GIVIFY by creating an account.</p>
          <h2>2. View</h2>
          <p className="card-p">
            View the available rescues and pick one that fits your schedule.
          </p>
          <h2>3. Arrive</h2>
          <p className="card-p">
            Arrive at the local food donor at the date and time you selected and
            follow the directions in the app.
          </p>
          <h2>4. Deliver</h2>
          <p className="card-p">
            Drive the food to the social service agency listed in the app and
            see the impact of your volunteer time!
          </p>
        </div>
        <div className="photo">
          <img src={require("../../components/Home/login.jpeg")} />
        </div>
      </div>
      <div className="feature-section">
        <div className="feature-card">
          <a href="/faq">
            <img
              src={require("../../components/Home/FAQ.jpg")}
              alt="FAQ"
              className="feature-image"
            />
            <h3 className="feature-heading">FAQ</h3>
          </a>
        </div>

        <div className="feature-card">
          <a href="/news">
            <img
              src={require("../../components/Home/News.jpg")}
              alt="NEWS"
              className="feature-image"
            />
            <h3 className="feature-heading">NEWS</h3>
          </a>
        </div>

        <div className="feature-card">
          <a href="/gallery">
            <img
              src={require("../../components/Home/Gallery.jpg")}
              alt="GALLERY"
              className="feature-image"
            />
            <h3 className="feature-heading">GALLERY</h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
