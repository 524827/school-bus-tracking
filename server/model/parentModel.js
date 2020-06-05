const mongoDB = require('../connection/dbConnection');
const schema = require('./schemasModel');
const encryptPassword = require('./encryptPassword');
// const mongo = new mongoDB();

/**
 * @description - This class add, remove, update and fetch the parent details from the database.
 * @class ParentModel
 */
class ParentModel {
  /**
   * @description - Initializes connection with database.
   * @constructor
   */
  constructor() {
    // Calling connect method of MongoDb class in dbConnection.
    // mongo.connect();
  }

  /**
   * @description - This function adds the details of parent to database.
   * @function addParent
   * @params req - request data of parent.
   * @returns parentAdd
   */
  addParent(req, path) {
    const data = JSON.parse(req);
    console.log(data);
    console.log(data.parentName);
    console.log('path' + path);
    const encryptedPassword = encryptPassword(data.password);
    const parentAdd = new schema.parent({
      parent_name: data.parentName,
      parent_contact_details: {
        father_mobile_number: data.father_mobileNumber,
        mother_mobile_number: data.mother_mobileNumber,
        parent_landline_number: data.landline_Number,
        alternate_mobile_number: data.alternate_Number,
        parent_email: data.email,
      },
      parent_photo: path,
      parent_username: data.username,
      parent_password: encryptedPassword, //req.body.parentPassword,
      student_details: [data.students],
    });
    console.log(parentAdd);
    parentAdd
      .save()
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.error(err);
      });
    return parentAdd;
  }


  /**
   * @description - This function shows the details of parent in database.
   * @function showParent
   * @params req - request data of parent.
   * @returns parentShow
   */
  async showParent(req) {
    const parentShow = await schema.parent
      .find({
        $and: [{
            parent_username: req.query.parentUserName,
          },
          {
            parent_password: encryptPassword(
              req.query.parentPassword
            ),
          },
        ],
      }).populate('student_details').populate('route_details');
    /*  .then(async data => {
       console.log(data);

       return data;
     })
     .catch(err => {
       console.error(err);
     }); */
    return parentShow;
  }

  showAllParent(req) {
    const parentShow = schema.parent.find({});
    return parentShow;
  }

  /**
   * @description - This function shows the details of parent in database by parent id.
   * @function showParentById
   * @params req - request data of parent.
   * @returns parentShow
   */
  async showParentById(req) {
    const parentShow = await schema.parent
      .find({
        _id: req.query.parentId
      }).populate('student_details');
    /* .then(async data => {
      console.log(data);

      return data;
    })
    .catch(err => {
      console.error(err);
    }); */
    return parentShow;
  }

  /**
   * @description - This function shows the details of parent in database by parent email.
   * @function showParentByEmail
   * @params req - request data of parent.
   * @returns parentShow
   */
  async showParentByEmail(req) {
    const parentShow = await schema.parent
      .find({
        'parent_contact_details.parent_email': req.query.userEmail,
      }).populate('student_details');
    /* .then(data => {
      console.log(data);

      return data;
    })
    .catch(err => {
      console.error(err);
    }); */
    return parentShow;
  }

  /**
   * @description - This function updates the details of parent in database.
   * @function updateParentAllDetails
   * @params req - request data of parent.
   * @returns parentUpdate
   */
  async updateParentAllDetails(req) {
    console.log(req.body);
    console.log('pass : ', req.body.parentPassword);
    if (req.body.parentPassword) {
      const parentUpdate = await schema.parent
        .findOneAndUpdate({
          _id: req.body.parentId,
        }, {
          parent_name: req.body.parentName,
          parent_address: req.body.parentAddress,
          parent_contact_details: {
            father_mobile_number: req.body.fatherMobileNumber,
            alternate_mobile_number: req.body.alternateMobileNumber,
            parent_email: req.body.parentEmail,
          },
          parent_username: req.body.parentUserName,
          parent_password: encryptPassword(
            req.body.parentPassword
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
      return parentUpdate;
    } else {
      const parentUpdate = await schema.parent
        .findOneAndUpdate({
          _id: req.body.parentId,
        }, {
          parent_name: req.body.parentName,
          parent_address: req.body.parentAddress,
          parent_contact_details: {
            father_mobile_number: req.body.fatherMobileNumber,
            alternate_mobile_number: req.body.alternateMobileNumber,
            parent_email: req.body.parentEmail,
          },
          parent_username: req.body.parentUserName,
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
      return parentUpdate;
    }

  }

  /**
   * @description - This function updates the details of parent in database.
   * @function updateParent
   * @params req - request data of parent.
   * @returns parentUpdata
   */
  async updateParent(req) {
    const parentUpdate = await schema.parent
      .findOneAndUpdate({
        _id: req.query.parentId
      }, {
        parent_password: encryptPassword(
          req.query.parentPassword
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
    return parentUpdate;
  }

  /**
   * @description - This function updates the details of parent in database.
   * @function updateParent
   * @params req - request data of parent.
   * @returns parentUpdata
   */
  updateParentDetails(req) {
    // const encryptedPassword = this.encryptPassword(req.password);
    const parentUpdate = schema.parent
      .findOneAndUpdate({
        _id: req.params.id
      }, {
        parent_name: req.body.parentName,
        parent_contact_details: {
          father_mobile_number: req.body.father_mobileNumber,
          mother_mobile_number: req.body.mother_mobileNumber,
          parent_landline_number: req.body.landline_Number,
          alternate_mobile_number: req.body.alternate_Number,
          parent_email: req.body.email,
        },
        parent_username: req.body.username,
      }, {
        new: true,
      });
    // .then(data => {
    //   console.log('Parentupdate' + data);
    //   return data;
    // })
    // .catch(err => {
    //   console.error(err);
    // });
    return parentUpdate;
  }

  /**
   * @description - This function updates the photo of parent in database.
   * @function updateParentPhoto
   * @params req - request data of parent.
   * @returns parentUpdate
   */
  async updateParentPhoto(req) {
    console.log('request', req.body.userId);
    const driverUpdate = await schema.parent
      .findOneAndUpdate({
        _id: req.body.userId,
      }, {
        parent_photo: req.file.filename,

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
   * @description - This function removes the details of parent in database.
   * @function removeParent
   * @params req - request data of parent.
   * @returns parentRemove
   */
  removeParent(req) {
    schema.parent
      .findByIdAndDelete({
        // parent_name: req.query.parent_name,
        _id: req.params.id,
      })
      .then(data => {
        console.log('removedata' + data);
      })
      .catch(err => {
        console.error('removeErr' + err);
      });
  }

  getDiverRouteId(req) {
    const query = schema.routes.findOne({
      "_id": req.body.routeId
    }).select('driver_id');
    return query;
  }

  forwardRoutes(req) {
    const query = schema.routes.findOne({
      "_id": req.body.routeId
    }).select('forward_routes');
    return query;
  }
  // get backward i.e School to Home route details
  backwardRoutes(req) {
    const query = schema.routes.findOne({
      "_id": req.body.routeId
    }).select('backward_routes');
    return query;
  }

  getLocationData(req) {
    console.log('Request : ', req.body);
    const response = schema.driverlog.findOne({
      "driver_id": req.body.driver_id
    }).select({
      "driverlog": {
        "$slice": -1
      }
    });
    return response;
  }
}

module.exports = ParentModel;





// Encryption
/*  encryptPassword(username, password) {
   const key = crypto.createCipher('aes-128-cbc', username);
   let encryptedPassword = key.update(password, 'utf8', 'hex');
   encryptedPassword += key.final('hex');
   console.log(encryptedPassword);
   return encryptedPassword;
 } */

/* // Decryption
decryptPassword(encryptedPassword) {
  const key = crypto.createDecipher('aes-128-cbc', 'mypassword');
  let decryptedPassword = key.update(encryptedPassword, 'hex', 'utf8');
  decryptedPassword += key.final('utf8');

  console.log(decryptedPassword);
  return decryptedPassword;
} */