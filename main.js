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

module.exports = "p, h2{\r\n    font-family: 'Apple Chancery, cursive';\r\n}\r\np{\r\n    font-size: 22px;\r\n}\r\na{\r\n    font-size: 18px;\r\n}\r\nheader{\r\n    background-color:   rgba(0, 0, 0, 0);;\r\n}\r\n.animated-icon3{\r\n\r\n    z-index: 6000;\r\n\r\n    top: 3%;\r\n\r\n    right: 5%;\r\n\r\n    width: 30px;\r\n\r\n    height: 20px;\r\n\r\n    position: fixed;\r\n\r\n    margin: 0px;\r\n\r\n    -webkit-transform: rotate(0deg);\r\n\r\n    transform: rotate(0deg);\r\n\r\n    transition: .5s ease-in-out;\r\n\r\n    cursor: pointer;\r\n\r\n  }\r\n.animated-icon3 span {\r\n\r\n    display: block;\r\n\r\n    position: absolute;\r\n\r\n    height: 3px;\r\n\r\n    width: 100%;\r\n\r\n    border-radius: 9px;\r\n\r\n    opacity: 1;\r\n\r\n    left: 0;\r\n\r\n    -webkit-transform: rotate(0deg);\r\n\r\n    transform: rotate(0deg);\r\n\r\n    transition: .25s ease-in-out;\r\n\r\n  }\r\n.animated-icon3 span {\r\n\r\n    background: #e3f2fd;\r\n\r\n}\r\n/* Icon 3*/\r\n.animated-icon3 span:nth-child(1) {\r\n\r\n    top: 0px;\r\n\r\n  }\r\n.animated-icon3 span:nth-child(2), .animated-icon3 span:nth-child(3) {\r\n\r\n    top: 10px;\r\n\r\n  }\r\n.animated-icon3 span:nth-child(4) {\r\n\r\n    top: 20px;\r\n\r\n  }\r\n.animated-icon3.open span:nth-child(1) {\r\n\r\n    top: 11px;\r\n\r\n    width: 0%;\r\n\r\n    left: 50%;\r\n\r\n  }\r\n.animated-icon3.open span:nth-child(2) {\r\n\r\n    -webkit-transform: rotate(45deg);\r\n\r\n    transform: rotate(45deg);\r\n\r\n  }\r\n.animated-icon3.open span:nth-child(3) {\r\n\r\n    -webkit-transform: rotate(-45deg);\r\n\r\n    transform: rotate(-45deg);\r\n\r\n  }\r\n.animated-icon3.open span:nth-child(4) {\r\n\r\n    top: 11px;\r\n\r\n    width: 0%;\r\n\r\n    left: 50%;\r\n\r\n  }\r\n.hamborger{\r\n    position: fixed;\r\n    opacity: 0.9;\r\n    background-color: #312b2b; \r\n    height: 60%;\r\n    width: 80%;\r\n    top:0%;  \r\n    -webkit-transform: translateX(200%);  \r\n            transform: translateX(200%);\r\n    transition-duration: 1s;\r\n    border-radius: 10px;\r\n    z-index: 5000;\r\n}\r\n@media (min-height: 350px)\r\n{\r\n .hamborger{\r\n    height: 95%;\r\n  }\r\n}\r\n@media (min-height: 400px)\r\n{\r\n .hamborger{\r\n    height: 82%;\r\n  }\r\n}\r\n@media (min-height: 500px)\r\n{\r\n .hamborger{\r\n    height: 65%;\r\n  }\r\n}\r\n@media (min-height: 600px)\r\n{\r\n .hamborger{\r\n    height: 55%;\r\n  }\r\n}\r\n.hamborger.active{\r\n\r\n    -webkit-transform: translateX(0%);\r\n\r\n            transform: translateX(0%)\r\n\r\n}\r\n.list-group{\r\n\r\n    margin-top: 25%;\r\n\r\n}\r\n.list-group-item{\r\n\r\n    direction: rtl;\r\n\r\n    width: 90%;\r\nmargin-right: 5%;\r\n    /* margin-left: 3%; */\r\n\r\n}\r\n.menuIcon{\r\n\r\n    float: left;\r\n\r\n}\r\n.list-group-item-text{\r\n     float: right;\r\n     \r\n }\r\n.nav-menu > li{\r\n    padding-left: 10px;\r\n    height: 26px;\r\n    border-left: 2px solid;\r\n}\r\n.nav-menu > li:first-child{\r\n     border-left: none;\r\n}\r\n@media (min-width: 767px)\r\n{\r\n  .animated-icon3{\r\n      display: none;\r\n  }\r\n}\r\n.logoInHome{\r\n    position: absolute;\r\n    top: 15%;\r\n    left: 5px;\r\n}\r\n.menuInHome{\r\n    position: absolute;\r\n    top: 20px;\r\n}\r\n/* loader */\r\n.cs-loader {\r\n    z-index: 20;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    background:black;\r\n    opacity: 0.3;\r\n   \r\n  }\r\n.cs-loader-inner {\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    top: 50%;\r\n    position: absolute;\r\n    width: calc(100% - 200px);\r\n    color: #FFF;\r\n    padding: 0 100px;\r\n    text-align: center;\r\n  }\r\n.cs-loader-inner label {\r\n    font-size: 20px;\r\n    opacity: 0;\r\n    display:inline-block;\r\n  }\r\n@keyframes lol {\r\n    0% {\r\n      opacity: 0;\r\n      -webkit-transform: translateX(-300px);\r\n              transform: translateX(-300px);\r\n    }\r\n    33% {\r\n      opacity: 1;\r\n      -webkit-transform: translateX(0px);\r\n              transform: translateX(0px);\r\n    }\r\n    66% {\r\n      opacity: 1;\r\n      -webkit-transform: translateX(0px);\r\n              transform: translateX(0px);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translateX(300px);\r\n              transform: translateX(300px);\r\n    }\r\n  }\r\n@-webkit-keyframes lol {\r\n    0% {\r\n      opacity: 0;\r\n      -webkit-transform: translateX(-300px);\r\n    }\r\n    33% {\r\n      opacity: 1;\r\n      -webkit-transform: translateX(0px);\r\n    }\r\n    66% {\r\n      opacity: 1;\r\n      -webkit-transform: translateX(0px);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translateX(300px);\r\n    }\r\n  }\r\n.cs-loader-inner label:nth-child(6) {\r\n    -webkit-animation: lol 3s infinite ease-in-out;\r\n    animation: lol 3s infinite ease-in-out;\r\n  }\r\n.cs-loader-inner label:nth-child(5) {\r\n    -webkit-animation: lol 3s 100ms infinite ease-in-out;\r\n    animation: lol 3s 100ms infinite ease-in-out;\r\n  }\r\n.cs-loader-inner label:nth-child(4) {\r\n    -webkit-animation: lol 3s 200ms infinite ease-in-out;\r\n    animation: lol 3s 200ms infinite ease-in-out;\r\n  }\r\n.cs-loader-inner label:nth-child(3) {\r\n    -webkit-animation: lol 3s 300ms infinite ease-in-out;\r\n    animation: lol 3s 300ms infinite ease-in-out;\r\n  }\r\n.cs-loader-inner label:nth-child(2) {\r\n    -webkit-animation: lol 3s 400ms infinite ease-in-out;\r\n    animation: lol 3s 400ms infinite ease-in-out;\r\n  }\r\n.cs-loader-inner label:nth-child(1) {\r\n    -webkit-animation: lol 3s 500ms infinite ease-in-out;\r\n    animation: lol 3s 500ms infinite ease-in-out;\r\n  }\r\n@media(max-width : 676px)\r\n  {\r\n    .cs-loader-inner {  \r\n      width: calc(100%);     \r\n    }\r\n\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQ0FBc0M7QUFDMUM7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG9DQUFvQztBQUN4QztBQU1BOztJQUVJLGFBQWE7O0lBRWIsT0FBTzs7SUFFUCxTQUFTOztJQUVULFdBQVc7O0lBRVgsWUFBWTs7SUFFWixlQUFlOztJQUVmLFdBQVc7O0lBRVgsK0JBQStCOztJQU0vQix1QkFBdUI7O0lBUXZCLDJCQUEyQjs7SUFFM0IsZUFBZTs7RUFFakI7QUFJQTs7SUFFRSxjQUFjOztJQUVkLGtCQUFrQjs7SUFFbEIsV0FBVzs7SUFFWCxXQUFXOztJQUVYLGtCQUFrQjs7SUFFbEIsVUFBVTs7SUFFVixPQUFPOztJQUVQLCtCQUErQjs7SUFNL0IsdUJBQXVCOztJQVF2Qiw0QkFBNEI7O0VBRTlCO0FBRUE7O0lBRUUsbUJBQW1COztBQUV2QjtBQUlFLFVBQVU7QUFJVjs7SUFFRSxRQUFROztFQUVWO0FBSUE7O0lBRUUsU0FBUzs7RUFFWDtBQUlBOztJQUVFLFNBQVM7O0VBRVg7QUFJQTs7SUFFRSxTQUFTOztJQUVULFNBQVM7O0lBRVQsU0FBUzs7RUFFWDtBQUlBOztJQUVFLGdDQUFnQzs7SUFNaEMsd0JBQXdCOztFQUUxQjtBQUlBOztJQUVFLGlDQUFpQzs7SUFNakMseUJBQXlCOztFQUUzQjtBQUlBOztJQUVFLFNBQVM7O0lBRVQsU0FBUzs7SUFFVCxTQUFTOztFQUVYO0FBS0Y7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsVUFBVTtJQUNWLE1BQU07SUFDTixtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUNBOztDQUVDO0lBQ0csV0FBVztFQUNiO0FBQ0Y7QUFDQTs7Q0FFQztJQUNHLFdBQVc7RUFDYjtBQUNGO0FBQ0E7O0NBRUM7SUFDRyxXQUFXO0VBQ2I7QUFDRjtBQUNBOztDQUVDO0lBQ0csV0FBVztFQUNiO0FBQ0Y7QUFFQTs7SUFFSSxpQ0FBd0I7O1lBQXhCOztBQUVKO0FBSUE7O0lBRUksZUFBZTs7QUFFbkI7QUFFQTs7SUFFSSxjQUFjOztJQUVkLFVBQVU7QUFDZCxnQkFBZ0I7SUFDWixxQkFBcUI7O0FBRXpCO0FBSUE7O0lBRUksV0FBVzs7QUFFZjtBQUVDO0tBQ0ksWUFBWTs7Q0FFaEI7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osc0JBQXNCO0FBQzFCO0FBQ0E7S0FDSyxpQkFBaUI7QUFDdEI7QUFDQTs7RUFFRTtNQUNJLGFBQWE7RUFDakI7QUFDRjtBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0FBQ2I7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7QUFLQSxXQUFXO0FBQ1g7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsWUFBWTs7RUFFZDtBQUVBO0lBQ0UsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0UsZUFBZTtJQUNmLFVBQVU7SUFDVixvQkFBb0I7RUFDdEI7QUFFQTtJQUNFO01BQ0UsVUFBVTtNQUNWLHFDQUE2QjtjQUE3Qiw2QkFBNkI7SUFDL0I7SUFDQTtNQUNFLFVBQVU7TUFDVixrQ0FBMEI7Y0FBMUIsMEJBQTBCO0lBQzVCO0lBQ0E7TUFDRSxVQUFVO01BQ1Ysa0NBQTBCO2NBQTFCLDBCQUEwQjtJQUM1QjtJQUNBO01BQ0UsVUFBVTtNQUNWLG9DQUE0QjtjQUE1Qiw0QkFBNEI7SUFDOUI7RUFDRjtBQUVBO0lBQ0U7TUFDRSxVQUFVO01BQ1YscUNBQXFDO0lBQ3ZDO0lBQ0E7TUFDRSxVQUFVO01BQ1Ysa0NBQWtDO0lBQ3BDO0lBQ0E7TUFDRSxVQUFVO01BQ1Ysa0NBQWtDO0lBQ3BDO0lBQ0E7TUFDRSxVQUFVO01BQ1Ysb0NBQW9DO0lBQ3RDO0VBQ0Y7QUFFQTtJQUNFLDhDQUE4QztJQUM5QyxzQ0FBc0M7RUFDeEM7QUFFQTtJQUNFLG9EQUFvRDtJQUNwRCw0Q0FBNEM7RUFDOUM7QUFFQTtJQUNFLG9EQUFvRDtJQUNwRCw0Q0FBNEM7RUFDOUM7QUFFQTtJQUNFLG9EQUFvRDtJQUNwRCw0Q0FBNEM7RUFDOUM7QUFFQTtJQUNFLG9EQUFvRDtJQUNwRCw0Q0FBNEM7RUFDOUM7QUFFQTtJQUNFLG9EQUFvRDtJQUNwRCw0Q0FBNEM7RUFDOUM7QUFFQTs7SUFFRTtNQUNFLGlCQUFpQjtJQUNuQjs7RUFFRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCwgaDJ7XHJcbiAgICBmb250LWZhbWlseTogJ0FwcGxlIENoYW5jZXJ5LCBjdXJzaXZlJztcclxufVxyXG5we1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcbmF7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICByZ2JhKDAsIDAsIDAsIDApOztcclxufVxyXG5cclxuXHJcblxyXG5cclxuIFxyXG4uYW5pbWF0ZWQtaWNvbjN7XHJcblxyXG4gICAgei1pbmRleDogNjAwMDtcclxuXHJcbiAgICB0b3A6IDMlO1xyXG5cclxuICAgIHJpZ2h0OiA1JTtcclxuXHJcbiAgICB3aWR0aDogMzBweDtcclxuXHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcblxyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG5cclxuICAgIG1hcmdpbjogMHB4O1xyXG5cclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcblxyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuXHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuXHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuXHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC41cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAtbW96LXRyYW5zaXRpb246IC41cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAtby10cmFuc2l0aW9uOiAuNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogLjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgfVxyXG5cclxuIFxyXG5cclxuICAuYW5pbWF0ZWQtaWNvbjMgc3BhbiB7XHJcblxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICAgIGhlaWdodDogM3B4O1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuXHJcbiAgICBvcGFjaXR5OiAxO1xyXG5cclxuICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuXHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG5cclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG5cclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG5cclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAtbW96LXRyYW5zaXRpb246IC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgLW8tdHJhbnNpdGlvbjogLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICB9XHJcblxyXG4gIC5hbmltYXRlZC1pY29uMyBzcGFuIHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiAjZTNmMmZkO1xyXG5cclxufVxyXG5cclxuIFxyXG5cclxuICAvKiBJY29uIDMqL1xyXG5cclxuIFxyXG5cclxuICAuYW5pbWF0ZWQtaWNvbjMgc3BhbjpudGgtY2hpbGQoMSkge1xyXG5cclxuICAgIHRvcDogMHB4O1xyXG5cclxuICB9XHJcblxyXG4gXHJcblxyXG4gIC5hbmltYXRlZC1pY29uMyBzcGFuOm50aC1jaGlsZCgyKSwgLmFuaW1hdGVkLWljb24zIHNwYW46bnRoLWNoaWxkKDMpIHtcclxuXHJcbiAgICB0b3A6IDEwcHg7XHJcblxyXG4gIH1cclxuXHJcbiBcclxuXHJcbiAgLmFuaW1hdGVkLWljb24zIHNwYW46bnRoLWNoaWxkKDQpIHtcclxuXHJcbiAgICB0b3A6IDIwcHg7XHJcblxyXG4gIH1cclxuXHJcbiBcclxuXHJcbiAgLmFuaW1hdGVkLWljb24zLm9wZW4gc3BhbjpudGgtY2hpbGQoMSkge1xyXG5cclxuICAgIHRvcDogMTFweDtcclxuXHJcbiAgICB3aWR0aDogMCU7XHJcblxyXG4gICAgbGVmdDogNTAlO1xyXG5cclxuICB9XHJcblxyXG4gXHJcblxyXG4gIC5hbmltYXRlZC1pY29uMy5vcGVuIHNwYW46bnRoLWNoaWxkKDIpIHtcclxuXHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcblxyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cclxuICB9XHJcblxyXG4gXHJcblxyXG4gIC5hbmltYXRlZC1pY29uMy5vcGVuIHNwYW46bnRoLWNoaWxkKDMpIHtcclxuXHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcblxyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG5cclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcblxyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuXHJcbiAgfVxyXG5cclxuIFxyXG5cclxuICAuYW5pbWF0ZWQtaWNvbjMub3BlbiBzcGFuOm50aC1jaGlsZCg0KSB7XHJcblxyXG4gICAgdG9wOiAxMXB4O1xyXG5cclxuICAgIHdpZHRoOiAwJTtcclxuXHJcbiAgICBsZWZ0OiA1MCU7XHJcblxyXG4gIH1cclxuXHJcbiBcclxuXHJcbiBcclxuLmhhbWJvcmdlcntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMTJiMmI7IFxyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgdG9wOjAlOyAgXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwJSk7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB6LWluZGV4OiA1MDAwO1xyXG59XHJcbkBtZWRpYSAobWluLWhlaWdodDogMzUwcHgpXHJcbntcclxuIC5oYW1ib3JnZXJ7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4taGVpZ2h0OiA0MDBweClcclxue1xyXG4gLmhhbWJvcmdlcntcclxuICAgIGhlaWdodDogODIlO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDUwMHB4KVxyXG57XHJcbiAuaGFtYm9yZ2Vye1xyXG4gICAgaGVpZ2h0OiA2NSU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLWhlaWdodDogNjAwcHgpXHJcbntcclxuIC5oYW1ib3JnZXJ7XHJcbiAgICBoZWlnaHQ6IDU1JTtcclxuICB9XHJcbn1cclxuXHJcbi5oYW1ib3JnZXIuYWN0aXZle1xyXG5cclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSlcclxuXHJcbn1cclxuXHJcbiBcclxuXHJcbi5saXN0LWdyb3Vwe1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDI1JTtcclxuXHJcbn1cclxuXHJcbi5saXN0LWdyb3VwLWl0ZW17XHJcblxyXG4gICAgZGlyZWN0aW9uOiBydGw7XHJcblxyXG4gICAgd2lkdGg6IDkwJTtcclxubWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIC8qIG1hcmdpbi1sZWZ0OiAzJTsgKi9cclxuXHJcbn1cclxuXHJcbiBcclxuXHJcbi5tZW51SWNvbntcclxuXHJcbiAgICBmbG9hdDogbGVmdDtcclxuXHJcbn1cclxuXHJcbiAubGlzdC1ncm91cC1pdGVtLXRleHR7XHJcbiAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgIFxyXG4gfVxyXG4ubmF2LW1lbnUgPiBsaXtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGhlaWdodDogMjZweDtcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQ7XHJcbn1cclxuLm5hdi1tZW51ID4gbGk6Zmlyc3QtY2hpbGR7XHJcbiAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2N3B4KVxyXG57XHJcbiAgLmFuaW1hdGVkLWljb24ze1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5sb2dvSW5Ib21le1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNSU7XHJcbiAgICBsZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5tZW51SW5Ib21le1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKiBsb2FkZXIgKi9cclxuLmNzLWxvYWRlciB7XHJcbiAgICB6LWluZGV4OiAyMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6YmxhY2s7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbiAgIFxyXG4gIH1cclxuICBcclxuICAuY3MtbG9hZGVyLWlubmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwMHB4KTtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgcGFkZGluZzogMCAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmNzLWxvYWRlci1pbm5lciBsYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgbG9sIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMDBweCk7XHJcbiAgICB9XHJcbiAgICAzMyUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcclxuICAgIH1cclxuICAgIDY2JSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMDBweCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBsb2wge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzAwcHgpO1xyXG4gICAgfVxyXG4gICAgMzMlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcclxuICAgIH1cclxuICAgIDY2JSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzAwcHgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY3MtbG9hZGVyLWlubmVyIGxhYmVsOm50aC1jaGlsZCg2KSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbG9sIDNzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgYW5pbWF0aW9uOiBsb2wgM3MgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jcy1sb2FkZXItaW5uZXIgbGFiZWw6bnRoLWNoaWxkKDUpIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBsb2wgM3MgMTAwbXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb246IGxvbCAzcyAxMDBtcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgXHJcbiAgLmNzLWxvYWRlci1pbm5lciBsYWJlbDpudGgtY2hpbGQoNCkge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGxvbCAzcyAyMDBtcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgIGFuaW1hdGlvbjogbG9sIDNzIDIwMG1zIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBcclxuICAuY3MtbG9hZGVyLWlubmVyIGxhYmVsOm50aC1jaGlsZCgzKSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbG9sIDNzIDMwMG1zIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgYW5pbWF0aW9uOiBsb2wgM3MgMzAwbXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jcy1sb2FkZXItaW5uZXIgbGFiZWw6bnRoLWNoaWxkKDIpIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBsb2wgM3MgNDAwbXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb246IGxvbCAzcyA0MDBtcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgXHJcbiAgLmNzLWxvYWRlci1pbm5lciBsYWJlbDpudGgtY2hpbGQoMSkge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGxvbCAzcyA1MDBtcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgIGFuaW1hdGlvbjogbG9sIDNzIDUwMG1zIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhKG1heC13aWR0aCA6IDY3NnB4KVxyXG4gIHtcclxuICAgIC5jcy1sb2FkZXItaW5uZXIgeyAgXHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUpOyAgICAgXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cs-loader\" style=\"display: none\">\n  <div class=\"cs-loader-inner\">\n    <label> ●</label>\n    <label> ●</label>\n    <label> ●</label>\n    <label> ●</label>\n    <label> ●</label>\n    <label> ●</label>\n  </div>\n</div>\n    \n    <div class=\"animated-icon3\"><span></span><span></span><span></span><span></span></div>\n\n \n\n      <!-- <div #gmap style=\"width:100%;height:400px\"></div> -->\n\n    \n\n      <div class=\"hamborger\">\n\n          <div class=\"list-group\">\n \n              <a routerLink=\"\" class=\"list-group-item\"> <span class=\"list-group-item-text\">  בית </span>  <span class=\"glyphicon glyphicon-home menuIcon\"></span> </a>\n\n              <a routerLink=\"contact-us\" class=\"list-group-item\"><span class=\"list-group-item-text\">צור קשר </span> <span class=\"glyphicon glyphicon-earphone menuIcon\"></span> </a>\n\n              <a routerLink=\"practices\" class=\"list-group-item\"><span class=\"list-group-item-text\">תחומי עיסוק </span> <span class=\"glyphicon  glyphicon-lock menuIcon\" > </span> </a>\n\n              <a routerLink=\"about\" class=\"list-group-item\"><span class=\"list-group-item-text\">אודות  </span> <span class=\"glyphicon glyphicon-globe menuIcon\"></span>  </a>\n\n              <a routerLink=\"requerdes\" class=\"list-group-item\"><span class=\"list-group-item-text\">תאונות דרכים </span> <span class=\"glyphicon  glyphicon-user menuIcon\"> </span> </a>\n            \n              <a routerLink=\"maps\" class=\"list-group-item\"><span class=\"list-group-item-text\">דרכי הגעה  </span> <span class=\"glyphicon  glyphicon-user menuIcon\"> </span> </a>\n  \n            </div>\n\n      </div>\n\n\n<!-- <span class=\"glyphicon glyphicon-home menuIcon\">    \n <span class=\"glyphicon glyphicon-earphone menuIcon\">\n <span class=\"glyphicon  glyphicon-user menuIcon\">  \n <span class=\"glyphicon  glyphicon-lock menuIcon\" > \n <span class=\"glyphicon glyphicon-globe menuIcon\">       -->\n\n\n\n<header id=\"header\" class=\"header-mobile\">\n    <div class=\"container-fluid\">\n\n      <div id=\"logo\" class=\"pull-left logoInHome\">\n        <h1><a routerLink=\"\" class=\"scrollto\"><img src=\"assets/img/LOGO.jpg\" style=\"height: 7vh; border-radius: 8px;\" alt=\"\"></a></h1>\n        <!-- Uncomment below if you prefer to use an image logo -->\n        <!-- <a href=\"#intro\"><img src=\"assets/img/logo.png\" alt=\"\" title=\"\" /></a>-->\n      </div>\n\n      <nav id=\"nav-menu-container\" class=\"menuInHome\">\n        <ul class=\"nav-menu\">\n          <!-- <li class=\"menu-active\"><a href=\"#intro\">ראשי</a></li> -->\n          <!-- <li><a href=\"#about\"></a></li> -->\n          <li><a routerLink=\"practices\">תחומי עיסוק</a></li>\n           <li><a routerLink=\"about\">אודות</a></li> \n           <li><a routerLink=\"requerdes\">תאונות דרכים</a></li> \n           <li><a routerLink=\"maps\">דרכי הגעה</a></li> \n          <!-- <li><a href=\"#team\">Team</a></li> -->\n           <!-- <li class=\"menu-has-children\"><a href=\"\">Drop Down</a>\n            <ul>\n              <li><a href=\"#\">Drop Down 1</a></li>\n              <li><a href=\"#\">Drop Down 3</a></li>\n              <li><a href=\"#\">Drop Down 4</a></li>\n              <li><a href=\"#\">Drop Down 5</a></li>\n            </ul>\n          </li>  -->\n          <li><a routerLink=\"contact-us\">צור קשר</a></li>\n          <li><a routerLink=\"\">בית</a></li>\n        </ul>\n      </nav><!-- #nav-menu-container -->\n    </div>\n  </header><!-- #header -->\n\n<router-outlet (activate)=\"onRouteChange()\"> </router-outlet>\n\n  <!--==========================\n    Footer\n  ============================-->\n  <footer id=\"footer\">\n    <!-- <div class=\"footer-top\">\n      <div class=\"container\">\n        <div class=\"row\">\n\n          <div class=\"col-lg-3 col-md-6 footer-info\">\n            <h3>BizPage</h3>\n            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>\n          </div>\n\n          <div class=\"col-lg-3 col-md-6 footer-links\">\n            <h4>Useful Links</h4>\n            <ul>\n              <li><i class=\"ion-ios-arrow-right\"></i> <a href=\"#\">Home</a></li>\n              <li><i class=\"ion-ios-arrow-right\"></i> <a href=\"#\">About us</a></li>\n              <li><i class=\"ion-ios-arrow-right\"></i> <a href=\"#\">Services</a></li>\n              <li><i class=\"ion-ios-arrow-right\"></i> <a href=\"#\">Terms of service</a></li>\n              <li><i class=\"ion-ios-arrow-right\"></i> <a href=\"#\">Privacy policy</a></li>\n            </ul>\n          </div>\n\n          <div class=\"col-lg-3 col-md-6 footer-contact\">\n            <h4>Contact Us</h4>\n            <p>\n              A108 Adam Street <br>\n              New York, NY 535022<br>\n              United States <br>\n              <strong>Phone:</strong> +1 5589 55488 55<br>\n              <strong>Email:</strong> info@example.com<br>\n            </p>\n\n            <div class=\"social-links\">\n              <a href=\"#\" class=\"twitter\"><i class=\"fa fa-twitter\"></i></a>\n              <a href=\"#\" class=\"facebook\"><i class=\"fa fa-facebook\"></i></a>\n              <a href=\"#\" class=\"instagram\"><i class=\"fa fa-instagram\"></i></a>\n              <a href=\"#\" class=\"google-plus\"><i class=\"fa fa-google-plus\"></i></a>\n              <a href=\"#\" class=\"linkedin\"><i class=\"fa fa-linkedin\"></i></a>\n            </div>\n\n          </div>\n\n          <div class=\"col-lg-3 col-md-6 footer-newsletter\">\n            <h4>Our Newsletter</h4>\n            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem marada parida nodela caramase seza.</p>\n            <form action=\"\" method=\"post\">\n              <input type=\"email\" name=\"email\"><input type=\"submit\"  value=\"Subscribe\">\n            </form>\n          </div>\n\n        </div>\n      </div>\n    </div> -->\n\n    <div class=\"container\">\n      <div class=\"copyright\">\n        &copy; Copyright <strong>moshe levi</strong>. All Rights Reserved\n      </div>\n      <div class=\"credits\">\n        <!--\n          All the links in the footer should remain intact.\n          You can delete the links only if you purchased the pro version.\n          Licensing information: https://bootstrapmade.com/license/\n          Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=BizPage\n        -->\n        Best <a href=\"https://bootstrapmade.com/\">Bootstrap Templates</a> by BootstrapMade\n      </div>\n    </div>\n  </footer><!-- #footer -->\n\n  <a href=\"#\" class=\"back-to-top\"><i class=\"fa fa-chevron-up\"></i></a>\n\n\n\n   \n   \n\n "

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    AppComponent.prototype.ngOnInit = function () {
        $('.animated-icon3').click(function () {
            $(this).toggleClass('open');
            $(".hamborger").toggleClass('active');
        });
    };
    AppComponent.prototype.onRouteChange = function () {
        var hamborger = $(".hamborger");
        if (hamborger.hasClass("active")) {
            $(".hamborger").removeClass("active");
            $(".animated-icon3").removeClass('open');
        }
        var currentPageArray = this.router.url.split("/");
        if (currentPageArray[1] == '') {
            $("#header").css("background-color", "rgba(0, 0, 0, 0)");
            //   $("#logo").removeClass("logoInHome");
            //  $("#nav-menu-container").removeClass("menuInHome");
        }
        else {
            $("#header").css("background-color", "black");
            //   $("#logo").addClass("logoInHome");
            //  $("#nav-menu-container").addClass("menuInHome");      
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _modules_app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/app-routing/app-routing.module */ "./src/app/modules/app-routing/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_template_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-template/about/about.component */ "./src/app/page-template/about/about.component.ts");
/* harmony import */ var _page_template_requerdes_requerdes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-template/requerdes/requerdes.component */ "./src/app/page-template/requerdes/requerdes.component.ts");
/* harmony import */ var _page_template_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page-template/contact-us/contact-us.component */ "./src/app/page-template/contact-us/contact-us.component.ts");
/* harmony import */ var _page_template_practices_practices_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page-template/practices/practices.component */ "./src/app/page-template/practices/practices.component.ts");
/* harmony import */ var _page_template_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-template/home/home.component */ "./src/app/page-template/home/home.component.ts");
/* harmony import */ var _page_template_maps_maps_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-template/maps/maps.component */ "./src/app/page-template/maps/maps.component.ts");
/* harmony import */ var app_services_api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/services/api.service */ "./src/app/services/api.service.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _page_template_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _page_template_requerdes_requerdes_component__WEBPACK_IMPORTED_MODULE_8__["RequerdesComponent"],
                _page_template_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_9__["ContactUsComponent"],
                _page_template_practices_practices_component__WEBPACK_IMPORTED_MODULE_10__["PracticesComponent"],
                _page_template_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _page_template_maps_maps_component__WEBPACK_IMPORTED_MODULE_12__["MapsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _modules_app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
            ],
            providers: [app_services_api_service__WEBPACK_IMPORTED_MODULE_13__["ApiService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/modules/app-routing/app-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/app-routing/app-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_page_template_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/page-template/home/home.component */ "./src/app/page-template/home/home.component.ts");
/* harmony import */ var app_page_template_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/page-template/about/about.component */ "./src/app/page-template/about/about.component.ts");
/* harmony import */ var app_page_template_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/page-template/contact-us/contact-us.component */ "./src/app/page-template/contact-us/contact-us.component.ts");
/* harmony import */ var app_page_template_practices_practices_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/page-template/practices/practices.component */ "./src/app/page-template/practices/practices.component.ts");
/* harmony import */ var app_page_template_requerdes_requerdes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/page-template/requerdes/requerdes.component */ "./src/app/page-template/requerdes/requerdes.component.ts");
/* harmony import */ var app_page_template_maps_maps_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/page-template/maps/maps.component */ "./src/app/page-template/maps/maps.component.ts");









