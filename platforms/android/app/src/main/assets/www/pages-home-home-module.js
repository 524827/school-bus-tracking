(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar id=\"toolbar\" color=\"#7986cb\">\n    <ion-searchbar showCancelButton=\"focus\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"card-alignment\">\n  <ion-refresher (ionRefresh)=\"doRefresh($event)\" slot=\"fixed\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"crescent\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-card [routerLink]=\"['/login', school._id]\" *ngFor=\"let school of schooldetails\">\n    <img [src]=\"(schoolImages)+'/'+(school.school_photos) | safe:'url'\"/>\n    <!-- <img src=\"<../../../../../assets/images/{{school.school_photos}} \" /> -->\n    <div class=\"card-title\">{{ school.school_name }}</div>\n    <div class=\"card-subtitle\">{{ school.school_address }}</div>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var src_app_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/safe.pipe */ "./src/app/pipes/safe.pipe.ts");








var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"],
                    },
                ]),
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"], src_app_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_7__["SafePipe"]],
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  background-color: #7986cb;\n}\n\nion-searchbar {\n  width: 90%;\n  margin: 5% 5%;\n  font-family: \"Times New Roman\";\n}\n\nimg {\n  width: 100%;\n  display: block;\n  height: 400px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nion-card {\n  position: relative;\n  text-align: center;\n}\n\n.card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n\n.card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hbWRldi9EZXNrdG9wL2dpdCAvd2hlcmUgaXMgbXkgYnVzL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDQ0Y7O0FERUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDQ0E7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk4NmNiO1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiA1JSA1JTtcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nO1xufVxuXG5pbWcge1xud2lkdGg6IDEwMCU7XG5kaXNwbGF5OmJsb2NrO1xuaGVpZ2h0OiA0MDBweDtcbm9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5pb24tY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNiU7XG4gIGZvbnQtc2l6ZTogMi4wZW07XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjBlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUyJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xufSIsImlvbi10b29sYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc5ODZjYjtcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogNSUgNSU7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogNDAwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5pb24tY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNiU7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY2FyZC1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTIlO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_school_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/school.service */ "./src/app/services/school.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_network_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/network.service */ "./src/app/services/network.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");








