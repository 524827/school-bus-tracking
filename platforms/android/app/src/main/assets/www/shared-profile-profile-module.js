(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shared-profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/profile/editprofile/editprofile.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/profile/editprofile/editprofile.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header text-center>\n  <ion-toolbar class=\"background\" color=\"#587FBB\" id=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-icon name=\"close\" id=\"closeIcon\" class=\"close\" (click)=\"closeModal()\"></ion-icon>\n    </ion-buttons>\n    <ion-title class=\"title\">Edit Profile</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"checkmark\" class=\"done\" (click)=\"onSubmit(profileForm)\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content *ngIf=\"profileData\">\n  <ion-card class=\"profileCard\">\n    <ion-card-content class=\"content\">\n      <ion-grid>\n        <form [formGroup]=\"profileForm\">\n          <ion-item>\n            <ion-label position=\"floating\">Name</ion-label>\n            <ion-input id=\"fullName\" [(ngModel)]=\"profileData.fullName\" formControlName=\"fullName\"></ion-input>\n          </ion-item>\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validation_messages.fullName\">\n              <div class=\"error-message\"\n                *ngIf=\"profileForm.get('fullName').hasError(validation.type) && (profileForm.get('fullName').dirty || profileForm.get('fullName').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n          <ion-item>\n            <ion-label position=\"floating\">Address</ion-label>\n            <ion-input id=\"address\" [(ngModel)]=\"profileData.address\" formControlName=\"address\"></ion-input>\n          </ion-item>\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validation_messages.address\">\n              <div class=\"error-message\"\n                *ngIf=\"profileForm.get('address').hasError(validation.type) && (profileForm.get('address').dirty || profileForm.get('address').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n          <ion-item>\n            <ion-label position=\"floating\">Mobile Number</ion-label>\n            <ion-input id=\"mobileNumber\" [(ngModel)]=\"profileData.mobileNumber\" formControlName=\"mobileNumber\">\n            </ion-input>\n          </ion-item>\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validation_messages.mobileNumber\">\n              <div class=\"error-message\"\n                *ngIf=\"profileForm.get('mobileNumber').hasError(validation.type) && (profileForm.get('mobileNumber').dirty || profileForm.get('mobileNumber').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n          <ion-item>\n            <ion-label position=\"floating\">Alternate Number</ion-label>\n            <ion-input id=\"alternateNumber\" [(ngModel)]=\"profileData.alternateNumber\" formControlName=\"altNumber\">\n            </ion-input>\n          </ion-item>\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validation_messages.altNumber\">\n              <div class=\"error-message\"\n                *ngIf=\"profileForm.get('altNumber').hasError(validation.type) && (profileForm.get('altNumber').dirty || profileForm.get('altNumber').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n          <ion-item>\n            <ion-label position=\"floating\">Email Address</ion-label>\n            <ion-input id=\"email\" [(ngModel)]=\"profileData.email\" formControlName=\"email\"></ion-input>\n          </ion-item>\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validation_messages.email\">\n              <div class=\"error-message\"\n                *ngIf=\"profileForm.get('email').hasError(validation.type) && (profileForm.get('email').dirty || profileForm.get('email').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n          <ion-item>\n            <ion-label position=\"floating\">Username</ion-label>\n            <ion-input id=\"username\" [(ngModel)]=\"profileData.userName\" formControlName=\"username\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Password</ion-label>\n            <ion-input id=\"password\" formControlName=\"password\"></ion-input>\n          </ion-item>\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validation_messages.passwod\">\n              <div class=\"error-message\"\n                *ngIf=\"profileForm.get('password').hasError(validation.type) && (profileForm.get('password').dirty || profileForm.get('password').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n          <ion-item>\n            <ion-label position=\"floating\">confirm Password</ion-label>\n            <ion-input id=\"confirmPassword\" formControlName=\"confirmPassword\"></ion-input>\n          </ion-item>\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validation_messages.confirmPassword\">\n              <div class=\"error-message\"\n                *ngIf=\"profileForm.get('confirmPassword').hasError(validation.type) && (profileForm.get('confirmPassword').dirty || profileForm.get('confirmPassword').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n         <!--  <ion-button expand=\"block\" color=\"#587FBB\" class=\"submitButton\" type=\"submit\">\n            Update\n          </ion-button> -->\n        </form>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/profile/profile.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/profile/profile.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header text-center>\n  <ion-toolbar class=\"background\" color=\"#587FBB\" id=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <!-- <ion-back-button defaultHref=\"/driver\"></ion-back-button> -->\n      <ion-icon name=\"arrow-back\" class=\"back\" (click)=\"navigateBack()\"></ion-icon>\n    </ion-buttons>\n\n    <ion-title>Profile</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon class=\"edit\" name=\"create\" (click)=\"editProfile(profileData.userId)\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content *ngIf=\"profileData\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"3\"></ion-col>\n      <ion-col size=\"6\">\n        <img class=\"studimg\" id=\"profilePicture\"  (click)=\"presentActionSheet()\" src=\" http://d486468e.ngrok.io/images/userImages/{{profileData.userPhoto}}\"  onError=\"this.src='../../../../assets/default/driver.png';\" *ngIf=\"userType==='driver'\" />\n\n\n        <img class=\"studimg\" id=\"profilePicture\"  (click)=\"presentActionSheet()\" src=\" http://d486468e.ngrok.io/images/userImages/{{profileData.userPhoto}}\"  onError=\"this.src='../../../../assets/default/parents.png';\" *ngIf=\"userType==='parent'\" />\n\n\n        <img class=\"studimg\" id=\"profilePicture\"  (click)=\"presentActionSheet()\" src=\" http://d486468e.ngrok.io/images/userImages/{{profileData.userPhoto}}\"  onError=\"this.src='../../../../assets/default/admin.png';\" *ngIf=\"userType==='busCoordinator'\" />\n\n      </ion-col>\n        <ion-col size=\"3\"></ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class=\"card\">\n    <ion-card class=\"profileCard\">\n      <ion-card-title class=\"cardTitle\">Personal Information</ion-card-title>\n      <ion-card-content class=\"content\">\n        <ion-item>\n          <ion-icon name=\"person\"></ion-icon>\n          <ion-label>{{profileData.userName}}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-icon name=\"home\"></ion-icon>\n          <ion-label>{{profileData.userAddress}}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-icon name=\"call\"></ion-icon>\n          <ion-label>{{profileData.userMobileNumber}}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-icon name=\"mail\"></ion-icon>\n          <ion-label>{{profileData.userEmail}}</ion-label>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n    <!--  <ion-card class=\"profileCard\" id=\"schoolProfileCard\" *ngIf=\"userType != 'busCoordinator' \"> -->\n    <ion-card class=\"profileCard\" id=\"schoolProfileCard\" *ngIf=\"schoolData\">\n      <ion-card-title class=\"cardTitle\">School Information</ion-card-title>\n      <ion-card-content class=\"content\">\n        <ion-item>\n          <ion-icon name=\"school\"></ion-icon>\n          <ion-label>{{schoolData.schoolName}}, {{schoolData.schoolAddress}}\n          </ion-label>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/model/validation.ts":
/*!*************************************!*\
  !*** ./src/app/model/validation.ts ***!
  \*************************************/
/*! exports provided: ValidationMsg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationMsg", function() { return ValidationMsg; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// This class contains validation for edit profile component
var ValidationMsg = /** @class */ (function () {
    function ValidationMsg() {
        this.validation_msg = {
            fullName: [
                { type: 'required', message: 'Username is required.' },
                { type: 'maxlength', message: 'Username cannot be more than 20 characters long.' },
                { type: 'pattern', message: 'Please enter character only.' },
                { type: 'validUsername', message: 'Your username has already been taken.' },
            ],
            address: [{ type: 'required', message: 'Address is required.' }],
            mobileNumber: [
                { type: 'required', message: 'mobile number is required.' },
                { type: 'maxlength', message: 'mobile number cannot be more than 10 digit long.' },
                { type: 'pattern', message: 'Please enter numeric only.' },
            ],
            altNumber: [
                { type: 'required', message: 'Mobile number is required.' },
                { type: 'maxlength', message: 'mobile number cannot be more than 10 digit long.' },
                { type: 'pattern', message: 'Please enter numeric only.' },
            ],
            email: [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Please enter valid email.' },
            ],
            passwod: [{ type: 'required', message: 'Password is required.' }],
            confirmPassword: [
                { type: 'required', message: 'required.' },
                { type: 'equalTo', message: 'password not match.' },
            ],
        };
    }
    return ValidationMsg;
}());



/***/ }),