var routes = [
    { path: '', component: app_page_template_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about', component: app_page_template_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'contact-us', component: app_page_template_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__["ContactUsComponent"] },
    { path: 'practices', component: app_page_template_practices_practices_component__WEBPACK_IMPORTED_MODULE_6__["PracticesComponent"] },
    { path: 'requerdes', component: app_page_template_requerdes_requerdes_component__WEBPACK_IMPORTED_MODULE_7__["RequerdesComponent"] },
    { path: 'maps', component: app_page_template_maps_maps_component__WEBPACK_IMPORTED_MODULE_8__["MapsComponent"] },
    { path: '**', redirectTo: '' }
];
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

/***/ "./src/app/page-template/about/about.component.css":
/*!*********************************************************!*\
  !*** ./src/app/page-template/about/about.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtdGVtcGxhdGUvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/page-template/about/about.component.html":
/*!**********************************************************!*\
  !*** ./src/app/page-template/about/about.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br>  \n<section id=\"services\">\n      <div class=\"container\">\n\n        <header class=\"section-header wow fadeInUp\">\n           <h3>אודות</h3> \n          <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus, ad pro quaestio laboramus. Ei ubique vivendum pro. At ius nisl accusam lorenta zanos paradigno tridexa panatarel.</p>\n        </header>\n\n        <div class=\"row\">\n\n          <div class=\"col-lg-4 col-md-6 box wow bounceInUp\" data-wow-duration=\"1.4s\">\n            <div class=\"icon\"><i class=\"ion-ios-analytics-outline\"></i></div>\n            <h4 class=\"title\"><a href=\"\">Lorem Ipsum</a></h4>\n            <p class=\"description\">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>\n          </div>\n          <div class=\"col-lg-4 col-md-6 box wow bounceInUp\" data-wow-duration=\"1.4s\">\n            <div class=\"icon\"><i class=\"ion-ios-bookmarks-outline\"></i></div>\n            <h4 class=\"title\"><a href=\"\">Dolor Sitema</a></h4>\n            <p class=\"description\">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>\n          </div>\n          <div class=\"col-lg-4 col-md-6 box wow bounceInUp\" data-wow-duration=\"1.4s\">\n            <div class=\"icon\"><i class=\"ion-ios-paper-outline\"></i></div>\n            <h4 class=\"title\"><a href=\"\">Sed ut perspiciatis</a></h4>\n            <p class=\"description\">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>\n          </div>\n          <div class=\"col-lg-4 col-md-6 box wow bounceInUp\" data-wow-delay=\"0.1s\" data-wow-duration=\"1.4s\">\n            <div class=\"icon\"><i class=\"ion-ios-speedometer-outline\"></i></div>\n            <h4 class=\"title\"><a href=\"\">Magni Dolores</a></h4>\n            <p class=\"description\">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>\n          </div>\n          <div class=\"col-lg-4 col-md-6 box wow bounceInUp\" data-wow-delay=\"0.1s\" data-wow-duration=\"1.4s\">\n            <div class=\"icon\"><i class=\"ion-ios-barcode-outline\"></i></div>\n            <h4 class=\"title\"><a href=\"\">Nemo Enim</a></h4>\n            <p class=\"description\">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>\n          </div>\n          <div class=\"col-lg-4 col-md-6 box wow bounceInUp\" data-wow-delay=\"0.1s\" data-wow-duration=\"1.4s\">\n            <div class=\"icon\"><i class=\"ion-ios-people-outline\"></i></div>\n            <h4 class=\"title\"><a href=\"\">Eiusmod Tempor</a></h4>\n            <p class=\"description\">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>\n          </div>\n\n        </div>\n\n      </div>\n    </section> \n\n"

/***/ }),

