(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./home/home.component.ts");



var routes = [
    { path: "", component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".home-panel{\n    vertical-align: center; \n    font-size: 20;\n    margin: 15;\n}\n\n.description-label{\n    margin-bottom: 15;\n}\n\n.button{\n    position: relative;\n\t  font-family: 'Nordica Plus', 'nordicaclassicltext';\n    font-size: 15;\n     background-color: transparent;\n    top: 0px;\n\tdisplay:flex;\n     cursor:pointer;\n    filter : hue-rotate(180deg);\n    animation-name: changeColor;\n animation: changeColor ease;\n    animation-iteration-count: infinite;\n    animation-duration: 4s;\n    animation-fill-mode: both;\n}\n.rotation{ animation-name: rotate; animation-duration: 2; } @keyframes rotate { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }\n@keyframes changeColor {\n    from { transform: rotate(360deg); } to { transform: rotate(0deg); }\n  0% {\n    background-color: rgb(146,213,142);\n  }\n  \n  50% {\n    background-color: rgb(133,184,222);\n  }\n  \n  100% {\n    background-color: rgb(146,213,142);\n  }\n}\n/*\n    File name: fa-regular-400.ttf\n    Font name: Font Awesome 5 Free\n*/\n.far {\n    font-family: \"Font Awesome 5 Free\", \"fa-regular-400\";\n    font-weight: 400;\n}\n\n/*\n    File name: fa-solid-900.ttf\n    Font name: Font Awesome 5 Free\n*/\n.fas {\n    font-family: \"Font Awesome 5 Free\", \"fa-solid-900\";\n    font-weight: 900;\n}\n.btn-img{\n\n    position: relative;\n    z-index: 2;\n\n}\n\n.view {\n    animation-name: example;\n    animation-duration: 1;\n    animation-timing-function: ease-in;\n    animation-fill-mode: forwards;\n}\n@keyframes example {\n    from { transform: translate(0, 0); }\n    to { transform: translate(0, 100); }\n}\n\n"

/***/ }),

/***/ "./home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<ActionBar class=\"action-bar\">\n    <AbsoluteLayout >\n        <Label left=\"0\" top=\"15\" text=\"Sombrero Seleccionador\" class=\"actionBarLabel\"></Label>\n        <Button data-chaffle=\"en\" left=\"270\" text=\"{{buttonText}}\" class=\"button rotation\"\n                (tap)=\"shuffle()\"></Button>\n\n    </AbsoluteLayout >\n</ActionBar>\n\n<GridLayout tkExampleTitle tkToggleNavButton>\n\n    <RadListView [items]=\"mjvers\" marginRight=\"-2\">\n\n        <ListViewGridLayout tkListViewLayout scrollDirection=\"Vertical\"\n            itemHeight=\"200\" spanCount=\"1\">\n        </ListViewGridLayout>\n\n        <ng-template tkListItemTemplate let-item=\"item\">\n\n            <GridLayout backgroundColor=\"White\">\n\n                <GridLayout >\n\n                    <android>\n                        <div *ngIf=\"!item.customImage\">\n                            <Image src=\"{{ item.imageSrc }}\"\n                                stretch=\"aspectFill\" height=\"180\">\n                            </Image>\n                        </div>\n                        <div *ngIf=\"item.customImage\">\n                            <Image [src]=\"item.customImage\"\n                                stretch=\"aspectFill\" height=\"180\">\n                            </Image>\n                        </div>\n                    </android>\n\n                    <GridLayout verticalAlignment=\"bottom\">\n\n                            <Image src=\"https://img.icons8.com/cotton/2x/name.png\"  class=\"btn-img\" (tap)=\"onTakePictureTap($event, item.id)\" class=\"masbn\" width=\"10%\" height=\"100%\" marginRight=\"10\"></Image>\n\n                        <StackLayout paddingTop=\"8\" paddingBottom=\"8\"\n                            paddingLeft=\"16\" paddingRight=\"16\">\n                            <Label text=\"{{ item.name }}\" class=\"name\">\n                            </Label>\n                            <Label text=\"{{ item.freeDay }}\"\n                                class=\"locationCountry\">\n                            </Label>\n                         \n\n                        </StackLayout>\n                    </GridLayout>\n                </GridLayout>\n            </GridLayout>\n        </ng-template>\n\n    </RadListView>\n</GridLayout>\n"

/***/ }),

