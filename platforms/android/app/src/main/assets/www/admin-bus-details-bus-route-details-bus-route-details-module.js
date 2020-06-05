(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-bus-details-bus-route-details-bus-route-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/coordinator/buses-list/admin-bus-details/bus-route-details/bus-route-details.component.html":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/coordinator/buses-list/admin-bus-details/bus-route-details/bus-route-details.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-card no-margin>\n    <ion-card-header>\n      <ion-grid no-margin>\n        <ion-row no-padding>\n          <ion-col size=\"5\" no-padding>\n            <ion-row no-padding>\n              <ion-col size=\"12\" text-left no-padding>{{startPoint.stop}}</ion-col>\n            </ion-row>\n            <ion-row no-padding>\n              <ion-col size=\"12\" text-left no-padding><b >Departure: </b> {{startPoint.time.morning}}</ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col size=\"2\" text-center no-padding>\n            <ion-icon class=\"arrowRight\" no-padding src=\"{{svgIcons}}/arrowRight.svg\">\n            </ion-icon>\n          </ion-col>\n          <ion-col size=\"5\" no-padding>\n            <ion-row no-padding>\n              <ion-col size=\"12\" text-right no-padding>{{schoolData.stop}}</ion-col>\n            </ion-row>\n            <ion-row no-padding>\n              <ion-col size=\"12\" text-right no-padding><b >Arrival: </b> {{schoolData.time.morning}}</ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-header>\n\n    <ion-card-content padding margin *ngIf=\"routeData.length>0\">\n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-icon class=\"busIcon\" id=\"busIcon\" src=\"{{svgIcons}}/whiteBus.svg\">\n          </ion-icon>\n          <div class=\"stopsLine\"></div>\n        </ion-col>\n        <ion-col size=\"4\" text-center></ion-col>\n        <ion-col size=\"3\" text-center><b>Morning</b></ion-col>\n        <ion-col size=\"3\" text-center><b>Afternoon</b></ion-col>\n      </ion-row>\n      <ion-row class=\"iterableRow\" *ngFor=\"let route of routeData\">\n        <ion-col size=\"2\" class=\"abc\">\n\n\n\n\n\n          <div class=\"stopsLine\">\n            <div class=\"circleDiv\">\n\n            </div>\n          </div>\n\n\n        </ion-col>\n        <ion-col size=\"4\" text-left class=\"iterableCol\">{{route.stop}}</ion-col>\n        <ion-col size=\"3\" text-center class=\"iterableCol\">{{route.time.morning}}</ion-col>\n        <ion-col size=\"3\" text-center class=\"iterableCol\">{{route.time.afternoon}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"2\" class=\"iterableRow\">\n          <ion-icon class=\"schoolIcon\" id=\"schoolIcon\" src=\"{{svgIcons}}/whiteSchool.svg\">\n          </ion-icon>\n        </ion-col>\n        <ion-col size=\"4\" text-justify class=\"iterableCol\">{{schoolData.stop}}</ion-col>\n        <ion-col size=\"3\" text-center class=\"iterableCol\">{{schoolData.time.morning}}</ion-col>\n        <ion-col size=\"3\" text-center class=\"iterableCol\">{{schoolData.time.afternoon}}</ion-col>\n      </ion-row>\n    </ion-card-content>\n\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/login/coordinator/buses-list/admin-bus-details/bus-route-details/bus-route-details.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/login/coordinator/buses-list/admin-bus-details/bus-route-details/bus-route-details.component.scss ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card-header {\n  --background: rgba(240, 240, 240, 0.945);\n}\n\n.iterableRow {\n  height: 80px;\n}\n\n.iterableCol {\n  padding-top: 20px;\n}\n\n.stopsLine {\n  background-color: #b3b3b3;\n  width: 10px;\n  height: 160%;\n  position: relative;\n  left: 45%;\n}\n\n.circleDiv {\n  background-color: #333232;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  position: absolute;\n  top: 18%;\n  z-index: 1;\n}\n\n.busIcon {\n  position: absolute;\n  top: 5%;\n  left: 21%;\n  zoom: 220%;\n  z-index: 1;\n  border: 1px solid black;\n  border-radius: 50%;\n  background-color: black;\n  color: white;\n}\n\n.schoolIcon {\n  position: absolute;\n  top: 15%;\n  left: 21%;\n  zoom: 220%;\n  z-index: 1;\n  border: 1px solid black;\n  border-radius: 50%;\n  background-color: black;\n  color: white;\n}\n\n.arrowRight {\n  font-size: 40px;\n  color: black;\n}\n\nb {\n  color: #3580c7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hbWRldi9EZXNrdG9wL2dpdCAvd2hlcmUgaXMgbXkgYnVzL3NyYy9hcHAvcGFnZXMvbG9naW4vY29vcmRpbmF0b3IvYnVzZXMtbGlzdC9hZG1pbi1idXMtZGV0YWlscy9idXMtcm91dGUtZGV0YWlscy9idXMtcm91dGUtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vY29vcmRpbmF0b3IvYnVzZXMtbGlzdC9hZG1pbi1idXMtZGV0YWlscy9idXMtcm91dGUtZGV0YWlscy9idXMtcm91dGUtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdDQUFBO0FDQ0Y7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtBQ0FGOztBRElBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0EsU0FBQTtBQ0ZGOztBRFFBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQ0xGOztBRFNBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ05GOztBRFNBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ05GOztBRFdBO0VBRUUsZUFBQTtFQUNBLFlBQUE7QUNURjs7QURZQTtFQUNFLGNBQUE7QUNURiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2Nvb3JkaW5hdG9yL2J1c2VzLWxpc3QvYWRtaW4tYnVzLWRldGFpbHMvYnVzLXJvdXRlLWRldGFpbHMvYnVzLXJvdXRlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjQwLCAyNDAsIDI0MCwgMC45NDUpO1xufVxuXG5cbi5pdGVyYWJsZVJvdyB7XG4gIGhlaWdodDogODBweDtcbn1cblxuLml0ZXJhYmxlQ29sIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cblxuLnN0b3BzTGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzksIDE3OSwgMTc5KTtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTYwJTtcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDQ1JTtcbiAgLy9tYXJnaW4tbGVmdDogNDglO1xuICAvL21hcmdpbi1yaWdodDogNDcuNSU7XG5cbn1cblxuLmNpcmNsZURpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgNTAsIDUwKTtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTglO1xuICB6LWluZGV4OiAxO1xuXG59XG5cbi5idXNJY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUlO1xuICBsZWZ0OiAyMSU7XG4gIHpvb206IDIyMCU7XG4gIHotaW5kZXg6IDE7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zY2hvb2xJY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1JTtcbiAgbGVmdDogMjElO1xuICB6b29tOiAyMjAlO1xuICB6LWluZGV4OiAxO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYWJjIHt9XG5cbi5hcnJvd1JpZ2h0IHtcblxuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuYiB7XG4gIGNvbG9yOiByZ2IoNTMsIDEyOCwgMTk5KTtcbn0iLCJpb24tY2FyZC1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjQwLCAyNDAsIDI0MCwgMC45NDUpO1xufVxuXG4uaXRlcmFibGVSb3cge1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5pdGVyYWJsZUNvbCB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4uc3RvcHNMaW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IzYjNiMztcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTYwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA0NSU7XG59XG5cbi5jaXJjbGVEaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMjMyO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOCU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5idXNJY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUlO1xuICBsZWZ0OiAyMSU7XG4gIHpvb206IDIyMCU7XG4gIHotaW5kZXg6IDE7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zY2hvb2xJY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1JTtcbiAgbGVmdDogMjElO1xuICB6b29tOiAyMjAlO1xuICB6LWluZGV4OiAxO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYXJyb3dSaWdodCB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5iIHtcbiAgY29sb3I6ICMzNTgwYzc7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/login/coordinator/buses-list/admin-bus-details/bus-route-details/bus-route-details.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/login/coordinator/buses-list/admin-bus-details/bus-route-details/bus-route-details.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: BusRouteDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusRouteDetailsComponent", function() { return BusRouteDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_route_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/route.service */ "./src/app/services/route.service.ts");
/* harmony import */ var _services_vehicle_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/vehicle.service */ "./src/app/services/vehicle.service.ts");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _services_alert_box_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../services/alert-box.service */ "./src/app/services/alert-box.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../environments/environment */ "./src/environments/environment.ts");








