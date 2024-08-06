import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../actions/setCurrentUserAction.js";

const OAuthCallback = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleAuthentication = async () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const user = JSON.parse(decodeURIComponent(params.get("user")));

        if (user) {
          // Store Google token
          localStorage.setItem("googleAccessToken", user.accessToken);
          // Store user profile
          localStorage.setItem("googleProfile", JSON.stringify(user.profile));

          dispatch(setCurrentUser(user));
          navigate("/dashboard");
        }
      } catch (error) {
        console.error("Error during authentication", error);
      }
    };

    handleAuthentication();
  }, [dispatch, navigate]);

  return <div>Loading...</div>;
};

export default OAuthCallback;
