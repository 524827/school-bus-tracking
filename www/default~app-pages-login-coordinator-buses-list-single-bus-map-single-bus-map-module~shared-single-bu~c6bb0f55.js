(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-pages-login-coordinator-buses-list-single-bus-map-single-bus-map-module~shared-single-bu~c6bb0f55"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/single-bus-routes/single-bus-routes.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/single-bus-routes/single-bus-routes.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header text-center *ngIf=\"userType=='parent'\">\n  <ion-toolbar class=\"background\" color=\"#587FBB\" id=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-icon name=\"arrow-back\" class=\"back\" (click)=\"navigateBack()\"></ion-icon>\n    </ion-buttons>\n    <ion-title class=\"title\">Routes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"crescent\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-card>\n    <ion-grid>\n      <ion-row class=\"heading\" color=\"#000000\">\n        <ion-col size=\"8\" text-center>\n          <ion-label color=\"light\">All routes</ion-label>\n        </ion-col>\n        <ion-col size=\"4\" text-center>\n          <ion-label color=\"light\">Estimated time</ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-card-content padding margin *ngIf=\"backwardRoutes && backwardRoutes.length>0\">\n      <ion-row class=\"iterableRow\" *ngFor=\"let route of backwardRoutes\">\n        <ion-col size=\"3\" text-left class=\"iterableCol\">{{route.time}}</ion-col>\n        <ion-col size=\"3\" class=\"iterableRow\">\n          <ion-icon class=\"busIcon\" src=\"../../../../../../../assets/images/materialIcons/whiteBus.svg\"\n            *ngIf=\"route.location==currentArea\"></ion-icon>\n          <div class=\"timeline\">\n            <div class=\"circleDiv\">\n            </div>\n          </div>\n        </ion-col>\n        <ion-col size=\"4\" text-left class=\"iterableCol\">{{route.location}}</ion-col>\n        <ion-col size=\"2\" text-center class=\"iterableCol\">{{route.estimateTime}}</ion-col>\n      </ion-row>\n    </ion-card-content>\n\n    <ion-card-content padding margin *ngIf=\"forwardRoutes && forwardRoutes.length>0\">\n      <ion-row class=\"iterableRow\" *ngFor=\"let route of forwardRoutes\">\n        <ion-col size=\"3\" text-left class=\"iterableCol\">{{route.time}}</ion-col>\n        <ion-col size=\"3\" class=\"iterableRow\">\n          <ion-icon class=\"busIcon\" src=\"../../../../../../../assets/images/materialIcons/whiteBus.svg\"\n            *ngIf=\"route.location==currentArea\"></ion-icon>\n          <div class=\"timeline\">\n            <div class=\"circleDiv\">\n            </div>\n          </div>\n        </ion-col>\n        <ion-col size=\"4\" text-left class=\"iterableCol\">{{route.location}}</ion-col>\n        <ion-col size=\"2\" text-center class=\"iterableCol\">{{route.estimateTime}}</ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>");

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

