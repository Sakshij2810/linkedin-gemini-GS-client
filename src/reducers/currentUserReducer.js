// // Initial state from localStorage or null
// const initialState = JSON.parse(localStorage.getItem("Profile")) || null;

// // Reducer to handle current user data
// const currentUserReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "FETCH_CURRENT_DATA":
//       return action.payload;

//     // Handle other actions if needed
//     // case "UPDATE_CURRENT_USER":
//     //   return { ...state, ...action.payload };

//     default:
//       return state;
//   }
// };

// export default currentUserReducer;

// reducers/currentUserReducer.js

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
