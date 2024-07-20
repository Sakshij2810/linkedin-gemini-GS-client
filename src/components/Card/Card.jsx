import "./Card.css";
import React from "react";

import { BsBroadcastPin } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/sheet_data");
  };
  return (
    <div className="card-container">
      <div className="icon-container-card">
        <BsBroadcastPin
          style={{
            fontSize: "1.4rem",
            color: " rgb(47, 104, 238)",
          }}
        />
      </div>
      <h4>Haleetech Connect</h4>
      <p>Integarte different applications and start automating your work. </p>
      <button onClick={handleClick}>Access Now</button>
    </div>
  );
};

export default Card;
