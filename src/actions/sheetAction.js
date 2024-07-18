import * as api from "../api";

export const fetchSheetData = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_SHEET_DATA_REQUEST" });

    const { data } = await api.fetchSheetDataApi();

    dispatch({ type: "FETCH_SHEET_DATA_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "FETCH_SHEET_DATA_FAIL",
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

//clear errors
export const clearErrors = () => (dispatch) => {
  dispatch({ type: "CLEAR_ERRORS" });
};
