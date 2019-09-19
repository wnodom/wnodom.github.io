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

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Byb2plY3RzL3NwYWNld2Fsay9zcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtBQUNmIiwiZmlsZSI6Ii4uL3Byb2plY3RzL3NwYWNld2Fsay9zcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>About this app</h2>\n\n<p>\n  This is a set of examples I\n  (<a target=\"_blank\" href=\"http://www.billodom.com/\">Bill Odom</a>)\n  created for use in workshops and presentations on building\n  web applications using modern CSS (especially CSS Grid).\n  \n  You can find the latest version here:\n</p>\n\n<blockquote>\n  <a target=\"_blank\" href=\"https://github.com/wnodom/spacewalk\">\n    Spacewalk on Github\n  </a>\n</blockquote>\n\n<hr />\n\n<h3>Image and Data Sources</h3>\n\n<ul>\n  <li>\n    <a target=\"_blank\" href=\"https://www.spacetelescope.org/copyright/\">\n      Hubble Space Telescope\n    </a>\n  </li>\n\n  <li>\n    <a target=\"_blank\" href=\"http://hubblesite.org/about_us/copyright.php\">\n      Hubblesite\n    </a>\n  </li>\n\n  <li>\n    <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/List_of_female_spacefarers\">\n      List of Female Spacefarers\n    </a>\n  </li>\n\n  <li>\n    <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/List_of_gravitationally_rounded_objects_of_the_Solar_System\">\n      List of Gravitationally-Rounded Objects of the Solar System\n    </a>\n  </li>\n\n  <li>\n    <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/List_of_planetary_nebulae\">\n      List of Planetary Nebulae\n    </a>\n  </li>\n\n  <li>\n    <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/List_of_women_astronomers\">\n      List of Women Astronomers\n    </a>\n  </li>\n\n  <li>\n    <a target=\"_blank\" href=\"https://www.jpl.nasa.gov/visions-of-the-future\">\n      NASA/JPL Visions of the Future Poster Series\n    </a>\n  </li>\n\n  <li>\n    <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Pale_Blue_Dot\">\n      <em>Pale Blue Dot</em> by Carl Sagan\n    </a>\n  </li>\n\n  <li>\n    <a target=\"_blank\" href=\"https://opengameart.org/content/seamless-space-stars\">\n      Seamless stars background\n    </a>\n  </li>\n  \n</ul>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        })
    ], AboutComponent);
    return AboutComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-menu/main-menu.component */ "./src/app/main-menu/main-menu.component.ts");
/* harmony import */ var _resources_resources_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resources/resources.component */ "./src/app/resources/resources.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _examples__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples */ "./src/app/examples.ts");








var routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'menu', component: _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_4__["MainMenuComponent"] },
    { path: 'resources', component: _resources_resources_component__WEBPACK_IMPORTED_MODULE_5__["ResourcesComponent"] },
    { path: 'welcome', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"] }
].concat(_examples__WEBPACK_IMPORTED_MODULE_7__["examples"], [
    { path: '**', redirectTo: '' }
]);
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9wcm9qZWN0cy9zcGFjZXdhbGsvc3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _examples__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples */ "./src/app/examples.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.currentExampleIndex = -1;
    }
    AppComponent.prototype.keyEvent = function (event) {
        var destination = '';
        var lastExampleIndex = _examples__WEBPACK_IMPORTED_MODULE_3__["examples"].length - 1;
        switch (event.code) {
            case 'Backquote':
                destination = '/welcome';
                this.currentExampleIndex = -1;
                break;
            case 'Backslash':
                destination = '/menu';
                this.currentExampleIndex = -1;
                break;
            case 'BracketRight':
                this.currentExampleIndex =
                    this.currentExampleIndex < lastExampleIndex ?
                        this.currentExampleIndex + 1 :
                        lastExampleIndex;
                destination = _examples__WEBPACK_IMPORTED_MODULE_3__["examples"][this.currentExampleIndex].path;
                break;
            case 'BracketLeft':
                this.currentExampleIndex =
                    this.currentExampleIndex > 0 ?
                        this.currentExampleIndex - 1 :
                        0;
                destination = _examples__WEBPACK_IMPORTED_MODULE_3__["examples"][this.currentExampleIndex].path;
                break;
        }
        if (destination) {
            this.router.navigate([destination]);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppComponent.prototype, "keyEvent", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _captioned_image_captioned_image_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./captioned-image/captioned-image.component */ "./src/app/captioned-image/captioned-image.component.ts");
/* harmony import */ var _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-menu/main-menu.component */ "./src/app/main-menu/main-menu.component.ts");
/* harmony import */ var _media_object_media_object_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./media-object/media-object.component */ "./src/app/media-object/media-object.component.ts");
/* harmony import */ var _playing_card_playing_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./playing-card/playing-card.component */ "./src/app/playing-card/playing-card.component.ts");
/* harmony import */ var _resources_resources_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resources/resources.component */ "./src/app/resources/resources.component.ts");
/* harmony import */ var _video_list_video_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./video-list/video-list.component */ "./src/app/video-list/video-list.component.ts");
/* harmony import */ var _video_player_video_player_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./video-player/video-player.component */ "./src/app/video-player/video-player.component.ts");
/* harmony import */ var _video_thumbnail_video_thumbnail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./video-thumbnail/video-thumbnail.component */ "./src/app/video-thumbnail/video-thumbnail.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _examples__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./examples */ "./src/app/examples.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _examples__WEBPACK_IMPORTED_MODULE_15__["examples"].map(function (example) { return example.component; }),
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                _captioned_image_captioned_image_component__WEBPACK_IMPORTED_MODULE_6__["CaptionedImageComponent"],
                _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_7__["MainMenuComponent"],
                _media_object_media_object_component__WEBPACK_IMPORTED_MODULE_8__["MediaObjectComponent"],
                _playing_card_playing_card_component__WEBPACK_IMPORTED_MODULE_9__["PlayingCardComponent"],
                _resources_resources_component__WEBPACK_IMPORTED_MODULE_10__["ResourcesComponent"],
                _video_list_video_list_component__WEBPACK_IMPORTED_MODULE_11__["VideoListComponent"],
                _video_player_video_player_component__WEBPACK_IMPORTED_MODULE_12__["VideoPlayerComponent"],
                _video_thumbnail_video_thumbnail_component__WEBPACK_IMPORTED_MODULE_13__["VideoThumbnailComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_14__["WelcomeComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/captioned-image/captioned-image.component.html":
/*!****************************************************************!*\
  !*** ./src/app/captioned-image/captioned-image.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img [src]=\"src\">\n\n<div class=\"caption\">\n  {{ caption }}\n</div>\n"

/***/ }),

/***/ "./src/app/captioned-image/captioned-image.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/captioned-image/captioned-image.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: grid;\n  grid-template-rows: 1fr 1fr auto; }\n\nimg {\n  width: 100%;\n  min-height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  grid-row: 1 / -1;\n  grid-column: 1 / -1; }\n\n.caption {\n  padding: 5px;\n  color: white;\n  background: rgba(25, 25, 112, 0.75);\n  font-weight: bold;\n  grid-row: -2 / -1;\n  grid-column: 1 / -1;\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib2RvbS9zcGFjZXdhbGsvcHJvamVjdHMvc3BhY2V3YWxrL3NyYy9hcHAvY2FwdGlvbmVkLWltYWdlL2NhcHRpb25lZC1pbWFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixnQ0FBZ0MsRUFBQTs7QUFHbEM7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osbUNBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGlCQUFpQixFQUFBIiwiZmlsZSI6Ii4uL3Byb2plY3RzL3NwYWNld2Fsay9zcmMvYXBwL2NhcHRpb25lZC1pbWFnZS9jYXB0aW9uZWQtaW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciBhdXRvO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGdyaWQtcm93OiAxIC8gLTE7XG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XG59XG5cbi5jYXB0aW9uIHtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IHJnYmEobWlkbmlnaHRibHVlLCAwLjc1KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGdyaWQtcm93OiAtMiAvIC0xO1xuICBncmlkLWNvbHVtbjogMSAvIC0xO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/captioned-image/captioned-image.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/captioned-image/captioned-image.component.ts ***!
  \**************************************************************/
/*! exports provided: CaptionedImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptionedImageComponent", function() { return CaptionedImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var CaptionedImageComponent = /** @class */ (function () {
    function CaptionedImageComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CaptionedImageComponent.prototype, "src", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CaptionedImageComponent.prototype, "caption", void 0);
    CaptionedImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'captioned-image',
            template: __webpack_require__(/*! ./captioned-image.component.html */ "./src/app/captioned-image/captioned-image.component.html"),
            styles: [__webpack_require__(/*! ./captioned-image.component.scss */ "./src/app/captioned-image/captioned-image.component.scss")]
        })
    ], CaptionedImageComponent);
    return CaptionedImageComponent;
}());



/***/ }),

/***/ "./src/app/example-blocks/example-blocks.component.css":
/*!*************************************************************!*\
  !*** ./src/app/example-blocks/example-blocks.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  padding: 20px;\n  display: grid;\n\n  grid-template-columns: repeat(5, 100px);\n  grid-template-rows: repeat(5, 100px);\n  grid-gap: 20px;\n}\n\ndiv {\n  display: grid;\n  place-content: center;\n  font-family: sans-serif;\n  font-size: 200%;\n  border: 3px solid darkgreen;\n  border-radius: 10px;\n  background-color: rgba(0, 100, 0, 0.25);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Byb2plY3RzL3NwYWNld2Fsay9zcmMvYXBwL2V4YW1wbGUtYmxvY2tzL2V4YW1wbGUtYmxvY2tzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTs7RUFFYix1Q0FBdUM7RUFDdkMsb0NBQW9DO0VBQ3BDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQix1Q0FBdUM7QUFDekMiLCJmaWxlIjoiLi4vcHJvamVjdHMvc3BhY2V3YWxrL3NyYy9hcHAvZXhhbXBsZS1ibG9ja3MvZXhhbXBsZS1ibG9ja3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcGFkZGluZzogMjBweDtcbiAgZGlzcGxheTogZ3JpZDtcblxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxMDBweCk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDEwMHB4KTtcbiAgZ3JpZC1nYXA6IDIwcHg7XG59XG5cbmRpdiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjAwJTtcbiAgYm9yZGVyOiAzcHggc29saWQgZGFya2dyZWVuO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEwMCwgMCwgMC4yNSk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/example-blocks/example-blocks.component.html":
/*!**************************************************************!*\
  !*** ./src/app/example-blocks/example-blocks.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let label of labels\" [title]=\"label\">\n  {{ label }}\n</div>\n"

/***/ }),

/***/ "./src/app/example-blocks/example-blocks.component.ts":
/*!************************************************************!*\
  !*** ./src/app/example-blocks/example-blocks.component.ts ***!
  \************************************************************/
/*! exports provided: ExampleBlocksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleBlocksComponent", function() { return ExampleBlocksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ExampleBlocksComponent = /** @class */ (function () {
    function ExampleBlocksComponent() {
        this.labels = [];
        for (var i = 1; i < 10; i++) {
            this.labels.push('' + i);
        }
    }
    ExampleBlocksComponent.label = 'Playing With Blocks';
    ExampleBlocksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'example-blocks',
            template: __webpack_require__(/*! ./example-blocks.component.html */ "./src/app/example-blocks/example-blocks.component.html"),
            styles: [__webpack_require__(/*! ./example-blocks.component.css */ "./src/app/example-blocks/example-blocks.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExampleBlocksComponent);
    return ExampleBlocksComponent;
}());



/***/ }),

/***/ "./src/app/example-centering/example-centering.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/example-centering/example-centering.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: grid;\n  height: 100vh;\n  place-items: center;\n\n  background-size: contain;\n  background-image:\n    radial-gradient(circle at 100%, #000, #333 65%, #eee 75%, transparent 75%),\n    url('/spacewalk/assets/misc/starfield.png');\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Byb2plY3RzL3NwYWNld2Fsay9zcmMvYXBwL2V4YW1wbGUtY2VudGVyaW5nL2V4YW1wbGUtY2VudGVyaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjs7RUFFbkIsd0JBQXdCO0VBQ3hCOzsrQ0FHQTtBQUNGIiwiZmlsZSI6Ii4uL3Byb2plY3RzL3NwYWNld2Fsay9zcmMvYXBwL2V4YW1wbGUtY2VudGVyaW5nL2V4YW1wbGUtY2VudGVyaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG5cbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLWltYWdlOlxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMTAwJSwgIzAwMCwgIzMzMyA2NSUsICNlZWUgNzUlLCB0cmFuc3BhcmVudCA3NSUpLFxuICAgIHVybChcIi9hc3NldHMvbWlzYy9zdGFyZmllbGQucG5nXCIpXG4gIDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/example-centering/example-centering.component.html":
/*!********************************************************************!*\
  !*** ./src/app/example-centering/example-centering.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<img src=\"/assets/misc/satellite-emoji.png\">\n\n"

/***/ }),

/***/ "./src/app/example-centering/example-centering.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/example-centering/example-centering.component.ts ***!
  \******************************************************************/
/*! exports provided: ExampleCenteringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleCenteringComponent", function() { return ExampleCenteringComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ExampleCenteringComponent = /** @class */ (function () {
    function ExampleCenteringComponent() {
    }
    ExampleCenteringComponent.label = 'Best Feature Ever!!1!';
    ExampleCenteringComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'example-centering',
            template: __webpack_require__(/*! ./example-centering.component.html */ "./src/app/example-centering/example-centering.component.html"),
            styles: [__webpack_require__(/*! ./example-centering.component.css */ "./src/app/example-centering/example-centering.component.css")]
        })
    ], ExampleCenteringComponent);
    return ExampleCenteringComponent;
}());



/***/ }),

/***/ "./src/app/example-chessboard/example-chessboard.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/example-chessboard/example-chessboard.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chessboard\" [style.transform]=\"transformations\" [ngClass]=\"extras\">\n\n  <ng-container *ngFor=\"let row of board\">\n    <ng-container *ngFor=\"let square of row\">\n      <b>{{ square }}</b>\n    </ng-container>\n  </ng-container>\n\n</div>\n"

/***/ }),

/***/ "./src/app/example-chessboard/example-chessboard.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/example-chessboard/example-chessboard.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  width: 500px;\n  height: 500px;\n  margin-left: 25%;\n  margin-top: 100px;\n  perspective-origin: top;\n  transform-style: preserve-3d;\n  perspective: 650px; }\n\n.chessboard {\n  display: grid;\n  grid-gap: 2px;\n  grid-template-rows: repeat(8, 1fr);\n  grid-template-columns: repeat(8, 1fr);\n  padding: 10px;\n  background-color: brown;\n  width: 500px;\n  height: 500px; }\n\n.chessboard b:nth-child(16n+1),\n  .chessboard b:nth-child(16n+3),\n  .chessboard b:nth-child(16n+5),\n  .chessboard b:nth-child(16n+7),\n  .chessboard b:nth-child(16n+10),\n  .chessboard b:nth-child(16n+12),\n  .chessboard b:nth-child(16n+14),\n  .chessboard b:nth-child(16n) {\n    background-color: cornsilk; }\n\n.chessboard b:nth-child(16n+2),\n  .chessboard b:nth-child(16n+4),\n  .chessboard b:nth-child(16n+6),\n  .chessboard b:nth-child(16n+8),\n  .chessboard b:nth-child(16n+9),\n  .chessboard b:nth-child(16n+11),\n  .chessboard b:nth-child(16n+13),\n  .chessboard b:nth-child(16n+15) {\n    background-color: tan; }\n\n.disco {\n  -webkit-animation: disco 0.3s linear infinite alternate;\n          animation: disco 0.3s linear infinite alternate; }\n\n@-webkit-keyframes disco {\n  from {\n    grid-gap: 0; }\n  to {\n    grid-gap: 50px; } }\n\n@keyframes disco {\n  from {\n    grid-gap: 0; }\n  to {\n    grid-gap: 50px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib2RvbS9zcGFjZXdhbGsvcHJvamVjdHMvc3BhY2V3YWxrL3NyYy9hcHAvZXhhbXBsZS1jaGVzc2JvYXJkL2V4YW1wbGUtY2hlc3Nib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1QixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGtDQUFxQztFQUNyQyxxQ0FBcUM7RUFDckMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYSxFQUFBOztBQVJmOzs7Ozs7OztJQWtCSSwwQkFBMEIsRUFBQTs7QUFsQjlCOzs7Ozs7OztJQTZCSSxxQkFBcUIsRUFBQTs7QUFJekI7RUFDRSx1REFBK0M7VUFBL0MsK0NBQStDLEVBQUE7O0FBR2pEO0VBQ0U7SUFBTyxXQUFXLEVBQUE7RUFDbEI7SUFBTyxjQUFjLEVBQUEsRUFBQTs7QUFGdkI7RUFDRTtJQUFPLFdBQVcsRUFBQTtFQUNsQjtJQUFPLGNBQWMsRUFBQSxFQUFBIiwiZmlsZSI6Ii4uL3Byb2plY3RzL3NwYWNld2Fsay9zcmMvYXBwL2V4YW1wbGUtY2hlc3Nib2FyZC9leGFtcGxlLWNoZXNzYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBwZXJzcGVjdGl2ZS1vcmlnaW46IHRvcDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgcGVyc3BlY3RpdmU6IDY1MHB4O1xufVxuXG4uY2hlc3Nib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiAycHg7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogICAgcmVwZWF0KDgsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDFmcik7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG5cbiAgYjpudGgtY2hpbGQoMTZuKzEpLFxuICBiOm50aC1jaGlsZCgxNm4rMyksXG4gIGI6bnRoLWNoaWxkKDE2bis1KSxcbiAgYjpudGgtY2hpbGQoMTZuKzcpLFxuICBiOm50aC1jaGlsZCgxNm4rMTApLFxuICBiOm50aC1jaGlsZCgxNm4rMTIpLFxuICBiOm50aC1jaGlsZCgxNm4rMTQpLFxuICBiOm50aC1jaGlsZCgxNm4pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3Juc2lsaztcbiAgfVxuXG4gIGI6bnRoLWNoaWxkKDE2bisyKSxcbiAgYjpudGgtY2hpbGQoMTZuKzQpLFxuICBiOm50aC1jaGlsZCgxNm4rNiksXG4gIGI6bnRoLWNoaWxkKDE2bis4KSxcbiAgYjpudGgtY2hpbGQoMTZuKzkpLFxuICBiOm50aC1jaGlsZCgxNm4rMTEpLFxuICBiOm50aC1jaGlsZCgxNm4rMTMpLFxuICBiOm50aC1jaGlsZCgxNm4rMTUpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0YW47XG4gIH1cbn1cblxuLmRpc2NvIHtcbiAgYW5pbWF0aW9uOiBkaXNjbyAwLjNzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbkBrZXlmcmFtZXMgZGlzY28ge1xuICBmcm9tIHsgZ3JpZC1nYXA6IDA7ICAgIH1cbiAgdG8gICB7IGdyaWQtZ2FwOiA1MHB4OyB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/example-chessboard/example-chessboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/example-chessboard/example-chessboard.component.ts ***!
  \********************************************************************/
/*! exports provided: ExampleChessboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleChessboardComponent", function() { return ExampleChessboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var bigStep = 5;
var smallStep = 1;
var ExampleChessboardComponent = /** @class */ (function () {
    function ExampleChessboardComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.board = Array(8).fill(Array(8).fill(''));
        this.rotx = 0;
        this.roty = 0;
        this.rotz = 0;
        this.extras = '';
    }
    ExampleChessboardComponent.prototype.calculateTransformations = function () {
        this.transformations = this.sanitizer.bypassSecurityTrustStyle(' rotateX(' + this.rotx + 'deg) '
            + ' rotateY(' + this.roty + 'deg) '
            + ' rotateZ(' + this.rotz + 'deg) ');
    };
    ExampleChessboardComponent.prototype.keyEvent = function (event) {
        var step = event.shiftKey ? bigStep : smallStep;
        switch (event.code) {
            // Reset everything back to the start state
            //
            case 'Space':
                this.rotx = 0;
                this.roty = 0;
                this.rotz = 0;
                this.extras = '';
                break;
            // Rotate around X, Y, and Z axes, in big or small increments
            //
            case 'ArrowUp':
                this.rotx += step;
                break;
            case 'ArrowDown':
                this.rotx -= step;
                break;
            case 'ArrowLeft':
                this.roty -= step;
                break;
            case 'ArrowRight':
                this.roty += step;
                break;
            case 'KeyZ':
                this.rotz -= step;
                break;
            case 'KeyX':
                this.rotz += step;
                break;
            // Get funky
            //
            case 'KeyD':
                this.extras = this.extras ? '' : 'disco';
                break;
        }
        this.calculateTransformations();
    };
    ExampleChessboardComponent.prototype.ngOnInit = function () {
        this.calculateTransformations();
    };
    ExampleChessboardComponent.label = 'The Grid of Kings';
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ExampleChessboardComponent.prototype, "keyEvent", null);
    ExampleChessboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'example-chessboard',
            template: __webpack_require__(/*! ./example-chessboard.component.html */ "./src/app/example-chessboard/example-chessboard.component.html"),
            styles: [__webpack_require__(/*! ./example-chessboard.component.scss */ "./src/app/example-chessboard/example-chessboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], ExampleChessboardComponent);
    return ExampleChessboardComponent;
}());



/***/ }),

/***/ "./src/app/example-debugging/example-debugging.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/example-debugging/example-debugging.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  padding: 20px;\n  display: grid;\n\n  min-height: 100vh;\n  place-content: center;\n  \n  grid-template-columns: repeat(5, 100px);\n  grid-template-rows: repeat(5, 100px);\n  grid-gap: 20px;\n}\n\ndiv {\n  display: grid;\n  place-content: center;\n  font-family: sans-serif;\n  font-size: 200%;\n  border: 3px solid darkgreen;\n  border-radius: 10px;\n  background-color: rgba(0, 100, 0, 0.25);\n}\n\n[title=\"3\"] {\n  background: lightblue;\n  grid-row: 3;\n  grid-column: 1 / span 3;\n}\n\n[title=\"4\"] {\n  background: pink;\n  grid-row: span 2;\n}\n\n[title=\"5\"] {\n  background: cornsilk;\n  grid-row-end: -1;\n  grid-column-end: -1;\n}\n\n[title=\"7\"] {\n  grid-column: 1;\n  grid-row: 1 / -1;\n}\n\n/*\n\n:host > * {\n  outline: 3px solid red;\n  outline-offset: 5px;\n}\n\n*/\n\n[title=\"9\"] {\n  border: unset;\n  color: transparent;\n  background: transparent;\n  grid-row-end: -2;\n  grid-column-end: -2;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Byb2plY3RzL3NwYWNld2Fsay9zcmMvYXBwL2V4YW1wbGUtZGVidWdnaW5nL2V4YW1wbGUtZGVidWdnaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTs7RUFFYixpQkFBaUI7RUFDakIscUJBQXFCOztFQUVyQix1Q0FBdUM7RUFDdkMsb0NBQW9DO0VBQ3BDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7Ozs7Ozs7Q0FPQzs7QUFtQkQ7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6Ii4uL3Byb2plY3RzL3NwYWNld2Fsay9zcmMvYXBwL2V4YW1wbGUtZGVidWdnaW5nL2V4YW1wbGUtZGVidWdnaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG5cbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDEwMHB4KTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMTAwcHgpO1xuICBncmlkLWdhcDogMjBweDtcbn1cblxuZGl2IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMDAlO1xuICBib3JkZXI6IDNweCBzb2xpZCBkYXJrZ3JlZW47XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTAwLCAwLCAwLjI1KTtcbn1cblxuW3RpdGxlPVwiM1wiXSB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgZ3JpZC1yb3c6IDM7XG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAzO1xufVxuXG5bdGl0bGU9XCI0XCJdIHtcbiAgYmFja2dyb3VuZDogcGluaztcbiAgZ3JpZC1yb3c6IHNwYW4gMjtcbn1cblxuW3RpdGxlPVwiNVwiXSB7XG4gIGJhY2tncm91bmQ6IGNvcm5zaWxrO1xuICBncmlkLXJvdy1lbmQ6IC0xO1xuICBncmlkLWNvbHVtbi1lbmQ6IC0xO1xufVxuXG5bdGl0bGU9XCI3XCJdIHtcbiAgZ3JpZC1jb2x1bW46IDE7XG4gIGdyaWQtcm93OiAxIC8gLTE7XG59XG5cbi8qXG5cbjpob3N0ID4gKiB7XG4gIG91dGxpbmU6IDNweCBzb2xpZCByZWQ7XG4gIG91dGxpbmUtb2Zmc2V0OiA1cHg7XG59XG5cbiovXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5bdGl0bGU9XCI5XCJdIHtcbiAgYm9yZGVyOiB1bnNldDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZ3JpZC1yb3ctZW5kOiAtMjtcbiAgZ3JpZC1jb2x1bW4tZW5kOiAtMjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/example-debugging/example-debugging.component.html":
/*!********************************************************************!*\
  !*** ./src/app/example-debugging/example-debugging.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let label of labels\" [title]=\"label\">\n  {{ label }}\n</div>\n"

/***/ }),

