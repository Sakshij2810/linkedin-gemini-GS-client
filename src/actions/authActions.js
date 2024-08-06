import * as api from "../api";
import { setCurrentUser } from "./setCurrentUserAction.js";

// Action to authenticate user and fetch current user data
export const authenticateUser = () => async (dispatch) => {
  try {
    dispatch({ type: "AUTHENTICATE_USER_REQUEST" });

    const { data } = await api.redirectUserApi(); // Adjust API call as per your backend setup
    dispatch({ type: "AUTHENTICATE_USER_SUCCESS", payload: data });

    localStorage.setItem("googleProfile", JSON.stringify(data)); // Save Google profile to local storage
    dispatch(setCurrentUser({ googleProfile: data }));

    // Return true or success status if needed
    return true;
  } catch (error) {
    dispatch({
      type: "AUTHENTICATE_USER_FAIL",
      payload: error.response.data.message,
    });

    // Handle error accordingly
    return false;
  }
};

// Action to authenticate LinkedIn user and fetch current user data
export const authenticateLinkedInUser = () => async (dispatch) => {
  try {
    dispatch({ type: "AUTHENTICATE_LINKEDIN_USER_REQUEST" });

    const { data } = await api.redirectLinkedInUserApi(); // Adjust API call as per your backend setup
    dispatch({ type: "AUTHENTICATE_LINKEDIN_USER_SUCCESS", payload: data });

    localStorage.setItem("linkedInProfile", JSON.stringify(data)); // Save LinkedIn profile to local storage
    dispatch(setCurrentUser({ linkedInProfile: data }));

    // Return true or success status if needed
    return true;
  } catch (error) {
    dispatch({
      type: "AUTHENTICATE_LINKEDIN_USER_FAIL",
      payload: error.response.data.message,
    });

    // Handle error accordingly
    return false;
  }
};

// Action to log out user
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("googleProfile");
  localStorage.removeItem("linkedInProfile");
  dispatch(setCurrentUser({ googleProfile: null, linkedInProfile: null }));
};

// Action to clear authentication errors
export const clearAuthErrors = () => (dispatch) => {
  dispatch({ type: "CLEAR_AUTH_ERRORS" });
};
