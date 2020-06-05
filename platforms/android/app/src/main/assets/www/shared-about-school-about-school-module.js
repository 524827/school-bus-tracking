(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shared-about-school-about-school-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/about-school/about-school.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/about-school/about-school.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header text-center>\n  <ion-toolbar class=\"background\" color=\"#587FBB\" id=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-icon name=\"arrow-back\" class=\"back\" (click)=\"navigateBack()\"></ion-icon>\n    </ion-buttons>\n    <ion-title class=\"title\">About School</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"schoolData\">\n  <ion-card>\n    <img src=\"{{schoolImages}}/{{schoolData.school_photos}}\" onError=\"this.src='../../../../assets/default/school.png'\">\n  </ion-card>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\" text-center>\n          <ion-label>{{schoolData.school_name}}</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"1\" class=\"icons\">\n          <ion-icon name=\"pin\" style=\"zoom:1.5\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"3\">\n          <h3>Address:</h3>\n        </ion-col>\n        <ion-col size=\"8\">\n          <h3>{{schoolData.school_address}}</h3>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"1\" class=\"icons\">\n          <ion-icon name=\"call\" style=\"zoom:1.5\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"3\">\n          <h3>Office:</h3>\n        </ion-col>\n        <ion-col size=\"8\">\n          <h3>{{schoolData.school_contact.office}}</h3>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"1\" class=\"icons\">\n          <ion-icon name=\"mail\" style=\"zoom:1.5\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"3\">\n          <h3>Email:</h3>\n        </ion-col>\n        <ion-col size=\"8\">\n          <h3>{{schoolData.school_contact.office_email}}</h3>\n        </ion-col>\n      </ion-row>\n\n\n    </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/shared/about-school/about-school-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/shared/about-school/about-school-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: AboutSchoolRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutSchoolRoutingModule", function() { return AboutSchoolRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AboutSchoolRoutingModule = /** @class */ (function () {
    function AboutSchoolRoutingModule() {
    }
    AboutSchoolRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AboutSchoolRoutingModule);
    return AboutSchoolRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/shared/about-school/about-school.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/shared/about-school/about-school.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back {\n  zoom: 2;\n}\n\n.icons {\n  padding-top: 16px;\n}\n\n#toolbar {\n  --background: #7986cb;\n  color: white;\n}\n\nion-toolbar {\n  background-color: #7d8cd1;\n}\n\n/* ion-icon {\n  margin-top: 6px;\n}\n */\n\nion-card {\n  margin: 20px;\n  height: auto;\n}\n\nh2 {\n  font-weight: bold;\n  font-size: 30px;\n  font-family: \"Roboto\", sans-serif;\n}\n\nh3 {\n  font-size: 15px;\n  font-family: \"Roboto\", sans-serif;\n}\n\n/* ion-row {\n  margin: 5px;\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hbWRldi9EZXNrdG9wL2dpdCAvd2hlcmUgaXMgbXkgYnVzL3NyYy9hcHAvcGFnZXMvc2hhcmVkL2Fib3V0LXNjaG9vbC9hYm91dC1zY2hvb2wuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NoYXJlZC9hYm91dC1zY2hvb2wvYWJvdXQtc2Nob29sLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsT0FBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTs7O0VBQUE7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQ0FBQTtBQ0NGOztBREdBOztHQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2hhcmVkL2Fib3V0LXNjaG9vbC9hYm91dC1zY2hvb2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjayB7XG4gIHpvb206IDIuMDtcbn1cblxuLmljb25zIHtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG59XG5cbiN0b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNzk4NmNiO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNSwgMTQwLCAyMDkpO1xufVxuXG4vKiBpb24taWNvbiB7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cbiAqL1xuaW9uLWNhcmQge1xuICBtYXJnaW46IDIwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuaDIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5cblxuLyogaW9uLXJvdyB7XG4gIG1hcmdpbjogNXB4O1xufSAqLyIsIi5iYWNrIHtcbiAgem9vbTogMjtcbn1cblxuLmljb25zIHtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG59XG5cbiN0b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNzk4NmNiO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdkOGNkMTtcbn1cblxuLyogaW9uLWljb24ge1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4gKi9cbmlvbi1jYXJkIHtcbiAgbWFyZ2luOiAyMHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbmgyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLyogaW9uLXJvdyB7XG4gIG1hcmdpbjogNXB4O1xufSAqLyJdfQ== */");

/***/ }),

/***/ "./src/app/pages/shared/about-school/about-school.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/shared/about-school/about-school.component.ts ***!
  \*********************************************************************/
/*! exports provided: AboutSchoolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutSchoolComponent", function() { return AboutSchoolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_school_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/school.service */ "./src/app/services/school.service.ts");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _services_alert_box_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/alert-box.service */ "./src/app/services/alert-box.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");