/***/ "./src/app/example-debugging/example-debugging.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/example-debugging/example-debugging.component.ts ***!
  \******************************************************************/
/*! exports provided: ExampleDebuggingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDebuggingComponent", function() { return ExampleDebuggingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ExampleDebuggingComponent = /** @class */ (function () {
    function ExampleDebuggingComponent() {
        this.labels = [];
        for (var i = 1; i < 10; i++) {
            this.labels.push('' + i);
        }
    }
    ExampleDebuggingComponent.label = 'Good Grids Gone Bad';
    ExampleDebuggingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'example-debugging',
            template: __webpack_require__(/*! ./example-debugging.component.html */ "./src/app/example-debugging/example-debugging.component.html"),
            styles: [__webpack_require__(/*! ./example-debugging.component.css */ "./src/app/example-debugging/example-debugging.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExampleDebuggingComponent);
    return ExampleDebuggingComponent;
}());



/***/ }),

/***/ "./src/app/example-forms/example-forms.component.css":
/*!***********************************************************!*\
  !*** ./src/app/example-forms/example-forms.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding: 20px;\n  font-size: 150%;\n  background: lightgrey;\n}\n\nform {\n  display: grid;\n  gap: 20px;\n  grid-template-columns:\n    minmax(200px, 1fr)\n    [input-start] minmax(300px, 3fr) [input-end]\n  ;\n  width: 75%;\n}\n\ninput {\n  grid-column: input-start;\n\n  font-family: sans-serif;\n  font-size: inherit;\n  border: 2px solid darkgrey;\n\n  padding: 10px;\n}\n\nlabel {\n  text-align: right;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Byb2plY3RzL3NwYWNld2Fsay9zcmMvYXBwL2V4YW1wbGUtZm9ybXMvZXhhbXBsZS1mb3Jtcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVDs7O0VBR0E7RUFDQSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx3QkFBd0I7O0VBRXhCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsMEJBQTBCOztFQUUxQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoiLi4vcHJvamVjdHMvc3BhY2V3YWxrL3NyYy9hcHAvZXhhbXBsZS1mb3Jtcy9leGFtcGxlLWZvcm1zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LXNpemU6IDE1MCU7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcbn1cblxuZm9ybSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMjBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOlxuICAgIG1pbm1heCgyMDBweCwgMWZyKVxuICAgIFtpbnB1dC1zdGFydF0gbWlubWF4KDMwMHB4LCAzZnIpIFtpbnB1dC1lbmRdXG4gIDtcbiAgd2lkdGg6IDc1JTtcbn1cblxuaW5wdXQge1xuICBncmlkLWNvbHVtbjogaW5wdXQtc3RhcnQ7XG5cbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgYm9yZGVyOiAycHggc29saWQgZGFya2dyZXk7XG5cbiAgcGFkZGluZzogMTBweDtcbn1cblxubGFiZWwge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/example-forms/example-forms.component.html":
/*!************************************************************!*\
  !*** ./src/app/example-forms/example-forms.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <label>Name:</label>\n  <input type=\"text\" placeholder=\"First\">\n  <input type=\"text\" placeholder=\"Middle\">\n  <input type=\"text\" placeholder=\"Last\">\n  <input type=\"text\" placeholder=\"Suffix\">\n\n  <label>Address:</label>\n  <input type=\"text\" placeholder=\"Address line 1\">\n  <input type=\"text\" placeholder=\"Address line 2\">\n  <input type=\"text\" placeholder=\"City\">\n  <input type=\"text\" placeholder=\"State / Province\">\n  <input type=\"text\" placeholder=\"Zip / Postal Code\">\n  <input type=\"text\" placeholder=\"Country\">\n\n  <label>Phones:</label>\n  <input type=\"text\" placeholder=\"Mobile\">\n  <input type=\"text\" placeholder=\"Home\">\n  <input type=\"text\" placeholder=\"Work\">\n</form>\n"

/***/ }),

/***/ "./src/app/example-forms/example-forms.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/example-forms/example-forms.component.ts ***!
  \**********************************************************/
/*! exports provided: ExampleFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleFormsComponent", function() { return ExampleFormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ExampleFormsComponent = /** @class */ (function () {
    function ExampleFormsComponent() {
    }
    ExampleFormsComponent.label = 'Plato Would be Proud';
    ExampleFormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'example-forms',
            template: __webpack_require__(/*! ./example-forms.component.html */ "./src/app/example-forms/example-forms.component.html"),
            styles: [__webpack_require__(/*! ./example-forms.component.css */ "./src/app/example-forms/example-forms.component.css")]
        })
    ], ExampleFormsComponent);
    return ExampleFormsComponent;
}());



/***/ }),

/***/ "./src/app/example-full-viewport/example-full-viewport.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/example-full-viewport/example-full-viewport.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <button (click)=\"showNav = !showNav\" class=\"material-icons\">\n    {{ showNav ? 'close' : 'menu' }}\n  </button>\n\n  <!--\n    The unusual handling of showNav ensures that the nav animations are only\n    triggered at the appropriate points.\n  -->\n  <a routerLink=\"/\" (click)=\"showNav = showNav ? false : showNav\">\n    <h1>{{ title }}</h1>\n  </a>\n</header>\n\n<nav\n  (click)=\"showNav = false\"\n  [class.showNav]=\"showNav\"\n  [class.hideNav]=\"showNav === false\"\n>\n  <a routerLink=\"/\">\n    Home\n  </a>\n\n  <a routerLink=\"/resources\">\n    Resources\n  </a>\n\n  <a routerLink=\"/about\">\n    About\n  </a>\n\n</nav>\n\n<main>\n\n  <img *ngFor=\"let imageItem of imageItems | async\"\n    [src]=\"imageItem.imageUrl\"\n  >\n\n</main>\n\n<footer>\n\n  <a target=\"_blank\" href=\"http://www.billodom.com/\">\n    Bill\n  </a>\n\n  <a target=\"_blank\" href=\"https://twitter.com/wnodom\">\n    Twitter\n  </a>\n\n  <a target=\"_blank\" href=\"https://github.com/wnodom\">\n    Github\n  </a>\n\n</footer>\n"

/***/ }),

/***/ "./src/app/example-full-viewport/example-full-viewport.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/example-full-viewport/example-full-viewport.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: grid;\n  grid-gap: 0;\n  grid-template: \" header            header \" auto [nav-start] \" main              main   \" 1fr [nav-end] \" footer            footer \" auto/[nav-start] 225px [nav-end] 1fr;\n  height: 100vh;\n  padding: 0; }\n\nheader {\n  grid-area: header;\n  display: grid;\n  grid-template: \" navToggle  title \" auto/auto minmax(0, 1fr);\n  background: lightgrey;\n  padding: 15px;\n  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.33);\n  z-index: 1; }\n\nheader button {\n    grid-area: navToggle;\n    outline: none;\n    border: none;\n    background-color: transparent;\n    text-align: left;\n    margin: 0;\n    margin-right: 15px;\n    padding: 0; }\n\nheader a {\n    grid-area: title; }\n\nheader h1 {\n    margin: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n\nnav {\n  grid-area: nav;\n  transform: translateX(-9999px);\n  opacity: 0.95;\n  background: lightgrey;\n  border-right: 3px solid darkgrey;\n  padding: 15px;\n  overflow: auto; }\n\nnav > * {\n    display: block;\n    margin-bottom: 15px; }\n\nmain {\n  grid-area: main;\n  display: grid;\n  justify-items: center;\n  overflow: auto;\n  padding: 15px;\n  padding-left: 50px; }\n\nmain img {\n    width: 700px;\n    margin: 50px;\n    display: block;\n    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.33); }\n\nfooter {\n  grid-area: footer;\n  background: lightgrey;\n  padding: 15px;\n  box-shadow: 0 -5px 10px 0 rgba(0, 0, 0, 0.33);\n  z-index: 1; }\n\nfooter a {\n    color: grey; }\n\nfooter a:not(:last-child)::after {\n    padding-left: 10px;\n    padding-right: 10px;\n    content: '\\2022'; }\n\nheader a, footer a, nav a {\n  text-decoration: none;\n  color: black; }\n\nli {\n  margin-top: 10px;\n  margin-bottom: 10px; }\n\n.currentSelection {\n  font-weight: bold; }\n\n@-webkit-keyframes slideIn {\n  from {\n    transform: translateX(-500px); }\n  to {\n    transform: translateX(0); } }\n\n@keyframes slideIn {\n  from {\n    transform: translateX(-500px); }\n  to {\n    transform: translateX(0); } }\n\n@-webkit-keyframes slideOut {\n  from {\n    transform: translateX(0); }\n  to {\n    transform: translateX(-500px); } }\n\n@keyframes slideOut {\n  from {\n    transform: translateX(0); }\n  to {\n    transform: translateX(-500px); } }\n\n.showNav {\n  -webkit-animation: slideIn 500ms;\n          animation: slideIn 500ms;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n.hideNav {\n  -webkit-animation: slideOut 500ms;\n          animation: slideOut 500ms;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib2RvbS9zcGFjZXdhbGsvcHJvamVjdHMvc3BhY2V3YWxrL3NyYy9hcHAvZXhhbXBsZS1mdWxsLXZpZXdwb3J0L2V4YW1wbGUtZnVsbC12aWV3cG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFFYixXQUFXO0VBRVgseUtBSXVDO0VBR3ZDLGFBQWE7RUFFYixVQUFVLEVBQUE7O0FBR1o7RUFDRSxpQkFBaUI7RUFFakIsYUFBYTtFQUViLDREQUU2QjtFQUc3QixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLDRDQUE0QztFQUM1QyxVQUFVLEVBQUE7O0FBYlo7SUFnQkksb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFVBQVUsRUFBQTs7QUF2QmQ7SUEyQkksZ0JBQWdCLEVBQUE7O0FBM0JwQjtJQStCSSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixtQkFBbUIsRUFBQTs7QUFJdkI7RUFDRSxjQUFjO0VBRWQsOEJBQThCO0VBRTlCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYixjQUFjLEVBQUE7O0FBVGhCO0lBWUksY0FBYztJQUNkLG1CQUFtQixFQUFBOztBQUl2QjtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7O0FBTnBCO0lBU0ksWUFBWTtJQUNaLFlBQVk7SUFDWixjQUFjO0lBQ2QsNENBQTRDLEVBQUE7O0FBSWhEO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsNkNBQTZDO0VBQzdDLFVBQVUsRUFBQTs7QUFMWjtJQVFJLFdBQVcsRUFBQTs7QUFSZjtJQWFJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCLEVBQUE7O0FBSXBCO0VBRUkscUJBQXFCO0VBQ3JCLFlBQVksRUFBQTs7QUFJaEI7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0U7SUFBTyw2QkFBNkIsRUFBQTtFQUNwQztJQUFPLHdCQUF3QixFQUFBLEVBQUE7O0FBRmpDO0VBQ0U7SUFBTyw2QkFBNkIsRUFBQTtFQUNwQztJQUFPLHdCQUF3QixFQUFBLEVBQUE7O0FBR2pDO0VBQ0U7SUFBTyx3QkFBd0IsRUFBQTtFQUMvQjtJQUFPLDZCQUE2QixFQUFBLEVBQUE7O0FBRnRDO0VBQ0U7SUFBTyx3QkFBd0IsRUFBQTtFQUMvQjtJQUFPLDZCQUE2QixFQUFBLEVBQUE7O0FBR3RDO0VBQ0UsZ0NBQXdCO1VBQXhCLHdCQUF3QjtFQUN4QixxQ0FBNkI7VUFBN0IsNkJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsaUNBQXlCO1VBQXpCLHlCQUF5QjtFQUN6QixxQ0FBNkI7VUFBN0IsNkJBQTZCLEVBQUEiLCJmaWxlIjoiLi4vcHJvamVjdHMvc3BhY2V3YWxrL3NyYy9hcHAvZXhhbXBsZS1mdWxsLXZpZXdwb3J0L2V4YW1wbGUtZnVsbC12aWV3cG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZ3JpZDtcblxuICBncmlkLWdhcDogMDtcblxuICBncmlkLXRlbXBsYXRlOlxuICAgICAgICAgICAgICAgICAgXCIgaGVhZGVyICAgICAgICAgICAgaGVhZGVyIFwiICBhdXRvXG4gICAgICBbbmF2LXN0YXJ0XSBcIiBtYWluICAgICAgICAgICAgICBtYWluICAgXCIgIDFmciAgIFtuYXYtZW5kXVxuICAgICAgICAgICAgICAgICAgXCIgZm9vdGVyICAgICAgICAgICAgZm9vdGVyIFwiICBhdXRvXG4gICAgLyBbbmF2LXN0YXJ0XSAgIDIyNXB4IFtuYXYtZW5kXSAgIDFmclxuICA7XG5cbiAgaGVpZ2h0OiAxMDB2aDtcblxuICBwYWRkaW5nOiAwO1xufVxuXG5oZWFkZXIge1xuICBncmlkLWFyZWE6IGhlYWRlcjtcblxuICBkaXNwbGF5OiBncmlkO1xuXG4gIGdyaWQtdGVtcGxhdGU6XG4gICAgXCIgbmF2VG9nZ2xlICB0aXRsZSBcIiBhdXRvXG4gICAgLyBhdXRvICAgICAgIG1pbm1heCgwLCAxZnIpXG4gIDtcblxuICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMzMpO1xuICB6LWluZGV4OiAxO1xuXG4gIGJ1dHRvbiB7XG4gICAgZ3JpZC1hcmVhOiBuYXZUb2dnbGU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICBhIHtcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xuICB9XG5cbiAgaDEge1xuICAgIG1hcmdpbjogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbn1cblxubmF2IHtcbiAgZ3JpZC1hcmVhOiBuYXY7XG5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC05OTk5cHgpO1xuXG4gIG9wYWNpdHk6IDAuOTU7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgZGFya2dyZXk7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuXG4gICYgPiAqIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG59XG5cbm1haW4ge1xuICBncmlkLWFyZWE6IG1haW47XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcblxuICBpbWcge1xuICAgIHdpZHRoOiA3MDBweDtcbiAgICBtYXJnaW46IDUwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm94LXNoYWRvdzogMCA1cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4zMyk7XG4gIH1cbn1cblxuZm9vdGVyIHtcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcbiAgcGFkZGluZzogMTVweDtcbiAgYm94LXNoYWRvdzogMCAtNXB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMzMpO1xuICB6LWluZGV4OiAxO1xuXG4gIGEge1xuICAgIGNvbG9yOiBncmV5O1xuICB9XG5cbiAgLy8gU2VwYXJhdGUgZm9vdGVyIGxpbmtzIHdpdGggYnVsbGV0IGNoYXJhY3RlcnNcbiAgYTpub3QoOmxhc3QtY2hpbGQpOjphZnRlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgY29udGVudDogJ1xcMjAyMic7XG4gIH1cbn1cblxuaGVhZGVyLCBmb290ZXIsIG5hdiB7XG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbn1cblxubGkge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY3VycmVudFNlbGVjdGlvbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlSW4ge1xuICBmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MDBweCk7IH1cbiAgdG8gICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlT3V0IHtcbiAgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxuICB0byAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MDBweCk7IH1cbn1cblxuLnNob3dOYXYge1xuICBhbmltYXRpb246IHNsaWRlSW4gNTAwbXM7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4uaGlkZU5hdiB7XG4gIGFuaW1hdGlvbjogc2xpZGVPdXQgNTAwbXM7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/example-full-viewport/example-full-viewport.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/example-full-viewport/example-full-viewport.component.ts ***!
  \**************************************************************************/
/*! exports provided: ExampleFullViewportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleFullViewportComponent", function() { return ExampleFullViewportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _space_images_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../space-images.service */ "./src/app/space-images.service.ts");



var ExampleFullViewportComponent = /** @class */ (function () {
    function ExampleFullViewportComponent(svc) {
        this.title = 'Full-Viewport Application';
        this.showNav = true;
        this.imageItems = svc.load('posters');
    }
    ExampleFullViewportComponent.label = 'So Much Room for Activities!';
    ExampleFullViewportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'example-full-viewport',
            template: __webpack_require__(/*! ./example-full-viewport.component.html */ "./src/app/example-full-viewport/example-full-viewport.component.html"),
            styles: [__webpack_require__(/*! ./example-full-viewport.component.scss */ "./src/app/example-full-viewport/example-full-viewport.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_space_images_service__WEBPACK_IMPORTED_MODULE_2__["SpaceImagesService"]])
    ], ExampleFullViewportComponent);
    return ExampleFullViewportComponent;
}());



/***/ }),

/***/ "./src/app/example-image-gallery/example-image-gallery.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/example-image-gallery/example-image-gallery.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  grid-auto-rows: 150px;\n  grid-gap: 20px;\n\n  min-height: 100vh;\n  padding: 20px;\n  background-color: darkgrey;\n}\n\nimg {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Byb2plY3RzL3NwYWNld2Fsay9zcmMvYXBwL2V4YW1wbGUtaW1hZ2UtZ2FsbGVyeS9leGFtcGxlLWltYWdlLWdhbGxlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw0REFBNEQ7RUFDNUQscUJBQXFCO0VBQ3JCLGNBQWM7O0VBRWQsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoiLi4vcHJvamVjdHMvc3BhY2V3YWxrL3NyYy9hcHAvZXhhbXBsZS1pbWFnZS1nYWxsZXJ5L2V4YW1wbGUtaW1hZ2UtZ2FsbGVyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNTBweCwgMWZyKSk7XG4gIGdyaWQtYXV0by1yb3dzOiAxNTBweDtcbiAgZ3JpZC1nYXA6IDIwcHg7XG5cbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/example-image-gallery/example-image-gallery.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/example-image-gallery/example-image-gallery.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img\n  *ngFor=\"let imageItem of imageItems | async\"\n  [src]=\"imageItem.imageThumbnailUrl\"\n  [title]=\"imageItem.label\"\n>\n"

/***/ }),

/***/ "./src/app/example-image-gallery/example-image-gallery.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/example-image-gallery/example-image-gallery.component.ts ***!
  \**************************************************************************/
/*! exports provided: ExampleImageGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleImageGalleryComponent", function() { return ExampleImageGalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _space_images_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../space-images.service */ "./src/app/space-images.service.ts");



var ExampleImageGalleryComponent = /** @class */ (function () {
    function ExampleImageGalleryComponent(svc) {
        this.imageItems = svc.load('planetary-nebulae');
    }
    ExampleImageGalleryComponent.label = 'Ooooh Pretty';
    ExampleImageGalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'example-image-gallery',
            template: __webpack_require__(/*! ./example-image-gallery.component.html */ "./src/app/example-image-gallery/example-image-gallery.component.html"),
            styles: [__webpack_require__(/*! ./example-image-gallery.component.css */ "./src/app/example-image-gallery/example-image-gallery.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_space_images_service__WEBPACK_IMPORTED_MODULE_2__["SpaceImagesService"]])
    ], ExampleImageGalleryComponent);
    return ExampleImageGalleryComponent;
}());



/***/ }),

/***/ "./src/app/example-media-objects/example-media-objects.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/example-media-objects/example-media-objects.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-gap: 20px;\n\n  min-height: 100%;\n  padding: 20px;\n  background-color: darkgrey;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Byb2plY3RzL3NwYWNld2Fsay9zcmMvYXBwL2V4YW1wbGUtbWVkaWEtb2JqZWN0cy9leGFtcGxlLW1lZGlhLW9iamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw0REFBNEQ7RUFDNUQsY0FBYzs7RUFFZCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDBCQUEwQjtBQUM1QiIsImZpbGUiOiIuLi9wcm9qZWN0cy9zcGFjZXdhbGsvc3JjL2FwcC9leGFtcGxlLW1lZGlhLW9iamVjdHMvZXhhbXBsZS1tZWRpYS1vYmplY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgZ3JpZC1nYXA6IDIwcHg7XG5cbiAgbWluLWhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/example-media-objects/example-media-objects.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/example-media-objects/example-media-objects.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<media-object\n  *ngFor=\"let imageItem of imageItems | async\" \n  [header]=\"imageItem.label\"\n  [image]=\"imageItem.imageThumbnailUrl\"\n  [description]=\"imageItem.description\"\n></media-object>\n"

/***/ }),

/***/ "./src/app/example-media-objects/example-media-objects.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/example-media-objects/example-media-objects.component.ts ***!
  \**************************************************************************/
/*! exports provided: ExampleMediaObjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleMediaObjectsComponent", function() { return ExampleMediaObjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _space_images_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../space-images.service */ "./src/app/space-images.service.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/app/utils.ts");





var ExampleMediaObjectsComponent = /** @class */ (function () {
    function ExampleMediaObjectsComponent(svc) {
        this.imageItems = svc.load('women-in-astronomy')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return Object(_utils__WEBPACK_IMPORTED_MODULE_4__["shuffleArrayInPlace"])(data.slice()); }));
    }
    ExampleMediaObjectsComponent.label = 'I Object!';
    ExampleMediaObjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'example-media-objects',
            template: __webpack_require__(/*! ./example-media-objects.component.html */ "./src/app/example-media-objects/example-media-objects.component.html"),
            styles: [__webpack_require__(/*! ./example-media-objects.component.css */ "./src/app/example-media-objects/example-media-objects.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_space_images_service__WEBPACK_IMPORTED_MODULE_3__["SpaceImagesService"]])
    ], ExampleMediaObjectsComponent);
    return ExampleMediaObjectsComponent;
}());



/***/ }),