/***/ "./src/app/pages/shared/single-bus-routes/single-bus-routes-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/shared/single-bus-routes/single-bus-routes-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: SingleBusRoutesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleBusRoutesRoutingModule", function() { return SingleBusRoutesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var SingleBusRoutesRoutingModule = /** @class */ (function () {
    function SingleBusRoutesRoutingModule() {
    }
    SingleBusRoutesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SingleBusRoutesRoutingModule);
    return SingleBusRoutesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/shared/single-bus-routes/single-bus-routes.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/shared/single-bus-routes/single-bus-routes.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back {\n  zoom: 2;\n}\n\n#toolbar {\n  --background: #7986cb;\n  color: white;\n}\n\nion-toolbar {\n  background-color: #7d8cd1;\n}\n\n.heading {\n  border: 1px solid;\n  width: 100%;\n  height: 25px;\n  background: #000000;\n  margin-top: 5px;\n}\n\n.iterableRow {\n  height: 80px;\n}\n\n.iterableCol {\n  padding-top: 20px;\n}\n\n.stopsLine {\n  background-color: #b3b3b3;\n  width: 12px;\n  height: 160%;\n  position: relative;\n  margin-left: 10px;\n}\n\n.timeline {\n  position: absolute;\n  content: \"\";\n  height: 160%;\n  width: 12px;\n  border-radius: 10px;\n  margin-left: 10px;\n  background-color: gray;\n}\n\n.timeline::after {\n  content: \"\";\n  position: relative;\n  margin-left: 10px;\n  width: 12px;\n}\n\n.circleDiv {\n  background-color: #333232;\n  width: 12px;\n  height: 10px;\n  border-radius: 60%;\n  position: absolute;\n  top: 18%;\n  z-index: 1;\n}\n\n.busIcon {\n  position: absolute;\n  top: 5%;\n  zoom: 200%;\n  z-index: 1;\n  border: 1px solid black;\n  border-radius: 50%;\n  background-color: black;\n  color: white;\n}\n\n.schoolIcon {\n  position: absolute;\n  top: 15%;\n  zoom: 200%;\n  z-index: 1;\n  border: 1px solid black;\n  border-radius: 50%;\n  background-color: black;\n  color: white;\n}\n\nb {\n  color: #3580c7;\n}\n\n.refresh {\n  position: fixed;\n  zoom: 250%;\n  background-color: black;\n  border-radius: 50%;\n}\n\nion-card {\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hbWRldi9EZXNrdG9wL2dpdCAvd2hlcmUgaXMgbXkgYnVzL3NyYy9hcHAvcGFnZXMvc2hhcmVkL3NpbmdsZS1idXMtcm91dGVzL3NpbmdsZS1idXMtcm91dGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zaGFyZWQvc2luZ2xlLWJ1cy1yb3V0ZXMvc2luZ2xlLWJ1cy1yb3V0ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxPQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FESUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDREY7O0FESUE7RUFDRSxZQUFBO0FDREY7O0FESUE7RUFDRSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FDREY7O0FES0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNGRjs7QURLQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDRkY7O0FES0E7RUFDRSxjQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURLQTtFQUNFLFlBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NoYXJlZC9zaW5nbGUtYnVzLXJvdXRlcy9zaW5nbGUtYnVzLXJvdXRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrIHtcbiAgem9vbTogMi4wO1xufVxuXG4jdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzc5ODZjYjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjUsIDE0MCwgMjA5KTtcbn1cblxuXG5cbi5oZWFkaW5nIHtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLml0ZXJhYmxlUm93IHtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4uaXRlcmFibGVDb2wge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLnN0b3BzTGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzksIDE3OSwgMTc5KTtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTYwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnRpbWVsaW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiAnJztcbiAgaGVpZ2h0OiAxNjAlO1xuICB3aWR0aDogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG5cbn1cblxuLnRpbWVsaW5lOjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aWR0aDogMTJweDtcbn1cblxuLmNpcmNsZURpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgNTAsIDUwKTtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNjAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTglO1xuICB6LWluZGV4OiAxO1xufVxuXG4uYnVzSWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1JTtcbiAgem9vbTogMjAwJTtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNjaG9vbEljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTUlO1xuICB6b29tOiAyMDAlO1xuICB6LWluZGV4OiAxO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5iIHtcbiAgY29sb3I6IHJnYig1MywgMTI4LCAxOTkpO1xufVxuXG4ucmVmcmVzaCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgem9vbTogMjUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuaW9uLWNhcmQge1xuICBoZWlnaHQ6IGF1dG87XG59IiwiLmJhY2sge1xuICB6b29tOiAyO1xufVxuXG4jdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzc5ODZjYjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZDhjZDE7XG59XG5cbi5oZWFkaW5nIHtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLml0ZXJhYmxlUm93IHtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4uaXRlcmFibGVDb2wge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLnN0b3BzTGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiM2IzYjM7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDE2MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi50aW1lbGluZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxNjAlO1xuICB3aWR0aDogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG59XG5cbi50aW1lbGluZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aWR0aDogMTJweDtcbn1cblxuLmNpcmNsZURpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMyMzI7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDYwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE4JTtcbiAgei1pbmRleDogMTtcbn1cblxuLmJ1c0ljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNSU7XG4gIHpvb206IDIwMCU7XG4gIHotaW5kZXg6IDE7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zY2hvb2xJY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1JTtcbiAgem9vbTogMjAwJTtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuYiB7XG4gIGNvbG9yOiAjMzU4MGM3O1xufVxuXG4ucmVmcmVzaCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgem9vbTogMjUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuaW9uLWNhcmQge1xuICBoZWlnaHQ6IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/shared/single-bus-routes/single-bus-routes.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/shared/single-bus-routes/single-bus-routes.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SingleBusRoutesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleBusRoutesComponent", function() { return SingleBusRoutesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_driver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/driver.service */ "./src/app/services/driver.service.ts");
/* harmony import */ var _services_route_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/route.service */ "./src/app/services/route.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_parent_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/parent.service */ "./src/app/services/parent.service.ts");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/loader.service */ "./src/app/services/loader.service.ts");








var SingleBusRoutesComponent = /** @class */ (function () {
    function SingleBusRoutesComponent(navCtrl, route, parent, location, routedetails, router, loaderService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.route = route;
        this.parent = parent;
        this.location = location;
        this.routedetails = routedetails;
        this.router = router;
        this.loaderService = loaderService;
        this.currentArea = '';
        this.routeData = [];
        this.backwardRoutes = [];
        this.forwardRoutes = [];
        this.schoolData = { stop: 'School', time: { morning: '7:30 AM', afternoon: '2:00 PM' } };
        console.log('In Route component');
        // Get the route parameter.
        this.router.params.subscribe(function (data) {
            _this.userType = data.userType;
            _this.routeId = data.routeId;
        });
    }
    /**
     * Get userType or routeId from url
     * Get driverId from given route
     */
    SingleBusRoutesComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.userType = this.router.snapshot.queryParamMap.get('user');
                        this.routeId = this.router.snapshot.queryParamMap.get('routeId');
                        this.loaderService.loaderDismiss();
                        // Get Login driver ID from URL
                        // this.routeId = this.router.snapshot.queryParamMap.get('routeId');
                        console.log(this.routeId);
                        return [4 /*yield*/, this.routedetails.getRouteDriverId(this.routeId).subscribe(function (res) {
                                var response = res['data'];
                                console.log(res);
                                _this.driverId = response['driver_id'];
                                _this.getRouteDetails(_this.driverId);
                            })];
                    case 1:
                        _a.sent();
                        // Get All routes from Database
                        // Get current area of driver
                        this.parent.curLocation.subscribe(function (response) {
                            _this.address = response;
                            if (_this.address) {
                                console.log(_this.address.current_area);
                                _this.currentArea = _this.address.current_area;
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * This function called when user pull down to refresh the page.
     * @param event
     */
    SingleBusRoutesComponent.prototype.doRefresh = function (event) {
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
            event.target.complete();
        }, 2000);
    };
    /**
     * Function for navigate back
     */
    SingleBusRoutesComponent.prototype.navigateBack = function () {
        clearInterval(this.interval);
        this.navCtrl.pop();
    };
    /**
     * This function fetch route details from server.
     */
    SingleBusRoutesComponent.prototype.getRouteDetails = function (driverId) {
        var _this = this;
        this.routedetails.getRouteDetails(driverId).subscribe(function (response) {
            console.log(response);
            _this.routeData = response['data'];
            if (_this.routeData['backward_routes']) {
                _this.backwardRoutes = _this.routeData['backward_routes'];
            }
            else if (_this.routeData['forward_routes']) {
                _this.forwardRoutes = _this.routeData['forward_routes'];
            }
            _this.startLocationInterval(_this.driverId);
        });
    };
    /**
     * This function start interval and fetch current location of driver from server
     */
    SingleBusRoutesComponent.prototype.startLocationInterval = function (driverId) {
        var _this = this;
        this.interval = setInterval(function () {
            console.log('Parent');
            _this.parent.getCurrentLocation(driverId);
        }, 9000);
    };
    /**
     * Clear interval and loader
     */
    SingleBusRoutesComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
        console.log('destroy');
        this.loaderService.loaderDismiss();
    };
    SingleBusRoutesComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_parent_service__WEBPACK_IMPORTED_MODULE_6__["ParentService"] },
        { type: _services_driver_service__WEBPACK_IMPORTED_MODULE_3__["DriverService"] },
        { type: _services_route_service__WEBPACK_IMPORTED_MODULE_4__["RouteService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] }
    ]; };
    SingleBusRoutesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-parent-view-routes',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./single-bus-routes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/single-bus-routes/single-bus-routes.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./single-bus-routes.component.scss */ "./src/app/pages/shared/single-bus-routes/single-bus-routes.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_parent_service__WEBPACK_IMPORTED_MODULE_6__["ParentService"],
            _services_driver_service__WEBPACK_IMPORTED_MODULE_3__["DriverService"],
            _services_route_service__WEBPACK_IMPORTED_MODULE_4__["RouteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]])
    ], SingleBusRoutesComponent);
    return SingleBusRoutesComponent;
}());