var AboutSchoolComponent = /** @class */ (function () {
    /**
     * @description - The constructors have instances of NavController, SchoolService
     * @param navctl - It is an instance of NavController
     * @param schoolService - It is an instance of SchoolService
     */
    function AboutSchoolComponent(navctl, schoolService, loaderService, alertBoxService) {
        this.navctl = navctl;
        this.schoolService = schoolService;
        this.loaderService = loaderService;
        this.alertBoxService = alertBoxService;
        this.schoolImages = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].schoolImages;
        this.getSchooldata();
    }
    AboutSchoolComponent.prototype.ngOnInit = function () { };
    /**
     * @description - This function is for going back to the previous component
     */
    AboutSchoolComponent.prototype.navigateBack = function () {
        this.navctl.pop();
    };
    /**
     * @description - The function getSchooldata gets all the school data by calling school service
     *and storing that data in schooldetails.
     */
    AboutSchoolComponent.prototype.getSchooldata = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var schooldetails;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.schoolService.getServerSchoolDetails()];
                    case 1:
                        schooldetails = _a.sent();
                        this.subscription = schooldetails.subscribe(function (data) {
                            console.log(data);
                            _this.schoolData = data[0];
                            console.log(_this.schoolData);
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
     * Dismiss active loader and unsubscribe running services.
     */
    AboutSchoolComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        // Dismiss the loader.
        this.loaderService.loaderDismiss();
    };
    AboutSchoolComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _services_school_service__WEBPACK_IMPORTED_MODULE_3__["SchoolService"] },
        { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: _services_alert_box_service__WEBPACK_IMPORTED_MODULE_5__["AlertBoxService"] }
    ]; };
    AboutSchoolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-school',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-school.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/about-school/about-school.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-school.component.scss */ "./src/app/pages/shared/about-school/about-school.component.scss")).default]
        })
        /**
         * @class AboutSchoolComponent
         */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_school_service__WEBPACK_IMPORTED_MODULE_3__["SchoolService"],
            src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _services_alert_box_service__WEBPACK_IMPORTED_MODULE_5__["AlertBoxService"]])
    ], AboutSchoolComponent);
    return AboutSchoolComponent;
}());



/***/ }),

/***/ "./src/app/pages/shared/about-school/about-school.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/shared/about-school/about-school.module.ts ***!
  \******************************************************************/
/*! exports provided: AboutSchoolModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutSchoolModule", function() { return AboutSchoolModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _about_school_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-school.component */ "./src/app/pages/shared/about-school/about-school.component.ts");
/* harmony import */ var _about_school_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about-school-routing.module */ "./src/app/pages/shared/about-school/about-school-routing.module.ts");






// import { SideBarModule } from '../sidebar/sidebar.module';


var AboutSchoolModule = /** @class */ (function () {
    function AboutSchoolModule() {
    }
    AboutSchoolModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_about_school_component__WEBPACK_IMPORTED_MODULE_6__["AboutSchoolComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _about_school_routing_module__WEBPACK_IMPORTED_MODULE_7__["AboutSchoolRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _about_school_component__WEBPACK_IMPORTED_MODULE_6__["AboutSchoolComponent"],
                    },
                ]),
            ],
        })
    ], AboutSchoolModule);
    return AboutSchoolModule;
}());



/***/ })

}]);
//# sourceMappingURL=shared-about-school-about-school-module.js.map