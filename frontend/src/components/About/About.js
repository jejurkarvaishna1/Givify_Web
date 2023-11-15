import React from "react";
import aboutImage from "./aboutImage.png"; // Import your image
import "./AboutStyles.css";
import About2 from "./About2.jpg";
import team_member1 from "./team_member1.jpeg";
import team_member2 from "./team_member2.jpeg";
import team_member3 from "./team_member3.jpeg";

const About = () => {
  return (
    <div>
      <div>
        <div className="image-container">
          <img src={aboutImage} alt="aboutImage" />
          <div class="text-overlay">
            <h2 className="Main_about_h">ABOUT US</h2>
            <p className="Main_about_p">
              Welcome to our website! We are a team of passionate individuals
              dedicated to addressing the alarming issue of food wastage in
              densely populated countries like India.
            </p>
          </div>
        </div>
      </div>

      <div className="Mission">
        <div className="mission-box">
          <h3 className="centered-heading">Our Mission</h3>
          <p className="mission-para">
            Our mission is to address the alarming issue of food wastage in
            densely populated countries like India through an innovative
            internet-based application. This platform will facilitate the
            connection between restaurants, cafes, and individuals with surplus
            food,to organizations serving the needy, such as orphanages and old
            age homes. By redirecting surplus resources from being discarded
            into the hands of those who require them, we aim to minimize food
            waste, reduce environmental impact, and promote a more equitable and
            sustainable society. Our initiative seeks to cultivate a culture of
            responsible consumption and resource donation while increasing
            public awareness about the significance of food and resource
            conservation for food security, climate change mitigation, and a
            greener environment.
          </p>
        </div>
        <div className="mission-image">
          <img src={About2} alt="About2" />
        </div>
      </div>

      <div>
        <div className="team">
          <h2 className="team_heading">Our Team</h2>
          <p className="team_para">
            Meet the dedicated individuals who are driving our mission forward.
            Our team is composed of experts in various fields, all working
            together to make a positive impact.
          </p>
          <div className="team-members">
            <div className="team-member">
              <div className="team-card">
                <img
                  src={team_member2}
                  alt="Team Member 1"
                  className="imageabout"
                />
                <p>Komal Chaudhari</p>
              </div>
            </div>
            <div className="team-member">
              <div className="team-card">
                <img
                  src={team_member1}
                  alt="Team Member 2"
                  className="imageabout"
                />
                <p>Mitasha Jadhav</p>
              </div>
            </div>
            <div className="team-member">
              <div className="team-card">
                <img
                  src={team_member3}
                  alt="Team Member 3"
                  className="imageabout"
                />
                <p>Vaishnavi Jejurkar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