/***/ "./home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-camera");
/* harmony import */ var nativescript_camera__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_camera__WEBPACK_IMPORTED_MODULE_1__);


var imageSource = __webpack_require__("../node_modules/@nativescript/core/image-source/image-source.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.buttonText = "Shuffle";
        this.processing = true;
        this.mjvers = [
            { id: 1, name: "Maria", imageSrc: "https://i.pinimg.com/originals/ff/dd/60/ffdd600a1670409279e2eb3cee414822.jpg", customImage: null, status: true, freeDay: null },
            { id: 2, name: "Daniel", imageSrc: "https://disenowebakus.net/imagenes/articulos/steve-jobs.jpg", customImage: null, status: true, freeDay: null },
            { id: 3, name: "Jhennyfer", imageSrc: "https://www.ecopetit.cat/wpic/mpic/8-85671_pikachu-wallpaper-hd-free-cute-pikachu-wallpapers-hd.jpg", customImage: null, status: true, freeDay: null },
            { id: 4, name: "Karol", imageSrc: "https://www.itl.cat/pngfile/big/200-2005581_panda-wallpaper-hd-hd-wallpapermonkey-panda-wallpapers-panda.jpg", customImage: null, status: true, freeDay: null },
            { id: 5, name: "Edwin", imageSrc: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX30007843.jpg", customImage: null, status: true, freeDay: null },
            { id: 6, name: "Cristian", imageSrc: "https://www.metalsucks.net/wp-content/uploads/2019/09/CUBLOTW-09_25_2019.jpg", customImage: null, status: true, freeDay: null },
            { id: 7, name: "Peter", imageSrc: "https://pulpfictioncine.com/download/multimedia.normal.9ed9100d0e1d93f1.6265727365726b2d5f6e6f726d616c2e6a7067.jpg", customImage: null, status: true, freeDay: null },
            { id: 7, name: "Catalina", imageSrc: "https://i.stack.imgur.com/2e2Sw.jpg", customImage: null, status: true, freeDay: null },
        ];
        this.days = [
            //{ day: "LUNES" },
            { day: "MARTES", },
            { day: "MIERCOLES", },
            { day: "JUEVES", },
        ];
        this.count = 1;
        this.saveToGallery = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.shuffle();
    };
    HomeComponent.prototype.onButtonTap = function () {
        console.log("Button was pressed");
    };
    HomeComponent.prototype.shuffle = function () {
        var currentIndex = this.mjvers.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = this.mjvers[currentIndex];
            this.mjvers[currentIndex] = this.mjvers[randomIndex];
            temporaryValue.freeDay = this.selectRandomDay();
            this.mjvers[randomIndex] = temporaryValue;
        }
        return this.mjvers;
    };
    HomeComponent.prototype.selectRandomDay = function () {
        var weekDay = this.days[Math.floor(Math.random() * this.days.length)];
        return weekDay.day;
    };
    HomeComponent.prototype.onTakePictureTap = function (args, id) {
        var _this = this;
        console.log(id);
        Object(nativescript_camera__WEBPACK_IMPORTED_MODULE_1__["requestPermissions"])().then(function () { return _this.capture(id); }, function () { return alert('permissions rejected'); });
    };
    HomeComponent.prototype.capture = function (id) {
        var _this = this;
        Object(nativescript_camera__WEBPACK_IMPORTED_MODULE_1__["takePicture"])({ width: 250, height: 300, keepAspectRatio: true, saveToGallery: this.saveToGallery })
            .then(function (imageAsset) {
            _this.cameraImage = imageAsset;
            _this.mjvers.find(function (user) { return user.id === id; }).customImage = imageAsset;
            imageAsset.getImageAsync(function (nativeImage) {
                var scale = 1;
                var height = 0;
                var width = 0;
                if (imageAsset.android) {
                    // get the current density of the screen (dpi) and divide it by the default one to get the scale
                    scale = nativeImage.getDensity() / imageAsset.android.util.DisplayMetrics.DENSITY_DEFAULT;
                    height = imageAsset.options.height;
                    width = imageAsset.options.width;
                }
                else {
                    scale = nativeImage.scale;
                    width = nativeImage.size.width * scale;
                    height = nativeImage.size.height * scale;
                }
                console.log("Displayed Size: " + width + "x" + height + " with scale " + scale);
                console.log("Image Size: " + width / scale + "x" + height / scale);
            });
        }, function (error) {
            console.log("Error: " + error);
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Home",
            template: __importDefault(__webpack_require__("./home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__("./home/home.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/common");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-ui-listview/angular");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nativescript-angular/forms");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./home/home.component.ts");






var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2__["NativeScriptUIListViewModule"],
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NativeScriptFormsModule"]
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"android":{"v8Flags":"--expose_gc","forceLog":true,"markingMode":"none"},"main":"main.js","name":"tns-template-blank-ng","version":"3.1.1"};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUU4QjtBQUV0QjtBQUVqRCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLDZEQUFhLEVBQUU7Q0FDekMsQ0FBQztBQU1GO0lBQUE7SUFBaUMsQ0FBQztJQUFyQixpQkFBaUI7UUFKN0IsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csaUJBQWlCLENBQUk7SUFBRCx3QkFBQztDQUFBO0FBQUo7Ozs7Ozs7O0FDZDlCLDhCQUE4Qiw2QkFBNkIscUJBQXFCLGlCQUFpQixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyxZQUFZLHlCQUF5Qix5REFBeUQsb0JBQW9CLHFDQUFxQyxlQUFlLGlCQUFpQixzQkFBc0Isa0NBQWtDLGtDQUFrQywrQkFBK0IsMENBQTBDLDZCQUE2QixnQ0FBZ0MsR0FBRyxZQUFZLHdCQUF3Qix1QkFBdUIsRUFBRSxvQkFBb0IsT0FBTywyQkFBMkIsRUFBRSxLQUFLLHlCQUF5QixFQUFFLEVBQUUsMEJBQTBCLFlBQVksMkJBQTJCLEVBQUUsS0FBSyx5QkFBeUIsRUFBRSxRQUFRLHlDQUF5QyxLQUFLLGFBQWEseUNBQXlDLEtBQUssY0FBYyx5Q0FBeUMsS0FB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QUFPLENBQUMsR0FBRyxDQUFDLHFCQUFtQixLQUFLLFNBQUksTUFBTSxvQkFBZSxLQUFPLENBQUMsQ0FBQztnQkFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBZSxLQUFLLEdBQUcsS0FBSyxTQUFJLE1BQU0sR0FBRyxLQUFPLENBQUMsQ0FBQztZQUNsRSxDQUFDLENBQUMsQ0FBQztRQUVQLENBQUMsRUFBRSxVQUFDLEtBQUs7WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUEvRlEsYUFBYTtRQU56QiwrREFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFFaEIsb0ZBQW9DOztTQUV2QyxDQUFDOztPQUNXLGFBQWEsQ0FrR3pCO0lBQUQsb0JBQUM7Q0FBQTtBQWxHeUI7Ozs7Ozs7OztBQ1oxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkQ7QUFDWTtBQUNTO0FBQ1g7QUFFWDtBQUNUO0FBZ0JqRDtJQUFBO0lBQTBCLENBQUM7SUFBZCxVQUFVO1FBZHRCLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsNkZBQTRCO2dCQUM1QixvRkFBd0I7Z0JBQ3hCLHNFQUFpQjtnQkFDakIsa0ZBQXVCO2FBQzFCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDZEQUFhO2FBQ2hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLDhEQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxVQUFVLENBQUk7SUFBRCxpQkFBQztDQUFBO0FBQUoiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lUm91dGluZ01vZHVsZSB7IH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuaG9tZS1wYW5lbHtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgXFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIG1hcmdpbjogMTU7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1sYWJlbHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XFxufVxcblxcbi5idXR0b257XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHQgIGZvbnQtZmFtaWx5OiAnTm9yZGljYSBQbHVzJywgJ25vcmRpY2FjbGFzc2ljbHRleHQnO1xcbiAgICBmb250LXNpemU6IDE1O1xcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHRvcDogMHB4O1xcblxcdGRpc3BsYXk6ZmxleDtcXG4gICAgIGN1cnNvcjpwb2ludGVyO1xcbiAgICBmaWx0ZXIgOiBodWUtcm90YXRlKDE4MGRlZyk7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBjaGFuZ2VDb2xvcjtcXG4gYW5pbWF0aW9uOiBjaGFuZ2VDb2xvciBlYXNlO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG59XFxuLnJvdGF0aW9ueyBhbmltYXRpb24tbmFtZTogcm90YXRlOyBhbmltYXRpb24tZHVyYXRpb246IDI7IH0gQGtleWZyYW1lcyByb3RhdGUgeyBmcm9tIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB0byB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9IH1cXG5Aa2V5ZnJhbWVzIGNoYW5nZUNvbG9yIHtcXG4gICAgZnJvbSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ2LDIxMywxNDIpO1xcbiAgfVxcbiAgXFxuICA1MCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMzLDE4NCwyMjIpO1xcbiAgfVxcbiAgXFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0NiwyMTMsMTQyKTtcXG4gIH1cXG59XFxuLypcXG4gICAgRmlsZSBuYW1lOiBmYS1yZWd1bGFyLTQwMC50dGZcXG4gICAgRm9udCBuYW1lOiBGb250IEF3ZXNvbWUgNSBGcmVlXFxuKi9cXG4uZmFyIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIiwgXFxcImZhLXJlZ3VsYXItNDAwXFxcIjtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLypcXG4gICAgRmlsZSBuYW1lOiBmYS1zb2xpZC05MDAudHRmXFxuICAgIEZvbnQgbmFtZTogRm9udCBBd2Vzb21lIDUgRnJlZVxcbiovXFxuLmZhcyB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiRm9udCBBd2Vzb21lIDUgRnJlZVxcXCIsIFxcXCJmYS1zb2xpZC05MDBcXFwiO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbn1cXG4uYnRuLWltZ3tcXG5cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAyO1xcblxcbn1cXG5cXG4udmlldyB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBleGFtcGxlO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDE7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5Aa2V5ZnJhbWVzIGV4YW1wbGUge1xcbiAgICBmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7IH1cXG4gICAgdG8geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMDApOyB9XFxufVxcblxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcbjxsaW5rIHJlbD1cXFwic3R5bGVzaGVldFxcXCIgaHJlZj1cXFwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1xcXCI+XFxuPEFjdGlvbkJhciBjbGFzcz1cXFwiYWN0aW9uLWJhclxcXCI+XFxuICAgIDxBYnNvbHV0ZUxheW91dCA+XFxuICAgICAgICA8TGFiZWwgbGVmdD1cXFwiMFxcXCIgdG9wPVxcXCIxNVxcXCIgdGV4dD1cXFwiU29tYnJlcm8gU2VsZWNjaW9uYWRvclxcXCIgY2xhc3M9XFxcImFjdGlvbkJhckxhYmVsXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPEJ1dHRvbiBkYXRhLWNoYWZmbGU9XFxcImVuXFxcIiBsZWZ0PVxcXCIyNzBcXFwiIHRleHQ9XFxcInt7YnV0dG9uVGV4dH19XFxcIiBjbGFzcz1cXFwiYnV0dG9uIHJvdGF0aW9uXFxcIlxcbiAgICAgICAgICAgICAgICAodGFwKT1cXFwic2h1ZmZsZSgpXFxcIj48L0J1dHRvbj5cXG5cXG4gICAgPC9BYnNvbHV0ZUxheW91dCA+XFxuPC9BY3Rpb25CYXI+XFxuXFxuPEdyaWRMYXlvdXQgdGtFeGFtcGxlVGl0bGUgdGtUb2dnbGVOYXZCdXR0b24+XFxuXFxuICAgIDxSYWRMaXN0VmlldyBbaXRlbXNdPVxcXCJtanZlcnNcXFwiIG1hcmdpblJpZ2h0PVxcXCItMlxcXCI+XFxuXFxuICAgICAgICA8TGlzdFZpZXdHcmlkTGF5b3V0IHRrTGlzdFZpZXdMYXlvdXQgc2Nyb2xsRGlyZWN0aW9uPVxcXCJWZXJ0aWNhbFxcXCJcXG4gICAgICAgICAgICBpdGVtSGVpZ2h0PVxcXCIyMDBcXFwiIHNwYW5Db3VudD1cXFwiMVxcXCI+XFxuICAgICAgICA8L0xpc3RWaWV3R3JpZExheW91dD5cXG5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSB0a0xpc3RJdGVtVGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiPlxcblxcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGJhY2tncm91bmRDb2xvcj1cXFwiV2hpdGVcXFwiPlxcblxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCA+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8YW5kcm9pZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCIhaXRlbS5jdXN0b21JbWFnZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcInt7IGl0ZW0uaW1hZ2VTcmMgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJldGNoPVxcXCJhc3BlY3RGaWxsXFxcIiBoZWlnaHQ9XFxcIjE4MFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW1hZ2U+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwiaXRlbS5jdXN0b21JbWFnZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBbc3JjXT1cXFwiaXRlbS5jdXN0b21JbWFnZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmV0Y2g9XFxcImFzcGVjdEZpbGxcXFwiIGhlaWdodD1cXFwiMTgwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbWFnZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvYW5kcm9pZD5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHZlcnRpY2FsQWxpZ25tZW50PVxcXCJib3R0b21cXFwiPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJodHRwczovL2ltZy5pY29uczguY29tL2NvdHRvbi8yeC9uYW1lLnBuZ1xcXCIgIGNsYXNzPVxcXCJidG4taW1nXFxcIiAodGFwKT1cXFwib25UYWtlUGljdHVyZVRhcCgkZXZlbnQsIGl0ZW0uaWQpXFxcIiBjbGFzcz1cXFwibWFzYm5cXFwiIHdpZHRoPVxcXCIxMCVcXFwiIGhlaWdodD1cXFwiMTAwJVxcXCIgbWFyZ2luUmlnaHQ9XFxcIjEwXFxcIj48L0ltYWdlPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBwYWRkaW5nVG9wPVxcXCI4XFxcIiBwYWRkaW5nQm90dG9tPVxcXCI4XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdD1cXFwiMTZcXFwiIHBhZGRpbmdSaWdodD1cXFwiMTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgaXRlbS5uYW1lIH19XFxcIiBjbGFzcz1cXFwibmFtZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBpdGVtLmZyZWVEYXkgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwibG9jYXRpb25Db3VudHJ5XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuXFxuICAgIDwvUmFkTGlzdFZpZXc+XFxuPC9HcmlkTGF5b3V0PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgdGFrZVBpY3R1cmUsIHJlcXVlc3RQZXJtaXNzaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1jYW1lcmEnO1xuaW1wb3J0IHsgSW1hZ2VBc3NldCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvaW1hZ2UtYXNzZXQnO1xuaW1wb3J0IHtBbmltYXRpb25DdXJ2ZX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZW51bXNcIjtcbmNvbnN0IGltYWdlU291cmNlID0gcmVxdWlyZShcImltYWdlLXNvdXJjZVwiKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuICAgIGJ1dHRvblRleHQgPSBcIlNodWZmbGVcIjtcbiAgICBwcm9jZXNzaW5nID0gdHJ1ZTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zaHVmZmxlKCk7XG4gICAgfVxuXG4gICAgb25CdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQnV0dG9uIHdhcyBwcmVzc2VkXCIpO1xuICAgIH1cblxuXG5cbiAgICBtanZlcnM6IHsgaWQ6IG51bWJlciwgbmFtZTogc3RyaW5nLCBpbWFnZVNyYzogc3RyaW5nLCBjdXN0b21JbWFnZTogYW55LCBzdGF0dXM6IGJvb2xlYW4sIGZyZWVEYXk6IG51bGwgfVtdID0gW1xuICAgICAgICB7IGlkOiAxLCBuYW1lOiBcIk1hcmlhXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy9mZi9kZC82MC9mZmRkNjAwYTE2NzA0MDkyNzllMmViM2NlZTQxNDgyMi5qcGdcIiwgY3VzdG9tSW1hZ2U6IG51bGwsIHN0YXR1czogdHJ1ZSwgZnJlZURheTogbnVsbCB9LFxuICAgICAgICB7IGlkOiAyLCBuYW1lOiBcIkRhbmllbFwiLCBpbWFnZVNyYzogXCJodHRwczovL2Rpc2Vub3dlYmFrdXMubmV0L2ltYWdlbmVzL2FydGljdWxvcy9zdGV2ZS1qb2JzLmpwZ1wiLCBjdXN0b21JbWFnZTogbnVsbCwgIHN0YXR1czogdHJ1ZSxmcmVlRGF5OiBudWxsIH0sXG4gICAgICAgIHsgaWQ6IDMsIG5hbWU6IFwiSmhlbm55ZmVyXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vd3d3LmVjb3BldGl0LmNhdC93cGljL21waWMvOC04NTY3MV9waWthY2h1LXdhbGxwYXBlci1oZC1mcmVlLWN1dGUtcGlrYWNodS13YWxscGFwZXJzLWhkLmpwZ1wiLCBjdXN0b21JbWFnZTogbnVsbCwgIHN0YXR1czogdHJ1ZSwgZnJlZURheTogbnVsbCB9LFxuICAgICAgICB7IGlkOiA0LCBuYW1lOiBcIkthcm9sXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vd3d3Lml0bC5jYXQvcG5nZmlsZS9iaWcvMjAwLTIwMDU1ODFfcGFuZGEtd2FsbHBhcGVyLWhkLWhkLXdhbGxwYXBlcm1vbmtleS1wYW5kYS13YWxscGFwZXJzLXBhbmRhLmpwZ1wiLCBjdXN0b21JbWFnZTogbnVsbCwgIHN0YXR1czogdHJ1ZSwgZnJlZURheTogbnVsbCB9LFxuICAgICAgICB7IGlkOiA1LCBuYW1lOiBcIkVkd2luXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vZDJnZzlldmg0N2ZuOXouY2xvdWRmcm9udC5uZXQvODAwcHhfQ09MT1VSQk9YMzAwMDc4NDMuanBnXCIsIGN1c3RvbUltYWdlOiBudWxsLCAgc3RhdHVzOiB0cnVlLCBmcmVlRGF5OiBudWxsIH0sXG4gICAgICAgIHsgaWQ6IDYsIG5hbWU6IFwiQ3Jpc3RpYW5cIiwgaW1hZ2VTcmM6IFwiaHR0cHM6Ly93d3cubWV0YWxzdWNrcy5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDkvQ1VCTE9UVy0wOV8yNV8yMDE5LmpwZ1wiLCBjdXN0b21JbWFnZTogbnVsbCwgIHN0YXR1czogdHJ1ZSwgZnJlZURheTogbnVsbCB9LFxuICAgICAgICB7IGlkOiA3LCBuYW1lOiBcIlBldGVyXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vcHVscGZpY3Rpb25jaW5lLmNvbS9kb3dubG9hZC9tdWx0aW1lZGlhLm5vcm1hbC45ZWQ5MTAwZDBlMWQ5M2YxLjYyNjU3MjczNjU3MjZiMmQ1ZjZlNmY3MjZkNjE2YzJlNmE3MDY3LmpwZ1wiLCBjdXN0b21JbWFnZTogbnVsbCwgIHN0YXR1czogdHJ1ZSwgZnJlZURheTogbnVsbCB9LFxuICAgICAgICB7IGlkOiA3LCBuYW1lOiBcIkNhdGFsaW5hXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vaS5zdGFjay5pbWd1ci5jb20vMmUyU3cuanBnXCIsIGN1c3RvbUltYWdlOiBudWxsLCAgc3RhdHVzOiB0cnVlLCBmcmVlRGF5OiBudWxsIH0sXG4gICAgXTtcbiAgICBkYXlzOiB7IGRheTogc3RyaW5nIH1bXSA9IFtcbiAgICAgICAgLy97IGRheTogXCJMVU5FU1wiIH0sXG4gICAgICAgIHsgZGF5OiBcIk1BUlRFU1wiLCB9LFxuICAgICAgICB7IGRheTogXCJNSUVSQ09MRVNcIiwgfSxcbiAgICAgICAgeyBkYXk6IFwiSlVFVkVTXCIsIH0sXG4gICAgICAgIC8veyBkYXk6IFwiVklFUk5FU1wiLCB9LFxuICAgIF07XG5cblxuY291bnQgPSAxO1xuICAgIHNodWZmbGUoKSB7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IHRoaXMubWp2ZXJzLmxlbmd0aCwgdGVtcG9yYXJ5VmFsdWUsIHJhbmRvbUluZGV4O1xuXG4gICAgICAgIHdoaWxlICgwICE9PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCAtPSAxO1xuICAgICAgICAgICAgdGVtcG9yYXJ5VmFsdWUgPSB0aGlzLm1qdmVyc1tjdXJyZW50SW5kZXhdO1xuICAgICAgICAgICAgdGhpcy5tanZlcnNbY3VycmVudEluZGV4XSA9IHRoaXMubWp2ZXJzW3JhbmRvbUluZGV4XTtcbiAgICAgICAgICAgIHRlbXBvcmFyeVZhbHVlLmZyZWVEYXkgPSB0aGlzLnNlbGVjdFJhbmRvbURheSgpO1xuICAgICAgICAgICAgdGhpcy5tanZlcnNbcmFuZG9tSW5kZXhdID0gdGVtcG9yYXJ5VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubWp2ZXJzO1xuICAgIH1cblxuICAgIHNlbGVjdFJhbmRvbURheSgpIHtcbiAgICAgICAgY29uc3Qgd2Vla0RheSA9IHRoaXMuZGF5c1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmRheXMubGVuZ3RoKV07XG4gICAgICAgIHJldHVybiB3ZWVrRGF5LmRheTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2F2ZVRvR2FsbGVyeTogYm9vbGVhbiA9IHRydWU7XG4gICAgcHVibGljIGNhbWVyYUltYWdlOiBJbWFnZUFzc2V0O1xuXG4gICAgb25UYWtlUGljdHVyZVRhcChhcmdzLCBpZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhpZCk7XG4gICAgICAgIHJlcXVlc3RQZXJtaXNzaW9ucygpLnRoZW4oXG4gICAgICAgICAgICAoKSA9PiB0aGlzLmNhcHR1cmUoaWQpLFxuICAgICAgICAgICAgKCkgPT4gYWxlcnQoJ3Blcm1pc3Npb25zIHJlamVjdGVkJylcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjYXB0dXJlKGlkKSB7XG4gICAgICAgIHRha2VQaWN0dXJlKHsgd2lkdGg6IDI1MCwgaGVpZ2h0OiAzMDAsIGtlZXBBc3BlY3RSYXRpbzogdHJ1ZSwgc2F2ZVRvR2FsbGVyeTogdGhpcy5zYXZlVG9HYWxsZXJ5IH0pXG4gICAgICAgICAgICAudGhlbigoaW1hZ2VBc3NldDogYW55KSA9PiB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYUltYWdlID0gaW1hZ2VBc3NldDtcbiAgICAgICAgICAgICAgICB0aGlzLm1qdmVycy5maW5kKCB1c2VyID0+IHVzZXIuaWQgPT09IGlkKS5jdXN0b21JbWFnZSA9IGltYWdlQXNzZXQ7XG4gICAgICAgICAgICAgICAgaW1hZ2VBc3NldC5nZXRJbWFnZUFzeW5jKGZ1bmN0aW9uIChuYXRpdmVJbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2NhbGUgPSAxO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaGVpZ2h0ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHdpZHRoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlQXNzZXQuYW5kcm9pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IGRlbnNpdHkgb2YgdGhlIHNjcmVlbiAoZHBpKSBhbmQgZGl2aWRlIGl0IGJ5IHRoZSBkZWZhdWx0IG9uZSB0byBnZXQgdGhlIHNjYWxlXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZSA9IG5hdGl2ZUltYWdlLmdldERlbnNpdHkoKSAvIGltYWdlQXNzZXQuYW5kcm9pZC51dGlsLkRpc3BsYXlNZXRyaWNzLkRFTlNJVFlfREVGQVVMVDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IGltYWdlQXNzZXQub3B0aW9ucy5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IGltYWdlQXNzZXQub3B0aW9ucy53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlID0gbmF0aXZlSW1hZ2Uuc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IG5hdGl2ZUltYWdlLnNpemUud2lkdGggKiBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IG5hdGl2ZUltYWdlLnNpemUuaGVpZ2h0ICogc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYERpc3BsYXllZCBTaXplOiAke3dpZHRofXgke2hlaWdodH0gd2l0aCBzY2FsZSAke3NjYWxlfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgSW1hZ2UgU2l6ZTogJHt3aWR0aCAvIHNjYWxlfXgke2hlaWdodCAvIHNjYWxlfWApO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG5pbXBvcnQgeyBIb21lUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2hvbWUtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBIb21lUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBIb21lQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVNb2R1bGUgeyB9XG4iXSwic291cmNlUm9vdCI6IiJ9