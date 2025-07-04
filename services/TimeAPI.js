// services/TimeAPI.js
//
// Scope: The file services/TimeAPI.js includes implementation of two key functions: fetchTimeZoneData and fetchMultipleTimeZonesData, handling API requests to fetch time zone data using axios. Environmental variables and error handling approaches are addressed, aligning with robust backend service patterns. The file integrates dotenv for environment configurations and exports the functions for use in other parts of the backend.

const axios = require('axios');
require('dotenv').config();
const fetchTimeZoneData = async (timezoneId) => {
  try {
    const response = await axios.get(`${process.env.API_URL}/timezones/${timezoneId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching timezone data:', error);
    throw new Error('Unable to fetch timezone data');
  }
};
const fetchMultipleTimeZonesData = async (timezoneIds) => {
  try {
    const promises = timezoneIds.map(id => axios.get(`${process.env.API_URL}/timezones/${id}`));
    const responses = await Promise.all(promises);
    return responses.map(res => res.data);
  } catch (error) {
    console.error('Error fetching multiple timezones data:', error);
    throw new Error('Unable to fetch multiple timezones data');
  }
};
module.exports = { fetchTimeZoneData, fetchMultipleTimeZonesData };