/***/ "./src/app/example-overlap/example-overlap.component.css":
/*!***************************************************************!*\
  !*** ./src/app/example-overlap/example-overlap.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: grid;\n  grid-template-columns: repeat(5, 100px);\n  grid-template-rows: repeat(5, 100px);\n  grid-gap: 20px;\n  align-items: start;\n  padding: 20px;\n  background-color: cornsilk;\n}\n\nimg {\n  width: 100%;\n  outline: 3px solid cornsilk;\n}\n\n[title=Mercury] {\n  grid-row-end: -1;\n  grid-column-end: -1;\n}\n\n[title=Earth] {\n  grid-row: 4;\n  grid-column: 4;\n  z-index: 1;\n}\n\n[title=Jupiter] {\n  grid-row: 3 / span 2;\n  grid-column: span 2;\n}\n\n[title=Saturn] {\n  grid-row: 2 / span 2;\n  grid-column: 3 / span 3;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Byb2plY3RzL3NwYWNld2Fsay9zcmMvYXBwL2V4YW1wbGUtb3ZlcmxhcC9leGFtcGxlLW92ZXJsYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHVCQUF1QjtBQUN6QiIsImZpbGUiOiIuLi9wcm9qZWN0cy9zcGFjZXdhbGsvc3JjL2FwcC9leGFtcGxlLW92ZXJsYXAvZXhhbXBsZS1vdmVybGFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDEwMHB4KTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMTAwcHgpO1xuICBncmlkLWdhcDogMjBweDtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3Juc2lsaztcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG91dGxpbmU6IDNweCBzb2xpZCBjb3Juc2lsaztcbn1cblxuW3RpdGxlPU1lcmN1cnldIHtcbiAgZ3JpZC1yb3ctZW5kOiAtMTtcbiAgZ3JpZC1jb2x1bW4tZW5kOiAtMTtcbn1cblxuW3RpdGxlPUVhcnRoXSB7XG4gIGdyaWQtcm93OiA0O1xuICBncmlkLWNvbHVtbjogNDtcbiAgei1pbmRleDogMTtcbn1cblxuW3RpdGxlPUp1cGl0ZXJdIHtcbiAgZ3JpZC1yb3c6IDMgLyBzcGFuIDI7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XG59XG5cblt0aXRsZT1TYXR1cm5dIHtcbiAgZ3JpZC1yb3c6IDIgLyBzcGFuIDI7XG4gIGdyaWQtY29sdW1uOiAzIC8gc3BhbiAzO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/example-overlap/example-overlap.component.html":
/*!****************************************************************!*\
  !*** ./src/app/example-overlap/example-overlap.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img *ngFor=\"let imageItem of imageItems | async\"\n  [src]=\"imageItem.imageThumbnailUrl\"\n  [title]=\"imageItem.label\"\n>\n"

/***/ }),

/***/ "./src/app/example-overlap/example-overlap.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/example-overlap/example-overlap.component.ts ***!
  \**************************************************************/
/*! exports provided: ExampleOverlapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleOverlapComponent", function() { return ExampleOverlapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _space_images_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../space-images.service */ "./src/app/space-images.service.ts");



var ExampleOverlapComponent = /** @class */ (function () {
    function ExampleOverlapComponent(svc) {
        this.imageItems = svc.load('planets');
    }
    ExampleOverlapComponent.label = 'When Worlds Collide';
    ExampleOverlapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'example-overlap',
            template: __webpack_require__(/*! ./example-overlap.component.html */ "./src/app/example-overlap/example-overlap.component.html"),
            styles: [__webpack_require__(/*! ./example-overlap.component.css */ "./src/app/example-overlap/example-overlap.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_space_images_service__WEBPACK_IMPORTED_MODULE_2__["SpaceImagesService"]])
    ], ExampleOverlapComponent);
    return ExampleOverlapComponent;
}());



/***/ }),

/***/ "./src/app/example-playing-cards/example-playing-cards.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/example-playing-cards/example-playing-cards.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 2.5in);\n  grid-gap: 0.25in;\n  padding: 0.25in;\n  background-color: green;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Byb2plY3RzL3NwYWNld2Fsay9zcmMvYXBwL2V4YW1wbGUtcGxheWluZy1jYXJkcy9leGFtcGxlLXBsYXlpbmctY2FyZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiwrQ0FBK0M7RUFDL0MsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix1QkFBdUI7QUFDekIiLCJmaWxlIjoiLi4vcHJvamVjdHMvc3BhY2V3YWxrL3NyYy9hcHAvZXhhbXBsZS1wbGF5aW5nLWNhcmRzL2V4YW1wbGUtcGxheWluZy1jYXJkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIDIuNWluKTtcbiAgZ3JpZC1nYXA6IDAuMjVpbjtcbiAgcGFkZGluZzogMC4yNWluO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/example-playing-cards/example-playing-cards.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/example-playing-cards/example-playing-cards.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngFor=\"let suit of suits\">\n  <ng-container *ngFor=\"let rank of ranks\">\n    <playing-card [rank]=\"rank\" [suit]=\"suit\"></playing-card>\n  </ng-container>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/example-playing-cards/example-playing-cards.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/example-playing-cards/example-playing-cards.component.ts ***!
  \**************************************************************************/
/*! exports provided: ExamplePlayingCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplePlayingCardsComponent", function() { return ExamplePlayingCardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ExamplePlayingCardsComponent = /** @class */ (function () {
    function ExamplePlayingCardsComponent() {
        this.suits = [
            'spades',
            'hearts',
            'clubs',
            'diamonds',
        ];
        this.ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    }
    ExamplePlayingCardsComponent.label = 'Playing With a Full Deck';
    ExamplePlayingCardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'example-playing-cards',
            template: __webpack_require__(/*! ./example-playing-cards.component.html */ "./src/app/example-playing-cards/example-playing-cards.component.html"),
            styles: [__webpack_require__(/*! ./example-playing-cards.component.css */ "./src/app/example-playing-cards/example-playing-cards.component.css")]
        })
    ], ExamplePlayingCardsComponent);
    return ExamplePlayingCardsComponent;
}());



/***/ }),

/***/ "./src/app/example-sandbox/example-sandbox.component.css":
/*!***************************************************************!*\
  !*** ./src/app/example-sandbox/example-sandbox.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* See comments at the bottom for changes to try. */\n\n.sandbox {\n  background-color: lightblue;\n  padding: 20px;\n}\n\n.sandbox > * {\n  background-color: white;\n  padding: 20px;\n}\n\nimg {\n  width: 100%;\n}\n\nheader {\n}\n\naside {\n}\n\nmain {\n}\n\n.carl {\n}\n\n.pbd {\n}\n\nfooter {\n}\n\n/*\n\n.sandbox {\n  display: grid;\n  grid-gap: 20px;\n  grid-template:\n    \" header header header \"\n    \" aside  main   carl   \"\n    \" aside  main   pbd    \"\n    \" footer footer footer \"\n    / 200px  2fr    1fr\n  ;\n\n  background-color: lightblue;\n  padding: 20px;\n}\n\n@media (max-width: 600px) {\n\n  .sandbox {\n    grid-template:\n      \" carl   \"\n      \" header \"\n      \" aside  \"\n      \" main   \"\n      \" pbd    \"\n      \" footer \"\n    ;\n  }\n}\n\n.sandbox > * {\n  background-color: white;\n  padding: 20px;\n}\n\nimg {\n  width: 100%;\n}\n\nheader { grid-area: header; }\naside  { grid-area: aside;  }\nmain   { grid-area: main;   }\n.carl  { grid-area: carl;   }\n.pbd   { grid-area: pbd;    }\nfooter { grid-area: footer; }\n\n*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Byb2plY3RzL3NwYWNld2Fsay9zcmMvYXBwL2V4YW1wbGUtc2FuZGJveC9leGFtcGxlLXNhbmRib3guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtREFBbUQ7O0FBRW5EO0VBQ0UsMkJBQTJCO0VBQzNCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBK0NDIiwiZmlsZSI6Ii4uL3Byb2plY3RzL3NwYWNld2Fsay9zcmMvYXBwL2V4YW1wbGUtc2FuZGJveC9leGFtcGxlLXNhbmRib3guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNlZSBjb21tZW50cyBhdCB0aGUgYm90dG9tIGZvciBjaGFuZ2VzIHRvIHRyeS4gKi9cblxuLnNhbmRib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5zYW5kYm94ID4gKiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuaGVhZGVyIHtcbn1cblxuYXNpZGUge1xufVxuXG5tYWluIHtcbn1cblxuLmNhcmwge1xufVxuXG4ucGJkIHtcbn1cblxuZm9vdGVyIHtcbn1cblxuLypcblxuLnNhbmRib3gge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMjBweDtcbiAgZ3JpZC10ZW1wbGF0ZTpcbiAgICBcIiBoZWFkZXIgaGVhZGVyIGhlYWRlciBcIlxuICAgIFwiIGFzaWRlICBtYWluICAgY2FybCAgIFwiXG4gICAgXCIgYXNpZGUgIG1haW4gICBwYmQgICAgXCJcbiAgICBcIiBmb290ZXIgZm9vdGVyIGZvb3RlciBcIlxuICAgIC8gMjAwcHggIDJmciAgICAxZnJcbiAgO1xuXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cbiAgLnNhbmRib3gge1xuICAgIGdyaWQtdGVtcGxhdGU6XG4gICAgICBcIiBjYXJsICAgXCJcbiAgICAgIFwiIGhlYWRlciBcIlxuICAgICAgXCIgYXNpZGUgIFwiXG4gICAgICBcIiBtYWluICAgXCJcbiAgICAgIFwiIHBiZCAgICBcIlxuICAgICAgXCIgZm9vdGVyIFwiXG4gICAgO1xuICB9XG59XG5cbi5zYW5kYm94ID4gKiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuaGVhZGVyIHsgZ3JpZC1hcmVhOiBoZWFkZXI7IH1cbmFzaWRlICB7IGdyaWQtYXJlYTogYXNpZGU7ICB9XG5tYWluICAgeyBncmlkLWFyZWE6IG1haW47ICAgfVxuLmNhcmwgIHsgZ3JpZC1hcmVhOiBjYXJsOyAgIH1cbi5wYmQgICB7IGdyaWQtYXJlYTogcGJkOyAgICB9XG5mb290ZXIgeyBncmlkLWFyZWE6IGZvb3RlcjsgfVxuXG4qL1xuIl19 */"

/***/ }),

/***/ "./src/app/example-sandbox/example-sandbox.component.html":
/*!****************************************************************!*\
  !*** ./src/app/example-sandbox/example-sandbox.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sandbox\">\n  <header>\n    <h1>Pale Blue Dot</h1>\n  </header>\n\n  <main>\n    <p>\n      Consider again that dot. That's here. That's home. That's us. On it\n      everyone you love, everyone you know, everyone you ever heard of, every\n      human being who ever was, lived out their lives. The aggregate of our\n      joy and suffering, thousands of confident religions, ideologies, and\n      economic doctrines, every hunter and forager, every hero and coward,\n      every creator and destroyer of civilization, every king and peasant,\n      every young couple in love, every mother and father, hopeful child,\n      inventor and explorer, every teacher of morals, every corrupt\n      politician, every \"superstar\", every \"supreme leader\", every saint and\n      sinner in the history of our species lived there — on a mote of dust\n      suspended in a sunbeam.\n    </p>\n\n    <p>\n      The Earth is a very small stage in a vast cosmic arena. Think of the\n      rivers of blood spilled by all those generals and emperors so that, in\n      glory and triumph, they could become the momentary masters of a\n      fraction of a dot. Think of the endless cruelties visited by the\n      inhabitants of one corner of this pixel on the scarcely distinguishable\n      inhabitants of some other corner, how frequent their misunderstandings,\n      how eager they are to kill one another, how fervent their hatreds. \n    </p>\n\n    <p>\n      Our posturings, our imagined self-importance, the delusion that we have\n      some privileged position in the Universe, are challenged by this point\n      of pale light. Our planet is a lonely speck in the great enveloping\n      cosmic dark. In our obscurity, in all this vastness, there is no hint\n      that help will come from elsewhere to save us from ourselves. \n    </p>\n\n    <p>\n      The Earth is the only world known so far to harbor life. There is\n      nowhere else, at least in the near future, to which our species could\n      migrate. Visit, yes. Settle, not yet. Like it or not, for the moment\n      the Earth is where we make our stand. \n    </p>\n\n    <p>\n      It has been said that astronomy is a humbling and character-building\n      experience. There is perhaps no better demonstration of the folly of\n      human conceits than this distant image of our tiny world. To me, it\n      underscores our responsibility to deal more kindly with one another,\n      and to preserve and cherish the pale blue dot, the only home we've ever\n      known.\n    </p>\n  </main>\n\n  <img class=\"carl\" src=\"/assets/misc/Carl_Sagan_-_1980.jpg\">\n\n  <img class=\"pbd\" src=\"/assets/misc/Pale_Blue_Dot.png\">\n\n  <aside>\n    <h2>\n      If we crave some cosmic purpose, then let us find\n      ourselves a worthy goal.\n    </h2>\n  </aside>\n\n  <footer>\n    <h3>\n      Text from\n      <em>Pale Blue Dot: A Vision of the Human Future in Space</em>\n      by Carl Sagan (1994)\n    </h3>\n  </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/example-sandbox/example-sandbox.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/example-sandbox/example-sandbox.component.ts ***!
  \**************************************************************/
/*! exports provided: ExampleSandboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleSandboxComponent", function() { return ExampleSandboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ExampleSandboxComponent = /** @class */ (function () {
    function ExampleSandboxComponent() {
    }
    ExampleSandboxComponent.label = 'Some Assembly Required';
    ExampleSandboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'example-sandbox',
            template: __webpack_require__(/*! ./example-sandbox.component.html */ "./src/app/example-sandbox/example-sandbox.component.html"),
            styles: [__webpack_require__(/*! ./example-sandbox.component.css */ "./src/app/example-sandbox/example-sandbox.component.css")]
        })
    ], ExampleSandboxComponent);
    return ExampleSandboxComponent;
}());



/***/ }),

/***/ "./src/app/example-spanning/example-spanning.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/example-spanning/example-spanning.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 100px);\n  grid-auto-rows: 100px;\n  grid-auto-flow: dense; \n  grid-gap: 20px;\n  align-items: start;\n  padding: 20px;\n  background-color: lightblue;\n}\n\nimg {\n  width: 100%;\n}\n\n[title=Jupiter] {\n  grid-row: span 2;\n  grid-column: span 2;\n}\n\n[title=Saturn] {\n  grid-row: span 2;\n  grid-column: span 3;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Byb2plY3RzL3NwYWNld2Fsay9zcmMvYXBwL2V4YW1wbGUtc3Bhbm5pbmcvZXhhbXBsZS1zcGFubmluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLCtDQUErQztFQUMvQyxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6Ii4uL3Byb2plY3RzL3NwYWNld2Fsay9zcmMvYXBwL2V4YW1wbGUtc3Bhbm5pbmcvZXhhbXBsZS1zcGFubmluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIDEwMHB4KTtcbiAgZ3JpZC1hdXRvLXJvd3M6IDEwMHB4O1xuICBncmlkLWF1dG8tZmxvdzogZGVuc2U7IFxuICBncmlkLWdhcDogMjBweDtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5bdGl0bGU9SnVwaXRlcl0ge1xuICBncmlkLXJvdzogc3BhbiAyO1xuICBncmlkLWNvbHVtbjogc3BhbiAyO1xufVxuXG5bdGl0bGU9U2F0dXJuXSB7XG4gIGdyaWQtcm93OiBzcGFuIDI7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDM7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/example-spanning/example-spanning.component.html":
/*!******************************************************************!*\
  !*** ./src/app/example-spanning/example-spanning.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img *ngFor=\"let imageItem of imageItems | async\"\n  [src]=\"imageItem.imageThumbnailUrl\"\n  [title]=\"imageItem.label\"\n>\n"

/***/ }),

/***/ "./src/app/example-spanning/example-spanning.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/example-spanning/example-spanning.component.ts ***!
  \****************************************************************/
/*! exports provided: ExampleSpanningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleSpanningComponent", function() { return ExampleSpanningComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _space_images_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../space-images.service */ "./src/app/space-images.service.ts");



var ExampleSpanningComponent = /** @class */ (function () {
    function ExampleSpanningComponent(svc) {
        this.imageItems = svc.load('planets');
    }
    ExampleSpanningComponent.label = 'It\'s All Going According to Span';
    ExampleSpanningComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'example-spanning',
            template: __webpack_require__(/*! ./example-spanning.component.html */ "./src/app/example-spanning/example-spanning.component.html"),
            styles: [__webpack_require__(/*! ./example-spanning.component.css */ "./src/app/example-spanning/example-spanning.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_space_images_service__WEBPACK_IMPORTED_MODULE_2__["SpaceImagesService"]])
    ], ExampleSpanningComponent);
    return ExampleSpanningComponent;
}());



/***/ }),

/***/ "./src/app/example-transform/example-transform.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/example-transform/example-transform.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: grid;\n\n  /* Uncomment to make the outer edge of the component visible */\n  /*border: 3px solid lightgrey;*/\n\n  margin: 100px;\n  height: 500px;\n\n  grid-template-columns: repeat(auto-fill, 75px);\n}\n\n\n/* All grid items */\n\n\n:host > * {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100px;\n  height: 150px;\n  padding: 5px;\n  color: black;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  background-color: rgb(255, 245, 161);\n  box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.3);\n\n  font-size: 9px;\n  font-weight: bold;\n  font-family: sans-serif;\n  \n  -webkit-animation: unexamine 0.5s linear;\n  \n          animation: unexamine 0.5s linear;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n\n/* Note: `*:hover` requires <!doctype html> */\n\n\n:host > *:hover {\n  -webkit-animation: examine 0.5s linear;\n          animation: examine 0.5s linear;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  z-index: 1;\n}\n\n\n/* Enlarge and straighten. */\n\n\n@-webkit-keyframes examine {\n  to   { transform: scale(2) rotate(0); }\n  from { transform: scale(1) rotate(-15deg); }\n}\n\n\n@keyframes examine {\n  to   { transform: scale(2) rotate(0); }\n  from { transform: scale(1) rotate(-15deg); }\n}\n\n\n/* Return to original size and angle. */\n\n\n@-webkit-keyframes unexamine {\n  from { transform: scale(2) rotate(0); }\n  to   { transform: scale(1) rotate(-15deg); }\n}\n\n\n@keyframes unexamine {\n  from { transform: scale(2) rotate(0); }\n  to   { transform: scale(1) rotate(-15deg); }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Byb2plY3RzL3NwYWNld2Fsay9zcmMvYXBwL2V4YW1wbGUtdHJhbnNmb3JtL2V4YW1wbGUtdHJhbnNmb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhOztFQUViLDhEQUE4RDtFQUM5RCwrQkFBK0I7O0VBRS9CLGFBQWE7RUFDYixhQUFhOztFQUViLDhDQUE4QztBQUNoRDs7O0FBR0EsbUJBQW1COzs7QUFDbkI7RUFDRSxvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsb0NBQW9DO0VBQ3BDLDRDQUE0Qzs7RUFFNUMsY0FBYztFQUNkLGlCQUFpQjtFQUNqQix1QkFBdUI7O0VBRXZCLHdDQUFnQzs7VUFBaEMsZ0NBQWdDO0VBQ2hDLHFDQUE2QjtVQUE3Qiw2QkFBNkI7QUFDL0I7OztBQUVBLDZDQUE2Qzs7O0FBQzdDO0VBQ0Usc0NBQThCO1VBQTlCLDhCQUE4QjtFQUM5QixxQ0FBNkI7VUFBN0IsNkJBQTZCO0VBQzdCLFVBQVU7QUFDWjs7O0FBRUEsNEJBQTRCOzs7QUFDNUI7RUFDRSxPQUFPLDZCQUE2QixFQUFFO0VBQ3RDLE9BQU8sa0NBQWtDLEVBQUU7QUFDN0M7OztBQUhBO0VBQ0UsT0FBTyw2QkFBNkIsRUFBRTtFQUN0QyxPQUFPLGtDQUFrQyxFQUFFO0FBQzdDOzs7QUFFQSx1Q0FBdUM7OztBQUN2QztFQUNFLE9BQU8sNkJBQTZCLEVBQUU7RUFDdEMsT0FBTyxrQ0FBa0MsRUFBRTtBQUM3Qzs7O0FBSEE7RUFDRSxPQUFPLDZCQUE2QixFQUFFO0VBQ3RDLE9BQU8sa0NBQWtDLEVBQUU7QUFDN0MiLCJmaWxlIjoiLi4vcHJvamVjdHMvc3BhY2V3YWxrL3NyYy9hcHAvZXhhbXBsZS10cmFuc2Zvcm0vZXhhbXBsZS10cmFuc2Zvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZ3JpZDtcblxuICAvKiBVbmNvbW1lbnQgdG8gbWFrZSB0aGUgb3V0ZXIgZWRnZSBvZiB0aGUgY29tcG9uZW50IHZpc2libGUgKi9cbiAgLypib3JkZXI6IDNweCBzb2xpZCBsaWdodGdyZXk7Ki9cblxuICBtYXJnaW46IDEwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgNzVweCk7XG59XG5cblxuLyogQWxsIGdyaWQgaXRlbXMgKi9cbjpob3N0ID4gKiB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI0NSwgMTYxKTtcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMyk7XG5cbiAgZm9udC1zaXplOiA5cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgXG4gIGFuaW1hdGlvbjogdW5leGFtaW5lIDAuNXMgbGluZWFyO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLyogTm90ZTogYCo6aG92ZXJgIHJlcXVpcmVzIDwhZG9jdHlwZSBodG1sPiAqL1xuOmhvc3QgPiAqOmhvdmVyIHtcbiAgYW5pbWF0aW9uOiBleGFtaW5lIDAuNXMgbGluZWFyO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgei1pbmRleDogMTtcbn1cblxuLyogRW5sYXJnZSBhbmQgc3RyYWlnaHRlbi4gKi9cbkBrZXlmcmFtZXMgZXhhbWluZSB7XG4gIHRvICAgeyB0cmFuc2Zvcm06IHNjYWxlKDIpIHJvdGF0ZSgwKTsgfVxuICBmcm9tIHsgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoLTE1ZGVnKTsgfVxufVxuXG4vKiBSZXR1cm4gdG8gb3JpZ2luYWwgc2l6ZSBhbmQgYW5nbGUuICovXG5Aa2V5ZnJhbWVzIHVuZXhhbWluZSB7XG4gIGZyb20geyB0cmFuc2Zvcm06IHNjYWxlKDIpIHJvdGF0ZSgwKTsgfVxuICB0byAgIHsgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoLTE1ZGVnKTsgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/example-transform/example-transform.component.html":
/*!********************************************************************!*\
  !*** ./src/app/example-transform/example-transform.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<captioned-image\n  *ngFor=\"let imageItem of imageItems | async\"\n  [src]=\"imageItem.imageThumbnailUrl\"\n  [caption]=\"imageItem.label\"\n></captioned-image>\n"

/***/ }),

/***/ "./src/app/example-transform/example-transform.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/example-transform/example-transform.component.ts ***!
  \******************************************************************/
/*! exports provided: ExampleTransformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTransformComponent", function() { return ExampleTransformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _space_images_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../space-images.service */ "./src/app/space-images.service.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/app/utils.ts");





var ExampleTransformComponent = /** @class */ (function () {
    function ExampleTransformComponent(svc) {
        this.imageItems = svc.load('women-in-space')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return Object(_utils__WEBPACK_IMPORTED_MODULE_4__["shuffleArrayInPlace"])(data.slice()); }));
    }
    ExampleTransformComponent.label = 'I Want to Break Free';
    ExampleTransformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'example-transform',
            template: __webpack_require__(/*! ./example-transform.component.html */ "./src/app/example-transform/example-transform.component.html"),
            styles: [__webpack_require__(/*! ./example-transform.component.css */ "./src/app/example-transform/example-transform.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_space_images_service__WEBPACK_IMPORTED_MODULE_3__["SpaceImagesService"]])
    ], ExampleTransformComponent);
    return ExampleTransformComponent;
}());