/***/ }),

/***/ "./src/app/pages/shared/single-bus-routes/single-bus-routes.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/shared/single-bus-routes/single-bus-routes.module.ts ***!
  \****************************************************************************/
/*! exports provided: SingleBusRoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleBusRoutesModule", function() { return SingleBusRoutesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _single_bus_routes_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./single-bus-routes-routing.module */ "./src/app/pages/shared/single-bus-routes/single-bus-routes-routing.module.ts");
/* harmony import */ var _single_bus_routes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./single-bus-routes.component */ "./src/app/pages/shared/single-bus-routes/single-bus-routes.component.ts");
/* harmony import */ var _shared_tab_tab_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/tab/tab.module */ "./src/app/pages/shared/tab/tab.module.ts");









var SingleBusRoutesModule = /** @class */ (function () {
    function SingleBusRoutesModule() {
    }
    SingleBusRoutesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _shared_tab_tab_module__WEBPACK_IMPORTED_MODULE_8__["TabModule"],
                _single_bus_routes_routing_module__WEBPACK_IMPORTED_MODULE_6__["SingleBusRoutesRoutingModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _single_bus_routes_component__WEBPACK_IMPORTED_MODULE_7__["SingleBusRoutesComponent"],
                    },
                ]),
            ],
            declarations: [_single_bus_routes_component__WEBPACK_IMPORTED_MODULE_7__["SingleBusRoutesComponent"]],
        })
    ], SingleBusRoutesModule);
    return SingleBusRoutesModule;
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
//# sourceMappingURL=default~app-pages-login-coordinator-buses-list-single-bus-map-single-bus-map-module~shared-single-bu~c6bb0f55.js.map