var HomePage = /** @class */ (function () {
    /**
     * @description - This constructor calls getSchoolFromServer() method.
     * @param {SchoolService} schoolService - This param is the instance of school service.
     * @param {AlertService} alertService - This param is the instance of alert service.
     * @param {NetworkService} networkService - This param is the instance of network service.
     * @param {Network} network - This param is the instance of network.
     * @param {ToastController} toastController - This param is the instance of ToastController.
     */
    function HomePage(schoolService, networkService, network, sanitizer, toastController) {
        var _this = this;
        this.schoolService = schoolService;
        this.networkService = networkService;
        this.network = network;
        this.sanitizer = sanitizer;
        this.toastController = toastController;
        // Checking for internet connection.
        this.networkService.checkIsNetworkDisconnect().subscribe(function () {
            console.log('network was disconnected :-(');
            // this.alertService.loaderDismiss();
            alert('No internet connection. Try to connect internet or wifi.');
        });
        this.networkService.checkIsNetworkConnect().subscribe(function () {
            console.log('network connected!');
            console.log(_this.network.type);
            // We just got a connection but we need to wait briefly
            // before we determine the connection type. Might need to wait.
            // prior to doing any api requests as well.
            // Calling getSchoolFromServer() method in constructor to set values of schoolData member when the component gets load.
            _this.presentToast();
            // this.presentToastWithOptions();
            _this.getSchoolFromServer();
            // Checking network type.
            setTimeout(function () {
                if (_this.network.type === 'wifi') {
                    console.log('we got a wifi connection, woohoo!');
                }
            }, 3000);
        });
        // Assigning school images folder link of server to schoolImages member.
        this.schoolImages = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].schoolImages;
        // Calling getSchoolFromServer() method in constructor to set values of schoolData member when the component gets load.
        this.getSchoolFromServer();
    }
    /**
     * @description - This function presents toast.
     * @function - presentToast
     * @returns -
     */
    HomePage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Internet Connected.',
                            showCloseButton: true,
                            duration: 5000,
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    /* async presentToastWithOptions() {
      const toast = await this.toastController.create({
        message: 'Click to Close',
  
        position: 'top',
        closeButtonText: 'Done',
      });
      toast.present();
    }
   */
    /**
     * @description - This function get the school data from services and assign it to schoolData member.
     * @function - getSchoolFromServer()
     * @returns -
     */
    HomePage.prototype.getSchoolFromServer = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var schoolDetails;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.schoolService.getServerSchoolDetails()];
                    case 1:
                        schoolDetails = _a.sent();
                        // Set the subscribed data to schoolData member.
                        schoolDetails.subscribe(function (item) {
                            console.log(item);
                            var schoolDetail = item['data'];
                            _this.schooldetails = schoolDetail;
                            console.log(_this.schooldetails.push);
                            // this.schoolData.push(schoolDetails);
                            // Dismiss the loader.
                            //  this.alertService.loaderDismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @description - This function get the string provided by user, match it with school names and set the values to schoolData member.
     * @function - getSchool()
     * @param {string} value - Stores string provided by user.
     * @returns - void
     */
    HomePage.prototype.getSchool = function (value) {
        var dummyArrayOfSchool;
        // Check if value is empty or it is unset.
        if (!value) {
            // Calling getSchoolFromServer() method to set values of schoolData member when the value is not set.
            this.getSchoolFromServer();
        }
        else {
            // Assign schoolData to dummyArrayOfSchool.
            dummyArrayOfSchool = this.schoolData;
            // Assign empty array to scoolData member to make it empty.
            this.schoolData = [];
            // Assign filtered search result to schoolData member.
            this.schooldetails = dummyArrayOfSchool.filter(function (item) {
                return item.school_name
                    .toString()
                    .toLowerCase()
                    .indexOf(value.toString().toLowerCase()) > -1;
            });
        }
    };
    HomePage.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.getSchoolFromServer();
            event.target.complete();
        }, 2000);
    };
    HomePage.prototype.ngOnInit = function () { };
    HomePage.ctorParameters = function () { return [
        { type: _services_school_service__WEBPACK_IMPORTED_MODULE_2__["SchoolService"] },
        { type: _services_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"] },
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")).default]
        })
        /**
           *@description - This is class handles the activities of home page. This class get and provides the school list.
          @class - HomePage
           */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_school_service__WEBPACK_IMPORTED_MODULE_2__["SchoolService"],
            _services_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/pipes/safe.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/safe.pipe.ts ***!
  \************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (value, type) {
        switch (type) {
            case 'html':
                return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                throw new Error("Invalid safe type specified: " + type);
        }
    };
    SafePipe.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'safe',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/app/services/network.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/network.service.ts ***!
  \*********************************************/
/*! exports provided: NetworkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkService", function() { return NetworkService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");



var NetworkService = /** @class */ (function () {
    /**
     * @description - This constructor creates the instance of Network.
     * @constructor
     * @param {Network} network - Instance of the Network.
     */
    function NetworkService(network) {
        this.network = network;
    }
    /**
     * @description - this function checks whether the internet connection is connected.
     * @function - checkIsNetworkConnect
     * @returns - Observable<object>
     */
    NetworkService.prototype.checkIsNetworkConnect = function () {
        // watch network for a connection
        return (this.networkConnectSubscription = this.network.onConnect());
    };
    /**
     * @description - this function unsubscribe the networkConnectSubscription.
     * @function - connectNetworkUnsubscribe
     * @returns - void
     */
    NetworkService.prototype.connectNetworkUnsubscribe = function () {
        // stop connect watch
        this.networkConnectSubscription.unsubscribe();
    };
    /**
     * @description - this function checks whether the internet connection is disconnected.
     * @function - checkIsNetworkDisconnect
     * @returns - Observable<object>
     */
    NetworkService.prototype.checkIsNetworkDisconnect = function () {
        // watch network for a disconnection
        return (this.networkDisconnectSubscription = this.network.onDisconnect());
    };
    /**
     * @description - this function unsubscribe the networkDisconnectSubscription.
     * @function - disconnectNetworkUnsubscribe
     * @returns - void
     */
    NetworkService.prototype.disconnectNetworkUnsubscribe = function () {
        // stop disconnect watch
        this.networkDisconnectSubscription.unsubscribe();
    };
    NetworkService.ctorParameters = function () { return [
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__["Network"] }
    ]; };
    NetworkService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
        /**
         * @description - This class provides functionality to check network connection is active or inactive of the device.
         * @class - NetworkService
         */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__["Network"]])
    ], NetworkService);
    return NetworkService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map