(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-login-coordinator-buses-list-admin-bus-details-admin-bus-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/coordinator/buses-list/admin-bus-details/admin-bus-details.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/coordinator/buses-list/admin-bus-details/admin-bus-details.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar id=\"toolbar\" text-center>\n    <ion-icon class=\"backNavigationIcon\" slot=\"start\" name=\"arrow-back\" (click)=\"navigateBack()\"></ion-icon>\n    {{vehicleNumber}}\n  </ion-toolbar>\n</ion-header>\n<!-- <ion-content>\n  <ion-tabs>\n    <ion-tab-bar slot=\"top\">\n      <div id=\"tabDivForBusList\">\n        <ion-tab-button id=\"routeTabButton\" tab=\"bus-route-details/{{vehicleId}}\" (click)=\"changeLookOfBusList()\">\n          <ion-item>\n            <ion-icon name=\"navigate\" class=\"tabImage\">\n            </ion-icon>\n            <ion-label>Routes</ion-label>\n          </ion-item>\n        </ion-tab-button>\n      </div>\n      <div id=\"tabDivForBusRoute\">\n        <ion-tab-button tab=\"bus-details/{{userType}}/{{vehicleId}}\" (click)=\"changeLookOfBusRoute()\">\n          <ion-item>\n            <ion-icon name=\"bus\" class=\"tabImage\">\n            </ion-icon>\n            <ion-label>Details</ion-label>\n          </ion-item>\n        </ion-tab-button>\n      </div>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-content> -->\n\n<ion-tabs>\n  <ion-tab-bar slot=\"top\">\n    <div class=\"tabbar\">\n      <ion-tab-button tab=\"bus-route-details\" (click)=\"busRouteStyle()\">\n        <ion-item [ngClass]=\"{'show':routeStatus,'hide':!routeStatus}\">\n          <ion-icon name=\"navigate\" class=\"tabImage\">\n          </ion-icon>\n          <ion-label>Routes</ion-label>\n        </ion-item>\n      </ion-tab-button>\n    </div>\n    <div class=\"tabbar\">\n      <ion-tab-button tab=\"bus-details/{{userType}}/{{vehicleId}}\" (click)=\"liveMapStyle()\">\n        <ion-item [ngClass]=\"{'show':livemapStatus,'hide':!livemapStatus}\">\n          <ion-icon name=\"bus\" class=\"tabImage\"></ion-icon>\n          <ion-label>Details</ion-label>\n        </ion-item>\n      </ion-tab-button>\n    </div>\n  </ion-tab-bar>\n</ion-tabs>");

/***/ }),

