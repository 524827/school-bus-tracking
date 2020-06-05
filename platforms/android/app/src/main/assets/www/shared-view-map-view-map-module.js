(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shared-view-map-view-map-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/view-map/view-map.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/view-map/view-map.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header text-center *ngIf=\"userType=='parent'\">\n  <ion-toolbar class=\"background\" color=\"#587FBB\" id=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-icon name=\"arrow-back\" class=\"back\" (click)=\"navigateBack()\"></ion-icon>\n    </ion-buttons>\n    <ion-title class=\"title\">Live Map</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card>\n    <ion-card-content id=\"map\"></ion-card-content>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/shared/view-map/view-map-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/shared/view-map/view-map-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ViewMapRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMapRoutingModule", function() { return ViewMapRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var ViewMapRoutingModule = /** @class */ (function () {
    function ViewMapRoutingModule() {
    }
    ViewMapRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ViewMapRoutingModule);
    return ViewMapRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/shared/view-map/view-map.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/shared/view-map/view-map.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map {\n  width: 100%;\n  height: 900px;\n}\n\n.back {\n  zoom: 2;\n}\n\n#toolbar {\n  --background: #7986cb;\n  color: white;\n}\n\nion-toolbar {\n  background-color: #7d8cd1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hbWRldi9EZXNrdG9wL2dpdCAvd2hlcmUgaXMgbXkgYnVzL3NyYy9hcHAvcGFnZXMvc2hhcmVkL3ZpZXctbWFwL3ZpZXctbWFwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zaGFyZWQvdmlldy1tYXAvdmlldy1tYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsT0FBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2hhcmVkL3ZpZXctbWFwL3ZpZXctbWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTAwcHg7XG59XG5cbi5iYWNrIHtcbiAgem9vbTogMi4wO1xufVxuXG4jdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzc5ODZjYjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjUsIDE0MCwgMjA5KTtcbn0iLCIjbWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTAwcHg7XG59XG5cbi5iYWNrIHtcbiAgem9vbTogMjtcbn1cblxuI3Rvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICM3OTg2Y2I7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2Q4Y2QxO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/shared/view-map/view-map.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/shared/view-map/view-map.component.ts ***!
  \*************************************************************/
/*! exports provided: ViewMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMapComponent", function() { return ViewMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_driver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/driver.service */ "./src/app/services/driver.service.ts");
/* harmony import */ var _services_parent_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/parent.service */ "./src/app/services/parent.service.ts");
/* harmony import */ var _services_route_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/route.service */ "./src/app/services/route.service.ts");







