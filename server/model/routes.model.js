const mongoDb = require('../connection/dbConnection.js');
const schema = require('../model/schemasModel');
// const mongo = new mongoDb();


class RoutesModel {

  constructor() {
    //  mongo.connect();
  }

  add(req) {
    const routeadd = new schema.routes({
      vehicle_id: req.body.vehicleId,
      driver_id: req.body.driverId,
      forwards_routes: [{
        $push: {
          location: req.body.location,
          time: req.body.time
        }
      }],
      backwards_routes: [{
        $push: {
          location: req.body.location,
          time: req.body.time
        }
      }]
    });
    routeadd.save().then(data => {
      console.log(data);
    }).catch(err => {
      console.error(err);
    });
    return routeadd;
  }

  async showroutes(req) {
    const routesShow = new schema.routes.find({
      $and: [{
        driver_id: req.body.drverId
      }],
    }).then(async data => {
      console.log(data);
      return data;
    }).catch(err => {
      console.error(err);
    });
    return routesShow;
  }

  async updateRoutes(req) {
    const routesUpdate = new schema.routes
      .findOneAndUpdate({
        driver_id: req.body.driverId
      }, {
        $push: {
          location: req.body.location,
          time: req.body.time
        }
      }).then(data => {
        console.log(data);
        return data;
      }).catch(err => {
        console.error(err);
      });
    return routesUpdate;
  }

  removeroutes(req) {
    const routesRemove = schema.routes.findOne({
      driver_id: req.body.driverId
    }).select({
      forwards_routes: {
        $slice: -1
      },
      backwards_routes: {
        $slice: -1
      }
    });
    return routesRemove;
  }
}

module.export = RoutesModel;