import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../../actions/authActions.js";

const OAuthCallback = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleAuthentication = async () => {
      try {
        const success = await dispatch(authenticateUser());

        if (success) {
          // Redirect to dashboard upon successful authentication
          navigate("/dashboard");
        } else {
          // Handle authentication failure if needed
          console.error("Authentication failed");
          // Redirect or handle error state
        }
      } catch (error) {
        console.error("Error during authentication", error);
        // Handle error accordingly, e.g., redirect to an error page
      }
    };

    handleAuthentication();
  }, [dispatch, navigate]);

  return <div>Loading...</div>; // Loading indicator while authenticating
};

export default OAuthCallback;
