const googleProfile = JSON.parse(localStorage.getItem("googleProfile"));
const linkedInProfile = JSON.parse(localStorage.getItem("linkedInProfile"));

const initialState = {
  googleProfile: googleProfile || null,
  linkedInProfile: linkedInProfile || null,
};

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTHENTICATE_USER_SUCCESS":
      return {
        ...state,
        googleProfile: action.payload,
      };
    case "AUTHENTICATE_LINKEDIN_USER_SUCCESS":
      return {
        ...state,
        linkedInProfile: action.payload,
      };
    case "LOGOUT_USER":
      return {
        googleProfile: null,
        linkedInProfile: null,
      };
    default:
      return state;
  }
};

export default currentUserReducer;
