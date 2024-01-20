import React from "react";
import timeSlotsForDisplay from "../data/data";
import './container.css';

const eventsData = [
  { start: 0, end: 60 },   // 9:00 AM - 10:00 AM
  { start: 30, end: 90 },  // 9:30 AM - 10:30 AM
  { start: 90, end: 150 }, // 10:30 AM - 11:30 AM
  // Add more events as needed
];




const Calendar = () => {

  const getTimeRange = (startCount, endCount) => {
  const start = new Date();
  start.setHours(9, 0, 0, 0); // Set the start time to 9:00 AM

  const startTime = new Date(start.getTime() + startCount * 60000);
  const endTime = new Date(start.getTime() + endCount * 60000);
  return {
   
    startTime: startTime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
    endTime: endTime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
  
  };
};

  const displayTime = timeSlotsForDisplay.map((item) => {
    const event = eventsData.find((event) => {
      const timeRange = getTimeRange(event.start, event.end);
      console.log(timeRange.startTime === item.time  ||
        timeRange.endTime === item.halftime)
      return (
        timeRange.startTime === item.time  ||
        timeRange.endTime === item.halftime
      );
    });
    
    return(
      <div key={item.id}>
          <div className="timeContainer_event">
            {item.time}
              {event ? 'Occupied' : ''}    
          </div>
          <div className="timeContainer_event">
            {item.halftime !== '' ? item.halftime : null}
            {event ? 'Occupied' : ''}
          </div> 
      </div>
    )
  })

  return(
    <>
      <div className="timeContainer">
        {displayTime}
      </div>
    </>
  )
  }

export default Calendar;


// 9 = 0
// if 9 is 0 then every minute after 9am is 1minute
//we have 720 minutes
//24 intervals of 30 minutes
//