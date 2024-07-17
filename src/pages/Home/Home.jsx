// import "./Home.css";
// import React from "react";
// import { Link } from "react-router-dom";

// const Home = () => {
//   const handleLogin = () => {
//     window.location.href =
//       "https://linkedin-gemini-gs-server.onrender.com/api/v1/auth/google";
//   };

//   return (
//     <div className="home-main-container">
//       <div className="home-content">
//         <h1>Create Linkedin Post using Gemini and Google-Sheet</h1>
//         <button onClick={handleLogin}>Login with Google</button>
//       </div>
//     </div>
//   );
// };

// export default Home;

import "./Home.css";
import React from "react";
import { useNavigate } from "react-router-dom";

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
        <button onClick={handleLogin}>Login with Google</button>
      </div>
    </div>
  );
};

export default Home;
