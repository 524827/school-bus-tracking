(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-login-coordinator-coordinator-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/coordinator/coordinator.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/coordinator/coordinator.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header text-center>\n  <ion-toolbar class=\"background\" color=\"#587FBB\" id=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-title text-left>Admin</ion-title>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-icon src=\"{{svgIcons}}/adminProfile.svg\" id=\"profileIcon\"\n        (click)=\"navigateToProfile(userType,busCoordinatorId)\" onError=\"this.src='../../../../assets/default/admin.png'\"\n        class=\"profileImage\">\n      </ion-icon>\n      <img src=\"\" id=\"profileIconImage\" (click)=\"navigateToProfile(userType,busCoordinatorId)\"\n          class=\"profileIconImage\" onError=\"this.src='../../../../assets/default/admin.png'\">\n      <ion-icon name=\"log-out\" class=\"logOutImage\" (click)=\"logout()\">\n      </ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-tabs>\n    <ion-tab-bar slot=\"top\">\n      <div id=\"tabDivForBusList\">\n        <ion-tab-button tab=\"buses-list/{{userType}}\" (click)=\"changeLookOfBusList()\">\n          <ion-item>\n            <ion-icon src=\"{{svgIcons}}/adminBus.svg\" class=\"tabImage\">\n            </ion-icon>\n            <ion-label>List of Bus</ion-label>\n          </ion-item>\n        </ion-tab-button>\n      </div>\n      <div id=\"tabDivForBusRoute\">\n        <ion-tab-button tab=\"bus-route\" (click)=\"changeLookOfBusRoute()\">\n          <ion-item>\n            <ion-icon src=\"{{svgIcons}}/adminMap.svg\" class=\"tabImage\">\n            </ion-icon>\n            <ion-label>Live Map</ion-label>\n          </ion-item>\n        </ion-tab-button>\n      </div>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/tab/tab.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/tab/tab.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n  <ion-tab-bar slot=\"top\">\n    <div class=\"tabbar\">\n      <ion-tab-button tab=\"bus-route\" (click)=\"busRouteStyle()\">\n        <ion-item [ngClass]=\"{'show':routeStatus,'hide':!routeStatus}\">\n          <ion-icon name=\"navigate\" class=\"tabImage\">\n          </ion-icon>\n          <ion-label>Routes</ion-label>\n        </ion-item>\n      </ion-tab-button>\n    </div>\n    <div class=\"tabbar\">\n      <ion-tab-button tab=\"livemap/{{userType}}/{{driverId}}\" (click)=\"liveMapStyle()\">\n        <ion-item [ngClass]=\"{'show':livemapStatus,'hide':!livemapStatus}\">\n          <ion-icon name=\"map\" class=\"tabImage\"></ion-icon>\n          <ion-label>Live Map</ion-label>\n        </ion-item>\n      </ion-tab-button>\n    </div>\n  </ion-tab-bar>\n</ion-tabs>");

/***/ }),

