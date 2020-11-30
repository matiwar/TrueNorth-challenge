const timezonesReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TIMEZONE":
      return {
        ...state,
      };

    case "ADD_TIMEZONE_SUCCESS":
      return {
        ...state,
        selectedTimezones: [...state.selectedTimezones, action.payload],
      };

    case "REMOVE_TIMEZONE":
      return {
        ...state,
      };

    case "REMOVE_TIMEZONE_SUCCESS":
      return {
        ...state,
        selectedTimezones: state.selectedTimezones.filter(timezone => timezone.name !== action.payload),
      };

    default:
      return state;
  }
};

export default timezonesReducer;