/***/ "./src/app/page-template/about/about.component.ts":
/*!********************************************************!*\
  !*** ./src/app/page-template/about/about.component.ts ***!
  \********************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
        backToTop();
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/page-template/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/page-template/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/page-template/contact-us/contact-us.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/page-template/contact-us/contact-us.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtdGVtcGxhdGUvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-template/contact-us/contact-us.component.html":
/*!********************************************************************!*\
  !*** ./src/app/page-template/contact-us/contact-us.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br>    \n<div style=\"background-color: #e8e7e7\">\n<section id=\"contact\" class=\"section-bg wow fadeInUp\" style=\"background-color: #e8e7e7\" >\n      <div class=\"container\">\n\n        <div class=\"section-header\">\n          <h3>צור קשר!</h3>\n          <p>צור איתנו קשר באחת מהדרכים הבאות ונשמח לתת לך שירות בהקדם.</p>\n        </div>\n\n        <div class=\"row contact-info\">\n        \n         \n          <div class=\"col-md-4\">\n              <a href=\"//waze.com/ul?ll=32.084628,34.803025&navigate=yes\">\n            <div class=\"contact-address\">\n              <i class=\"ion-ios-location-outline\"></i>\n              <h3>כתובת</h3>\n              <address>רחוב אבא הלל סילבר 7 רמת גן. </address>\n            </div>\n          </a>\n          </div>\n\n          <div  class=\"col-md-4\">\n            <a href=\"tel:03-5545458\">\n            <div class=\"contact-phone\">\n              <i class=\"ion-ios-telephone-outline\"></i>\n              <h3>מספר טלפון</h3>\n              <p>03-5545458</p>\n            </div>\n          </a>\n          </div>\n\n          <div class=\"col-md-4\">\n              <a href=\"mailto:avialboo@gmail.com\">\n            <div class=\"contact-email\">\n              <i class=\"ion-ios-email-outline\"></i>\n              <h3>דואר אלקטרוני</h3>\n              <p>avialboo@gmail.com</p>\n            </div>\n          </a>\n          </div>\n\n        </div>\n \n        <div class=\"form\">\n          <div id=\"sendmessage\" *ngIf=\"isSuccess\">ההודעה נקלטה במערכת. תודה על פנייתך.</div>\n          <div id=\"errormessage\"></div>\n          <form action=\"\" method=\"post\" role=\"form\" class=\"contactForm\">\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"name\" class=\"form-control\" id=\"name\" placeholder=\"שם מלא\" />\n                <div *ngIf=\"isValidFirstName\" class=\"validation\">{{isValidFirstNameMesseg}}</div>\n              </div>\n              <div class=\"form-group col-md-6\">\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"mail.From\" name=\"email\" id=\"email\" placeholder=\"כתובת אימייל\"  />\n                <div *ngIf=\"isValidEmail\" class=\"validation\">{{isValidEmailMesseg}}</div>\n              </div>\n            </div>\n             <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <input type=\"tel\" name=\"phone\" class=\"form-control\" [(ngModel)]=\"phone\" id=\"phone\" placeholder=\"מספר נייד\"  />\n                <div *ngIf=\"isValidPhone\" class=\"validation\">{{isValidPhoneMesseg}}</div>\n              </div>\n              <div class=\"form-group col-md-6\">\n                <input type=\"text\" class=\"form-control\" name=\"sub\" [(ngModel)]=\"mail.Subject\" id=\"sub\" placeholder=\"נושא\"  />\n                <div *ngIf=\"isValidSub\" class=\"validation\">{{isValidSubMesseg}}</div>\n              </div>\n            </div>\n           \n            <div class=\"form-group\">\n              <textarea class=\"form-control\" name=\"message\" rows=\"5\" [(ngModel)]=\"body\"  placeholder=\"תוכן ההודעה\"></textarea>\n              <div *ngIf=\"isValidDes\" class=\"validation\">{{isValidDesMesseg}}</div>\n            </div>\n            <div class=\"text-center\"><button type=\"submit\" (click)=\"sendEmail()\">שלח</button></div>\n          </form>\n        </div>  \n\n      </div>\n    </section>\n    </div>"

/***/ }),

