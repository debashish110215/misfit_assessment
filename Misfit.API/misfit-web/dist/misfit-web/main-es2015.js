(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-sm-12\">\n    <div class=\"row\">\n            <div class=\"col-6\">\n                    <p>Filter by Date Range</p>\n                    <mat-form-field>\n                        <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" >\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker (dateChange)=\"onStartDate($event.target.value)\" (dateInput)=\"onStartDate($event.target.value)\"></mat-datepicker>\n                      </mat-form-field>\n                    \n                      <mat-form-field>\n                        <input matInput [matDatepicker]=\"picker2\" placeholder=\"Choose a date\">\n                        <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker2 (dateChange)=\"onEndDate($event.target.value)\" (dateInput)=\"onEndDate($event.target.value)\"></mat-datepicker>\n                      </mat-form-field>\n            </div>\n            <div class=\"col-6\">\n                    <p>Filter by User Name</p>\n                    <mat-form-field>\n                    <input matInput (blur)=\"applyUserNameFilter($event.target.value)\" placeholder=\"User Name\">\n                    </mat-form-field>\n            </div>\n    </div>\n   \n</div>\n<div class=\"col-sm-12\">\n    <div class=\"row\">\n            <button mat-raised-button color=\"primary\" (click)=\"createCalculationDialog()\">Add</button>\n            <hr>\n    </div>\n</div>\n<table mat-table  [dataSource]=\"dataSource\" matSort (matSortChange)=\"sortData($event)\" class=\"mat-elevation-z8\">\n    <ng-container matColumnDef=\"createdOn\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header=\"createdOn\"> Date of Calculation (dd/MM/yyyy) </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.createdOn| date:\"dd/MM/yyyy 'at' h:mma\"}} </td>\n    </ng-container>\n  \n    <ng-container matColumnDef=\"userName\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header=\"userName\"> User Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.userName}} </td>\n    </ng-container>\n  \n    <ng-container matColumnDef=\"num1\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header=\"num1\"> Num1 </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.num1}} </td>\n    </ng-container>\n  \n    <ng-container matColumnDef=\"num2\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header=\"num2\"> Num2 </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.num2}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"sum\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header=\"sum\"> Sum </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.sum}} </td>\n      </ng-container>\n  \n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator [length]=\"length\"\n              [pageSize]=\"pageSize\"\n              [pageSizeOptions]=\"pageSizeOptions\"\n              showFirstLastButtons\n              (page)=\"pageEvent = getServerData($event)\">\n</mat-paginator>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-create-calculation/modal-create-calculation.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal-create-calculation/modal-create-calculation.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<h1 mat-dialog-title>Make your Calcuation & Store</h1>\n\n<form [formGroup]=\"calForm\" autocomplete=\"off\" novalidate (ngSubmit)=\"createCal(calForm.value)\" fxLayout=\"column wrap\"\n      fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n    <div mat-dialog-content>\n            <input type=\"hidden\" formControlName=\"userId\" id=\"userId\">\n                \n            <mat-form-field>\n                <input matInput type=\"text\" placeholder=\"User name\" (blur)=\"checkUserExistence($event.target.value)\" formControlName=\"name\" id=\"name\">\n                <mat-error *ngIf=\"hasError('name', 'required')\">User Name is required</mat-error>\n                <mat-error *ngIf=\"hasError('name', 'maxlength')\">You have more than 60 characters</mat-error>\n                <mat-error *ngIf=\"isUserExists\">The User is previously stored. in that case the calculation will be associated with the user. otherwise, please change the user name.</mat-error>\n            </mat-form-field>\n                \n            <mat-form-field>\n                <input matInput type=\"number\" placeholder=\"Number 1\" formControlName=\"num1\">\n                <mat-error *ngIf=\"hasError('num1', 'required')\">Num1 is required</mat-error>\n                <mat-error *ngIf=\"hasError('num1', 'maxlength')\">You have more than 100 characters</mat-error>\n                <!-- <mat-error *ngIf=\"hasError('num1', 'pattern')\">pattern</mat-error> -->\n            </mat-form-field>\n\n            <mat-form-field>\n                <input matInput type=\"number\" placeholder=\"Number 2\" formControlName=\"num2\">\n                <mat-error *ngIf=\"hasError('num2', 'required')\">Num2 is required</mat-error>\n                <mat-error *ngIf=\"hasError('num2', 'maxlength')\">You have more than 100 characters</mat-error>\n                <!-- <mat-error *ngIf=\"hasError('num2', 'pattern')\">pattern</mat-error> -->\n                </mat-form-field>\n            <mat-form-field >\n                <input matInput type=\"text\" [readonly]=\"isCalculated\" placeholder=\"Sum (readonly)\" formControlName=\"sum\">\n            </mat-form-field>\n    </div>\n    <!-- <div mat-dialog-actions>\n    <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n    <button mat-button [mat-dialog-close]=\"\" cdkFocusInitial>Ok</button>\n    </div> -->\n    \n<mat-dialog-actions >\n        <button mat-button color=\"primary\" [disabled]=\"!calForm.valid\">Calculate & Submit</button>\n        <button mat-button color=\"warn\" (click)=\"onNoClick()\">Close Calculation</button>\n</mat-dialog-actions>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/snack-bar/snack-bar.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/snack-bar/snack-bar.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span style=\"color: green\" *ngIf=\"data\">\n        Successfully Calculated and stored. :)\n      </span>\n      <span style=\"color: red\" *ngIf=\"!data\">\n            Un-successful to Calculate and store. :(\n          </span>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n    width: 100%;\r\n  }\r\n  \r\n  th.mat-sort-header-sorted {\r\n    color: black;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICB0aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/user-service */ "./src/app/services/user-service.ts");
/* harmony import */ var _models_userListingProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/userListingProperty */ "./src/app/models/userListingProperty.ts");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _modal_create_calculation_modal_create_calculation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal-create-calculation/modal-create-calculation.component */ "./src/app/modal-create-calculation/modal-create-calculation.component.ts");









