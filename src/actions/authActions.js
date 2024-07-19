import * as api from "../api";
import { setCurrentUser } from "./setCurrentUserAction";

// Action to authenticate user and fetch current user data
export const authenticateUser = () => async (dispatch) => {
  try {
    dispatch({ type: "AUTHENTICATE_USER_REQUEST" });

    const { data } = await api.redirectUserApi(); // Adjust API call as per your backend setup
    dispatch({ type: "AUTHENTICATE_USER_SUCCESS", payload: data });

    localStorage.setItem("Profile", JSON.stringify(data)); // Save profile to local storage
    dispatch(setCurrentUser(data));

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

// Action to log out user
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("Profile");
  dispatch(setCurrentUser(null));
};

// Action to clear authentication errors
export const clearAuthErrors = () => (dispatch) => {
  dispatch({ type: "CLEAR_AUTH_ERRORS" });
};
