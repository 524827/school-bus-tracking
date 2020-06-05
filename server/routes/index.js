var express = require('express');
var router = express.Router();
const busCoordinatorModel = require('../model/buscoordinatorModel');
const driverModel = require('../model/driverModel');
const parentModel = require('../model/parentModel');
const multer = require('multer');
// Create instance of busCoordinatorModel class.
const busCoordinator = new busCoordinatorModel();
const driver = new driverModel();
const parent = new parentModel();

const fileUrl = 'http://192.168.1.31:3000/images/userImages/';
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './images/userImages');
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

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
  });
});

router.post('/upload', upload.single('file'), function (req, res, next) {
  console.log(req.file);
  if (!req.file) {
    res.status(500);
    return next(err);
  }
  res.json({
    fileUrl: fileUrl + req.file.filename,
  });

});

router.post('/images/userImages', upload.single('file'), async function (req, res, next) {
  console.log(req.file);
  if (!req.file) {
    res.status(500);
    return next(err);
  }

  switch (req.body.userType) {
    case 'driver':
      {
        // Calling updateDriverPhoto method of driverModel class by driver instance.
        const databaseResponse = await driver.updateDriverPhoto(req);
        res.json({
          fileUrl: fileUrl + req.file.filename,
          databaseResponse: databaseResponse,
        });
        break;
      }

    case 'parent':
      {

        // Calling updateParentPhoto method of parentModel class by parent instance.
        const databaseResponse = await parent.updateParentPhoto(req);
        res.json({
          fileUrl: fileUrl + req.file.filename,
          databaseResponse: databaseResponse,
        });
        break;
      }

    case 'busCoordinator':
      {

        // Calling updateBusCoordinatorPhoto method of busCoordinatorModel class by busCoordinator instance.
        const databaseResponse = await busCoordinator.updateBusCoordinatorPhoto(req);
        res.json({
          fileUrl: fileUrl + req.file.filename,
          databaseResponse: databaseResponse,
        });

        break;
      }
    default:
      {
        break;
      }
  }

});

module.exports = router;