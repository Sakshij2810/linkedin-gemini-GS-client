import * as api from "../api";

//fetch sheet data
export const fetchSheetData = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_SHEET_DATA_REQUEST" });

    const { data } = await api.fetchSheetDataApi("/sheets");

    dispatch({ type: "FETCH_SHEET_DATA_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "FETCH_SHEET_DATA_FAIL",
      payload: error.response.data.message,
    });
  }
};

//clear errors
export const clearAttendanceError = () => async (dispatch) => {
  dispatch({ type: "CLEAR_ERRORS" });
};
