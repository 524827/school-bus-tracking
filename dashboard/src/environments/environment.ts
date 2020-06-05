/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  routeUrl: 'http://192.168.43.126:3000/dashboard/routes',
  driverUrl: 'http://192.168.43.126:3000/dashboard/driver',
  vehicleUrl: 'http://192.168.43.126:3000/dashboard/vehicle',
  schoolUrl: 'http://192.168.43.126:3000/dashboard/school',
  parentUrl: 'http://192.168.43.126:3000/dashboard/parent',
  studentUrl: 'http://192.168.43.126:3000/dashboard/student',
};