/***/ }),

/***/ "./src/app/example-video-viewer/example-video-viewer.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/example-video-viewer/example-video-viewer.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: grid;\n  grid-gap: 0;\n  grid-template:\n    \"  list                  .      player               \" auto\n    /  minmax(200px, 1.5fr)  0.5fr  minmax(250px, 2.5fr)\n  ;\n  \n  height: 100vh;\n  overflow: hidden;\n  perspective: 70em;\n  background-color: lightblue;\n}\n\nvideo-list    { grid-area: list; }\n\nvideo-player  { grid-area: player; }\n\nvideo-list {\n  height: 130vh;\n  display: block;\n  background: black;\n  overflow-y: auto;\n  padding: 10px;\n  padding-top: 10vh;\n  padding-bottom: 10vh;\n  transform:\n    rotate(-5deg)\n    translate(85px, -15vh)\n    rotateY(30deg)\n  ;\n  box-shadow: 20px 15px 10px 0 rgba(0, 0, 0, 0.33);\n  outline: 15px solid black;\n  border-left: 15px solid;\n  border-right: 15px solid;\n  -o-border-image: repeating-linear-gradient(black, black 15px, lightblue 15px, lightblue 30px) 1;\n     border-image: repeating-linear-gradient(black, black 15px, lightblue 15px, lightblue 30px) 1;\n\n  /* Hide scrollbar on Firefox */\n  scrollbar-width: none;\n}\n\n/* Hide scrollbar on Chrome, Safari */\n\nvideo-list::-webkit-scrollbar {\n  display: none;\n}\n\n.highlighted {\n  background-color: rgb(255, 253, 210);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Byb2plY3RzL3NwYWNld2Fsay9zcmMvYXBwL2V4YW1wbGUtdmlkZW8tdmlld2VyL2V4YW1wbGUtdmlkZW8tdmlld2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYOzs7RUFHQTs7RUFFQSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQiwyQkFBMkI7QUFDN0I7O0FBRUEsZ0JBQWdCLGVBQWUsRUFBRTs7QUFDakMsZ0JBQWdCLGlCQUFpQixFQUFFOztBQUVuQztFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQjs7OztFQUlBO0VBQ0EsZ0RBQWdEO0VBQ2hELHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLCtGQUE0RjtLQUE1Riw0RkFBNEY7O0VBRTVGLDhCQUE4QjtFQUM5QixxQkFBcUI7QUFDdkI7O0FBRUEscUNBQXFDOztBQUNyQztFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0QyIsImZpbGUiOiIuLi9wcm9qZWN0cy9zcGFjZXdhbGsvc3JjL2FwcC9leGFtcGxlLXZpZGVvLXZpZXdlci9leGFtcGxlLXZpZGVvLXZpZXdlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMDtcbiAgZ3JpZC10ZW1wbGF0ZTpcbiAgICBcIiAgbGlzdCAgICAgICAgICAgICAgICAgIC4gICAgICBwbGF5ZXIgICAgICAgICAgICAgICBcIiBhdXRvXG4gICAgLyAgbWlubWF4KDIwMHB4LCAxLjVmcikgIDAuNWZyICBtaW5tYXgoMjUwcHgsIDIuNWZyKVxuICA7XG4gIFxuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwZXJzcGVjdGl2ZTogNzBlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xufVxuXG52aWRlby1saXN0ICAgIHsgZ3JpZC1hcmVhOiBsaXN0OyB9XG52aWRlby1wbGF5ZXIgIHsgZ3JpZC1hcmVhOiBwbGF5ZXI7IH1cblxudmlkZW8tbGlzdCB7XG4gIGhlaWdodDogMTMwdmg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy10b3A6IDEwdmg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHZoO1xuICB0cmFuc2Zvcm06XG4gICAgcm90YXRlKC01ZGVnKVxuICAgIHRyYW5zbGF0ZSg4NXB4LCAtMTV2aClcbiAgICByb3RhdGVZKDMwZGVnKVxuICA7XG4gIGJveC1zaGFkb3c6IDIwcHggMTVweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjMzKTtcbiAgb3V0bGluZTogMTVweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQ7XG4gIGJvcmRlci1yaWdodDogMTVweCBzb2xpZDtcbiAgYm9yZGVyLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KGJsYWNrLCBibGFjayAxNXB4LCBsaWdodGJsdWUgMTVweCwgbGlnaHRibHVlIDMwcHgpIDE7XG5cbiAgLyogSGlkZSBzY3JvbGxiYXIgb24gRmlyZWZveCAqL1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG59XG5cbi8qIEhpZGUgc2Nyb2xsYmFyIG9uIENocm9tZSwgU2FmYXJpICovXG52aWRlby1saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5oaWdobGlnaHRlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1MywgMjEwKTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/example-video-viewer/example-video-viewer.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/example-video-viewer/example-video-viewer.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<video-list\n  [videoData]=\"videosObservable | async\"\n  (selectVideo)=\"setCurrentVideo($event)\"\n></video-list>\n\n<video-player [video]=\"currentVideo\"></video-player>\n"

/***/ }),

/***/ "./src/app/example-video-viewer/example-video-viewer.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/example-video-viewer/example-video-viewer.component.ts ***!
  \************************************************************************/
/*! exports provided: ExampleVideoViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleVideoViewerComponent", function() { return ExampleVideoViewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _space_videos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../space-videos.service */ "./src/app/space-videos.service.ts");



var ExampleVideoViewerComponent = /** @class */ (function () {
    function ExampleVideoViewerComponent(svc) {
        this.videosObservable = svc.load('misc');
    }
    ExampleVideoViewerComponent.prototype.setCurrentVideo = function (v) {
        this.currentVideo = v;
    };
    ExampleVideoViewerComponent.label = 'And Yet It Moves';
    ExampleVideoViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'example-video-viewer',
            template: __webpack_require__(/*! ./example-video-viewer.component.html */ "./src/app/example-video-viewer/example-video-viewer.component.html"),
            styles: [__webpack_require__(/*! ./example-video-viewer.component.css */ "./src/app/example-video-viewer/example-video-viewer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_space_videos_service__WEBPACK_IMPORTED_MODULE_2__["SpaceVideosService"]])
    ], ExampleVideoViewerComponent);
    return ExampleVideoViewerComponent;
}());



/***/ }),

/***/ "./src/app/examples.ts":
/*!*****************************!*\
  !*** ./src/app/examples.ts ***!
  \*****************************/
/*! exports provided: examples */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "examples", function() { return examples; });
/* harmony import */ var _example_blocks_example_blocks_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./example-blocks/example-blocks.component */ "./src/app/example-blocks/example-blocks.component.ts");
/* harmony import */ var _example_centering_example_centering_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./example-centering/example-centering.component */ "./src/app/example-centering/example-centering.component.ts");
/* harmony import */ var _example_chessboard_example_chessboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./example-chessboard/example-chessboard.component */ "./src/app/example-chessboard/example-chessboard.component.ts");
/* harmony import */ var _example_debugging_example_debugging_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./example-debugging/example-debugging.component */ "./src/app/example-debugging/example-debugging.component.ts");
/* harmony import */ var _example_forms_example_forms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./example-forms/example-forms.component */ "./src/app/example-forms/example-forms.component.ts");
/* harmony import */ var _example_full_viewport_example_full_viewport_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./example-full-viewport/example-full-viewport.component */ "./src/app/example-full-viewport/example-full-viewport.component.ts");
/* harmony import */ var _example_image_gallery_example_image_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./example-image-gallery/example-image-gallery.component */ "./src/app/example-image-gallery/example-image-gallery.component.ts");
/* harmony import */ var _example_media_objects_example_media_objects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./example-media-objects/example-media-objects.component */ "./src/app/example-media-objects/example-media-objects.component.ts");
/* harmony import */ var _example_overlap_example_overlap_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./example-overlap/example-overlap.component */ "./src/app/example-overlap/example-overlap.component.ts");
/* harmony import */ var _example_playing_cards_example_playing_cards_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./example-playing-cards/example-playing-cards.component */ "./src/app/example-playing-cards/example-playing-cards.component.ts");
/* harmony import */ var _example_sandbox_example_sandbox_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./example-sandbox/example-sandbox.component */ "./src/app/example-sandbox/example-sandbox.component.ts");
/* harmony import */ var _example_spanning_example_spanning_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./example-spanning/example-spanning.component */ "./src/app/example-spanning/example-spanning.component.ts");
/* harmony import */ var _example_transform_example_transform_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./example-transform/example-transform.component */ "./src/app/example-transform/example-transform.component.ts");
/* harmony import */ var _example_video_viewer_example_video_viewer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./example-video-viewer/example-video-viewer.component */ "./src/app/example-video-viewer/example-video-viewer.component.ts");














var examples = [
    { path: 'example-centering', component: _example_centering_example_centering_component__WEBPACK_IMPORTED_MODULE_1__["ExampleCenteringComponent"] },
    { path: 'example-sandbox', component: _example_sandbox_example_sandbox_component__WEBPACK_IMPORTED_MODULE_10__["ExampleSandboxComponent"] },
    { path: 'example-blocks', component: _example_blocks_example_blocks_component__WEBPACK_IMPORTED_MODULE_0__["ExampleBlocksComponent"] },
    { path: 'example-debugging', component: _example_debugging_example_debugging_component__WEBPACK_IMPORTED_MODULE_3__["ExampleDebuggingComponent"] },
    { path: 'example-image-gallery', component: _example_image_gallery_example_image_gallery_component__WEBPACK_IMPORTED_MODULE_6__["ExampleImageGalleryComponent"] },
    { path: 'example-playing-cards', component: _example_playing_cards_example_playing_cards_component__WEBPACK_IMPORTED_MODULE_9__["ExamplePlayingCardsComponent"] },
    { path: 'example-spanning', component: _example_spanning_example_spanning_component__WEBPACK_IMPORTED_MODULE_11__["ExampleSpanningComponent"] },
    { path: 'example-overlap', component: _example_overlap_example_overlap_component__WEBPACK_IMPORTED_MODULE_8__["ExampleOverlapComponent"] },
    { path: 'example-forms', component: _example_forms_example_forms_component__WEBPACK_IMPORTED_MODULE_4__["ExampleFormsComponent"] },
    { path: 'example-media-objects', component: _example_media_objects_example_media_objects_component__WEBPACK_IMPORTED_MODULE_7__["ExampleMediaObjectsComponent"] },
    { path: 'example-chessboard', component: _example_chessboard_example_chessboard_component__WEBPACK_IMPORTED_MODULE_2__["ExampleChessboardComponent"] },
    { path: 'example-transform', component: _example_transform_example_transform_component__WEBPACK_IMPORTED_MODULE_12__["ExampleTransformComponent"] },
    { path: 'example-full-viewport', component: _example_full_viewport_example_full_viewport_component__WEBPACK_IMPORTED_MODULE_5__["ExampleFullViewportComponent"] },
    { path: 'example-video-viewer', component: _example_video_viewer_example_video_viewer_component__WEBPACK_IMPORTED_MODULE_13__["ExampleVideoViewerComponent"] },
];


/***/ }),

/***/ "./src/app/main-menu/main-menu.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  grid-auto-rows: 150px;\n  grid-gap: 20px;\n\n  min-height: 100vh;\n  place-content: center;\n  padding: 20px;\n  font-size: 150%;\n  background-color: black;\n  background-image: url('/spacewalk/assets/misc/starfield.png');\n  background-size: contain;\n}\n\na {\n  display: grid;\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  place-content: center;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 10px;\n  font-weight: bold;\n  color: white;\n  background-color: rgba(255, 255, 255, 0.5);\n  text-shadow: 0 0 20px black;\n}\n\na:hover {\n  color: black;\n  background-color: cornsilk;\n  box-shadow: 0 0 20px 5px cornsilk;\n  text-shadow: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Byb2plY3RzL3NwYWNld2Fsay9zcmMvYXBwL21haW4tbWVudS9tYWluLW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw0REFBNEQ7RUFDNUQscUJBQXFCO0VBQ3JCLGNBQWM7O0VBRWQsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtFQUN2Qiw2REFBbUQ7RUFDbkQsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLDBDQUEwQztFQUMxQywyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGlDQUFpQztFQUNqQyxpQkFBaUI7QUFDbkIiLCJmaWxlIjoiLi4vcHJvamVjdHMvc3BhY2V3YWxrL3NyYy9hcHAvbWFpbi1tZW51L21haW4tbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNTBweCwgMWZyKSk7XG4gIGdyaWQtYXV0by1yb3dzOiAxNTBweDtcbiAgZ3JpZC1nYXA6IDIwcHg7XG5cbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1zaXplOiAxNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL21pc2Mvc3RhcmZpZWxkLnBuZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbmEge1xuICBkaXNwbGF5OiBncmlkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIHRleHQtc2hhZG93OiAwIDAgMjBweCBibGFjaztcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogY29ybnNpbGs7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDVweCBjb3Juc2lsaztcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/main-menu/main-menu.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLinkActive=\"currentSelection\" routerLink=\"/welcome\">\n  What? Who?\n</a>\n\n<a *ngFor=\"let example of examples\"\n  routerLinkActive=\"currentSelection\"\n  [routerLink]=\" '/' + example.path \"\n>\n  {{ example.component.label || example.path }}\n</a>\n\n<a routerLinkActive=\"currentSelection\" routerLink=\"/about\">\n  Say \"What?\" Again\n</a>\n\n<a routerLinkActive=\"currentSelection\" routerLink=\"/resources\">\n  And Furthermore\n</a>\n"

/***/ }),

/***/ "./src/app/main-menu/main-menu.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.ts ***!
  \**************************************************/
/*! exports provided: MainMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function() { return MainMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _examples__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../examples */ "./src/app/examples.ts");



var MainMenuComponent = /** @class */ (function () {
    function MainMenuComponent() {
        this.examples = _examples__WEBPACK_IMPORTED_MODULE_2__["examples"];
    }
    MainMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'main-menu',
            template: __webpack_require__(/*! ./main-menu.component.html */ "./src/app/main-menu/main-menu.component.html"),
            styles: [__webpack_require__(/*! ./main-menu.component.css */ "./src/app/main-menu/main-menu.component.css")]
        })
    ], MainMenuComponent);
    return MainMenuComponent;
}());



/***/ }),

/***/ "./src/app/media-object/media-object.component.css":
/*!*********************************************************!*\
  !*** ./src/app/media-object/media-object.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: grid;\n\n  grid-template:\n    \" img    header              \" auto\n    \" img    description         \" minmax(100px, 1fr)\n    / 100px  minmax(0, 1fr)\n  ;\n  grid-gap: 20px;\n\n  padding: 20px;\n  border: 2px solid grey;\n  border-radius: 10px;\n  background: white;\n  box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.3);\n}\n\nimg {\n  grid-area: img;\n  height: 150px;\n  width: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border: 2px solid lightgrey;\n}\n\nheader {\n  grid-area: header;\n  font-weight: bold;\n  font-size: 125%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.description {\n  grid-area: description;\n  overflow: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Byb2plY3RzL3NwYWNld2Fsay9zcmMvYXBwL21lZGlhLW9iamVjdC9tZWRpYS1vYmplY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7O0VBRWI7Ozs7RUFJQTtFQUNBLGNBQWM7O0VBRWQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsWUFBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6Ii4uL3Byb2plY3RzL3NwYWNld2Fsay9zcmMvYXBwL21lZGlhLW9iamVjdC9tZWRpYS1vYmplY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZ3JpZDtcblxuICBncmlkLXRlbXBsYXRlOlxuICAgIFwiIGltZyAgICBoZWFkZXIgICAgICAgICAgICAgIFwiIGF1dG9cbiAgICBcIiBpbWcgICAgZGVzY3JpcHRpb24gICAgICAgICBcIiBtaW5tYXgoMTAwcHgsIDFmcilcbiAgICAvIDEwMHB4ICBtaW5tYXgoMCwgMWZyKVxuICA7XG4gIGdyaWQtZ2FwOiAyMHB4O1xuXG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuaW1nIHtcbiAgZ3JpZC1hcmVhOiBpbWc7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcbn1cblxuaGVhZGVyIHtcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEyNSU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/media-object/media-object.component.html":
/*!**********************************************************!*\
  !*** ./src/app/media-object/media-object.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img [src]=\"image\">\n<header>{{ header }}</header>\n<div class=\"description\">{{ description }}</div>\n"

/***/ }),

/***/ "./src/app/media-object/media-object.component.ts":
/*!********************************************************!*\
  !*** ./src/app/media-object/media-object.component.ts ***!
  \********************************************************/
/*! exports provided: MediaObjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaObjectComponent", function() { return MediaObjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var MediaObjectComponent = /** @class */ (function () {
    function MediaObjectComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MediaObjectComponent.prototype, "header", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MediaObjectComponent.prototype, "image", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MediaObjectComponent.prototype, "description", void 0);
    MediaObjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'media-object',
            template: __webpack_require__(/*! ./media-object.component.html */ "./src/app/media-object/media-object.component.html"),
            styles: [__webpack_require__(/*! ./media-object.component.css */ "./src/app/media-object/media-object.component.css")]
        })
    ], MediaObjectComponent);
    return MediaObjectComponent;
}());



/***/ }),

/***/ "./src/app/playing-card/playing-card.component.html":
/*!**********************************************************!*\
  !*** ./src/app/playing-card/playing-card.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"playing-card front\" [ngClass]=\"suit\">\n  <div class=\"rank\">{{ rank }}</div>\n  <div class=\"corner-pip\">{{ pip }}</div>\n  <div class=\"design\" [ngClass]=\" 'rank-' + rank \">\n    <img *ngIf=\"cardImageUrl\" [src]=\"cardImageUrl\">\n    <div *ngFor=\"let designPip of designPips; index as i\"\n      [ngClass]=\" 'p' + (i + 1) \"\n    >\n      {{ pip }}\n    </div>\n  </div>\n  <div class=\"inverted corner-pip\">{{ pip }}</div>\n  <div class=\"inverted rank\">{{ rank }}</div>\n</div>\n"

/***/ }),

