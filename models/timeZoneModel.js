// models/timeZoneModel.js
//
// Scope: The file 'timeZoneModel.js' includes a header comment detailing the file's path and purpose. It imports the mongoose library, crucial for schema definition and model integration with MongoDB. The TimeZone schema is defined with necessary fields like timezone name, UTC offset, and daylight saving indicator, each with type constraints and required attributes. The timestamps true option in the schema records the creation and update times automatically. Lastly, the TimeZone model is compiled and exported for use in other parts of the application, facilitating CRUD operations through the TimeZoneService.

const mongoose = require('mongoose');
const timeZoneSchema = new mongoose.Schema({
  name: { type: String, required: true },
  utcOffset: { type: String, required: true },
  daylightSaving: { type: Boolean, required: true }
}, { timestamps: true });
const TimeZone = mongoose.model('TimeZone', timeZoneSchema);
module.exports = TimeZone;