/***/ "./src/app/pages/login/coordinator/coordinator.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/login/coordinator/coordinator.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* #toolbar {\n  --background: #7986cb;\n  color: white;\n}\n\nion-title {\n  padding-top: 2%;\n  font-size: 25px;\n}\n\nion-icon {\n  float: right;\n  font-size: 45px;\n} */\nion-content {\n  --background: #f3f7fd;\n}\nion-tab-bar {\n  --background: #f3f7fd;\n  padding: 3% 0%;\n  margin: 0% 5%;\n  border-bottom: 1px solid #cccccc;\n}\n.logOutImage {\n  padding-top: 2%;\n  font-size: 30px;\n  margin-right: 12px;\n}\n.profileImage {\n  padding-top: 2%;\n  font-size: 30px;\n}\n.profileIconImage {\n  padding-top: 2%;\n  float: right;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  margin-right: 19px;\n}\n.tabImage {\n  width: 25px;\n  color: black;\n}\nion-item {\n  height: 41px;\n  --background: none;\n}\n.abc {\n  font-size: 50px;\n  stroke: none !important;\n}\n.icon-inner,\nsvg {\n  display: block;\n  fill: currentColor;\n  stroke: none;\n  height: 100%;\n  width: 100%;\n}\n#tabDivForBusList {\n  width: 49%;\n  background-color: white;\n  box-shadow: inset 1px 1px 5px #cccccc, inset 0px -3px 0px rgba(0, 158, 231, 0.8), 0px 1px 5px #cccccc;\n}\n#tabDivForBusRoute {\n  width: 49%;\n  background-color: white;\n  box-shadow: 1px 1px 5px #cccccc;\n}\n.close {\n  zoom: 2;\n}\n#toolbar {\n  --background: #7986cb;\n  color: white;\n}\n.done {\n  float: right;\n  zoom: 1.5;\n  margin-right: 3px;\n}\nion-toolbar {\n  background-color: #7d8cd1;\n}\n.title {\n  margin-top: 5px;\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hbWRldi9EZXNrdG9wL2dpdCAvd2hlcmUgaXMgbXkgYnVzL3NyYy9hcHAvcGFnZXMvbG9naW4vY29vcmRpbmF0b3IvY29vcmRpbmF0b3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2Nvb3JkaW5hdG9yL2Nvb3JkaW5hdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7O0dBQUE7QUFlQTtFQUNFLHFCQUFBO0FDQUY7QURJQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtBQ0RGO0FETUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDSEY7QURNQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDSEY7QURPQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSkY7QURPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDSkY7QURPQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0pGO0FET0E7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7QUNKRjtBRE9BOztFQUVFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0pGO0FET0E7RUFDRSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxxR0FBQTtBQ0pGO0FET0E7RUFDRSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtBQ0pGO0FEUUE7RUFDRSxPQUFBO0FDTEY7QURRQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQ0xGO0FEUUE7RUFDRSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FDTEY7QURRQTtFQUNFLHlCQUFBO0FDTEY7QURRQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9jb29yZGluYXRvci9jb29yZGluYXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICN0b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNzk4NmNiO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiAyJTtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG5pb24taWNvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiA0NXB4O1xufSAqL1xuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2YzZjdmZDtcbn1cblxuXG5pb24tdGFiLWJhciB7XG4gIC0tYmFja2dyb3VuZDogI2YzZjdmZDtcbiAgcGFkZGluZzogMyUgMCU7XG4gIG1hcmdpbjogMCUgNSU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjY2NjO1xufVxuXG5cblxuLmxvZ091dEltYWdlIHtcbiAgcGFkZGluZy10b3A6IDIlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuLnByb2ZpbGVJbWFnZSB7XG4gIHBhZGRpbmctdG9wOiAyJTtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG5cbi5wcm9maWxlSWNvbkltYWdlIHtcbiAgcGFkZGluZy10b3A6IDIlO1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxOXB4O1xufVxuXG4udGFiSW1hZ2Uge1xuICB3aWR0aDogMjVweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pb24taXRlbSB7XG4gIGhlaWdodDogNDFweDtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uYWJjIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBzdHJva2U6IG5vbmUgIWltcG9ydGFudFxufVxuXG4uaWNvbi1pbm5lcixcbnN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG4gIHN0cm9rZTogbm9uZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuI3RhYkRpdkZvckJ1c0xpc3Qge1xuICB3aWR0aDogNDklO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCA1cHggI2NjY2NjYywgaW5zZXQgMHB4IC0zcHggMHB4IHJnYmEoMCwgMTU4LCAyMzEsIDAuOCksIDBweCAxcHggNXB4ICNjY2NjY2M7XG59XG5cbiN0YWJEaXZGb3JCdXNSb3V0ZSB7XG4gIHdpZHRoOiA0OSU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAjY2NjY2NjO1xuICAvLyBib3gtc2hhZG93OiAwcHggMTBweCAycHggcmdiYSgwLCAwLCAwLCAwLjgwKSwgMCAtMTBweCAycHggLTVweCAjN2IyNzJjO1xufVxuXG4uY2xvc2Uge1xuICB6b29tOiAyLjA7XG59XG5cbiN0b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNzk4NmNiO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5kb25lIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB6b29tOiAxLjU7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjUsIDE0MCwgMjA5KTtcbn1cblxuLnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXNpemU6IDI1cHg7XG59IiwiLyogI3Rvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICM3OTg2Y2I7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDIlO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbmlvbi1pY29uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDQ1cHg7XG59ICovXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2YzZjdmZDtcbn1cblxuaW9uLXRhYi1iYXIge1xuICAtLWJhY2tncm91bmQ6ICNmM2Y3ZmQ7XG4gIHBhZGRpbmc6IDMlIDAlO1xuICBtYXJnaW46IDAlIDUlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjY2NjYztcbn1cblxuLmxvZ091dEltYWdlIHtcbiAgcGFkZGluZy10b3A6IDIlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuLnByb2ZpbGVJbWFnZSB7XG4gIHBhZGRpbmctdG9wOiAyJTtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4ucHJvZmlsZUljb25JbWFnZSB7XG4gIHBhZGRpbmctdG9wOiAyJTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMTlweDtcbn1cblxuLnRhYkltYWdlIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLWl0ZW0ge1xuICBoZWlnaHQ6IDQxcHg7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmFiYyB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgc3Ryb2tlOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5pY29uLWlubmVyLFxuc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgc3Ryb2tlOiBub25lO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jdGFiRGl2Rm9yQnVzTGlzdCB7XG4gIHdpZHRoOiA0OSU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDVweCAjY2NjY2NjLCBpbnNldCAwcHggLTNweCAwcHggcmdiYSgwLCAxNTgsIDIzMSwgMC44KSwgMHB4IDFweCA1cHggI2NjY2NjYztcbn1cblxuI3RhYkRpdkZvckJ1c1JvdXRlIHtcbiAgd2lkdGg6IDQ5JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4ICNjY2NjY2M7XG59XG5cbi5jbG9zZSB7XG4gIHpvb206IDI7XG59XG5cbiN0b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNzk4NmNiO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5kb25lIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB6b29tOiAxLjU7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZDhjZDE7XG59XG5cbi50aXRsZSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAyNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/login/coordinator/coordinator.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/login/coordinator/coordinator.component.ts ***!
  \******************************************************************/