var BusRouteDetailsComponent = /** @class */ (function () {
    /**
     * @description - This constructor sets the value of svgIcons member of the class.
     * @constructor
     */
    function BusRouteDetailsComponent(routeService, route, vehicleService, loaderService, alertBoxService) {
        this.routeService = routeService;
        this.route = route;
        this.vehicleService = vehicleService;
        this.loaderService = loaderService;
        this.alertBoxService = alertBoxService;
        this.startPoint = {};
        this.routeData = [];
        this.schoolData = { stop: 'School', time: { morning: '7:30 AM', afternoon: '2:00 PM' } };
        // Assigning svg icons folder link of server to svgIcons member.
        this.svgIcons = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].svgIcons;
    }
    BusRouteDetailsComponent.prototype.ngOnInit = function () {
        this.vehicleId = this.route.snapshot.queryParamMap.get('vehicleId');
        this.getRouteData(this.vehicleId);
    };
    BusRouteDetailsComponent.prototype.getRouteData = function (vehicleId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var vehicleData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Presenting the loader.
                        this.loaderService.loaderPresent('Please wait.', 'crescent');
                        return [4 /*yield*/, this.vehicleService.getServerVehicleDetails(vehicleId)];
                    case 1:
                        vehicleData = _a.sent();
                        vehicleData.subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var data, routeData;
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        data = res['data'];
                                        return [4 /*yield*/, this.routeService.getRouteAllDetails(data[0].driver_details._id)];
                                    case 1:
                                        routeData = _a.sent();
                                        this.subscription = routeData.subscribe(function (response) {
                                            _this.setRouteData(response['data']);
                                            // Dismiss the loader.
                                            _this.loaderService.loaderDismiss();
                                        }, function (err) {
                                            // Dismiss the loader.
                                            _this.loaderService.loaderDismiss();
                                            setTimeout(function () {
                                                _this.alertBoxService.presentAlert('Alert', 'Server Problem.', 'Server not responding. Try after sometime.');
                                            }, 1200);
                                        });
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    BusRouteDetailsComponent.prototype.setRouteData = function (serverRouteData) {
        var _this = this;
        serverRouteData.forward_routes.map(function (item, index) {
            serverRouteData.backward_routes.map(function (items, indexes) {
                if (item.location === items.location) {
                    _this.routeData.push({
                        stop: item.location,
                        time: { morning: item.time, afternoon: items.time },
                    });
                }
            });
        });
        this.startPoint = this.routeData[0];
        this.schoolData = this.routeData.pop();
    };
    BusRouteDetailsComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        // Dismiss the loader.
        this.loaderService.loaderDismiss();
    };
    BusRouteDetailsComponent.ctorParameters = function () { return [
        { type: _services_route_service__WEBPACK_IMPORTED_MODULE_3__["RouteService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_vehicle_service__WEBPACK_IMPORTED_MODULE_4__["VehicleService"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
        { type: _services_alert_box_service__WEBPACK_IMPORTED_MODULE_6__["AlertBoxService"] }
    ]; };
    BusRouteDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bus-route-details',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bus-route-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/coordinator/buses-list/admin-bus-details/bus-route-details/bus-route-details.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bus-route-details.component.scss */ "./src/app/pages/login/coordinator/buses-list/admin-bus-details/bus-route-details/bus-route-details.component.scss")).default]
        })
        /**
         * @description - This class provides the bus route details.
         * @class - BusRouteDetailsComponent
         */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_route_service__WEBPACK_IMPORTED_MODULE_3__["RouteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_vehicle_service__WEBPACK_IMPORTED_MODULE_4__["VehicleService"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _services_alert_box_service__WEBPACK_IMPORTED_MODULE_6__["AlertBoxService"]])
    ], BusRouteDetailsComponent);
    return BusRouteDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/coordinator/buses-list/admin-bus-details/bus-route-details/bus-route-details.module.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/login/coordinator/buses-list/admin-bus-details/bus-route-details/bus-route-details.module.ts ***!
  \********************************************************************************************************************/
/*! exports provided: BusRouteDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusRouteDetailsModule", function() { return BusRouteDetailsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bus_route_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bus-route-details.component */ "./src/app/pages/login/coordinator/buses-list/admin-bus-details/bus-route-details/bus-route-details.component.ts");







var BusRouteDetailsModule = /** @class */ (function () {
    function BusRouteDetailsModule() {
    }
    BusRouteDetailsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [_bus_route_details_component__WEBPACK_IMPORTED_MODULE_6__["BusRouteDetailsComponent"]],
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        // Route for bus-route-details.
                        path: '',
                        component: _bus_route_details_component__WEBPACK_IMPORTED_MODULE_6__["BusRouteDetailsComponent"],
                    },
                ]),
            ],
        })
    ], BusRouteDetailsModule);
    return BusRouteDetailsModule;
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
//# sourceMappingURL=admin-bus-details-bus-route-details-bus-route-details-module.js.map