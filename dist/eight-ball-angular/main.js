(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".App {\n    text-align: center;\n    background-color: #282c34;\n    min-height: 100vh;\n    flex-direction: column;\n    font-size: calc(10px + 2vmin);\n    color: #fff\n}\n\n.App {\n    display: flex;\n    align-items: center;\n    justify-content: center\n}\n\n/*# sourceMappingURL=main.6a1afec2.chunk.css.map */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsdUJBQXVCO0NBQzFCOztBQUdELG1EQUFtRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkFwcCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODJjMzQ7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb250LXNpemU6IGNhbGMoMTBweCArIDJ2bWluKTtcbiAgICBjb2xvcjogI2ZmZlxufVxuXG4uQXBwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcbn1cblxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1tYWluLjZhMWFmZWMyLmNodW5rLmNzcy5tYXAgKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"App\">\n    <app-input (onNewQuestion)=\"newQuestion($event)\"></app-input>\n    <app-output [responses]=\"responses\"></app-output>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger.service */ "./src/app/logger.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(logger) {
        this.logger = logger;
        this.answers = [
            { type: "afirmative", text: "En mi opinión, sí" },
            { type: "afirmative", text: "Es cierto" },
            { type: "afirmative", text: "Es decididamente así" },
            { type: "afirmative", text: "Probablemente" },
            { type: "afirmative", text: "Buen pronóstico" },
            { type: "afirmative", text: "Todo apunta a que sí" },
            { type: "afirmative", text: "Sin duda" },
            { type: "afirmative", text: "Sí" },
            { type: "afirmative", text: "Sí - definitivamente" },
            { type: "afirmative", text: "Debes confiar en ello" },
            { type: "doubt", text: "Respuesta vaga, vuelve a intentarlo" },
            { type: "doubt", text: "Pregunta en otro momento" },
            { type: "doubt", text: "Será mejor que no te lo diga ahora" },
            { type: "doubt", text: "No puedo predecirlo ahora" },
            { type: "doubt", text: "Concéntrate y vuelve a preguntar" },
            { type: "negative", text: "No cuentes con ello" },
            { type: "negative", text: "Mi respuesta es no" },
            { type: "negative", text: "Mis fuentes me dicen que no" },
            { type: "negative", text: "Las perspectivas no son buenas" },
            { type: "negative", text: "Muy dudoso" }
        ];
        this.responses = [];
    }
    AppComponent.prototype.newQuestion = function (question) {
        var currentQuestion = question.trim();
        this.logger.log(currentQuestion, "padre");
        if (currentQuestion !== "") {
            var randomIndex = Math.floor(Math.random() * this.answers.length);
            var newAnswer = {
                question: currentQuestion,
                answer: this.answers[randomIndex]
            };
            this.responses.unshift(newAnswer);
        }
        else {
            this.logger.error("pregunta que no preguntas");
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_logger_service__WEBPACK_IMPORTED_MODULE_1__["LoggerService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input/input.component */ "./src/app/input/input.component.ts");
/* harmony import */ var _output_output_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./output/output.component */ "./src/app/output/output.component.ts");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logger.service */ "./src/app/logger.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _input_input_component__WEBPACK_IMPORTED_MODULE_4__["InputComponent"], _output_output_component__WEBPACK_IMPORTED_MODULE_5__["OutputComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            providers: [_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/input/input.component.css":
/*!*******************************************!*\
  !*** ./src/app/input/input.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Input {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap\n}\n\n.Input * {\n    margin: .5em\n}\n\n.Input :focus {\n    outline: 5px auto #fff !important\n}\n\n.Input input {\n    background: transparent;\n    font-size: 1.4em;\n    text-align: center;\n    width: 70vw;\n    outline: 5px auto #639\n}\n\n.Input button,\n.Input input {\n    border: none;\n    color: #fff;\n    padding: .5em\n}\n\n.Input button {\n    font-size: 1.2em;\n    background: #639\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5wdXQvaW5wdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxpQ0FBaUM7Q0FDcEM7O0FBRUQ7SUFDSSx3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osc0JBQXNCO0NBQ3pCOztBQUVEOztJQUVJLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9pbnB1dC9pbnB1dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLklucHV0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwXG59XG5cbi5JbnB1dCAqIHtcbiAgICBtYXJnaW46IC41ZW1cbn1cblxuLklucHV0IDpmb2N1cyB7XG4gICAgb3V0bGluZTogNXB4IGF1dG8gI2ZmZiAhaW1wb3J0YW50XG59XG5cbi5JbnB1dCBpbnB1dCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDcwdnc7XG4gICAgb3V0bGluZTogNXB4IGF1dG8gIzYzOVxufVxuXG4uSW5wdXQgYnV0dG9uLFxuLklucHV0IGlucHV0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogLjVlbVxufVxuXG4uSW5wdXQgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGJhY2tncm91bmQ6ICM2Mzlcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/input/input.component.html":
/*!********************************************!*\
  !*** ./src/app/input/input.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"Input\"\n      (submit)=\"submit()\">\n    <input type=\"text\"\n           name=\"question\"\n           placeholder=\"¿Qué quieres saber?\"\n           [(ngModel)]=\"currentQuestion\">\n    <button type=\"submit\">Dime!</button>\n</form>\n"

/***/ }),

/***/ "./src/app/input/input.component.ts":
/*!******************************************!*\
  !*** ./src/app/input/input.component.ts ***!
  \******************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logger.service */ "./src/app/logger.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputComponent = /** @class */ (function () {
    function InputComponent(logger) {
        this.logger = logger;
        this.onNewQuestion = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.currentQuestion = '';
    }
    InputComponent.prototype.submit = function () {
        this.logger.log(this.currentQuestion);
        this.onNewQuestion.emit(this.currentQuestion);
        this.currentQuestion = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], InputComponent.prototype, "onNewQuestion", void 0);
    InputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-input',
            template: __webpack_require__(/*! ./input.component.html */ "./src/app/input/input.component.html"),
            styles: [__webpack_require__(/*! ./input.component.css */ "./src/app/input/input.component.css")]
        }),
        __metadata("design:paramtypes", [_logger_service__WEBPACK_IMPORTED_MODULE_1__["LoggerService"]])
    ], InputComponent);
    return InputComponent;
}());