/***/ "./src/app/pages/shared/profile/editprofile/editprofile.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/shared/profile/editprofile/editprofile.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".close {\n  zoom: 2;\n}\n\n#toolbar {\n  --background: #7986cb;\n  color: white;\n}\n\n.done {\n  float: right;\n  zoom: 1.5;\n  margin-right: 3px;\n}\n\nion-toolbar {\n  background-color: #7d8cd1;\n}\n\n.title {\n  margin-top: 5px;\n  font-size: 25px;\n}\n\n.submitButton {\n  background-color: #7d8cd1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hbWRldi9EZXNrdG9wL2dpdCAvd2hlcmUgaXMgbXkgYnVzL3NyYy9hcHAvcGFnZXMvc2hhcmVkL3Byb2ZpbGUvZWRpdHByb2ZpbGUvZWRpdHByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NoYXJlZC9wcm9maWxlL2VkaXRwcm9maWxlL2VkaXRwcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsT0FBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaGFyZWQvcHJvZmlsZS9lZGl0cHJvZmlsZS9lZGl0cHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbG9zZSB7XG4gIHpvb206IDIuMDtcbn1cblxuI3Rvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICM3OTg2Y2I7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmRvbmUge1xuICBmbG9hdDogcmlnaHQ7XG4gIHpvb206IDEuNTtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNSwgMTQwLCAyMDkpO1xufVxuXG4udGl0bGUge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLnN1Ym1pdEJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZDhjZDFcbn0iLCIuY2xvc2Uge1xuICB6b29tOiAyO1xufVxuXG4jdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzc5ODZjYjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZG9uZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgem9vbTogMS41O1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2Q4Y2QxO1xufVxuXG4udGl0bGUge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLnN1Ym1pdEJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZDhjZDE7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/shared/profile/editprofile/editprofile.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/shared/profile/editprofile/editprofile.component.ts ***!
  \***************************************************************************/
