(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-forget-password-reset-password-reset-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forget-password/reset-password/reset-password.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forget-password/reset-password/reset-password.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\">\n  <ion-fab-button>\n    <ion-icon class=\"backNavigationIcon\" name=\"arrow-back\" (click)=\"navigate()\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle text-center class=\"resetPasswordHeader\">Reset Password</ion-card-subtitle>\n\n\n      <ion-card-subtitle padding-top class=\"resetPasswordMessage\">{{resetPasswordMessage}}\n      </ion-card-subtitle>\n\n      <ion-card-content>\n        <form [formGroup]=\"passwordResettingForm\" (ngSubmit)=\"setPassword(passwordResettingForm)\">\n          <ion-label type=\"password\" class=\"passwordLabel\">New Password</ion-label>\n          <ion-input class=\"enterPasswordInput\" formControlName=\"newPassword\">\n          </ion-input>\n          <ion-label class=\"passwordLabel\">Confirm Password</ion-label>\n          <ion-input type=\"password\" class=\"enterPasswordInput\" formControlName=\"confirmPassword\">\n          </ion-input>\n\n          <ion-button expand=\"block\" class=\"passwordSubmitButton\" type=\"submit\"\n            [disabled]=\"passwordResettingForm.invalid\" margin-top>Reset\n          </ion-button>\n        </form>\n      </ion-card-content>\n\n    </ion-card-header>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/forget-password/reset-password/reset-password.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/forget-password/reset-password/reset-password.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".backNavigationIcon {\n  visibility: hidden;\n  font-size: 30px;\n  padding-top: 10%;\n  padding-left: 10%;\n  background: none;\n  color: black;\n}\n\nion-fab-button {\n  --background: none;\n  --box-shadow: none;\n}\n\nion-header {\n  --background: transparent;\n}\n\nion-header::after {\n  background-image: none;\n  background: none;\n  margin-top: none;\n}\n\nion-card {\n  box-shadow: none;\n  padding-top: 20%;\n}\n\n/* ion-content {\n  --background: rgba(240, 240, 240, 0.521);\n} */\n\n.resetPasswordHeader {\n  font-family: \"Roboto\";\n  font-size: 27px;\n  color: #7986cb;\n}\n\n.keyIcon {\n  font-size: 150px;\n  font-weight: bold;\n}\n\n.resetPasswordMessage {\n  font-family: \"Roboto\";\n  font-size: 18px;\n  color: #524d4d;\n  margin-left: 3.2%;\n  padding-bottom: 5%;\n}\n\n.enterPasswordInput {\n  background-color: #e2e0e0;\n  color: #070606;\n  font-size: 18px;\n  border-radius: 5px;\n  margin-bottom: 20px;\n}\n\n.passwordSubmitButton {\n  --background: #7986cb;\n  font-family: \"Roboto\";\n  font-size: 20px;\n}\n\n.passwordLabel {\n  font-family: \"Roboto\";\n  font-size: 15px;\n  color: #524d4d;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hbWRldi9EZXNrdG9wL2dpdCAvd2hlcmUgaXMgbXkgYnVzL3NyYy9hcHAvcGFnZXMvZm9yZ2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9mb3JnZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7O0dBQUE7O0FBSUE7RUFFRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDREY7O0FESUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDREY7O0FESUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNERjs7QURJQTtFQUVFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDRkY7O0FETUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZvcmdldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrTmF2aWdhdGlvbkljb24ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgcGFkZGluZy10b3A6IDEwJTtcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1oZWFkZXI6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgbWFyZ2luLXRvcDogbm9uZTtcbn1cblxuaW9uLWNhcmQge1xuICBib3gtc2hhZG93OiBub25lO1xuICBwYWRkaW5nLXRvcDogMjAlO1xufVxuXG4vKiBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNDAsIDI0MCwgMjQwLCAwLjUyMSk7XG59ICovXG5cbi5yZXNldFBhc3N3b3JkSGVhZGVyIHtcblxuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIGZvbnQtc2l6ZTogMjdweDtcbiAgY29sb3I6ICM3OTg2Y2I7XG59XG5cbi5rZXlJY29uIHtcbiAgZm9udC1zaXplOiAxNTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5yZXNldFBhc3N3b3JkTWVzc2FnZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogcmdiKDgyLCA3NywgNzcpO1xuICBtYXJnaW4tbGVmdDogMy4yJTtcbiAgcGFkZGluZy1ib3R0b206IDUlO1xufVxuXG4uZW50ZXJQYXNzd29yZElucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiwgMjI0LCAyMjQpO1xuICBjb2xvcjogcmdiKDcsIDYsIDYpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnBhc3N3b3JkU3VibWl0QnV0dG9uIHtcblxuICAtLWJhY2tncm91bmQ6ICM3OTg2Y2I7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgZm9udC1zaXplOiAyMHB4O1xuXG59XG5cbi5wYXNzd29yZExhYmVsIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiByZ2IoODIsIDc3LCA3Nyk7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59IiwiLmJhY2tOYXZpZ2F0aW9uSWNvbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBwYWRkaW5nLXRvcDogMTAlO1xuICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG5pb24taGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWhlYWRlcjo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBtYXJnaW4tdG9wOiBub25lO1xufVxuXG5pb24tY2FyZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmctdG9wOiAyMCU7XG59XG5cbi8qIGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI0MCwgMjQwLCAyNDAsIDAuNTIxKTtcbn0gKi9cbi5yZXNldFBhc3N3b3JkSGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIGZvbnQtc2l6ZTogMjdweDtcbiAgY29sb3I6ICM3OTg2Y2I7XG59XG5cbi5rZXlJY29uIHtcbiAgZm9udC1zaXplOiAxNTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5yZXNldFBhc3N3b3JkTWVzc2FnZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjNTI0ZDRkO1xuICBtYXJnaW4tbGVmdDogMy4yJTtcbiAgcGFkZGluZy1ib3R0b206IDUlO1xufVxuXG4uZW50ZXJQYXNzd29yZElucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTBlMDtcbiAgY29sb3I6ICMwNzA2MDY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucGFzc3dvcmRTdWJtaXRCdXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICM3OTg2Y2I7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5wYXNzd29yZExhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM1MjRkNGQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/forget-password/reset-password/reset-password.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/forget-password/reset-password/reset-password.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_parent_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/parent.service */ "./src/app/services/parent.service.ts");
/* harmony import */ var _services_driver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/driver.service */ "./src/app/services/driver.service.ts");
/* harmony import */ var _services_bus_coordinator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/bus-coordinator.service */ "./src/app/services/bus-coordinator.service.ts");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");









