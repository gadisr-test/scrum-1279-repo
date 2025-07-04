// src/components/TimeZoneComponent.jsx
//
// Scope: This file implements the TimeZoneComponent with a custom hook useDayOrNight for calculating if it's day or night in a specific timezone, which is used inside the renderTimeZone method to display each timezone with an option to edit or remove. This component utilizes a service (TimeZoneService) for modifying time zones and provides a responsive interface for user interactions.

import React, { useState, useEffect } from 'react';
import TimeZoneService from '../services/TimeZoneService';
function useDayOrNight(timezone) {
  const [isDay, setIsDay] = useState(null);
  useEffect(() => {
    const hour = new Date().toLocaleTimeString('en-US', { timeZone: timezone }).split(':')[0];
    setIsDay(hour > 6 && hour < 18);
  }, [timezone]);
  return isDay;
}
function TimeZoneComponent() {
  const [timezones, setTimezones] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await TimeZoneService.getAllTimezones();
      setTimezones(res.data);
    }
    fetchData();
  }, []);
  const addTimeZone = async (tz) => {
    const res = await TimeZoneService.addTimezone(tz);
    setTimezones([...timezones, res.data]);
  };
  const removeTimeZone = async (id) => {
    await TimeZoneService.removeTimezone(id);
    setTimezones(timezones.filter(tz => tz.id !== id));
  };
  return (
    <div>
      {timezones.map(tz => (
        <div key={tz.id}>
          <p>{`Timezone: ${tz.name}`}</p>
          <p>{`Status: ${useDayOrNight(tz.name) ? 'Day' : 'Night'}`}</p>
          <button onClick={() => removeTimeZone(tz.id)}>Remove</button>
          <button onClick={() => addTimeZone(tz)}>Edit</button>
        </div>
      ))}
    </div>
  );
}
export default TimeZoneComponent;