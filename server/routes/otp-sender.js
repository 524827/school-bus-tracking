const express = require('express');
const router = express.Router();
const busCoordinatorModel = require('../model/buscoordinatorModel');
const driverModel = require('../model/driverModel');
const parentModel = require('../model/parentModel');
const sendResponse = require('./send-response');
const nodemailer = require('nodemailer');

// Create instance of busCoordinatorModel class.
const busCoordinator = new busCoordinatorModel();

// Create instance of driverModel class.
const driver = new driverModel();

// Create instance of parentModel class.
const parent = new parentModel();
let emailFoundStatus;


// Route to show busCoordinator.
router.get('/send-otp', async function (req, res, next) {
  if (req.query.userEmail) {
    // Calling showParentByEmail method of parentModel class by parent instance.
    const databaseResponse = await parent.showParentByEmail(req);
    const parentData = [databaseResponse, {
      'userType': 'parent'
    }];
    emailFoundStatus = await checkEmailExist(req, res, parentData, databaseResponse);

    if (emailFoundStatus === false) {
      // Calling showDriverByEmail method of driverModel class by driver instance.
      const databaseResponse = await driver.showDriverByEmail(req);
      const driverData = [databaseResponse, {
        'userType': 'driver'
      }];
      emailFoundStatus = await checkEmailExist(req, res, driverData, databaseResponse);

      if (emailFoundStatus === false) {
        // Calling showBusCoordinatorByEmail method of busCoordinatorModel class by busCoordinator instance.
        const databaseResponse = await busCoordinator.showBusCoordinatorByEmail(req);
        const busCoordinatorData = [databaseResponse, {
          'userType': 'busCoordinator'
        }];
        emailFoundStatus = await checkEmailExist(req, res, busCoordinatorData, databaseResponse);
      }

      if (emailFoundStatus === false) {
        sendResponse(res, databaseResponse, 'User email does not exist.', false);
      }
    }
  }
});

const checkEmailExist = (req, res, userData, databaseResponse) => {
  if (!databaseResponse[0]) {
    return false;
  } else {
    console.log(databaseResponse);

    const randomOTP = generateOTP();
    console.log('OTP : ', randomOTP);
    userData.push({
      'otp': randomOTP
    });
    console.log(userData);
    sendOTPToEmail(res, userData, randomOTP, req.query.userEmail);
    return true;
  }
};

// Function to generate OTP
const generateOTP = () => {
  // Declare a digits variable
  // which stores all digits
  let digits = '0123456789';
  let OTP = '';
  for (let i = 0; i < 4; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
};

function sendOTPToEmail(res, userData, otp, userEmail) {
  console.log('User Email : ', userEmail);

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.googlemail.com',
    auth: {
      user: 'shubham.p@applicationnexus.com', // generated ethereal user
      pass: '**', // generated ethereal password
    },
  });
  // setup e-mail data with unicode symbols
  let mailOptions = {
    from: '"Shubbham P" <shubham.p@applicationnexus.com>', // sender address
    to: userEmail, // list of receivers
    subject: 'WIMB OTP', // Subject line
    text: `Your 'where is my bus' account password reset OTP is ${otp}. Do not share this OTP with others. `, // plaintext body
    // html: '<b>Hello world ?</b>' // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function (error, info) {

    if (error) {
      const message = 'Server_Error';
      sendResponse(res, message, 'Something Wrong. Try after sometime.', false);
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);
    sendResponse(res, userData, 'User email exist.', false);
  });
}

// Exports the router.
module.exports = router;