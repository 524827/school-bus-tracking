(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shared-bus-details-bus-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/bus-details/bus-details.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/bus-details/bus-details.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header text-center *ngIf=\"userType=='parent'\">\n  <ion-toolbar class=\"background\" color=\"#587FBB\" id=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-icon name=\"arrow-back\" class=\"back\" (click)=\"back()\"></ion-icon>\n    </ion-buttons>\n    <ion-title class=\"title\">Bus Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content *ngIf=\"vehicleData\">\n\n  <ion-card>\n    <ion-card-header text-center>\n      Driver\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n\n        <ion-row>\n          <ion-col size=\"5\" class=\"driverImg\">\n            <img src=\"{{userImages}}/{{profilePhoto}}\" onError=\"this.src='../../../../assets/default/driver.png';\" >\n\n\n        </ion-col>\n            <ion-col size=\"7\" class=\"driverdetails\">\n              <ion-row>\n                <ion-col size=\"5\">\n                  <ion-label class=\"headings\">Name : </ion-label>\n                  <!-- <ion-icon class=\"icon\" name=\"person\"></ion-icon> -->\n                </ion-col>\n                <ion-col size=\"7\">\n                  <ion-label class=\"fontStyle\">{{vehicleData.driver_details.driver_name}}</ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"5\">\n                  <ion-label class=\"headings\">Contact:</ion-label>\n                  <!-- <ion-icon class=\"icon\" name=\"call\"></ion-icon> -->\n                </ion-col>\n                <ion-col size=\"7\">\n                  <ion-label class=\"fontStyle\">{{vehicleData.driver_details.mobile_numbers.primary_number}}</ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"5\">\n                  <ion-label class=\"headings\">Address:</ion-label>\n                  <!-- <ion-icon class=\"icon\" name=\"pin\"></ion-icon> -->\n                </ion-col>\n                <ion-col size=\"7\">\n                  <ion-label class=\"fontStyle\">{{vehicleData.driver_details.driver_addresses.permanent_address}}\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"5\">\n                  <ion-label class=\"headings\">License:</ion-label>\n                </ion-col>\n                <ion-col size=\"7\">\n                  <ion-label class=\"fontStyle\">{{vehicleData.driver_details.license_number}}</ion-label>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header text-center>\n      Bus\n    </ion-card-header>\n    <ion-card-content>\n\n      <ion-row>\n        <ion-col size=\"5\">\n          <img src=\"{{vehicleImages}}/{{vehicleData.vehicle_details.vehicle_photo}}\" onError=\"this.src='../../../../assets/default/bus2.png';\" >\n        </ion-col>\n          <ion-col size=\"7\">\n            <ion-row>\n              <ion-col size=\"5\">\n                <ion-label class=\"headings\">Number:</ion-label>\n              </ion-col>\n              <ion-col size=\"7\">\n                <ion-label class=\"fontStyle\">{{vehicleData.vehicle_details.vehicle_number}}</ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"5\">\n                <ion-label class=\"headings\">Name:</ion-label>\n              </ion-col>\n              <ion-col size=\"7\">\n                <ion-label class=\"fontStyle\">{{vehicleData.vehicle_details.company_name}}</ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"5\">\n                <ion-label class=\"headings\">Model:</ion-label>\n              </ion-col>\n              <ion-col size=\"7\">\n                <ion-label class=\"fontStyle\">{{vehicleData.vehicle_details.model_type}}</ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-label class=\"headings\">Seats:</ion-label>\n              </ion-col>\n              <ion-col size=\"7\">\n                <ion-label class=\"fontStyle\">{{vehicleData.vehicle_details.seat_capacity}}</ion-label>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/shared/bus-details/bus-details-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/shared/bus-details/bus-details-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: BusDetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusDetailsRoutingModule", function() { return BusDetailsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var BusDetailsRoutingModule = /** @class */ (function () {
    function BusDetailsRoutingModule() {
    }
    BusDetailsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], BusDetailsRoutingModule);
    return BusDetailsRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/shared/bus-details/bus-details.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/shared/bus-details/bus-details.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back {\n  zoom: 2;\n}\n\n#toolbar {\n  --background: #7986cb;\n  color: white;\n}\n\nion-toolbar {\n  background-color: #7d8cd1;\n}\n\n.headings {\n  color: #7d8cd1;\n  font-family: \"Roboto\", sans-serif;\n}\n\nion-card {\n  margin: 10px;\n  height: auto;\n}\n\nion-card-header {\n  font-size: 25px;\n  color: #7d8cd1;\n}\n\nion-content {\n  --background-color: #dbd5d5;\n}\n\n.icon {\n  color: #939499;\n  font-size: 20px;\n}\n\nback {\n  zoom: 1.5;\n}\n\nimg {\n  width: 200px;\n  height: 150px;\n}\n\n.fontStyle {\n  font-size: 12px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hbWRldi9EZXNrdG9wL2dpdCAvd2hlcmUgaXMgbXkgYnVzL3NyYy9hcHAvcGFnZXMvc2hhcmVkL2J1cy1kZXRhaWxzL2J1cy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zaGFyZWQvYnVzLWRldGFpbHMvYnVzLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxPQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FER0E7RUFFRSxjQUFBO0VBQ0EsaUNBQUE7QUNERjs7QURJQTtFQUVFLFlBQUE7RUFDQSxZQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0ZGOztBREtBO0VBQ0UsMkJBQUE7QUNGRjs7QURRQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDTEY7O0FEV0E7RUFDRSxTQUFBO0FDUkY7O0FEV0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ1JGOztBRFlBO0VBQ0UsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7QUNURiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NoYXJlZC9idXMtZGV0YWlscy9idXMtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrIHtcbiAgem9vbTogMi4wO1xufVxuXG4jdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzc5ODZjYjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjUsIDE0MCwgMjA5KTtcbn1cblxuXG4uaGVhZGluZ3Mge1xuXG4gIGNvbG9yOiByZ2IoMTI1LCAxNDAsIDIwOSk7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn1cblxuaW9uLWNhcmQge1xuXG4gIG1hcmdpbjogMTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiByZ2IoMTI1LCAxNDAsIDIwOSk7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZGJkNWQ1O1xufVxuXG5cblxuXG4uaWNvbiB7XG4gIGNvbG9yOiByZ2IoMTQ3LCAxNDgsIDE1Myk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuXG5cblxuYmFjayB7XG4gIHpvb206IDEuNTtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuXG5cbi5mb250U3R5bGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59IiwiLmJhY2sge1xuICB6b29tOiAyO1xufVxuXG4jdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzc5ODZjYjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZDhjZDE7XG59XG5cbi5oZWFkaW5ncyB7XG4gIGNvbG9yOiAjN2Q4Y2QxO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW46IDEwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogIzdkOGNkMTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQtY29sb3I6ICNkYmQ1ZDU7XG59XG5cbi5pY29uIHtcbiAgY29sb3I6ICM5Mzk0OTk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuYmFjayB7XG4gIHpvb206IDEuNTtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuXG4uZm9udFN0eWxlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/shared/bus-details/bus-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/shared/bus-details/bus-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: BusDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusDetailsComponent", function() { return BusDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_vehicle_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/vehicle.service */ "./src/app/services/vehicle.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");






var BusDetailsComponent = /** @class */ (function () {
    function BusDetailsComponent(navctl, route, vehicleService) {
        this.navctl = navctl;
        this.route = route;
        this.vehicleService = vehicleService;
        // this.alertService.loaderPresent('Please wait', 'crescent');
        // Assigning vehicle image folder link of server to vehicleImages member.
        this.vehicleImages = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].vehicleImages;
        // Assigning svg driver image link of server to driverImages member.
        this.userImages = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].userImages;
        /*  this.route.params.subscribe(async data => {
          this.userType = data.userType;
          this.vehicleId = data.vehicleId;
          console.log(this.userType, this.vehicleId);
          console.log('routes', data);
          // this.checkUserType();
          this.getVehicleFromServer(data.vehicleId);
        }); */
    }
    /* async checkUserType() {
      console.log(this.userType);
      if (this.userType === 'busCoordinator') {
        const element = <HTMLElement>document.getElementById('header');
        element.setAttribute('style', 'display: none');
      }
    }
  
   */
    /**
     * This function get vehicle details from server
     * @param vehicleId - vehicle id
     */
    BusDetailsComponent.prototype.getVehicleFromServer = function (vehicleId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var vehicleDetails;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('funcion' + vehicleId);
                        return [4 /*yield*/, this.vehicleService.getServerVehicleDetails(vehicleId)];
                    case 1:
                        vehicleDetails = _a.sent();
                        this.subscription = vehicleDetails.subscribe(function (res) {
                            var data = res['data'];
                            console.log(data);
                            _this.vehicleData = data[0];
                            _this.profilePhoto = _this.vehicleData.driver_details.driver_documents.photo;
                            //  this.alertService.loaderDismiss();
                            console.log('Res : ', _this.vehicleData);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    BusDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.userType = data.userType;
                this.vehicleId = data.vehicleId;
                console.log(this.userType, this.vehicleId);
                console.log('routes', data);
                // this.checkUserType();
                this.getVehicleFromServer(data.vehicleId);
                return [2 /*return*/];
            });
        }); });
    };
    BusDetailsComponent.prototype.back = function () {
        this.navctl.pop();
    };
    BusDetailsComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    BusDetailsComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _services_vehicle_service__WEBPACK_IMPORTED_MODULE_4__["VehicleService"] }
    ]; };
    BusDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bus-details',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bus-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/bus-details/bus-details.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bus-details.component.scss */ "./src/app/pages/shared/bus-details/bus-details.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_vehicle_service__WEBPACK_IMPORTED_MODULE_4__["VehicleService"]])
    ], BusDetailsComponent);
    return BusDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/shared/bus-details/bus-details.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/shared/bus-details/bus-details.module.ts ***!
  \****************************************************************/
/*! exports provided: BusDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusDetailsModule", function() { return BusDetailsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bus_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bus-details.component */ "./src/app/pages/shared/bus-details/bus-details.component.ts");
/* harmony import */ var _bus_details_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bus-details-routing.module */ "./src/app/pages/shared/bus-details/bus-details-routing.module.ts");






// import { SideBarModule } from '../sidebar/sidebar.module';


var BusDetailsModule = /** @class */ (function () {
    function BusDetailsModule() {
    }
    BusDetailsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_bus_details_component__WEBPACK_IMPORTED_MODULE_6__["BusDetailsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _bus_details_routing_module__WEBPACK_IMPORTED_MODULE_7__["BusDetailsRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _bus_details_component__WEBPACK_IMPORTED_MODULE_6__["BusDetailsComponent"],
                    },
                ]),
            ],
        })
    ], BusDetailsModule);
    return BusDetailsModule;
}());



/***/ })

}]);
//# sourceMappingURL=shared-bus-details-bus-details-module.js.map