var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(formBuilder, router, route, parentService, driverService, busCoordinatorService, loaderservice, alertController) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.parentService = parentService;
        this.driverService = driverService;
        this.busCoordinatorService = busCoordinatorService;
        this.loaderservice = loaderservice;
        this.alertController = alertController;
        // Get the route parameter.
        this.route.params.subscribe(function (data) {
            _this.userType = data.userType;
            _this.userId = data.userId;
        });
        this.showresetPasswordMessage();
    }
    ResetPasswordComponent.prototype.setPassword = function (passwordData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userData, _a, driverDetails, parentDetails, busCordinatorDetails;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log(passwordData.value.newPassword, passwordData.value.confirmPassword);
                        if (!(passwordData.value.newPassword === passwordData.value.confirmPassword)) return [3 /*break*/, 9];
                        userData = {
                            busCoordinatorId: this.userId,
                            busCoordinatorPassword: passwordData.value.newPassword,
                        };
                        _a = this.userType;
                        switch (_a) {
                            case 'driver': return [3 /*break*/, 1];
                            case 'parent': return [3 /*break*/, 3];
                            case 'busCoordinator': return [3 /*break*/, 5];
                        }
                        return [3 /*break*/, 7];
                    case 1: return [4 /*yield*/, this.driverService.updateServerDriverDetailsById(userData)];
                    case 2:
                        driverDetails = _b.sent();
                        // Subscribe the driverDetails to get data.
                        driverDetails.subscribe(function (data) {
                            console.log(data);
                            // Navigate the page after driver's successful resetting password.
                            _this.router.navigate(['/home']);
                        });
                        return [3 /*break*/, 8];
                    case 3: return [4 /*yield*/, this.parentService.updateServerParentDetailsById(userData)];
                    case 4:
                        parentDetails = _b.sent();
                        // Subscribe the parentDetails to get data.
                        parentDetails.subscribe(function (data) {
                            console.log(data);
                            // Navigate the page after parent's successful resetting password.
                            _this.router.navigate(['/home']);
                        });
                        return [3 /*break*/, 8];
                    case 5: return [4 /*yield*/, this.busCoordinatorService.updateServerBusCoordinatorDetailsById(userData)];
                    case 6:
                        busCordinatorDetails = _b.sent();
                        // Subscribe the busCoordinatorDetails to get data.
                        busCordinatorDetails.subscribe(function (res) {
                            console.log(res);
                            _this.presentAlert();
                            // Navigate the page after bus coordinator's successful resetting password.
                            _this.router.navigate(['/home']);
                        });
                        return [3 /*break*/, 8];
                    case 7:
                        {
                            return [3 /*break*/, 8];
                        }
                        _b.label = 8;
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        alert('Password not matched.');
                        _b.label = 10;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    ResetPasswordComponent.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'WIMB Account',
                            subHeader: 'Success',
                            message: 'Your password changed successfully.',
                            buttons: ['OK'],
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ResetPasswordComponent.prototype.showresetPasswordMessage = function () {
        this.resetPasswordMessage = 'Please enter your new password for your account.';
    };
    ResetPasswordComponent.prototype.ngOnInit = function () {
        this.passwordResettingForm = this.formBuilder.group({
            newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    ResetPasswordComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _services_parent_service__WEBPACK_IMPORTED_MODULE_4__["ParentService"] },
        { type: _services_driver_service__WEBPACK_IMPORTED_MODULE_5__["DriverService"] },
        { type: _services_bus_coordinator_service__WEBPACK_IMPORTED_MODULE_6__["BusCoordinatorService"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] }
    ]; };
    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset-password',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reset-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forget-password/reset-password/reset-password.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reset-password.component.scss */ "./src/app/pages/forget-password/reset-password/reset-password.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_parent_service__WEBPACK_IMPORTED_MODULE_4__["ParentService"],
            _services_driver_service__WEBPACK_IMPORTED_MODULE_5__["DriverService"],
            _services_bus_coordinator_service__WEBPACK_IMPORTED_MODULE_6__["BusCoordinatorService"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/pages/forget-password/reset-password/reset-password.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/forget-password/reset-password/reset-password.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ResetPasswordComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponentModule", function() { return ResetPasswordComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _reset_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset-password.component */ "./src/app/pages/forget-password/reset-password/reset-password.component.ts");







var ResetPasswordComponentModule = /** @class */ (function () {
    function ResetPasswordComponentModule() {
    }
    ResetPasswordComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _reset_password_component__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordComponent"] }]),
            ],
            declarations: [_reset_password_component__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordComponent"]],
        })
    ], ResetPasswordComponentModule);
    return ResetPasswordComponentModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-pages-forget-password-reset-password-reset-password-module.js.map