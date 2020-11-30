const ADD_TIMEZONE = 'ADD_TIMEZONE';
const ADD_TIMEZONE_SUCCESS = 'ADD_TIMEZONE_SUCCESS';
const ADD_TIMEZONE_FAILS = 'ADD_TIMEZONE_FAILS';

const REMOVE_TIMEZONE = 'REMOVE_TIMEZONE';
const REMOVE_TIMEZONE_SUCCESS = 'REMOVE_TIMEZONE_SUCCESS';
const REMOVE_TIMEZONE_FAILS = 'REMOVE_TIMEZONE_FAILS';

const RESET_SNACKBAR = 'RESET_SNACKBAR';

function addTimezone(timezone) {
  const request = {
    method: 'GET',
    headers:{
      'Content-Type': 'application/json'
    }
  };

  return dispatch => {
    dispatch({
      type: ADD_TIMEZONE,
    });

    return fetch(`/api/timezones/${timezone}`, request)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          dispatch({
            type: ADD_TIMEZONE_FAILS,
          });
          throw Error(`Request rejected with status ${response.status}`);
        }
      })
      .then(json => dispatch(addTimezoneSuccess(json)));
  }
}

function addTimezoneSuccess(json) {
  return {
    type: ADD_TIMEZONE_SUCCESS,
    payload: json
  }
}

function removeTimezone(timezone) {
  const request = {
    method: 'DELETE',
    headers:{
      'Content-Type': 'application/json'
    }
  };

  return dispatch => {
    dispatch({
      type: REMOVE_TIMEZONE,
    });

    return fetch(`/api/timezones/${timezone}`, request)
      .then(response => {
        if (response.ok) {
          return dispatch(removeTimezoneSuccess(timezone))
        } else {
          dispatch({
            type: REMOVE_TIMEZONE_FAILS,
          });
      
          throw Error(`Request rejected with status ${response.status}`);
        }
      });
  }
}

function removeTimezoneSuccess(json) {
  return {
    type: REMOVE_TIMEZONE_SUCCESS,
    payload: json
  }
}

function resetSnackbar() {
  return dispatch => {
    dispatch({
      type: RESET_SNACKBAR,
    });
  };
}

export { addTimezone, removeTimezone, resetSnackbar }