/*! exports provided: EditprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofileComponent", function() { return EditprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../model/validation */ "./src/app/model/validation.ts");
/* harmony import */ var _services_bus_coordinator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/bus-coordinator.service */ "./src/app/services/bus-coordinator.service.ts");
/* harmony import */ var _services_driver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/driver.service */ "./src/app/services/driver.service.ts");
/* harmony import */ var _services_parent_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/parent.service */ "./src/app/services/parent.service.ts");









var EditprofileComponent = /** @class */ (function () {
    function EditprofileComponent(modalCtrl, formBuilder, navCtrl, parentService, driverService, busCoordinatorService, router) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.parentService = parentService;
        this.driverService = driverService;
        this.busCoordinatorService = busCoordinatorService;
        this.router = router;
        this.submitted = false;
        // ValidationMsg() class store validation messages
        this.validation_messages = new _model_validation__WEBPACK_IMPORTED_MODULE_5__["ValidationMsg"]().validation_msg;
        setTimeout(function () {
            console.log(_this.userId, _this.userType);
            _this.getProfileDetails();
        }, 100);
        console.log(this.userId, this.userType);
    }
    EditprofileComponent.prototype.getProfileDetails = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, driverDetails, parentDetails, busCordinatorDetails;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.userType;
                        switch (_a) {
                            case 'driver': return [3 /*break*/, 1];
                            case 'parent': return [3 /*break*/, 3];
                            case 'busCoordinator': return [3 /*break*/, 5];
                        }
                        return [3 /*break*/, 7];
                    case 1: return [4 /*yield*/, this.driverService.getServerDriverDetailsById(this.userId)];
                    case 2:
                        driverDetails = _b.sent();
                        // Subscribe the driverDetails to get data.
                        driverDetails.subscribe(function (res) {
                            console.log(res);
                            var data = res['data'];
                            data = data[0];
                            _this.setValuesToObject(data.driver_name, data.driver_addresses.permanent_address, data.mobile_numbers.primary_number, data.mobile_numbers.secondary_number, data.driver_email, data.driver_username);
                        });
                        return [3 /*break*/, 8];
                    case 3: return [4 /*yield*/, this.parentService.getServerParentDetailsById(this.userId)];
                    case 4:
                        parentDetails = _b.sent();
                        // Subscribe the parentDetails to get data.
                        parentDetails.subscribe(function (res) {
                            console.log(res);
                            var data = res['data'];
                            data = data[0];
                            _this.setValuesToObject(data.parent_name, data.parent_address, data.parent_contact_details.father_mobile_number, data.parent_contact_details.alternate_mobile_number, data.parent_contact_details.parent_email, data.parent_username);
                        });
                        return [3 /*break*/, 8];
                    case 5: return [4 /*yield*/, this.busCoordinatorService.getServerBusCoordinatorDetailsById(this.userId)];
                    case 6:
                        busCordinatorDetails = _b.sent();
                        // Subscribe the busCoordinatorDetails to get data.
                        busCordinatorDetails.subscribe(function (res) {
                            console.log(res);
                            var data = res['data'];
                            data = data[0];
                            _this.setValuesToObject(data.buscoordinator_name, data.buscoordinator_address, data.buscoordinator_mobile_number.primary_number, data.buscoordinator_mobile_number.secondary_number, data.buscoordinator_email_address, data.buscoordinator_username);
                        });
                        return [3 /*break*/, 8];
                    case 7:
                        {
                            return [3 /*break*/, 8];
                        }
                        _b.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    EditprofileComponent.prototype.setValuesToObject = function (fullName, address, mobileNumber, alternateNumber, email, userName) {
        this.profileData = {
            fullName: fullName,
            address: address,
            mobileNumber: mobileNumber,
            alternateNumber: alternateNumber,
            email: email,
            userName: userName,
        };
        console.log(this.profileData);
    };
    /**
     * closeModal()
     * This function close the modal controller
     */
    EditprofileComponent.prototype.closeModal = function () {
        this.modalCtrl.dismiss();
    };
    /**
     * onSubmit()
     * This function updates user information
     */
    EditprofileComponent.prototype.onSubmit = function (profileDetails) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, updatedUserData, driverDetails, updatedUserData, parentDetails, updatedUserData, busCordinatorDetails;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.userType;
                        switch (_a) {
                            case 'driver': return [3 /*break*/, 1];
                            case 'parent': return [3 /*break*/, 3];
                            case 'busCoordinator': return [3 /*break*/, 5];
                        }
                        return [3 /*break*/, 7];
                    case 1:
                        updatedUserData = {
                            driverId: this.userId,
                            driverName: profileDetails.value.fullName,
                            permanentAddress: profileDetails.value.address,
                            secondaryNumber: profileDetails.value.altNumber,
                            primaryNumber: profileDetails.value.mobileNumber,
                            driverEmail: profileDetails.value.email,
                            driverUserName: profileDetails.value.username,
                            driverPassword: profileDetails.value.password,
                        };
                        console.log('Data : ', updatedUserData);
                        return [4 /*yield*/, this.driverService.updateServerDriverAllDetails(updatedUserData)];
                    case 2:
                        driverDetails = _b.sent();
                        // Subscribe the driverDetails to get data.
                        driverDetails.subscribe(function (res) {
                            console.log(res);
                            var data = res['data'];
                            data = data[0];
                            document.getElementById('closeIcon').click();
                        });
                        return [3 /*break*/, 8];
                    case 3:
                        updatedUserData = {
                            parentId: this.userId,
                            parentName: profileDetails.value.fullName,
                            parentAddress: profileDetails.value.address,
                            fatherMobileNumber: profileDetails.value.mobileNumber,
                            alternateMobileNumber: profileDetails.value.altNumber,
                            parentEmail: profileDetails.value.email,
                            parentUserName: profileDetails.value.username,
                            parentPassword: profileDetails.value.password,
                        };
                        return [4 /*yield*/, this.parentService.updateServerParentAllDetails(updatedUserData)];
                    case 4:
                        parentDetails = _b.sent();
                        // Subscribe the parentDetails to get data.
                        parentDetails.subscribe(function (res) {
                            console.log(res);
                            var data = res['data'];
                            data = data[0];
                            document.getElementById('closeIcon').click();
                        });
                        return [3 /*break*/, 8];
                    case 5:
                        updatedUserData = {
                            busCoordinatorId: this.userId,
                            busCoordinatorName: profileDetails.value.fullName,
                            busCoordinatorAddress: profileDetails.value.address,
                            primaryNumber: profileDetails.value.mobileNumber,
                            secondaryNumber: profileDetails.value.altNumber,
                            busCoordinatorEmail: profileDetails.value.email,
                            busCoordinatorUserName: profileDetails.value.username,
                            busCoordinatorPassword: profileDetails.value.password,
                        };
                        return [4 /*yield*/, this.busCoordinatorService.updateServerBusCoordinatorAllDetails(updatedUserData)];
                    case 6:
                        busCordinatorDetails = _b.sent();
                        // Subscribe the busCoordinatorDetails to get data.
                        busCordinatorDetails.subscribe(function (res) {
                            console.log(res);
                            var data = res['data'];
                            data = data[0];
                            document.getElementById('closeIcon').click();
                        });
                        return [3 /*break*/, 8];
                    case 7:
                        {
                            return [3 /*break*/, 8];
                        }
                        _b.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     * @function equalto()
     * This function validate password and confirm password
     * return null if password not match
     */
    EditprofileComponent.prototype.equalto = function (field_name) {
        return function (control) {
            var input = control.value;
            var isValid = control.root.value[field_name] === input;
            if (!isValid) {
                return { equalTo: { isValid: isValid } };
            }
            else {
                return null;
            }
        };
    };
    EditprofileComponent.prototype.ngOnInit = function () {
        this.getProfileDetails();
        console.log(this.userId, this.userType);
        /**
         * Create a custome form control
         */
        this.profileForm = this.formBuilder.group({
            fullName: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-zA-Z ]*'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                ]),
            ],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            mobileNumber: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]+'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                ]),
            ],
            altNumber: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]+'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                ]),
            ],
            email: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                ]),
            ],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.equalto('password')])],
        });
    };
    EditprofileComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _services_parent_service__WEBPACK_IMPORTED_MODULE_8__["ParentService"] },
        { type: _services_driver_service__WEBPACK_IMPORTED_MODULE_7__["DriverService"] },
        { type: _services_bus_coordinator_service__WEBPACK_IMPORTED_MODULE_6__["BusCoordinatorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditprofileComponent.prototype, "userId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditprofileComponent.prototype, "userType", void 0);
    EditprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editprofile',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./editprofile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/profile/editprofile/editprofile.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./editprofile.component.scss */ "./src/app/pages/shared/profile/editprofile/editprofile.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_parent_service__WEBPACK_IMPORTED_MODULE_8__["ParentService"],
            _services_driver_service__WEBPACK_IMPORTED_MODULE_7__["DriverService"],
            _services_bus_coordinator_service__WEBPACK_IMPORTED_MODULE_6__["BusCoordinatorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EditprofileComponent);
    return EditprofileComponent;
}());



