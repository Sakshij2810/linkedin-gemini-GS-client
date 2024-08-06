import * as api from "../api";

// Fetch sheet data using the access token stored as googleAccessToken
export const fetchSheetData = (sheetId) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_SHEET_DATA_REQUEST" });

    const token = localStorage.getItem("googleAccessToken");

    const { data } = await api.sendTokenToSheetApi(token, sheetId);
    // console.log(data);

    dispatch({ type: "FETCH_SHEET_DATA_SUCCESS", payload: data.values });
  } catch (error) {
    dispatch({
      type: "FETCH_SHEET_DATA_FAIL",
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

// Save the sheet ID to the database
export const getSheetId = (sheetIdData) => async (dispatch) => {
  try {
    dispatch({ type: "GET_SHEETID_REQUEST" });

    const { data } = await api.getSheetIdApi(sheetIdData);

    dispatch({ type: "GET_SHEETID_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "GET_SHEETID_FAIL",
      payload: error.response.data.message,
    });
  }
};

// Clear errors
export const clearErrors = () => (dispatch) => {
  dispatch({ type: "CLEAR_ERRORS" });
};
