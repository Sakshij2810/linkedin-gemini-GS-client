//get sheet data
export const sheetDataReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case "FETCH_SHEET_DATA_REQUEST":
      return {
        loading: true,
        sheetData: [],
      };

    case "FETCH_SHEET_DATA_SUCCESS":
      return {
        loading: false,
        sheetData: action.payload,
      };

    case "FETCH_SHEET_DATA_FAIL":
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

//get sheet id for database
export const sheetIdReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case "GET_SHEETID_REQUEST":
      return {
        loading: true,
        sheetIdData: [],
      };

    case "GET_SHEETID_SUCCESS":
      return {
        loading: false,
        sheetIdData: action.payload,
      };

    case "GET_SHEETID_FAIL":
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

//get sheet id from database
// export const sheetIdFromDatabaseReducer = (state = { data: "" }, action) => {
//   switch (action.type) {
//     case "SHEETIS_DATABASE_SUCCESS":
//       return {
//         loading: false,
//         sheetIdFromDatabase: action.payload,
//       };

//     case "SHEETIS_DATABASE__FAIL":
//       return {
//         loading: false,
//         error: action.payload,
//       };

//     case "CLEAR_ERRORS":
//       return {
//         ...state,
//         error: null,
//       };

//     default:
//       return state;
//   }
// };
