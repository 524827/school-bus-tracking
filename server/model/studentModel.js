const mongoDB = require('../connection/dbConnection');
const schema = require('./schemasModel');
const crypto = require('crypto');
const sendResponse = require('../routes/send-response');
// const mongo = new mongoDB();

/**
 * @description - This class add, remove, update and fetch the student details from the database.
 * @class StudentModel
 */
class StudentModel {
  /**
   * @description - Initializes connection with database.
   * @constructor
   */
  constructor() {
    // Calling connect method of MongoDb class in dbConnection.
    //  mongo.connect();
  }

  /**
   * @description - This function adds the details of student to database.
   * @function addStudent
   * @params req - request data of student.
   * @returns studentAdd
   */
  addStudent(req, path) {
    const data = JSON.parse(req);
    console.log(data);
    console.log(data.parentName);
    console.log('path' + path);
    const studentAdd = new schema.student({
      student_name: data.studentName,
      student_gender: data.gender,
      student_class: data.class,
      student_class_division: data.division,
      student_addresses: {
        permanent_address: data.permanentAddress,
        current_address: data.currentAddress
      },
      student_photo: path,
      student_stop_location: data.studentStop,
      // parent_details: req.body.parentId,
      // vehicle_details: req.body.vehicleId,
      // route_details: req.body.routeId
    });
    studentAdd
      .save()
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.error(err);
      });
    return studentAdd;
  }


  /**
   * @description - This function shows the details of student in database.
   * @function showStudent
   * @params req - request data of student.
   * @returns studentShow
   */
  async showStudent(req) {
    const studentShow = await schema.student
      .find({
        _id: req.query.studentId,
      }).populate('route_details');

    return studentShow;
  }

  async showAllStudent(req) {
    const studentShow = await schema.student.find({});
    return studentShow;
  }


  /**
   * @description - This function updates the details of student in database.
   * @function updateStudent
   * @params req - request data of student.
   * @returns studentUpdate
   */
  async updateStudent(req) {
    const studentUpdate = await schema.student
      .findOneAndUpdate({
        _id: req.body.studentId,
      }, {
        student_name: req.body.studentName,
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
    return studentUpdate;
  }

  /**
   * @description - This function updates the details of student in database.
   * @function updateStudent
   * @params req - request data of student.
   * @returns studentUpdate
   */
  updateStudentDetails(req, path) {
    const data = JSON.parse(req);
    console.log('json', data);
    console.log(req);
    const studentUpdate = schema.student
      .findByIdAndUpdate({
        _id: data.id,
      }, {
        student_name: data.studentName,
        student_gender: data.gender,
        student_class: data.class,
        student_class_division: data.division,
        student_addresses: {
          permanent_address: data.permanentAddress,
          current_address: data.currentAddress
        },
        student_photo: path,
        student_stop_location: data.studentStop,
      }, {
        new: true,
      })
      .then(data => {
        console.log('studentData' + data);
        return data;
      })
      .catch(err => {
        console.error(err);
      });
    return studentUpdate;
  }


  /**
   * @description - This function removes the details of student in database.
   * @function removeStudent
   * @params req - request data of student.
   * @returns studentRemove
   */
  removeStudent(req) {
    schema.student
      .findByIdAndDelete({
        _id: req.params.id,
      })
      .then(data => {
        console.log('removestudent' + data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  setdriverdetails() {
    const data = driverLocation.getLocationData(req); // get current location data
    data.then(response => {
      let curLocation = response.driverlog[0].current_location;
      let data = curLocation[curLocation.length - 1]; // Get last updated location and time from array
      console.log(data);
      responseData(res, data, "current Location", '');
    });
  }
}

module.exports = StudentModel;