let AppComponent = class AppComponent {
    constructor(userService, dialog) {
        this.userService = userService;
        this.dialog = dialog;
        this.title = 'misfit-web';
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.userCalcultaionList);
        this.displayedColumns = ['createdOn', 'userName', 'num1', 'num2', 'sum'];
        this.listingProperty = new _models_userListingProperty__WEBPACK_IMPORTED_MODULE_3__["UserListProperty"](1, 10);
        this.length = 0;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
    }
    setPageSizeOptions(setPageSizeOptionsInput) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
    ngOnInit() {
        this.getUserCalculations();
        this.dataSource.sort = this.sort;
    }
    getUserCalculations() {
        this.userService.getAllForList(this.listingProperty).subscribe(data => {
            this.userCalcultaionList = data.data.tableData;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.userCalcultaionList);
            this.length = data.data.totalRows;
            // this.sortedData = this.userCalcultaionList.slice();
            // this.dataSource.paginator = this.paginator;
            // console.log(this.userCalcultaionList);
        });
    }
    // sortData(sort: Sort) {
    //   const data = this.userCalcultaionList.slice();
    //   if (!sort.active || sort.direction === '') {
    //     this.sortedData = data;
    //     return;
    //   }
    //   this.sortedData = data.sort((a, b) => {
    //     const isAsc = sort.direction === 'asc';
    //     switch (sort.active) {
    //       case 'userName': return this.compare(a.userName, b.userName, isAsc);
    //       case 'createdOn': return this.compare(a.createdOn, b.createdOn, isAsc);
    //       case 'num1': return this.compare(a.num1, b.num1, isAsc);
    //       case 'num2': return this.compare(a.num2, b.num2, isAsc);
    //       case 'sum': return this.compare(a.sum, b.sum, isAsc);
    //       default: return  this.compare(a.createdOn, b.createdOn, isAsc);
    //     }
    //   });
    // this.dataSource = new MatTableDataSource(this.sortedData);
    // this.dataSource.paginator = this.paginator;
    // }
    compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
    applyUserNameFilter(filterValue) {
        // this.dataSource.filter = filterValue.trim().toLowerCase();
        this.listingProperty.userName = filterValue;
        this.getUserCalculations();
    }
    onStartDate(event) {
        this.listingProperty.startDate = event;
        this.getUserCalculations();
    }
    onEndDate(event) {
        this.listingProperty.endDate = event;
        this.getUserCalculations();
    }
    getServerData(event) {
        this.listingProperty.pageNumber = event.pageIndex + 1;
        this.listingProperty.pageSize = event.pageSize;
        this.getUserCalculations();
    }
    createCalculationDialog() {
        const dialogRef = this.dialog.open(_modal_create_calculation_modal_create_calculation_component__WEBPACK_IMPORTED_MODULE_8__["ModalCreateCalculationComponent"], {
            width: '800px',
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.getUserCalculations();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true })
], AppComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], { static: true })
], AppComponent.prototype, "paginator", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _modal_create_calculation_modal_create_calculation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modal-create-calculation/modal-create-calculation.component */ "./src/app/modal-create-calculation/modal-create-calculation.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./snack-bar/snack-bar.component */ "./src/app/snack-bar/snack-bar.component.ts");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _modal_create_calculation_modal_create_calculation_component__WEBPACK_IMPORTED_MODULE_15__["ModalCreateCalculationComponent"],
            _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_17__["SnackBarComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"]
        ],
        providers: [],
        entryComponents: [_modal_create_calculation_modal_create_calculation_component__WEBPACK_IMPORTED_MODULE_15__["ModalCreateCalculationComponent"], _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_17__["SnackBarComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/common/GlobalConst.ts":
/*!***************************************!*\
  !*** ./src/app/common/GlobalConst.ts ***!
  \***************************************/
/*! exports provided: GlobalVariable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalVariable", function() { return GlobalVariable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json',
//     'Authorization': 'my-auth-token'
//   })
// };
const GlobalVariable = Object.freeze({
    BASE_API_URL: 'https://localhost:44374/api/',
    httpOptions: {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'No-Auth': 'False'
            // 'Authorization': 'my-auth-token'
        })
        // new HttpHeaders('Content-Type': 'multipart/form-data');
        // .append( ).append('Accept', 'application/json')
        // const headers = new Httpeaders();
        // headers.append('Content-Type', 'multipart/form-data');
        // headers.append('Accept', 'application/json');
        // 'Content-Type', 'application/json'
    }
});


/***/ }),

