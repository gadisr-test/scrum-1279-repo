// routes/timeZoneRoutes.js
//
// Scope: The file timeZoneRoutes.js includes function setupTimeZoneRoutes that integrates timeZoneController methods to set up CRUD routes for handling time zone operations on an Express app instance. Routes for listing, creating, updating, and deleting time zones are defined and tied to specific controller functions.

const express = require('express');
const timeZoneController = require('../controllers/timeZoneController');
function setupTimeZoneRoutes(app) {
  const router = express.Router();
  router.get('/timezones', timeZoneController.listTimeZones);
  router.post('/timezones', timeZoneController.createTimeZone);
  router.put('/timezones/:id', timeZoneController.updateTimeZone);
  router.delete('/timezones/:id', timeZoneController.deleteTimeZone);
  app.use('/api', router);
}
module.exports = setupTimeZoneRoutes;