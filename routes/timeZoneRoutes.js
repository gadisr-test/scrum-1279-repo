// routes/timeZoneRoutes.js
//
// Scope: The `timeZoneRoutes.js` file includes necessary module imports for Express and timeZoneController. It defines a setup function, `setupTimeZoneRoutes`, which sets up the necessary API routes related to time zone management on a given Express application instance. This setup includes endpoints for CRUD operations on time zones and a specific route to handle re-ordering of entries. The router is then bound to the '/api' path on the Express application.

const express = require('express');
const timeZoneController = require('../controllers/timeZoneController');
function setupTimeZoneRoutes(app) {
  const router = express.Router();
  router.post('/timezones', timeZoneController.addTimeZone);
  router.get('/timezones', timeZoneController.getTimeZones);
  router.put('/timezones/:id', timeZoneController.updateTimeZone);
  router.delete('/timezones/:id', timeZoneController.deleteTimeZone);
  app.use('/api', router);
}
module.exports = { setupTimeZoneRoutes };