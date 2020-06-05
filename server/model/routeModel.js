const mongoDB = require('../connection/dbConnection');
const schema = require('./schemasModel');
// const mongo = new mongoDB();

/**
 * @description - This class add, remove, update and fetch the route details from the database.
 * @class VehicleModel
 */
class RouteModel {



  /**
   * @description - Initializes connection with database.
   * @constructor
   */
  constructor() {
    // Calling connect method of MongoDb class in dbConnection.
    // mongo.connect();
  }


  /**
   *Add route details in database
   * @param {object} req - request data of route
   */
  addRoutes(data) {
    console.log('data  ', data);
    const forwardRoutes = data.routeDetails;
    const routeData = data.routeDetails;
    const backwardRoutes = routeData.slice().reverse();
    const routeDetails = new schema.routes({
      "route_id": data.routeID,
      "forward_routes": forwardRoutes,
      "backward_routes": backwardRoutes,
      "vehicle_id": data.vehicle_id,
      "driver_id": data.driver_id
    });
    // routeDetails.forward_routes.push(req.body.routeDetails);
    // routeDetails.backward_routes.push(backwardRoutes)
    return routeDetails;
  }
  /**
   *show route details
   * @param {object} req - request data of route
   */
  showRoutes(req) {

    const routeDetails = schema.vehicle
      .find({})
    return routeDetails;

  }

  showAllRoutes(req) {
    const routeDetails = schema.routes
      .find({}).populate([{
        path: 'vehicle_id',
        model: 'vehicle'
      }, {
        path: 'driver_id',
        model: 'driver'
      }]);
    return routeDetails;
  }


  /**
   * update route details
   * @param {object} req -request data of routes
   */
  updateRoutes(routeData) {
    console.log(routeData);
    const updateRoute = schema.routes
      .findOneAndUpdate({
        _id: routeData.db_id
      }, {
        "driver_id": routeData.driver_id,
        "vehicle_id": routeData.vehicle_id,
        "route_id": routeData.route_id,
      }, {
        new: true,
      })
    return updateRoute;
    /*   schema.routes
      .findOne({
        _id: routeData.db_id,
      }, function (error, res) {
        res.driver_id = routeData.driver_id;
        res.vehicle_id = routeData.vehicle_id;
        res.route_id = routeData.route_id;
        res.save().then(data => {}).catch(err => {});
      });
 */

  }

  /**
   * remove route details
   * @param {object} route_id - route id of particular route
   */
  removeRoutes(route_id) {
    const removeRoute = schema.routes
      .findOneAndDelete({
        _id: route_id
      });
    return removeRoute;
  }
}

module.exports = RouteModel;