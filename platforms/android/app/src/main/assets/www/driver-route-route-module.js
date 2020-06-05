(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["driver-route-route-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/driver/route/route.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/driver/route/route.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-refresher (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"crescent\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-card>\n    <ion-grid>\n      <ion-row class=\"heading\" color=\"#000000\">\n        <ion-col size=\"8\" text-center>\n          <ion-label color=\"light\">All routes</ion-label>\n        </ion-col>\n        <ion-col size=\"4\" text-center>\n          <ion-label color=\"light\">Estimated time</ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-card-content padding margin *ngIf=\"backwardRoutes && backwardRoutes.length>0\">\n      <ion-row class=\" iterableRow\" *ngFor=\"let route of backwardRoutes\">\n        <ion-col size=\"3\" text-left class=\"iterableCol\">{{route.time}}</ion-col>\n        <ion-col size=\"3\" class=\"iterableRow\">\n          <ion-icon class=\"busIcon\" src=\"../../../../../../../assets/images/materialIcons/whiteBus.svg\"\n            *ngIf=\"route.location==currentArea\"></ion-icon>\n          <div class=\"timeline\">\n            <div class=\"circleDiv\">\n            </div>\n          </div>\n        </ion-col>\n        <ion-col size=\"3\" text-left class=\"iterableCol\">{{route.location}}</ion-col>\n        <ion-col size=\"3\" text-center class=\"iterableCol\">{{route.estimateTime}}</ion-col>\n      </ion-row>\n    </ion-card-content>\n\n    <ion-card-content padding margin *ngIf=\"forwardRoutes && forwardRoutes.length>0\">\n      <ion-row class=\" iterableRow\" *ngFor=\"let route of forwardRoutes\">\n        <ion-col size=\"3\" text-left class=\"iterableCol\">{{route.time}}</ion-col>\n        <ion-col size=\"3\" class=\"iterableRow\">\n          <ion-icon class=\"busIcon\" src=\"../../../../../../../assets/images/materialIcons/whiteBus.svg\"\n            *ngIf=\"route.location==currentArea\"></ion-icon>\n          <div class=\"timeline\">\n            <div class=\"circleDiv\">\n            </div>\n          </div>\n        </ion-col>\n        <ion-col size=\"4\" text-left class=\"iterableCol\">{{route.location}}</ion-col>\n        <ion-col size=\"2\" text-center class=\"iterableCol\">{{route.estimateTime}}</ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/login/driver/route/route.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/login/driver/route/route.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".heading {\n  border: 1px solid;\n  width: 100%;\n  height: 25px;\n  background: #000000;\n  margin-top: 5px;\n}\n\n.iterableRow {\n  height: 80px;\n}\n\n.iterableCol {\n  padding-top: 20px;\n}\n\n.stopsLine {\n  background-color: #b3b3b3;\n  width: 12px;\n  height: 160%;\n  position: relative;\n  margin-left: 10px;\n}\n\n.timeline {\n  position: absolute;\n  content: \"\";\n  height: 160%;\n  width: 12px;\n  border-radius: 10px;\n  margin-left: 10px;\n  background-color: gray;\n}\n\n.timeline::after {\n  content: \"\";\n  position: relative;\n  margin-left: 10px;\n  width: 12px;\n}\n\n.circleDiv {\n  background-color: #333232;\n  width: 12px;\n  height: 10px;\n  border-radius: 60%;\n  position: absolute;\n  top: 18%;\n  z-index: 1;\n}\n\n.busIcon {\n  position: absolute;\n  top: 5%;\n  zoom: 200%;\n  z-index: 1;\n  border: 1px solid black;\n  border-radius: 50%;\n  background-color: black;\n  color: white;\n}\n\n.schoolIcon {\n  position: absolute;\n  top: 15%;\n  zoom: 200%;\n  z-index: 1;\n  border: 1px solid black;\n  border-radius: 50%;\n  background-color: black;\n  color: white;\n}\n\nb {\n  color: #3580c7;\n}\n\n.refresh {\n  position: fixed;\n  zoom: 250%;\n  background-color: black;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hbWRldi9EZXNrdG9wL2dpdCAvd2hlcmUgaXMgbXkgYnVzL3NyYy9hcHAvcGFnZXMvbG9naW4vZHJpdmVyL3JvdXRlL3JvdXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9kcml2ZXIvcm91dGUvcm91dGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FER0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2RyaXZlci9yb3V0ZS9yb3V0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkaW5nIHtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLml0ZXJhYmxlUm93IHtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4uaXRlcmFibGVDb2wge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLnN0b3BzTGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzksIDE3OSwgMTc5KTtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTYwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnRpbWVsaW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiAnJztcbiAgaGVpZ2h0OiAxNjAlO1xuICB3aWR0aDogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG5cbn1cblxuLnRpbWVsaW5lOjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aWR0aDogMTJweDtcbn1cblxuLmNpcmNsZURpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgNTAsIDUwKTtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNjAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTglO1xuICB6LWluZGV4OiAxO1xufVxuXG4uYnVzSWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1JTtcbiAgem9vbTogMjAwJTtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNjaG9vbEljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTUlO1xuICB6b29tOiAyMDAlO1xuICB6LWluZGV4OiAxO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5iIHtcbiAgY29sb3I6IHJnYig1MywgMTI4LCAxOTkpO1xufVxuXG4ucmVmcmVzaCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgem9vbTogMjUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0iLCIuaGVhZGluZyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5pdGVyYWJsZVJvdyB7XG4gIGhlaWdodDogODBweDtcbn1cblxuLml0ZXJhYmxlQ29sIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5zdG9wc0xpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNiM2IzO1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxNjAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4udGltZWxpbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTYwJTtcbiAgd2lkdGg6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xufVxuXG4udGltZWxpbmU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IDEycHg7XG59XG5cbi5jaXJjbGVEaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMjMyO1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA2MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOCU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5idXNJY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUlO1xuICB6b29tOiAyMDAlO1xuICB6LWluZGV4OiAxO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2Nob29sSWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNSU7XG4gIHpvb206IDIwMCU7XG4gIHotaW5kZXg6IDE7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmIge1xuICBjb2xvcjogIzM1ODBjNztcbn1cblxuLnJlZnJlc2gge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHpvb206IDI1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/login/driver/route/route.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/login/driver/route/route.component.ts ***!
  \*************************************************************/
/*! exports provided: RouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteComponent", function() { return RouteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _services_driver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/driver.service */ "./src/app/services/driver.service.ts");
/* harmony import */ var src_app_services_route_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/route.service */ "./src/app/services/route.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../.././../../services/notification.service */ "./src/app/services/notification.service.ts");







var RouteComponent = /** @class */ (function () {
    function RouteComponent(route, location, routedetails, router, nativeStorage, notificationService) {
        this.route = route;
        this.location = location;
        this.routedetails = routedetails;
        this.router = router;
        this.nativeStorage = nativeStorage;
        this.notificationService = notificationService;
        this.currentArea = '';
        this.routeData = [];
        this.backwardRoutes = [];
        this.forwardRoutes = [];
        this.schoolData = { stop: 'School', time: { morning: '7:30 AM', afternoon: '2:00 PM' } };
        console.log('In Route component');
    }
    RouteComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get Login driver ID from URL
        this.driverId = this.router.snapshot.queryParamMap.get('driverId');
        // Get All routes from Database
        this.routedetails.getRouteDetails(this.driverId).subscribe(function (response) {
            _this.routeData = response['data'];
            if (_this.routeData['backward_routes']) {
                _this.backwardRoutes = _this.routeData['backward_routes'];
            }
            else if (_this.routeData['forward_routes']) {
                _this.forwardRoutes = _this.routeData['forward_routes'];
            }
        });
        // Get current area of driver
        this.location.curLocation.subscribe(function (response) {
            console.log('Response:-', response);
            _this.address = response;
            if (_this.address) {
                console.log(_this.address.current_area);
                _this.currentArea = _this.address.current_area;
            }
            _this.nativeStorage.getItem('currentArea').then(function (res) {
                if (_this.currentArea === res && _this.currentArea !== '') {
                    _this.notificationService.sendNotification(_this.currentArea, _this.driverId).subscribe();
                }
            });
        });
    };
    /**
     * This function called when user pull down to refresh the page.
     * @param event
     */
    RouteComponent.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.routedetails.getRouteDetails(_this.driverId).subscribe(function (response) {
                _this.routeData = response['data'];
                if (_this.routeData['backward_routes']) {
                    _this.backwardRoutes = _this.routeData['backward_routes'];
                }
                else if (_this.routeData['forward_routes']) {
                    _this.forwardRoutes = _this.routeData['forward_routes'];
                }
            });
            _this.location.curLocation.subscribe(function (response) {
                _this.address = response;
                if (_this.address) {
                    _this.currentArea = _this.address.current_area;
                }
            });
            event.target.complete();
        }, 2000);
    };
    RouteComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_driver_service__WEBPACK_IMPORTED_MODULE_4__["DriverService"] },
        { type: src_app_services_route_service__WEBPACK_IMPORTED_MODULE_5__["RouteService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"] },
        { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }
    ]; };
    RouteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-route',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./route.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/driver/route/route.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./route.component.scss */ "./src/app/pages/login/driver/route/route.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_driver_service__WEBPACK_IMPORTED_MODULE_4__["DriverService"],
            src_app_services_route_service__WEBPACK_IMPORTED_MODULE_5__["RouteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"],
            _services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]])
    ], RouteComponent);
    return RouteComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/driver/route/route.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/login/driver/route/route.module.ts ***!
  \**********************************************************/
/*! exports provided: RouteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteModule", function() { return RouteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _route_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./route.component */ "./src/app/pages/login/driver/route/route.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var RouteModule = /** @class */ (function () {
    function RouteModule() {
    }
    RouteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_route_component__WEBPACK_IMPORTED_MODULE_3__["RouteComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _route_component__WEBPACK_IMPORTED_MODULE_3__["RouteComponent"],
                    },
                ]),
            ],
        })
    ], RouteModule);
    return RouteModule;
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
//# sourceMappingURL=driver-route-route-module.js.map