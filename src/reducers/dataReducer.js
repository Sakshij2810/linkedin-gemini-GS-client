// Initial state
const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_DATA_REQUEST":
      return {
        loading: true,
        ...state,
      };

    case "ALL_DATA_SUCCESS":
      return {
        loading: false,
        ...state,
        data: action.payload,
      };

    case "ALL_DATA_FAIL":
      return {
        loading: false,
        ...state,
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