var ViewMapComponent = /** @class */ (function () {
    function ViewMapComponent(parentService, driverService, routeService, router, navctl) {
        this.parentService = parentService;
        this.driverService = driverService;
        this.routeService = routeService;
        this.router = router;
        this.navctl = navctl;
        this.wayPoints = [];
        /*  this.userType = this.router.snapshot.queryParamMap.get('user');
             this.driverId = this.router.snapshot.queryParamMap.get('driverId'); */
    }
    ViewMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (data) {
            console.log('userType in Constructor', data);
            _this.driverId = data.driverId;
            _this.userType = data.userType;
        });
        this.getRouteData();
        this.startLocationInterval(this.driverId);
        /*  // Get current latitude and longitude of driver
        this.location.curLocation.subscribe((response: CurrentData) => {
          this.address = response;
          if (this.address) {
            console.log('Address : ', this.address);
            this.moveBus(this.address.curLocation); // move bus marker over map
          }
        }); */
    };
    /**
     *  ngAfterViewInit function loads map after component view has fully initiolized
     */
    ViewMapComponent.prototype.ngAfterViewInit = function () {
        /* console.log('Worked...');
        const center = { lat: 19.9975, lng: 73.7898 };
        const directionsService = new google.maps.DirectionsService();
        const directionsDisplay = new google.maps.DirectionsRenderer();
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
          center,
          zoom: 10,
        });
        directionsDisplay.setMap(this.map);
    
        // create marker for display current location
        this.marker = new google.maps.Marker({
          map: this.map,
          position: { lat: 19.9975, lng: 73.7898 },
          icon: '../../../../assets/images/bus.png',
          animation: google.maps.Animation.DROP,
        }); */
    };
    // Move bus icon over map.
    ViewMapComponent.prototype.moveBus = function (place) {
        console.log('plcae : ', place);
        // set cuttent latitude and longitude to marker
        this.marker.setPosition(new google.maps.LatLng(place.latitude, place.longitude));
        //   this.map.panTo(new google.maps.LatLng({ lat: place.latitude, lng: place.longitude }));
    };
    ViewMapComponent.prototype.getRouteData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var driverData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.routeService.getRouteAllDetails(this.driverId)];
                    case 1:
                        driverData = _a.sent();
                        driverData.subscribe(function (response) {
                            _this.initializeRoutesOnMap(response['data']);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewMapComponent.prototype.initializeRoutesOnMap = function (serverRouteData) {
        var _this = this;
        console.log('Working....');
        var directionsService = new google.maps.DirectionsService();
        var directionsDisplay = new google.maps.DirectionsRenderer();
        this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 5,
            center: new google.maps.LatLng(19.965731, 73.826119),
        });
        directionsDisplay.setMap(this.map);
        serverRouteData.forward_routes.map(function (item, index) {
            _this.wayPoints.push({
                location: item.location + ", Nashik",
                stopover: true,
            });
        });
        var originPoint = this.wayPoints.shift();
        var destinationPoint = this.wayPoints.pop();
        directionsService.route({
            origin: originPoint.location,
            destination: destinationPoint.location,
            waypoints: this.wayPoints,
            optimizeWaypoints: true,
            travelMode: 'DRIVING',
        }, function (response, status) {
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
                /*   const route = response.routes[0];
                const geocoder = new google.maps.Geocoder(); */
                _this.marker = new google.maps.Marker({
                    map: _this.map,
                    position: { lat: 19.9975, lng: 73.7898 },
                    icon: '../../../../assets/images/bus2.png',
                    animation: google.maps.Animation.DROP,
                });
                // Get current latitude and longitude of driver
                _this.parentService.curLocation.subscribe(function (res) {
                    console.log('Res : ', res);
                    _this.address = res;
                    if (_this.address) {
                        console.log('Address : ', _this.address);
                        _this.moveBus(_this.address.curLocation); // move bus marker over map
                    }
                });
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    };
    ViewMapComponent.prototype.startLocationInterval = function (driverId) {
        var _this = this;
        this.interval = setInterval(function () {
            _this.parentService.getCurrentLocation(driverId);
        }, 10000);
    };
    ViewMapComponent.prototype.navigateBack = function () {
        this.navctl.pop();
        clearInterval(this.interval);
    };
    ViewMapComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
    };
    ViewMapComponent.ctorParameters = function () { return [
        { type: _services_parent_service__WEBPACK_IMPORTED_MODULE_5__["ParentService"] },
        { type: _services_driver_service__WEBPACK_IMPORTED_MODULE_4__["DriverService"] },
        { type: _services_route_service__WEBPACK_IMPORTED_MODULE_6__["RouteService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapElement', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ViewMapComponent.prototype, "mapElement", void 0);
    ViewMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-map',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/view-map/view-map.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-map.component.scss */ "./src/app/pages/shared/view-map/view-map.component.scss")).default]
        })
        /**
         * @class - ParentViewMapComponent
         */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_parent_service__WEBPACK_IMPORTED_MODULE_5__["ParentService"],
            _services_driver_service__WEBPACK_IMPORTED_MODULE_4__["DriverService"],
            _services_route_service__WEBPACK_IMPORTED_MODULE_6__["RouteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], ViewMapComponent);
    return ViewMapComponent;
}());



/***/ }),

/***/ "./src/app/pages/shared/view-map/view-map.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/shared/view-map/view-map.module.ts ***!
  \**********************************************************/
/*! exports provided: ViewMapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMapModule", function() { return ViewMapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_map_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-map-routing.module */ "./src/app/pages/shared/view-map/view-map-routing.module.ts");
/* harmony import */ var _view_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-map.component */ "./src/app/pages/shared/view-map/view-map.component.ts");








var ViewMapModule = /** @class */ (function () {
    function ViewMapModule() {
    }
    ViewMapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _view_map_routing_module__WEBPACK_IMPORTED_MODULE_6__["ViewMapRoutingModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _view_map_component__WEBPACK_IMPORTED_MODULE_7__["ViewMapComponent"],
                    },
                ]),
            ],
            declarations: [_view_map_component__WEBPACK_IMPORTED_MODULE_7__["ViewMapComponent"]],
        })
    ], ViewMapModule);
    return ViewMapModule;
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
//# sourceMappingURL=shared-view-map-view-map-module.js.map