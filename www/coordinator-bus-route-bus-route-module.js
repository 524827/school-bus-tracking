(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coordinator-bus-route-bus-route-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/coordinator/bus-route/bus-route.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/coordinator/bus-route/bus-route.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\n  <ion-card-content id=\"map\"></ion-card-content>\n</ion-card>");

/***/ }),

/***/ "./src/app/pages/login/coordinator/bus-route/bus-route.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/login/coordinator/bus-route/bus-route.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map {\n  width: 100%;\n  height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hbWRldi9EZXNrdG9wL2dpdCAvd2hlcmUgaXMgbXkgYnVzL3NyYy9hcHAvcGFnZXMvbG9naW4vY29vcmRpbmF0b3IvYnVzLXJvdXRlL2J1cy1yb3V0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vY29vcmRpbmF0b3IvYnVzLXJvdXRlL2J1cy1yb3V0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9jb29yZGluYXRvci9idXMtcm91dGUvYnVzLXJvdXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xufSIsIiNtYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/login/coordinator/bus-route/bus-route.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/login/coordinator/bus-route/bus-route.component.ts ***!
  \**************************************************************************/
/*! exports provided: BusRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusRouteComponent", function() { return BusRouteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _services_vehicle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/vehicle.service */ "./src/app/services/vehicle.service.ts");
/* harmony import */ var _services_driver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/driver.service */ "./src/app/services/driver.service.ts");
/* harmony import */ var _services_livemap_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/livemap.service */ "./src/app/services/livemap.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");








