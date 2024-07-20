import * as api from "../api";

export const fetchSheetData = (sheetId) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_SHEET_DATA_REQUEST" });

    const token = JSON.parse(localStorage.getItem("Profile")).accessToken;

    const { data } = await api.sendTokenToSheetApi(token, sheetId);

    dispatch({ type: "FETCH_SHEET_DATA_SUCCESS", payload: data.values });
  } catch (error) {
    dispatch({
      type: "FETCH_SHEET_DATA_FAIL",
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

// Clear errors
export const clearErrors = () => (dispatch) => {
  dispatch({ type: "CLEAR_ERRORS" });
};
