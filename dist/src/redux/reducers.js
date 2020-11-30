"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const timezonesReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TIMEZONE":
      return { ...state,
        loading: true
      };

    case "ADD_TIMEZONE_SUCCESS":
      return { ...state,
        selectedTimezones: [...state.selectedTimezones, action.payload],
        loading: false,
        snackbar: {
          type: 'success',
          message: `Timezone ${action.payload.name} added`
        }
      };

    case "ADD_TIMEZONE_FAILS":
      return { ...state,
        loading: false,
        snackbar: {
          type: 'error',
          message: `Error adding timezone`
        }
      };

    case "REMOVE_TIMEZONE":
      return { ...state,
        loading: true
      };

    case "REMOVE_TIMEZONE_SUCCESS":
      return { ...state,
        selectedTimezones: state.selectedTimezones.filter(timezone => timezone.name !== action.payload),
        loading: false,
        snackbar: {
          type: 'success',
          message: `Timezone ${action.payload} removed`
        }
      };

    case "REMOVE_TIMEZONE_FAILS":
      return { ...state,
        loading: false,
        snackbar: {
          type: 'error',
          message: `Error removing timezone`
        }
      };

    case "RESET_SNACKBAR":
      return { ...state,
        snackbar: null
      };

    default:
      return state;
  }
};

var _default = timezonesReducer;
exports.default = _default;