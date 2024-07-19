import "./Card.css";
import React from "react";

import { BsBroadcastPin } from "react-icons/bs";

const Card = () => {
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
      <button>Access Now</button>
    </div>
  );
};

export default Card;