/***/ "./src/app/page-template/contact-us/contact-us.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/page-template/contact-us/contact-us.component.ts ***!
  \******************************************************************/
/*! exports provided: ContactUsComponent, MailMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailMessage", function() { return MailMessage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/api.service */ "./src/app/services/api.service.ts");



var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent(api) {
        this.api = api;
        this.mail = new MailMessage();
        this.phone = "";
        this.name = "";
        this.body = "";
        this.isSuccess = false;
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent.prototype.sendEmail = function () {
        var _this = this;
        this.isValidSumary = true;
        this.validation();
        if (!this.isValidSumary)
            return false;
        $(".cs-loader").show();
        this.mail.Body = "שם: " + this.name + ". <br>  טלפון: " + this.phone + ". <br> תוכן ההודעה:" + this.body;
        this.mail.To = "shirelalbo@gmail.com";
        this.api.sendData(this.mail).subscribe(function (res) {
            _this.isSuccess = true;
            _this.mail = new MailMessage();
            _this.phone = "";
            _this.name = "";
            _this.body = "";
            $(".cs-loader").hide();
        }, function (err) {
            $(".cs-loader").hide();
            alert(err);
        });
    };
    ContactUsComponent.prototype.validation = function () {
        this.validFirstNameFun();
        this.validSubjectFun();
        this.validDesFun();
        this.validEmailFun();
        this.validPhoneFun();
    };
    ContactUsComponent.prototype.validFirstNameFun = function () {
        // first name
        this.isValidFirstName = false;
        if (this.name.length == 1) {
            this.isValidFirstName = true;
            this.isValidFirstNameMesseg = "חובה להזין לפחות שתי תווים";
        }
        if (this.name == "") {
            this.isValidFirstName = true;
            this.isValidFirstNameMesseg = "שם הינו שדה חובה"; // "שם פרטי הינו שדה חובה";
        }
        if (this.isValidFirstName) {
            this.isValidSumary = false;
        }
    };
    ContactUsComponent.prototype.validSubjectFun = function () {
        // first name
        this.isValidSub = false;
        if (this.mail.Subject == 1) {
            this.isValidSub = true;
            this.isValidSubMesseg = "חובה להזין לפחות שתי תווים";
        }
        if (this.mail.Subject == "") {
            this.isValidSub = true;
            this.isValidSubMesseg = "נושא הינו שדה חובה"; // "שם פרטי הינו שדה חובה";
        }
        if (this.isValidSub) {
            this.isValidSumary = false;
        }
    };
    ContactUsComponent.prototype.validDesFun = function () {
        //last name
        this.isValidDes = false;
        if (this.body == "") {
            this.isValidDes = true;
            this.isValidDesMesseg = "תיאור הינו שדה חובה"; //"שם משפחה הינו שדה חובה";
        }
        if (this.isValidDes) {
            this.isValidSumary = false;
        }
    };
    ContactUsComponent.prototype.validEmailFun = function () {
        //email
        this.isValidEmail = false;
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.mail.From)) {
            this.isValidEmail = true;
            this.isValidEmailMesseg = "כתובת אמייל אינה חוקית"; // "כתובת אימייל אינה חוקית";
        }
        if (this.mail.From == "") {
            this.isValidEmail = true;
            this.isValidEmailMesseg = "אימייל הינו שדה חובה"; //"כתובת אימייל הינו שדה חובה";
        }
        if (this.isValidEmail) {
            this.isValidSumary = false;
        }
    };
    ContactUsComponent.prototype.validPhoneFun = function () {
        //phone
        this.isValidPhone = false;
        if (!/^\d+$/.test(this.phone) || !/^05\d([-]{0,1})\d{7}$/.test(this.phone)) {
            this.isValidPhone = true;
            this.isValidPhoneMesseg = "מספר טלפון אינו חוקי"; //"מספר טלפון אינו חוקי";
            this.isValidSumary = false;
        }
        if (this.phone.length != 10) {
            this.isValidPhone = true;
            this.isValidPhoneMesseg = "מספר טלפון חייב להיות באורך של עשר ספרות"; //"מספר טלפון חייב להיות באורך של עשר ספרות";
            this.isValidSumary = false;
        }
        if (this.phone == "") {
            this.isValidPhone = true;
            this.isValidPhoneMesseg = "טלפון הינו שדה חובה"; //"טלפון הינו שדה חובה";    
        }
        if (this.isValidPhone) {
            this.isValidSumary = false;
        }
    };
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/page-template/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/page-template/contact-us/contact-us.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], ContactUsComponent);
    return ContactUsComponent;
}());

var MailMessage = /** @class */ (function () {
    function MailMessage() {
        this.Subject = "";
    }
    return MailMessage;
}());



/***/ }),

