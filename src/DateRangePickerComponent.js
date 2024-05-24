import React, { useState, useEffect } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';

const DateRangePickerComponent = ({ setStayDuration }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  useEffect(() => {
    if (startDate && endDate) {
      setStayDuration({
        startDate: startDate.format('YYYY-MM-DD'),
        endDate: endDate.format('YYYY-MM-DD'),
      });
    }
  }, [startDate, endDate]); // Removed setStayDuration to prevent infinite updates

  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
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
