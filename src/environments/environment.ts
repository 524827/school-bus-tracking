// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const serverUrl = 'http://192.168.43.126:3000';
export const environment = {
  production: false,
  otpUrl: `${serverUrl}/otp-sender/send-otp`,
  parentUrl: `${serverUrl}/parent`,
  schoolUrl: `${serverUrl}/school`,
  studentUrl: `${serverUrl}/student`,
  driverUrl: `${serverUrl}/driver`,
  busCoordinatorUrl: `${serverUrl}/buscoordinator`,
  vehicleUrl: `${serverUrl}/vehicle`,
  notification: `${serverUrl}/notification`,
  parentImages: `${serverUrl}/images/parents`,
  schoolImages: `${serverUrl}`,
  studentImages: `${serverUrl}/images/students`,
  driverImages: `${serverUrl}/images/drivers`,
  busCoordinatorImages: `${serverUrl}/images/busCoordinators`,
  userImages: `${serverUrl}/images/userImages`,
  vehicleImages: `${serverUrl}/images/vehicles`,
  svgIcons: `${serverUrl}/images/svgicons`,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
