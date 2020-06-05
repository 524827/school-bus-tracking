const mongoDB = require('../connection/dbConnection');
const schema = require('./schemasModel');
const crypto = require('crypto');
const sendResponse = require('../routes/send-response');
// const mongo = new mongoDB();

/**
 * @description - This class add, remove, update and fetch the busCoordinator details from the database.
 * @class BusCoordinatorModel
 */
class BusCoordinatorModel {
  /**
   * @description - Initializes connection with database.
   * @constructor
   */
  constructor() {
    // Calling connect method of MongoDb class in dbConnection.
    //  mongo.connect();
  }

  /**
   * @description - This function adds the details of busCoordinator to database.
   * @function addBusCoordinator
   * @params req - request data of busCoordinator.
   * @returns busCoordinatorAdd
   */
  addBusCoordinator(req) {
    const encryptedPassword = this.encryptPassword(req.body.busCoordinatorPassword);
    const busCoordinatorAdd = new schema.buscoordinator({
      buscoordinator_name: req.body.busCoordinatorName,
      buscoordinator_address: req.body.busCoordinatorAddress,
      buscoordinator_photo: req.body.busCoordinatorPhoto,
      buscoordinator_mobile_number: {
        primary_number: req.body.primaryNumber,
        secondary_number: req.body.secondaryNumber
      },
      buscoordinator_email_address: req.body.busCoordinatorEmail,
      buscoordinator_username: req.body.busCoordinatorUserName,
      buscoordinator_password: encryptedPassword
    });
    busCoordinatorAdd
      .save()
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.error(err);
      });
    return busCoordinatorAdd;
  }

  encryptPassword(password) {

    const encrypt = crypto.createHash('sha1');
    encrypt.update(password);
    const finalEncrypt = encrypt.digest('hex');
    console.log(finalEncrypt);
    return finalEncrypt;

  }


  /**
   * @description - This function shows the details of busCoordinator in database.
   * @function showBusCoordinator
   * @params req - request data of busCoordinator.
   * @returns busCoordinatorShow
   */
  async showBusCoordinator(req) {
    console.log('coordinator', req.query);
    const busCoordinatorShow = await schema.buscoordinator
      .find({
        $and: [{
            buscoordinator_username: req.query.busCoordinatorUserName,
          },
          {
            buscoordinator_password: req.query.busCoordinatorPassword
          },
        ],
      })
      .then(data => {
        console.log(data);

        return data;
      })
      .catch(err => {
        console.error(err);
      });
    return busCoordinatorShow;
  }


  /**
   * @description - This function shows the details of busCoordinator in database by busCoordinator id.
   * @function showBusCoordinatorById
   * @params req - request data of busCoordinator.
   * @returns busCoordinatorShow
   */
  async showBusCoordinatorById(req) {
    const busCoordinatorShow = await schema.buscoordinator
      .find({
        _id: req.query.busCoordinatorId
      })
      .then(async data => {
        console.log(data);

        return data;
      })
      .catch(err => {
        console.error(err);
      });
    return busCoordinatorShow;
  }


  /**
   * @description - This function shows the details of busCoordinator in database by busCoordinator email.
   * @function showBusCoordinatorByEmail
   * @params req - request data of busCoordinator.
   * @returns busCoordinatorShow
   */
  async showBusCoordinatorByEmail(req) {
    const busCoordinatorShow = await schema.buscoordinator
      .find({
        buscoordinator_email_address: req.query.userEmail
      })
      .then(async data => {
        console.log(data);

        return data;
      })
      .catch(err => {
        console.error(err);
      });
    return busCoordinatorShow;
  }



  /**
   * @description - This function updates the details of busCoordinator in database.
   * @function updateBusCoordinatorAllDetails
   * @params req - request data of busCoordinator.
   * @returns busCoordinatorUpdata
   */
  async updateBusCoordinatorAllDetails(req) {
    console.log('pass : ', req.body.busCoordinatorPassword);
    if (req.body.busCoordinatorPassword) {
      const busCoordinatorUpdate = await schema.buscoordinator
        .findOneAndUpdate({
          _id: req.body.busCoordinatorId,
        }, {
          buscoordinator_name: req.body.busCoordinatorName,
          buscoordinator_address: req.body.busCoordinatorAddress,
          buscoordinator_mobile_number: {
            primary_number: req.body.primaryNumber,
            secondary_number: req.body.secondaryNumber
          },
          buscoordinator_email_address: req.body.busCoordinatorEmail,
          buscoordinator_username: req.body.busCoordinatorUserName,
          buscoordinator_password: this.encryptPassword(
            req.body.busCoordinatorPassword
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
      return busCoordinatorUpdate;
    } else {
      const busCoordinatorUpdate = await schema.buscoordinator
        .findOneAndUpdate({
          _id: req.body.busCoordinatorId,
        }, {
          buscoordinator_name: req.body.busCoordinatorName,
          buscoordinator_address: req.body.busCoordinatorAddress,
          buscoordinator_mobile_number: {
            primary_number: req.body.primaryNumber,
            secondary_number: req.body.secondaryNumber
          },
          buscoordinator_email_address: req.body.busCoordinatorEmail,
          buscoordinator_username: req.body.busCoordinatorUserName,
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
      return busCoordinatorUpdate;
    }

  }


  /**
   * @description - This function updates the details of busCoordinator in database.
   * @function updateBusCoordinator
   * @params req - request data of busCoordinator.
   * @returns busCoordinatorUpdata
   */
  async updateBusCoordinator(req) {
    const busCoordinatorUpdate = await schema.buscoordinator
      .findOneAndUpdate({
        _id: req.body.busCoordinatorId,
      }, {
        buscoordinator_password: this.encryptPassword(
          req.body.busCoordinatorPassword
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
    return busCoordinatorUpdate;
  }


  /**
   * @description - This function updates the photo of busCoordinator in database.
   * @function updateBusCoordinatorPhoto
   * @params req - request data of busCoordinator.
   * @returns busCoordinatorUpdate
   */
  async updateBusCoordinatorPhoto(req) {
    console.log('request', req.body.userId);
    const busCoordinatorUpdate = await schema.buscoordinator
      .findOneAndUpdate({
        _id: req.body.userId,
      }, {
        buscoordinator_photo: req.file.filename,
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
    return busCoordinatorUpdate;
  }


  /**
   * @description - This function removes the details of busCoordinator in database.
   * @function removeBusCoordinator
   * @params req - request data of busCoordinator.
   * @returns busCoordinatorRemove
   */
  removeBusCoordinator(req) {
    schema.buscoordinator
      .findOneAndDelete({
        _id: req.body.busCoordinatorId,
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.error(err);
      });
  }


  getLocationData() {

    const response = schema.driverlog.find({

    }).select({
      "driverlog.current_location": {
        "$slice": -1
      }
    });
    return response;
  }
}

module.exports = BusCoordinatorModel;