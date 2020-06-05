(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-forget-password-forget-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forget-password/forget-password.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forget-password/forget-password.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\">\n  <ion-fab-button>\n    <ion-icon class=\"backNavigationIcon\" name=\"arrow-back\" (click)=\"navigate()\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n<ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n  <ion-fab-button>\n    <ion-icon name=\"arrow-dropup\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle text-center class=\"forgetPasswordHeader\">Forget Your Password ?</ion-card-subtitle>\n\n      <ion-card-title text-center>\n        <ion-icon name=\"key\" class=\"keyIcon\"></ion-icon>\n      </ion-card-title>\n\n      <ion-card-subtitle text-center class=\"enterEmailMessage\">{{enterEmailMessage}}</ion-card-subtitle>\n\n      <ion-card-content>\n        <form [formGroup]=\"userEmailForm\" (ngSubmit)=\"isEmailExist(userEmailForm)\">\n          <ion-input class=\"enterEmailInput\" formControlName=\"userEmail\" placeholder=\"Enter your email\">\n          </ion-input>\n\n          <ion-button expand=\"block\" class=\"emailSubmitButton\" type=\"submit\" [disabled]=\"userEmailForm.invalid\"\n            margin-top>Next\n          </ion-button>\n        </form>\n      </ion-card-content>\n\n    </ion-card-header>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/forget-password/forget-password-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/forget-password/forget-password-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ForgetPasswordRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordRoutingModule", function() { return ForgetPasswordRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
/*  {
  path: '',
  component: ForgetPasswordComponent,
  children: [
    {
      path: '/otp-verification',
      loadChildren:
        '../app/pages/forget-password/otp-verification/otp-verification.module#OtpVerificationComponentModule',
    },
  ],
}, */
];
var ForgetPasswordRoutingModule = /** @class */ (function () {
    function ForgetPasswordRoutingModule() {
    }
    ForgetPasswordRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ForgetPasswordRoutingModule);
    return ForgetPasswordRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/forget-password/forget-password.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/forget-password/forget-password.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".backNavigationIcon {\n  font-size: 30px;\n  padding-top: 10%;\n  padding-left: 10%;\n  color: black;\n}\n\nion-fab-button {\n  --background: none;\n  --box-shadow: none;\n}\n\nion-header {\n  background: transparent;\n}\n\nion-header::after {\n  background-image: none;\n  background: none;\n}\n\nion-card {\n  box-shadow: none;\n  padding-top: 20%;\n}\n\n/* ion-content {\n  --background: rgba(240, 240, 240, 0.521);\n}\n */\n\n.forgetPasswordHeader {\n  color: #7986cb;\n  font-family: \"Roboto\";\n  font-size: 25px;\n}\n\n.keyIcon {\n  font-size: 150px;\n  font-weight: bold;\n}\n\n.enterEmailMessage {\n  color: #928d8d;\n}\n\n.enterEmailInput {\n  background-color: #e2e0e0;\n  color: #070606;\n  font-size: 18px;\n  border-radius: 5px;\n}\n\n.emailSubmitButton {\n  --background: #7986cb;\n  font-family: \"Roboto\";\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hbWRldi9EZXNrdG9wL2dpdCAvd2hlcmUgaXMgbXkgYnVzL3NyYy9hcHAvcGFnZXMvZm9yZ2V0LXBhc3N3b3JkL2ZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZm9yZ2V0LXBhc3N3b3JkL2ZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTs7O0VBQUE7O0FBSUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUVFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tOYXZpZ2F0aW9uSWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgcGFkZGluZy10b3A6IDEwJTtcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24taGVhZGVyOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZy10b3A6IDIwJTtcbn1cblxuLyogaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjQwLCAyNDAsIDI0MCwgMC41MjEpO1xufVxuICovXG4uZm9yZ2V0UGFzc3dvcmRIZWFkZXIge1xuICBjb2xvcjogIzc5ODZjYjtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5rZXlJY29uIHtcbiAgZm9udC1zaXplOiAxNTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5lbnRlckVtYWlsTWVzc2FnZSB7XG4gIGNvbG9yOiByZ2IoMTQ2LCAxNDEsIDE0MSk7XG59XG5cbi5lbnRlckVtYWlsSW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAyMjQsIDIyNCk7XG4gIGNvbG9yOiByZ2IoNywgNiwgNik7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uZW1haWxTdWJtaXRCdXR0b24ge1xuXG4gIC0tYmFja2dyb3VuZDogIzc5ODZjYjtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXNpemU6IDIwcHg7XG59IiwiLmJhY2tOYXZpZ2F0aW9uSWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgcGFkZGluZy10b3A6IDEwJTtcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24taGVhZGVyOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZy10b3A6IDIwJTtcbn1cblxuLyogaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjQwLCAyNDAsIDI0MCwgMC41MjEpO1xufVxuICovXG4uZm9yZ2V0UGFzc3dvcmRIZWFkZXIge1xuICBjb2xvcjogIzc5ODZjYjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmtleUljb24ge1xuICBmb250LXNpemU6IDE1MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmVudGVyRW1haWxNZXNzYWdlIHtcbiAgY29sb3I6ICM5MjhkOGQ7XG59XG5cbi5lbnRlckVtYWlsSW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlMGUwO1xuICBjb2xvcjogIzA3MDYwNjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5lbWFpbFN1Ym1pdEJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzc5ODZjYjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/forget-password/forget-password.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/forget-password/forget-password.component.ts ***!
  \********************************************************************/
/*! exports provided: ForgetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function() { return ForgetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_driver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/driver.service */ "./src/app/services/driver.service.ts");
/* harmony import */ var _services_parent_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/parent.service */ "./src/app/services/parent.service.ts");
/* harmony import */ var _services_bus_coordinator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/bus-coordinator.service */ "./src/app/services/bus-coordinator.service.ts");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _services_otp_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/otp.service */ "./src/app/services/otp.service.ts");










