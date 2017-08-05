webpackJsonp([9],{

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadingPageModule", function() { return LeadingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__leading__ = __webpack_require__(267);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LeadingPageModule = (function () {
    function LeadingPageModule() {
    }
    return LeadingPageModule;
}());
LeadingPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__leading__["a" /* LeadingPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__leading__["a" /* LeadingPage */]),
        ],
    })
], LeadingPageModule);

//# sourceMappingURL=leading.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeadingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeadingPage = (function () {
    function LeadingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LeadingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LeadingPage');
    };
    LeadingPage.prototype.Login = function () {
        this.navCtrl.push("LoginPage");
    };
    return LeadingPage;
}());
LeadingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-leading',template:/*ion-inline-start:"/ionic projects/sharePay/src/pages/leading/leading.html"*/'<ion-content padding class="leading-page">\n   <ion-grid class="my-grid">\n     <ion-row class="logo">\n       <ion-col col-6 offset-3>\n         <img src="/assets/img/Eb3atly.png">\n       </ion-col>\n     </ion-row>\n\n     <ion-row class="my-slider">\n       <ion-col>\n\n          <ion-slides pager>\n              <ion-slide>\n                <!-- <img [src]="slide.image" class="slide-image"/> -->\n                <!-- <h2 class="slide-title" [innerHTML]="slide.title"></h2> -->\n                <p>is simply dummy text of the printing and typesetting industry. Lorem</p>\n              </ion-slide>\n\n              <ion-slide>\n                <!-- <img [src]="slide.image" class="slide-image"/> -->\n                <!-- <h2 class="slide-title" [innerHTML]="slide.title"></h2> -->\n                <p>is simply dummy text of the printing and typesetting industry. Lorem</p>\n              </ion-slide>\n\n          </ion-slides>\n\n       </ion-col>\n     </ion-row>\n\n   <div class="btns">\n      <ion-row>\n       <ion-col  offset-2 class="fb-col">\n          <button class="fb-button" round ion-button icon-start>\n            <ion-icon name="logo-facebook"></ion-icon>\n            Continue With Facebook\n          </button>\n       </ion-col>\n     </ion-row>\n\n     <ion-row cl>\n       <ion-col  offset-2 class="account-col">\n          <button color="light" class="account-btn" ion-button round  ion-button >\n            Craete account\n          </button>\n       </ion-col>\n     </ion-row>\n   </div>\n     \n     <ion-row>\n        <ion-col offset-3>\n          <div class="have-account">Have an account ? <span (click)="Login()" tapple>Login</span></div>\n        </ion-col>\n     </ion-row>\n   </ion-grid>\n</ion-content>'/*ion-inline-end:"/ionic projects/sharePay/src/pages/leading/leading.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], LeadingPage);

//# sourceMappingURL=leading.js.map

/***/ })

});
//# sourceMappingURL=9.js.map