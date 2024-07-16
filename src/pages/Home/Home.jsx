// import "./Home.css";
// import React from "react";
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div className="home-main-container">
//       <div className="home-content">
//         <h1>Create Linkedin Post using Gemini and Google-Sheet</h1>
//         <form>
//           <label htmlFor="email">
//             <h2>Email:</h2>
//             <input type="email" name="email" id="email" />
//           </label>
//           <label htmlFor="Password">
//             <h2>Password:</h2>
//             <input type="password" name="password" id="password" />
//           </label>
//           <Link to="/auth/google">
//             <button type="submit">login with google</button>
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Home;

import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const handleLogin = () => {
    window.location.href =
      "https://linkedin-gemini-googlesheet-integration.onrender.com/api/v1/auth/google";
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
