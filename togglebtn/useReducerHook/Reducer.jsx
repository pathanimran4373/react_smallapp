
export const INITIAL_STATE = {
    loading: false,
    data: [],
    error: false
}

export const dataReducer = (state, action) => {
    switch (action.type) {
      case "START_FETCHING":
        return { ...state, loading: true, error: false };
      case "FETCHING_SUCCESS":
        return { ...state, loading: false, data: action.payload, error: false };
      case "FETCHING_ERROR":
        return { ...state, loading: false, error: true };
      default:
        return state;
    }
  };