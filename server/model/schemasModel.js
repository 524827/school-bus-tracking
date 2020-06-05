const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schoolSchema = Schema({
  school_name: String,
  branch: String,
  school_address: String,
  school_photos: String,
  school_contact: {
    office: Number,
    office_email: String
  },
  vehicle_details: [{
    type: Schema.Types.ObjectId,
    ref: 'vehicle',
    unique: true
  }],
  driver_details: [{
    type: Schema.Types.ObjectId,
    ref: 'driver',
    unique: true
  }],
  student_details: [{
    type: Schema.Types.ObjectId,
    ref: 'student',
    unique: true
  }],
});

exports.school = mongoose.model('school', schoolSchema);



const parentSchema = new Schema({
  parent_name: String,
  parent_contact_details: {
    father_mobile_number: Number,
    mother_mobile_number: Number,
    parent_landline_number: Number,
    alternate_mobile_number: Number,
    parent_address: String,
    parent_email: String,
  },
  parent_photo: String,
  parent_username: String,
  parent_password: String,
  student_details: [{
    type: Schema.Types.ObjectId,
    ref: 'student',
    unique: true
  }, ],
});

exports.parent = mongoose.model('parent', parentSchema);



const driverSchema = new Schema({
  driver_name: String,
  driver_addresses: {
    permanent_address: String,
    current_address: String
  },
  mobile_numbers: {
    primary_number: Number,
    secondary_number: Number
  },
  driver_email: String,
  license_number: String,
  driver_documents: {
    photo: String,
    adhar_card_details: {
      adhar_card_number: Number,
      path: String
    },
    pan_card_details: {
      pan_card_number: String,
      path: String
    }
  },
  driver_username: String,
  driver_password: String,
  school_details: {
    type: Schema.Types.ObjectId,
    ref: 'school',
    unique: true
  },
  vehicle_details: {
    type: Schema.Types.ObjectId,
    ref: 'vehicle',
    unique: true
  }
});

exports.driver = mongoose.model('driver', driverSchema);

const vehicleSchema = new Schema({
  vehicle_details: {
    vehicle_photo: String,
    vehicle_number: String,
    insurance_validity: Date,
    chassis_number: String,
    fuel_type: String,
    company_name: String,
    model_type: String,
    seat_capacity: Number,

  },
  driver_details: {
    type: Schema.Types.ObjectId,
    ref: 'driver',
    unique: true
  },
  school_details: {
    type: Schema.Types.ObjectId,
    ref: 'school',
    sparse: true
  },
  vehicle_status: String,
});

exports.vehicle = mongoose.model('vehicle', vehicleSchema);


const studentSchema = new Schema({
  student_name: String,
  student_gender: String,
  student_class: String,
  student_class_division: String,
  student_addresses: {
    permanent_address: String,
    current_address: String
  },
  student_photo: String,
  student_stop_location: String,

  route_details: {
    type: Schema.Types.ObjectId,
    ref: 'route',
    unique: true
  }
});

exports.student = mongoose.model('student', studentSchema);


const busCoordinatorSchema = new Schema({
  buscoordinator_name: String,
  buscoordinator_address: String,
  buscoordinator_photo: String,
  buscoordinator_mobile_number: {
    primary_number: Number,
    secondary_number: Number
  },
  buscoordinator_email_address: String,
  buscoordinator_username: String,
  buscoordinator_password: String
});

exports.buscoordinator = mongoose.model('buscoordinator', busCoordinatorSchema);


// Schema for Route Details
const routeSchema = new Schema({
  route_id: String,
  vehicle_id: {
    type: Schema.Types.ObjectId,
    ref: 'vehicle',
  },
  driver_id: {
    type: Schema.Types.ObjectId,
    ref: 'driver'
  },
  forward_routes: {
    type: Array,
    location: {
      type: String,
      unique: true
    },
    time: {
      type: Date,
      unique: true
    }
  },
  backward_routes: {
    type: Array,
    location: {
      type: String,
      unique: true
    },
    time: {
      type: Date,
      unique: true
    }
  },
  userToken: {
    type: Array
  }
});
exports.routes = mongoose.model('route', routeSchema);


/*
const routeSchema = Schema({
  _id: Schema.Types.ObjectId,
  route_start_point: String,
  route_end_point: String,
  routes: {
    type: Array,
    route_coordinates: Array,
  }
});

exports.driverlog = mongoose.model('driverlogs', driverLogSchema);
=======
module.exports = mongoose.model('route', routeSchema);
 */

const driverLogSchema = new Schema({
  driver_id: {
    type: Schema.Types.ObjectId,
    ref: 'drivers'
  },
  driverlog: {
    type: Array,
    currentDate: {
      type: String
    },
    start_time: {
      type: String
    },
    initial_location: {
      type: String
    },
    current_location: {
      type: Array,
      current_time: {
        type: Date,
        unique: true
      },
      curLocation: {
        latitude: Number,
        Longitude: Number
      },
      current_area: {
        type: String,
        unique: true
      }
    }
  }
});
exports.driverlog = mongoose.model('driverlog', driverLogSchema);