(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-forget-password-otp-verification-otp-verification-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forget-password/otp-verification/otp-verification.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forget-password/otp-verification/otp-verification.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\">\n  <ion-fab-button>\n    <ion-icon class=\"backNavigationIcon\" name=\"arrow-back\" (click)=\"navigate()\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle text-center class=\"enterOTPHeader\">Enter Your OTP</ion-card-subtitle>\n\n      <ion-card-title text-center>\n        <ion-icon name=\"key\" class=\"keyIcon\"></ion-icon>\n      </ion-card-title>\n\n      <ion-card-subtitle text-center class=\"enterOTPMessage\">{{enterOTPMessage}}</ion-card-subtitle>\n\n      <ion-card-content>\n        <form [formGroup]=\"otpCheckingForm\" (ngSubmit)=\"isOTPCorrect(otpCheckingForm)\">\n          <ion-input class=\"enterOTPInput\" formControlName=\"userOTP\" placeholder=\"Enter OTP\">\n          </ion-input>\n\n          <ion-button expand=\"block\" class=\"otpSubmitButton\" type=\"submit\" [disabled]=\"otpCheckingForm.invalid\"\n            margin-top>Next\n          </ion-button>\n        </form>\n      </ion-card-content>\n\n    </ion-card-header>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header class=\"otpTimer\" id=\"otpTimer\" text-center>\n\n    </ion-card-header>\n    <ion-title class=\"otpTimer\" text-center>Time Remaing</ion-title>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/forget-password/otp-verification/otp-verification.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/forget-password/otp-verification/otp-verification.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".backNavigationIcon {\n  font-size: 30px;\n  padding-top: 10%;\n  padding-left: 10%;\n  background: none;\n  position: fixed;\n  color: black;\n}\n\nion-fab-button {\n  --background: none;\n  --box-shadow: none;\n}\n\nion-header {\n  --background: transparent;\n}\n\nion-header::after {\n  background-image: none;\n  background: none;\n}\n\nion-card {\n  box-shadow: none;\n  padding-top: 20%;\n}\n\n/* ion-content {\n  --background: rgba(240, 240, 240, 0.521);\n} */\n\n.enterOTPHeader {\n  color: #7986cb;\n  font-family: \"Roboto\";\n  font-size: 25px;\n}\n\n.otpTimer {\n  font-size: 20px;\n  color: black;\n}\n\n.keyIcon {\n  font-size: 150px;\n  font-weight: bold;\n}\n\n.enterOTPMessage {\n  color: #928d8d;\n}\n\n.enterOTPInput {\n  background-color: #e2e0e0;\n  color: #070606;\n  font-size: 18px;\n  border-radius: 5px;\n}\n\n.otpSubmitButton {\n  --background: #7986cb;\n  font-family: \"Roboto\";\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hbWRldi9EZXNrdG9wL2dpdCAvd2hlcmUgaXMgbXkgYnVzL3NyYy9hcHAvcGFnZXMvZm9yZ2V0LXBhc3N3b3JkL290cC12ZXJpZmljYXRpb24vb3RwLXZlcmlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZm9yZ2V0LXBhc3N3b3JkL290cC12ZXJpZmljYXRpb24vb3RwLXZlcmlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTs7R0FBQTs7QUFJQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURHQTtFQUVFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mb3JnZXQtcGFzc3dvcmQvb3RwLXZlcmlmaWNhdGlvbi9vdHAtdmVyaWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tOYXZpZ2F0aW9uSWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgcGFkZGluZy10b3A6IDEwJTtcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG5pb24taGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWhlYWRlcjo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG5pb24tY2FyZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmctdG9wOiAyMCU7XG59XG5cbi8qIGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI0MCwgMjQwLCAyNDAsIDAuNTIxKTtcbn0gKi9cblxuLmVudGVyT1RQSGVhZGVyIHtcbiAgY29sb3I6ICM3OTg2Y2I7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4ub3RwVGltZXIge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmtleUljb24ge1xuICBmb250LXNpemU6IDE1MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmVudGVyT1RQTWVzc2FnZSB7XG4gIGNvbG9yOiByZ2IoMTQ2LCAxNDEsIDE0MSk7XG59XG5cbi5lbnRlck9UUElucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiwgMjI0LCAyMjQpO1xuICBjb2xvcjogcmdiKDcsIDYsIDYpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLm90cFN1Ym1pdEJ1dHRvbiB7XG5cbiAgLS1iYWNrZ3JvdW5kOiAjNzk4NmNiO1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn0iLCIuYmFja05hdmlnYXRpb25JY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBwYWRkaW5nLXRvcDogMTAlO1xuICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24taGVhZGVyOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZy10b3A6IDIwJTtcbn1cblxuLyogaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjQwLCAyNDAsIDI0MCwgMC41MjEpO1xufSAqL1xuLmVudGVyT1RQSGVhZGVyIHtcbiAgY29sb3I6ICM3OTg2Y2I7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5vdHBUaW1lciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ua2V5SWNvbiB7XG4gIGZvbnQtc2l6ZTogMTUwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZW50ZXJPVFBNZXNzYWdlIHtcbiAgY29sb3I6ICM5MjhkOGQ7XG59XG5cbi5lbnRlck9UUElucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTBlMDtcbiAgY29sb3I6ICMwNzA2MDY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ub3RwU3VibWl0QnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNzk4NmNiO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgZm9udC1zaXplOiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/forget-password/otp-verification/otp-verification.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/forget-password/otp-verification/otp-verification.component.ts ***!
  \**************************************************************************************/
/*! exports provided: OtpVerificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpVerificationComponent", function() { return OtpVerificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var OtpVerificationComponent = /** @class */ (function () {
    function OtpVerificationComponent(navCtrl, formBuilder, router, route) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.timeLeft = 60;
        this.showEnterOTPMessage();
        // Get the route parameter.
        this.route.params.subscribe(function (data) {
            _this.userType = data.userType;
            _this.userId = data.userId;
            _this.otp = data.otp;
        });
        this.otpTimer();
    }
    OtpVerificationComponent.prototype.showEnterOTPMessage = function () {
        this.enterOTPMessage = 'Enter OTP recieved on your email.';
    };
    OtpVerificationComponent.prototype.isOTPCorrect = function (otpData) {
        if (otpData.value.userOTP === this.otp) {
            this.navigateToResetPassword();
        }
        else {
            alert('Incorrect OTP. Please try again.');
        }
    };
    OtpVerificationComponent.prototype.otpTimer = function () {
        var _this = this;
        setInterval(function () {
            if (_this.timeLeft === 0) {
                _this.navigateToForgetPassword();
            }
            else {
                document.getElementById('otpTimer').innerHTML = _this.timeLeft + ' s';
                _this.timeLeft--;
            }
        }, 1000);
    };
    OtpVerificationComponent.prototype.navigateToForgetPassword = function () {
        this.router.navigate(['forget-password']);
    };
    OtpVerificationComponent.prototype.navigateToResetPassword = function () {
        this.router.navigate(['reset-password', this.userType, this.userId]);
    };
    OtpVerificationComponent.prototype.navigate = function () {
        this.navCtrl.back();
    };
    OtpVerificationComponent.prototype.ngOnInit = function () {
        // Reactive form's validation.
        this.otpCheckingForm = this.formBuilder.group({
            userOTP: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    OtpVerificationComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    OtpVerificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-otp-verification',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./otp-verification.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forget-password/otp-verification/otp-verification.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./otp-verification.component.scss */ "./src/app/pages/forget-password/otp-verification/otp-verification.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], OtpVerificationComponent);
    return OtpVerificationComponent;
}());



/***/ }),

/***/ "./src/app/pages/forget-password/otp-verification/otp-verification.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/forget-password/otp-verification/otp-verification.module.ts ***!
  \***********************************************************************************/
/*! exports provided: OtpVerificationComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpVerificationComponentModule", function() { return OtpVerificationComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _otp_verification_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./otp-verification.component */ "./src/app/pages/forget-password/otp-verification/otp-verification.component.ts");







var OtpVerificationComponentModule = /** @class */ (function () {
    function OtpVerificationComponentModule() {
    }
    OtpVerificationComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _otp_verification_component__WEBPACK_IMPORTED_MODULE_6__["OtpVerificationComponent"] }]),
            ],
            declarations: [_otp_verification_component__WEBPACK_IMPORTED_MODULE_6__["OtpVerificationComponent"]],
        })
    ], OtpVerificationComponentModule);
    return OtpVerificationComponentModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-pages-forget-password-otp-verification-otp-verification-module.js.map