/***/ }),

/***/ "./src/app/pages/shared/profile/editprofile/editprofile.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/shared/profile/editprofile/editprofile.module.ts ***!
  \************************************************************************/
/*! exports provided: EditProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileModule", function() { return EditProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _editprofile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editprofile.component */ "./src/app/pages/shared/profile/editprofile/editprofile.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var EditProfileModule = /** @class */ (function () {
    function EditProfileModule() {
    }
    EditProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_editprofile_component__WEBPACK_IMPORTED_MODULE_4__["EditprofileComponent"]],
            entryComponents: [_editprofile_component__WEBPACK_IMPORTED_MODULE_4__["EditprofileComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
        })
    ], EditProfileModule);
    return EditProfileModule;
}());



/***/ }),

/***/ "./src/app/pages/shared/profile/profile.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/shared/profile/profile.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".addphoto {\n  float: right;\n  width: 30px;\n  margin-right: 30px;\n  margin-top: 120px;\n  position: relative;\n}\n\n.studimg {\n  margin-top: 5%;\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  position: absolute;\n}\n\n#toolbar {\n  --background: #7986cb;\n  color: white;\n}\n\n.back {\n  font-size: 35px;\n}\n\n.card {\n  margin-top: 170px;\n}\n\n.card .profileCard {\n  background-color: white;\n}\n\n.card .profileCard .cardTitle {\n  font-family: \"Roboto\", sans-serif;\n  margin-left: 50px;\n  margin-top: 20px;\n}\n\n.card .profileCard .content {\n  margin-top: 0px;\n}\n\n.card .profileCard ion-label {\n  font-family: \"Roboto\", sans-serif;\n  padding: 10px;\n  white-space: pre-line !important;\n}\n\nion-toolbar {\n  background-color: #7d8cd1;\n}\n\nion-toolbar .edit {\n  zoom: 1.5;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hbWRldi9EZXNrdG9wL2dpdCAvd2hlcmUgaXMgbXkgYnVzL3NyYy9hcHAvcGFnZXMvc2hhcmVkL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2hhcmVkL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSx1QkFBQTtBQ0NKOztBREVJO0VBQ0UsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQU47O0FER0k7RUFDRSxlQUFBO0FDRE47O0FESUk7RUFDRSxpQ0FBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtBQ0ZOOztBRE9BO0VBQ0UseUJBQUE7QUNKRjs7QURNRTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2hhcmVkL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRwaG90byB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgbWFyZ2luLXRvcDogMTIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnN0dWRpbWcge1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuI3Rvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICM3OTg2Y2I7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJhY2sge1xuICBmb250LXNpemU6IDM1cHg7XG59XG5cbi5jYXJkIHtcbiAgbWFyZ2luLXRvcDogMTcwcHg7XG5cbiAgLnByb2ZpbGVDYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuXG4gICAgLmNhcmRUaXRsZSB7XG4gICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuXG4gICAgLmNvbnRlbnQge1xuICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIH1cblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbmlvbi10b29sYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNSwgMTQwLCAyMDkpO1xuXG4gIC5lZGl0IHtcbiAgICB6b29tOiAxLjU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG59IiwiLmFkZHBob3RvIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiAxMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc3R1ZGltZyB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4jdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzc5ODZjYjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYmFjayB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuLmNhcmQge1xuICBtYXJnaW4tdG9wOiAxNzBweDtcbn1cbi5jYXJkIC5wcm9maWxlQ2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmNhcmQgLnByb2ZpbGVDYXJkIC5jYXJkVGl0bGUge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uY2FyZCAucHJvZmlsZUNhcmQgLmNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG4uY2FyZCAucHJvZmlsZUNhcmQgaW9uLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZSAhaW1wb3J0YW50O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZDhjZDE7XG59XG5pb24tdG9vbGJhciAuZWRpdCB7XG4gIHpvb206IDEuNTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/shared/profile/profile.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/shared/profile/profile.component.ts ***!
  \***********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editprofile/editprofile.component */ "./src/app/pages/shared/profile/editprofile/editprofile.component.ts");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _services_alert_box_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/alert-box.service */ "./src/app/services/alert-box.service.ts");
