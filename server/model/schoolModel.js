const mongoDB = require('../connection/dbConnection');
const schema = require('./schemasModel');
// const crypto = require('crypto');
// const sendResponse = require('../routes/send-response');
// const mongo = new mongoDB();

/**
 * @description - This class add, remove, update and fetch the parent details from the database.
 * @class SchoolModel
 */
class SchoolModel {
  /**
   * @description - Initializes connection with database.
   * @constructor
   */
  constructor() {
    // Calling connect method of MongoDb class in dbConnection.
    // mongo.connect();
  }

  /**
   * @description - This function adds the details of school to database.
   * @function addSchool
   * @params req - request data of school.
   * @returns schoolAdd
   */
  addSchool(req, path) {
    const data = JSON.parse(req);
    console.log(data.schoolName);
    console.log('path' + path);
    const schoolAdd = new schema.school({
      school_name: data.schoolName,
      branch: data.branchName,
      school_address: data.address,
      school_photos: path,
      school_contact: {
        office: data.officeNumber,
        office_email: data.officeEmail
      },
    });
    schoolAdd
      .save()
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.error(err);
      });
    return schoolAdd;
  }


  /**
   * @description - This function shows the details of school in database.
   * @function showSchool
   * @params req - request data of school.
   * @returns schoolShow
   */
  showSchool(req) {
    const schoolShow = schema.school
      .find({})
      .then(async data => {
        console.log(data);
        return data;
      })
      .catch(err => {
        console.error(err);
      });
    return schoolShow;
  }

  /**
   * @description - This function updates the details of school in database.
   * @function updateSchool
   * @params req - request data of school.
   * @returns schoolUpdate
   */
  async updateSchool(req, path) {
    const data = JSON.parse(req);
    console.log('json', data);
    console.log(req);
    const schoolUpdate = await schema.school
      .findByIdAndUpdate({
        _id: data.id
      }, {
        // Write update code of school here
        school_name: data.schoolName,
        branch: data.branchName,
        school_address: data.address,
        school_photos: path,
        school_contact: {
          office: data.officeNumber,
          office_email: data.officeEmail
        },
      }, {
        new: true,
      });
    return schoolUpdate;
  }

  /**
   * @description - This function removes the details of school in database.
   * @function removeSchool
   * @params req - request data of school.
   * @returns schoolRemove
   */
  removeSchool(req) {
    schema.school
      .findByIdAndDelete({
        _id: req.params.id
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.error(err);
      });
  }
}

module.exports = SchoolModel;