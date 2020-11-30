import React from "react";
import './App.css';
import SearchBox from "../SearchBox";
import Timezones from "../Timezones";


const App = () => {
  return (
    <div className="container">
      <SearchBox />
      <Timezones />
    </div>
  );
};

export default App;