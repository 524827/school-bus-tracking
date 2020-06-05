const express = require('express');
const router = express.Router();
const routes = require('../model/routeModel');
const sendResponse = require('../routes/send-response');
const Schema = require('../model/schemasModel');

const routeDetails = new routes();

router.post('/', function (req, res, next) {
  // Calling addDriver method of driverModel class by driver instance
  res.send('routes');
});

// Route add route details.
router.post('/add', async function (req, res, next) {

  routeDetails.addRoutes(req.body).save().then(data => {
      sendResponse(res, data, 'Routes data.', false);
    })
    .catch(err => {
      sendResponse(res, [], 'Operation unsuccessed.', true);
    });
});
/**
 * route for show
 */
router.get('/show', async function (req, res, next) {
  routeDetails.showAllRoutes().then(data => {
      console.log(data);
      sendResponse(res, data, 'Routes data.', false);
    })
    .catch(err => {
      console.log(err);
      sendResponse(res, [], 'Operation unsuccessed.', true);
    });
});
/**
 * route for show all routes details
 */
router.get('/show-all', async function (req, res, next) {
  routeDetails.showAllRoutes().then(data => {
      sendResponse(res, data, 'Routes data.', false);
    })
    .catch(err => {
      sendResponse(res, [], 'Operation unsuccessed.', true);
    });
});


router.delete('/remove', function (req, res, next) {
  const route_id = req.query.route_id;
  console.log(route_id);
  routeDetails.removeRoutes(route_id).then(data => {
    sendResponse(res, data, 'Delete record successfully', false);
  }).catch(err => {
    sendResponse(res, [], 'Operation unsuccessed.', true);
  });
});

/**
 * route for update driver and vehicle
 */
router.post('/update', async function (req, res, next) {
  await routeDetails.updateRoutes(req.body).then(data => {
      routeDetails.showAllRoutes().then(response => {
          sendResponse(res, response, 'Routes data.', false);
        })
        .catch(err => {
          sendResponse(res, [], 'Operation unsuccessed.', true);
        });
    })
    .catch(err => {
      sendResponse(res, [], 'Operation unsuccessed.', true);
    });
  /*  routeDetails.showAllRoutes().then(data => {
       sendResponse(res, data, 'Routes data.', false);
     })
     .catch(err => {
       sendResponse(res, [], 'Operation unsuccessed.', true);
     }); */
});

// Exports the router.
module.exports = router;