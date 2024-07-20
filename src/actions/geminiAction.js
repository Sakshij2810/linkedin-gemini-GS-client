import * as api from "../api";

export const createGeminiResponse = (title, imageUrls) => async (dispatch) => {
  try {
    dispatch({ type: "GEMINI_RESPONSE_REQUEST" });

    const { data } = await api.createGeminiResponseApi(title, imageUrls);

    dispatch({ type: "GEMINI_RESPONSE_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "GEMINI_RESPONSE_FAIL",
      payload: error.response.data.message,
    });
  }
};

// Clear errors
export const clearErrors = () => (dispatch) => {
  dispatch({ type: "CLEAR_ERRORS" });
};
