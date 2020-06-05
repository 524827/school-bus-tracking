const mongoDB = require('../connection/dbConnection');
const schema = require('./schemasModel');
const encryptPassword = require('./encryptPassword');
// const mongo = new mongoDB();

/**
 * @description - This class add, remove, update and fetch the driver details from the database.
 * @class DriverModel
 */
class DriverModel {
  /**
   * @description - Initializes connection with database.
   * @constructor
   */
  constructor() {
    // Calling connect method of MongoDb class in dbConnection.
    //  mongo.connect();
  }

  /**
   * @description - This function adds the details of driver to database.
   * @function addDriver
   * @params req - request data of driver.
   * @returns driverAdd
   */
   addDriver(data, filePath) {
    const encryptedPassword = encryptPassword(data.password);
    const driverAdd = new schema.driver({
      "driver_name": data.driverName,
      "driver_email": data.driverEmail,
      "driver_addresses": {
        "parmanent_address": data.parmanentAddr,
        "current_address": data.currentAddr,
      },
      "mobile_numbers": {
        "primary_number": data.primNumber,
        "secondary_number": data.secNumber
      },
      "license_number": data.licenseNumber,
      "driver_documents": {
        "adhar_card_details": {
          "adhar_card_number": data.adharNumber,
          "path": filePath[0].path
        },
        "pan_card_details": {
          "pan_card_number": data.panNumber,
          "path": filePath[1].path
        }
      },
      "driver_username": data.username,
      "driver_password": encryptedPassword,
      "school_details": data.school_id,
    });
    return driverAdd;
  }

  /**
   * @description - This function shows the details of driver in database.
   * @function showDriver
   * @params req - request data of driver.
   * @returns driverShow
   */
  showDriver(req) {
    const driverShow = schema.driver
      .find({
        $and: [{
            driver_username: req.query.driverUserName,
          },
          {
            driver_password: encryptPassword(
              req.query.driverPassword
            ),
          },
        ],
      }).populate('school_details').populate('vehicle_details');

    return driverShow;
  }


  /**
   * @description - This function shows the details of driver in database by driver id.
   * @function showDriverById
   * @params req - request data of driver.
   * @returns driverShow
   */
  showDriverById(req) {
    const driverShow = schema.driver
      .find({
        _id: req.query.driverId,
      }).populate('school_details').populate('vehicle_details');
    return driverShow;
  }



  /**
   * @description - This function shows the details of driver in database by driver email.
   * @function showDriverByEmail
   * @params req - request data of driver.
   * @returns driverShow
   */
  showDriverByEmail(req) {
    const driverShow = schema.driver
      .find({
        driver_email: req.query.userEmail,
      }).populate('school_details').populate('vehicle_details');
    return driverShow;
  }

  /**
   * @description - This function updates the details of driver in database.
   * @function updateDriverAllDetails
   * @params req - request data of driver.
   * @returns driverUpdate
   */
  updateDriverAllDetails(req) {
    console.log(req.body);
    if (req.body.driverPassword) {
      const driverUpdate = schema.driver
        .findOneAndUpdate({
          _id: req.body.driverId,
        }, {
          driver_name: req.body.driverName,
          driver_addresses: {
            permanent_address: req.body.permanentAddress,
          },
          mobile_numbers: {
            primary_number: req.body.primaryNumber,
            secondary_number: req.body.secondaryNumber
          },
          driver_email: req.body.driverEmail,
          driver_username: req.body.driverUserName,
          driver_password: encryptPassword(
            req.body.driverPassword
          ),
        }, {
          new: true,
        })
        .then(data => {
          console.log(data);
          return data;
        })
        .catch(err => {
          console.error(err);
        });
      return driverUpdate;
    } else {
      const driverUpdate = schema.driver
        .findOneAndUpdate({
          _id: req.body.driverId,
        }, {
          driver_name: req.body.driverName,
          driver_addresses: {
            permanent_address: req.body.permanentAddress,
          },
          mobile_numbers: {
            primary_number: req.body.primaryNumber,
            secondary_number: req.body.secondaryNumber
          },
          driver_email: req.body.driverEmail,
          driver_username: req.body.driverUserName,
        }, {
          new: true,
        })
        .then(data => {
          console.log(data);
          return data;
        })
        .catch(err => {
          console.error(err);
        });
      return driverUpdate;
    }
  }


  /**
   * @description - This function updates the details of driver in database.
   * @function updateDriver
   * @params req - request data of driver.
   * @returns driverUpdata
   */
  updateDriver(req) {
    const driverUpdate = schema.driver
      .findOneAndUpdate({
        _id: req.body.driverId,
      }, {
        driver_password: encryptPassword(
          req.query.driverPassword
        ),
      }, {
        new: true,
      })
      .then(data => {
        console.log(data);
        return data;
      })
      .catch(err => {
        console.error(err);
      });
    return driverUpdate;
  }


  /**
   * @description - This function updates the details of driver in database.
   * @function updateDriver
   * @params req - request data of driver.
   * @returns driverUpdata
   */
  updateDriverDetails(driver_id, data, filePath) {
    console.log(data);
    const driverDetails = schema.driver
      .update({
        "_id": driver_id,
      }, {
        $set: {
          "driver_name": data.driverName,
          "driver_email": data.driverEmail,
          "driver_addresses": {
            "parmanent_address": data.parmanentAddr,
            "current_address": data.currentAddr,
          },
          "mobile_numbers": {
            "primary_number": data.primNumber,
            "secondary_number": data.secNumber
          },
          "license_number": data.licenseNumber,
          "driver_documents": {
            "adhar_card_details": {
              "adhar_card_number": data.adharNumber,
              "path": filePath[0].path
            },
            "pan_card_details": {
              "pan_card_number": data.panNumber,
              "path": filePath[1].path
            }
          },
        }
      });
    return driverDetails;
  }

  /**
   * @description - This function updates the photo of driver in database.
   * @function updateDriverPhoto
   * @params req - request data of driver.
   * @returns driverUpdate
   */
  updateDriverPhoto(req) {
    console.log('request', req.body.userId);
    const driverUpdate = schema.driver
      .findOneAndUpdate({
        _id: req.body.userId,
      }, {
        driver_documents: {
          photo: req.file.filename,
        }

      }, {
        new: true,
      })
      .then(data => {
        console.log(data);
        return data;
      })
      .catch(err => {
        console.error(err);
      });
    return driverUpdate;
  }

  /**
   * @description - This function removes the details of driver in database.
   * @function removeDriver
   * @params req - request data of driver.
   * @returns driverRemove
   */
  removeDriver(driver_id) {
    const romoveDriver = schema.driver
      .findOneAndDelete({
        _id: driver_id,
      });
    return romoveDriver;
  }

  // get routes details of perticular driver
  getRouteDetails(req) {
    console.log(req.body.driver_id);
    const response = schema.routes.findOne({
      "driver_id": req.body.driver_id
    }, function (error, data) {});
    return response;
  }

  // get forward i.e Home to School route details
  forwardRoutes(req) {
    const query = schema.routes.findOne({
      "driver_id": req.body.driver_id
    }).select('forward_routes');
    return query;
  }
  // get backward i.e School to Home route details
  backwardRoutes(req) {
    const query = schema.routes.findOne({
      "driver_id": req.body.driver_id
    }).select('backward_routes');
    return query;
  }
}

module.exports = DriverModel;