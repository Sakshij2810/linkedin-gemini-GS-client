//get sheet data
export const geminiContentReducer = (state = { data: "" }, action) => {
  switch (action.type) {
    case "GEMINI_RESPONSE_REQUEST":
      return {
        loading: true,
        content: "",
      };

    case "GEMINI_RESPONSE_SUCCESS":
      return {
        loading: false,
        content: action.payload,
      };

    case "GEMINI_RESPONSE_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    case "CLEAR_ERRORS":
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const geminiToDatabaseReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case "GEMINI_DATABASE_REQUEST":
      return {
        loading: true,
        geminiData: [],
      };

    case "GEMINI_DATABASE_SUCCESS":
      return {
        loading: false,
        geminiData: action.payload,
      };

    case "GEMINI_DATABASE_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    case "CLEAR_ERRORS":
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