/***/ "./src/app/modal-create-calculation/modal-create-calculation.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/modal-create-calculation/modal-create-calculation.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\nmat-form-field{\r\n    width: 400px;\r\n}\r\nmat-card-title{\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwtY3JlYXRlLWNhbGN1bGF0aW9uL21vZGFsLWNyZWF0ZS1jYWxjdWxhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL21vZGFsLWNyZWF0ZS1jYWxjdWxhdGlvbi9tb2RhbC1jcmVhdGUtY2FsY3VsYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5tYXQtZm9ybS1maWVsZHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxufVxyXG5tYXQtY2FyZC10aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/modal-create-calculation/modal-create-calculation.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modal-create-calculation/modal-create-calculation.component.ts ***!
  \********************************************************************************/
/*! exports provided: ModalCreateCalculationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCreateCalculationComponent", function() { return ModalCreateCalculationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user-service */ "./src/app/services/user-service.ts");
/* harmony import */ var _services_calculation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/calculation-service */ "./src/app/services/calculation-service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../snack-bar/snack-bar.component */ "./src/app/snack-bar/snack-bar.component.ts");








let ModalCreateCalculationComponent = class ModalCreateCalculationComponent {
    constructor(userService, calculationService, snackBar, dialogRef, data) {
        this.userService = userService;
        this.calculationService = calculationService;
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.data = data;
        this.isCalculated = true;
        this.isUserExists = false;
        this.submitted = false;
        this.hasError = (controlName, errorName) => {
            return this.calForm.controls[controlName].hasError(errorName);
        };
        this.onCancel = () => {
        };
        this.createCal = (calFormValue) => {
            if (this.calForm.valid) {
                this.executeOwnerCreation(calFormValue);
            }
        };
        this.executeOwnerCreation = (calFormValue) => {
            this.submitted = true;
            const userCal = {
                userId: calFormValue.userId,
                userName: calFormValue.name,
                num1: calFormValue.num1,
                num2: calFormValue.num2,
                sum: ''
            };
            this.userService.postModel(userCal).subscribe(data => {
                this.calForm.controls.sum.setValue(data.data.sum);
                if (data.success) {
                    this.snackBar.openFromComponent(_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_7__["SnackBarComponent"], {
                        duration: 5 * 1000,
                        data: data.success
                    });
                }
            });
        };
    }
    ngOnInit() {
        this.calForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(60)]),
            num1: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(100)]),
            num2: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(100),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('/\d*(\.d*)?/g')]),
            sum: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('0')
        });
    }
    checkUserExistence(value) {
        this.userService.getUserByName(value).subscribe(data => {
            if (data.data !== null) {
                this.isUserExists = true;
                this.calForm.controls.userId.setValue(data.data.id);
            }
        });
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
ModalCreateCalculationComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _services_calculation_service__WEBPACK_IMPORTED_MODULE_5__["CalculationService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ModalCreateCalculationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-create-calculation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal-create-calculation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-create-calculation/modal-create-calculation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal-create-calculation.component.css */ "./src/app/modal-create-calculation/modal-create-calculation.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ModalCreateCalculationComponent);



/***/ }),

