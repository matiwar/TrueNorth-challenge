import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import './App.css';
import SearchBox from "../SearchBox";
import Timezones from "../Timezones";

import { resetSnackbar } from '../../redux/actions'

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading);
  const snackbar = useSelector(state => state.snackbar);

  const handleClose = () => {
    dispatch(resetSnackbar());
  };

  return (
    <div className="container">
      <SearchBox />
      <Timezones />
      { loading && (
        <div className="loading">
          <CircularProgress />
        </div>
      )}

      { snackbar && (
        <Snackbar open autoHideDuration={3000} onClose={handleClose}>
          <Alert severity={snackbar.type}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      )}
    </div>
  );
};

export default App;