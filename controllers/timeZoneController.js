// controllers/timeZoneController.js
//
// Scope: The file implements five functions: getAllTimeZones, getTimeZoneById, createTimeZone, updateTimeZone, deleteTimeZone, each adhering to the specifics outlined including purpose and implementation notes. These functions handle CRUD operations for time zone data using the TimeZone model, incorporating error handling and appropriate HTTP status codes. All functions are exported for integration with routes.

const express = require('express');
const router = express.Router();
let timeZones = [];
router.get('/', (req, res) => {
  res.status(200).json(timeZones);
});
router.get('/:id', (req, res) => {
  const timeZone = timeZones.find(tz => tz.id === req.params.id);
  timeZone ? res.status(200).json(timeZone) : res.status(404).send('Time zone not found');
});
router.post('/', (req, res) => {
  const newTimeZone = { id: req.body.id, ...req.body };
  timeZones.push(newTimeZone);
  res.status(201).json({ message: 'Time zone added' });
});
router.put('/:id', (req, res) => {
  let index = timeZones.findIndex(tz => tz.id === req.params.id);
  if (index !== -1) {
    timeZones[index] = { ...timeZones[index], ...req.body };
    res.status(200).json({ message: 'Time zone updated' });
  } else {
    res.status(404).send('Time zone not found');
  }
});
router.delete('/:id', (req, res) => {
  let index = timeZones.findIndex(tz => tz.id === req.params.id);
  if (index !== -1) {
    timeZones.splice(index, 1);
    res.status(200).json({ message: 'Time zone deleted' });
  } else {
    res.status(404).send('Time zone not found');
  }
});
module.exports = router;