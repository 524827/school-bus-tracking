(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coordinator-buses-list-buses-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/coordinator/buses-list/buses-list.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/coordinator/buses-list/buses-list.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-refresher (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"crescent\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-card *ngIf=\"vehicleData\">\n    <ion-card-content *ngFor=\"let vehicle of vehicleData\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"4\">\n            <img src=\"{{vehicleImages}}/{{vehicle.vehicle_details.vehicle_photo}}\"  onError=\"this.src='../../../../../assets/default/defaultBus.png';\" class=\"busProfile\"  />\n\n                 </ion-col>\n            <ion-col size=\"8\" class=\"busInfoCol\">\n              <ion-row>\n                <ion-col size=\"2\">\n                  <ion-icon name=\"bus\"> </ion-icon>\n                </ion-col>\n                <ion-col size=\"10\" class=\"info\">\n                  <ion-label>{{vehicle.vehicle_details.vehicle_number}}\n                  </ion-label>\n                </ion-col>\n\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"2\">\n                  <ion-icon name=\"person\"> </ion-icon>\n                </ion-col>\n                <ion-col size=\"10\" class=\"info\">\n                  <ion-label>{{vehicle.driver_details.driver_name}}</ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"2\">\n                  <ion-icon name=\"call\"> </ion-icon>\n                </ion-col>\n                <ion-col size=\"10\" class=\"info\">\n                  <ion-label>{{vehicle.driver_details.mobile_numbers.primary_number}}</ion-label>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"4\" *ngIf=\"vehicle.vehicle_status =='Active'\" margin-top>\n\n            <ion-icon src=\"{{svgIcons}}/whiteLens.svg\" class=\"statusCircleActive\">\n            </ion-icon>\n            <ion-label class=\"busStatusActive\" color=\"success\">{{vehicle.vehicle_status}}</ion-label>\n\n          </ion-col>\n          <ion-col size=\"4\" *ngIf=\"vehicle.vehicle_status =='Parked'\" margin-top>\n\n            <ion-icon src=\"../../../../../assets/images/materialIcons/whiteLens.svg\" class=\"statusCircleParked\">\n            </ion-icon>\n            <ion-label class=\"busStatusParked\" color=\"danger\">{{vehicle.vehicle_status}}</ion-label>\n\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-button class=\"infoButton\"\n              (click)=\"singleBusDetails(vehicle._id,vehicle.vehicle_details.vehicle_number,vehicle.driver_details._id)\">\n              Live Location</ion-button>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-button class=\"infoButton\"\n              (click)=\"adminBusDetails(vehicle._id,vehicle.vehicle_details.vehicle_number)\">Bus Details</ion-button>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n    </ion-card-content>\n\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/login/coordinator/buses-list/buses-list.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/login/coordinator/buses-list/buses-list.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".busProfile {\n  width: 100%;\n  height: 100%;\n  padding-top: none;\n}\n\nion-content {\n  --background: #f3f7fd;\n}\n\nion-card-content {\n  border-bottom: 1px solid #d6cdcd;\n}\n\nion-tab-button [aria-selected=true] {\n  border: none;\n  box-shadow: 0px 2px 0px 0px #488aff inset;\n}\n\nion-icon {\n  font-size: 25px;\n  color: #7986cb;\n}\n\nion-card {\n  width: 88%;\n  height: auto;\n  --background: white;\n  margin-left: 6%;\n  margin-right: 6%;\n}\n\n.infoButton {\n  width: 100%;\n  font-size: 8px;\n  font-weight: bold;\n  padding-top: 10px;\n  --background: #7986cb;\n  border: radius 20;\n}\n\n.busInfoCol {\n  padding-top: none;\n}\n\n.busStatusActive {\n  padding-top: 5px;\n  font-size: 18px;\n}\n\n.busStatusParked {\n  padding-top: 5px;\n  font-size: 18px;\n}\n\n.info {\n  color: black;\n  font-size: 18px;\n}\n\n.statusCircleActive {\n  border: none;\n  color: #16d816;\n  font-size: 15px;\n  padding-right: 5px;\n}\n\n.statusCircleParked {\n  border: none;\n  color: red;\n  font-size: 15px;\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hbWRldi9EZXNrdG9wL2dpdCAvd2hlcmUgaXMgbXkgYnVzL3NyYy9hcHAvcGFnZXMvbG9naW4vY29vcmRpbmF0b3IvYnVzZXMtbGlzdC9idXNlcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9jb29yZGluYXRvci9idXNlcy1saXN0L2J1c2VzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FER0E7RUFDRSxxQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0NBQUE7QUNBRjs7QURJQTtFQUNFLFlBQUE7RUFDQSx5Q0FBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNERjs7QURJQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURLQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNGRjs7QURLQTtFQUNFLGlCQUFBO0FDRkY7O0FES0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNGRjs7QURLQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0ZGOztBRE1BO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNIRjs7QURNQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDSEY7O0FETUE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vY29vcmRpbmF0b3IvYnVzZXMtbGlzdC9idXNlcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1c1Byb2ZpbGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLXRvcDogbm9uZTtcblxufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2YzZjdmZDtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjE0LCAyMDUsIDIwNSk7XG5cbn1cblxuaW9uLXRhYi1idXR0b24gW2FyaWEtc2VsZWN0ZWQ9dHJ1ZV0ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMHB4IDBweCAjNDg4YWZmIGluc2V0O1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICM3OTg2Y2I7XG59XG5cbmlvbi1jYXJkIHtcbiAgd2lkdGg6IDg4JTtcbiAgaGVpZ2h0OiBhdXRvO1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogNiU7XG4gIG1hcmdpbi1yaWdodDogNiU7XG5cbn1cblxuLmluZm9CdXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjNzk4NmNiO1xuICBib3JkZXI6IHJhZGl1cyAyMDtcbn1cblxuLmJ1c0luZm9Db2wge1xuICBwYWRkaW5nLXRvcDogbm9uZTtcbn1cblxuLmJ1c1N0YXR1c0FjdGl2ZSB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmJ1c1N0YXR1c1BhcmtlZCB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuXG4uaW5mbyB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uc3RhdHVzQ2lyY2xlQWN0aXZlIHtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogcmdiKDIyLCAyMTYsIDIyKTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5zdGF0dXNDaXJjbGVQYXJrZWQge1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufSIsIi5idXNQcm9maWxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy10b3A6IG5vbmU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjNmN2ZkO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNmNkY2Q7XG59XG5cbmlvbi10YWItYnV0dG9uIFthcmlhLXNlbGVjdGVkPXRydWVdIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDBweCAwcHggIzQ4OGFmZiBpbnNldDtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjNzk4NmNiO1xufVxuXG5pb24tY2FyZCB7XG4gIHdpZHRoOiA4OCU7XG4gIGhlaWdodDogYXV0bztcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDYlO1xuICBtYXJnaW4tcmlnaHQ6IDYlO1xufVxuXG4uaW5mb0J1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICAtLWJhY2tncm91bmQ6ICM3OTg2Y2I7XG4gIGJvcmRlcjogcmFkaXVzIDIwO1xufVxuXG4uYnVzSW5mb0NvbCB7XG4gIHBhZGRpbmctdG9wOiBub25lO1xufVxuXG4uYnVzU3RhdHVzQWN0aXZlIHtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uYnVzU3RhdHVzUGFya2VkIHtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uaW5mbyB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uc3RhdHVzQ2lyY2xlQWN0aXZlIHtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzE2ZDgxNjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5zdGF0dXNDaXJjbGVQYXJrZWQge1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/login/coordinator/buses-list/buses-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/login/coordinator/buses-list/buses-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: BusesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusesListComponent", function() { return BusesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_vehicle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/vehicle.service */ "./src/app/services/vehicle.service.ts");
/* harmony import */ var _services_driver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/driver.service */ "./src/app/services/driver.service.ts");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _services_alert_box_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/alert-box.service */ "./src/app/services/alert-box.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_route_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/route.service */ "./src/app/services/route.service.ts");









var BusesListComponent = /** @class */ (function () {
    /**
     * @description - This constructor initializes instances of VehicleService, DriverService, Router, ActivatedRoute, AlertService.
     * @constructor
     * @param {VehicleService} vehicleService - Instance of VehicleService.
     * @param {DriverService} driverService - Instance of DriverService.
     * @param {Router} router - Instance of router.
     * @param {ActivatedRoute} route - Instance of route.
     */
    function BusesListComponent(vehicleService, driverService, router, route, loaderService, alertBoxService, routeService) {
        var _this = this;
        this.vehicleService = vehicleService;
        this.driverService = driverService;
        this.router = router;
        this.route = route;
        this.loaderService = loaderService;
        this.alertBoxService = alertBoxService;
        this.routeService = routeService;
        // Assigning vehicle images folder link of server to vehicleImages member.
        this.vehicleImages = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].vehicleImages;
        // Assigning svg icons folder link of server to svgIcons member.
        this.svgIcons = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].svgIcons;
        // Get the route parameter.
        this.route.params.subscribe(function (res) {
            _this.userType = res.userType;
        });
    }
    BusesListComponent.prototype.ngOnInit = function () {
        // Calling getAllVehicleFromServer method of vehicleService to fetch all vehicle deails.
        this.getAllVehicleFromServer();
    };
    /**
     * @description - This function call the vehicle service and get the response. This service also activate response return from service.
     * @function - getAllVehicleFromServer
     */
    BusesListComponent.prototype.getAllVehicleFromServer = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var vehicleDetails;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.vehicleService.getServerVehicleDetails('getAllVehicleDetails')];
                    case 1:
                        vehicleDetails = _a.sent();
                        // Subscribing the vehicleDetails to get the data.
                        vehicleDetails.subscribe(function (res) {
                            // Assigning subscribed data to vehicleData member.
                            _this.vehicleData = res['data'];
                            // Dismiss the loader.
                            _this.loaderService.loaderDismiss();
                        }, function (err) {
                            // Dismiss the loader.
                            _this.loaderService.loaderDismiss();
                            // Calling the presentAlert method of AlertBoxService using the alertBoxService instance.
                            _this.alertBoxService.presentAlert('Alert', 'Server Error', 'Server not responding. Try after sometime.');
                        });
                        // Dismiss the loader.
                        this.loaderService.loaderDismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @description - This function navigate route to admin-bus-details component.
     * @function - adminBusDetails
     * @param {string} vehicleId  - Stores the id of the vehicle.
     * @param {string} vehicleNumber - Stores the number of the vehicle.
     * @returns - void.
     */
    BusesListComponent.prototype.adminBusDetails = function (vehicleId, vehicleNumber) {
        console.log(vehicleId);
        // Navigating the route to admin-bus-details components with userType, vehicleId and vehicleNumber parameter.
        this.router.navigate(['/admin-bus-details'], {
            queryParams: {
                user: this.userType,
                vehicleId: vehicleId,
                vehicleNumber: vehicleNumber,
            },
        });
    };
    /**
     * @description - This function navigate route to single-bus-map component.
     * @function - singleBusDetails
     * @param {string} vehicleId  - Stores the id of the vehicle.
     * @param {string} vehicleNumber - Stores the number of the vehicle.
     * @param {string} driverId - Stores the id of the driver.
     * @returns - void.
     */
    BusesListComponent.prototype.singleBusDetails = function (vehicleId, vehicleNumber, driverId) {
        var _this = this;
        console.log(vehicleId);
        this.routeService.getRouteAllDetails(driverId).subscribe(function (data) {
            var routeData = data['data'];
            _this.routeId = routeData._id;
            console.log(_this.routeId);
            _this.router.navigate(['/single-bus-map'], {
                queryParams: {
                    user: _this.userType,
                    driverId: driverId,
                    vehicleNumber: vehicleNumber,
                    routeId: _this.routeId,
                },
            });
        });
    };
    BusesListComponent.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            // Calling getSchoolFromServer method.
            _this.getAllVehicleFromServer();
            event.target.complete();
        }, 2000);
    };
    BusesListComponent.prototype.ngOnDestroy = function () {
        // Dismiss the loader.
        this.loaderService.loaderDismiss();
    };
    BusesListComponent.ctorParameters = function () { return [
        { type: _services_vehicle_service__WEBPACK_IMPORTED_MODULE_3__["VehicleService"] },
        { type: _services_driver_service__WEBPACK_IMPORTED_MODULE_4__["DriverService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
        { type: _services_alert_box_service__WEBPACK_IMPORTED_MODULE_6__["AlertBoxService"] },
        { type: src_app_services_route_service__WEBPACK_IMPORTED_MODULE_8__["RouteService"] }
    ]; };
    BusesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buses-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./buses-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/coordinator/buses-list/buses-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./buses-list.component.scss */ "./src/app/pages/login/coordinator/buses-list/buses-list.component.scss")).default]
        })
        /**
         * @Class - BusesListComponent
         */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_vehicle_service__WEBPACK_IMPORTED_MODULE_3__["VehicleService"],
            _services_driver_service__WEBPACK_IMPORTED_MODULE_4__["DriverService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _services_alert_box_service__WEBPACK_IMPORTED_MODULE_6__["AlertBoxService"],
            src_app_services_route_service__WEBPACK_IMPORTED_MODULE_8__["RouteService"]])
    ], BusesListComponent);
    return BusesListComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/coordinator/buses-list/buses-list.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/login/coordinator/buses-list/buses-list.module.ts ***!
  \*************************************************************************/