/***/ "./src/app/models/userListingProperty.ts":
/*!***********************************************!*\
  !*** ./src/app/models/userListingProperty.ts ***!
  \***********************************************/
/*! exports provided: UserListProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListProperty", function() { return UserListProperty; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class UserListProperty {
    constructor(pageNo, pageSize) {
        this.pageNumber = pageNo;
        this.pageSize = pageSize;
    }
}


/***/ }),

/***/ "./src/app/services/calculation-service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/calculation-service.ts ***!
  \*************************************************/
/*! exports provided: CalculationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculationService", function() { return CalculationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _common_GlobalConst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/GlobalConst */ "./src/app/common/GlobalConst.ts");




let CalculationService = class CalculationService {
    constructor(http) {
        this.http = http;
        this.uri = 'api/calculation';
    }
    getSum(model) {
        return this.http.post(`${this.uri}` + '/sum', model, _common_GlobalConst__WEBPACK_IMPORTED_MODULE_3__["GlobalVariable"].httpOptions);
    }
};
CalculationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CalculationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CalculationService);



/***/ }),

/***/ "./src/app/services/user-service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user-service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _common_GlobalConst__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/GlobalConst */ "./src/app/common/GlobalConst.ts");





let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.uri = 'api/user';
    }
    getUserByName(userName) {
        return this.http.get(this.uri + '/getuserbyname?userName=' + userName);
    }
    getAll() {
        return this.http.get(this.uri);
    }
    getAllForList(pagingModel) {
        return this.http.post(this.uri + '/getforlist', pagingModel, _common_GlobalConst__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].httpOptions);
    }
    postModel(model) {
        return this.http.post(`${this.uri}`, model, _common_GlobalConst__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].httpOptions);
        // return this.http.post<any>(this.uri, model);
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            // this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/snack-bar/snack-bar.component.css":
/*!***************************************************!*\
  !*** ./src/app/snack-bar/snack-bar.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NuYWNrLWJhci9zbmFjay1iYXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/snack-bar/snack-bar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/snack-bar/snack-bar.component.ts ***!
  \**************************************************/
/*! exports provided: SnackBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackBarComponent", function() { return SnackBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let SnackBarComponent = class SnackBarComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
    }
};
SnackBarComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_SNACK_BAR_DATA"],] }] }
];
SnackBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-snack-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./snack-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/snack-bar/snack-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./snack-bar.component.css */ "./src/app/snack-bar/snack-bar.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_SNACK_BAR_DATA"]))
], SnackBarComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Deba_P\Projects\Misfit.API\Misfit.API\misfit-web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map