/***/ "./src/app/pages/login/coordinator/buses-list/admin-bus-details/admin-bus-details.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/login/coordinator/buses-list/admin-bus-details/admin-bus-details.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#toolbar {\n  --background: #7986cb;\n  color: white;\n  font-size: 20px;\n}\n\nion-title {\n  padding-top: 5%;\n  font-size: 25px;\n}\n\nion-icon {\n  float: right;\n  font-size: 45px;\n}\n\nion-tab-bar {\n  margin-top: 56px;\n}\n\n.logOutImage {\n  width: 40px;\n}\n\n.profileImage {\n  width: 40px;\n}\n\n.tabImage {\n  width: 25px;\n  color: black;\n}\n\n/* ion-item {\n  height: 41px;\n  --background: none;\n} */\n\n.abc {\n  font-size: 50px;\n  stroke: none !important;\n}\n\n.backNavigationIcon {\n  font-size: 30px;\n  padding-left: 10px;\n}\n\n.icon-inner,\nsvg {\n  display: block;\n  fill: currentColor;\n  stroke: none;\n  height: 100%;\n  width: 100%;\n}\n\n#tabDivForBusList {\n  width: 49%;\n  background-color: white;\n  box-shadow: inset 1px 1px 5px #cccccc, inset 0px -3px 0px rgba(0, 158, 231, 0.8), 0px 1px 5px #cccccc;\n}\n\n#tabDivForBusRoute {\n  width: 49%;\n  background-color: white;\n  box-shadow: 1px 1px 5px #cccccc;\n}\n\n.tabImage {\n  width: 25px;\n  color: black;\n}\n\nion-item {\n  height: 45px;\n  width: 100%;\n  --background: none;\n}\n\n.tabbar {\n  width: 49%;\n}\n\n.show {\n  box-shadow: inset 0px -1px 5px #cccccc, inset 0px -3px 0px rgba(0, 158, 231, 0.8), inset 0px -1px 5px #cccccc;\n}\n\n.hide {\n  box-shadow: inset 0px -1px 5px rgba(240, 242, 243, 0.938);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hbWRldi9EZXNrdG9wL2dpdCAvd2hlcmUgaXMgbXkgYnVzL3NyYy9hcHAvcGFnZXMvbG9naW4vY29vcmRpbmF0b3IvYnVzZXMtbGlzdC9hZG1pbi1idXMtZGV0YWlscy9hZG1pbi1idXMtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vY29vcmRpbmF0b3IvYnVzZXMtbGlzdC9hZG1pbi1idXMtZGV0YWlscy9hZG1pbi1idXMtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRElBO0VBRUUsZ0JBQUE7QUNGRjs7QURPQTtFQUNFLFdBQUE7QUNKRjs7QURPQTtFQUNFLFdBQUE7QUNKRjs7QURPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDSkY7O0FET0E7OztHQUFBOztBQUtBO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0FDTEY7O0FEUUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNMRjs7QURRQTs7RUFFRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNMRjs7QURRQTtFQUNFLFVBQUE7RUFDQSx1QkFBQTtFQUNBLHFHQUFBO0FDTEY7O0FEUUE7RUFDRSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtBQ0xGOztBRFNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNORjs7QURTQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNORjs7QURTQTtFQUNFLFVBQUE7QUNORjs7QURTQTtFQUNFLDZHQUFBO0FDTkY7O0FEU0E7RUFDRSx5REFBQTtBQ05GIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vY29vcmRpbmF0b3IvYnVzZXMtbGlzdC9hZG1pbi1idXMtZGV0YWlscy9hZG1pbi1idXMtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNzk4NmNiO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDUlO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbmlvbi1pY29uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDQ1cHg7XG59XG5cblxuXG5pb24tdGFiLWJhciB7XG5cbiAgbWFyZ2luLXRvcDogNTZweDtcbn1cblxuXG5cbi5sb2dPdXRJbWFnZSB7XG4gIHdpZHRoOiA0MHB4O1xufVxuXG4ucHJvZmlsZUltYWdlIHtcbiAgd2lkdGg6IDQwcHg7XG59XG5cbi50YWJJbWFnZSB7XG4gIHdpZHRoOiAyNXB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi8qIGlvbi1pdGVtIHtcbiAgaGVpZ2h0OiA0MXB4O1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG59ICovXG5cbi5hYmMge1xuICBmb250LXNpemU6IDUwcHg7XG4gIHN0cm9rZTogbm9uZSAhaW1wb3J0YW50XG59XG5cbi5iYWNrTmF2aWdhdGlvbkljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmljb24taW5uZXIsXG5zdmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmlsbDogY3VycmVudENvbG9yO1xuICBzdHJva2U6IG5vbmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiN0YWJEaXZGb3JCdXNMaXN0IHtcbiAgd2lkdGg6IDQ5JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggNXB4ICNjY2NjY2MsIGluc2V0IDBweCAtM3B4IDBweCByZ2JhKDAsIDE1OCwgMjMxLCAwLjgpLCAwcHggMXB4IDVweCAjY2NjY2NjO1xufVxuXG4jdGFiRGl2Rm9yQnVzUm91dGUge1xuICB3aWR0aDogNDklO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggI2NjY2NjYztcbiAgLy8gYm94LXNoYWRvdzogMHB4IDEwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC44MCksIDAgLTEwcHggMnB4IC01cHggIzdiMjcyYztcbn1cblxuLnRhYkltYWdlIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLWl0ZW0ge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi50YWJiYXIge1xuICB3aWR0aDogNDklO1xufVxuXG4uc2hvdyB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAtMXB4IDVweCAjY2NjY2NjLCBpbnNldCAwcHggLTNweCAwcHggcmdiYSgwLCAxNTgsIDIzMSwgMC44KSwgaW5zZXQgMHB4IC0xcHggNXB4ICNjY2NjY2M7XG59XG5cbi5oaWRlIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IC0xcHggNXB4IHJnYmEoMjQwLCAyNDIsIDI0MywgMC45MzgpO1xufSIsIiN0b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNzk4NmNiO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDUlO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbmlvbi1pY29uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDQ1cHg7XG59XG5cbmlvbi10YWItYmFyIHtcbiAgbWFyZ2luLXRvcDogNTZweDtcbn1cblxuLmxvZ091dEltYWdlIHtcbiAgd2lkdGg6IDQwcHg7XG59XG5cbi5wcm9maWxlSW1hZ2Uge1xuICB3aWR0aDogNDBweDtcbn1cblxuLnRhYkltYWdlIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLyogaW9uLWl0ZW0ge1xuICBoZWlnaHQ6IDQxcHg7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbn0gKi9cbi5hYmMge1xuICBmb250LXNpemU6IDUwcHg7XG4gIHN0cm9rZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uYmFja05hdmlnYXRpb25JY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5pY29uLWlubmVyLFxuc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgc3Ryb2tlOiBub25lO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jdGFiRGl2Rm9yQnVzTGlzdCB7XG4gIHdpZHRoOiA0OSU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDVweCAjY2NjY2NjLCBpbnNldCAwcHggLTNweCAwcHggcmdiYSgwLCAxNTgsIDIzMSwgMC44KSwgMHB4IDFweCA1cHggI2NjY2NjYztcbn1cblxuI3RhYkRpdkZvckJ1c1JvdXRlIHtcbiAgd2lkdGg6IDQ5JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4ICNjY2NjY2M7XG59XG5cbi50YWJJbWFnZSB7XG4gIHdpZHRoOiAyNXB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1pdGVtIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogMTAwJTtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xufVxuXG4udGFiYmFyIHtcbiAgd2lkdGg6IDQ5JTtcbn1cblxuLnNob3cge1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggLTFweCA1cHggI2NjY2NjYywgaW5zZXQgMHB4IC0zcHggMHB4IHJnYmEoMCwgMTU4LCAyMzEsIDAuOCksIGluc2V0IDBweCAtMXB4IDVweCAjY2NjY2NjO1xufVxuXG4uaGlkZSB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAtMXB4IDVweCByZ2JhKDI0MCwgMjQyLCAyNDMsIDAuOTM4KTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/login/coordinator/buses-list/admin-bus-details/admin-bus-details.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/login/coordinator/buses-list/admin-bus-details/admin-bus-details.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AdminBusDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminBusDetailsComponent", function() { return AdminBusDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AdminBusDetailsComponent = /** @class */ (function () {
    /**
     * @description - This constructor initializes the instances of the NavController and ActivatedRoute.
     * @param navCtrl
     * @param route
     */
    function AdminBusDetailsComponent(navCtrl, route) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.routeStatus = true;
        this.livemapStatus = false;
    }
    AdminBusDetailsComponent.prototype.ngOnInit = function () {
        this.vehicleNumber = this.route.snapshot.queryParamMap.get('vehicleNumber');
        this.vehicleId = this.route.snapshot.queryParamMap.get('vehicleId');
        this.userType = this.route.snapshot.queryParamMap.get('user');
    };
    /**
     * this function change the value of routeStatus and livemapStatus for applying css
     */
    AdminBusDetailsComponent.prototype.busRouteStyle = function () {
        this.routeStatus = true;
        this.livemapStatus = false;
    };
    /**
     * this function change the value of routeStatus and livemapStatus for applying css
     */
    AdminBusDetailsComponent.prototype.liveMapStyle = function () {
        this.routeStatus = false;
        this.livemapStatus = true;
    };
    /**
     * @description - This function navigate the page back.
     */
    AdminBusDetailsComponent.prototype.navigateBack = function () {
        // Calling  back method of navCtrl.
        this.navCtrl.pop();
    };
    AdminBusDetailsComponent.prototype.ngOnDestroy = function () {
        console.log('destroy');
        // this.alertService.loaderDismiss();
    };
    AdminBusDetailsComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    AdminBusDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-admin-bus-details',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-bus-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/coordinator/buses-list/admin-bus-details/admin-bus-details.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-bus-details.component.scss */ "./src/app/pages/login/coordinator/buses-list/admin-bus-details/admin-bus-details.component.scss")).default]
        })
        /**
         * @Class - AdminBusDetailsComponent
         */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AdminBusDetailsComponent);
    return AdminBusDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/coordinator/buses-list/admin-bus-details/admin-bus-details.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/login/coordinator/buses-list/admin-bus-details/admin-bus-details.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: AdminBusDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminBusDetailsModule", function() { return AdminBusDetailsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_bus_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-bus-details.component */ "./src/app/pages/login/coordinator/buses-list/admin-bus-details/admin-bus-details.component.ts");
