(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-login-coordinator-buses-list-single-bus-map-single-bus-map-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/coordinator/buses-list/single-bus-map/single-bus-map.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/coordinator/buses-list/single-bus-map/single-bus-map.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar id=\"toolbar\" text-center>\n    <ion-icon class=\"backNavigationIcon\" slot=\"start\" name=\"arrow-back\" (click)=\"navigateBack()\"></ion-icon>\n    {{vehicleNumber}}\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-tab></app-tab>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/login/coordinator/buses-list/single-bus-map/single-bus-map.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/login/coordinator/buses-list/single-bus-map/single-bus-map.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#toolbar {\n  --background: #7986cb;\n  color: white;\n  font-size: 20px;\n}\n\nion-title {\n  padding-top: 5%;\n  font-size: 25px;\n}\n\nion-icon {\n  float: right;\n  font-size: 45px;\n}\n\nion-tab-bar {\n  padding: 3% 0%;\n  margin: 0% 5%;\n  border-bottom: none;\n}\n\n.logOutImage {\n  width: 40px;\n}\n\n.profileImage {\n  width: 40px;\n}\n\n.tabImage {\n  width: 25px;\n  color: black;\n}\n\nion-item {\n  height: 41px;\n  --background: none;\n}\n\n.abc {\n  font-size: 50px;\n  stroke: none !important;\n}\n\n.backNavigationIcon {\n  font-size: 30px;\n  padding-left: 10px;\n}\n\n.icon-inner,\nsvg {\n  display: block;\n  fill: currentColor;\n  stroke: none;\n  height: 100%;\n  width: 100%;\n}\n\n#tabDivForBusList {\n  width: 49%;\n  background-color: white;\n  box-shadow: inset 1px 1px 5px #cccccc, inset 0px -3px 0px rgba(0, 158, 231, 0.8), 0px 1px 5px #cccccc;\n}\n\n#tabDivForBusRoute {\n  width: 49%;\n  background-color: white;\n  box-shadow: 1px 1px 5px #cccccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hbWRldi9EZXNrdG9wL2dpdCAvd2hlcmUgaXMgbXkgYnVzL3NyYy9hcHAvcGFnZXMvbG9naW4vY29vcmRpbmF0b3IvYnVzZXMtbGlzdC9zaW5nbGUtYnVzLW1hcC9zaW5nbGUtYnVzLW1hcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vY29vcmRpbmF0b3IvYnVzZXMtbGlzdC9zaW5nbGUtYnVzLW1hcC9zaW5nbGUtYnVzLW1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREtBO0VBRUUsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0hGOztBRFFBO0VBQ0UsV0FBQTtBQ0xGOztBRFFBO0VBQ0UsV0FBQTtBQ0xGOztBRFFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNMRjs7QURRQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0xGOztBRFFBO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0FDTEY7O0FEUUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNMRjs7QURRQTs7RUFFRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNMRjs7QURRQTtFQUNFLFVBQUE7RUFDQSx1QkFBQTtFQUNBLHFHQUFBO0FDTEY7O0FEUUE7RUFDRSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtBQ0xGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vY29vcmRpbmF0b3IvYnVzZXMtbGlzdC9zaW5nbGUtYnVzLW1hcC9zaW5nbGUtYnVzLW1hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNzk4NmNiO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDUlO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbmlvbi1pY29uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDQ1cHg7XG59XG5cbmlvbi1jb250ZW50IHt9XG5cblxuaW9uLXRhYi1iYXIge1xuXG4gIHBhZGRpbmc6IDMlIDAlO1xuICBtYXJnaW46IDAlIDUlO1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG5cblxuLmxvZ091dEltYWdlIHtcbiAgd2lkdGg6IDQwcHg7XG59XG5cbi5wcm9maWxlSW1hZ2Uge1xuICB3aWR0aDogNDBweDtcbn1cblxuLnRhYkltYWdlIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLWl0ZW0ge1xuICBoZWlnaHQ6IDQxcHg7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmFiYyB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgc3Ryb2tlOiBub25lICFpbXBvcnRhbnRcbn1cblxuLmJhY2tOYXZpZ2F0aW9uSWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uaWNvbi1pbm5lcixcbnN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG4gIHN0cm9rZTogbm9uZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuI3RhYkRpdkZvckJ1c0xpc3Qge1xuICB3aWR0aDogNDklO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCA1cHggI2NjY2NjYywgaW5zZXQgMHB4IC0zcHggMHB4IHJnYmEoMCwgMTU4LCAyMzEsIDAuOCksIDBweCAxcHggNXB4ICNjY2NjY2M7XG59XG5cbiN0YWJEaXZGb3JCdXNSb3V0ZSB7XG4gIHdpZHRoOiA0OSU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAjY2NjY2NjO1xuICAvLyBib3gtc2hhZG93OiAwcHggMTBweCAycHggcmdiYSgwLCAwLCAwLCAwLjgwKSwgMCAtMTBweCAycHggLTVweCAjN2IyNzJjO1xufSIsIiN0b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNzk4NmNiO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDUlO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbmlvbi1pY29uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDQ1cHg7XG59XG5cbmlvbi10YWItYmFyIHtcbiAgcGFkZGluZzogMyUgMCU7XG4gIG1hcmdpbjogMCUgNSU7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5sb2dPdXRJbWFnZSB7XG4gIHdpZHRoOiA0MHB4O1xufVxuXG4ucHJvZmlsZUltYWdlIHtcbiAgd2lkdGg6IDQwcHg7XG59XG5cbi50YWJJbWFnZSB7XG4gIHdpZHRoOiAyNXB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1pdGVtIHtcbiAgaGVpZ2h0OiA0MXB4O1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5hYmMge1xuICBmb250LXNpemU6IDUwcHg7XG4gIHN0cm9rZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uYmFja05hdmlnYXRpb25JY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5pY29uLWlubmVyLFxuc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgc3Ryb2tlOiBub25lO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jdGFiRGl2Rm9yQnVzTGlzdCB7XG4gIHdpZHRoOiA0OSU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDVweCAjY2NjY2NjLCBpbnNldCAwcHggLTNweCAwcHggcmdiYSgwLCAxNTgsIDIzMSwgMC44KSwgMHB4IDFweCA1cHggI2NjY2NjYztcbn1cblxuI3RhYkRpdkZvckJ1c1JvdXRlIHtcbiAgd2lkdGg6IDQ5JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4ICNjY2NjY2M7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/login/coordinator/buses-list/single-bus-map/single-bus-map.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/login/coordinator/buses-list/single-bus-map/single-bus-map.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: SingleBusMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleBusMapComponent", function() { return SingleBusMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_route_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/route.service */ "./src/app/services/route.service.ts");





var SingleBusMapComponent = /** @class */ (function () {
    /**
     * @description - This constructor initializes the instances of the NavController and ActivatedRoute.
     * @param navCtrl
     * @param route
     */
    function SingleBusMapComponent(navCtrl, route, router, routeService) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.router = router;
        this.routeService = routeService;
    }
    SingleBusMapComponent.prototype.ngOnInit = function () {
        // this.navCtrl.setRoot(this.navCtrl.getActive().component);
        this.vehicleNumber = this.route.snapshot.queryParamMap.get('vehicleNumber');
        this.driverId = this.route.snapshot.queryParamMap.get('driverId');
        this.userType = this.route.snapshot.queryParamMap.get('user');
    };
    /**
     * @description - This function navigate the page back.
     */
    SingleBusMapComponent.prototype.navigateBack = function () {
        // Calling  back method of navCtrl.
        this.navCtrl.pop();
    };
    SingleBusMapComponent.prototype.ngOnDestroy = function () {
        console.log('destroy');
        // this.alertService.loaderDismiss();
    };
    SingleBusMapComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_route_service__WEBPACK_IMPORTED_MODULE_4__["RouteService"] }
    ]; };
    SingleBusMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single-bus-map',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./single-bus-map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/coordinator/buses-list/single-bus-map/single-bus-map.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./single-bus-map.component.scss */ "./src/app/pages/login/coordinator/buses-list/single-bus-map/single-bus-map.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_route_service__WEBPACK_IMPORTED_MODULE_4__["RouteService"]])
    ], SingleBusMapComponent);
    return SingleBusMapComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/coordinator/buses-list/single-bus-map/single-bus-map.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/login/coordinator/buses-list/single-bus-map/single-bus-map.module.ts ***!
  \********************************************************************************************/
