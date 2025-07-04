// models/TimeZone.js
//
// Scope: The provided script defines a MongoDB schema and model for time zones using Mongoose. The schema includes fields for the name, UTC offset, daylight saving observation, and an optional city associated with the time zone. After defining these attributes, the script creates and exports a model called 'TimeZone', which can be used to interact with the 'timezones' collection in the database for CRUD operations.

const mongoose = require('mongoose');
const timeZoneSchema = new mongoose.Schema({
  name: { type: String, required: true },
  utcOffset: { type: Number, required: true },
  observesDST: { type: Boolean, default: false },
  city: { type: String }
});
const TimeZone = mongoose.model('TimeZone', timeZoneSchema);
module.exports = TimeZone;