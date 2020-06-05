const express = require('express');
const router = express.Router();
const moment = require('moment');
const driverModel = require('../model/driverModel');
const driverLog = require('../model/driverLog');
const Schema = require('../model/schemasModel');
const sendResponse = require('./send-response');
const multer = require('multer');
/**
 * Multer for Store images
 */

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './images/drivers');
  },
  filename: (req, file, cb) => {
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


// Create instance of driverModel class.
const driver = new driverModel();
const driverLocation = new driverLog();
// Route to add driver.
router.post('/add', upload.array('file[]', 3), async function (req, res, next) {
  const data = JSON.parse(req.body.body);
  console.log(data);
 await driver.addDriver(data, req.files).save().then((response) => {
    sendResponse(res, response, 'driver Data', false);
  }).catch(err => {
    console.log(err);
    sendResponse(res, [], 'Response Error', true);
  });
});
// Route to show driver.
router.get('/show', async function (req, res, next) {

  if (req.query.driverId) {

    // Calling showDriverById method of driverModel class by driver instance.
    const databaseResponse = await driver.showDriverById(req);
    sendResponse(res, databaseResponse, 'User details fetched.', false);
  } else {
    // Calling showDriver method of driverModel class by driver instance.
    const databaseResponse = await driver.showDriver(req);
    sendResponse(res, databaseResponse, 'User details fetched.', false);

  }
});

/**
 * get all driver details
 */
router.get('/show-all', function (req, res, next) {
  Schema.driver
    .find({})
    .then(data => {
      console.log('driver details', data);
      sendResponse(res, data, 'Driver Data', false);
    })
    .catch(err => {
      sendResponse(res, [], 'Response Error', true);
    });
});

/**
 * Get All driver name
 */
router.get('/driver-name', function (req, res, next) {
  const driver = [];
  Schema.driver
    .find({}, function (err, users) {
      users.forEach(function (res) {
        console.log(res.driver_name);
        driver.push(res.driver_name);
      });
    })
    .then(result => {
      sendResponse(res, driver, 'Driver Response', false);
    })
    .catch(err => {
      sendResponse(res, [], 'Operation unsuccessed.', true);
    });
});

// Route to update driver.
router.post('/update', function (req, res, next) {
  // Calling updateDriver method of driverModel class by driver instance.
  const databaseResponse = driver.updateDriver(req);
  res.send(databaseResponse);
});

// Route to update driver.
router.post('/update-driver', upload.array('file[]', 3), async function (req, res, next) {
  // Calling updateDriver method of driverModel class by driver instance.
  const data = JSON.parse(req.body.body);
  driver_id = req.body.driver_id;
  await driver.updateDriverDetails(driver_id, data, req.files);
  Schema.driver
    .find({})
    .then(data => {
      console.log('data', data);
      sendResponse(res, data, 'Driver Data', false);
    })
    .catch(err => {
      sendResponse(res, [], 'Response Error', true);
    });
});

// Route to remove driver.
router.delete('/remove', function (req, res, next) {
  // Calling removeDriver method of driverModel class by driver instance.
  const driver_id = req.query.driver_id;
  driver.removeDriver(driver_id).then(data => {
    sendResponse(res, data, 'Delete record successfully', false);
  }).catch(err => {
    sendResponse(res, [], 'Operation unsuccessed.', true);
  });
});


// Route to update driver.
router.post('/updateAllDetails', function (req, res, next) {
  // Calling updateDriverAllDetails method of driverModel class by driver instance.
  const databaseResponse = driver.updateDriverAllDetails(req);
  sendResponse(res, databaseResponse, 'User details fetched.', false);
});

/**
 * This route maintain driver log.
 * Current location is continueslly store into database
 */
router.post('/logDetails', function (req, res, next) {
  Schema.driverlog.findOne({
    "driver_id": req.body.driver_id // find driver id is exists in collection or not
  }, async function (error, doc) {
    if (doc) {
      await driverLocation.logDetails(req);
      driverLocation.getLocationData(req).then(response => {
        if (response.driverlog.length > 0) {
          let curLocation = response.driverlog[response.driverlog.length - 1].current_location;
          let data = curLocation[curLocation.length - 1]; // Get last updated location and time from array
          sendResponse(res, data, "current Location", '');
        }
      });
    } else {
      const logDetails = new Schema.driverlog({
        "driver_id": req.body.driver_id
      });
      logDetails.save().then(doc => {});
    }
  });
});

// This routes get routes details of perticular driver
router.post('/routeDetails', function (req, res, next) {
  // moment class use to compare two date
  const currentTime = moment();
  const startTime = moment('2:00 pm', "HH:mm a");
  console.log("driver" + req.body.driver_id);
  if (currentTime < startTime) { // forward routes i.e home to school
    console.log("forward" + currentTime + startTime);
    let routedetails = driver.forwardRoutes(req); // call forwardRoutes() function
    routedetails.then(data => {
      sendResponse(res, data, 'route details', '');
    });
  } else if (currentTime > startTime) { // backward routes i.e school to home
    console.log("backward" + currentTime + startTime);
    let routedetails = driver.backwardRoutes(req); // call backwardRoutes() function
    routedetails.then(data => {
      sendResponse(res, data, "route details", '');
    });

  }
});

// This routes get routes details of perticular driver
router.post('/routeAllDetails', function (req, res, next) {

  let routedetails = driver.getRouteDetails(req); // call forwardRoutes() function
  routedetails.then(data => {
    sendResponse(res, data, 'route details', '');
  });

});


// Exports the router.
module.exports = router;