/*! exports provided: SingleBusMapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleBusMapModule", function() { return SingleBusMapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _single_bus_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./single-bus-map.component */ "./src/app/pages/login/coordinator/buses-list/single-bus-map/single-bus-map.component.ts");
/* harmony import */ var _single_bus_map_router_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./single-bus-map.router.module */ "./src/app/pages/login/coordinator/buses-list/single-bus-map/single-bus-map.router.module.ts");
/* harmony import */ var _shared_single_bus_routes_single_bus_routes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/single-bus-routes/single-bus-routes.module */ "./src/app/pages/shared/single-bus-routes/single-bus-routes.module.ts");
/* harmony import */ var src_app_pages_shared_tab_tab_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pages/shared/tab/tab.module */ "./src/app/pages/shared/tab/tab.module.ts");









var SingleBusMapModule = /** @class */ (function () {
    function SingleBusMapModule() {
    }
    SingleBusMapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_single_bus_map_component__WEBPACK_IMPORTED_MODULE_5__["SingleBusMapComponent"]],
            imports: [
                src_app_pages_shared_tab_tab_module__WEBPACK_IMPORTED_MODULE_8__["TabModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        // Route for single-bus-map compomnent.
                        path: '',
                        component: _single_bus_map_component__WEBPACK_IMPORTED_MODULE_5__["SingleBusMapComponent"],
                    },
                ]),
                _single_bus_map_router_module__WEBPACK_IMPORTED_MODULE_6__["SingleBusMapRouterModule"],
                _shared_single_bus_routes_single_bus_routes_module__WEBPACK_IMPORTED_MODULE_7__["SingleBusRoutesModule"],
            ],
            providers: [],
        })
    ], SingleBusMapModule);
    return SingleBusMapModule;
}());



