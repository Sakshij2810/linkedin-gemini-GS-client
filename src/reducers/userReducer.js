export const createUserReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case "CREATE_USER_REQUEST":
      return {
        loading: true,
        userData: [],
      };

    case "CREATE_USER_SUCCESS":
      return {
        loading: false,
        userData: action.payload,
      };

    case "CREATE_USER_FAIL":
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
