const express = require('express');
const router = express.Router();
const vehicleModel = require('../model/vehicleModel');
const sendResponse = require('./send-response');
const Schema = require('../model/schemasModel');
/**
 * Multer for Store images
 */
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './images/vehicles');
  },
  filename: (req, file, cb) => {
    console.log(file);
    var filetype = '';
    if (file.mimetype === 'image/gif') {
      filetype = 'gif';
    }
    if (file.mimetype === 'image/png') {
      filetype = 'png';
    }
    if (file.mimetype === 'image/jpeg') {
      filetype = 'jpg';
    }
    cb(null, 'image-' + Date.now() + '.' + filetype);
  },
});
const upload = multer({
  storage: storage,
});

// Create instance of vehicleModel class.
const vehicle = new vehicleModel();

/// Route to add vehicle.
router.post('/add', upload.single('file'), function (req, res, next) {
  console.log(req.body);
  const data = JSON.parse(req.body.body);
  vehicle.addVehicle(data, req.file).save().then((response) => {
    sendResponse(res, response, 'Vehicle Data', false);
  }).catch(err => {
    sendResponse(res, [], 'Response Error', true);
  });
});

// Route to show vehicle.
router.get('/show', async function (req, res, next) {
  // Calling showVehicle method of vehicleModel class by vehicle instance.
  if (req.query.vehicleId == 'getAllVehicleDetails') {
    const databaseResponse = await vehicle.showAllVehicle(req);

    sendResponse(res, databaseResponse, 'Success', false);

  } else {
    const databaseResponse = await vehicle.showVehicle(req);
    console.log(databaseResponse);
    sendResponse(res, databaseResponse, 'Success', false);

  }
});

/**
 * get all vehicle details
 */
router.get('/show-all', function (req, res, next) {
  vehicle.showAllVehicle()
    .then(data => {
      console.log(data);
      sendResponse(res, data, 'Vehicle Data', false);
    })
    .catch(err => {
      sendResponse(res, [], 'Response Error', true);
    });
});


/**
 * Route for update vehicle status either park or active
 */
router.post('/vehicleStatus', function (req, res, next) {
  const vehicleStatus = req.body.vehicleStatus;
  const driverId = req.body.driverId;
  console.log(vehicleStatus);
  vehicle.updateVehicleStatus(driverId, vehicleStatus)
    .then(data => {
      sendResponse(res, data, 'Update Status Successfully', false);
    })
    .catch(err => {
      sendResponse(res, [], 'Response Error', true);
    });
});


/**
 * Get all vehicle number
 */
router.get('/vehicle-number', async function (req, res, next) {
  const vehicle = [];
  Schema.vehicle.find({}, function (err, users) {
    users.forEach(function (res) {
      console.log(res);
      let vehicleNumber = res.vehicle_details;
      vehicle.push(vehicleNumber.vehicle_number);
    });
  }).then(() => {
    sendResponse(res, vehicle, 'vehicle Response', false);
  }).catch(err => {
    sendResponse(res, [], 'Operation unsuccessed.', true);
  });
});

// Route to remove vehicle.
router.delete('/remove', function (req, res, next) {
  // Calling removeVehicle method of vehicleModel class by vehicle instance.
  const vehicle_id = req.query.vehicle_id;
  vehicle.removeVehicle(vehicle_id).then(data => {
    sendResponse(res, data, 'Delete record successfully', false);
  }).catch(err => {
    sendResponse(res, [], 'Operation unsuccessed.', true);
  });
});

// Route to update driver.
router.post('/update', upload.single('file'), async function (req, res, next) {
  // Calling updateDriver method of driverModel class by driver instance.
  const data = JSON.parse(req.body.body);
  await vehicle.updateVehicle(data, req.file);
  vehicle.showAllVehicle().then(data => {
      console.log('data', data);
      sendResponse(res, data, 'Driver Data', false);
    })
    .catch(err => {
      sendResponse(res, [], 'Response Error', true);
    });
});

// Route to show vehicle.
router.get('/vehicleByDriverId', async function (req, res, next) {
  // Calling showVehicle method of vehicleModel class by vehicle instance.
  const databaseResponse = await vehicle.showVehicleByDriver(req);
  sendResponse(res, databaseResponse, 'Success', false);
});
// Exports the router.
module.exports = router;