/*! exports provided: CoordinatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordinatorComponent", function() { return CoordinatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_bus_coordinator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/bus-coordinator.service */ "./src/app/services/bus-coordinator.service.ts");






var CoordinatorComponent = /** @class */ (function () {
    /**
     * @description - This constructor initializes instances of Router, ActivatedRoute.
     * @constructor
     * @param {Router} router - Instance of router.
     * @param {ActivatedRoute} route - Instance of route.
     * @param {StorageService} storageService - Instance of route.
     */
    function CoordinatorComponent(router, route, storageService, busCoordinatorService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.storageService = storageService;
        this.busCoordinatorService = busCoordinatorService;
        // Assigning svg icons folder link of server to svgIcons member.
        this.svgIcons = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].svgIcons;
        // Get the route parameter.
        this.route.params.subscribe(function (data) {
            _this.userType = data.userType;
            _this.busCoordinatorId = data.busCoordinatorId;
            console.log(data);
        });
        /* setInterval(() => {
          this.getProfilePhoto();
        }, 1000); */
    }
    CoordinatorComponent.prototype.ngOnInit = function () {
        this.getProfilePhoto();
        // Calling getAllVehicleFromServer method of vehicleService to fetch all vehicle deails.
    };
    CoordinatorComponent.prototype.getProfilePhoto = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var profileIconElement, profileImageElement, busCordinatorDetails;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        profileIconElement = document.getElementById('profileIcon');
                        profileImageElement = document.getElementById('profileIconImage');
                        return [4 /*yield*/, this.busCoordinatorService.getServerBusCoordinatorDetailsById(this.busCoordinatorId)];
                    case 1:
                        busCordinatorDetails = _a.sent();
                        // Subscribe the busCoordinatorDetails to get data.
                        busCordinatorDetails.subscribe(function (res) {
                            var data = res['data'];
                            if (!data[0].buscoordinator_photo) {
                                profileIconElement.src = _this.svgIcons + "/adminProfile.svg";
                                profileImageElement.setAttribute('style', 'display: none;');
                            }
                            else {
                                profileImageElement.src = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].userImages + "/" + data[0].buscoordinator_photo;
                                profileIconElement.setAttribute('style', 'display: none;');
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CoordinatorComponent.prototype.changeLookOfBusList = function () {
        var selectedTabElement = document.getElementById('tabDivForBusList');
        var unSelectedTabElement = document.getElementById('tabDivForBusRoute');
        unSelectedTabElement.setAttribute('style', 'box-shadow: 1px 1px 5px #cccccc;');
        selectedTabElement.setAttribute('style', 'box-shadow: inset 1px 1px 5px #cccccc, inset 0px -3px 0px rgba(0, 158, 231, 0.8), 0px 1px 5px #cccccc;');
    };
    CoordinatorComponent.prototype.changeLookOfBusRoute = function () {
        var selectedTabElement = document.getElementById('tabDivForBusRoute');
        var unSelectedTabElement = document.getElementById('tabDivForBusList');
        unSelectedTabElement.setAttribute('style', 'box-shadow: -1px 1px 5px #cccccc;');
        selectedTabElement.setAttribute('style', 'box-shadow: inset 0px -1px 5px #cccccc, inset 0px -3px 0px rgba(0, 158, 231, 0.8), inset -1px 1px 5px #cccccc;');
    };
    /**
     * @description - This function navigate route to profile component.
     * @function - navigateToProfile
     * @param userType  - Stores the type of the user.
     * @param busCoordinatorId - Stores the id of the bus coordinator.
     * @returns - void.
     */
    CoordinatorComponent.prototype.navigateToProfile = function (userType, busCoordinatorId) {
        console.log(userType, busCoordinatorId);
        // Navigating the route to profile components with userType and busCoordiatorId  parameter.
        this.router.navigate([
            '/profile',
            // This parameter contains the type of logged in user.
            userType,
            // This parameter contains the id of the bus coordinator.
            busCoordinatorId,
        ]);
    };
    /**
     * @description - This function log's out the user.
     * @function - logout
     * @returns - void.
     */
    CoordinatorComponent.prototype.logout = function () {
        // removing logged in data of user from native storage.
        this.storageService.logOut();
        this.storageService.getIntervalValue().then(function (data) {
            console.log(data);
            window.clearInterval(data);
        });
    };
    CoordinatorComponent.prototype.ngOnDestroy = function () {
        console.log('destroy');
    };
    CoordinatorComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
        { type: _services_bus_coordinator_service__WEBPACK_IMPORTED_MODULE_5__["BusCoordinatorService"] }
    ]; };
    CoordinatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-coordinator',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./coordinator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/coordinator/coordinator.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./coordinator.component.scss */ "./src/app/pages/login/coordinator/coordinator.component.scss")).default]
        })
        /**
         * @Class - CoordinatorComponent
         */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
            _services_bus_coordinator_service__WEBPACK_IMPORTED_MODULE_5__["BusCoordinatorService"]])
    ], CoordinatorComponent);
    return CoordinatorComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/coordinator/coordinator.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/login/coordinator/coordinator.module.ts ***!
  \***************************************************************/
