const express = require('express');
const router = express.Router();
const studentModel = require('../model/studentModel');
const sendResponse = require('./send-response');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './images/students');
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


// Create instance of studentModel class.
const student = new studentModel();

// Route to add student.
router.post('/add', upload.single('file'), function (req, res, next) {
  // Calling addStudent method of studentModel class by student instance.
  const data = req.body.body;
  console.log('data' + data);
  console.log('file' + req.file);
  const databaseResponse = student.addStudent(data, req.file.path);
  res.send(databaseResponse);
});


// Route to show student.
router.get('/show', async function (req, res, next) {
  // Calling showStudent method of studentModel class by student instance.
  const databaseResponse = await student.showStudent(req);
  sendResponse(res, databaseResponse, 'User details fetched.', false);
});

// Route to show student.
router.get('/show-all', async function (req, res, next) {
  // Calling showStudent method of studentModel class by student instance.
  student.showAllStudent(req)
    .then(data => {
      sendResponse(res, data, 'student data', false);
    })
    .catch(err => {
      console.error(err);
      sendResponse(res, [], 'error', true);
    });
});

// Route to update student.
router.post('/update', async function (req, res, next) {
  // Calling updateStudent method of studentModel class by student instance.
  const databaseResponse = await student.updateStudent(req);
  sendResponse(res, databaseResponse, 'User details fetched.', false);
});

// Route to remove student.
router.delete('/remove/:id', function (req, res, next) {
  // Calling removeStudent method of studentModel class by student instance.
  const databaseResponse = student.removeStudent(req);
  res.send(databaseResponse);
});

// Route to update student.
router.post('/update-student/:id', upload.single('file'), async function (req, res, next) {
  const data = req.body.body;
  console.log('data' + data);
  console.log('file', req.file);
  // Calling updateStudent method of studentModel class by student instance.
  await student.updateStudentDetails(data,
    req.file.path);
  student.showAllStudent()
    .then(data => {
      console.log('studentData' + data);
      sendResponse(res, data, 'Updated', false);
    })
    .catch(err => {
      console.error(err);
      sendResponse(res, [], 'err', true);
    });
});

/* router.get('/show', async function (req, res) {
  const databaseResponse = await student.setdriverdetails(req);
  res.send(databaseResponse);
}); */

// Exports the router.
module.exports = router;