/*! exports provided: BusesListComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusesListComponentModule", function() { return BusesListComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _buses_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buses-list.component */ "./src/app/pages/login/coordinator/buses-list/buses-list.component.ts");
/* harmony import */ var _buses_list_router_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./buses-list.router.module */ "./src/app/pages/login/coordinator/buses-list/buses-list.router.module.ts");








var BusesListComponentModule = /** @class */ (function () {
    function BusesListComponentModule() {
    }
    BusesListComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        // Route for buses-list compomnent.
                        path: '',
                        component: _buses_list_component__WEBPACK_IMPORTED_MODULE_6__["BusesListComponent"],
                    },
                ]),
                _buses_list_router_module__WEBPACK_IMPORTED_MODULE_7__["BusesListComponentRoutingModule"],
            ],
            declarations: [_buses_list_component__WEBPACK_IMPORTED_MODULE_6__["BusesListComponent"]],
        })
    ], BusesListComponentModule);
    return BusesListComponentModule;
}());



/***/ }),

/***/ "./src/app/pages/login/coordinator/buses-list/buses-list.router.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/login/coordinator/buses-list/buses-list.router.module.ts ***!
  \********************************************************************************/
/*! exports provided: BusesListComponentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusesListComponentRoutingModule", function() { return BusesListComponentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _buses_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buses-list.component */ "./src/app/pages/login/coordinator/buses-list/buses-list.component.ts");




