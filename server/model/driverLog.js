const mongoDB = require('../connection/dbConnection');
const schema = require('./schemasModel');

class DriverLog {
  constructor() {
    // new mongoDB().connect();
  }

  /**
   *
   * @param req contains body data data
   * This function maintain driver log.
   */
  logDetails(req) {
    /**
     * check current area and driver in route schema.If data is exists then data is store in driverLog schema
     */
    schema.routes.findOne({
        "forward_routes.location": req.body.curArea,
        "driver_id": req.body.driver_id
      },function (error, data) {
        /**
         * check current Date or Driver is exist or not. If exist then add them into collection
         */
        if (data) {

          schema.driverlog.findOneAndUpdate({
            "driver_id": req.body.driver_id,
            "driverlog.currentDate": req.body.currentDate
          }, {
            $push: {
              "driverlog.$.current_location": {
                "current_time": req.body.currentTime,
                "current_area": req.body.curArea,
                "curLocation": req.body.location
              }
            }
          }, function (error, res) {
            if (res) {}
            /**
             * If current data is not exist in collection then add current date in collection base on driver_id
             * It store data in collection only once in whole day
             */
            else {
              console.log("in driverLog");
              schema.driverlog.findOneAndUpdate({ //if data is not exist
                "driver_id": req.body.driver_id
              }, {
                $push: {
                  "driverlog": {
                    "currentDate": req.body.currentDate,
                    "start_time": req.body.currentTime,
                    "initial_location": req.body.curArea
                  }
                }
              }, function (error, response) {});
            }
          });
        } else {
          console.log("location not match");
        }
      });
  }
  /**
   *This function get currently store location details
   * @param req
   *
   */
  getLocationData(req) {

    const response = schema.driverlog.findOne({
      "driver_id": req.body.driver_id
    }).select({
      "driverLog": {
        "$slice": -1
      }
    });
    return response;
  }
}
module.exports = DriverLog;