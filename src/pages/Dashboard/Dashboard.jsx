import "./Dashboard.css";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import TopNavbar from "../../components/TopNavbar/TopNavbar";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import Card from "../../components/Card/Card";
import { createUser } from "../../actions/userAction";

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.currentUser);

  const userData = {
    username: user.profile.displayName,
    email: user.profile.emails[0].value,
    id: user.profile.id,
    accesstoken: user.accessToken,
  };

  useEffect(() => {
    dispatch(createUser(userData));
  }, []);

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
