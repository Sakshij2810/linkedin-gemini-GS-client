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
