var express = require('express');
var router = express.Router();
const userNotification = require('../model/notificationModel');
const Schema = require('../model/schemasModel');

const notification = new userNotification();
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/send_notification', function (req, res, next) {
  Schema.routes.findOne({
    "driver_id": req.body.driver_id
  }, function (error, data) {
    console.log(data);
    if (data) {
      notification.sendNotification(req.body.currentArea, data.userToken);
    }
  });
  res.send('respond with a resource');
});

router.post('/user_token', function (req, res, next) {
  console.log(req.body);
  notification.setUserToken(req.body);
  res.send('respond with a resource');
});

module.exports = router;
