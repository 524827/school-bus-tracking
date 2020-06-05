(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-login-parent-parent-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/parent/notification/notification.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/parent/notification/notification.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header text-center>\n  <ion-toolbar class=\"background\" color=\"#587FBB\" id=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-icon name=\"close\" id=\"closeIcon\" class=\"close\" (click)=\"closeModal()\"></ion-icon>\n    </ion-buttons>\n    <ion-title class=\"title\">Notification</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <ion-list *ngFor=\"let notification of notificationData\">\n        <ion-row>\n          <ion-col size=\"9\">\n            <ion-label>{{notification.msgBody}}</ion-label>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-label>{{notification.currentTime}}</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/parent/parent.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/parent/parent.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header text-center>\n  <ion-toolbar class=\"background\" color=\"#587FBB\" id=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button id=\"content\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Parent</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-badge class=\"badgenotify\" color=\"danger\">{{badge}}</ion-badge>\n      <ion-icon name=\"notifications-outline\" class=\"notification\" (click)=\"presentModal($event)\">\n      </ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!-- <ion-header text-center>\n  <ion-toolbar color=\"#587FBB\" id=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button id=\"content\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Parent</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"notifications-outline\" class=\"notification\" (click)=\"presentModal($event)\">\n        <ion-badge class=\"badgenotify\" color=\"danger\">{{badge}}</ion-badge>\n      </ion-icon>\n      <ion-icon src=\"../../../../assets/images/adminProfile.svg\" class=\"profileImage\">\n      </ion-icon> -->\n<!--  </ion-buttons>\n  </ion-toolbar>\n</ion-header> -->\n<app-sidebar [pages]=\"pages\"></app-sidebar>\n<ion-content *ngFor=\"let student of studentData\">\n\n  <ion-card>\n    <ion-card-content>\n      <ion-row>\n        <ion-col size=\"5\">\n          <img class=\"studentImage\" src=\"{{studentImages}}/{{student.student_photo}}\" onError=\"this.src='../../../../assets/default/studentMale.png';\" *ngIf=\"student.student_gender === 'Male'\" />\n          <img class=\"studentImage\" src=\"{{studentImages}}/{{student.student_photo}}\" onError=\"this.src='../../../../assets/default/studentFemale.png';\" *ngIf=\"student.student_gender === 'Female'\" />\n        </ion-col>\n          <ion-col size=\"7\">\n            <div class=\"details\">\n              <ion-row>\n                <ion-col size=\"5\">\n                  <ion-label class=\"headings\">Name:</ion-label>\n                </ion-col>\n                <ion-col size=\"7\">\n                  <ion-label class=\"fontStyle\">{{student.student_name}}</ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"5\">\n                  <ion-label class=\"headings\">Std:</ion-label>\n                </ion-col>\n                <ion-col size=\"7\">\n                  <ion-label class=\"fontStyle\">{{student.student_class}}</ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"5\">\n                  <ion-label class=\"headings\">Div:</ion-label>\n                </ion-col>\n                <ion-col size=\"7\">\n                  <ion-label class=\"fontStyle\">{{student.student_class_division}}</ion-label>\n                </ion-col>\n              </ion-row>\n            </div>\n          </ion-col>\n      </ion-row>\n      <ion-row class=\"divider\"></ion-row>\n\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-button color=\"dark\" fill=\"clear\" (click)=\"goToRoute()\" class=\"optionButtons\">\n            <img class=\"icon1\" src=\"../../../assets/parent/routeicon.jpg\"/>View Routes\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-button color=\"dark\" fill=\"clear\" (click)=\"goToLiveMap()\" class=\"optionButtons\">\n            <img class=\"icon2\" src=\"../../../assets/parent/googlemapicon.png\"/>View Map\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-button color=\"dark\" fill=\"clear\" (click)=\"goToBusDetails()\" class=\"optionButtons\" s>\n            <img class=\"icon1\" src=\"../../../assets/profile/busLogo.png\"/>Bus Details\n          </ion-button>\n        </ion-col>\n        <!-- <ion-col size=\"4\">\n          <ion-button color=\"dark\" fill=\"clear\" (click)=\"goToLiveMap()\" class=\"optionButtons\">\n            <ion-icon name=\"bus\" class=\"busIcon\"></ion-icon>Bus Details\n          </ion-button>\n        </ion-col> -->\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/login/parent/notification/notification.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/login/parent/notification/notification.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".close {\n  zoom: 2;\n}\n\n#toolbar {\n  --background: #7986cb;\n  color: white;\n}\n\n.done {\n  float: right;\n  zoom: 1.5;\n  margin-right: 3px;\n}\n\nion-toolbar {\n  background-color: #7d8cd1;\n}\n\n.title {\n  margin-top: 5px;\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hbWRldi9EZXNrdG9wL2dpdCAvd2hlcmUgaXMgbXkgYnVzL3NyYy9hcHAvcGFnZXMvbG9naW4vcGFyZW50L25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL3BhcmVudC9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsT0FBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL3BhcmVudC9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsb3NlIHtcbiAgem9vbTogMi4wO1xufVxuXG4jdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzc5ODZjYjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZG9uZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgem9vbTogMS41O1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI1LCAxNDAsIDIwOSk7XG59XG5cbi50aXRsZSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAyNXB4O1xufSIsIi5jbG9zZSB7XG4gIHpvb206IDI7XG59XG5cbiN0b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNzk4NmNiO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5kb25lIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB6b29tOiAxLjU7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZDhjZDE7XG59XG5cbi50aXRsZSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAyNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/login/parent/notification/notification.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/login/parent/notification/notification.component.ts ***!
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
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notification.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/parent/notification/notification.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notification.component.scss */ "./src/app/pages/login/parent/notification/notification.component.scss")).default]
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

