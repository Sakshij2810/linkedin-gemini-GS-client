import "./Home.css";
import React from "react";
import { useNavigate } from "react-router-dom";

// Corrected imports
import googleSheet from "../../assets/googlesheet.png";
import gemini from "../../assets/gemini.png";
import linkedin from "../../assets/linkedin.png";
import arrow from "../../assets/arrow.jpg";
import google from "../../assets/google.webp";

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    window.location.href =
      "https://linkedin-gemini-gs-server.onrender.com/api/v1/auth/google";
  };

  return (
    <div className="home-main-container">
      <div className="home-content">
        <h1>Create Linkedin Post using Gemini and Google-Sheet</h1>
        <div className="logo-container">
          <img
            src={googleSheet}
            alt="googlesheet-image"
            width="100px"
            height="100px"
          />
          <img src={arrow} alt="linkedin-image" width="60px" height="60px" />
          <img src={gemini} alt="gemini-image" width="250px" height="100px" />
          <img src={arrow} alt="linkedin-image" width="60px" height="60px" />
          <img
            src={linkedin}
            alt="linkedin-image"
            width="100px"
            height="100px"
          />
        </div>
        <button onClick={handleLogin}>
          <img src={google} alt="google-image" width="30px" height="30px" />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Home;
