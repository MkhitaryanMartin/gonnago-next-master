"use client"

import React, { useState} from 'react';
import Scroller from '../scroller';
import "./style.css"

function Calendar() {
  const [year, setYear] = useState(new Date().getFullYear());

  const months = Array.from({ length: 12 }, (_, index) => index); 

  const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur'];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const renderMonth = (monthIndex) => {
    const daysInMonth = getDaysInMonth(year, monthIndex);

    const firstDayOfMonth = new Date(year, monthIndex, 1).getDay();

    const calendar = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      calendar.push(<div key={`blank-${i}`} className="empty"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const currentDay = new Date(year, monthIndex, day);
      const dayOfWeek = daysOfWeek[currentDay.getDay()];
      calendar.push(
        <div key={day} className="day">
         <p>{dayOfWeek}</p> 
         <p>{day} </p>
        </div>
      );
    }

    return calendar;
  };

  return (
    <Scroller className="calendar">
      {months.map((month) => (
        <li key={month} className="month">
          <div className="month-name">{new Date(year, month).toLocaleString('en-US', { month: 'long' })}</div>
          <div className="days">{renderMonth(month)}</div>
        </li>
      ))}
    </Scroller>
  );
}

export default Calendar;