var ForgetPasswordComponent = /** @class */ (function () {
    function ForgetPasswordComponent(navCtrl, router, formBuilder, parentService, driverService, busCoordinatorService, loaderService, otpService) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.formBuilder = formBuilder;
        this.parentService = parentService;
        this.driverService = driverService;
        this.busCoordinatorService = busCoordinatorService;
        this.loaderService = loaderService;
        this.otpService = otpService;
        this.showEnterEmailMessage();
    }
    ForgetPasswordComponent.prototype.showEnterEmailMessage = function () {
        this.enterEmailMessage = 'Enter your email below to receive your password reset instructions.';
    };
    ForgetPasswordComponent.prototype.isEmailExist = function (emailData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userEmail, userData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loaderService.loaderPresent('Verifying Email', 'crescent');
                        userEmail = emailData.value.userEmail;
                        return [4 /*yield*/, this.otpService.getOTPFromServer(userEmail)];
                    case 1:
                        userData = _a.sent();
                        userData.subscribe(function (res) {
                            console.log(res);
                            var data = res['data'];
                            if (res['data'] === 'Server_Error') {
                                _this.loaderService.loaderDismiss();
                                console.log(data);
                                alert('Something Wrong. Try after sometime.');
                            }
                            else if (!data[0]) {
                                _this.loaderService.loaderDismiss();
                                console.log(data);
                                alert('Email not exist.');
                            }
                            else {
                                _this.loaderService.loaderDismiss();
                                console.log(data);
                                var userDetails = data[0];
                                var userId = userDetails[0]._id;
                                _this.navigateToOTPVerification(data[1].userType, data[2].otp, userId);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ForgetPasswordComponent.prototype.navigateToOTPVerification = function (userType, otp, userId) {
        this.router.navigate(['otp-verification', userType, otp, userId]);
    };
    ForgetPasswordComponent.prototype.navigate = function () {
        this.navCtrl.back();
    };
    ForgetPasswordComponent.prototype.ngOnInit = function () {
        // Reactive form's validation.
        this.userEmailForm = this.formBuilder.group({
            userEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
        });
    };
    ForgetPasswordComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _services_parent_service__WEBPACK_IMPORTED_MODULE_6__["ParentService"] },
        { type: _services_driver_service__WEBPACK_IMPORTED_MODULE_5__["DriverService"] },
        { type: _services_bus_coordinator_service__WEBPACK_IMPORTED_MODULE_7__["BusCoordinatorService"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"] },
        { type: _services_otp_service__WEBPACK_IMPORTED_MODULE_9__["OtpService"] }
    ]; };
    ForgetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forget-password',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forget-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forget-password/forget-password.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forget-password.component.scss */ "./src/app/pages/forget-password/forget-password.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_parent_service__WEBPACK_IMPORTED_MODULE_6__["ParentService"],
            _services_driver_service__WEBPACK_IMPORTED_MODULE_5__["DriverService"],
            _services_bus_coordinator_service__WEBPACK_IMPORTED_MODULE_7__["BusCoordinatorService"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"],
            _services_otp_service__WEBPACK_IMPORTED_MODULE_9__["OtpService"]])
    ], ForgetPasswordComponent);
    return ForgetPasswordComponent;
}());

