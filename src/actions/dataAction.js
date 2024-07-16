import * as api from "../api";

//getting all data
export const getAllData = () => async (dispatch) => {
  try {
    dispatch({ type: "ALL_DATA_REQUEST" });

    const { data } = await api.getAllDataApi();

    dispatch({ type: "ALL_DATA_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "ALL_DATA_FAIL", payload: error.response.data.message });
  }
};

//Clearning errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: "CLEAR_ERRORS",
  });
};
