import React from "react";
import Preview from "./Preview.js"
import Logotype from "./ui/Logotype.js"
import DateHeader from "./DateHeader.js";
import "../css/Header.css";

const Header = ({dateSelected, onDateChanged, previewQuery, previewPlaying, previewIndex}) => {

  return (
      <div id="calendar-header" className="sticky-top">
        <div id="calendar-header-inner">
          <Logotype/>
          <DateHeader dateSelected={dateSelected} onDateChanged={onDateChanged} />
          <Preview query={previewQuery} isPlaying={previewPlaying} resultIndex={previewIndex} />
        </div>
      </div>
  );
};

export default Header;