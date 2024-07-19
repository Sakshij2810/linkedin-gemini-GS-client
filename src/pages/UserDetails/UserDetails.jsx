import "./UserDetails.css";
import React from "react";
import { useSelector } from "react-redux";
import TopNavbar from "../../components/TopNavbar/TopNavbar";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";

const UserDetails = () => {
  const currentUser = useSelector((state) => state.currentUser);
  //   console.log(currentUser);

  return (
    <div className="user-details-container">
      <div className="topnavbar-user-container">
        <TopNavbar />
      </div>
      <div className="bottom-user-container">
        <div className="leftsidebar-user-container">
          <LeftSidebar />
        </div>
        <div className="rightside-user-container">
          {currentUser && (
            <div className="user-details-content">
              <p>Name: {currentUser.displayName}</p>
              <p>Id: {currentUser.id}</p>
              <p>Email: {currentUser.emails[0].value}</p>
              <p>Access Token: {currentUser.accessToken}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;