// src/components/Calendar/Calendar.tsx

import React, { useState } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";

const StyledCalendar = styled(Calendar)`
  max-width: 233px;
  border-radius: 5px;
  pointer-events: none;
  display: inline-block;
  margin-left: 25px;
  padding: 5px;
  background-color: #6b6a6adf;

  .react-calendar__tile--active {
    background-color: #82bff0;
    border: none;
    border-top: 2px solid #2991ec;
    border-left: 3px solid #2991ec;
    color: #333;
    font-weight: bold;
  }

  .react-calendar__navigation {
    padding-bottom: 3px;
    border-bottom: 1px solid #ddd;
    text-align: center;
  }

  .react-calendar__navigation__label {
    background-color: #82bff0;
    border: none;
    border-top: 2px solid #2991ec;
    border-left: 3px solid #2991ec;
    color: #000;
    font-weight: bold;
  }

  .react-calendar__navigation__arrow {
    display: none;
  }
`;

const CustomCalendar: React.FC = () => {
  const [birthdate] = useState(new Date("1995-12-18"));

  return (
    <StyledCalendar
      value={birthdate}
      showNeighboringMonth={false}
      calendarType="iso8601"
      onChange={() => {}}
      className="calendar"
    />
  );
};

export default CustomCalendar;
