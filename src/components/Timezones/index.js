import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTimezone } from '../../redux/actions'
import './Timezones.css';

const Component = () => {
  const dispatch = useDispatch();
  const selectedTimezones = useSelector(state => state.selectedTimezones);

  const handleRemove = timezone => {
    dispatch(removeTimezone(timezone));
  };


  return (
    <div className="selected-timezones">
      { selectedTimezones.map(timezone => {
        return (
          <div className="timezone" key={timezone.name}>
            <span className="timezone__name">{timezone.name}</span>
            <span className="timezone__date">{timezone.date}</span>
            <span className="timezone__time">{timezone.time}</span>
            <span className="timezone__remove" onClick={() => handleRemove(timezone.name)}>x</span>
          </div>
        );
      })}
    </div>
  );
};

export default Component;