/***/ "./src/app/page-template/home/home.component.css":
/*!*******************************************************!*\
  !*** ./src/app/page-template/home/home.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtdGVtcGxhdGUvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-template/home/home.component.html":
/*!********************************************************!*\
  !*** ./src/app/page-template/home/home.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <!--==========================\n    Intro Section\n  ============================-->\n  <section id=\"intro\">\n    <div class=\"intro-container\">\n      <div id=\"introCarousel\" class=\"carousel  slide carousel-fade\" data-ride=\"carousel\">\n\n        <ol class=\"carousel-indicators\"></ol>\n\n        <div class=\"carousel-inner\" role=\"listbox\">\n\n          <div class=\"carousel-item active\">\n            <div class=\"carousel-background\"><img src=\"assets/img/IMG-20180501-WA0002.jpg\" alt=\"\"></div>\n            <div class=\"carousel-container\">\n              <div class=\"carousel-content\">\n                <h2> אברהם אלבו- עורך דין.</h2>\n                <p>מומחה בעניני ניזקי גוף, רשלנות רפואית, תאונות דרכים, תאונות עבודה וביטוח לאומי.</p>\n                <a href=\"#contact\" class=\"btn-get-started scrollto\">צור קשר</a>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"carousel-item \">\n            <div class=\"carousel-background\"><img src=\"assets/img/IMG-20180501-WA0003.jpg\" alt=\"\"></div>\n            <div class=\"carousel-container\">\n              <div class=\"carousel-content\">\n                <h2> אברהם אלבו- עורך דין.</h2>\n                <p>מומחה בעניני ניזקי גוף, רשלנות רפואית, תאונות דרכים, תאונות עבודה וביטוח לאומי.</p>\n                <a href=\"#contact\" class=\"btn-get-started scrollto\">צור קשר</a>\n              </div>\n            </div>\n          </div>\n\n           <div class=\"carousel-item \">\n            <div class=\"carousel-background\"><img src=\"assets/img/IMG_20180506_150351.jpg\" alt=\"\"></div>\n            <div class=\"carousel-container\">\n              <div class=\"carousel-content\">\n                <h2> אברהם אלבו- עורך דין.</h2>\n                <p>מומחה בעניני ניזקי גוף, רשלנות רפואית, תאונות דרכים, תאונות עבודה וביטוח לאומי.</p>\n                <a href=\"#contact\" class=\"btn-get-started scrollto\">צור קשר</a>\n              </div>\n            </div>\n          </div>\n<!-- \n          <div class=\"carousel-item\">\n            <div class=\"carousel-background\"><img src=\"assets/img/intro-carousel/4.jpg\" alt=\"\"></div>\n            <div class=\"carousel-container\">\n              <div class=\"carousel-content\">\n                <h2>Nam libero tempore</h2>\n                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum.</p>\n                <a href=\"#featured-services\" class=\"btn-get-started scrollto\">Get Started</a>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"carousel-item\">\n            <div class=\"carousel-background\"><img src=\"assets/img/intro-carousel/5.jpg\" alt=\"\"></div>\n            <div class=\"carousel-container\">\n              <div class=\"carousel-content\">\n                <h2>Magnam aliquam quaerat</h2>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n                <a href=\"#featured-services\" class=\"btn-get-started scrollto\">Get Started</a>\n              </div>\n            </div>\n          </div> -->\n\n        </div>\n\n        <a class=\"carousel-control-prev\" href=\"#introCarousel\" role=\"button\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon ion-chevron-left\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n\n        <a class=\"carousel-control-next\" href=\"#introCarousel\" role=\"button\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon ion-chevron-right\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n\n      </div>\n    </div>\n  </section><!-- #intro -->\n\n  <main id=\"main\">\n\n    <!--==========================\n      Featured Services Section\n    ============================-->\n    <!-- <section id=\"featured-services\">\n      <div class=\"container\">\n        <div class=\"row\">\n\n          <div class=\"col-lg-4 box\">\n            <i class=\"ion-ios-bookmarks-outline\"></i>\n            <h4 class=\"title\"><a href=\"\">Lorem Ipsum Delino</a></h4>\n            <p class=\"description\">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>\n          </div>\n\n          <div class=\"col-lg-4 box box-bg\">\n            <i class=\"ion-ios-stopwatch-outline\"></i>\n            <h4 class=\"title\"><a href=\"\">Dolor Sitema</a></h4>\n            <p class=\"description\">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>\n          </div>\n\n          <div class=\"col-lg-4 box\">\n            <i class=\"ion-ios-heart-outline\"></i>\n            <h4 class=\"title\"><a href=\"\">Sed ut perspiciatis</a></h4>\n            <p class=\"description\">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>\n          </div>\n\n        </div>\n      </div>\n    </section> -->\n    \n    <!-- #featured-services -->\n\n    <!--==========================\n      About Us Section\n    ============================-->\n   \n    <!-- #about -->\n\n    <!--==========================\n      Services Section\n    ============================-->\n   \n    <!-- #services -->\n\n    <!--==========================\n      Call To Action Section\n    ============================-->\n    <!-- <section id=\"call-to-action\" class=\"wow fadeIn\">\n      <div class=\"container text-center\">\n        <h3>Call To Action</h3>\n        <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n        <a class=\"cta-btn\" href=\"#\">Call To Action</a>\n      </div>\n    </section> -->\n    <!-- #call-to-action -->\n\n    <!--==========================\n      Skills Section\n    ============================-->\n    <!-- <section id=\"skills\">\n      <div class=\"container\">\n\n        <header class=\"section-header\">\n          <h3>Our Skills</h3>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>\n        </header>\n\n        <div class=\"skills-content\">\n\n          <div class=\"progress\">\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n              <span class=\"skill\">HTML <i class=\"val\">100%</i></span>\n            </div>\n          </div>\n\n          <div class=\"progress\">\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n              <span class=\"skill\">CSS <i class=\"val\">90%</i></span>\n            </div>\n          </div>\n\n          <div class=\"progress\">\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n              <span class=\"skill\">JavaScript <i class=\"val\">75%</i></span>\n            </div>\n          </div>\n\n          <div class=\"progress\">\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" aria-valuenow=\"55\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n              <span class=\"skill\">Photoshop <i class=\"val\">55%</i></span>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n    </section> -->\n\n    <!--==========================\n      Facts Section\n    ============================-->\n    <!-- <section id=\"facts\"  class=\"wow fadeIn\">\n      <div class=\"container\">\n\n        <header class=\"section-header\">\n          <h3>Facts</h3>\n          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>\n        </header>\n\n        <div class=\"row counters\">\n\n  \t\t\t\t<div class=\"col-lg-3 col-6 text-center\">\n            <span data-toggle=\"counter-up\">274</span>\n            <p>Clients</p>\n  \t\t\t\t</div>\n\n          <div class=\"col-lg-3 col-6 text-center\">\n            <span data-toggle=\"counter-up\">421</span>\n            <p>Projects</p>\n  \t\t\t\t</div>\n\n          <div class=\"col-lg-3 col-6 text-center\">\n            <span data-toggle=\"counter-up\">1,364</span>\n            <p>Hours Of Support</p>\n  \t\t\t\t</div>\n\n          <div class=\"col-lg-3 col-6 text-center\">\n            <span data-toggle=\"counter-up\">18</span>\n            <p>Hard Workers</p>\n  \t\t\t\t</div>\n\n  \t\t\t</div>\n\n        <div class=\"facts-img\">\n          <img src=\"assets/img/facts-img.png\" alt=\"\" class=\"img-fluid\">\n        </div>\n\n      </div>\n    </section> -->\n    <!-- #facts -->\n\n    <!--==========================\n      Portfolio Section\n    ============================-->\n    <!-- <section id=\"portfolio\"  class=\"section-bg\" >\n      <div class=\"container\">\n\n        <header class=\"section-header\">\n          <h3 class=\"section-title\">Our Portfolio</h3>\n        </header>\n\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <ul id=\"portfolio-flters\">\n              <li data-filter=\"*\" class=\"filter-active\">All</li>\n              <li data-filter=\".filter-app\">App</li>\n              <li data-filter=\".filter-card\">Card</li>\n              <li data-filter=\".filter-web\">Web</li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"row portfolio-container\">\n\n          <div class=\"col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp\">\n            <div class=\"portfolio-wrap\">\n              <figure>\n                <img src=\"assets/img/portfolio/app1.jpg\" class=\"img-fluid\" alt=\"\">\n                <a href=\"assets/img/portfolio/app1.jpg\" data-lightbox=\"portfolio\" data-title=\"App 1\" class=\"link-preview\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n                <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\n              </figure>\n\n              <div class=\"portfolio-info\">\n                <h4><a href=\"#\">App 1</a></h4>\n                <p>App</p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp\" data-wow-delay=\"0.1s\">\n            <div class=\"portfolio-wrap\">\n              <figure>\n                <img src=\"assets/img/portfolio/web3.jpg\" class=\"img-fluid\" alt=\"\">\n                <a href=\"assets/img/portfolio/web3.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Web 3\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n                <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\n              </figure>\n\n              <div class=\"portfolio-info\">\n                <h4><a href=\"#\">Web 3</a></h4>\n                <p>Web</p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp\" data-wow-delay=\"0.2s\">\n            <div class=\"portfolio-wrap\">\n              <figure>\n                <img src=\"assets/img/portfolio/app2.jpg\" class=\"img-fluid\" alt=\"\">\n                <a href=\"assets/img/portfolio/app2.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"App 2\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n                <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\n              </figure>\n\n              <div class=\"portfolio-info\">\n                <h4><a href=\"#\">App 2</a></h4>\n                <p>App</p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp\">\n            <div class=\"portfolio-wrap\">\n              <figure>\n                <img src=\"assets/img/portfolio/card2.jpg\" class=\"img-fluid\" alt=\"\">\n                <a href=\"assets/img/portfolio/card2.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Card 2\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n                <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\n              </figure>\n\n              <div class=\"portfolio-info\">\n                <h4><a href=\"#\">Card 2</a></h4>\n                <p>Card</p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp\" data-wow-delay=\"0.1s\">\n            <div class=\"portfolio-wrap\">\n              <figure>\n                <img src=\"assets/img/portfolio/web2.jpg\" class=\"img-fluid\" alt=\"\">\n                <a href=\"assets/img/portfolio/web2.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Web 2\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n                <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\n              </figure>\n\n              <div class=\"portfolio-info\">\n                <h4><a href=\"#\">Web 2</a></h4>\n                <p>Web</p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp\" data-wow-delay=\"0.2s\">\n            <div class=\"portfolio-wrap\">\n              <figure>\n                <img src=\"assets/img/portfolio/app3.jpg\" class=\"img-fluid\" alt=\"\">\n                <a href=\"assets/img/portfolio/app3.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"App 3\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n                <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\n              </figure>\n\n              <div class=\"portfolio-info\">\n                <h4><a href=\"#\">App 3</a></h4>\n                <p>App</p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp\">\n            <div class=\"portfolio-wrap\">\n              <figure>\n                <img src=\"assets/img/portfolio/card1.jpg\" class=\"img-fluid\" alt=\"\">\n                <a href=\"assets/img/portfolio/card1.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Card 1\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n                <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\n              </figure>\n\n              <div class=\"portfolio-info\">\n                <h4><a href=\"#\">Card 1</a></h4>\n                <p>Card</p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp\" data-wow-delay=\"0.1s\">\n            <div class=\"portfolio-wrap\">\n              <figure>\n                <img src=\"assets/img/portfolio/card3.jpg\" class=\"img-fluid\" alt=\"\">\n                <a href=\"assets/img/portfolio/card3.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Card 3\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n                <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\n              </figure>\n\n              <div class=\"portfolio-info\">\n                <h4><a href=\"#\">Card 3</a></h4>\n                <p>Card</p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp\" data-wow-delay=\"0.2s\">\n            <div class=\"portfolio-wrap\">\n              <figure>\n                <img src=\"assets/img/portfolio/web1.jpg\" class=\"img-fluid\" alt=\"\">\n                <a href=\"assets/img/portfolio/web1.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Web 1\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n                <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\n              </figure>\n\n              <div class=\"portfolio-info\">\n                <h4><a href=\"#\">Web 1</a></h4>\n                <p>Web</p>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n    </section> -->\n    <!-- #portfolio -->\n\n    <!--==========================\n      Clients Section\n    ============================-->\n    <!-- <section id=\"clients\" class=\"wow fadeInUp\">\n      <div class=\"container\">\n\n        <header class=\"section-header\">\n          <h3>Our Clients</h3>\n        </header>\n\n        <div class=\"owl-carousel clients-carousel\">\n          <img src=\"assets/img/clients/client-1.png\" alt=\"\">\n          <img src=\"assets/img/clients/client-2.png\" alt=\"\">\n          <img src=\"assets/img/clients/client-3.png\" alt=\"\">\n          <img src=\"assets/img/clients/client-4.png\" alt=\"\">\n          <img src=\"assets/img/clients/client-5.png\" alt=\"\">\n          <img src=\"assets/img/clients/client-6.png\" alt=\"\">\n          <img src=\"assets/img/clients/client-7.png\" alt=\"\">\n          <img src=\"assets/img/clients/client-8.png\" alt=\"\">\n        </div>\n\n      </div>\n    </section> -->\n    <!-- #clients -->\n\n    <!--==========================\n      Clients Section\n    ============================-->\n    <!-- <section id=\"testimonials\" class=\"section-bg wow fadeInUp\">\n      <div class=\"container\">\n\n        <header class=\"section-header\">\n          <h3>Testimonials</h3>\n        </header>\n\n        <div class=\"owl-carousel testimonials-carousel\">\n\n          <div class=\"testimonial-item\">\n            <img src=\"assets/img/testimonial-1.jpg\" class=\"testimonial-img\" alt=\"\">\n            <h3>Saul Goodman</h3>\n            <h4>Ceo &amp; Founder</h4>\n            <p>\n              <img src=\"assets/img/quote-sign-left.png\" class=\"quote-sign-left\" alt=\"\">\n              Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.\n              <img src=\"assets/img/quote-sign-right.png\" class=\"quote-sign-right\" alt=\"\">\n            </p>\n          </div>\n\n          <div class=\"testimonial-item\">\n            <img src=\"assets/img/testimonial-2.jpg\" class=\"testimonial-img\" alt=\"\">\n            <h3>Sara Wilsson</h3>\n            <h4>Designer</h4>\n            <p>\n              <img src=\"assets/img/quote-sign-left.png\" class=\"quote-sign-left\" alt=\"\">\n              Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.\n              <img src=\"assets/img/quote-sign-right.png\" class=\"quote-sign-right\" alt=\"\">\n            </p>\n          </div>\n\n          <div class=\"testimonial-item\">\n            <img src=\"assets/img/testimonial-3.jpg\" class=\"testimonial-img\" alt=\"\">\n            <h3>Jena Karlis</h3>\n            <h4>Store Owner</h4>\n            <p>\n              <img src=\"assets/img/quote-sign-left.png\" class=\"quote-sign-left\" alt=\"\">\n              Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.\n              <img src=\"assets/img/quote-sign-right.png\" class=\"quote-sign-right\" alt=\"\">\n            </p>\n          </div>\n\n          <div class=\"testimonial-item\">\n            <img src=\"assets/img/testimonial-4.jpg\" class=\"testimonial-img\" alt=\"\">\n            <h3>Matt Brandon</h3>\n            <h4>Freelancer</h4>\n            <p>\n              <img src=\"assets/img/quote-sign-left.png\" class=\"quote-sign-left\" alt=\"\">\n              Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.\n              <img src=\"assets/img/quote-sign-right.png\" class=\"quote-sign-right\" alt=\"\">\n            </p>\n          </div>\n\n          <div class=\"testimonial-item\">\n            <img src=\"assets/img/testimonial-5.jpg\" class=\"testimonial-img\" alt=\"\">\n            <h3>John Larson</h3>\n            <h4>Entrepreneur</h4>\n            <p>\n              <img src=\"assets/img/quote-sign-left.png\" class=\"quote-sign-left\" alt=\"\">\n              Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.\n              <img src=\"assets/img/quote-sign-right.png\" class=\"quote-sign-right\" alt=\"\">\n            </p>\n          </div>\n\n        </div>\n\n      </div>\n    </section> -->\n    <!-- #testimonials -->\n\n    <!--==========================\n      Team Section\n    ============================-->\n    <!-- <section id=\"team\">\n      <div class=\"container\">\n        <div class=\"section-header wow fadeInUp\">\n          <h3>Team</h3>\n          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>\n        </div>\n\n        <div class=\"row\">\n\n          <div class=\"col-lg-3 col-md-6 wow fadeInUp\">\n            <div class=\"member\">\n              <img src=\"assets/img/team-1.jpg\" class=\"img-fluid\" alt=\"\">\n              <div class=\"member-info\">\n                <div class=\"member-info-content\">\n                  <h4>Walter White</h4>\n                  <span>Chief Executive Officer</span>\n                  <div class=\"social\">\n                    <a href=\"\"><i class=\"fa fa-twitter\"></i></a>\n                    <a href=\"\"><i class=\"fa fa-facebook\"></i></a>\n                    <a href=\"\"><i class=\"fa fa-google-plus\"></i></a>\n                    <a href=\"\"><i class=\"fa fa-linkedin\"></i></a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-lg-3 col-md-6 wow fadeInUp\" data-wow-delay=\"0.1s\">\n            <div class=\"member\">\n              <img src=\"assets/img/team-2.jpg\" class=\"img-fluid\" alt=\"\">\n              <div class=\"member-info\">\n                <div class=\"member-info-content\">\n                  <h4>Sarah Jhonson</h4>\n                  <span>Product Manager</span>\n                  <div class=\"social\">\n                    <a href=\"\"><i class=\"fa fa-twitter\"></i></a>\n                    <a href=\"\"><i class=\"fa fa-facebook\"></i></a>\n                    <a href=\"\"><i class=\"fa fa-google-plus\"></i></a>\n                    <a href=\"\"><i class=\"fa fa-linkedin\"></i></a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-lg-3 col-md-6 wow fadeInUp\" data-wow-delay=\"0.2s\">\n            <div class=\"member\">\n              <img src=\"assets/img/team-3.jpg\" class=\"img-fluid\" alt=\"\">\n              <div class=\"member-info\">\n                <div class=\"member-info-content\">\n                  <h4>William Anderson</h4>\n                  <span>CTO</span>\n                  <div class=\"social\">\n                    <a href=\"\"><i class=\"fa fa-twitter\"></i></a>\n                    <a href=\"\"><i class=\"fa fa-facebook\"></i></a>\n                    <a href=\"\"><i class=\"fa fa-google-plus\"></i></a>\n                    <a href=\"\"><i class=\"fa fa-linkedin\"></i></a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-lg-3 col-md-6 wow fadeInUp\" data-wow-delay=\"0.3s\">\n            <div class=\"member\">\n              <img src=\"assets/img/team-4.jpg\" class=\"img-fluid\" alt=\"\">\n              <div class=\"member-info\">\n                <div class=\"member-info-content\">\n                  <h4>Amanda Jepson</h4>\n                  <span>Accountant</span>\n                  <div class=\"social\">\n                    <a href=\"\"><i class=\"fa fa-twitter\"></i></a>\n                    <a href=\"\"><i class=\"fa fa-facebook\"></i></a>\n                    <a href=\"\"><i class=\"fa fa-google-plus\"></i></a>\n                    <a href=\"\"><i class=\"fa fa-linkedin\"></i></a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n    </section> -->\n    <!-- #team -->\n\n    <!--==========================\n      Contact Section\n    ============================-->\n    <!-- <section id=\"contact\" class=\"section-bg wow fadeInUp\" style=\"background-color: #e8e7e7\">\n      <div class=\"container\">\n\n        <div class=\"section-header\">\n          <h3>צור קשר!</h3>\n          <p>צור איתנו קשר באחת מהדרכים הבאות ונשמח לתת לך שירות בהקדם.</p>\n        </div>\n\n        <div class=\"row contact-info\">\n\n          <div class=\"col-md-4\">\n            <div class=\"contact-address\">\n              <i class=\"ion-ios-location-outline\"></i>\n              <h3>כתובת</h3>\n              <address>רחוב אבא הלל סילבר 7 רמת גן. </address>\n            </div>\n          </div>\n\n          <div class=\"col-md-4\">\n            <div class=\"contact-phone\">\n              <i class=\"ion-ios-telephone-outline\"></i>\n              <h3>מספר טלפון</h3>\n              <p><a href=\"tel:03-5545458\">03-5545458</a></p>\n            </div>\n          </div>\n\n          <div class=\"col-md-4\">\n            <div class=\"contact-email\">\n              <i class=\"ion-ios-email-outline\"></i>\n              <h3>דואר אלקטרוני</h3>\n              <p><a href=\"mailto:avialboo@gmail.com\">avialboo@gmail.com</a></p>\n            </div>\n          </div>\n\n        </div>\n\n    \n\n      </div>\n    </section> -->\n    <app-contact-us></app-contact-us>\n    <!-- #contact -->\n\n  </main>\n\n\n\n"

/***/ }),

