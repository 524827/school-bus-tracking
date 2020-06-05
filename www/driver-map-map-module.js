(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["driver-map-map-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/driver/map/map.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/driver/map/map.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card-content padding>\n  <div #mapElement id=\"map\" class=\"map\"></div>\n</ion-card-content>");

/***/ }),

/***/ "./src/app/pages/login/driver/map/map.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/login/driver/map/map.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".map {\n  width: 100%;\n  height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hbWRldi9EZXNrdG9wL2dpdCAvd2hlcmUgaXMgbXkgYnVzL3NyYy9hcHAvcGFnZXMvbG9naW4vZHJpdmVyL21hcC9tYXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2RyaXZlci9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2RyaXZlci9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xufSIsIi5tYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/login/driver/map/map.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/login/driver/map/map.component.ts ***!
  \*********************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_driver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/driver.service */ "./src/app/services/driver.service.ts");
/* harmony import */ var _services_route_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/route.service */ "./src/app/services/route.service.ts");





var MapComponent = /** @class */ (function () {
    function MapComponent(location, driverService, routeService, route) {
        var _this = this;
        this.location = location;
        this.driverService = driverService;
        this.routeService = routeService;
        this.route = route;
        this.wayPoints = [];
        this.route.params.subscribe(function (data) {
            _this.driverId = data.driverId;
            console.log('Driver Id : ', _this.driverId);
        });
    }
    MapComponent.prototype.ngOnInit = function () {
        console.log(this.driverId);
        this.getRouteData();
    };
    // Move bus icon over map.
    MapComponent.prototype.moveBus = function (place) {
        console.log('plcae : ', place);
        // set cuttent latitude and longitude to marker
        this.marker.setPosition(new google.maps.LatLng(place.latitude, place.longitude));
        //   this.map.panTo(new google.maps.LatLng({ lat: place.latitude, lng: place.longitude }));
    };
    MapComponent.prototype.getRouteData = function () {
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
    MapComponent.prototype.initializeRoutesOnMap = function (serverRouteData) {
        var _this = this;
        console.log('Working....');
        var directionsService = new google.maps.DirectionsService();
        var directionsDisplay = new google.maps.DirectionsRenderer();
        this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 6,
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
                _this.location.curLocation.subscribe(function (res) {
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
    MapComponent.ctorParameters = function () { return [
        { type: _services_driver_service__WEBPACK_IMPORTED_MODULE_3__["DriverService"] },
        { type: _services_driver_service__WEBPACK_IMPORTED_MODULE_3__["DriverService"] },
        { type: _services_route_service__WEBPACK_IMPORTED_MODULE_4__["RouteService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapElement', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MapComponent.prototype, "mapElement", void 0);
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/driver/map/map.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./map.component.scss */ "./src/app/pages/login/driver/map/map.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_driver_service__WEBPACK_IMPORTED_MODULE_3__["DriverService"],
            _services_driver_service__WEBPACK_IMPORTED_MODULE_3__["DriverService"],
            _services_route_service__WEBPACK_IMPORTED_MODULE_4__["RouteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/driver/map/map.module.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/login/driver/map/map.module.ts ***!
  \******************************************************/
/*! exports provided: MapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModule", function() { return MapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map.component */ "./src/app/pages/login/driver/map/map.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var MapModule = /** @class */ (function () {
    function MapModule() {
    }
    MapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"],
                    },
                ]),
            ],
        })
    ], MapModule);
    return MapModule;
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
//# sourceMappingURL=driver-map-map-module.js.map