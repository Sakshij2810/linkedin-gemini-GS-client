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
          dispatch(setCurrentUser(user));
          localStorage.setItem("Profile", JSON.stringify(user));
          navigate("/dashboard");
        }
      } catch (error) {
        console.error("Error during authentication", error);
      }
    };

    handleAuthentication();
  }, [dispatch, navigate]);

  return <div>Loading...</div>; // Loading indicator while authenticating
};

export default OAuthCallback;
