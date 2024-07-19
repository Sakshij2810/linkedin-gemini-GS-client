import React from "react";
import { Link } from "react-router-dom";

import AvatarLogo from "../../assets/avatar.png";

const Avatar = () => {
  return (
    <div className="avatar-container">
      <Link to="/user_details">
        <img src={AvatarLogo} alt="avatar-logo" width="40px" height="40px" />
      </Link>
    </div>
  );
};

export default Avatar;
