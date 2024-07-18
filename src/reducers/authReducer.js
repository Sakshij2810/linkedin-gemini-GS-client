const initialState = {
  loading: false,
  user: null,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CURRENT_USER_REQUEST":
      return { ...state, loading: true };
    case "FETCH_CURRENT_USER_SUCCESS":
      return { ...state, loading: false, user: action.payload };
    case "FETCH_CURRENT_USER_FAIL":
      return { ...state, loading: false, error: action.payload };

    case "CLEAR_ERRORS":
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