/***/ "./src/app/page-template/home/home.component.ts":
/*!******************************************************!*\
  !*** ./src/app/page-template/home/home.component.ts ***!
  \******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        //  $( "head" ).append( "<script src='assets/lib/jquery/jquery.min.js'></script>" );
        //  $( "head" ).append( "<script src='assets/lib/jquery/jquery-migrate.min.js'></script>" );
        //  $( "head" ).append( "<script src='assets/lib/bootstrap/js/bootstrap.bundle.min.js'></script>" );
        //  $( "head" ).append( "<script src='assets/lib/easing/easing.min.js'></script>" );
        //  $( "head" ).append( "<script src='assets/lib/superfish/hoverIntent.js'></script>" );
        //  $( "head" ).append( "<script src='assets/lib/superfish/superfish.min.js'></script>" );
        //  $( "head" ).append( "<script src='assets/lib/wow/wow.min.js'></script>" );
        //  $( "head" ).append( "<script src='assets/lib/waypoints/waypoints.min.js'></script>" );
        //  $( "head" ).append( "<script src='assets/lib/counterup/counterup.min.js'></script>" );
        //  $( "head" ).append( " <script src='assets/lib/owlcarousel/owl.carousel.min.js'></script> " );
        //  $( "head" ).append( "<script src='assets/lib/isotope/isotope.pkgd.min.js'></script>" );
        //  $( "head" ).append( "<script src='assets/lib/lightbox/js/lightbox.min.js'></script>" );
        //  $( "head" ).append( "<script src='assets/lib/touchSwipe/jquery.touchSwipe.min.js'></script>" );
        //  $( "head" ).append( "<script src='assets/contactform/contactform.js'></script>" );
        $("head").append("<script src='assets/js/main.js'></script>");
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/page-template/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/page-template/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/page-template/maps/maps.component.css":
/*!*******************************************************!*\
  !*** ./src/app/page-template/maps/maps.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map{\r\n    width: 50%;\r\n    height:400px;    \r\n}\r\n.container-info{\r\n    width: 50%;\r\n}\r\n.btn-success{\r\nwidth: 70%; height: 50px; font-size: 30px;\r\n}\r\n.row{\r\n    direction: rtl !important;\r\n    text-align: right;\r\n    \r\n}\r\n@media(max-width:676px)\r\n{\r\n    .map{\r\n    width: 100%;\r\n  \r\n    }\r\n.container-info{\r\n    width: 100%;\r\n}\r\n.btn-success{\r\n  width: 100%;\r\n  margin-bottom: 30px;\r\n}\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS10ZW1wbGF0ZS9tYXBzL21hcHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtBQUNBLFVBQVUsRUFBRSxZQUFZLEVBQUUsZUFBZTtBQUN6QztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjs7QUFFckI7QUFFQTs7SUFFSTtJQUNBLFdBQVc7O0lBRVg7QUFDSjtJQUNJLFdBQVc7QUFDZjtBQUNBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjtBQUNBIiwiZmlsZSI6InNyYy9hcHAvcGFnZS10ZW1wbGF0ZS9tYXBzL21hcHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OjQwMHB4OyAgICBcclxufVxyXG4uY29udGFpbmVyLWluZm97XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcbi5idG4tc3VjY2Vzc3tcclxud2lkdGg6IDcwJTsgaGVpZ2h0OiA1MHB4OyBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi5yb3d7XHJcbiAgICBkaXJlY3Rpb246IHJ0bCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo2NzZweClcclxue1xyXG4gICAgLm1hcHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIFxyXG4gICAgfVxyXG4uY29udGFpbmVyLWluZm97XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uYnRuLXN1Y2Nlc3N7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/page-template/maps/maps.component.html":
/*!********************************************************!*\
  !*** ./src/app/page-template/maps/maps.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section id=\"services\">\n      <div class=\"container\">\n\n        <header class=\"section-header wow fadeInUp\">\n           <h3>דרכי הגעה</h3> \n        </header>\n\n        <div class=\"row\">\n        <div class=\"container-info\" >\n          <div class=\"col-lg-10 col-md-10 box wow bounceInUp\" data-wow-duration=\"1.4s\">\n            <div class=\"icon\">\n              <img src=\"assets/img/train.png\" style=\"width: 40px; height: 40px\" alt=\"\">\n              <!-- <i class=\"ion-ios-analytics-outline\"></i> -->\n            </div>\n            <h4 class=\"title\"><a href=\"https://www.rail.co.il/\">רכבת</a></h4>\n            <p class=\"description\">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>\n          </div>\n          <div class=\"col-lg-10 col-md-10 box wow bounceInUp\" data-wow-duration=\"1.4s\">\n            <div class=\"icon\"> \n               <img src=\"assets/img/car.png\" style=\"width: 40px; height: 40px\" alt=\"\">\n              </div>\n            <h4 class=\"title\"><a >רכב</a></h4>\n            <p class=\"description\">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>\n          </div>\n           <div class=\"col-lg-10 col-md-10 box wow bounceInUp\" data-wow-duration=\"1.4s\">\n            <div class=\"icon\"> \n               <img src=\"assets/img/bus.png\" style=\"width: 50px; height: 60px\" alt=\"\">\n              </div>\n            <h4 class=\"title\"><a href=\"https://www.bus.co.il/\">אוטובוס</a></h4>\n            <p class=\"description\">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>\n          </div>\n           <a href=\"//waze.com/ul?ll=32.084628,34.803025&navigate=yes\" class=\"btn btn-lg btn-success wow bounceInUp\" data-wow-duration=\"1.4s\"><span class=\"glyphicon glyphicon-road\" style=\"left: 15%;\"></span> נווט כעת <span class=\"glyphicon glyphicon-road\" style=\"right: 15%;\" ></span></a>\n         </div>\n           <div #gmap  class=\"map wow bounceInUp\"  data-wow-duration=\"1.4s\"></div>\n        </div>\n\n      </div>\n    </section> "

/***/ }),