/***/ "./src/app/pages/login/parent/parent-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/login/parent/parent-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ParentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentRoutingModule", function() { return ParentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _parent_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parent.component */ "./src/app/pages/login/parent/parent.component.ts");




var routes = [
    {
        path: '',
        component: _parent_component__WEBPACK_IMPORTED_MODULE_3__["ParentComponent"],
    },
    {
        path: '',
        children: [
            {
                path: 'profile/:userType/:userId',
                loadChildren: '../../shared/profile/profile.module#ProfileModule',
            },
            {
                path: 'student-details/:parentId',
                loadChildren: '../parent/student-details/student-details.module#StudentDetailsModule',
            },
            {
                path: 'bus-details/:userType/:vehicleId',
                loadChildren: '../../shared/bus-details/bus-details.module#BusDetailsModule',
            },
            {
                path: 'parent-view-map/:userType/:driverId',
                loadChildren: '../../shared/view-map/view-map.module#ViewMapModule',
            },
            {
                path: 'single-bus-routes',
                loadChildren: '../../shared/single-bus-routes/single-bus-routes.module#SingleBusRoutesModule',
            },
        ],
    },
];
var ParentRoutingModule = /** @class */ (function () {
    function ParentRoutingModule() {
    }
    ParentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ParentRoutingModule);
    return ParentRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/login/parent/parent.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/login/parent/parent.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  background-color: #7d8cd1;\n}\n\n#toolbar {\n  --background: #7986cb;\n  color: white;\n}\n\n.notify {\n  float: right;\n  width: 35px;\n  height: 35px;\n  color: #ffffff;\n  position: absolute;\n}\n\n.badgenotify {\n  z-index: 1;\n  position: relative;\n  top: -6px;\n  right: -27px;\n  font-size: 8px;\n}\n\nion-menu-button {\n  float: left;\n  color: #ffffff;\n}\n\n.notification {\n  zoom: 1.7;\n  margin-right: 5px;\n}\n\n.sidemenu {\n  float: left;\n  width: 35px;\n  height: 35px;\n  color: #ffffff;\n  margin-left: 2%;\n}\n\n.headings {\n  color: #7d8cd1;\n  font-family: \"Roboto\", sans-serif;\n}\n\nion-label {\n  font-family: \"Roboto\", sans-serif;\n}\n\nion-card {\n  margin-top: 50px;\n}\n\nh3 {\n  font-size: 135%;\n  font-weight: bold;\n  font-family: \"Roboto\", sans-serif;\n}\n\nion-button {\n  width: 100%;\n  margin-top: 5%;\n}\n\n.divider {\n  border: 0.5px solid;\n  width: 100%;\n  margin-right: 10%;\n}\n\n.icon1,\n.icon2 {\n  height: 3vh;\n  width: 4vw;\n}\n\n.studentImage {\n  width: 400px;\n  height: 100px;\n}\n\n.optionButtons {\n  font-size: 12px;\n}\n\n.busIcon {\n  size: 75px;\n}\n\n.fontStyle {\n  font-size: 12px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hbWRldi9EZXNrdG9wL2dpdCAvd2hlcmUgaXMgbXkgYnVzL3NyYy9hcHAvcGFnZXMvbG9naW4vcGFyZW50L3BhcmVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vcGFyZW50L3BhcmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7O0FER0E7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFFQSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDREY7O0FESUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQ0RGOztBRElBO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0FDREY7O0FESUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0RGOztBRElBO0VBQ0UsY0FBQTtFQUNBLGlDQUFBO0FDREY7O0FESUE7RUFDRSxpQ0FBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0FDREY7O0FESUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQ0RGOztBRElBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNERjs7QURJQTs7RUFFRSxXQUFBO0VBQ0EsVUFBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7QUNERjs7QURJQTtFQUNFLFVBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9wYXJlbnQvcGFyZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI1LCAxNDAsIDIwOSk7XG59XG5cblxuI3Rvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICM3OTg2Y2I7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5vdGlmeSB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIC8vbWFyZ2luLWxlZnQ6IDMwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYmFkZ2Vub3RpZnkge1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTZweDtcbiAgcmlnaHQ6IC0yN3B4O1xuICBmb250LXNpemU6IDhweDtcbn1cblxuaW9uLW1lbnUtYnV0dG9uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4ubm90aWZpY2F0aW9uIHtcbiAgem9vbTogMS43O1xuICBtYXJnaW4tcmlnaHQ6IDVweFxufVxuXG4uc2lkZW1lbnUge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbn1cblxuLmhlYWRpbmdzIHtcbiAgY29sb3I6IHJnYigxMjUsIDE0MCwgMjA5KTtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuXG5pb24tbGFiZWwge1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5cbmlvbi1jYXJkIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDEzNSU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5cbmlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5kaXZpZGVyIHtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xufVxuXG4uaWNvbjEsXG4uaWNvbjIge1xuICBoZWlnaHQ6IDN2aDtcbiAgd2lkdGg6IDR2dztcbn1cblxuLnN0dWRlbnRJbWFnZSB7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLm9wdGlvbkJ1dHRvbnMge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5idXNJY29uIHtcbiAgc2l6ZTogNzVweDtcbn1cblxuLmZvbnRTdHlsZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iLCJpb24tdG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZDhjZDE7XG59XG5cbiN0b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNzk4NmNiO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5ub3RpZnkge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5iYWRnZW5vdGlmeSB7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNnB4O1xuICByaWdodDogLTI3cHg7XG4gIGZvbnQtc2l6ZTogOHB4O1xufVxuXG5pb24tbWVudS1idXR0b24ge1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5ub3RpZmljYXRpb24ge1xuICB6b29tOiAxLjc7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uc2lkZW1lbnUge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbn1cblxuLmhlYWRpbmdzIHtcbiAgY29sb3I6ICM3ZDhjZDE7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG5pb24tbGFiZWwge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMTM1JTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG4uZGl2aWRlciB7XG4gIGJvcmRlcjogMC41cHggc29saWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbn1cblxuLmljb24xLFxuLmljb24yIHtcbiAgaGVpZ2h0OiAzdmg7XG4gIHdpZHRoOiA0dnc7XG59XG5cbi5zdHVkZW50SW1hZ2Uge1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5vcHRpb25CdXR0b25zIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uYnVzSWNvbiB7XG4gIHNpemU6IDc1cHg7XG59XG5cbi5mb250U3R5bGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/login/parent/parent.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/login/parent/parent.component.ts ***!
  \********************************************************/
/*! exports provided: ParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentComponent", function() { return ParentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_firebase_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/firebase/ngx */ "./node_modules/@ionic-native/firebase/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_parent_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/parent.service */ "./src/app/services/parent.service.ts");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/pages/login/parent/notification/notification.component.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _services_alert_box_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/alert-box.service */ "./src/app/services/alert-box.service.ts");












var ParentComponent = /** @class */ (function () {
    /**
     * @description - The constructors has instances of ParentService,
     * StudentService, PopoverController, Router, ActivatedRoute
     * @param parentService - Instance of ParentService
     * @param studentService - Instance of StudentService
     * @param popoverController - Instance of PopoverController
     * @param router - Instance of Router
     * @param activatedroute - Instance of ActivatedRoute
     */
    function ParentComponent(parentService, studentService, router, firebase, modalController, activatedroute, notificationService, loaderService, alertBoxService) {
        this.parentService = parentService;
        this.studentService = studentService;
        this.router = router;
        this.firebase = firebase;
        this.modalController = modalController;
        this.activatedroute = activatedroute;
        this.notificationService = notificationService;
        this.loaderService = loaderService;
        this.alertBoxService = alertBoxService;
        this.notification = [];
        this.notificationData = [];
        // Assigning vehicle images folder link of server to vehicleImages member.
        this.studentImages = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].studentImages;
    }
    ParentComponent.prototype.ngOnInit = function () {
        this.userId = this.activatedroute.snapshot.queryParamMap.get('perentId');
        this.userType = this.activatedroute.snapshot.queryParamMap.get('user');
        console.log(this.userId, this.userType);
        if (this.userId) {
            this.getParentData(this.userId);
        }
        console.log('in parent component');
        this.badge = this.notification.length;
        this.getNotification();
        this.loaderService.loaderDismiss();
    };
    /**
     * @description - This function is getting parent data by calling the parent service,
     *  storing the data in parentDetails.
     * @param parentId - This parameter stores the id of parent
     */
    ParentComponent.prototype.getParentData = function (parentId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var parentDetails;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.parentService.getServerParentDetailsById(parentId)];
                    case 1:
                        parentDetails = _a.sent();
                        this.subscription = parentDetails.subscribe(function (res) {
                            _this.parentData = res['data'];
                            _this.studentId = _this.parentData[0].student_details[0]._id;
                            _this.driverId = _this.parentData[0].driver_details;
                            _this.initializeSidebarPages();
                            _this.getStudentData(_this.studentId);
                            // Dismiss the loader.
                            _this.loaderService.loaderDismiss();
                            //  this.getrouteData(this.driverId);
                        }, function (err) {
                            // Dismiss the loader.
                            _this.loaderService.loaderDismiss();
                            setTimeout(function () {
                                _this.alertBoxService.presentAlert('Alert', 'Server Problem.', 'Server not responding. Try after sometime.');
                            }, 1200);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @description - This function is getting the student data by caling the student service
     * @param studentId - This parameter stores the id of student.
     */
    ParentComponent.prototype.getStudentData = function (studentId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var studentDetails;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.studentService.getServerStudentDetails(studentId)];
                    case 1:
                        studentDetails = _a.sent();
                        studentDetails.subscribe(function (data) {
                            _this.studentData = data['data'];
                            _this.vehicleId = _this.studentData[0].route_details.vehicle_id;
                            _this.routeId = _this.studentData[0].route_details._id;
                            _this.driverId = _this.studentData[0].route_details.driver_id;
                            _this.getUserToken(_this.routeId);
                            _this.initializeSidebarPages();
                            _this.loaderService.loaderDismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ParentComponent.prototype.goToRoute = function () {
        /* this.router.navigate(['parent/single-bus-routes', this.userType, this.routeId]); */
        this.router.navigate(['parent/single-bus-routes'], {
            queryParams: { user: this.userType, routeId: this.routeId },
        });
    };
    ParentComponent.prototype.goToLiveMap = function () {
        this.router.navigate(['parent/parent-view-map', this.userType, this.driverId]);
    };
    ParentComponent.prototype.goToBusDetails = function () {
        this.router.navigate(['parent/bus-details', this.userType, this.vehicleId]);
    };
    /**
     * @description - This function is loading the side bar at the intial start
     *  which has routing to the other component like Profile, Student Information, About School,    *  Bus Details, Logout
     */
    ParentComponent.prototype.initializeSidebarPages = function () {
        this.pages = [
            {
                title: 'Profile',
                url: "parent/profile/" + this.userType + "/" + this.userId,
                icon: 'assets/profile/profile.png',
            },
            {
                title: 'Student Information',
                url: 'parent/student-details/' + this.userId,
                icon: 'assets/profile/student.png',
            },
            {
                title: 'About School',
                url: '/about-school',
                icon: 'assets/profile/school.png',
            },
            { title: 'Logout', url: '', icon: 'assets/profile/logout.png' },
        ];
    };
    ParentComponent.prototype.getUserToken = function (route_id) {
        var _this = this;
        this.firebase
            .getToken()
            .then(function (token) {
            _this.notificationService.setUserToken(route_id, token).subscribe();
        })
            .catch(function (error) { return console.error('Error getting token', error); });
    };
    /**
     * This function receive notification from firebase
     */
    ParentComponent.prototype.getNotification = function () {
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
    // Presenting model
    ParentComponent.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.badge = null;
                        return [4 /*yield*/, this.modalController.create({
                                component: _notification_notification_component__WEBPACK_IMPORTED_MODULE_7__["NotificationComponent"],
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
    ParentComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        // Dismiss the loader.
        this.loaderService.loaderDismiss();
    };
    ParentComponent.ctorParameters = function () { return [
        { type: _services_parent_service__WEBPACK_IMPORTED_MODULE_5__["ParentService"] },
        { type: _services_student_service__WEBPACK_IMPORTED_MODULE_6__["StudentService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_native_firebase_ngx__WEBPACK_IMPORTED_MODULE_3__["Firebase"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
        { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_10__["LoaderService"] },
        { type: _services_alert_box_service__WEBPACK_IMPORTED_MODULE_11__["AlertBoxService"] }
    ]; };
    ParentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-parent',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./parent.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/parent/parent.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./parent.component.scss */ "./src/app/pages/login/parent/parent.component.scss")).default]
        })
        /**
         * @class  ParentComponent
         */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_parent_service__WEBPACK_IMPORTED_MODULE_5__["ParentService"],
            _services_student_service__WEBPACK_IMPORTED_MODULE_6__["StudentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_native_firebase_ngx__WEBPACK_IMPORTED_MODULE_3__["Firebase"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"],
            src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_10__["LoaderService"],
            _services_alert_box_service__WEBPACK_IMPORTED_MODULE_11__["AlertBoxService"]])
    ], ParentComponent);
    return ParentComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/parent/parent.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/parent/parent.module.ts ***!
  \*****************************************************/
/*! exports provided: ParentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentModule", function() { return ParentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.module */ "./src/app/pages/shared/sidebar/sidebar.module.ts");
/* harmony import */ var _parent_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parent.component */ "./src/app/pages/login/parent/parent.component.ts");
/* harmony import */ var _parent_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parent-routing.module */ "./src/app/pages/login/parent/parent-routing.module.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/pages/login/parent/notification/notification.component.ts");









var ParentModule = /** @class */ (function () {
    function ParentModule() {
    }
    ParentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _parent_routing_module__WEBPACK_IMPORTED_MODULE_7__["ParentRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _shared_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_5__["SideBarModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
            declarations: [_parent_component__WEBPACK_IMPORTED_MODULE_6__["ParentComponent"], _notification_notification_component__WEBPACK_IMPORTED_MODULE_8__["NotificationComponent"]],
            entryComponents: [_notification_notification_component__WEBPACK_IMPORTED_MODULE_8__["NotificationComponent"]],
        })
    ], ParentModule);
    return ParentModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-pages-login-parent-parent-module.js.map