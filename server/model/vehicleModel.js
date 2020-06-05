const mongoDB = require('../connection/dbConnection');
const schema = require('./schemasModel');
const crypto = require('crypto');
const sendResponse = require('../routes/send-response');
// const mongo = new mongoDB();

/**
 * @description - This class add, remove, update and fetch the vehicle details from the database.
 * @class VehicleModel
 */
class VehicleModel {

  /**
   * @description - Initializes connection with database.
   * @constructor
   */
  constructor() {
    // Calling connect method of MongoDb class in dbConnection.
    //  mongo.connect();
  }


  /**
   * @description - This function adds the details of vehicle to database.
   * @function addVehicle
   * @params req - request data of vehicle.
   * @returns vehicleAdd
   */
  addVehicle(data, filePath) {
    console.log(data);
    const vehicleAdd = new schema.vehicle({
      "vehicle_details": {
        "vehicle_photo": filePath.path,
        "vehicle_number": data.vehicleNumber,
        "insurance_validity": data.insurenceValidity,
        "chassis_number": data.chassisNumber,
        "fuel_type": data.fuelType,
        "company_name": data.companyName,
        "model_type": data.modalType,
        "seat_capacity": data.seatingCapacity,
      },
      "school_details": data.school_id,
      "driver_details": data.driver_id
    });
    return vehicleAdd;
  }

  /**
   * @description - This function shows the details of vehicle in database.
   * @function showVehicle
   * @params req - request data of vehicle.
   * @returns vehicleShow
   */
  showVehicle(req) {

    const vehicleShow = schema.vehicle
      .find({
        _id: req.query.vehicleId
      }).populate('driver_details').populate('school_details');
    return vehicleShow;
  }

  /**
   * @description - This function shows the details of all vehicle in database.
   * @function showAllVehicle
   * @params req - request data of vehicle.
   * @returns allVehicleShow
   */
  showAllVehicle() {
    const allVehicles = schema.vehicle
      .find({}).populate([{
        path: 'school_details',
        model: 'school'
      }, {
        path: 'driver_details',
        model: 'driver'
      }]);

    return allVehicles;
  }

  /**
   * @description - This function shows the details of vehicle in database by driver's id.
   * @function showVehicleByDriver
   * @params req - request data of vehicle.
   * @returns showVehicleByDriver
   */
  showVehicleByDriver(req) {

    const vehicleShow = schema.vehicle
      .find({
        driver_details: req.query.driverId
      })
      .populate('driver_details').populate('school_details');
    return vehicleShow;
  }

  /**
   * @description - This function updates the details of vehicle in database.
   * @function updateVehicle
   * @params req - request data of vehicle.
   * @returns vehicleUpdate
   */
  updateVehicle(data, filePath) {
    console.log('data', data);
    console.log('filePath', filePath);
    const vehicleDetails = schema.vehicle
      .update({
        _id: data.vehicle_id
      }, {
        $set: {
          "vehicle_details": {
            "vehicle_photo": filePath.path,
            "vehicle_number": data.vehicle_number,
            "chassis_number": data.chassisNumber,
            "fuel_type": data.fuelType,
            "company_name": data.company_name,
            "model_type": data.modalType,
            "seat_capacity": data.seatingCapacity
          },
          "school_details": data.school_id,
          "driver_details": data.driver_id,
        }
      });
    return vehicleDetails;
  }

  /**
   *This function update the current status of vehicle
   * @param {string} driverId - Driver Id
   * @param {string} vehicleStatus - Current status of vehicle
   */
  updateVehicleStatus(driverId, vehicleStatus) {
    const vehicleStat = schema.routes.findOne({
      "driver_id": driverId
    }, function (error, response) {
      console.log('DATA', response.vehicle_id);
      schema.vehicle.findOne({
        "_id": response.vehicle_id
      }, function (error, data) {
        data.vehicle_status = vehicleStatus;
        data.save();
      });
    });
    return vehicleStat;
  }

  /**
   * @description - This function removes the details of vehicle in database.
   * @function removeVehicle
   * @params req - request data of vehicle.
   * @returns vehicleRemove
   */
  removeVehicle(vehicle_id) {
    const removeData = schema.vehicle
      .findOneAndDelete({
        _id: vehicle_id
      });
    return removeData;
  }
}

module.exports = VehicleModel;