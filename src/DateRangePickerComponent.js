// /workspaces/travel_tracker/src/DateRangePickerComponent.js
import React, { useState } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';

const DateRangePickerComponent = ({ setStayDuration }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);

    if (startDate && endDate) {
      setStayDuration({
        startDate: startDate.format('YYYY-MM-DD'),
        endDate: endDate.format('YYYY-MM-DD'),
      });
    }
  };

  return (
    <DateRangePicker
      startDate={startDate}
      startDateId="your_unique_start_date_id"
      endDate={endDate}
      endDateId="your_unique_end_date_id"
      onDatesChange={handleDatesChange}
      focusedInput={focusedInput}
      onFocusChange={setFocusedInput}
      numberOfMonths={1}
      isOutsideRange={() => false}
      displayFormat="YYYY-MM-DD"
    />
  );
};

export default DateRangePickerComponent;
