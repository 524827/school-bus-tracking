var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var debug = require('debug')('bus-app-server:server');
var http = require('http');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const parentRouter = require('./routes/parent');
const schoolRouter = require('./routes/school');
const driverRouter = require('./routes/driver');
const vehicleRouter = require('./routes/vehicle');
const studentRouter = require('./routes/student');
const busCoordinatorRouter = require('./routes/buscoordinator');
const otpSenderRouter = require('./routes/otp-sender');
const route = require('./routes/route');
const notification = require('./routes/notification');
const mongoDB = require('./connection/dbConnection');

const mongo = new mongoDB();
var app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'DELETE,POST,GET,PUT');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

/* app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); */
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/', indexRouter);
app.use('/users', usersRouter);
app.use('/parent', parentRouter);
app.use('/school', schoolRouter);
app.use('/driver', driverRouter);
app.use('/vehicle', vehicleRouter);
app.use('/student', studentRouter);
app.use('/notification', notification);
app.use('/buscoordinator', busCoordinatorRouter);
app.use('/otp-sender', otpSenderRouter);
app.use('/dashboard/school', schoolRouter);
app.use('/dashboard/vehicle', vehicleRouter);
app.use('/dashboard/routes', route);
app.use('/dashboard/driver', driverRouter);
app.use('/dashboard/parent', parentRouter);
app.use('/dashboard/student', studentRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, '192.168.43.126');
server.on('error', onError);
server.on('listening', onListening);
// Calling connect method of MongoDb class in dbConnection.
mongo.connect();

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'lisen') {
    throw error;
  }

  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

//module.exports = app;