/*
async isEmailOfDriver(userEmail: string) {
  this.alertService.loaderPresent('Please wait.', 'bubbles');
  const driverDetails = await this.driverService.getServerDriverDetailsByEmail(userEmail);

  // Subscribe the driverDetails to get data.
  driverDetails.subscribe(res => {
    console.log(res);
    const data = res['data'];

    if (!data[0]) {
      this.alertService.loaderDismiss();
      alert('Email not found.');
    } else {
      this.userType = 'driver';
      const driverId = data[0]._id;

      this.router.navigate(['/coordinator', this.userType, driverId]);

      return data;
    }
  });
}

async isEmailOfParent(userEmail: string) {
  this.alertService.loaderPresent('Please wait.', 'bubbles');
  const parentDetails = await this.busCoordinatorService.getServerBusCoordinatorDetailsByEmail(
    userEmail
  );

  // Subscribe the parentDetails to get data.
  parentDetails.subscribe(res => {
    console.log(res);
    const data = res['data'];

    if (!data[0]) {
      this.alertService.loaderDismiss();
      alert('Email not found.');
    } else {
      this.userType = 'parent';
      const parentId = data[0]._id;

      this.router.navigate(['/coordinator', this.userType, parentId]);

      return data;
    }
  });
}

async isEmailOfBusCoordinator(userEmail: string) {
  this.alertService.loaderPresent('Please wait.', 'bubbles');
  const busCordinatorDetails = await this.busCoordinatorService.getServerBusCoordinatorDetailsByEmail(
    userEmail
  );

  // Subscribe the busCoordinatorDetails to get data.
  busCordinatorDetails.subscribe(res => {
    console.log(res);
    const data = res['data'];

    if (!data[0]) {
      this.alertService.loaderDismiss();
      alert('Email not found.');
    } else {
      this.userType = 'busCoordinator';
      const busCoordinatorId = data[0]._id;

      this.router.navigate(['/coordinator', this.userType, busCoordinatorId]);

      return data;
    }
  });
}
 */


/***/ }),

/***/ "./src/app/pages/forget-password/forget-password.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/forget-password/forget-password.module.ts ***!
  \*****************************************************************/
/*! exports provided: ForgetPasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordModule", function() { return ForgetPasswordModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _forget_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forget-password.component */ "./src/app/pages/forget-password/forget-password.component.ts");
/* harmony import */ var _forget_password_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forget-password-routing.module */ "./src/app/pages/forget-password/forget-password-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var ForgetPasswordModule = /** @class */ (function () {
    function ForgetPasswordModule() {
    }
    ForgetPasswordModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_forget_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgetPasswordComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _forget_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgetPasswordComponent"],
                    },
                ]),
                _forget_password_routing_module__WEBPACK_IMPORTED_MODULE_6__["ForgetPasswordRoutingModule"],
            ],
            providers: [],
        })
    ], ForgetPasswordModule);
    return ForgetPasswordModule;
}());



/***/ }),

/***/ "./src/app/services/otp.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/otp.service.ts ***!
  \*****************************************/
/*! exports provided: OtpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpService", function() { return OtpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var OtpService = /** @class */ (function () {
    /**
     * @description - This constructor creates the instance of HttpClient.
     * @param {HttpClient} http - Instance of the HttpClient.
     */
    function OtpService(http) {
        this.http = http;
    }
    /**
     * @description - This method send call to the server and fetches user data based on email.
     * @param {string} userEmail - Stores email id provided by the user for recieve otp.
     * @returns - Observable<object> - It contains the response of the server.
     */
    OtpService.prototype.getOTPFromServer = function (userEmail) {
        // Sending request to server.
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].otpUrl + "/?userEmail=" + userEmail);
    };
    OtpService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    OtpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
        /**
         * @description - This class provides calling for the send OTP url.
        export class OtpService {
         * @class - BuscoordinatorService
         */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OtpService);
    return OtpService;
}());



/***/ })

}]);
//# sourceMappingURL=app-pages-forget-password-forget-password-module.js.map