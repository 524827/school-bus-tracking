(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-login-driver-driver-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/driver/driver.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/driver/driver.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header text-center>\n  <ion-toolbar color=\"#587FBB\" id=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button id=\"content\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Driver</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"notifications-outline\" class=\"notification\" (click)=\"presentModal($event)\"></ion-icon>\n      <!-- <ion-icon src=\"../../../../assets/images/adminProfile.svg\" class=\"profileImage\">\n      </ion-icon> -->\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <app-sidebar [pages]=\"pages\"></app-sidebar>\n  <app-tab></app-tab>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/driver/notification/notification.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/driver/notification/notification.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header text-center>\n  <ion-toolbar class=\"background\" color=\"#587FBB\" id=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-icon name=\"close\" id=\"closeIcon\" class=\"close\" (click)=\"closeModal()\"></ion-icon>\n    </ion-buttons>\n    <ion-title class=\"title\">Notification</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card>\n    <!--  <ion-card-content>\n      <ion-list *ngFor=\"let notification of notificationData\">\n        <ion-row>\n          <ion-col size=\"9\">\n            <ion-label>{{notification.msgBody}}</ion-label>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-label>{{notification.currentTime}}</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n    </ion-card-content> -->\n  </ion-card>\n</ion-content>");

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

/***/ "./src/app/pages/login/driver/driver-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/login/driver/driver-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DriverRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverRoutingModule", function() { return DriverRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _driver_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./driver.component */ "./src/app/pages/login/driver/driver.component.ts");




var routes = [
    // routes for Tab Menu
    {
        path: '',
        component: _driver_component__WEBPACK_IMPORTED_MODULE_3__["DriverComponent"],
        children: [
            {
                path: 'bus-route',
                loadChildren: '../driver/route/route.module#RouteModule',
            },
            {
                path: 'livemap/:userType/:driverId',
                loadChildren: '../driver/map/map.module#MapModule',
            },
            {
                path: '',
                redirectTo: 'bus-route',
                pathMatch: 'full',
            },
        ],
    },
    // driver routes side menu
    {
        path: '',
        children: [
            {
                path: 'profile/:userType/:userId',
                loadChildren: '../../shared/profile/profile.module#ProfileModule',
            },
            {
                path: 'aboutschool',
                loadChildren: '../../shared/about-school/about-school.module#AboutSchoolModule',
            },
            {
                path: 'busdetails/:userId',
                loadChildren: '../driver/driverbusdetails/driverbusdetails.module#DriverBusDetailsModule',
            },
        ],
    },
];
var DriverRoutingModule = /** @class */ (function () {
    function DriverRoutingModule() {
    }
    DriverRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DriverRoutingModule);
    return DriverRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/login/driver/driver.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/login/driver/driver.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logOutImage {\n  zoom: 1.5;\n  margin-right: 5px;\n}\n\n.profileImage {\n  zoom: 1.5;\n  margin-right: 10px;\n}\n\n#toolbar {\n  --background: #7986cb;\n  color: white;\n}\n\nion-toolbar {\n  background-color: #7d8cd1;\n}\n\n.tabImage {\n  width: 25px;\n  color: black;\n}\n\n.tabbar {\n  width: 100%;\n}\n\n.notification {\n  zoom: 1.5;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hbWRldi9EZXNrdG9wL2dpdCAvd2hlcmUgaXMgbXkgYnVzL3NyYy9hcHAvcGFnZXMvbG9naW4vZHJpdmVyL2RyaXZlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vZHJpdmVyL2RyaXZlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9kcml2ZXIvZHJpdmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ091dEltYWdlIHtcbiAgem9vbTogMS41O1xuICBtYXJnaW4tcmlnaHQ6IDVweFxufVxuXG4ucHJvZmlsZUltYWdlIHtcbiAgem9vbTogMS41O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHhcbn1cblxuI3Rvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICM3OTg2Y2I7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI1LCAxNDAsIDIwOSk7XG59XG5cbi50YWJJbWFnZSB7XG4gIHdpZHRoOiAyNXB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi50YWJiYXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5vdGlmaWNhdGlvbiB7XG4gIHpvb206IDEuNTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHhcbn1cblxuXG5cbi8vdGFiIiwiLmxvZ091dEltYWdlIHtcbiAgem9vbTogMS41O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnByb2ZpbGVJbWFnZSB7XG4gIHpvb206IDEuNTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4jdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzc5ODZjYjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZDhjZDE7XG59XG5cbi50YWJJbWFnZSB7XG4gIHdpZHRoOiAyNXB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi50YWJiYXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5vdGlmaWNhdGlvbiB7XG4gIHpvb206IDEuNTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/login/driver/driver.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/login/driver/driver.component.ts ***!
  \********************************************************/
/*! exports provided: DriverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverComponent", function() { return DriverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_firebase_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/firebase/ngx */ "./node_modules/@ionic-native/firebase/ngx/index.js");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/pages/login/driver/notification/notification.component.ts");







