import * as api from "../api";

export const createUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "CREATE_USER_REQUEST" });

    const { data } = await api.createUserApi(userData);

    dispatch({ type: "CREATE_USER_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "CREATE_USER_FAIL",
      payload: error.response.data.message,
    });
  }
};

// Clear errors
export const clearErrors = () => (dispatch) => {
  dispatch({ type: "CLEAR_ERRORS" });
};
