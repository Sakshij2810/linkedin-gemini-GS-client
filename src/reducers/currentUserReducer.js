const initialState = JSON.parse(localStorage.getItem("Profile")) || null;

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CURRENT_DATA":
      return action.payload;
    default:
      return state;
  }
};

export default currentUserReducer;