/* harmony import */ var _services_bus_coordinator_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/bus-coordinator.service */ "./src/app/services/bus-coordinator.service.ts");
/* harmony import */ var _services_driver_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/driver.service */ "./src/app/services/driver.service.ts");
/* harmony import */ var _services_parent_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../services/parent.service */ "./src/app/services/parent.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");


















var ProfileComponent = /** @class */ (function () {
    /**
     * @description - This constructor initializes the instances and access the route parameters.
     * @param {ModalController} modalController - Instance of the ModalController.
     * @param {NavController} navCtrl - Instance of the NavController.
     * @param {Router} router - Instance of the Router.
     * @param {ActivatedRoute} route - Instance of the ActivatedRoute.
     * @param {BusCoordinatorService} busCoordinatorService - Instance of the BusCoordinatorService.
     * @param {DriverService} driverService - Instance of the DriverService.
     * @param {ParentService} parentService - Instance of the ParentService.
     *  @param {FileTransfer} transfer - Instance of the FileTransfer.
     *  @param {Camera} camera - Instance of the Camera.
     *  @param {AlertService} alertService - Instance of the AlertService.
     *  @param {ActionSheetController} actionSheetController - Instance of the ActionSheetController.
     *  @param {Crop} crop - Instance of the Crop.
     * @param {Platform} platform - Instance of the Platform.
     * @param {StorageService} storageService - Instance of the storage service.
     */
    function ProfileComponent(modalController, navCtrl, router, route, busCoordinatorService, driverService, parentService, transfer, camera, loaderService, actionSheetController, crop, platform, alertBoxService, storageService) {
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.router = router;
        this.route = route;
        this.busCoordinatorService = busCoordinatorService;
        this.driverService = driverService;
        this.parentService = parentService;
        this.transfer = transfer;
        this.camera = camera;
        this.loaderService = loaderService;
        this.actionSheetController = actionSheetController;
        this.crop = crop;
        this.platform = platform;
        this.alertBoxService = alertBoxService;
        this.storageService = storageService;
    }
    ProfileComponent.prototype.editProfile = function (userId) {
        this.presentModal(userId);
    };
    // Presenting model
    ProfileComponent.prototype.presentModal = function (userId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_8__["EditprofileComponent"],
                            componentProps: { userId: userId, userType: this.userType },
                        })];
                    case 1:
                        modal = _a.sent();
                        modal
                            .onDidDismiss()
                            .then(function () {
                            _this.refreshUserData();
                        })
                            .catch();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * @description - get the data of user from the server according to user type.
     * @function - getUserProfileData
     *
     */
    ProfileComponent.prototype.getUserProfileData = function (userType) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log(userType);
                // Switch case to navigate according to user's type.
                switch (this.userType) {
                    // When user type is driver.
                    case 'driver': {
                        this.getDriverDetails();
                        break;
                    }
                    // When user type is parent.
                    case 'parent': {
                        this.getParentDetails();
                        break;
                    }
                    // When user type is busCoordinator.
                    case 'busCoordinator': {
                        /* const schoolProfileCardElement = <HTMLElement>document.getElementById('schoolProfileCard');
                        schoolProfileCardElement.setAttribute('style', 'display: none;'); */
                        this.getBusCoordinatorDetails();
                        break;
                    }
                    // Default
                    default: {
                        break;
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    ProfileComponent.prototype.setPersonalData = function (userId, userName, userAddress, userMobileNumber, userEmail, userPhoto) {
        this.profileData = {
            userId: userId,
            userName: userName,
            userAddress: userAddress,
            userMobileNumber: userMobileNumber,
            userEmail: userEmail,
            userPhoto: userPhoto,
        };
    };
    ProfileComponent.prototype.setSchoolData = function (schoolName, schoolAddress) {
        this.schoolData = {
            schoolName: schoolName,
            schoolAddress: schoolAddress,
        };
    };
    /**
     * @description - This function calls the driver's service and fetches the data.
     *  This function also sets the user's profile picture.
     * @function - getDriverDetails
     */
    ProfileComponent.prototype.getDriverDetails = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var driverDetails;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.driverService.getServerDriverDetailsById(this.userId)];
                    case 1:
                        driverDetails = _a.sent();
                        // Subscribe the driverDetails to get data.
                        this.subscription = driverDetails.subscribe(function (res) {
                            console.log(res);
                            var data = res['data'];
                            console.log(data);
                            // Stores the logged in driver's id.
                            _this.driverData = data[0];
                            _this.setPersonalData(_this.driverData._id, _this.driverData.driver_name, _this.driverData.driver_addresses['permanent_address'], _this.driverData.mobile_numbers['primary_number'], _this.driverData.driver_email, _this.driverData.driver_documents['photo']);
                            _this.setSchoolData(_this.driverData.school_details.school_name, _this.driverData.school_details.school_address);
                            _this.storageService
                                .getFromNativeStorage()
                                .then(function (item) {
                                // Storing user's data into native storage of device.
                                _this.storageService.setNativeStorage(item.userName, item.userPassword, item.userType, _this.driverData.driver_documents.photo);
                            })
                                .catch(function (err) {
                                console.error('Error : ', err);
                            });
                            /*  // Getting profile picture element for setting src attribute.
                            const profilePictureElement = document.getElementById('profilePicture') as HTMLImageElement;
                            if (profilePictureElement != null) {
                              // Setting profile picture using src attribute.
                              profilePictureElement.src = `${environment.userImages}/this.profileData.driver_photo`;
                            } */
                            // Dismiss the loader.
                            _this.loaderService.loaderDismiss();
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
     * @description - This function calls the parent's service and fetches the data.
     *  This function also sets the user's profile picture.
     * @function - getParentDetails
     */
    ProfileComponent.prototype.getParentDetails = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var parentDetails;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.parentService.getServerParentDetailsById(this.userId)];
                    case 1:
                        parentDetails = _a.sent();
                        // Subscribe the parentDetails to get data.
                        this.subscription = parentDetails.subscribe(function (res) {
                            console.log(res);
                            var data = res['data'];
                            // Stores the logged in parent's id.
                            _this.parentData = data[0];
                            // Calling setPersonalData method for setting profileData object.
                            _this.setPersonalData(_this.parentData._id, _this.parentData.parent_name, _this.parentData.parent_address, _this.parentData.parent_contact_details.father_mobile_number, _this.parentData.parent_contact_details.parent_email, _this.parentData.parent_photo);
                            _this.storageService
                                .getFromNativeStorage()
                                .then(function (item) {
                                // Storing user's data into native storage of device.
                                _this.storageService.setNativeStorage(item.userName, item.userPassword, item.userType, _this.parentData.parent_photo);
                            })
                                .catch(function (err) {
                                console.error('Error : ', err);
                            });
                            /* // Getting profile picture element for setting src attribute.
                            const profilePictureElement = document.getElementById('profilePicture') as HTMLImageElement;
                            if (profilePictureElement != null) {
                              // Setting profile picture using src attribute.
                              profilePictureElement.src = `${environment.userImages}/this.profileData.parent_photo`;
                            } */
                            // Dismiss the loader.
                            _this.loaderService.loaderDismiss();
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
     * @description - This function calls the bus coordinator's service and fetches the data.
     *  This function also sets the user's profile picture.
     * @function - getBusCoordinatorDetails
     */
    ProfileComponent.prototype.getBusCoordinatorDetails = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var busCordinatorDetails;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //  this.setSchoolData('', '');
                        console.log(this.userId);
                        return [4 /*yield*/, this.busCoordinatorService.getServerBusCoordinatorDetailsById(this.userId)];
                    case 1:
                        busCordinatorDetails = _a.sent();
                        // Subscribe the busCoordinatorDetails to get data.
                        this.subscription = busCordinatorDetails.subscribe(function (res) {
                            console.log(res);
                            var data = res['data'];
                            // Stores the busCoordinator's data in to busCoordinatorData member.
                            _this.busCoordinatorData = data[0];
                            // Calling setPersonalData method for setting profileData object.
                            _this.setPersonalData(_this.busCoordinatorData._id, _this.busCoordinatorData.buscoordinator_name, _this.busCoordinatorData.buscoordinator_address, _this.busCoordinatorData.buscoordinator_mobile_number.primary_number, _this.busCoordinatorData.buscoordinator_email_address, _this.busCoordinatorData.buscoordinator_photo);
                            _this.storageService
                                .getFromNativeStorage()
                                .then(function (item) {
                                // Storing user's data into native storage of device.
                                _this.storageService.setNativeStorage(item.userName, item.userPassword, item.userType, _this.busCoordinatorData.buscoordinator_photo);
                            })
                                .catch(function (err) {
                                console.error('Error : ', err);
                            });
                            /*  // Getting profile picture element for setting src attribute.
                            const profilePictureElement = document.getElementById('profilePicture') as HTMLImageElement;
                    
                            if (profilePictureElement != null) {
                              // Setting profile picture using src attribute.
                              profilePictureElement.src = `${
                                environment.busCoordinatorImages
                              }/this.profileData.buscoordinator_photo`;
                            } */
                            // Dismiss the loader.
                            _this.loaderService.loaderDismiss();
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
     * @description - This function presents action sheet and calls the function according to selected option.
     * @function - presentActionSheet
     */
    ProfileComponent.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            // Setting the header of the action sheet.
                            header: 'Choose options',
                            // Creating array of buttons.
                            buttons: [
                                {
                                    text: 'Take a Picture',
                                    icon: 'camera',
                                    handler: function () {
                                        // Setting CameraOptions.
                                        var option = {
                                            allowEdit: true,
                                            sourceType: _this.camera.PictureSourceType.CAMERA,
                                            destinationType: _this.camera.DestinationType.FILE_URI,
                                        };
                                        // Calling getPicture method.
                                        _this.getCameraPicture(option);
                                    },
                                },
                                {
                                    text: 'Select From Gallery',
                                    icon: 'images',
                                    handler: function () {
                                        // Stting options.
                                        var option = {
                                            allowEdit: true,
                                            sourceType: _this.camera.PictureSourceType.PHOTOLIBRARY,
                                            destinationType: _this.camera.DestinationType.FILE_URI,
                                        };
                                        // Calling getPicture method.
                                        _this.getGalleryPicture(option);
                                    },
                                },
                                {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    },
                                },
                            ],
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        // Presenting action sheet to user.
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        // Presenting action sheet to user.
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @description - This function opens the camera or gallery.
     * @function - getPicture
     * @param option - This parameter stores the information related with camera.
     */
    ProfileComponent.prototype.getCameraPicture = function (option) {
        var _this = this;
        // Calling getPicure method of camera.
        this.camera.getPicture(option).then(function (imageData) {
            // Calling profilePictureUploader method.
            _this.profilePictureUploader(imageData);
        });
    };
    /**
     * @description - This function opens the camera or gallery.
     * @function - getPicture
     * @param option - This parameter stores the information related with camera.
     */
    ProfileComponent.prototype.getGalleryPicture = function (option) {
        var _this = this;
        // Calling getPicure method of camera.
        this.camera.getPicture(option).then(function (imageData) {
            var croppedImage = _this.crop.crop(imageData, { quality: 100 }).then(function (newImageData) {
                console.log(newImageData);
                // Calling profilePictureUploader method.
                _this.profilePictureUploader(newImageData);
            });
        }, function (err) {
            console.error(err);
            // Handle error
        });
    };
    /**
     * @description - This function uploads the profile picture to server.
     * @function - profilePictureUploader
     * @param imageData - It stores the image related data including path of the image.
     */
    ProfileComponent.prototype.profilePictureUploader = function (imageData) {
        var _this = this;
        // Assigning imageData to imageUrl member.
        this.imageUrl = imageData;
        // Creating file transfer object.
        var fileTransfer = this.transfer.create();
        // Creating and assigning options .
        var options = {
            fileKey: 'file',
            fileName: imageData.substr(imageData.lastIndexOf('/') + 1),
            headers: {},
            params: {
                userType: this.userType,
                userId: this.userId,
            },
        };
        // Uploading the file to the server.
        fileTransfer
            .upload(
        /* Image path */ this.imageUrl, 
        /* Server url */ encodeURI(_environments_environment__WEBPACK_IMPORTED_MODULE_14__["serverUrl"] + "/api/images/userImages"), options)
            .then(function (data) {
            _this.refreshUserData();
        }, function (err) { });
    };
    /**
     * @description - This function navigate the page back.
     */
    ProfileComponent.prototype.navigateBack = function () {
        // Calling  back method of navCtrl.
        this.navCtrl.back();
    };
    ProfileComponent.prototype.refreshUserData = function () {
        if (this.userType === 'driver') {
            // Calling getDriverDetails method.
            this.getDriverDetails();
        }
        else if (this.userType === 'parent') {
            // Calling getParentDetails method.
            this.getParentDetails();
        }
        else {
            // Calling getBusCoordinatorDetails method.
            this.getBusCoordinatorDetails();
        }
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get the route parameters.
        this.route.params.subscribe(function (data) {
            _this.userType = data.userType;
            _this.userId = data.userId;
            // Calling getUserProfileData();
            _this.loaderService.loaderPresent('Please wait.', 'crescent');
            _this.getUserProfileData(_this.userType);
        });
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        // Dismiss the loader.
        this.loaderService.loaderDismiss();
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _services_bus_coordinator_service__WEBPACK_IMPORTED_MODULE_11__["BusCoordinatorService"] },
        { type: _services_driver_service__WEBPACK_IMPORTED_MODULE_12__["DriverService"] },
        { type: _services_parent_service__WEBPACK_IMPORTED_MODULE_13__["ParentService"] },
        { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"] },
        { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
        { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_5__["Crop"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _services_alert_box_service__WEBPACK_IMPORTED_MODULE_10__["AlertBoxService"] },
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] }
    ]; };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared/profile/profile.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/pages/shared/profile/profile.component.scss")).default]
        })
        /**
         * @description - This class provides the profile details of the user.
         * @class - ProfileComponent
         */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_bus_coordinator_service__WEBPACK_IMPORTED_MODULE_11__["BusCoordinatorService"],
            _services_driver_service__WEBPACK_IMPORTED_MODULE_12__["DriverService"],
            _services_parent_service__WEBPACK_IMPORTED_MODULE_13__["ParentService"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"],
            _services_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_5__["Crop"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _services_alert_box_service__WEBPACK_IMPORTED_MODULE_10__["AlertBoxService"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/shared/profile/profile.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/shared/profile/profile.module.ts ***!
  \********************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile.component */ "./src/app/pages/shared/profile/profile.component.ts");
/* harmony import */ var _editprofile_editprofile_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editprofile/editprofile.module */ "./src/app/pages/shared/profile/editprofile/editprofile.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"]],
            entryComponents: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _editprofile_editprofile_module__WEBPACK_IMPORTED_MODULE_6__["EditProfileModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
                    },
                ]),
            ],
            providers: [],
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ })

}]);
//# sourceMappingURL=shared-profile-profile-module.js.map