var BusRouteComponent = /** @class */ (function () {
    /**
     * @description - This constructor initializes instances ofgeolocation, VehicleService, DriverService, LivemapService.
     * @constructor
     * @param {Geolocation} geolocation - Instance of Geolocation.
     * @param {VehicleService} vehicleService - Instance of VehicleService.
     * @param {DriverService} driverService - Instance of DriverService.
     * @param {LivemapService} liveMapService - Instance of LivemapService.
     */
    function BusRouteComponent(geolocation, vehicleService, driverService, liveMapService, storageService) {
        this.geolocation = geolocation;
        this.vehicleService = vehicleService;
        this.driverService = driverService;
        this.liveMapService = liveMapService;
        this.storageService = storageService;
        this.markers = [];
        // Assigning vehicle images folder link of server to vehicleImages member.
        this.vehicleImages = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].vehicleImages;
        // Assigning driver images folder link of server to driverImages member.
        this.driverImages = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].driverImages;
        // Calling getCurrentLocation method of livemapService using liveMapService instance.
        this.liveMapService.getCurrentLocation();
    }
    /**
     * @description - This function calls vehicle and driver services to fetch data and assiging drivers current location.
     * @function - getAllVehicleFromServer
     */
    BusRouteComponent.prototype.getAllVehicleFromServer = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var vehicleDetails;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.vehicleService.getServerVehicleDetails('getAllVehicleDetails')];
                    case 1:
                        vehicleDetails = _a.sent();
                        // Subscribing the vehicleDetails to get the data.
                        vehicleDetails.subscribe(function (data) {
                            // Assigning response data to vehicleData member.
                            _this.vehicleData = data['data'];
                            // Accessing each vehicle details from vehicleData array using map function.
                            _this.vehicleData.map(function (item, index) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var driverDetails;
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.driverService.getServerDriverDetailsById(item.driver_details._id)];
                                        case 1:
                                            driverDetails = _a.sent();
                                            // Subscribing the driverDetails to get the data.
                                            driverDetails.subscribe(function (res) {
                                                // Assigning response data to value.
                                                var value = res['data'];
                                                // Assigning driver details.
                                                _this.vehicleData[index].driver_details = value[0];
                                                // Accessing each driver log details from driverLogDetails array using map function.
                                                _this.driverLogDetails.map(function (items, indexes) {
                                                    // Comparing  driver id of vehicle data with driver id of driver log.
                                                    if (item.driver_details._id === items.driver_id) {
                                                        // Assigning driver's current location when driver id match.
                                                        item['loc'] =
                                                            items.driverlog[items.driverlog.length - 1].current_location[items.driverlog[items.driverlog.length - 1].current_location.length - 1].curLocation;
                                                        // Assigning location with proper named object key's.
                                                        item['loc'] = { lat: item['loc'].latitude, lng: item['loc'].longitude };
                                                        // Calling createMapMarker method by passing location and vehicleData as parameter.
                                                        _this.createMapMarker(item.loc, _this.vehicleData[index]);
                                                    }
                                                });
                                            });
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        });
                        // Calling initMap method by passing latitude and longitude as parameter.
                        this.initMap(19.961722, 73.807921);
                        return [2 /*return*/];
                }
            });
        });
    };
    /*  locateAllBuses() {
      this.getCurrentLocation();
    } */
    /**
     * @description - This function initialize the map with provided latitude and longitude.
     *  Also this function creates a marker and push it into the markers array.
     * @function - initMap
     * @param {number} latitude - Stores latitude.
     * @param {number} longitude - Stores longitude.
     */
    BusRouteComponent.prototype.initMap = function (latitude, longitude) {
        // Creating object of latitude and longitude.
        var point = { lat: latitude, lng: longitude };
        // Creating instance of DirectionsService.
        var directionsService = new google.maps.DirectionsService();
        // Creating instance of DirectionsRenderer.
        var directionsDisplay = new google.maps.DirectionsRenderer();
        // Initializing instance of map.
        this.map = new google.maps.Map(
        // Passing HTML element to show map.
        document.getElementById('map'), 
        // Setting other options.
        {
            // Setting zoom level of map.
            zoom: 10,
            // Setting center point of map.
            center: point,
        });
        // Setting map using directionDisplay instance.
        directionsDisplay.setMap(this.map);
    };
    /**
     * @description - This function creates a marker for map.
     * @function - createMapMarker
     * @param {object} place - It stores the object of latitude and longitude to place the marker on map.
     * @param {any} vehicleData - Stores the vehicle details to show when user click on marker.
     * @returns - void.
     */
    BusRouteComponent.prototype.createMapMarker = function (place, vehicleData) {
        var _this = this;
        // Assigning bus icon url to busImage.
        var busImage = {
            // url: this.vehicleImages + '/bus2.png',
            url: '../../../../../assets/images/bus2.png',
        };
        // Creating marker.
        var marker = new google.maps.Marker({
            // Assigning map.
            map: this.map,
            // Setting marker position on map.
            position: place,
            // Setting marker icon.
            icon: busImage,
            // Setting animation on marker.
            animation: google.maps.Animation.DROP,
            // Setting title of marker. Title of the marker is vehicle number.
            title: vehicleData.vehicle_details.vehicle_number,
        });
        // Pushing created marker inti markers array.
        this.markers.push(marker);
        // Setting info window of the marker.
        var infoWindow = new google.maps.InfoWindow({
            // Setting content of info window.
            content: '<ion-card><ion-card-header color="primary" text-center>' +
                vehicleData.vehicle_details.vehicle_number +
                '</ion-card-header><ion-card-subtitle text-center color="tertiary">Driver : ' +
                vehicleData.driver_details.driver_name +
                '</ion-card-subtitle><ion-card-content>' +
                ' <img src ="' +
                this.driverImages +
                '/' +
                vehicleData.driver_details.driver_documents.photo +
                '"' +
                +'" class="mapInfoWindowImage" style="width:25px; height:25px;border-radius:50%;" />' +
                '<hr>' +
                '</ion-card-content></ion-card>',
        });
        // Adding listener of click event for marker.
        marker.addListener('click', function () {
            infoWindow.close(_this.map, _this.markers);
            setTimeout(function () {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }, 1000);
            setTimeout(function () {
                marker.setAnimation(google.maps.Animation.none);
            }, 6000);
            infoWindow.open(_this.map, marker);
            setTimeout(function () {
                infoWindow.close(this.map);
            }, 7000);
        });
    };
    /**
     * @description - This function sets the geo coordinates using geolocation plugin.
     * @function - getCurrentLocation
     */
    BusRouteComponent.prototype.getCurrentLocation = function () {
        var _this = this;
        this.geolocation
            .getCurrentPosition()
            .then(function (resp) {
            // Calling initMap method by passing latitude and longitude as parameter.
            _this.initMap(resp.coords.latitude, resp.coords.longitude);
        })
            .catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    BusRouteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.interval = window.setInterval(function () {
            // Calling getCurrentLocation method of liveMapService to get current location of driver.
            _this.liveMapService.getCurrentLocation();
        }, 
        // Interval time of 2 seconds
        5000);
        // Subscribing subject to get updated location data.
        this.liveMapService.curLocation.subscribe(function (response) {
            // Assigning driver log data coming from server to driverLogDetails memebr.
            _this.driverLogDetails = response;
            // Checking for driverLogDetails.
            if (_this.driverLogDetails) {
                // Visting each marker from markers array using array map function.
                _this.markers.map(function (markerItem, markerIndex) {
                    // Visting each driver log details from driverLogDetails array using array map function.
                    _this.driverLogDetails.map(function (logItem, logIndex) {
                        // Visting each vehicle log details from vehicleData array using array map function.
                        _this.vehicleData.map(function (vehicleItem, vehicleIndex) {
                            // Compairing driver id of vehicle data with driver id of driver log data.
                            if (vehicleItem.driver_details._id === logItem.driver_id) {
                                // Compairing vehicle number of vehicle data with title of marker.
                                if (vehicleItem.vehicle_details.vehicle_number === markerItem.title) {
                                    // Assigning driver's current location to updatedLocation.
                                    var updatedLocation = logItem.driverlog[logItem.driverlog.length - 1].current_location[logItem.driverlog[logItem.driverlog.length - 1].current_location.length - 1].curLocation;
                                    // Assigning location with proper named object key's.
                                    updatedLocation = {
                                        lat: updatedLocation.latitude,
                                        lng: updatedLocation.longitude,
                                    };
                                    // Setting the new updated position/location of marker.
                                    _this.markers[markerIndex].setPosition(new google.maps.LatLng(updatedLocation.lat, updatedLocation.lng));
                                }
                            }
                        });
                    });
                });
            }
        });
        //   this.locateAllBuses();
        // Calling getAllVehicleFromServer method.
        this.getAllVehicleFromServer();
        this.storageService.setIntervalValue(this.interval);
    };
    BusRouteComponent.prototype.ngOnDestroy = function () {
        if (this.interval) {
            window.clearInterval(this.interval);
        }
    };
    BusRouteComponent.ctorParameters = function () { return [
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"] },
        { type: _services_vehicle_service__WEBPACK_IMPORTED_MODULE_3__["VehicleService"] },
        { type: _services_driver_service__WEBPACK_IMPORTED_MODULE_4__["DriverService"] },
        { type: _services_livemap_service__WEBPACK_IMPORTED_MODULE_5__["LivemapService"] },
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] }
    ]; };
    BusRouteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bus-route',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bus-route.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/coordinator/bus-route/bus-route.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bus-route.component.scss */ "./src/app/pages/login/coordinator/bus-route/bus-route.component.scss")).default]
        })
        /**
         * @description - This class initializes multiple buses location on map and sets the new position of buses icon.
         * @class - BusRouteComponent
         */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"],
            _services_vehicle_service__WEBPACK_IMPORTED_MODULE_3__["VehicleService"],
            _services_driver_service__WEBPACK_IMPORTED_MODULE_4__["DriverService"],
            _services_livemap_service__WEBPACK_IMPORTED_MODULE_5__["LivemapService"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]])
    ], BusRouteComponent);
    return BusRouteComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/coordinator/bus-route/bus-route.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/login/coordinator/bus-route/bus-route.module.ts ***!
  \***********************************************************************/