/***/ "./src/app/playing-card/playing-card.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/playing-card/playing-card.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n\n.playing-card {\n  font-family: Helvetica, sans-serif;\n  font-weight: bold;\n  font-size: 24px;\n  width: 2.5in;\n  height: 3.5in;\n  margin: 0;\n  padding: 10px;\n  border: 2px solid black;\n  border-radius: 10px;\n  display: grid;\n  grid-template: \" rank        .       .                   \"  auto \" corner-pip  design  .                   \"  auto \" .           design  .                   \"  1fr \" .           design  inverted-corner-pip \"  auto \" .           .       inverted-rank       \"  auto / auto        1fr     auto; }\n\n.playing-card.front {\n    background-color: white; }\n\n.rank, .corner-pip, .design {\n  align-self: center;\n  justify-self: center; }\n\n.rank {\n  grid-area: rank; }\n\n.corner-pip {\n  grid-area: corner-pip; }\n\n.design {\n  align-items: center;\n  grid-area: design;\n  display: grid;\n  font-size: 54px;\n  height: 100%; }\n\n.design.rank-A {\n  grid-template: \" p1 \" 1fr / 1fr;\n  font-size: 144px; }\n\n.design.rank-J,\n.design.rank-Q,\n.design.rank-K {\n  grid-template: \" p1 \" 1fr / 1fr;\n  align-items: middle;\n  justify-items: center; }\n\n.design.rank-J img,\n  .design.rank-Q img,\n  .design.rank-K img {\n    max-width: 100%;\n    max-height: 100%; }\n\n.design.rank-2 {\n  grid-template: \" .   .   .   \" 1fr \" .   p1  .   \" 1fr \" .   .   .   \" 1fr \" .   .   .   \" 1fr \" .   .   .   \" 1fr \" .   p2  .   \" 1fr \" .   .   .   \" 1fr / 1fr 1fr 1fr; }\n\n.design.rank-3 {\n  grid-template: \" .   p1  .   \" 1fr \" .   p2  .   \" 1fr \" .   p3  .   \" 1fr / 1fr 1fr 1fr; }\n\n.design.rank-4 {\n  grid-template: \" .   .   .   \" 1fr \" p1  .   p2  \" 1fr \" .   .   .   \" 1fr \" .   .   .   \" 1fr \" .   .   .   \" 1fr \" p3  .   p4  \" 1fr \" .   .   .   \" 1fr / 1fr 1fr 1fr; }\n\n.design.rank-5 {\n  grid-template: \" .   .   .   \" 1fr \" p1  .   p2  \" 1fr \" .   .   .   \" 1fr \" .   p3  .   \" 1fr \" .   .   .   \" 1fr \" p4  .   p5  \" 1fr \" .   .   .   \" 1fr / 1fr 1fr 1fr; }\n\n.design.rank-6 {\n  grid-template: \" .   .   .   \" 1fr \" p1  .   p2  \" 1fr \" .   .   .   \" 1fr \" p3  .   p4  \" 1fr \" .   .   .   \" 1fr \" p5  .   p6  \" 1fr \" .   .   .   \" 1fr / 1fr 1fr 1fr; }\n\n.design.rank-7 {\n  grid-template: \" p1  .   p2  \" 1fr \" p1  p3  p2  \" 1fr \" p4  p3  p5  \" 1fr \" p4  .   p5  \" 1fr \" p6  .   p7  \" 1fr \" p6  .   p7  \" 1fr / 1fr 1fr 1fr; }\n\n.design.rank-8 {\n  grid-template: \" p1  .   p2  \" 1fr \" p1  p3  p2  \" 1fr \" p4  p3  p5  \" 1fr \" p4  p7  p5  \" 1fr \" p6  p7  p8  \" 1fr \" p6  .   p8  \" 1fr / 1fr 1fr 1fr; }\n\n.design.rank-9 {\n  grid-template: \" p1  .   p3  \" 1fr \" p1  .   p3  \" 1fr \" p4  .   p5  \" 1fr \" p4  p2  p5  \" 1fr \" p6  p2  p7  \" 1fr \" p6  .   p7  \" 1fr \" p8  .   p9  \" 1fr \" p8  .   p9  \" 1fr / 1fr 1fr 1fr; }\n\n.design.rank-10 {\n  grid-template: \" p1  .   p3  \" 1fr \" p1  p2  p3  \" 1fr \" p4  p2  p5  \" 1fr \" p4  .   p5  \" 1fr \" p6  .   p7  \" 1fr \" p6  p8  p7  \" 1fr \" p9  p8  p10 \" 1fr \" p9  .   p10 \" 1fr / 1fr 1fr 1fr; }\n\n.p1 {\n  grid-area: p1; }\n\n.p2 {\n  grid-area: p2; }\n\n.p3 {\n  grid-area: p3; }\n\n.p4 {\n  grid-area: p4; }\n\n.p5 {\n  grid-area: p5; }\n\n.p6 {\n  grid-area: p6; }\n\n.p7 {\n  grid-area: p7; }\n\n.p8 {\n  grid-area: p8; }\n\n.p9 {\n  grid-area: p9; }\n\n.p10 {\n  grid-area: p10; }\n\n.p11 {\n  grid-area: p11; }\n\n.p12 {\n  grid-area: p12; }\n\n.p13 {\n  grid-area: p13; }\n\n.inverted.corner-pip, .design.rank-2 .corner-pip.p2, .design.rank-3 .corner-pip.p3, .design.rank-4 .corner-pip.p3, .design.rank-4 .corner-pip.p4, .design.rank-5 .corner-pip.p4, .design.rank-5 .corner-pip.p5, .design.rank-6 .corner-pip.p5, .design.rank-6 .corner-pip.p6, .design.rank-7 .corner-pip.p6, .design.rank-7 .corner-pip.p7, .design.rank-8 .corner-pip.p6, .design.rank-8 .corner-pip.p7, .design.rank-8 .corner-pip.p8, .design.rank-9 .corner-pip.p6, .design.rank-9 .corner-pip.p7, .design.rank-9 .corner-pip.p8, .design.rank-9 .corner-pip.p9, .design.rank-10 .corner-pip.p6, .design.rank-10 .corner-pip.p7, .design.rank-10 .corner-pip.p8, .design.rank-10 .corner-pip.p9, .design.rank-10 .corner-pip.p10 {\n  grid-area: inverted-corner-pip; }\n\n.inverted.rank, .design.rank-2 .rank.p2, .design.rank-3 .rank.p3, .design.rank-4 .rank.p3, .design.rank-4 .rank.p4, .design.rank-5 .rank.p4, .design.rank-5 .rank.p5, .design.rank-6 .rank.p5, .design.rank-6 .rank.p6, .design.rank-7 .rank.p6, .design.rank-7 .rank.p7, .design.rank-8 .rank.p6, .design.rank-8 .rank.p7, .design.rank-8 .rank.p8, .design.rank-9 .rank.p6, .design.rank-9 .rank.p7, .design.rank-9 .rank.p8, .design.rank-9 .rank.p9, .design.rank-10 .rank.p6, .design.rank-10 .rank.p7, .design.rank-10 .rank.p8, .design.rank-10 .rank.p9, .design.rank-10 .rank.p10 {\n  grid-area: inverted-rank; }\n\n.inverted, .design.rank-2 .p2, .design.rank-3 .p3, .design.rank-4 .p3, .design.rank-4 .p4, .design.rank-5 .p4, .design.rank-5 .p5, .design.rank-6 .p5, .design.rank-6 .p6, .design.rank-7 .p6, .design.rank-7 .p7, .design.rank-8 .p6, .design.rank-8 .p7, .design.rank-8 .p8, .design.rank-9 .p6, .design.rank-9 .p7, .design.rank-9 .p8, .design.rank-9 .p9, .design.rank-10 .p6, .design.rank-10 .p7, .design.rank-10 .p8, .design.rank-10 .p9, .design.rank-10 .p10 {\n  transform: rotate(180deg); }\n\n.hearts, .diamonds {\n  color: #d40000; }\n\n.spades, .clubs {\n  color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib2RvbS9zcGFjZXdhbGsvcHJvamVjdHMvc3BhY2V3YWxrL3NyYy9hcHAvcGxheWluZy1jYXJkL3BsYXlpbmctY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLGVBQWU7RUFFZixZQUFZO0VBQ1osYUFBYTtFQUNiLFNBQVM7RUFDVCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQU1uQixhQUFhO0VBRWIsa1NBT0EsRUFBQTs7QUF6QkY7SUFhSSx1QkFBdUIsRUFBQTs7QUFlM0I7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZLEVBQUE7O0FBR2Q7RUFDRSwrQkFHQTtFQUNBLGdCQUFnQixFQUFBOztBQUdsQjs7O0VBR0UsK0JBR0E7RUFFQSxtQkFBbUI7RUFDbkIscUJBQXFCLEVBQUE7O0FBVHZCOzs7SUFZSSxlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0Usd0tBU0EsRUFBQTs7QUFNRjtFQUNFLHdGQUtBLEVBQUE7O0FBTUY7RUFDRSx3S0FTQSxFQUFBOztBQU1GO0VBQ0Usd0tBU0EsRUFBQTs7QUFNRjtFQUNFLHdLQVNBLEVBQUE7O0FBTUY7RUFDRSxvSkFRQSxFQUFBOztBQU1GO0VBQ0Usb0pBUUEsRUFBQTs7QUFNRjtFQUNFLDRMQVVBLEVBQUE7O0FBTUY7RUFDRSw0TEFVQSxFQUFBOztBQU1GO0VBQU8sYUFBZSxFQUFBOztBQUN0QjtFQUFPLGFBQWUsRUFBQTs7QUFDdEI7RUFBTyxhQUFlLEVBQUE7O0FBQ3RCO0VBQU8sYUFBZSxFQUFBOztBQUN0QjtFQUFPLGFBQWUsRUFBQTs7QUFDdEI7RUFBTyxhQUFlLEVBQUE7O0FBQ3RCO0VBQU8sYUFBZSxFQUFBOztBQUN0QjtFQUFPLGFBQWUsRUFBQTs7QUFDdEI7RUFBTyxhQUFlLEVBQUE7O0FBQ3RCO0VBQU8sY0FBZSxFQUFBOztBQUN0QjtFQUFPLGNBQWUsRUFBQTs7QUFDdEI7RUFBTyxjQUFlLEVBQUE7O0FBQ3RCO0VBQU8sY0FBZSxFQUFBOztBQUd0QjtFQUNFLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLHdCQUF3QixFQUFBOztBQUcxQjtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLGNBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsWUFBWSxFQUFBIiwiZmlsZSI6Ii4uL3Byb2plY3RzL3NwYWNld2Fsay9zcmMvYXBwL3BsYXlpbmctY2FyZC9wbGF5aW5nLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucGxheWluZy1jYXJkIHtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcblxuICB3aWR0aDogMi41aW47XG4gIGhlaWdodDogMy41aW47XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgJi5mcm9udCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cblxuICBkaXNwbGF5OiBncmlkO1xuXG4gIGdyaWQtdGVtcGxhdGU6XG4gICAgXCIgcmFuayAgICAgICAgLiAgICAgICAuICAgICAgICAgICAgICAgICAgIFwiICBhdXRvXG4gICAgXCIgY29ybmVyLXBpcCAgZGVzaWduICAuICAgICAgICAgICAgICAgICAgIFwiICBhdXRvXG4gICAgXCIgLiAgICAgICAgICAgZGVzaWduICAuICAgICAgICAgICAgICAgICAgIFwiICAxZnJcbiAgICBcIiAuICAgICAgICAgICBkZXNpZ24gIGludmVydGVkLWNvcm5lci1waXAgXCIgIGF1dG9cbiAgICBcIiAuICAgICAgICAgICAuICAgICAgIGludmVydGVkLXJhbmsgICAgICAgXCIgIGF1dG9cbiAgICAvIGF1dG8gICAgICAgIDFmciAgICAgYXV0b1xuICA7XG59XG5cbi5yYW5rLCAuY29ybmVyLXBpcCwgLmRlc2lnbiB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi5yYW5rIHtcbiAgZ3JpZC1hcmVhOiByYW5rO1xufVxuXG4uY29ybmVyLXBpcCB7XG4gIGdyaWQtYXJlYTogY29ybmVyLXBpcDtcbn1cblxuLmRlc2lnbiB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtYXJlYTogZGVzaWduO1xuICBkaXNwbGF5OiBncmlkO1xuICBmb250LXNpemU6IDU0cHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmRlc2lnbi5yYW5rLUEge1xuICBncmlkLXRlbXBsYXRlOlxuICAgIFwiIHAxIFwiIDFmclxuICAgIC8gMWZyXG4gIDtcbiAgZm9udC1zaXplOiAxNDRweDtcbn1cblxuLmRlc2lnbi5yYW5rLUosXG4uZGVzaWduLnJhbmstUSxcbi5kZXNpZ24ucmFuay1LIHtcbiAgZ3JpZC10ZW1wbGF0ZTpcbiAgICBcIiBwMSBcIiAxZnJcbiAgICAvIDFmclxuICA7XG5cbiAgYWxpZ24taXRlbXM6IG1pZGRsZTtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuXG4gIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gIH1cbn1cblxuLmRlc2lnbi5yYW5rLTIge1xuICBncmlkLXRlbXBsYXRlOlxuICAgIFwiIC4gICAuICAgLiAgIFwiIDFmclxuICAgIFwiIC4gICBwMSAgLiAgIFwiIDFmclxuICAgIFwiIC4gICAuICAgLiAgIFwiIDFmclxuICAgIFwiIC4gICAuICAgLiAgIFwiIDFmclxuICAgIFwiIC4gICAuICAgLiAgIFwiIDFmclxuICAgIFwiIC4gICBwMiAgLiAgIFwiIDFmclxuICAgIFwiIC4gICAuICAgLiAgIFwiIDFmclxuICAgIC8gMWZyIDFmciAxZnJcbiAgO1xuICAucDIge1xuICAgIEBleHRlbmQgLmludmVydGVkO1xuICB9XG59XG5cbi5kZXNpZ24ucmFuay0zIHtcbiAgZ3JpZC10ZW1wbGF0ZTpcbiAgICBcIiAuICAgcDEgIC4gICBcIiAxZnJcbiAgICBcIiAuICAgcDIgIC4gICBcIiAxZnJcbiAgICBcIiAuICAgcDMgIC4gICBcIiAxZnJcbiAgICAvIDFmciAxZnIgMWZyXG4gIDtcbiAgLnAzIHtcbiAgICBAZXh0ZW5kIC5pbnZlcnRlZDtcbiAgfVxufVxuXG4uZGVzaWduLnJhbmstNCB7XG4gIGdyaWQtdGVtcGxhdGU6XG4gICAgXCIgLiAgIC4gICAuICAgXCIgMWZyXG4gICAgXCIgcDEgIC4gICBwMiAgXCIgMWZyXG4gICAgXCIgLiAgIC4gICAuICAgXCIgMWZyXG4gICAgXCIgLiAgIC4gICAuICAgXCIgMWZyXG4gICAgXCIgLiAgIC4gICAuICAgXCIgMWZyXG4gICAgXCIgcDMgIC4gICBwNCAgXCIgMWZyXG4gICAgXCIgLiAgIC4gICAuICAgXCIgMWZyXG4gICAgLyAxZnIgMWZyIDFmclxuICA7XG4gIC5wMywgLnA0IHtcbiAgICBAZXh0ZW5kIC5pbnZlcnRlZDtcbiAgfVxufVxuXG4uZGVzaWduLnJhbmstNSB7XG4gIGdyaWQtdGVtcGxhdGU6XG4gICAgXCIgLiAgIC4gICAuICAgXCIgMWZyXG4gICAgXCIgcDEgIC4gICBwMiAgXCIgMWZyXG4gICAgXCIgLiAgIC4gICAuICAgXCIgMWZyXG4gICAgXCIgLiAgIHAzICAuICAgXCIgMWZyXG4gICAgXCIgLiAgIC4gICAuICAgXCIgMWZyXG4gICAgXCIgcDQgIC4gICBwNSAgXCIgMWZyXG4gICAgXCIgLiAgIC4gICAuICAgXCIgMWZyXG4gICAgLyAxZnIgMWZyIDFmclxuICA7XG4gIC5wNCwgLnA1IHtcbiAgICBAZXh0ZW5kIC5pbnZlcnRlZDtcbiAgfVxufVxuXG4uZGVzaWduLnJhbmstNiB7XG4gIGdyaWQtdGVtcGxhdGU6XG4gICAgXCIgLiAgIC4gICAuICAgXCIgMWZyXG4gICAgXCIgcDEgIC4gICBwMiAgXCIgMWZyXG4gICAgXCIgLiAgIC4gICAuICAgXCIgMWZyXG4gICAgXCIgcDMgIC4gICBwNCAgXCIgMWZyXG4gICAgXCIgLiAgIC4gICAuICAgXCIgMWZyXG4gICAgXCIgcDUgIC4gICBwNiAgXCIgMWZyXG4gICAgXCIgLiAgIC4gICAuICAgXCIgMWZyXG4gICAgLyAxZnIgMWZyIDFmclxuICA7XG4gIC5wNSwgLnA2IHtcbiAgICBAZXh0ZW5kIC5pbnZlcnRlZDtcbiAgfVxufVxuXG4uZGVzaWduLnJhbmstNyB7XG4gIGdyaWQtdGVtcGxhdGU6XG4gICAgXCIgcDEgIC4gICBwMiAgXCIgMWZyXG4gICAgXCIgcDEgIHAzICBwMiAgXCIgMWZyXG4gICAgXCIgcDQgIHAzICBwNSAgXCIgMWZyXG4gICAgXCIgcDQgIC4gICBwNSAgXCIgMWZyXG4gICAgXCIgcDYgIC4gICBwNyAgXCIgMWZyXG4gICAgXCIgcDYgIC4gICBwNyAgXCIgMWZyXG4gICAgLyAxZnIgMWZyIDFmclxuICA7XG4gIC5wNiwgLnA3IHtcbiAgICBAZXh0ZW5kIC5pbnZlcnRlZDtcbiAgfVxufVxuXG4uZGVzaWduLnJhbmstOCB7XG4gIGdyaWQtdGVtcGxhdGU6XG4gICAgXCIgcDEgIC4gICBwMiAgXCIgMWZyXG4gICAgXCIgcDEgIHAzICBwMiAgXCIgMWZyXG4gICAgXCIgcDQgIHAzICBwNSAgXCIgMWZyXG4gICAgXCIgcDQgIHA3ICBwNSAgXCIgMWZyXG4gICAgXCIgcDYgIHA3ICBwOCAgXCIgMWZyXG4gICAgXCIgcDYgIC4gICBwOCAgXCIgMWZyXG4gICAgLyAxZnIgMWZyIDFmclxuICA7XG4gIC5wNiwgLnA3LCAucDgge1xuICAgIEBleHRlbmQgLmludmVydGVkO1xuICB9XG59XG5cbi5kZXNpZ24ucmFuay05IHtcbiAgZ3JpZC10ZW1wbGF0ZTpcbiAgICBcIiBwMSAgLiAgIHAzICBcIiAxZnJcbiAgICBcIiBwMSAgLiAgIHAzICBcIiAxZnJcbiAgICBcIiBwNCAgLiAgIHA1ICBcIiAxZnJcbiAgICBcIiBwNCAgcDIgIHA1ICBcIiAxZnJcbiAgICBcIiBwNiAgcDIgIHA3ICBcIiAxZnJcbiAgICBcIiBwNiAgLiAgIHA3ICBcIiAxZnJcbiAgICBcIiBwOCAgLiAgIHA5ICBcIiAxZnJcbiAgICBcIiBwOCAgLiAgIHA5ICBcIiAxZnJcbiAgICAvIDFmciAxZnIgMWZyXG4gIDtcbiAgLnA2LCAucDcsIC5wOCwgLnA5IHtcbiAgICBAZXh0ZW5kIC5pbnZlcnRlZDtcbiAgfVxufVxuXG4uZGVzaWduLnJhbmstMTAge1xuICBncmlkLXRlbXBsYXRlOlxuICAgIFwiIHAxICAuICAgcDMgIFwiIDFmclxuICAgIFwiIHAxICBwMiAgcDMgIFwiIDFmclxuICAgIFwiIHA0ICBwMiAgcDUgIFwiIDFmclxuICAgIFwiIHA0ICAuICAgcDUgIFwiIDFmclxuICAgIFwiIHA2ICAuICAgcDcgIFwiIDFmclxuICAgIFwiIHA2ICBwOCAgcDcgIFwiIDFmclxuICAgIFwiIHA5ICBwOCAgcDEwIFwiIDFmclxuICAgIFwiIHA5ICAuICAgcDEwIFwiIDFmclxuICAgIC8gMWZyIDFmciAxZnJcbiAgO1xuICAucDYsIC5wNywgLnA4LCAucDksIC5wMTAge1xuICAgIEBleHRlbmQgLmludmVydGVkO1xuICB9XG59XG5cbi5wMSAgeyBncmlkLWFyZWE6IHAxICB9O1xuLnAyICB7IGdyaWQtYXJlYTogcDIgIH07XG4ucDMgIHsgZ3JpZC1hcmVhOiBwMyAgfTtcbi5wNCAgeyBncmlkLWFyZWE6IHA0ICB9O1xuLnA1ICB7IGdyaWQtYXJlYTogcDUgIH07XG4ucDYgIHsgZ3JpZC1hcmVhOiBwNiAgfTtcbi5wNyAgeyBncmlkLWFyZWE6IHA3ICB9O1xuLnA4ICB7IGdyaWQtYXJlYTogcDggIH07XG4ucDkgIHsgZ3JpZC1hcmVhOiBwOSAgfTtcbi5wMTAgeyBncmlkLWFyZWE6IHAxMCB9O1xuLnAxMSB7IGdyaWQtYXJlYTogcDExIH07XG4ucDEyIHsgZ3JpZC1hcmVhOiBwMTIgfTtcbi5wMTMgeyBncmlkLWFyZWE6IHAxMyB9O1xuXG5cbi5pbnZlcnRlZC5jb3JuZXItcGlwIHtcbiAgZ3JpZC1hcmVhOiBpbnZlcnRlZC1jb3JuZXItcGlwO1xufVxuXG4uaW52ZXJ0ZWQucmFuayB7XG4gIGdyaWQtYXJlYTogaW52ZXJ0ZWQtcmFuaztcbn1cblxuLmludmVydGVkIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLmhlYXJ0cywgLmRpYW1vbmRzIHtcbiAgY29sb3I6IHJnYigyMTIsIDAsIDApO1xufVxuXG4uc3BhZGVzLCAuY2x1YnMge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/playing-card/playing-card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/playing-card/playing-card.component.ts ***!
  \********************************************************/
/*! exports provided: PlayingCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayingCardComponent", function() { return PlayingCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var imageDir = '/assets/card-faces';
var pips = {
    clubs: '\u2663',
    diamonds: '\u2666',
    hearts: '\u2665',
    spades: '\u2660',
};
/* tslint:disable object-literal-key-quotes */
var rankToNumberOfPips = {
    'A': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 0,
    'Q': 0,
    'K': 0,
};
var PlayingCardComponent = /** @class */ (function () {
    function PlayingCardComponent() {
        this.suit = '';
        this.rank = '';
        this.pip = '';
        this.designPips = [];
        this.cardImageUrl = '';
    }
    PlayingCardComponent.prototype.ngOnInit = function () {
        var numPips = rankToNumberOfPips[this.rank];
        this.pip = pips[this.suit];
        if (numPips > 0) {
            this.designPips = Array(numPips).fill(this.pip);
        }
        else {
            this.cardImageUrl = imageDir + '/' + this.rank + '-' + this.suit + '.png';
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PlayingCardComponent.prototype, "suit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PlayingCardComponent.prototype, "rank", void 0);
    PlayingCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'playing-card',
            template: __webpack_require__(/*! ./playing-card.component.html */ "./src/app/playing-card/playing-card.component.html"),
            styles: [__webpack_require__(/*! ./playing-card.component.scss */ "./src/app/playing-card/playing-card.component.scss")]
        })
    ], PlayingCardComponent);
    return PlayingCardComponent;
}());



/***/ }),

/***/ "./src/app/resources/resources.component.css":
/*!***************************************************!*\
  !*** ./src/app/resources/resources.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Byb2plY3RzL3NwYWNld2Fsay9zcmMvYXBwL3Jlc291cmNlcy9yZXNvdXJjZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0FBQ2YiLCJmaWxlIjoiLi4vcHJvamVjdHMvc3BhY2V3YWxrL3NyYy9hcHAvcmVzb3VyY2VzL3Jlc291cmNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMjBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/resources/resources.component.html":
/*!****************************************************!*\
  !*** ./src/app/resources/resources.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Resources</h2>\n\n<ul>\n  <li>\n    <a target=\"_blank\" href=\"http://jensimmons.com/\">Jen Simmons</a>\n    <ul>\n      <li><a target=\"_blank\" href=\"https://www.youtube.com/layoutland\">Layout Land</a></li>\n      <li><a target=\"_blank\" href=\"http://labs.jensimmons.com/\">Experimental Labs</a></li>\n    </ul>\n  </li>\n\n  <li>\n    <a target=\"_blank\" href=\"https://rachelandrew.co.uk/\">Rachel Andrew</a>\n    <ul>\n      <li><a target=\"_blank\" href=\"https://gridbyexample.com/\">Grid by Example</a></li>\n      <li><a target=\"_blank\" href=\"http://csslayout.news/\">CSS Layout News</a></li>\n    </ul>\n  </li>\n\n  <li>\n\n    <a target=\"_blank\" href=\"https://developer.mozilla.org/\">\n      Mozilla Developer Network (MDN)\n    </a>\n\n    <ul>\n      <li>\n        <a target=\"_blank\" href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout\">\n          CSS Grid Layout\n        </a>\n      </li>\n      <li>\n        <a target=\"_blank\" href=\"https://mozilladevelopers.github.io/playground/css-grid\">\n          CSS Grid Playground\n        </a>\n      </li>\n    </ul>\n  </li>\n\n  <li>\n    <a target=\"_blank\" href=\"https://caniuse.com/\">Can I Use</a>\n    <ul>\n      <li>\n        <a target=\"_blank\" href=\"http://caniuse.com/#feat=css-grid\">\n          CSS Grid Layout\n        </a>\n      </li>\n      <li>\n        <a target=\"_blank\" href=\"https://caniuse.com/#feat=viewport-units\">\n          Viewport Units\n        </a>\n      </li>\n      <li>\n        <a target=\"_blank\" href=\"https://caniuse.com/#feat=transforms2d\">\n          2D Transforms\n        </a>\n      </li>\n      <li>\n        <a target=\"_blank\" href=\"https://caniuse.com/#feat=transforms3d\">\n          3D Transforms\n        </a>\n      </li>\n    </ul>\n  </li>\n\n  <li>\n    <a target=\"_blank\" href=\"https://css-tricks.com/\">CSS Tricks</a>\n    <ul>\n      <li><a target=\"_blank\" href=\"https://css-tricks.com/snippets/css/complete-guide-grid/\">A Complete Guide to Grid</a></li>\n      <li><a target=\"_blank\" href=\"https://css-tricks.com/tag/css-grid/\">Articles tagged with 'css-grid'</a></li>\n    </ul>\n  </li>\n\n  <li>\n    <a target=\"_blank\" href=\"http://gedd.ski/\">Dave Geddes</a>\n    <ul>\n      <li><a target=\"_blank\" href=\"https://www.gridcritters.com/\">CSS Grid Critters</a></li>\n      <li><a target=\"_blank\" href=\"https://flexboxzombies.com/p/flexbox-zombies\">Flexbox Zombies</a></li>\n    </ul>\n  </li>\n\n  <li>\n    <a target=\"_blank\" href=\"https://codepip.com/\">codepip</a>\n    <ul>\n      <li><a target=\"_blank\" href=\"https://cssgridgarden.com/\">CSS Grid Garden</a></li>\n      <li><a target=\"_blank\" href=\"http://flexboxfroggy.com/\">Flexbox Froggy</a></li>\n    </ul>\n  </li>\n\n  <li>\n    <a target=\"_blank\" href=\"http://www.gridtoflex.com/\">\n      Una Kravets - Grid to Flex\n    </a>\n  </li>\n\n  <li>\n    <a target=\"_blank\" href=\"https://cssgrid.io/\">\n      Wes Bos - CSS Grid free video course\n    </a>\n  </li>\n\n  <li>\n    <a target=\"_blank\" href=\"https://egghead.io/courses/build-complex-layouts-with-css-grid-layout\">\n       Rory Smith - egghead.io - Build Complex Layouts with CSS Grid Layout\n    </a>\n  </li>\n\n  <li>\n    <a target=\"_blank\" href=\"https://codepip.com/\">codepip</a>\n    <ul>\n      <li><a target=\"_blank\" href=\"https://cssgridgarden.com/\">CSS Grid Garden</a></li>\n      <li><a target=\"_blank\" href=\"http://flexboxfroggy.com/\">Flexbox Froggy</a></li>\n    </ul>\n  </li>\n\n</ul>\n"

/***/ }),