/*! exports provided: CoordinatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordinatorModule", function() { return CoordinatorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _coordinator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coordinator.component */ "./src/app/pages/login/coordinator/coordinator.component.ts");
/* harmony import */ var _coordinator_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coordinator.router.module */ "./src/app/pages/login/coordinator/coordinator.router.module.ts");
/* harmony import */ var _shared_tab_tab_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/tab/tab.module */ "./src/app/pages/shared/tab/tab.module.ts");







var CoordinatorModule = /** @class */ (function () {
    function CoordinatorModule() {
    }
    CoordinatorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_coordinator_component__WEBPACK_IMPORTED_MODULE_4__["CoordinatorComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _shared_tab_tab_module__WEBPACK_IMPORTED_MODULE_6__["TabModule"], _coordinator_router_module__WEBPACK_IMPORTED_MODULE_5__["CoordinatorComponentRoutingModule"]],
            providers: [],
        })
    ], CoordinatorModule);
    return CoordinatorModule;
}());



/***/ }),

/***/ "./src/app/pages/login/coordinator/coordinator.router.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/login/coordinator/coordinator.router.module.ts ***!
  \**********************************************************************/
/*! exports provided: CoordinatorComponentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordinatorComponentRoutingModule", function() { return CoordinatorComponentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _coordinator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coordinator.component */ "./src/app/pages/login/coordinator/coordinator.component.ts");
/* harmony import */ var src_app_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");





