const express = require('express');
const router = express.Router();
const schoolModel = require('../model/schoolModel');
const sendResponse = require('./send-response');
const multer = require('multer');
const Schema = require('../model/schemasModel');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './images/schools');
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

// Create instance of schoolModel class.
const school = new schoolModel();

router.get('/', async function (req, res, next) {

  sendResponse(res, [], 'User details fetched.', false);
});

// Route to add parent.
router.post('/add', upload.single('file'), function (req, res, next) {
  // Calling addSchool method of schoolModel class by school instance.
  const data = req.body.body;
  console.log('heeeee');
  const databaseResponse = school.addSchool(data, req.file.path);
  res.send(databaseResponse);
});

/* // Route to show school.
router.get('/show', async function (req, res, next) {
  // Calling showSchool method of schoolModel class by school instance.
  await school.showSchool(req)
    .then(data => {
      console.log('data' + res);
      sendResponse(res, data, 'User details fetched.', false);
    })
    .catch(err => {
      console.error(err);
      sendResponse(res, [], 'err', true);
    });
}); */

// Route to show school.
router.get('/show', async function (req, res, next) {
  // Calling showSchool method of schoolModel class by school instance.
  const databaseResponse = await school.showSchool(req);
  sendResponse(res, databaseResponse, 'User details fetched.', false);
});

// Route to remove school.
router.delete('/remove/:id', function (req, res, next) {
  // Calling removeSchool method of schoolModel class by school instance.
  const databaseResponse = school.removeSchool(req);
  res.send(databaseResponse);
});

// Route to update school.
router.post('/update/:id', upload.single('file'), async function (req, res, next) {
  const data = req.body.body;
  console.log('data', data);
  console.log('file', req.file);
  // Calling updateSchool method of schoolModel class by school instance.
  await school.updateSchool(data, req.file.path);
  school.showSchool()
    .then(data => {
      console.log('schoolupdate' + data);
      sendResponse(res, data, 'Updated', false);
    })
    .catch(err => {
      console.error(err);
      sendResponse(res, [], 'err', true);
    });
});

// Route to show school.
router.get('/show-all', async function (req, res, next) {
  Schema.school.find({}).then(result => {
    console.log(school);
    sendResponse(res, result, 'school Response', false);
  }).catch(err => {
    sendResponse(res, [], 'Operation unsuccessed.', true);
  });
});

// Exports the router.
module.exports = router;