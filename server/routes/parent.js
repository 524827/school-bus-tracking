const express = require('express');
const router = express.Router();
const parentModel = require('../model/parentModel');
const sendResponse = require('./send-response');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './images/parents');
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

// Create instance of parentModel class.
const parent = new parentModel();

// Route to add parent.
router.post('/add', upload.single('file'), function (req, res, next) {
  // Calling addParent method of parentModel class by parent instance.
  const data = req.body.body;
  console.log(data);
  console.log(req.file);
  const databaseResponse = parent.addParent(data, req.file.path);
  res.send(databaseResponse);
});

// Route to show parent.
router.get('/show', async function (req, res, next) {
  if (req.query.parentId) {
    // Calling showParentById method of parentModel class by parent instance.
    const databaseResponse = await parent.showParentById(req);
    sendResponse(res, databaseResponse, 'User details fetched.', false);
  } else {
    // Calling showParent method of parentModel class by parent instance.
    const databaseResponse = await parent.showParent(req);
    sendResponse(res, databaseResponse, 'User details fetched.', false);
  }
});

// Route to show parent on dashboard.
router.get('/show-all', async function (req, res, next) {
  // Calling showParent method of parentModel class by parent instance.
  parent.showAllParent(req)
    .then(data => {
      console.log('data' + res);
      sendResponse(res, data, 'User details fetched.', false);
    })
    .catch(err => {
      console.error(err);
      sendResponse(res, [], 'err', true);
    });
});


// Route to remove parent.
router.delete('/remove/:id', function (req, res, next) {
  // Calling removeParent method of parentModel class by parent instance.
  const databaseResponse = parent.removeParent(req);
  res.send(databaseResponse);
});


// Route to update parent on dashboard.
router.post('/update-parent/:id', async function (req, res, next) {
  console.log('parent', req.body);
  // Calling updateParent method of parentModel class by parent instance.
  await parent.updateParentDetails(req);
  parent.showAllParent()
    .then(data => {
      console.log('Parentupdate' + data);
      sendResponse(res, data, 'Updated', false);
    })
    .catch(err => {
      console.error(err);
      sendResponse(res, [], 'err', true);
    });
});

// Route to update parent.
router.post('/update', async function (req, res, next) {
  // Calling updateParent method of parentModel class by parent instance.
  const databaseResponse = await parent.updateParent(req);
  res.send(databaseResponse);
});

// Route to update parent.
router.post('/updateAllDetails', async function (req, res, next) {
  // Calling updateParentAllDetails method of parentModel class by parent instance.
  const databaseResponse = await parent.updateParentAllDetails(req);
  sendResponse(res, databaseResponse, 'User details fetched.', false);
});


router.post('/driverDetails', async function (req, res, next) {
  // Calling updateParent method of parentModel class by parent instance.
  const databaseResponse = await parent.getDiverRouteId(req);
  console.log("driver  " + databaseResponse);
  sendResponse(res, databaseResponse, 'driver_id', false);
});

router.post('/currentLocation', async function (req, res, next) {
  // Calling updateParent method of parentModel class by parent instance.
  const data = parent.getLocationData(req); // get current location data
  data.then(response => {
    if (response.driverlog.length > 0) {
      let curLocation = response.driverlog[response.driverlog.length - 1].current_location;
      let data = curLocation[curLocation.length - 1]; // Get last updated location and time from array
      console.log(data);
      sendResponse(res, data, "current Location", false);
    }

  });
});

// Exports the router.
module.exports = router;