/***/ "./src/app/page-template/maps/maps.component.ts":
/*!******************************************************!*\
  !*** ./src/app/page-template/maps/maps.component.ts ***!
  \******************************************************/
/*! exports provided: MapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsComponent", function() { return MapsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/// <reference types="@types/googlemaps" />


var MapsComponent = /** @class */ (function () {
    function MapsComponent() {
    }
    MapsComponent.prototype.ngOnInit = function () {
        var mapProp = {
            center: new google.maps.LatLng(32.084628, 34.803025),
            zoom: 18,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        backToTop();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gmap'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MapsComponent.prototype, "gmapElement", void 0);
    MapsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-maps',
            template: __webpack_require__(/*! ./maps.component.html */ "./src/app/page-template/maps/maps.component.html"),
            styles: [__webpack_require__(/*! ./maps.component.css */ "./src/app/page-template/maps/maps.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MapsComponent);
    return MapsComponent;
}());



/***/ }),

/***/ "./src/app/page-template/practices/practices.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/page-template/practices/practices.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-fluid {\r\n    height: 250px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS10ZW1wbGF0ZS9wcmFjdGljZXMvcHJhY3RpY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcGFnZS10ZW1wbGF0ZS9wcmFjdGljZXMvcHJhY3RpY2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWZsdWlkIHtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page-template/practices/practices.component.html":
/*!******************************************************************!*\
  !*** ./src/app/page-template/practices/practices.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <br> <br>\n<section id=\"about\">\n      <div class=\"container\">\n\n        <header class=\"section-header\">\n           <h3>תחומי עיסוק</h3> \n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n        </header>\n\n        <div class=\"row about-cols\">\n\n          <div class=\"col-md-4 wow fadeInUp\" routerLink=\"/requerdes\">\n            <div class=\"about-col\">\n              <div class=\"img\">\n                <img src=\"assets/img/way-ac.jpg\" alt=\"\" class=\"img-fluid\">\n                <div class=\"icon\"><i class=\"ion-ios-speedometer-outline\"></i></div>\n              </div>\n              <h2 class=\"title\"><a>תאונות דרכים</a></h2>\n              <p>\n                Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n              </p>\n            </div>\n          </div>\n\n          <div class=\"col-md-4 wow fadeInUp\" data-wow-delay=\"0.1s\">\n            <div class=\"about-col\">\n              <div class=\"img\">\n                <img src=\"assets/img/work-ac.jpg\" alt=\"\" class=\"img-fluid\">\n                <div class=\"icon\"><i class=\"ion-ios-list-outline\"></i></div>\n              </div>\n              <h2 class=\"title\"><a >תאונות עבודה</a></h2>\n              <p>\n                Sed ut perspiciatis unde omnis iste natus error sit voluptatem  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\n              </p>\n            </div>\n          </div>\n\n          <div class=\"col-md-4 wow fadeInUp\" data-wow-delay=\"0.2s\">\n            <div class=\"about-col\">\n              <div class=\"img\">\n                <img src=\"assets/img/leomi.jpg\" alt=\"\" class=\"img-fluid\">\n                <div class=\"icon\"><i class=\"ion-ios-eye-outline\"></i></div>\n              </div>\n              <h2 class=\"title\"><a >ביטוח לאומי</a></h2>\n              <p>\n                Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.\n              </p>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n    </section>"

/***/ }),

/***/ "./src/app/page-template/practices/practices.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/page-template/practices/practices.component.ts ***!
  \****************************************************************/
/*! exports provided: PracticesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PracticesComponent", function() { return PracticesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PracticesComponent = /** @class */ (function () {
    function PracticesComponent() {
    }
    PracticesComponent.prototype.ngOnInit = function () {
    };
    PracticesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-practices',
            template: __webpack_require__(/*! ./practices.component.html */ "./src/app/page-template/practices/practices.component.html"),
            styles: [__webpack_require__(/*! ./practices.component.css */ "./src/app/page-template/practices/practices.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PracticesComponent);
    return PracticesComponent;
}());



/***/ }),

