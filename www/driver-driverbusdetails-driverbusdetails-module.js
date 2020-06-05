(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["driver-driverbusdetails-driverbusdetails-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/driver/driverbusdetails/driverbusdetails.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/driver/driverbusdetails/driverbusdetails.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"background\" color=\"#587FBB\" id=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <!-- <ion-back-button defaultHref=\"/driver\"></ion-back-button> -->\n      <ion-icon name=\"arrow-back\" class=\"back\" (click)=\"navigateBack()\"></ion-icon>\n    </ion-buttons>\n    <ion-title text-center>Bus Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"vehicleData\">\n  <ion-card>\n    <img class=\"busImage\" src=\"{{vehicleImages}}/{{vehicleData.vehicle_details.vehicle_photo}}\" onError=\"this.src='../../../../../assets/default/defaultBus.png'\" />\n </ion-card>\n    <ion-card>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"5\">\n            <ion-label>\n              Vehicle Number\n            </ion-label>\n          </ion-col>\n          <ion-col>\n            :\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-label class=\"fontStyle\">\n              {{vehicleData.vehicle_details.vehicle_number}}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <!--  <ion-row>\n          <ion-col size=\"5\">\n            <ion-label>\n              Vehicle Name\n            </ion-label>\n          </ion-col>\n          <ion-col>\n            :\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-label class=\"fontStyle\">\n              {{vehicleData.vehicle_company_name}}\n            </ion-label>\n          </ion-col>\n        </ion-row> -->\n        <ion-row>\n          <ion-col size=\"5\">\n            <ion-label>\n              Vehicle Type\n            </ion-label>\n          </ion-col>\n          <ion-col>\n            :\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-label class=\"fontStyle\">\n              {{vehicleData.vehicle_details.model_type}}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"5\">\n            <ion-label>\n              Vehicle Company\n            </ion-label>\n          </ion-col>\n          <ion-col>\n            :\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-label class=\"fontStyle\">\n              {{vehicleData.vehicle_details.company_name}}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"5\">\n            <ion-label>\n              Seating Capacity\n            </ion-label>\n          </ion-col>\n          <ion-col>\n            :\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-label class=\"fontStyle\">\n              {{vehicleData.vehicle_details.seat_capacity}}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/login/driver/driverbusdetails/driverbusdetails.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/login/driver/driverbusdetails/driverbusdetails.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back {\n  font-size: 35px;\n}\n\n#toolbar {\n  --background: #7986cb;\n  color: white;\n}\n\nion-toolbar {\n  background-color: #7d8cd1;\n}\n\nion-label {\n  padding: 5px;\n}\n\n.fontStyle {\n  font-size: 15px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hbWRldi9EZXNrdG9wL2dpdCAvd2hlcmUgaXMgbXkgYnVzL3NyYy9hcHAvcGFnZXMvbG9naW4vZHJpdmVyL2RyaXZlcmJ1c2RldGFpbHMvZHJpdmVyYnVzZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vZHJpdmVyL2RyaXZlcmJ1c2RldGFpbHMvZHJpdmVyYnVzZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9kcml2ZXIvZHJpdmVyYnVzZGV0YWlscy9kcml2ZXJidXNkZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2sge1xuICBmb250LXNpemU6IDM1cHg7XG59XG5cbiN0b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNzk4NmNiO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNSwgMTQwLCAyMDkpO1xufVxuXG5pb24tbGFiZWwge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5mb250U3R5bGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8vIHRhYiIsIi5iYWNrIHtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuXG4jdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzc5ODZjYjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZDhjZDE7XG59XG5cbmlvbi1sYWJlbCB7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmZvbnRTdHlsZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/login/driver/driverbusdetails/driverbusdetails.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/login/driver/driverbusdetails/driverbusdetails.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DriverbusdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverbusdetailsComponent", function() { return DriverbusdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _services_alert_box_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/alert-box.service */ "./src/app/services/alert-box.service.ts");
/* harmony import */ var _services_vehicle_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/vehicle.service */ "./src/app/services/vehicle.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");








var DriverbusdetailsComponent = /** @class */ (function () {
    function DriverbusdetailsComponent(navCtl, route, vehicleService, loaderService, alertBoxService) {
        var _this = this;
        this.navCtl = navCtl;
        this.route = route;
        this.vehicleService = vehicleService;
        this.loaderService = loaderService;
        this.alertBoxService = alertBoxService;
        this.vehicleImages = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].vehicleImages;
        // Get the route parameter.
        this.route.params.subscribe(function (data) {
            _this.userId = data.userId;
        });
    }
    DriverbusdetailsComponent.prototype.ngOnInit = function () {
        this.getVehicleData();
    };
    DriverbusdetailsComponent.prototype.getVehicleData = function () {
        var _this = this;
        // Presenting the loader.
        this.loaderService.loaderPresent('Please wait.', 'crescent');
        this.subscription = this.vehicleService.getDriversVehicleDetails(this.userId).subscribe(function (res) {
            if (res) {
                _this.vehicleData = res['data'];
                _this.vehicleData = _this.vehicleData[0];
            }
            // Dismiss the loader.
            _this.loaderService.loaderDismiss();
        }, function (err) {
            // Dismiss the loader.
            _this.loaderService.loaderDismiss();
            setTimeout(function () {
                _this.alertBoxService.presentAlert('Alert', 'Server Problem.', 'Server not responding. Try after sometime.');
            }, 1200);
        });
    };
    DriverbusdetailsComponent.prototype.navigateBack = function () {
        this.navCtl.pop();
    };
    DriverbusdetailsComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        // Dismiss the loader.
        this.loaderService.loaderDismiss();
    };
    DriverbusdetailsComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _services_vehicle_service__WEBPACK_IMPORTED_MODULE_6__["VehicleService"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _services_alert_box_service__WEBPACK_IMPORTED_MODULE_5__["AlertBoxService"] }
    ]; };
    DriverbusdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-driverbusdetails',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./driverbusdetails.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/driver/driverbusdetails/driverbusdetails.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./driverbusdetails.component.scss */ "./src/app/pages/login/driver/driverbusdetails/driverbusdetails.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_vehicle_service__WEBPACK_IMPORTED_MODULE_6__["VehicleService"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _services_alert_box_service__WEBPACK_IMPORTED_MODULE_5__["AlertBoxService"]])
    ], DriverbusdetailsComponent);
    return DriverbusdetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/driver/driverbusdetails/driverbusdetails.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/login/driver/driverbusdetails/driverbusdetails.module.ts ***!
  \********************************************************************************/
/*! exports provided: DriverBusDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverBusDetailsModule", function() { return DriverBusDetailsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _driverbusdetails_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./driverbusdetails.component */ "./src/app/pages/login/driver/driverbusdetails/driverbusdetails.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var DriverBusDetailsModule = /** @class */ (function () {
    function DriverBusDetailsModule() {
    }
    DriverBusDetailsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_driverbusdetails_component__WEBPACK_IMPORTED_MODULE_4__["DriverbusdetailsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _driverbusdetails_component__WEBPACK_IMPORTED_MODULE_4__["DriverbusdetailsComponent"],
                    },
                ]),
            ],
            providers: [],
        })
    ], DriverBusDetailsModule);
    return DriverBusDetailsModule;
}());



/***/ })

}]);
//# sourceMappingURL=driver-driverbusdetails-driverbusdetails-module.js.map