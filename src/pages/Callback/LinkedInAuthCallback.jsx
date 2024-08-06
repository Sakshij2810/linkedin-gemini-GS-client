import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../actions/setCurrentUserAction.js";

const LinkedInAuthCallback = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleLinkedInAuth = async () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const linkedinData = JSON.parse(decodeURIComponent(params.get("user")));

        if (linkedinData) {
          // Store LinkedIn token
          localStorage.setItem("linkedinAccessToken", linkedinData.accessToken);
          // Store user profile
          localStorage.setItem(
            "linkedinProfile",
            JSON.stringify(linkedinData.profile)
          );

          dispatch(setCurrentUser(linkedinData));
          navigate("/dashboard");
        }
      } catch (error) {
        console.error("Error during authentication", error);
      }
    };

    handleLinkedInAuth();
  }, [dispatch, navigate]);

  return <div>Loading...</div>;
};

export default LinkedInAuthCallback;