/***/ "./src/app/resources/resources.component.ts":
/*!**************************************************!*\
  !*** ./src/app/resources/resources.component.ts ***!
  \**************************************************/
/*! exports provided: ResourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesComponent", function() { return ResourcesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ResourcesComponent = /** @class */ (function () {
    function ResourcesComponent() {
    }
    ResourcesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resources',
            template: __webpack_require__(/*! ./resources.component.html */ "./src/app/resources/resources.component.html"),
            styles: [__webpack_require__(/*! ./resources.component.css */ "./src/app/resources/resources.component.css")]
        })
    ], ResourcesComponent);
    return ResourcesComponent;
}());



/***/ }),

/***/ "./src/app/space-images-data.ts":
/*!**************************************!*\
  !*** ./src/app/space-images-data.ts ***!
  \**************************************/
/*! exports provided: spaceImagesData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spaceImagesData", function() { return spaceImagesData; });
/* tslint:disable */
var spaceImagesData = {
    "posters": [
        {
            "description": "",
            "imageFilename": "55_Cancri_e.jpeg",
            "infoUrl": "",
            "label": "55 Cancri e"
        },
        {
            "description": "",
            "imageFilename": "ceres.jpeg",
            "infoUrl": "",
            "label": "Ceres"
        },
        {
            "description": "",
            "imageFilename": "earth.jpeg",
            "infoUrl": "",
            "label": "Earth"
        },
        {
            "description": "",
            "imageFilename": "enceladus.jpeg",
            "infoUrl": "",
            "label": "Enceladus"
        },
        {
            "description": "",
            "imageFilename": "europa.jpeg",
            "infoUrl": "",
            "label": "Europa"
        },
        {
            "description": "",
            "imageFilename": "grand_tour.jpeg",
            "infoUrl": "",
            "label": "The Grand Tour"
        },
        {
            "description": "",
            "imageFilename": "hd40307g.jpeg",
            "infoUrl": "",
            "label": "HD 40307g"
        },
        {
            "description": "",
            "imageFilename": "jupiter.jpeg",
            "infoUrl": "",
            "label": "Jupiter"
        },
        {
            "description": "",
            "imageFilename": "kepler16b.jpeg",
            "infoUrl": "",
            "label": "Kepler-16b"
        },
        {
            "description": "",
            "imageFilename": "kepler186f.jpeg",
            "infoUrl": "",
            "label": "Kepler-186f"
        },
        {
            "description": "",
            "imageFilename": "mars.jpeg",
            "infoUrl": "",
            "label": "Mars"
        },
        {
            "description": "",
            "imageFilename": "peg51.jpeg",
            "infoUrl": "",
            "label": "51 Pegasi b"
        },
        {
            "description": "",
            "imageFilename": "psoj318.jpeg",
            "infoUrl": "",
            "label": "PSO J318.5-22"
        },
        {
            "description": "",
            "imageFilename": "titan.jpeg",
            "infoUrl": "",
            "label": "Titan"
        },
        {
            "description": "",
            "imageFilename": "trappist.jpeg",
            "infoUrl": "",
            "label": "Trappist-1e"
        },
        {
            "description": "",
            "imageFilename": "venus.jpeg",
            "infoUrl": "",
            "label": "Venus"
        },
    ],
    "planets": [
        {
            "description": "Smallest and closest planet to the Sun in the Solar System",
            "imageFilename": "Mercury_in_color_-_Prockter07-edit1.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Mercury_(planet)",
            "label": "Mercury"
        },
        {
            "description": "Second planet from the Sun in the Solar System",
            "imageFilename": "Venus-real_color.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Venus",
            "label": "Venus"
        },
        {
            "description": "Third planet from the Sun in the Solar System",
            "imageFilename": "The_Earth_seen_from_Apollo_17.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Earth",
            "label": "Earth"
        },
        {
            "description": "Fourth planet from the Sun in the Solar System",
            "imageFilename": "OSIRIS_Mars_true_color.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Mars",
            "label": "Mars"
        },
        {
            "description": "Fifth planet from the Sun in the Solar System",
            "imageFilename": "Jupiter_and_its_shrunken_Great_Red_Spot.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Jupiter",
            "label": "Jupiter"
        },
        {
            "description": "Sixth planet from the Sun in the Solar System",
            "imageFilename": "Saturn_during_Equinox.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Saturn",
            "label": "Saturn"
        },
        {
            "description": "Seventh planet from the Sun in the Solar System",
            "imageFilename": "Uranus2.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Uranus",
            "label": "Uranus"
        },
        {
            "description": "Eighth and farthest planet from the Sun in the Solar System",
            "imageFilename": "Neptune_Full.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Neptune",
            "label": "Neptune"
        }
    ],
    "women-in-astronomy": [
        {
            "description": "Nigerian-British space scientist",
            "imageFilename": "Dr_Maggie_Aderin-Pocock_MBE_(18117819695).jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Maggie_Aderin-Pocock",
            "label": "Maggie Aderin-Pocock"
        },
        {
            "description": "2nd-century BC Greek female astronomer",
            "imageFilename": "Aglaonice2.png",
            "infoUrl": "https://en.wikipedia.org/wiki/Aglaonice",
            "label": "Aglaonice"
        },
        {
            "description": "Danish astronomer and astrophysicist",
            "imageFilename": "Anja_Cetti_Andersen_-_Rosseland_lecture_2015_(cropped).jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Anja_Cetti_Andersen",
            "label": "Anja Cetti Andersen"
        },
        {
            "description": "American astronomer",
            "imageFilename": "Nadine_Barlow.JPG",
            "infoUrl": "https://en.wikipedia.org/wiki/Nadine_G._Barlow",
            "label": "Nadine G. Barlow"
        },
        {
            "description": "astronomer",
            "imageFilename": "Stefi_Baum_Photo_Professional.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Stefi_Baum",
            "label": "Stefi Baum"
        },
        {
            "description": "American astronomer and author",
            "imageFilename": "Reta_Beebe.gif",
            "infoUrl": "https://en.wikipedia.org/wiki/Reta_Beebe",
            "label": "Reta Beebe"
        },
        {
            "description": "British astronomer",
            "imageFilename": "Launch_of_IYA_2009,_Paris_-_Grygar,_Bell_Burnell_cropped.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Jocelyn_Bell_Burnell",
            "label": "Jocelyn Bell Burnell"
        },
        {
            "description": "British astronomer",
            "imageFilename": "Mary_Adela_Blagg.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Mary_Adela_Blagg",
            "label": "Mary Adela Blagg"
        },
        {
            "description": "American astronomer",
            "imageFilename": "TabethaSuzanneBoyajian.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Tabetha_S._Boyajian",
            "label": "Tabetha S. Boyajian"
        },
        {
            "description": "Danish horticulturalist",
            "imageFilename": "Sophie_Brahe_portrait.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Sophia_Brahe",
            "label": "Sophia Brahe"
        },
        {
            "description": "astronomer",
            "imageFilename": "Margaret_burbidge.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Margaret_Burbidge",
            "label": "Margaret Burbidge"
        },
        {
            "description": "American astronomer",
            "imageFilename": "Annie_Jump_Cannon_1922_Portrait.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Annie_Jump_Cannon",
            "label": "Annie Jump Cannon"
        },
        {
            "description": "French astronomer",
            "imageFilename": "Catherine_Cesarsky.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Catherine_Cesarsky",
            "label": "Catherine Cesarsky"
        },
        {
            "description": "Moroccan astronomer and researcher",
            "imageFilename": "Merieme_Chadid.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Merieme_Chadid",
            "label": "Merieme Chadid"
        },
        {
            "description": "Duchess consort of Saxe-Gotha-Altenburg and Princess of Saxe-Meiningen",
            "imageFilename": "Charlotte_Amalie_of_Saxe-Meiningen.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Princess_Charlotte_of_Saxe-Meiningen",
            "label": "Princess Charlotte of Saxe-Meiningen"
        },
        {
            "description": "British astronomer",
            "imageFilename": "Clerke_Agnes_Mary.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Agnes_Mary_Clerke",
            "label": "Agnes Mary Clerke"
        },
        {
            "description": "university president",
            "imageFilename": "France_A._C\u00f3rdova_official_photo.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/France_A._C%C3%B3rdova",
            "label": "France A. C\u00f3rdova"
        },
        {
            "description": "astronomer",
            "imageFilename": "Heather_Couper.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Heather_Couper",
            "label": "Heather Couper"
        },
        {
            "description": "Greek astronomer",
            "imageFilename": "ACoustenis3.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Athena_Coustenis",
            "label": "Athena Coustenis"
        },
        {
            "description": "British physicist",
            "imageFilename": "Carolin_Crawford_at_Emmanuel_College_Cambridge_2010.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Carolin_Crawford",
            "label": "Carolin Crawford"
        },
        {
            "description": "Dutch astronomer and chemist",
            "imageFilename": "EwineVanDishoeck.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Ewine_van_Dishoeck",
            "label": "Ewine van Dishoeck"
        },
        {
            "description": "Canadian writer and astronomer",
            "imageFilename": "RebeccaElson1987.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Rebecca_Elson",
            "label": "Rebecca Elson"
        },
        {
            "description": "astronomer",
            "imageFilename": "Sandra-faber-barack-obama.png",
            "infoUrl": "https://en.wikipedia.org/wiki/Sandra_Faber",
            "label": "Sandra Faber"
        },
        {
            "description": "Italian astrophysicist",
            "imageFilename": "Laura_Ferrarese.png",
            "infoUrl": "https://en.wikipedia.org/wiki/Laura_Ferrarese",
            "label": "Laura Ferrarese"
        },
        {
            "description": "astronomer",
            "imageFilename": "Debra_fischer_1.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Debra_Fischer",
            "label": "Debra Fischer"
        },
        {
            "description": "astronomer",
            "imageFilename": "Williamina_Paton_Stevens_Fleming_circa_1890s.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Williamina_Fleming",
            "label": "Williamina Fleming"
        },
        {
            "description": "astronomer",
            "imageFilename": "Anna_Frebel_at_Night_of_Science_2018_(2)_(cropped).jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Anna_Frebel",
            "label": "Anna Frebel"
        },
        {
            "description": "astronomer",
            "imageFilename": "Wendy_Freedman_(4617812603).jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Wendy_Freedman",
            "label": "Wendy Freedman"
        },
        {
            "description": "astrophysicist",
            "imageFilename": "Katherine_Freese.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Katherine_Freese",
            "label": "Katherine Freese"
        },
        {
            "description": "American astronomer",
            "imageFilename": "Caroline_Ellen_Furness_(1918).png",
            "infoUrl": "https://en.wikipedia.org/wiki/Caroline_Furness",
            "label": "Caroline Furness"
        },
        {
            "description": "astronomer",
            "imageFilename": "Pamela_Gay_2018_Skepticon.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Pamela_L._Gay",
            "label": "Pamela L. Gay"
        },
        {
            "description": "American astronomer",
            "imageFilename": "MargaretGeller1981a.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Margaret_Geller",
            "label": "Margaret Geller"
        },
        {
            "description": "German astronomer",
            "imageFilename": "German_Astronomer_Eva_Grebel.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Eva_Grebel",
            "label": "Eva Grebel"
        },
        {
            "description": "British astronomer",
            "imageFilename": "Lucie_Green.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Lucie_Green",
            "label": "Lucie Green"
        },
        {
            "description": "American astrophysicist",
            "imageFilename": "Erikahamden.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Erika_Hamden",
            "label": "Erika Hamden"
        },
        {
            "description": "astronomer",
            "imageFilename": "Heidi_Hammel_Upgraded_Hubble_Space_Telescope_Images.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Heidi_Hammel",
            "label": "Heidi Hammel"
        },
        {
            "description": "Australian astronomer",
            "imageFilename": "Lisa_Harvey-Smith_2014_at_MAS.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Lisa_Harvey-Smith",
            "label": "Lisa Harvey-Smith"
        },
        {
            "description": "American astronomer",
            "imageFilename": "Margaretharwood.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Margaret_Harwood",
            "label": "Margaret Harwood"
        },
        {
            "description": "American astronomer",
            "imageFilename": "MarthaHaynes.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Martha_P._Haynes",
            "label": "Martha P. Haynes"
        },
        {
            "imageFilename": "AmandaHendrix_CassiniPSG.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Amanda_Hendrix",
            "label": "Amanda Hendrix"
        },
        {
            "description": "American astrophysicist",
            "imageFilename": "Jacqueline_N._Hewitt.png",
            "infoUrl": "https://en.wikipedia.org/wiki/Jacqueline_Hewitt",
            "label": "Jacqueline Hewitt"
        },
        {
            "description": "British astrophysicist",
            "imageFilename": "TEDxUniversityofEdinburgh_-_Catherine_Heymans_(cropped).png",
            "infoUrl": "https://en.wikipedia.org/wiki/Catherine_Heymans",
            "label": "Catherine Heymans"
        },
        {
            "description": "astronomer",
            "imageFilename": "Dorrit-hoffleit.JPG",
            "infoUrl": "https://en.wikipedia.org/wiki/Dorrit_Hoffleit",
            "label": "Dorrit Hoffleit"
        },
        {
            "description": "Dutch astronomer",
            "imageFilename": "Nederlandse_planetoiden.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Ingrid_van_Houten-Groeneveld",
            "label": "Ingrid van Houten-Groeneveld"
        },
        {
            "description": "astronomer",
            "imageFilename": "Margaret_Lindsay_Huggins00.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Margaret_Lindsay_Huggins",
            "label": "Margaret Lindsay Huggins"
        },
        {
            "description": "astronomer",
            "imageFilename": "Louise_Freeland_Jenkins_(1911).jpeg",
            "infoUrl": "https://en.wikipedia.org/wiki/Louise_Freeland_Jenkins",
            "label": "Louise Freeland Jenkins"
        },
        {
            "description": "American geophysicist, planetary scientist",
            "imageFilename": "Margaret_Galland_Kivelson.png",
            "infoUrl": "https://en.wikipedia.org/wiki/Margaret_G._Kivelson",
            "label": "Margaret G. Kivelson"
        },
        {
            "description": "American astronomer",
            "imageFilename": "Dorothea_Klumpke_Roberts00.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Dorothea_Klumpke",
            "label": "Dorothea Klumpke"
        },
        {
            "description": "Australian astrophysicist",
            "imageFilename": "Baerbel_Koribalski.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/B%C3%A4rbel_Koribalski",
            "label": "B\u00e4rbel Koribalski"
        },
        {
            "description": "Czech astronomer, asteroid discoverer",
            "imageFilename": "Lenka_Kotkov\u00e1,_Ond\u0159ejov_Astronomical.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Lenka_Kotkov%C3%A1",
            "label": "Lenka Kotkov\u00e1"
        },
        {
            "description": "French astronomer",
            "imageFilename": "Nicole-Reine_Lepaute.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Nicole-Reine_Lepaute",
            "label": "Nicole-Reine Lepaute"
        },
        {
            "description": "astronomer",
            "imageFilename": "Isabel_Martin_Lewis.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Isabel_Martin_Lewis",
            "label": "Isabel Martin Lewis"
        },
        {
            "description": "astronomer",
            "imageFilename": "JaneLu@Stellafanesml_8416.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Jane_Luu",
            "label": "Jane Luu"
        },
        {
            "description": "American astronomer",
            "imageFilename": "Leavitt_aavso.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Henrietta_Swan_Leavitt",
            "label": "Henrietta Swan Leavitt"
        },
        {
            "description": "American Astronomer",
            "imageFilename": "Amy_mainzer.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Amy_Mainzer",
            "label": "Amy Mainzer"
        },
        {
            "description": "astrophysicist",
            "imageFilename": "Karen_Masters,_astronomer,_December_2017.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Karen_Masters",
            "label": "Karen Masters"
        },
        {
            "description": "astronomer",
            "imageFilename": "Antonia_maury.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Antonia_Maury",
            "label": "Antonia Maury"
        },
        {
            "description": "American astronomer",
            "imageFilename": "ClaireEllenMax2008.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Claire_Ellen_Max",
            "label": "Claire Ellen Max"
        },
        {
            "description": "Turkish astronomer",
            "imageFilename": "JanetAkyuzMattei.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Janet_Aky%C3%BCz_Mattei",
            "label": "Janet Aky\u00fcz Mattei"
        },
        {
            "description": "American astronomer",
            "imageFilename": "Maria_Mitchell.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Maria_Mitchell",
            "label": "Maria Mitchell"
        },
        {
            "description": "American astronomer",
            "imageFilename": "Linda_Morabito_Now.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Linda_A._Morabito",
            "label": "Linda A. Morabito"
        },
        {
            "description": "physicist",
            "imageFilename": "Sultana_Germany_Talk.JPG",
            "infoUrl": "https://en.wikipedia.org/wiki/Sultana_N._Nahar",
            "label": "Sultana N. Nahar"
        },
        {
            "description": "Belgian astrophysicist",
            "imageFilename": "Ya\u00ebl_Naz\u00e9,_Espace_des_sciences,_16_octobre_2012.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Ya%C3%ABl_Naz%C3%A9",
            "label": "Ya\u00ebl Naz\u00e9"
        },
        {
            "description": "American astrophysicist",
            "imageFilename": "Heidi_Jo_Newberg_2007.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Heidi_Jo_Newberg",
            "label": "Heidi Jo Newberg"
        },
        {
            "description": "English mathematician",
            "imageFilename": "Dame_Kathleen_Ollerenshaw_signing_book.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Kathleen_Ollerenshaw",
            "label": "Kathleen Ollerenshaw"
        },
        {
            "description": "Finnish astronomer",
            "imageFilename": "Liisi_Oterma.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Liisi_Oterma",
            "label": "Liisi Oterma"
        },
        {
            "description": "Malaysian physicist",
            "imageFilename": "Mazlan_Othman_20100615.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Mazlan_Othman",
            "label": "Mazlan Othman"
        },
        {
            "description": "American astronomer",
            "imageFilename": "Cecilia_Helena_Payne_Gaposchkin_(1900-1979)_(2).jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Cecilia_Payne-Gaposchkin",
            "label": "Cecilia Payne-Gaposchkin"
        },
        {
            "description": "Australian radio astronomer",
            "imageFilename": "Peter-hall.ruby.payne-scott.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Ruby_Payne-Scott",
            "label": "Ruby Payne-Scott"
        },
        {
            "description": "planetary scientist",
            "imageFilename": "Carolyn-porco-2016.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Carolyn_Porco",
            "label": "Carolyn Porco"
        },
        {
            "description": "British astronomer",
            "imageFilename": "Mary_Proctor_sketch.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Mary_Proctor",
            "label": "Mary Proctor"
        },
        {
            "imageFilename": "ElisaQuintana2014.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Elisa_Quintana",
            "label": "Elisa Quintana"
        },
        {
            "description": "American planetary scientist and astrophysicist",
            "imageFilename": "Christina_Richey_headshot.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Christina_Richey",
            "label": "Christina Richey"
        },
        {
            "description": "American astronomer",
            "imageFilename": "Elizabeth_Roemer.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Elizabeth_Roemer",
            "label": "Elizabeth Roemer"
        },
        {
            "description": "American astronomer and principal in the Hubble Space Telescope project",
            "imageFilename": "Nancy_Grace_Roman_2015.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Nancy_Roman",
            "label": "Nancy Roman"
        },
        {
            "description": "American astronomer",
            "imageFilename": "Vera_Rubin.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Vera_Rubin",
            "label": "Vera Rubin"
        },
        {
            "description": "Italian astronomer",
            "imageFilename": "Caterina_Scarpellini.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Caterina_Scarpellini",
            "label": "Caterina Scarpellini"
        },
        {
            "description": "Canadian astronomer",
            "imageFilename": "Sara_Seager_CHF-Cain-Conference-May-2016-059.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Sara_Seager",
            "label": "Sara Seager"
        },
        {
            "description": "American astronomer (1909-1997)",
            "imageFilename": "Muriel_E_Mussells_Seyfert.png",
            "infoUrl": "https://en.wikipedia.org/wiki/Muriel_Mussells_Seyfert",
            "label": "Muriel Mussells Seyfert"
        },
        {
            "description": "American astronomer",
            "imageFilename": "Carolyn_Shoemaker.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Carolyn_S._Shoemaker",
            "label": "Carolyn S. Shoemaker"
        },
        {
            "description": "American astronomer",
            "imageFilename": "Alicia_in_Copenhagen_2001.png",
            "infoUrl": "https://en.wikipedia.org/wiki/Alicia_M._Soderberg",
            "label": "Alicia M. Soderberg"
        },
        {
            "description": "Science writer and polymath",
            "imageFilename": "Thomas_Phillips_-_Mary_Fairfax,_Mrs_William_Somerville,_1780_-_1872._Writer_on_science_-_Google_Art_Project.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Mary_Somerville",
            "label": "Mary Somerville"
        },
        {
            "description": "Indonesian feminist",
            "imageFilename": "Karlina_Leksono_Supelli_at_the_International_Conference_on_Feminism,_2016-09-24.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Karlina_Leksono_Supelli",
            "label": "Karlina Leksono Supelli"
        },
        {
            "description": "American astronomer",
            "imageFilename": "Jean_Swank_Astrophysicist.png",
            "infoUrl": "https://en.wikipedia.org/wiki/Jean_Swank",
            "label": "Jean Swank"
        },
        {
            "description": "American astronomer",
            "imageFilename": "Jill_Tarter_at_Starmus_IV_Trondheim_2017.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Jill_Tarter",
            "label": "Jill Tarter"
        },
        {
            "description": "Iranian astronomer",
            "imageFilename": "\u0531\u056c\u0565\u0576\u0578\u0582\u0577_\u054f\u0567\u0580\u0565\u0561\u0576.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Alenush_Terian",
            "label": "Alenush Terian"
        },
        {
            "description": "American astronomer",
            "imageFilename": "Michelle_Thaller_astrophysicist_crop.png",
            "infoUrl": "https://en.wikipedia.org/wiki/Michelle_Thaller",
            "label": "Michelle Thaller"
        },
        {
            "description": "American astronomer",
            "imageFilename": "Virginia_Trimble_being_introduced_at_the_75th_Anniversary_of_The_Shapley_-_Curtis_Debate.gif",
            "infoUrl": "https://en.wikipedia.org/wiki/Virginia_Louise_Trimble",
            "label": "Virginia Louise Trimble"
        },
        {
            "description": "American astronomer",
            "imageFilename": "Maggie_Turnbull_at_STScI.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Margaret_Turnbull",
            "label": "Margaret Turnbull"
        },
        {
            "description": "American astrophysicist",
            "imageFilename": "Meg_Urry.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Meg_Urry",
            "label": "Meg Urry"
        },
        {
            "description": "American stellar astronomer",
            "imageFilename": "Lucianne_Walkowicz_Becoming_Interplanetary.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Lucianne_Walkowicz",
            "label": "Lucianne Walkowicz"
        },
        {
            "description": "American astrophysicist astronomer",
            "imageFilename": "Kim_Weaver_News_Interview_(3533838332).jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Kim_Weaver",
            "label": "Kim Weaver"
        },
        {
            "description": "American physicist and astronomer",
            "imageFilename": "Sarah_Frances_Whiting.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Sarah_Frances_Whiting",
            "label": "Sarah Frances Whiting"
        },
        {
            "description": "astronomer",
            "imageFilename": "Mary_Watson_Whitney.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Mary_Watson_Whitney",
            "label": "Mary Watson Whitney"
        },
        {
            "description": "English astrophysicist",
            "imageFilename": "Wilkes2_2012_zoom.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Belinda_Wilkes",
            "label": "Belinda Wilkes"
        },
        {
            "description": "American astronomer",
            "imageFilename": "Jennifer_Wiseman.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Jennifer_Wiseman",
            "label": "Jennifer Wiseman"
        },
        {
            "description": "US astronomer",
            "imageFilename": "Anne_Sewell_Young.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Anne_Sewell_Young",
            "label": "Anne Sewell Young"
        },
        {
            "description": "American astronomer",
            "imageFilename": "Maria_Zuber_-_GRAIL_MoonKAM_Student_Expo_2012.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Maria_Zuber",
            "label": "Maria Zuber"
        }
    ],
    "women-in-space": [
        {
            "description": "Soviet cosmonaut",
            "imageFilename": "Svetlana_Savitskaya,_7_December_2018.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Svetlana_Savitskaya",
            "label": "Svetlana Savitskaya"
        },
        {
            "description": "American physicist and astronaut",
            "imageFilename": "Sally_Ride_in_1984.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Sally_Ride",
            "label": "Sally Ride"
        },
        {
            "description": "American engineer and a NASA astronaut who died in the destruction of Space Shuttle Challenger during the launch of mission STS-51-L",
            "imageFilename": "Judith_A._Resnik,_official_portrait_(cropped).jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Judith_Resnik",
            "label": "Judith Resnik"
        },
        {
            "description": "American geologist and a former NASA astronaut",
            "imageFilename": "Kathryn_D._Sullivan_NOAA_Leadership.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Kathryn_D._Sullivan",
            "label": "Kathryn D. Sullivan"
        },
        {
            "description": "American astronaut",
            "imageFilename": "Anna_Fisher_-_1979.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Anna_Lee_Fisher",
            "label": "Anna Lee Fisher"
        },
        {
            "description": "Surgeon and former NASA astronaut",
            "imageFilename": "MRSeddon.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Margaret_Rhea_Seddon",
            "label": "Margaret Rhea Seddon"
        },
        {
            "description": "astronaut",
            "imageFilename": "ShannonLucid.jpeg",
            "infoUrl": "https://en.wikipedia.org/wiki/Shannon_Lucid",
            "label": "Shannon Lucid"
        },
        {
            "description": "American astronaut",
            "imageFilename": "Bonnie_J._Dunbar.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Bonnie_J._Dunbar",
            "label": "Bonnie J. Dunbar"
        },
        {
            "description": "American engineer and a former NASA astronaut",
            "imageFilename": "Mary_Cleave.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Mary_L._Cleave",
            "label": "Mary L. Cleave"
        },
        {
            "description": "astronaut",
            "imageFilename": "Ellen_Louise_Shulman_Baker.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Ellen_S._Baker",
            "label": "Ellen S. Baker"
        },
        {
            "description": "astronaut",
            "imageFilename": "KathrynThornton.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Kathryn_C._Thornton",
            "label": "Kathryn C. Thornton"
        },
        {
            "description": "American astronaut",
            "imageFilename": "Marsha_Ivins.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Marsha_Ivins",
            "label": "Marsha Ivins"
        },
        {
            "description": "astronaut",
            "imageFilename": "Linda_Godwin.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Linda_M._Godwin",
            "label": "Linda M. Godwin"
        },
        {
            "description": "British chemist who became the first Briton in space",
            "imageFilename": "Dr._Helen_Sharman.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Helen_Sharman",
            "label": "Helen Sharman"
        },
        {
            "description": "astronaut",
            "imageFilename": "Tamara_E._Jernigan.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Tamara_E._Jernigan",
            "label": "Tamara E. Jernigan"
        },
        {
            "description": "astronaut",
            "imageFilename": "NASA-MHughes-Fulford.JPG",
            "infoUrl": "https://en.wikipedia.org/wiki/Millie_Hughes-Fulford",
            "label": "Millie Hughes-Fulford"
        },
        {
            "description": "Canadian astronaut",
            "imageFilename": "Roberta_Bondar2.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Roberta_Bondar",
            "label": "Roberta Bondar"
        },
        {
            "description": "American engineer and astronaut",
            "imageFilename": "Jan_Davis.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Jan_Davis",
            "label": "Jan Davis"
        },
        {
            "description": "American doctor and NASA astronaut",
            "imageFilename": "Dr._Mae_C._Jemison,_First_African-American_Woman_in_Space_-_GPN-2004-00020.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Mae_Jemison",
            "label": "Mae Jemison"
        },
        {
            "description": "Lieutenant General in the United States Air Force and a former NASA astronaut",
            "imageFilename": "Helms_sj4.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Susan_Helms",
            "label": "Susan J. Helms"
        },
        {
            "description": "former astronaut and current Deputy Director of the Johnson Space Center",
            "imageFilename": "Ellen_Ochoa.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Ellen_Ochoa",
            "label": "Ellen Ochoa"
        },
        {
            "description": "American engineer and a NASA astronaut (1956\u20132012)",
            "imageFilename": "Janice_Voss.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Janice_E._Voss",
            "label": "Janice E. Voss"
        },
        {
            "description": "astronaut, medical doctor",
            "imageFilename": "Chiaki_Mukai.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Chiaki_Mukai",
            "label": "Chiaki Mukai"
        },
        {
            "description": "Astronaut and United States Air Force pilot",
            "imageFilename": "Commander_Eileen_Collins_-_GPN-2000-001177.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Eileen_Collins",
            "label": "Eileen Collins"
        },
        {
            "description": "United States Navy Captain, former helicopter pilot, an engineer, and a former NASA astronaut. She was the first female graduate of the United States Naval Academy to fly into space",
            "imageFilename": "Wendy_Lawrence_NASA_STS114.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Wendy_B._Lawrence",
            "label": "Wendy B. Lawrence"
        },
        {
            "description": "American chemist and former United States Air Force officer and NASA astronaut",
            "imageFilename": "Catherine_Coleman_2009.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Catherine_Coleman",
            "label": "Catherine Coleman"
        },
        {
            "description": "Astronaut, politician, doctor",
            "imageFilename": "20140927_Femmes_de_science_-_Claudie_Haigner\u00e9_02.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Claudie_Haigner%C3%A9",
            "label": "Claudie Haigner\u00e9"
        },
        {
            "description": "American  engineer, a former United States Navy officer, and a former NASA astronaut",
            "imageFilename": "Susan_Still-Kilrain.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Susan_Kilrain",
            "label": "Susan Still Kilrain"
        },
        {
            "description": "American astronaut",
            "imageFilename": "Kalpana_Chawla,_NASA_photo_portrait_in_orange_suit.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Kalpana_Chawla",
            "label": "Kalpana Chawla"
        },
        {
            "description": "NASA astronaut and Captain in the U.S. Navy Reserve",
            "imageFilename": "Kathryn_P._Hire.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Kathryn_P._Hire",
            "label": "Kathryn P. Hire"
        },
        {
            "description": "astronaut",
            "imageFilename": "JanetLKavandi-NASA.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Janet_L._Kavandi",
            "label": "Janet L. Kavandi"
        },
        {
            "description": "29th Governor General of Canada",
            "imageFilename": "Julie_Payette_2017.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Julie_Payette",
            "label": "Julie Payette"
        },
        {
            "description": "astronaut",
            "imageFilename": "Pamela_Melroy.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Pamela_Melroy",
            "label": "Pamela Melroy"
        },
        {
            "description": "American biochemistry researcher and NASA astronaut",
            "imageFilename": "Peggy_Whitson.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Peggy_Whitson",
            "label": "Peggy Whitson"
        },
        {
            "description": "American engineer and former NASA astronaut",
            "imageFilename": "Sandra_Magnus_2011.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Sandra_Magnus",
            "label": "Sandra Magnus"
        },
        {
            "description": "American engineer and a NASA astronaut",
            "imageFilename": "Stephanie_Wilson_in_2008.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Stephanie_Wilson",
            "label": "Stephanie Wilson"
        },
        {
            "description": "American naval flight officer and NASA astronaut",
            "imageFilename": "Lisa_M._Nowak.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Lisa_Nowak",
            "label": "Lisa Nowak"
        },
        {
            "description": "Iranian-American engineer and entrepreneur",
            "imageFilename": "AnoushehAnsari.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Anousheh_Ansari",
            "label": "Anousheh Ansari"
        },
        {
            "description": "The indo-American astronaut and United States Navy officer",
            "imageFilename": "Sunita_Williams_in_2018.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Sunita_Williams",
            "label": "Sunita Williams"
        },
        {
            "description": "American engineer and a former NASA astronaut",
            "imageFilename": "Joan_Higginbotham.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Joan_Higginbotham",
            "label": "Joan Higginbotham"
        },
        {
            "description": "American chemist and NASA astronaut",
            "imageFilename": "Tracy_E_Caldwell_portrait.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Tracy_Caldwell_Dyson",
            "label": "Tracy Caldwell Dyson"
        },
        {
            "description": "astronaut",
            "imageFilename": "Barbara_morgan.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Barbara_Morgan",
            "label": "Barbara Morgan"
        },
        {
            "description": "South Korean astronaut",
            "imageFilename": "Yi_So-yeon_(NASA_-_JSC2008-E-004174).jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Yi_So-yeon",
            "label": "Yi So-yeon"
        },
        {
            "description": "American oceanographer and NASA astronaut",
            "imageFilename": "Meganmcarthurv2.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/K._Megan_McArthur",
            "label": "K. Megan McArthur"
        },
        {
            "description": "Japanese astronaut",
            "imageFilename": "Naoko_Yamazaki.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Naoko_Yamazaki",
            "label": "Naoko Yamazaki"
        },
        {
            "description": "American scientist and NASA astronaut",
            "imageFilename": "ShannonWalker.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Shannon_Walker",
            "label": "Shannon Walker"
        },
        {
            "description": "Chinese astronaut",
            "imageFilename": "LIU_Yang_CUHK_2012.JPG",
            "infoUrl": "https://en.wikipedia.org/wiki/Liu_Yang_(astronaut)",
            "label": "Liu Yang"
        },
        {
            "description": "Chinese astronaut",
            "imageFilename": "Wang_Yaping.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Wang_Yaping",
            "label": "Wang Yaping"
        },
        {
            "description": "Russian cosmonaut",
            "imageFilename": "Elena_Serova_food_tasting_-_crop.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Yelena_Serova",
            "label": "Yelena Serova"
        },
        {
            "description": "Italian ESA astronaut",
            "imageFilename": "Samantha_Cristoforetti_official_portrait_in_an_EMU_spacesuit.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Samantha_Cristoforetti",
            "label": "Samantha Cristoforetti"
        },
        {
            "description": "American microbiologist and NASA astronaut",
            "imageFilename": "Kathleen_Rubins_portrait.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Kathleen_Rubins",
            "label": "Kathleen Rubins"
        },
        {
            "description": "American astronaut",
            "imageFilename": "Anne_C._McClain_portrait.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Anne_McClain",
            "label": "Anne McClain"
        },
        {
            "description": "American astronaut",
            "imageFilename": "Christina_M._Hammock_portrait.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Christina_Koch",
            "label": "Christina Koch"
        },
        {
            "description": "Assistant Professor of Anesthesia at Harvard Medical School, candidate astronaut",
            "imageFilename": "Jessica_U._Meir_portrait.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Jessica_Meir",
            "label": "Jessica Meir"
        },
        {
            "description": "American astronaut",
            "imageFilename": "Nicole_Aunapu_Mann_portrait.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Nicole_Aunapu_Mann",
            "label": "Nicole Aunapu Mann"
        },
        {
            "description": "American aerospace engineer and NASA astronaut",
            "imageFilename": "Jeanette_J._Epps.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Jeanette_J._Epps",
            "label": "Jeanette J. Epps"
        },
        {
            "description": "astronaut",
            "imageFilename": "Patricia_Robertson.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Patricia_Robertson",
            "label": "Patricia Robertson"
        },
        {
            "description": "African American astronaut",
            "imageFilename": "Yvonne_Cagle.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Yvonne_Cagle",
            "label": "Yvonne Cagle"
        },
        {
            "description": "American educator and astronaut",
            "imageFilename": "ChristaMcAuliffe.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Christa_McAuliffe",
            "label": "Christa McAuliffe"
        }
    ],
    "planetary-nebulae": [
        {
            "description": "planetary nebula in the constellation Aquila",
            "imageFilename": "NGC6751.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/NGC_6751",
            "label": "NGC 6751"
        },
        {
            "description": "planetary nebula in the constellation Cepheus",
            "imageFilename": "Ngc40.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/NGC_40",
            "label": "Bow-Tie Nebula"
        },
        {
            "description": "planetary nebula",
            "imageFilename": "NGC_3242_Ghost_of_Jupiter.png",
            "infoUrl": "https://en.wikipedia.org/wiki/NGC_3242",
            "label": "Ghost of Jupiter"
        },
        {
            "description": "planetary nebula",
            "imageFilename": "NGC_6826HSTFull.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/NGC_6826",
            "label": "Blinking Planetary"
        },
        {
            "description": "Planetary nebula",
            "imageFilename": "M57_The_Ring_Nebula.JPG",
            "infoUrl": "https://en.wikipedia.org/wiki/Ring_Nebula",
            "label": "Ring Nebula"
        },
        {
            "description": "planetary nebula in the constellation Draco",
            "imageFilename": "NGC6543.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Cat%27s_Eye_Nebula",
            "label": "Cat's Eye Nebula"
        },
        {
            "description": "planetary nebula in constellation Gemini",
            "imageFilename": "Medusa_nebula.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Medusa_Nebula",
            "label": "Medusa Nebula"
        },
        {
            "description": "Planetary nebula",
            "imageFilename": "NGC_7027HSTFull.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/NGC_7027",
            "label": "NGC 7027"
        },
        {
            "description": "planetary nebula",
            "imageFilename": "Comets_Kick_up_Dust_in_Helix_Nebula_(PIA09178).jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Helix_Nebula",
            "label": "Helix Nebula"
        },
        {
            "description": "planetary nebula in the constellation Perseus",
            "imageFilename": "Little_Dumbbell_Nebula_M76_by_Goran_Nilsson,_Wim_van_Berlo_&_Liverpool_Telescope.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Little_Dumbbell_Nebula",
            "label": "Little Dumbbell Nebula"
        },
        {
            "description": "planetary nebula in the constellation Ursa Major",
            "imageFilename": "The_Owl_Nebula_M97_Goran_Nilsson_&_The_Liverpool_Telescope.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Owl_Nebula",
            "label": "Owl Nebula"
        },
        {
            "description": "planetary nebula",
            "imageFilename": "The_Twin_Jet_Nebula.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/M2-9",
            "label": "M2-9"
        },
        {
            "description": "astronomical object",
            "imageFilename": "Minkowski_92.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/M1-92",
            "label": "M1-92"
        },
        {
            "description": "planetary nebula in the constellation Monoceros",
            "imageFilename": "NGC2346.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/NGC_2346",
            "label": "Butterfly Nebula"
        },
        {
            "description": "nebula",
            "imageFilename": "Abell_39.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Abell_39",
            "label": "Abell 39"
        },
        {
            "imageFilename": "Jones-Emberson1HunterWilson.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Jones-Emberson_1",
            "label": "Jones-Emberson 1"
        },
        {
            "description": "planetary nebula",
            "imageFilename": "IC_3568_Lemon_Slice.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Lemon_Slice_Nebula",
            "label": "Lemon Slice Nebula"
        },
        {
            "description": "astronomical object",
            "imageFilename": "Soap_Bubble_Nebula.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Soap_Bubble_Nebula",
            "label": "Soap Bubble Nebula"
        },
        {
            "description": "planetary nebula in the constellation Auriga",
            "imageFilename": "IC2149PLN01a.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/IC_2149",
            "label": "IC 2149"
        },
        {
            "description": "planetary nebula in the constellation Cetus",
            "imageFilename": "NGC_246.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/NGC_246",
            "label": "Skull Nebula"
        },
        {
            "description": "planetary nebula in the constellation Camelopardalis",
            "imageFilename": "NGC_1501.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/NGC_1501",
            "label": "NGC 1501"
        },
        {
            "description": "planetary nebula in the constellation Taurus",
            "imageFilename": "NGC_1514_by_Goran_Nilsson_&_The_Liverpool_Telescope.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/NGC_1514",
            "label": "NGC 1514"
        },
        {
            "description": "planetary nebula in the constellation Orion",
            "imageFilename": "NGC2022.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/NGC_2022",
            "label": "NGC 2022"
        },
        {
            "description": "planetary nebula in the constellation Gemini",
            "imageFilename": "NGC_2371.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/NGC_2371-2",
            "label": "NGC 2371"
        },
        {
            "description": "planetary nebula in Ophiuchus",
            "imageFilename": "NGC_6572.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/NGC_6572",
            "label": "NGC 6572"
        },
        {
            "description": "planetary nebula",
            "imageFilename": "NGC-6781.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/NGC_6781",
            "label": "NGC 6781"
        },
        {
            "description": "star",
            "imageFilename": "Ngc6790.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/NGC_6790",
            "label": "NGC 6790"
        },
        {
            "description": "galaxy",
            "imageFilename": "NGC_6881_HST.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/NGC_6881",
            "label": "NGC 6881"
        },
        {
            "description": "planetary nebula in the constellation Cygnus",
            "imageFilename": "Ngc6884.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/NGC_6884",
            "label": "NGC 6884"
        },
        {
            "description": "planetary nebula",
            "imageFilename": "NGC_6905_-_VLT(FORS2)_-_RHaBOIII.png",
            "infoUrl": "https://en.wikipedia.org/wiki/NGC_6905",
            "label": "NGC 6905"
        },
        {
            "description": "planetary nebula",
            "imageFilename": "NGC7008Hunter1.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/NGC_7008",
            "label": "Fetus Nebula"
        },
        {
            "description": "planetary nebula",
            "imageFilename": "Ngc7662hst.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/NGC_7662",
            "label": "NGC 7662"
        },
        {
            "imageFilename": "Abell78s.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Abell_78",
            "label": "Abell 78"
        },
        {
            "description": "astronomical object",
            "imageFilename": "Abell31s.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Abell_31",
            "label": "Abell 31"
        },
        {
            "description": "planetary nebula in the constellation Carina",
            "imageFilename": "Hen2-47.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Hen_2-47",
            "label": "Hen 2-47"
        },
        {
            "description": "planetary nebula",
            "imageFilename": "Bipolar_planetary_nebula_NGC_6537.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Red_Spider_Nebula",
            "label": "Red Spider Nebula"
        },
        {
            "description": "planetary nebula",
            "imageFilename": "NGC_6565.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/NGC_6565",
            "label": "NGC 6565"
        },
        {
            "description": "planetary nebula",
            "imageFilename": "NGC_6302_Hubble_2009.full.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/NGC_6302",
            "label": "Butterfly Nebula"
        },
        {
            "description": "planetary nebula",
            "imageFilename": "MUSE_image_of_the_Saturn_Nebula.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Saturn_Nebula",
            "label": "Saturn Nebula"
        },
        {
            "description": "planetary nebula",
            "imageFilename": "NGC_3132.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/NGC_3132",
            "label": "NGC 3132"
        },
        {
            "description": "planetary nebula",
            "imageFilename": "N2438s.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/NGC_2438",
            "label": "NGC 2438"
        },
        {
            "description": "planetary nebula in the constellation Lupus",
            "imageFilename": "Retinanebel.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/IC_4406",
            "label": "IC 4406"
        },
        {
            "description": "planetary nebula",
            "imageFilename": "NGC_2440_by_HST.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/NGC_2440",
            "label": "NGC 2440"
        },
        {
            "description": "planetary nebula in the constellation Lepus",
            "imageFilename": "Spirograph_Nebula_-_Hubble_1999.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/IC_418",
            "label": "IC 418"
        },
        {
            "description": "planetary nebula in the constellation Ara",
            "imageFilename": "Stingraynebula.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Stingray_Nebula",
            "label": "Stingray Nebula"
        },
        {
            "description": "Planetary nebula in the constellation Musca",
            "imageFilename": "NGC_5189.png",
            "infoUrl": "https://en.wikipedia.org/wiki/NGC_5189",
            "label": "NGC 5189"
        },
        {
            "imageFilename": "Menzel_1_-_EFOSC.2003-02-04T08_59_53.985.png",
            "infoUrl": "https://en.wikipedia.org/wiki/Mz_1",
            "label": "Mz 1"
        },
        {
            "description": "planetary nebula",
            "imageFilename": "Ant_Nebula.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Mz_3",
            "label": "Mz 3"
        },
        {
            "description": "astronomical object",
            "imageFilename": "Fine_Ring_Nebula.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Shapley_1",
            "label": "Shapley 1"
        },
        {
            "description": "planetary nebula in the constellation Musca",
            "imageFilename": "MyCn18-crop.png",
            "infoUrl": "https://en.wikipedia.org/wiki/Engraved_Hourglass_Nebula",
            "label": "Engraved Hourglass Nebula"
        },
        {
            "description": "planetary nebula",
            "imageFilename": "Planetary_nebula_NGC_3918.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/NGC_3918",
            "label": "NGC 3918"
        },
        {
            "imageFilename": "Eso1532a.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Southern_Owl_Nebula",
            "label": "Southern Owl Nebula"
        },
        {
            "description": "planetary nebula",
            "imageFilename": "NGC1360_Planetary_Nebula_from_the_Mount_Lemmon_SkyCenter_Schulman_Telescope_courtesy_Adam_Block.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/NGC_1360",
            "label": "Robin's Egg Nebula"
        },
        {
            "description": "planetary nebula",
            "imageFilename": "N1535s.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/NGC_1535",
            "label": "NGC 1535"
        },
        {
            "description": "planetary nebula",
            "imageFilename": "N4361s.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/NGC_4361",
            "label": "NGC 4361"
        },
        {
            "description": "planetary nebula in the constellation Centaurus",
            "imageFilename": "NGC_5307_(HST,_instrument_WFPC2).jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/NGC_5307",
            "label": "NGC 5307"
        },
        {
            "description": "planetary nebula",
            "imageFilename": "NGC_5315HSTfull.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/NGC_5315",
            "label": "NGC 5315"
        },
        {
            "description": "galaxy",
            "imageFilename": "NGC6309-HST-R814GB555.png",
            "infoUrl": "https://en.wikipedia.org/wiki/NGC_6309",
            "label": "Box Nebula"
        },
        {
            "description": "planetary nebula",
            "imageFilename": "NGC_6326.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/NGC_6326",
            "label": "NGC 6326"
        },
        {
            "description": "planetary nebula",
            "imageFilename": "Ngc6818.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/NGC_6818",
            "label": "Little Gem Nebula"
        },
        {
            "imageFilename": "ESO_577-24_FORS2_VLT.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/Abell_36",
            "label": "Abell 36"
        },
        {
            "imageFilename": "Hubble_Observes_Glowing,_Fiery_Shells_of_Gas.jpg",
            "infoUrl": "https://en.wikipedia.org/wiki/M_1-42",
            "label": "M 1-42"
        }
    ],
};


