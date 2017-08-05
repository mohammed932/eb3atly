webpackJsonp([10],{

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(266);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.data = [];
        for (var i = 0; i < 10; i++) {
            var mydata = {
                fname: 'arya',
                mname: 'jone',
                lname: 'paid'
            };
            this.data.push(mydata);
        }
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/ionic projects/sharePay/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    \n\n     <ion-buttons start class="noti-btn">\n      <button ion-button icon-only>\n        <ion-icon name="notifications"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title><img src="/assets/img/Eb3atly.png" style="height: 3rem;"></ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="send"></ion-icon>\n      </button>\n    </ion-buttons> \n    \n\n\n\n\n  </ion-navbar>\n\n\n    <!-- <ion-toolbar  class="segment-toolbar">\n    <ion-segment [(ngModel)]="pet">\n      <ion-segment-button value="puppies">\n        <ion-icon name="people"></ion-icon> Friends\n      </ion-segment-button>\n      <ion-segment-button value="kittens">\n        <ion-icon name="person"></ion-icon> me\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar> -->\n\n\n\n\n</ion-header>\n\n<ion-content padding>\n  <!-- <ion-card  *ngFor="let item of data" class="my-card">\n\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            <ion-row>\n              <ion-col col-4>Arya</ion-col>\n              <ion-col col-4>jone</ion-col>\n              <ion-col col-4>paid</ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <div>for dinner</div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card> -->\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <img src="./assets/img/group_122.png">\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <img src="./assets/img/dsad.png">\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <img src="./assets/img/group_122asd.png">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/ionic projects/sharePay/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=10.js.map