var routes = [
    // Route for buses-list compomnent.
    {
        path: '',
        component: _buses_list_component__WEBPACK_IMPORTED_MODULE_3__["BusesListComponent"],
    },
];
var BusesListComponentRoutingModule = /** @class */ (function () {
    function BusesListComponentRoutingModule() {
    }
    BusesListComponentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], BusesListComponentRoutingModule);
    return BusesListComponentRoutingModule;
}());



/***/ }),

/***/ "./src/app/services/route.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/route.service.ts ***!
  \*******************************************/
/*! exports provided: RouteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteService", function() { return RouteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var RouteService = /** @class */ (function () {
    function RouteService(http) {
        this.http = http;
    }
    /**
     * Get routes details associated with driver
     * @function getRouteDetails()
     * @param driverId
     */
    RouteService.prototype.getRouteDetails = function (driverId) {
        var data = { driver_id: driverId };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-type', 'application/json');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].driverUrl + "/routeDetails", data, { headers: headers });
    };
    /**
     * Get routes details associated with driver
     * @function getRouteAllDetails()
     * @param driverId
     */
    RouteService.prototype.getRouteAllDetails = function (driverId) {
        var data = { driver_id: driverId };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-type', 'application/json');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].driverUrl + "/routeAllDetails", data, { headers: headers });
    };
    /**
     * This function fetch driver details from giver route.
     * @param routeId - route id
     */
    RouteService.prototype.getRouteDriverId = function (routeId) {
        var data = { routeId: routeId };
        console.log(data);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-type', 'application/json');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].parentUrl + '/driverDetails', data, { headers: headers });
    };
    RouteService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    RouteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RouteService);
    return RouteService;
}());



/***/ })

}]);
//# sourceMappingURL=coordinator-buses-list-buses-list-module.js.map