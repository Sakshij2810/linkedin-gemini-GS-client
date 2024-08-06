import "./Dashboard.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import TopNavbar from "../../components/TopNavbar/TopNavbar";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import Card from "../../components/Card/Card";
import { createUser } from "../../actions/userAction";

const Dashboard = () => {
  const dispatch = useDispatch();
  const googleProfile = useSelector((state) => state.currentUser.googleProfile);
  const linkedInProfile = useSelector(
    (state) => state.currentUser.linkedInProfile
  );

  const handleLinkedInAuth = () => {
    window.location.href =
      "https://linkedin-gemini-gs-server.onrender.com/api/v1/auth/linkedin";
  };

  useEffect(() => {
    if (googleProfile) {
      const userData = {
        username: googleProfile.displayName,
        email: googleProfile.emails[0].value,
        id: googleProfile.id,
        accesstoken: localStorage.getItem("googleAccessToken"),
      };
      dispatch(createUser(userData));
    }
  }, [googleProfile, dispatch]);

  return (
    <div className="dashboard-container">
      <div className="topnavbar-dashboard-container">
        <TopNavbar />
      </div>
      <div className="bottom-dashboard-container">
        <div className="leftsidebar-dashboard-container">
          <LeftSidebar />
        </div>
        <div className="rightside-dashboard-container">
          <div className="head-content-dashboard">
            <h1>All Haleetech Apps</h1>
            <p>
              Click 'Access Now' to start using any Haleetech Applications. You
              can enjoy complete access to all Haleetech apps with a single
              Haleetech Plus Plan.{" "}
              <Link style={{ color: "blue" }} to="learn_more">
                Learn more
              </Link>
            </p>
          </div>
          <div className="card-dashboard-container">
            <Card />
            <button onClick={handleLinkedInAuth}>
              Authenticate with LinkedIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
