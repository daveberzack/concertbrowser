import React from "react";
import Moment from 'react-moment';
import Icon from "./ui/Icon.js";
import "../css/DateHeader.css";

const DateHeader = ({dateSelected, onDateChanged}) => {

  const shiftDateSelected = (amount) => {
    let newDate = dateSelected;
    newDate.setDate(dateSelected.getDate()+amount);
    onDateChanged( newDate );
  }
  
  return (
    <div className="date-header" >
        <a onClick={ ()=>{shiftDateSelected(-1)} }><Icon type="left" classes="icon-link icon-play icon-prev-date"/></a>
        <div className="date-text" alt="date"><Moment date={dateSelected} format="dddd, MMM D" /></div>
        <a onClick={ ()=>{shiftDateSelected(1)} }><Icon type="right" classes="icon-link icon-play icon-next-date"/></a>
    </div>
  );
};

export default DateHeader;