var DriverComponent = /** @class */ (function () {
    function DriverComponent(router, loaderService, modalController, firebase) {
        this.router = router;
        this.loaderService = loaderService;
        this.modalController = modalController;
        this.firebase = firebase;
        this.notification = [];
    }
    DriverComponent.prototype.ngOnInit = function () {
        this.getNotification();
        this.loaderService.loaderDismiss();
        this.userId = this.router.snapshot.queryParamMap.get('driverId');
        this.userType = this.router.snapshot.queryParamMap.get('user');
        console.log(this.userType);
        // this.pages variable contains side menu item
        this.pages = [
            {
                title: 'Profile',
                url: "driver/profile/" + this.userType + "/" + this.userId,
                icon: 'assets/profile/profile.png',
            },
            { title: 'About school', url: 'driver/aboutschool', icon: 'assets/profile/school.png' },
            { title: 'Location', url: '', icon: 'assets/profile/location.png' },
            {
                title: 'Bus Details',
                url: "driver/busdetails/" + this.userId,
                icon: 'assets/profile/busLogo.png',
            },
            { title: 'Logout', url: '', icon: 'assets/profile/logout.png' },
        ];
    };
    // Presenting model
    DriverComponent.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.badge = null;
                        return [4 /*yield*/, this.modalController.create({
                                component: _notification_notification_component__WEBPACK_IMPORTED_MODULE_6__["NotificationComponent"],
                                componentProps: { notificationData: this.notification },
                            })];
                    case 1:
                        modal = _a.sent();
                        modal
                            .onDidDismiss()
                            .then(function () { })
                            .catch();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method call notification is push in application
     */
    DriverComponent.prototype.getNotification = function () {
        var _this = this;
        this.firebase.onNotificationOpen().subscribe(function (data) {
            console.log('notification data', data);
            if (data.wasTapped) {
                _this.notification.push(data);
                // this.nativeStoreage.setItem('notificationData', data.body);
                console.log(_this.notification.length);
                _this.badge = _this.notification.length;
            }
            else {
                _this.notification.push(data);
                console.log(_this.notification.length);
                _this.badge = _this.notification.length;
            }
        });
    };
    DriverComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _ionic_native_firebase_ngx__WEBPACK_IMPORTED_MODULE_5__["Firebase"] }
    ]; };
    DriverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-driver',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./driver.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/driver/driver.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./driver.component.scss */ "./src/app/pages/login/driver/driver.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_native_firebase_ngx__WEBPACK_IMPORTED_MODULE_5__["Firebase"]])
    ], DriverComponent);
    return DriverComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/driver/driver.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/driver/driver.module.ts ***!
  \*****************************************************/
/*! exports provided: DriverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverModule", function() { return DriverModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _driver_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./driver.component */ "./src/app/pages/login/driver/driver.component.ts");
/* harmony import */ var _shared_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.module */ "./src/app/pages/shared/sidebar/sidebar.module.ts");
/* harmony import */ var _driver_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./driver-routing.module */ "./src/app/pages/login/driver/driver-routing.module.ts");
/* harmony import */ var _shared_tab_tab_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/tab/tab.module */ "./src/app/pages/shared/tab/tab.module.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/pages/login/driver/notification/notification.component.ts");









var DriverModule = /** @class */ (function () {
    function DriverModule() {
    }
    DriverModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_driver_component__WEBPACK_IMPORTED_MODULE_4__["DriverComponent"], _notification_notification_component__WEBPACK_IMPORTED_MODULE_8__["NotificationComponent"]],
            entryComponents: [_notification_notification_component__WEBPACK_IMPORTED_MODULE_8__["NotificationComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _driver_routing_module__WEBPACK_IMPORTED_MODULE_6__["DriverRoutingModule"], _shared_tab_tab_module__WEBPACK_IMPORTED_MODULE_7__["TabModule"], _shared_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_5__["SideBarModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
            providers: [],
        })
    ], DriverModule);
    return DriverModule;
}());



/***/ }),

/***/ "./src/app/pages/login/driver/notification/notification.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/login/driver/notification/notification.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".close {\n  zoom: 2;\n}\n\n#toolbar {\n  --background: #7986cb;\n  color: white;\n}\n\n.done {\n  float: right;\n  zoom: 1.5;\n  margin-right: 3px;\n}\n\nion-toolbar {\n  background-color: #7d8cd1;\n}\n\n.title {\n  margin-top: 5px;\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hbWRldi9EZXNrdG9wL2dpdCAvd2hlcmUgaXMgbXkgYnVzL3NyYy9hcHAvcGFnZXMvbG9naW4vZHJpdmVyL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2RyaXZlci9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsT0FBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2RyaXZlci9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsb3NlIHtcbiAgem9vbTogMi4wO1xufVxuXG4jdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzc5ODZjYjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZG9uZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgem9vbTogMS41O1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI1LCAxNDAsIDIwOSk7XG59XG5cbi50aXRsZSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAyNXB4O1xufSIsIi5jbG9zZSB7XG4gIHpvb206IDI7XG59XG5cbiN0b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNzk4NmNiO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5kb25lIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB6b29tOiAxLjU7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZDhjZDE7XG59XG5cbi50aXRsZSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAyNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/login/driver/notification/notification.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/login/driver/notification/notification.component.ts ***!
  \***************************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var NotificationComponent = /** @class */ (function () {
    /**
     * @description - The constructor has the instance of LocalNotification
     * @param localnotifications - Instance of LocalNotification
     */
    function NotificationComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    NotificationComponent.prototype.ngOnInit = function () {
        console.log(this.notificationData);
    };
    /**
     * closeModal()
     * This function close the modal controller
     */
    NotificationComponent.prototype.closeModal = function () {
        this.modalCtrl.dismiss();
    };
    NotificationComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notification.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/driver/notification/notification.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notification.component.scss */ "./src/app/pages/login/driver/notification/notification.component.scss")).default]
        })
        /**
         * @class - NotificationComponent
         */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], NotificationComponent);
    return NotificationComponent;
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
//# sourceMappingURL=app-pages-login-driver-driver-module.js.map