var routes = [
    {
        path: '',
        component: _coordinator_component__WEBPACK_IMPORTED_MODULE_3__["CoordinatorComponent"],
        children: [
            {
                // Route for buses-list compomnent.
                path: 'buses-list/:userType',
                children: [
                    {
                        path: '',
                        loadChildren: '../coordinator/buses-list/buses-list.module#BusesListComponentModule',
                        canActivate: [src_app_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
                    },
                ],
            },
            // Route for bus-route compomnent.
            {
                path: 'bus-route',
                children: [
                    {
                        path: '',
                        loadChildren: '../coordinator/bus-route/bus-route.module#BusRouteComponentModule',
                    },
                ],
            },
            // Route for buses-list compomnent.
            {
                path: '',
                redirectTo: 'buses-list/busCoordinator',
                pathMatch: 'full',
            },
        ],
    },
    // Route for buses-list compomnent.
    {
        path: '',
        redirectTo: 'buses-list/busCoordinator',
        pathMatch: 'full',
    },
];
var CoordinatorComponentRoutingModule = /** @class */ (function () {
    function CoordinatorComponentRoutingModule() {
    }
    CoordinatorComponentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CoordinatorComponentRoutingModule);
    return CoordinatorComponentRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/shared/tab/tab.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/shared/tab/tab.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tabImage {\n  width: 25px;\n  color: black;\n}\n\nion-item {\n  height: 45px;\n  width: 100%;\n  --background: none;\n}\n\n.tabbar {\n  width: 49%;\n}\n\n.show {\n  box-shadow: inset 0px -1px 5px #cccccc, inset 0px -3px 0px rgba(0, 158, 231, 0.8), inset 0px -1px 5px #cccccc;\n}\n\n.hide {\n  box-shadow: inset 0px -1px 5px rgba(240, 242, 243, 0.938);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hbWRldi9EZXNrdG9wL2dpdCAvd2hlcmUgaXMgbXkgYnVzL3NyYy9hcHAvcGFnZXMvc2hhcmVkL3RhYi90YWIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NoYXJlZC90YWIvdGFiLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLDZHQUFBO0FDQ0Y7O0FERUE7RUFDRSx5REFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2hhcmVkL3RhYi90YWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFiSW1hZ2Uge1xuICB3aWR0aDogMjVweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pb24taXRlbSB7XG4gIGhlaWdodDogNDVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLnRhYmJhciB7XG4gIHdpZHRoOiA0OSU7XG59XG5cbi5zaG93IHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IC0xcHggNXB4ICNjY2NjY2MsIGluc2V0IDBweCAtM3B4IDBweCByZ2JhKDAsIDE1OCwgMjMxLCAwLjgpLCBpbnNldCAwcHggLTFweCA1cHggI2NjY2NjYztcbn1cblxuLmhpZGUge1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggLTFweCA1cHggcmdiYSgyNDAsIDI0MiwgMjQzLCAwLjkzOCk7XG59IiwiLnRhYkltYWdlIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLWl0ZW0ge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi50YWJiYXIge1xuICB3aWR0aDogNDklO1xufVxuXG4uc2hvdyB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAtMXB4IDVweCAjY2NjY2NjLCBpbnNldCAwcHggLTNweCAwcHggcmdiYSgwLCAxNTgsIDIzMSwgMC44KSwgaW5zZXQgMHB4IC0xcHggNXB4ICNjY2NjY2M7XG59XG5cbi5oaWRlIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IC0xcHggNXB4IHJnYmEoMjQwLCAyNDIsIDI0MywgMC45MzgpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/shared/tab/tab.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/shared/tab/tab.component.ts ***!
  \***************************************************/
/*! exports provided: TabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var TabComponent = /** @class */ (function () {
    function TabComponent(router, activeRoute) {
        var _this = this;
        this.router = router;
        this.activeRoute = activeRoute;
        this.routeStatus = true;
        this.livemapStatus = false;
        // find current route
        this.router.events.subscribe(function (event) {
            if (event && event.url) {
                _this.selectedPath = event.url;
            }
        });
    }
    /**
     * this function change the value of routeStatus and livemapStatus for applying css
     */
    TabComponent.prototype.busRouteStyle = function () {
        this.routeStatus = true;
        this.livemapStatus = false;
    };
    /**
     * this function change the value of routeStatus and livemapStatus for applying css
     */
    TabComponent.prototype.liveMapStyle = function () {
        console.log(this.selectedPath);
        this.routeStatus = false;
        this.livemapStatus = true;
    };
    TabComponent.prototype.ngOnInit = function () {
        this.driverId = this.activeRoute.snapshot.queryParamMap.get('driverId');
        this.userType = this.activeRoute.snapshot.queryParamMap.get('user');
        console.log(this.driverId);
        // compare current route direction
        switch (this.selectedPath) {
            case '/driver/bus-route':
                console.log('match');
                this.routeStatus = true;
                this.livemapStatus = false;
                break;
            case '/driver/livemap':
                this.routeStatus = false;
                this.livemapStatus = true;
                break;
            default:
                console.log('doesnt match');
                break;
        }
    };
    TabComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    TabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/tab/tab.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab.component.scss */ "./src/app/pages/shared/tab/tab.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TabComponent);
    return TabComponent;
}());



/***/ }),

/***/ "./src/app/pages/shared/tab/tab.module.ts":
/*!************************************************!*\
  !*** ./src/app/pages/shared/tab/tab.module.ts ***!
  \************************************************/
/*! exports provided: TabModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabModule", function() { return TabModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tab.component */ "./src/app/pages/shared/tab/tab.component.ts");





var routes = [];
var TabModule = /** @class */ (function () {
    function TabModule() {
    }
    TabModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_tab_component__WEBPACK_IMPORTED_MODULE_4__["TabComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
            exports: [_tab_component__WEBPACK_IMPORTED_MODULE_4__["TabComponent"]],
        })
    ], TabModule);
    return TabModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-pages-login-coordinator-coordinator-module.js.map