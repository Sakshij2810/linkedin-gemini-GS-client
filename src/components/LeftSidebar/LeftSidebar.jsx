// import "./LeftSidebar.css";
// import React from "react";
// import { AiFillAppstore } from "react-icons/ai";
// import { MdLogout } from "react-icons/md";
// import { NavLink } from "react-router-dom";

// const LeftSidebar = () => {
//   return (
//     <div className="leftsidebar-main-container">
//       <NavLink
//         to="/dashboard"
//         className="block-container"
//         activeClassName="active"
//         style={{ textDecoration: "none" }}
//       >
//         <AiFillAppstore style={{ fontSize: "1.5rem" }} />
//         <p>All Apps</p>
//       </NavLink>
//       <NavLink
//         to="/"
//         className="block-container"
//         activeClassName="active"
//         style={{ textDecoration: "none" }}
//       >
//         <MdLogout style={{ fontSize: "1.5rem" }} />
//         <p>Logout</p>
//       </NavLink>
//     </div>
//   );
// };

// export default LeftSidebar;

import "./LeftSidebar.css";
import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../actions/authActions.js"; // Adjust path as necessary

const LeftSidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <div className="leftsidebar-main-container">
      <NavLink
        to="/dashboard"
        className="block-container"
        activeClassName="active"
        style={{ textDecoration: "none" }}
      >
        <AiFillAppstore style={{ fontSize: "1.5rem" }} />
        <p>All Apps</p>
      </NavLink>
      <div
        className="block-container"
        onClick={handleLogout}
        style={{ textDecoration: "none", cursor: "pointer" }}
      >
        <MdLogout style={{ fontSize: "1.5rem" }} />
        <p>Logout</p>
      </div>
    </div>
  );
};

export default LeftSidebar;
