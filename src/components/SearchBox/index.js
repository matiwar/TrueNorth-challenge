import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './SearchBox.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { addTimezone } from '../../redux/actions'

const Component = () => {
  const dispatch = useDispatch();
  const timezones = useSelector(state => state.timezones);
  const selectedTimezones = useSelector(state => state.selectedTimezones);

  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleChange = timezone => {
    dispatch(addTimezone(timezone));
    setValue(null);
    setInputValue("")
  };

  return (
    <>
     { timezones && timezones.length > 0 && (
       <form autoComplete="off" className="searchbox">
        <Autocomplete
          id="search-timezone"
          value={value}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          onChange={(event, newValue) => {
            handleChange(newValue);
          }}
          options={timezones}
          filterOptions={(options, state) => {
            return options.filter(option => {
              return !selectedTimezones.find(timezone => timezone.name === option);
            })
          }}
          fullWidth
          autoHighlight
          renderInput={(params) => (
            <TextField
              {...params}
              label="Timezone"
              margin="normal"
              variant="outlined"
              InputProps={{ ...params.InputProps, type: 'search' }}
            />)}
        />
      </form>
     )}

     { !timezones || timezones.length === 0 && <h2>Error getting timezones</h2>}
    </>
  );
};

export default Component;