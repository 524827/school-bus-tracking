(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["parent-student-details-student-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/parent/student-details/student-details.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/parent/student-details/student-details.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header text-center>\n  <ion-toolbar class=\"background\" color=\"#587FBB\" id=\"toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-icon name=\"arrow-back\" class=\"back\" (click)=\"back()\"></ion-icon>\n    </ion-buttons>\n    <ion-title class=\"title\">Student Information</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngFor=\"let student of studentData\">\n\n  <ion-card>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"5\" class=\"studentimg\">\n            <img class=\"studentImage\" src=\"{{studentImages}}/{{student.student_photo}}\" onError=\"this.src='../../../../assets/default/studentMale.png';\" *ngIf=\"student.student_gender === 'Male'\" />\n            <img class=\"studentImage\" src=\"{{studentImages}}/{{student.student_photo}}\" onError=\"this.src='../../../../assets/default/studentFemale.png';\" *ngIf=\"student.student_gender === 'Female'\" />\n        </ion-col>\n            <ion-col size=\"7\">\n              <div class=\"details\" text-center>\n                <ion-row>\n                  <ion-col size=\"5\">\n                    <ion-label class=\"headings\">Name:</ion-label>\n                  </ion-col>\n                  <ion-col size=\"7\">\n                    <ion-label class=\"fontStyle\">{{student.student_name}}</ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col size=\"4\">\n                    <ion-label class=\"headings\">Std:</ion-label>\n                  </ion-col>\n                  <ion-col size=\"8\">\n                    <ion-label class=\"fontStyle\">{{student.student_class}}</ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col size=\"4\">\n                    <ion-label class=\"headings\">Div:</ion-label>\n                  </ion-col>\n                  <ion-col size=\"8\">\n                    <ion-label class=\"fontStyle\">{{student.student_class_division}}</ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col size=\"5\">\n                    <ion-label class=\"headings\">Gender:</ion-label>\n                  </ion-col>\n                  <ion-col size=\"7\">\n                    <ion-label class=\"fontStyle\">{{student.student_gender}}</ion-label>\n                  </ion-col>\n                </ion-row>\n              </div>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"3\">\n            <ion-label class=\"headings\">Address:</ion-label>\n          </ion-col>\n          <ion-col size=\"9\">\n            <ion-label class=\"fontStyle\">{{student.student_addresses.current_address}}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"3\">\n            <ion-label class=\"headings\">Stop:</ion-label>\n          </ion-col>\n          <ion-col size=\"9\">\n            <ion-label class=\"fontStyle\">{{student.student_stop_location}}</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/login/parent/student-details/student-details-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/login/parent/student-details/student-details-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: StudentDetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentDetailsRoutingModule", function() { return StudentDetailsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var StudentDetailsRoutingModule = /** @class */ (function () {
    function StudentDetailsRoutingModule() {
    }
    StudentDetailsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], StudentDetailsRoutingModule);
    return StudentDetailsRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/login/parent/student-details/student-details.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/login/parent/student-details/student-details.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back {\n  zoom: 2;\n}\n\n#toolbar {\n  --background: #7986cb;\n  color: white;\n}\n\nion-toolbar {\n  background-color: #7d8cd1;\n}\n\n.details {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.headings {\n  color: #7d8cd1;\n}\n\n.studentimg {\n  border: #0e0d0d;\n}\n\nh3 {\n  font-size: 130%;\n  font-weight: bold;\n}\n\nion-card {\n  margin: 20px;\n}\n\n.fontStyle {\n  font-size: 13px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hbWRldi9EZXNrdG9wL2dpdCAvd2hlcmUgaXMgbXkgYnVzL3NyYy9hcHAvcGFnZXMvbG9naW4vcGFyZW50L3N0dWRlbnQtZGV0YWlscy9zdHVkZW50LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL3BhcmVudC9zdHVkZW50LWRldGFpbHMvc3R1ZGVudC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsT0FBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsaUNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBRUUsWUFBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL3BhcmVudC9zdHVkZW50LWRldGFpbHMvc3R1ZGVudC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2sge1xuICB6b29tOiAyLjA7XG59XG5cbiN0b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNzk4NmNiO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNSwgMTQwLCAyMDkpO1xufVxuXG4uZGV0YWlscyB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn1cblxuLmhlYWRpbmdzIHtcbiAgY29sb3I6IHJnYigxMjUsIDE0MCwgMjA5KTtcbn1cblxuLnN0dWRlbnRpbWcge1xuICBib3JkZXI6ICMwZTBkMGQ7XG4gIC8vYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDEzMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tY2FyZCB7XG5cbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4uZm9udFN0eWxlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSIsIi5iYWNrIHtcbiAgem9vbTogMjtcbn1cblxuI3Rvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICM3OTg2Y2I7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2Q4Y2QxO1xufVxuXG4uZGV0YWlscyB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uaGVhZGluZ3Mge1xuICBjb2xvcjogIzdkOGNkMTtcbn1cblxuLnN0dWRlbnRpbWcge1xuICBib3JkZXI6ICMwZTBkMGQ7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAxMzAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5mb250U3R5bGUge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/login/parent/student-details/student-details.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/login/parent/student-details/student-details.component.ts ***!
  \*********************************************************************************/
/*! exports provided: StudentDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentDetailsComponent", function() { return StudentDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _services_parent_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/parent.service */ "./src/app/services/parent.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _services_alert_box_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/alert-box.service */ "./src/app/services/alert-box.service.ts");









var StudentDetailsComponent = /** @class */ (function () {
    /**
     * @description- The constructor has the instances of NavController, StudentService,        ParentService, ActivatedRoute
     * @param navctl - Instance of NavController
     * @param studentService - Instance of StudentService
     * @param parentService - Instance of ParentService
     * @param route - Instance of ActivatedRoute
     */
    function StudentDetailsComponent(navctl, studentService, parentService, route, loaderService, alertBoxService) {
        var _this = this;
        this.navctl = navctl;
        this.studentService = studentService;
        this.parentService = parentService;
        this.route = route;
        this.loaderService = loaderService;
        this.alertBoxService = alertBoxService;
        this.loaderService.loaderPresent('Please wait.', 'crescent');
        this.route.params.subscribe(function (data) {
            _this.parentId = data.parentId;
            _this.getParentData(_this.parentId);
        });
        // Assigning vehicle images folder link of server to vehicleImages member.
        this.studentImages = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].studentImages;
    }
    /**
     * @description - This function fetches the parent data by callin the
     * parent service and fetching the data by parent id and storing all
     * the data in parentDetails variable.
     * @param parentId - Stores the parent id.
     */
    StudentDetailsComponent.prototype.getParentData = function (parentId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var parentDetails;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.parentService.getServerParentDetailsById(parentId)];
                    case 1:
                        parentDetails = _a.sent();
                        console.log(parentDetails);
                        this.subscription = parentDetails.subscribe(function (res) {
                            _this.parentData = res['data'];
                            console.log(_this.parentData);
                            _this.studentId = _this.parentData[0].student_details[0]._id;
                            _this.getStudentData(_this.studentId);
                            console.log(_this.parentData);
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
     * @description - This function is getting the student data by
     *  calling student service and storing all the data in studentDetails variable
     * @param studentId - It stores the id of student.
     */
    StudentDetailsComponent.prototype.getStudentData = function (studentId) {
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
                            console.log(data);
                            console.log(_this.studentData);
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
    StudentDetailsComponent.prototype.ngOnInit = function () { };
    /**
     * @description - The function is used for routing to previous component.
     */
    StudentDetailsComponent.prototype.back = function () {
        this.navctl.pop();
    };
    StudentDetailsComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        // Dismiss the loader.
        this.loaderService.loaderDismiss();
    };
    StudentDetailsComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _services_student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"] },
        { type: _services_parent_service__WEBPACK_IMPORTED_MODULE_4__["ParentService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] },
        { type: _services_alert_box_service__WEBPACK_IMPORTED_MODULE_8__["AlertBoxService"] }
    ]; };
    StudentDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-details',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./student-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/parent/student-details/student-details.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./student-details.component.scss */ "./src/app/pages/login/parent/student-details/student-details.component.scss")).default]
        })
        /**
         * @class - StudentDetailsComponent
         */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"],
            _services_parent_service__WEBPACK_IMPORTED_MODULE_4__["ParentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"],
            _services_alert_box_service__WEBPACK_IMPORTED_MODULE_8__["AlertBoxService"]])
    ], StudentDetailsComponent);
    return StudentDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/parent/student-details/student-details.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/login/parent/student-details/student-details.module.ts ***!
  \******************************************************************************/
/*! exports provided: StudentDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentDetailsModule", function() { return StudentDetailsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _student_details_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./student-details-routing.module */ "./src/app/pages/login/parent/student-details/student-details-routing.module.ts");
/* harmony import */ var _student_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./student-details.component */ "./src/app/pages/login/parent/student-details/student-details.component.ts");








var StudentDetailsModule = /** @class */ (function () {
    function StudentDetailsModule() {
    }
    StudentDetailsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _student_details_routing_module__WEBPACK_IMPORTED_MODULE_6__["StudentDetailsRoutingModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _student_details_component__WEBPACK_IMPORTED_MODULE_7__["StudentDetailsComponent"],
                    },
                ]),
            ],
            declarations: [_student_details_component__WEBPACK_IMPORTED_MODULE_7__["StudentDetailsComponent"]],
        })
    ], StudentDetailsModule);
    return StudentDetailsModule;
}());



/***/ })

}]);
//# sourceMappingURL=parent-student-details-student-details-module.js.map