/* harmony import */ var _admin_bus_details_router_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-bus-details.router.module */ "./src/app/pages/login/coordinator/buses-list/admin-bus-details/admin-bus-details.router.module.ts");







var AdminBusDetailsModule = /** @class */ (function () {
    function AdminBusDetailsModule() {
    }
    AdminBusDetailsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_admin_bus_details_component__WEBPACK_IMPORTED_MODULE_5__["AdminBusDetailsComponent"]],
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _admin_bus_details_router_module__WEBPACK_IMPORTED_MODULE_6__["AdminBusDetailsRoutingModule"]],
        })
    ], AdminBusDetailsModule);
    return AdminBusDetailsModule;
}());



/***/ }),

/***/ "./src/app/pages/login/coordinator/buses-list/admin-bus-details/admin-bus-details.router.module.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/login/coordinator/buses-list/admin-bus-details/admin-bus-details.router.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: AdminBusDetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminBusDetailsRoutingModule", function() { return AdminBusDetailsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_bus_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-bus-details.component */ "./src/app/pages/login/coordinator/buses-list/admin-bus-details/admin-bus-details.component.ts");




var routes = [
    {
        path: '',
        component: _admin_bus_details_component__WEBPACK_IMPORTED_MODULE_3__["AdminBusDetailsComponent"],
        children: [
            {
                path: 'bus-route-details',
                loadChildren: '../admin-bus-details/bus-route-details/bus-route-details.module#BusRouteDetailsModule',
            },
            {
                path: 'bus-details/:userType/:vehicleId',
                loadChildren: '../../../../shared/bus-details/bus-details.module#BusDetailsModule',
            },
            {
                path: '',
                redirectTo: 'bus-route-details',
                pathMatch: 'full',
            },
        ],
    },
];
/* const routes: Routes = [
  {
    // Route to admin-bus-details component.
    path: '',
    component: AdminBusDetailsComponent,
    children: [
      // Route to admin-bus-details component.
      {
        path: 'bus-route-details/:vehicleId',
        children: [
          {
            path: '',
            loadChildren:
              '../admin-bus-details/bus-route-details/bus-route-details.module#BusRouteDetailsModule',
          },
        ],
      },
      {
        // Route to bus-details component.
        path: 'bus-details/:userType/:vehicleId',
        children: [
          {
            path: '',
            loadChildren: '../../../../shared/bus-details/bus-details.module#BusDetailsModule',
          },
        ],
      },
      {
        // Route to admin-bus-details component.
        path: '',
        redirectTo: 'bus-route-details',
        pathMatch: 'full',
      },
    ],
  },
  {
    // Route to admin-bus-details component.
    path: '',
    redirectTo: 'bus-route-details',
    pathMatch: 'full',
  },
]; */
var AdminBusDetailsRoutingModule = /** @class */ (function () {
    function AdminBusDetailsRoutingModule() {
    }
    AdminBusDetailsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AdminBusDetailsRoutingModule);
    return AdminBusDetailsRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-pages-login-coordinator-buses-list-admin-bus-details-admin-bus-details-module.js.map