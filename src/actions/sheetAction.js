import * as api from "../api";

export const fetchSheetData = (sheetId) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_SHEET_DATA_REQUEST" });

    const token = JSON.parse(localStorage.getItem("Profile")).accessToken;

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

//get sheet id and save it to database
export const getSheetId = (sheetIdData) => async (dispatch) => {
  try {
    dispatch({ type: "GET_SHEETID_REQUEST" });
    // console.log(sheetIdData);

    const { data } = await api.getSheetIdApi(sheetIdData);

    dispatch({ type: "GET_SHEETID_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "GET_SHEETID_FAIL",
      payload: error.response.data.message,
    });
  }
};

//get saved sheet id from database
export const getSheetIdFromDatabase = (email) => async (dispatch) => {
  try {
    // console.log(sheetIdData);

    const { data } = await api.getSheetIdFromDatabaseApi(email);

    dispatch({ type: "SHEETIS_DATABASE_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "SHEETIS_DATABASE__FAIL",
      payload: error.response.data.message,
    });
  }
};

// Clear errors
export const clearErrors = () => (dispatch) => {
  dispatch({ type: "CLEAR_ERRORS" });
};
