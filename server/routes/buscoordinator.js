const express = require('express');
const router = express.Router();
const busCoordinatorModel = require('../model/buscoordinatorModel');
const sendResponse = require('./send-response');

// Create instance of busCoordinatorModel class.
const busCoordinator = new busCoordinatorModel();

// Route to add busCoordinator.
router.post('/add', function (req, res, next) {
  // Calling addBusCoordinator method of busCoordinatorModel class by busCoordinator instance.

  const databaseResponse = busCoordinator.addBusCoordinator(req);
  res.send(databaseResponse);
});

// Route to show busCoordinator.
router.get('/show', async function (req, res, next) {
  if (req.query.busCoordinatorId) {
    // Calling showBusCoordinatorById method of busCoordinatorModel class by busCoordinator instance.
    const databaseResponse = await busCoordinator.showBusCoordinatorById(req);
    sendResponse(res, databaseResponse, 'User details fetched.', false);

  } else if (req.query.busCoordinatorEmail) {
    // Calling showBusCoordinatorByEmail method of busCoordinatorModel class by busCoordinator instance.
    const databaseResponse = await busCoordinator.showBusCoordinatorByEmail(req);
    sendResponse(res, databaseResponse, 'User email exist.', false);

  } else {
    // Calling showBusCoordinator method of busCoordinatorModel class by busCoordinator instance.
    const databaseResponse = await busCoordinator.showBusCoordinator(req);
    sendResponse(res, databaseResponse, 'User details fetched.', false);
  }
});

// Route to remove busCoordinator.
router.delete('/remove', function (req, res, next) {
  // Calling removeBusCoordinator method of busCoordinatorModel class by busCoordinator instance.
  const databaseResponse = busCoordinator.removeBusCoordinator(req);
  res.send(databaseResponse);
});

// Route to update busCoordinator.
router.post('/update', async function (req, res, next) {
  // Calling updateBusCoordinatorPhoto method of busCoordinatorModel class by busCoordinator instance.
  const databaseResponse = await busCoordinator.updateBusCoordinator(req);
  res.send(databaseResponse);
});


// Route to update busCoordinator.
router.post('/updateAllDetails', async function (req, res, next) {
  // Calling updateBusCoordinatorAllDetails method of busCoordinatorModel class by busCoordinator instance.
  const databaseResponse = await busCoordinator.updateBusCoordinatorAllDetails(req);
  sendResponse(res, databaseResponse, 'User details fetched.', false);
});

router.get('/currentLocation', async function (req, res, next) {
  // Calling updateParent method of parentModel class by parent instance.
  const data = busCoordinator.getLocationData(); // get current location data
  data.then(response => {
    console.log(response);
    /*  let curLocation = response.driverlog[0].current_location;
     let data = curLocation[curLocation.length - 1]; */ // Get last updated location and time from array
    let data = response;
    console.log(data);
    sendResponse(res, data, "current Location", false);
  });
});


// Exports the router.
module.exports = router;