/***/ }),

/***/ "./src/app/space-images.service.ts":
/*!*****************************************!*\
  !*** ./src/app/space-images.service.ts ***!
  \*****************************************/
/*! exports provided: SpaceImagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceImagesService", function() { return SpaceImagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _space_images_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./space-images-data */ "./src/app/space-images-data.ts");





var imageBaseUrl = '/assets/space';
// Generate an imageUrl property for any item that contains an imageFilename
// property. The imageUrl is the base image URL plus the endpoint and the
// filename. The image filename is also encoded, in case it contains any
// URL-unfriendly characters.
//
function addImageUrls(items, endpoint) {
    return items.map(function (itemInfo) {
        if (!itemInfo.imageFilename) {
            return itemInfo;
        }
        var encodedFilename = encodeURIComponent(itemInfo.imageFilename);
        // Only add the image URLs if there's an image filename.
        //
        if (itemInfo.imageFilename) {
            var newItemInfo = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, itemInfo);
            newItemInfo.imageUrl = imageBaseUrl
                + '/' + endpoint
                + '/' + encodedFilename;
            // SVGs are their own thumbnails.
            //
            if (itemInfo.imageFilename.toLowerCase().endsWith('.svg')) {
                newItemInfo.imageThumbnailUrl = newItemInfo.imageUrl;
            }
            else {
                newItemInfo.imageThumbnailUrl = imageBaseUrl + '-thumbnails'
                    + '/' + endpoint
                    + '/' + encodedFilename;
            }
            return newItemInfo;
        }
        else {
            // There's no image filename, so don't add the image URLs.
            return itemInfo;
        }
    });
}
var SpaceImagesService = /** @class */ (function () {
    function SpaceImagesService() {
    }
    SpaceImagesService.prototype.load = function (endpoint) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_space_images_data__WEBPACK_IMPORTED_MODULE_4__["spaceImagesData"][endpoint]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (allItems) { return addImageUrls(allItems, endpoint); }));
    };
    SpaceImagesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SpaceImagesService);
    return SpaceImagesService;
}());