/***/ }),

/***/ "./src/app/logger.service.ts":
/*!***********************************!*\
  !*** ./src/app/logger.service.ts ***!
  \***********************************/
/*! exports provided: LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoggerService = /** @class */ (function () {
    function LoggerService() {
    }
    LoggerService.prototype.log = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        console.log.apply(console, ['todos los logs:'].concat(msg));
    };
    LoggerService.prototype.error = function (msg) {
        console.error(msg);
    };
    LoggerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], LoggerService);
    return LoggerService;
}());



/***/ }),

/***/ "./src/app/output/output.component.css":
/*!*********************************************!*\
  !*** ./src/app/output/output.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Output .record {\n    padding: .3em;\n    margin: 0 20px .5em;\n    text-align: left;\n    font-size: .8em\n}\n\n.Output .last {\n    font-size: 1.4em;\n    background: hsla(0, 0%, 100%, .05)\n}\n\n.Output .question {\n    font-size: .6em\n}\n\n.Output .afirmative {\n    border-left: 3px solid green\n}\n\n.Output .doubt {\n    border-left: 3px solid orange\n}\n\n.Output .negative {\n    border-left: 3px solid red\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3V0cHV0L291dHB1dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsZUFBZTtDQUNsQjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixrQ0FBa0M7Q0FDckM7O0FBRUQ7SUFDSSxlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksNEJBQTRCO0NBQy9COztBQUVEO0lBQ0ksNkJBQTZCO0NBQ2hDOztBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCIiwiZmlsZSI6InNyYy9hcHAvb3V0cHV0L291dHB1dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLk91dHB1dCAucmVjb3JkIHtcbiAgICBwYWRkaW5nOiAuM2VtO1xuICAgIG1hcmdpbjogMCAyMHB4IC41ZW07XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IC44ZW1cbn1cblxuLk91dHB1dCAubGFzdCB7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICBiYWNrZ3JvdW5kOiBoc2xhKDAsIDAlLCAxMDAlLCAuMDUpXG59XG5cbi5PdXRwdXQgLnF1ZXN0aW9uIHtcbiAgICBmb250LXNpemU6IC42ZW1cbn1cblxuLk91dHB1dCAuYWZpcm1hdGl2ZSB7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCBncmVlblxufVxuXG4uT3V0cHV0IC5kb3VidCB7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCBvcmFuZ2Vcbn1cblxuLk91dHB1dCAubmVnYXRpdmUge1xuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgcmVkXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/output/output.component.html":
/*!**********************************************!*\
  !*** ./src/app/output/output.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"Output\">\n    <div *ngFor=\"let response of responses; let i = index\"\n         class=\"{{i === 0 ? 'last': ''}}  record {{response.answer.type}}\">\n        <div class=\"question\"> ¿{{response.question}}? </div>\n        <div class=\"answer\">{{response.answer.text}}</div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/output/output.component.ts":
/*!********************************************!*\
  !*** ./src/app/output/output.component.ts ***!
  \********************************************/
/*! exports provided: OutputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputComponent", function() { return OutputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OutputComponent = /** @class */ (function () {
    function OutputComponent() {
    }
    OutputComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], OutputComponent.prototype, "responses", void 0);
    OutputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-output',
            template: __webpack_require__(/*! ./output.component.html */ "./src/app/output/output.component.html"),
            styles: [__webpack_require__(/*! ./output.component.css */ "./src/app/output/output.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OutputComponent);
    return OutputComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Juan\dev\eight-ball-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map