/***/ }),

/***/ "./src/app/pages/login/coordinator/buses-list/single-bus-map/single-bus-map.router.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/login/coordinator/buses-list/single-bus-map/single-bus-map.router.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: SingleBusMapRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleBusMapRouterModule", function() { return SingleBusMapRouterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _single_bus_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./single-bus-map.component */ "./src/app/pages/login/coordinator/buses-list/single-bus-map/single-bus-map.component.ts");




var routes = [
    /* {
     path: '',
     component: SingleBusMapComponent,
     children: [
       {
         path: 'single-bus-routes/:userType/:routeId',
         loadChildren:
           '../../../../shared/single-bus-routes/single-bus-routes.module#SingleBusRoutesModule',
       },
       {
         path: 'parent-view-map/:driverId',
         loadChildren: '../../../parent/parent-view-map/parent-view-map.module#ParentViewMapModule',
       },
       {
         path: '',
         redirectTo: 'single-bus-routes',
         pathMatch: 'full',
       },
     ],
   }, */
    {
        path: '',
        component: _single_bus_map_component__WEBPACK_IMPORTED_MODULE_3__["SingleBusMapComponent"],
        children: [
            {
                path: 'bus-route',
                loadChildren: '../../../../shared/single-bus-routes/single-bus-routes.module#SingleBusRoutesModule',
            },
            {
                path: 'livemap/:userType/:driverId',
                loadChildren: '../../../../shared/view-map/view-map.module#ViewMapModule',
            },
            {
                path: '',
                redirectTo: 'bus-route',
                pathMatch: 'full',
            },
        ],
    },
];
/* const routes: Routes = [
  {
    // Route to admin-bus-details component.
    path: '',
    component: SingleBusMapComponent,
    children: [
      {
        // Route to bus-details component.{
        path: 'single-bus-routes/:userType/:routeId',
        children: [
          {
            path: '',
            loadChildren:
              '../../../../shared/single-bus-routes/single-bus-routes.module#SingleBusRoutesModule',
          },
        ],
      },
      // Route to admin-bus-details component.
      {
        path: 'parent-view-map/:driverId',
        children: [
          {
            path: '',
            loadChildren:
              '../../../parent/parent-view-map/parent-view-map.module#ParentViewMapModule',
          },
        ],
      },
      {
        // Route to bus-details component.{
        path: 'single-bus-routes',
        children: [
          {
            path: '',
            loadChildren:
              '../../../../shared/single-bus-routes/single-bus-routes.module#SingleBusRoutesModule',
          },
        ],
      },
    ],
  },
  {
    // Route to admin-bus-details component.
    path: '',
    redirectTo: 'single-bus-routes',
    pathMatch: 'full',
  },
]; */
var SingleBusMapRouterModule = /** @class */ (function () {
    function SingleBusMapRouterModule() {
    }
    SingleBusMapRouterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SingleBusMapRouterModule);
    return SingleBusMapRouterModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-pages-login-coordinator-buses-list-single-bus-map-single-bus-map-module.js.map