/*! exports provided: BusRouteComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusRouteComponentModule", function() { return BusRouteComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bus_route_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bus-route.component */ "./src/app/pages/login/coordinator/bus-route/bus-route.component.ts");







var BusRouteComponentModule = /** @class */ (function () {
    function BusRouteComponentModule() {
    }
    BusRouteComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        // Route for buses-route compomnent.
                        path: '',
                        component: _bus_route_component__WEBPACK_IMPORTED_MODULE_6__["BusRouteComponent"],
                    },
                ]),
            ],
            declarations: [_bus_route_component__WEBPACK_IMPORTED_MODULE_6__["BusRouteComponent"]],
        })
    ], BusRouteComponentModule);
    return BusRouteComponentModule;
}());



/***/ }),

/***/ "./src/app/services/livemap.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/livemap.service.ts ***!
  \*********************************************/
/*! exports provided: LivemapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivemapService", function() { return LivemapService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var LivemapService = /** @class */ (function () {
    function LivemapService(nativeGeocoder, http) {
        this.nativeGeocoder = nativeGeocoder;
        this.http = http;
        this.curLocation = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.response = {};
    }
    LivemapService.prototype.getCurrentLatLong = function (address) {
        var _this = this;
        this.nativeGeocoder
            .forwardGeocode(address)
            .then(function (coordinates) {
            _this.coordinates = {
                latitude: parseFloat(coordinates[0].latitude),
                longitude: parseFloat(coordinates[0].longitude),
            };
        })
            .catch(function (error) { return console.log(error); });
        return this.coordinates;
    };
    LivemapService.prototype.getCurrentLocation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var headers;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
                headers.append('Content-type', 'application/json');
                this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].busCoordinatorUrl + '/currentLocation').subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log(' : ', res);
                                this.response = res['data'];
                                console.log(this.response);
                                return [4 /*yield*/, this.curLocation.next(this.response)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    LivemapService.ctorParameters = function () { return [
        { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeGeocoder"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    LivemapService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeGeocoder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], LivemapService);
    return LivemapService;
}());



/***/ })

}]);
//# sourceMappingURL=coordinator-bus-route-bus-route-module.js.map