/***/ }),

/***/ "./src/app/space-videos-data.ts":
/*!**************************************!*\
  !*** ./src/app/space-videos-data.ts ***!
  \**************************************/
/*! exports provided: spaceVideosData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spaceVideosData", function() { return spaceVideosData; });
/* tslint:disable */
var spaceVideosData = {
    "misc": [
        {
            "title": "A Stellar Census of the Sword of Orion",
            "author": "NASA Spitzer",
            "id": "yB6NKBh9Q4Y",
        },
        {
            "title": "Imagining the Planets of TRAPPIST-1",
            "author": "NASA Spitzer",
            "id": "YGkj2IAqT4Y",
        },
        {
            "title": "Silicate Crystal Formation in the Disk of an Erupting Star",
            "author": "NASA Spitzer",
            "id": "pPz5lohthaw",
        },
        {
            "title": "15 Years in Space: NASA's Spitzer Space Telescope",
            "author": "NASA Jet Propulsion Laboratory",
            "id": "vglkIIFQZWI",
        },
        {
            "title": "NASA Scientists Share Why They Like Earth",
            "author": "NASA",
            "id": "tKZmcZc9-LY",
        },
        {
            "title": "What did NASA's New Horizons discover around Pluto?",
            "author": "Astrum",
            "id": "6l4kr36TzQ4",
        },
        {
            "title": "How We Solved the Mystery of Pulsating Auroras",
            "author": "SciShow Space",
            "id": "mG6ncmYTyl0",
        },
        {
            "title": "Why are stars spiky?",
            "author": "DeepSkyVideos",
            "id": "ipe3NN1yPzM",
        },
        {
            "title": "Egg Nebula ",
            "author": "DeepSkyVideos",
            "id": "ZCgZAMsuPz0",
        },
        {
            "title": "Neutron Star Collision Detected - Where Did It Happen?",
            "author": "VideoFromSpace",
            "id": "7Tit-O7HedE",
        },
        {
            "title": "Juno: Scraping Jupiter",
            "author": "SpaceRip",
            "id": "-k3ze3G4Lyg",
        },
    ],
};


/***/ }),

/***/ "./src/app/space-videos.service.ts":
/*!*****************************************!*\
  !*** ./src/app/space-videos.service.ts ***!
  \*****************************************/
/*! exports provided: SpaceVideosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceVideosService", function() { return SpaceVideosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _space_videos_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./space-videos-data */ "./src/app/space-videos-data.ts");





var videoBaseUrl = 'https://www.youtube.com/embed/';
// Generate a videoUrl property for each item
// by combining the base URL with the video ID.
//
function addVideoUrl(items, endpoint) {
    return items.map(function (itemInfo) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, itemInfo, { videoUrl: videoBaseUrl + '/' + itemInfo.id })); });
}
var SpaceVideosService = /** @class */ (function () {
    function SpaceVideosService() {
    }
    SpaceVideosService.prototype.load = function (endpoint) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_space_videos_data__WEBPACK_IMPORTED_MODULE_4__["spaceVideosData"][endpoint]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (allItems) { return addVideoUrl(allItems, endpoint); }));
    };
    SpaceVideosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SpaceVideosService);
    return SpaceVideosService;
}());



/***/ }),

/***/ "./src/app/utils.ts":
/*!**************************!*\
  !*** ./src/app/utils.ts ***!
  \**************************/
/*! exports provided: shuffleArrayInPlace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffleArrayInPlace", function() { return shuffleArrayInPlace; });
function shuffleArrayInPlace(array) {
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}


/***/ }),

/***/ "./src/app/video-list/video-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/video-list/video-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9wcm9qZWN0cy9zcGFjZXdhbGsvc3JjL2FwcC92aWRlby1saXN0L3ZpZGVvLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/video-list/video-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/video-list/video-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<video-thumbnail\n  [video]=\"v\"\n  *ngFor=\"let v of videoData\"\n  (click)=\"setCurrentVideo(v)\"\n  [class.highlighted]=\"v === currentVideo\"\n></video-thumbnail>\n"

/***/ }),

/***/ "./src/app/video-list/video-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/video-list/video-list.component.ts ***!
  \****************************************************/
/*! exports provided: VideoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoListComponent", function() { return VideoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var VideoListComponent = /** @class */ (function () {
    function VideoListComponent() {
        this.selectVideo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    VideoListComponent.prototype.setCurrentVideo = function (video) {
        this.currentVideo = video;
        this.selectVideo.emit(video);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VideoListComponent.prototype, "videoData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VideoListComponent.prototype, "selectVideo", void 0);
    VideoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'video-list',
            template: __webpack_require__(/*! ./video-list.component.html */ "./src/app/video-list/video-list.component.html"),
            styles: [__webpack_require__(/*! ./video-list.component.css */ "./src/app/video-list/video-list.component.css")]
        })
    ], VideoListComponent);
    return VideoListComponent;
}());



/***/ }),

/***/ "./src/app/video-player/video-player.component.css":
/*!*********************************************************!*\
  !*** ./src/app/video-player/video-player.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding: 20px;\n  font-size: 1.5rem;\n}\n\n.video-wrapper {\n\tposition: relative;\n\tpadding-bottom: 56.25%; /* 16:9 */\n\tpadding-top: 25px;\n\theight: 0;\n\n  margin-bottom: 25px;\n  border: 2px solid black;\n  box-shadow:\n    10px 10px 10px 0 rgba(0, 0, 0, 0.33),\n    0 0 10px rgba(0, 0, 0, 0.33)\n  ;\n}\n\n.video-wrapper iframe {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n}\n\n.instructions {\n  padding-top: 20vh;\n}\n\n.video-title,\n.video-author {\n  text-align: right;\n  font-weight: bold;\n}\n\n.video-author:before {\n  font-style: italic;\n  font-weight: normal;\n  content: 'from ';\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Byb2plY3RzL3NwYWNld2Fsay9zcmMvYXBwL3ZpZGVvLXBsYXllci92aWRlby1wbGF5ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLHNCQUFzQixFQUFFLFNBQVM7Q0FDakMsaUJBQWlCO0NBQ2pCLFNBQVM7O0VBRVIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qjs7O0VBR0E7QUFDRjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixNQUFNO0NBQ04sT0FBTztDQUNQLFdBQVc7Q0FDWCxZQUFZO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6Ii4uL3Byb2plY3RzL3NwYWNld2Fsay9zcmMvYXBwL3ZpZGVvLXBsYXllci92aWRlby1wbGF5ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4udmlkZW8td3JhcHBlciB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0cGFkZGluZy1ib3R0b206IDU2LjI1JTsgLyogMTY6OSAqL1xuXHRwYWRkaW5nLXRvcDogMjVweDtcblx0aGVpZ2h0OiAwO1xuXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBib3gtc2hhZG93OlxuICAgIDEwcHggMTBweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjMzKSxcbiAgICAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMzMpXG4gIDtcbn1cblxuLnZpZGVvLXdyYXBwZXIgaWZyYW1lIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDA7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG59XG5cbi5pbnN0cnVjdGlvbnMge1xuICBwYWRkaW5nLXRvcDogMjB2aDtcbn1cblxuLnZpZGVvLXRpdGxlLFxuLnZpZGVvLWF1dGhvciB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnZpZGVvLWF1dGhvcjpiZWZvcmUge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbnRlbnQ6ICdmcm9tICc7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/video-player/video-player.component.html":
/*!**********************************************************!*\
  !*** ./src/app/video-player/video-player.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"videoUrl; else instructions\">\n\n  <div class=\"video-wrapper\">\n    <iframe\n      width=\"560\"\n      height=\"315\"\n      [src]=\"videoUrl\"\n      frameborder=\"0\"\n      allowfullscreen\n    ></iframe>\n  </div>\n\n  <div class=\"video-title\">{{ video.title }}</div>\n  <div class=\"video-author\">{{ video.author }}</div>\n\n</ng-container>\n\n<ng-template #instructions>\n  <div class=\"instructions\">\n    Please select a video from the list.\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/video-player/video-player.component.ts":
/*!********************************************************!*\
  !*** ./src/app/video-player/video-player.component.ts ***!
  \********************************************************/
/*! exports provided: VideoPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPlayerComponent", function() { return VideoPlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var VideoPlayerComponent = /** @class */ (function () {
    function VideoPlayerComponent(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    Object.defineProperty(VideoPlayerComponent.prototype, "video", {
        get: function () { return this.theVideo; },
        // Create a trusted version of the video URL each time
        // the input video changes.
        //
        set: function (value) {
            this.theVideo = value;
            if (value && value.videoUrl) {
                this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(value.videoUrl);
            }
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], VideoPlayerComponent.prototype, "video", null);
    VideoPlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'video-player',
            template: __webpack_require__(/*! ./video-player.component.html */ "./src/app/video-player/video-player.component.html"),
            styles: [__webpack_require__(/*! ./video-player.component.css */ "./src/app/video-player/video-player.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], VideoPlayerComponent);
    return VideoPlayerComponent;
}());



/***/ }),

/***/ "./src/app/video-thumbnail/video-thumbnail.component.css":
/*!***************************************************************!*\
  !*** ./src/app/video-thumbnail/video-thumbnail.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  background-color: white;\n  padding: 15px;\n  margin: 15px;\n  cursor: pointer;\n  box-shadow: inset 0 0 2em black;\n}\n\n:host:hover {\n  box-shadow: 0 0 20px 5px white;\n}\n\n.highlighted:hover {\n  box-shadow: 0 0 20px 5px rgb(255, 253, 210);\n}\n\nimg {\n  width: 100%;\n}\n\n.video-title,\n.video-author {\n  font-size: 0.75rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Byb2plY3RzL3NwYWNld2Fsay9zcmMvYXBwL3ZpZGVvLXRodW1ibmFpbC92aWRlby10aHVtYm5haWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6QiIsImZpbGUiOiIuLi9wcm9qZWN0cy9zcGFjZXdhbGsvc3JjL2FwcC92aWRlby10aHVtYm5haWwvdmlkZW8tdGh1bWJuYWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAyZW0gYmxhY2s7XG59XG5cbjpob3N0OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggNXB4IHdoaXRlO1xufVxuXG4uaGlnaGxpZ2h0ZWQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMjBweCA1cHggcmdiKDI1NSwgMjUzLCAyMTApO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnZpZGVvLXRpdGxlLFxuLnZpZGVvLWF1dGhvciB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/video-thumbnail/video-thumbnail.component.html":
/*!****************************************************************!*\
  !*** ./src/app/video-thumbnail/video-thumbnail.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img [src]=\"  'http://img.youtube.com/vi/' + video.id + '/0.jpg'  \">\n<div class=\"video-title\">{{ video.title }}</div>\n<div class=\"video-author\">{{ video.author }}</div>\n"

/***/ }),

/***/ "./src/app/video-thumbnail/video-thumbnail.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/video-thumbnail/video-thumbnail.component.ts ***!
  \**************************************************************/
/*! exports provided: VideoThumbnailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoThumbnailComponent", function() { return VideoThumbnailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var VideoThumbnailComponent = /** @class */ (function () {
    function VideoThumbnailComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VideoThumbnailComponent.prototype, "video", void 0);
    VideoThumbnailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'video-thumbnail',
            template: __webpack_require__(/*! ./video-thumbnail.component.html */ "./src/app/video-thumbnail/video-thumbnail.component.html"),
            styles: [__webpack_require__(/*! ./video-thumbnail.component.css */ "./src/app/video-thumbnail/video-thumbnail.component.css")]
        })
    ], VideoThumbnailComponent);
    return VideoThumbnailComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: grid;\n  height: 100vh;\n  place-items: center;\n  overflow: hidden;\n  background: black;\n  text-align: center;\n}\n\n.info {\n  z-index: 2;\n  grid-row: 1 / -1;\n  grid-column: 1 / -1;\n\n  color: #ffd54e;\n  text-shadow: 0 0 20px black;\n  transform:\n    translateY(-80px)\n    perspective(100px)\n    rotateX(10deg)\n  ;\n}\n\n.info h1 {\n  text-transform: uppercase;\n  font-size: 700%;\n}\n\n.info h2, h3 {\n  font-size: 200%;\n}\n\n.benny {\n  z-index: 1;\n  grid-row: 1 / -1;\n  grid-column: 1 / -1;\n  -webkit-animation: whee 20s infinite linear;\n          animation: whee 20s infinite linear;\n}\n\n@-webkit-keyframes whee {\n  from {\n    transform: translateX(-5000px) rotate(0deg);\n  }\n  to {\n    transform: translateX(5000px) rotate(719deg);\n  }\n}\n\n@keyframes whee {\n  from {\n    transform: translateX(-5000px) rotate(0deg);\n  }\n  to {\n    transform: translateX(5000px) rotate(719deg);\n  }\n}\n\n/*\n * Hyperspace effect adapted from <https://codepen.io/noahblon/pen/GKflw>\n * by Noah Blon <https://codepen.io/noahblon/>\n */\n\n.wall {\n  background: url('/spacewalk/assets/misc/hyperspace-background.jpg');\n  background-size: cover;\n}\n\n.scene {\n  width: 1px;\n  height: 1px;\n  grid-row: 1 / -1;\n  grid-column: 1 / -1;\n  perspective: 5px;\n  perspective-origin: 50% 50%;\n  position: relative;\n}\n\n.wrap {\n  position: absolute;\n  width: 1000px;\n  height: 1000px;\n  left: -500px;\n  top: -500px;\n  transform-style: preserve-3d;\n  -webkit-animation: move 12s infinite linear;\n          animation: move 12s infinite linear;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n.wrap:nth-child(2) {\n  -webkit-animation: move 12s infinite linear;\n          animation: move 12s infinite linear;\n  -webkit-animation-delay: 6s;\n          animation-delay: 6s;\n}\n\n.wall {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  opacity: 0;\n  -webkit-animation: fade 12s infinite linear;\n          animation: fade 12s infinite linear;\n  -webkit-animation-delay: 0;\n          animation-delay: 0;\n}\n\n.wrap:nth-child(2) .wall {\n  -webkit-animation-delay: 6s;\n          animation-delay: 6s;\n}\n\n.wall-right {\n  transform: rotateY(90deg) translateZ(500px);\n}\n\n.wall-left {\n  transform: rotateY(-90deg) translateZ(500px);\n}\n\n.wall-top {\n  transform: rotateX(90deg) translateZ(500px);\n}\n\n.wall-bottom {\n  transform: rotateX(-90deg) translateZ(500px);\n}\n\n.wall-back {\n  transform: rotateX(180deg) translateZ(500px);\n}\n\n@-webkit-keyframes move {\n  0%{\n    transform: translateZ(-500px) rotate(0deg);\n  }\n  100%{\n    transform: translateZ(500px) rotate(0deg);\n  }\n}\n\n@keyframes move {\n  0%{\n    transform: translateZ(-500px) rotate(0deg);\n  }\n  100%{\n    transform: translateZ(500px) rotate(0deg);\n  }\n}\n\n@-webkit-keyframes fade {\n  0%{\n    opacity: 0;\n  }\n  25% {\n    opacity: 1;\n  }\n  75% {\n    opacity: 1;\n  }\n  100%{\n    opacity: 0;\n  }\n}\n\n@keyframes fade {\n  0%{\n    opacity: 0;\n  }\n  25% {\n    opacity: 1;\n  }\n  75% {\n    opacity: 1;\n  }\n  100%{\n    opacity: 0;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Byb2plY3RzL3NwYWNld2Fsay9zcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjs7RUFFbkIsY0FBYztFQUNkLDJCQUEyQjtFQUMzQjs7OztFQUlBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiwyQ0FBbUM7VUFBbkMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0U7SUFDRSwyQ0FBMkM7RUFDN0M7RUFDQTtJQUNFLDRDQUE0QztFQUM5QztBQUNGOztBQVBBO0VBQ0U7SUFDRSwyQ0FBMkM7RUFDN0M7RUFDQTtJQUNFLDRDQUE0QztFQUM5QztBQUNGOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLG1FQUF1RDtFQUN2RCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxZQUFZO0VBQ1osV0FBVztFQUNYLDRCQUE0QjtFQUM1QiwyQ0FBbUM7VUFBbkMsbUNBQW1DO0VBQ25DLHFDQUE2QjtVQUE3Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSwyQ0FBbUM7VUFBbkMsbUNBQW1DO0VBQ25DLDJCQUFtQjtVQUFuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsMkNBQW1DO1VBQW5DLG1DQUFtQztFQUNuQywwQkFBa0I7VUFBbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMkJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFO0lBQ0UsMENBQTBDO0VBQzVDO0VBQ0E7SUFDRSx5Q0FBeUM7RUFDM0M7QUFDRjs7QUFQQTtFQUNFO0lBQ0UsMENBQTBDO0VBQzVDO0VBQ0E7SUFDRSx5Q0FBeUM7RUFDM0M7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBYkE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGIiwiZmlsZSI6Ii4uL3Byb2plY3RzL3NwYWNld2Fsay9zcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5mbyB7XG4gIHotaW5kZXg6IDI7XG4gIGdyaWQtcm93OiAxIC8gLTE7XG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XG5cbiAgY29sb3I6ICNmZmQ1NGU7XG4gIHRleHQtc2hhZG93OiAwIDAgMjBweCBibGFjaztcbiAgdHJhbnNmb3JtOlxuICAgIHRyYW5zbGF0ZVkoLTgwcHgpXG4gICAgcGVyc3BlY3RpdmUoMTAwcHgpXG4gICAgcm90YXRlWCgxMGRlZylcbiAgO1xufVxuXG4uaW5mbyBoMSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogNzAwJTtcbn1cblxuLmluZm8gaDIsIGgzIHtcbiAgZm9udC1zaXplOiAyMDAlO1xufVxuXG4uYmVubnkge1xuICB6LWluZGV4OiAxO1xuICBncmlkLXJvdzogMSAvIC0xO1xuICBncmlkLWNvbHVtbjogMSAvIC0xO1xuICBhbmltYXRpb246IHdoZWUgMjBzIGluZmluaXRlIGxpbmVhcjtcbn1cblxuQGtleWZyYW1lcyB3aGVlIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MDAwcHgpIHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwMDBweCkgcm90YXRlKDcxOWRlZyk7XG4gIH1cbn1cblxuLypcbiAqIEh5cGVyc3BhY2UgZWZmZWN0IGFkYXB0ZWQgZnJvbSA8aHR0cHM6Ly9jb2RlcGVuLmlvL25vYWhibG9uL3Blbi9HS2Zsdz5cbiAqIGJ5IE5vYWggQmxvbiA8aHR0cHM6Ly9jb2RlcGVuLmlvL25vYWhibG9uLz5cbiAqL1xuXG4ud2FsbCB7XG4gIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL21pc2MvaHlwZXJzcGFjZS1iYWNrZ3JvdW5kLmpwZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5zY2VuZSB7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMXB4O1xuICBncmlkLXJvdzogMSAvIC0xO1xuICBncmlkLWNvbHVtbjogMSAvIC0xO1xuICBwZXJzcGVjdGl2ZTogNXB4O1xuICBwZXJzcGVjdGl2ZS1vcmlnaW46IDUwJSA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLndyYXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAwcHg7XG4gIGhlaWdodDogMTAwMHB4O1xuICBsZWZ0OiAtNTAwcHg7XG4gIHRvcDogLTUwMHB4O1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICBhbmltYXRpb246IG1vdmUgMTJzIGluZmluaXRlIGxpbmVhcjtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi53cmFwOm50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbjogbW92ZSAxMnMgaW5maW5pdGUgbGluZWFyO1xuICBhbmltYXRpb24tZGVsYXk6IDZzO1xufVxuXG4ud2FsbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBmYWRlIDEycyBpbmZpbml0ZSBsaW5lYXI7XG4gIGFuaW1hdGlvbi1kZWxheTogMDtcbn1cblxuLndyYXA6bnRoLWNoaWxkKDIpIC53YWxsIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiA2cztcbn1cblxuLndhbGwtcmlnaHQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooNTAwcHgpO1xufVxuXG4ud2FsbC1sZWZ0IHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlWig1MDBweCk7XG59XG5cbi53YWxsLXRvcCB7XG4gIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgdHJhbnNsYXRlWig1MDBweCk7XG59XG5cbi53YWxsLWJvdHRvbSB7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpIHRyYW5zbGF0ZVooNTAwcHgpO1xufVxuXG4ud2FsbC1iYWNrIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZykgdHJhbnNsYXRlWig1MDBweCk7XG59XG5cbkBrZXlmcmFtZXMgbW92ZSB7XG4gIDAle1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtNTAwcHgpIHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAle1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWig1MDBweCkgcm90YXRlKDBkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZSB7XG4gIDAle1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMjUlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDc1JSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAle1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"info\">\n  <h1>Spacewalk</h1>\n  <h2>\n    Bill Odom\n    &bull; @wnodom\n    &bull; bill@billodom.com\n  </h2>\n</div>\n\n<img class=\"benny\" src=\"/assets/misc/benny.png\">\n\n<div class=\"scene\">\n  <div class=\"wrap\">\n      <div class=\"wall wall-right\"></div>\n      <div class=\"wall wall-left\"></div>   \n      <div class=\"wall wall-top\"></div>\n      <div class=\"wall wall-bottom\"></div> \n      <div class=\"wall wall-back\"></div>    \n  </div>\n  <div class=\"wrap\">\n      <div class=\"wall wall-right\"></div>\n      <div class=\"wall wall-left\"></div>   \n      <div class=\"wall wall-top\"></div>\n      <div class=\"wall wall-bottom\"></div>   \n      <div class=\"wall wall-back\"></div>    \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        })
    ], WelcomeComponent);
    return WelcomeComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! /Users/bodom/spacewalk/projects/spacewalk/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map