/***/ "./src/app/page-template/requerdes/requerdes.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/page-template/requerdes/requerdes.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "figure{\r\n    text-align: right\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS10ZW1wbGF0ZS9yZXF1ZXJkZXMvcmVxdWVyZGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZS10ZW1wbGF0ZS9yZXF1ZXJkZXMvcmVxdWVyZGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmaWd1cmV7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/page-template/requerdes/requerdes.component.html":
/*!******************************************************************!*\
  !*** ./src/app/page-template/requerdes/requerdes.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br>  \n<section id=\"services\">\n      <div class=\"container\">\n\n        <header class=\"section-header wow fadeInUp\">\n           <h3>תאונות דרכים</h3> \n        </header>\n\n        <div class=\"row\">\n\t<figure>\n\t\t\t\t\t\t<div class=\"aio-wrap\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"et_pb_aio_container\" data-typing-loop=true>\n\t\t\t\t\t\t\t\t<h3 class=\"fadeIn animated fancyline fancyline_after fancyline_text_center\">תביעות נזיקין - עוולת הרשלנות </h3>\n\t\t\t\t\t\t\t\t<div class=\"\">\n<p style=\"text-align: justify;\">בפרק זה נסקור על קצה המזלג חלק מפקודת הנזיקין תוך התמקדות בעוולות המרכזיות ובמיוחד בעוולת הרשלנות. נבהיר מהי רשלנות ומהי חובת זהירות מושגית וחובת זהירות קונקרטית, מהו נזק וכיצד מוכיחים אותו, מהו קשר סיבתי  משפטי וקשר סיבתי עובדתי. נפרט מהי הפרת חובה חקוקה ומהו אשם תורם. עוד נבהיר את דרך חישוב הפיצוי הכספי על ראשי הנזק השונים ואת נושא ההתיישנות. מטרת מאמר זה אינה ללמד את פקודת הנזיקין אלא רק להציג טעימה חלקית ממנה על מנת שהנפגע יבין באופן כללי וראשוני את הנושא. מאמר זה אינו ממצה את הפקודה ואינו בר להחליף ייעוץ מקצועי פרטני ומעמיק לגופו של עניין בכל מקרה ומקרה.</p>\n<p style=\"text-align: justify;\">פקודת הנזיקין &#8211; במסגרתה נקבעה עוולת הרשלנות היא המרכזית בדיני הנזיקין ובה מפורטות העוולות השונות בגינן ניתן לתבוע על נזק שנגרם לפלוני כתוצאה ממעשה ו/או מחדל של אחר. נפרט, על קצה המזלג, מספר עוולות מרכזיות.</p>\n<p style=\"text-align: justify;\"><span style=\"color: #ceb476;\"><strong><u>עוולת הרשלנות</u></strong></span></p>\n<p style=\"text-align: justify;\">עוולת הרשלנות הינה העוולה המרכזית בדיני הנזיקין לפיה אדם שנפגע וסבל נזק (הניזוק), יכול לתבוע את מי שגרם את הנזק (המזיק). על מנת לקבל פיצוי בגין עוולה זו הניזוק נדרש להוכיח את נזקו על ידי שורה של קריטריונים.</p>\n<p style=\"text-align: justify;\">סעיפים 35 ו-36 בפקודת הנזיקין מגדירים את יסודות העוולה: חובת זהירות, התרשלות, נזק וקשר סיבתי.</p>\n<p style=\"text-align: justify;\"><span style=\"color: #ceb476;\"><strong><u>סעיף 35</u></strong></span></p>\n<p style=\"text-align: justify;\">&#8220;עשה אדם מעשה שאדם סביר ונבון לא היה עושה באותן נסיבות, או לא עשה מעשה שאדם סביר ונבון היה עושה באותן נסיבות, או שבמשלח יד פלוני לא השתמש במיומנות, או לא נקט מידת זהירות, שאדם סביר ונבון וכשיר לפעול באותו משלח יד היה משתמש או נוקט באותן נסיבות &#8211; הרי זו התרשלות; ואם התרשל כאמור ביחס לאדם אחר, שלגביו יש לו באותן נסיבות חובה שלא לנהוג כפי שנהג, הרי זו רשלנות, והגורם ברשלנותו נזק לזולתו עושה עוולה.&#8221;</p>\n<p style=\"text-align: justify;\"><span style=\"color: #ceb476;\"><strong><u>סעיף 36</u></strong></span></p>\n<p style=\"text-align: justify;\">&#8220;החובה האמורה בסעיף 35 מוטלת כלפי כל אדם וכלפי בעל כל נכס, כל אימת שאדם סביר צריך היה באותן נסיבות לראות מראש שהם עלולים במהלכם הרגיל של דברים להיפגע ממעשה או ממחדל המפורשים באותו סעיף.&#8221;</p>\n<p style=\"text-align: justify;\"><span style=\"color: #ceb476;\"><strong><u>חובת הזהירות</u></strong></span></p>\n<p style=\"text-align: justify;\">לא יחשב מזיק רשלן אם אינו חייב בחובת זהירות כלפי הניזוק. חובת הזהירות מורכבת מחובת זהירות קונקרטית וחובת זהירות מושגית</p>\n<p style=\"text-align: justify;\"><span style=\"text-decoration: underline;\"><span style=\"color: #ceb476; text-decoration: underline;\"><strong>חובת הזהירות המושגית</strong></span></span></p>\n<p style=\"text-align: justify;\">משמעה חובת זהירות עקרונית &#8211; כלומר, האם בין סוג המזיק לבין סוג הניזוק, קיימים יחסים המצדיקים את קיומה של חובת הזהירות. למשל &#8211; חובת מעביד לעובדו, חובת רופא לחולה וכד&#8217;.</p>\n<p style=\"text-align: justify;\">במידה וקיימת חובת הזהירות המושגית תיבדק גם <strong>חובת הזהירות הקונקרטית</strong> &#8211; כלומר, חובת הזהירות הספציפית &#8211; האם במצב העניינים הספציפי בין המזיק לניזוק בענייננו מתקיימת חובת הזהירות המושגית שהוגדרה. דרישה זו היא מצטברת.</p>\n<p style=\"text-align: justify;\">חובת הזהירות נקבעת על פי מבחן הצפיות &#8211; האם המזיק היה צריך לצפות את האפשרות של התרחשות הנזק.</p>\n<p style=\"text-align: justify;\"><span style=\"color: #ceb476;\"><strong><u>התרשלות </u></strong></span></p>\n<p style=\"text-align: justify;\">אדם יחשב רשלן אם הפר סטנדרט התנהגות המקובל בחברה, אותו בוחנים לפי מספר תנאים ומבחנים. המבחן המרכזי לפיו בוחן בית המשפט את רמת הזהירות הנדרשת הינו מבחן ה&#8221;אדם הסביר&#8221;- המבחן המופיע בפקודת הנזיקין- לפיו אם המזיק נהג בצורה ש&#8221;האדם הסביר&#8221; לא היה נוהג בה, בין אם במעשה ובין אם במחדל, הוא נחשב כמי שהתרשל. האדם הסביר הוא דמות אובייקטיבית המעגנת בתוכה את התפישה החברתית לגבי מהי ההתנהגות הרצויה בנסיבות הספציפיות של המקרה.</p>\n<p style=\"text-align: justify;\"><span style=\"color: #ceb476;\"><strong><u>שאלת הנזק</u></strong></span></p>\n<p style=\"text-align: justify;\">סעיף 2 לפקודת הנזיקין מגדיר מהו נזק:</p>\n<p style=\"text-align: justify;\"><strong>&#8220;נזק&#8221;</strong> – אבדן חיים, אבדן נכס, נוחות, רווחה גופנית או שם-טוב, או חיסור מהם, וכל אבדן או חיסור כיוצאים באלה&#8221;.</p>\n<p style=\"text-align: justify;\">בתביעות שעילתן רשלנות על הנפגע לצרף לכתב תביעתו &#8211; כתנאי להגשתה &#8211; חוות דעת רפואיות בתחומים הרפואיים השונים בהם נגרם לו נזק (כגון אורתופדיה, נוירולוגיה, פסיכיאטריה וכד&#8217;) וכן חוות דעת הדנות בשאלת האחריות כגון חוות דעת מומחה בטיחות הקובעות כי המזיק התרשל וגרם בהתרשלותו לנזק.</p>\n<p style=\"text-align: justify;\">חוות הדעת הרפואיות אמורות לשקף את נכותו הרפואית של התובע בעקבות אירוע הנזק ולתת לבית המשפט ולצדדים את הכלים ואת היכולת להעריך בין היתר את מגבלותיו, צרכיו, השלכות אירוע הנזק על הניזוק, על כושרו לעבוד ולהשתכר, וכפועל יוצא מכל אלה אמורות להעמיד בפני בית המשפט את התשתית על בסיסה יוכל לפסוק את נזקיו (בכסף) של הניזוק, בהתאם לנתוניו האישיים (ובין היתר, גיל, עיסוק, מצב משפחתי, פוטנציאל השתכרות ועוד).</p>\n<p style=\"text-align: justify;\">גם המזיק רשאי לבדוק את הניזוק ולהגיש חוות דעת נוגדות בתחומים השונים מטעמו. לעיתים, לאחר קבלת חוות הדעת השונות מטעם הצדדים, ממנה בית המשפט מומחים מטעמו אשר אמורים להכריע בין המומחים השונים.</p>\n<p style=\"text-align: justify;\"><span style=\"color: #ceb476;\"><strong><u>קשר סיבתי</u></strong></span></p>\n<p style=\"text-align: justify;\">במידה ואכן נגרם נזק יש להוכיח כי אותו הנזק נגרם בשל התרשלותו של המזיק. כלומר, האם הפגיעה או הנזק היו נגרמים<strong> אלמלא</strong> התנהגותו של המזיק? על התשובה להיות שלילית כדי לקיים את מבחן הקשר הסיבתי.</p>\n<p style=\"text-align: justify;\">הקשר הסיבתי מתחלק לקשר סיבתי עובדתי וקשר סיבתי משפטי אשר צריכים להתקיים על מנת להוכיח את הקשר בין התרשלות המזיק לבין הנזק שנגרם לניזוק.</p>\n<p style=\"text-align: justify;\">הערה &#8211; התביעה יכולה להיות מוגשת גם במקרים בהם התאונה מהווה תאונת עבודה וגם במקרים שלא כגון כשהתאונה היא תאונת דרכים במידה ואין ביטוח חובה רלוונטי תקף לתבוע. כאשר הפגיעה נגרמה עקב תאונת עבודה, לאחר קבלת הפיצוי מהמוסד לביטוח לאומי ניתן לתבוע את המעסיק או כל גורם אחר שהתרשל, במטרה לקבל פיצוי נוסף עקב הפגיעה, זאת במידה והפיצוי שהתקבל מהמוסד לביטוח לאומי לא כיסה את נזקי הנפגע במלואם.</p>\n<p style=\"text-align: justify;\"><span style=\"color: #ceb476;\"><strong><u>הפרת חובה חקוקה</u></strong></span></p>\n<p style=\"text-align: justify;\">קיימים חוקים שונים אשר קובעים חובות חוקיות שונות אשר בהפרתן עלול להיגרם נזק.</p>\n<p style=\"text-align: justify;\">מכוח עוולה זו בודק הניזוק האם פלוני הפר חובה שנחקקה והחיקוק נועד לטובתו, או להגנתו של הניזוק. במידה ונמצא שהמזיק הפר חובה חקוקה כלשון הסעיף בפקודת הנזיקין [נוסח חדש] פונים להוכחת הנזק שנגרם כתוצאה מהפרת החובה, כאמור לעיל.</p>\n<p style=\"text-align: justify;\">סעיף 63 לפקודת הנזיקין קובע כי &#8220;מפר חובה חקוקה הוא מי שאינו מקיים חובה המוטלת עליו על פי כל חיקוק &#8211; למעט פקודה זו &#8211; והחיקוק, לפי פירושו הנכון, נועד לטובתו או להגנתו של אדם אחר, וההפרה גרמה לאותו אדם נזק מסוגו או מטבעו של הנזק שאליו נתכוון החיקוק; אולם אין האדם האחר זכאי בשל ההפרה לתרופה המפורשת בפקודה זו, אם החיקוק, לפי פירושו הנכון, התכוון להוציא תרופה זו&#8230;&#8221;.</p>\n<p style=\"text-align: justify;\">לדוגמא &#8211;  פקודת הבטיחות בעבודה- הוראות פקודת הבטיחות בעבודה מטילות על המעביד חובה לוודא כי שיטת העבודה וסביבת העבודה בטוחות. הפרה של פקודה זו למשל בשל אי גידור לבטח של מכונה מהווה הפרה של חובה חקוקה. באופן זה נגר אשר נפגע ממסור חשמלי שלא היה מגודר במתקן בטיחות יוכל לטעון להפרת חובה חקוקה של הוראות פקודת הבטיחות בעבודה  (כמובן שיתכן מצב בו אי גידור המכונה לבטח מקים גם את עילת הרשלנות).</p>\n<p style=\"text-align: justify;\"><span style=\"color: #ceb476;\"><strong><u>&#8220;אשם תורם&#8221;</u></strong></span></p>\n<p style=\"text-align: justify;\">טענה זו היא אחת מטענות ההגנה של המזיק ומשמעותה כי הניזוק נושא במידה מסוימת של  אחריות לנזקו. סעיף 68 לפקודת הנזיקין קובע כי: &#8220;סבל אדם נזק, מקצתו עקב אשמו שלו ומקצתו עקב אשמו של אחר, לא תיכשל תביעת פיצויים בעד הנזק מחמת אשמו של הניזוק, אלא שהפיצויים שייפרעו יופחתו בשיעור שבית המשפט ימצא לנכון ולצודק תוך התחשבות במידת אחריותו של התובע לנזק..&#8221;.</p>\n<p style=\"text-align: justify;\">כאשר הניזוק התרשל אף הוא, יופחתו פיצוייו בהתחשב באשם התורם שניתן לייחס לו. למשל, אשם תורם על עובד יוטל כאשר המעביד יוכיח כי העובד הפעיל שיקול דעת עצמאי ויצר את הסיכון שהוביל לנזק או כאשר התעלם מסיכון ברור.</p>\n<p style=\"text-align: justify;\">המפתח לפיצוי הינו נוסחה המורכבת משני רכיבים: שאלת האחריות X שאלת הנזק. לדוגמא: נפגע אשר הוחלט כי נזקו הוא 100 ₪ ורמת האשם התורם הוא 25% יקבל פיצוי של 75 ₪.</p>\n<p style=\"text-align: justify;\"><span style=\"color: #ceb476;\"><strong><u>הפיצוי הכספי</u></strong></span></p>\n<p style=\"text-align: justify;\">מטרת העל &#8211; החולשת ומרחפת מעל דיני הנזיקין &#8211; היא השבת למצב לקדמותו, דהיינו להעמיד את הנפגע (ובין היתר ברמה הכלכלית) במקום בו היה ערב האירוע הנזיקי (לפני הפגיעה).</p>\n<p style=\"text-align: justify;\">הפיצוי לנפגע מחולק ל&#8221;ראשי נזק&#8221; שונים בגינם ניתן פיצוי בחוק. בין ראשי הנזק ניתן למנות כאב וסבל, הפסדי שכר ואבדן פנסיה, עזרה או שווי עזרה, הוצאות עבור נסיעות (לרבות לטיפולים רפואיים) , הוצאות רפואיות, והוצאות אחרות שנאלץ ו/או ייאלץ הנפגע להוציא בעקבות התאונה ולצורך העמדתו חזרה על הרגליים (במקרים מורכבים אף ניתן למנות התאמת דיור, הוצאות עזרים רפואיים וכדומה).</p>\n<p style=\"text-align: justify;\">במקרים מורכבים, יש לעיתים צורך בחוות דעת נוספות לצד חוות הדעת הרפואיות.  כמו למשל חוות דעת המתייחסת לדרך שיקומו של הנפגע (חוו&#8221;ד מומחה רפואי בתחום השיקום), חוו&#8221;ד לעניין אפשרויות התעסוקה העומדות בפניו על רקע הפגיעה (חוו&#8221;ד מומחה תעסוקתי) חוו&#8221;ד מקצועיות המתייחסות בין היתר לעלויות עזרים רפואיים, לעלויות החזקת רכבים מיוחדים (לדוגמא אדם קטוע יד או רגל הזקוק להתאמות ברכבו או אדם היושב בכסא גלגלים וצריך רכב מיוחד) או לעלויות התאמת דיור.</p>\n<p style=\"text-align: justify;\"><span style=\"color: #ceb476;\"><strong><u>התיישנות</u></strong></span></p>\n<p style=\"text-align: justify;\">תביעת נזיקין מתיישנת <strong><u>כעבור 7 שנים</u></strong> מהיום בו נולדה עילת התביעה. במידה והנזק נגרם על ידי מעשה או מחדל, מתחיל מירוץ ההתיישנות ביום שבו אירע הנזק. במידה והנזק התגלה לאחר זמן מה מיום המעשה או המחדל, מירוץ ההתיישנות יחל ביום שבו נתגלה הנזק בפועל, ובמקרה זה תתיישן התביעה אם לא הוגשה תוך <strong><u>עשר שנים</u></strong> מיום אירוע הנזק.</p>\n<p style=\"text-align: justify;\">*בעניין קטין מתחיל מירוץ ההתיישנות עם הגיעו לגיל 18.</p>\n<p style=\"text-align: justify;\">*במקרה שהניזוק לוקה בשכלו מתחיל מרוץ ההתיישנות ביום שפסק הליקוי או ביום שמונה לאותו אדם אפוטרופוס.</p>\n<p style=\"text-align: justify;\"><span style=\"color: #ceb476;\"><strong><u>להסרת ספק יובהר כי מרוץ ההתיישנות מופסק רק על ידי הגשת תביעה לבית המשפט !!!</u></strong></span></p>\n</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</figure>\n        \n        </div>\n\n      </div>\n    </section> "

/***/ }),

/***/ "./src/app/page-template/requerdes/requerdes.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/page-template/requerdes/requerdes.component.ts ***!
  \****************************************************************/
/*! exports provided: RequerdesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequerdesComponent", function() { return RequerdesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RequerdesComponent = /** @class */ (function () {
    function RequerdesComponent() {
    }
    RequerdesComponent.prototype.ngOnInit = function () {
        backToTop();
    };
    RequerdesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-requerdes',
            template: __webpack_require__(/*! ./requerdes.component.html */ "./src/app/page-template/requerdes/requerdes.component.html"),
            styles: [__webpack_require__(/*! ./requerdes.component.css */ "./src/app/page-template/requerdes/requerdes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RequerdesComponent);
    return RequerdesComponent;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





// ng build --env=prod
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.BASE_URL = 'http://localhost:50733/api/Email/'; //   'https://testapi.mast.co.il';   
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
    }
    ApiService.prototype.sendData = function (params) {
        return this.http.post(this.BASE_URL, params, { headers: this.header }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ApiService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(errMsg);
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\moshe\personal\albo\albo-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map