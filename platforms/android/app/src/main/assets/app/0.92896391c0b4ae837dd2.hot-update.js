webpackHotUpdate(0,{

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



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUNvQjtBQUd0RSxJQUFNLFdBQVcsR0FBRyxtQkFBTyxDQUFDLGlFQUFjLENBQUMsQ0FBQztBQVE1QztJQUdJO1FBRUEsZUFBVSxHQUFHLFNBQVMsQ0FBQztRQUN2QixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBV2xCLFdBQU0sR0FBdUc7WUFDekcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLDhFQUE4RSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO1lBQ2xLLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSw2REFBNkQsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFHLE1BQU0sRUFBRSxJQUFJLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtZQUNsSixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUscUdBQXFHLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRyxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7WUFDOUwsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLDhHQUE4RyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUcsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO1lBQ25NLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxtRUFBbUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFHLE1BQU0sRUFBRSxJQUFJ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QUM7UUFFUCxDQUFDLEVBQUUsVUFBQyxLQUFLO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBL0ZRLGFBQWE7UUFOekIsK0RBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBRWhCLG9GQUFvQzs7U0FFdkMsQ0FBQzs7T0FDVyxhQUFhLENBa0d6QjtJQUFELG9CQUFDO0NBQUE7QUFsR3lCIiwiZmlsZSI6IjAuOTI4OTYzOTFjMGI0YWU4MzdkZDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IHRha2VQaWN0dXJlLCByZXF1ZXN0UGVybWlzc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtY2FtZXJhJztcbmltcG9ydCB7IEltYWdlQXNzZXQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2ltYWdlLWFzc2V0JztcbmltcG9ydCB7QW5pbWF0aW9uQ3VydmV9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2VudW1zXCI7XG5jb25zdCBpbWFnZVNvdXJjZSA9IHJlcXVpcmUoXCJpbWFnZS1zb3VyY2VcIik7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9ob21lLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cbiAgICBidXR0b25UZXh0ID0gXCJTaHVmZmxlXCI7XG4gICAgcHJvY2Vzc2luZyA9IHRydWU7XG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2h1ZmZsZSgpO1xuICAgIH1cblxuICAgIG9uQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkJ1dHRvbiB3YXMgcHJlc3NlZFwiKTtcbiAgICB9XG5cblxuXG4gICAgbWp2ZXJzOiB7IGlkOiBudW1iZXIsIG5hbWU6IHN0cmluZywgaW1hZ2VTcmM6IHN0cmluZywgY3VzdG9tSW1hZ2U6IGFueSwgc3RhdHVzOiBib29sZWFuLCBmcmVlRGF5OiBudWxsIH1bXSA9IFtcbiAgICAgICAgeyBpZDogMSwgbmFtZTogXCJNYXJpYVwiLCBpbWFnZVNyYzogXCJodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvZmYvZGQvNjAvZmZkZDYwMGExNjcwNDA5Mjc5ZTJlYjNjZWU0MTQ4MjIuanBnXCIsIGN1c3RvbUltYWdlOiBudWxsLCBzdGF0dXM6IHRydWUsIGZyZWVEYXk6IG51bGwgfSxcbiAgICAgICAgeyBpZDogMiwgbmFtZTogXCJEYW5pZWxcIiwgaW1hZ2VTcmM6IFwiaHR0cHM6Ly9kaXNlbm93ZWJha3VzLm5ldC9pbWFnZW5lcy9hcnRpY3Vsb3Mvc3RldmUtam9icy5qcGdcIiwgY3VzdG9tSW1hZ2U6IG51bGwsICBzdGF0dXM6IHRydWUsZnJlZURheTogbnVsbCB9LFxuICAgICAgICB7IGlkOiAzLCBuYW1lOiBcIkpoZW5ueWZlclwiLCBpbWFnZVNyYzogXCJodHRwczovL3d3dy5lY29wZXRpdC5jYXQvd3BpYy9tcGljLzgtODU2NzFfcGlrYWNodS13YWxscGFwZXItaGQtZnJlZS1jdXRlLXBpa2FjaHUtd2FsbHBhcGVycy1oZC5qcGdcIiwgY3VzdG9tSW1hZ2U6IG51bGwsICBzdGF0dXM6IHRydWUsIGZyZWVEYXk6IG51bGwgfSxcbiAgICAgICAgeyBpZDogNCwgbmFtZTogXCJLYXJvbFwiLCBpbWFnZVNyYzogXCJodHRwczovL3d3dy5pdGwuY2F0L3BuZ2ZpbGUvYmlnLzIwMC0yMDA1NTgxX3BhbmRhLXdhbGxwYXBlci1oZC1oZC13YWxscGFwZXJtb25rZXktcGFuZGEtd2FsbHBhcGVycy1wYW5kYS5qcGdcIiwgY3VzdG9tSW1hZ2U6IG51bGwsICBzdGF0dXM6IHRydWUsIGZyZWVEYXk6IG51bGwgfSxcbiAgICAgICAgeyBpZDogNSwgbmFtZTogXCJFZHdpblwiLCBpbWFnZVNyYzogXCJodHRwczovL2QyZ2c5ZXZoNDdmbjl6LmNsb3VkZnJvbnQubmV0LzgwMHB4X0NPTE9VUkJPWDMwMDA3ODQzLmpwZ1wiLCBjdXN0b21JbWFnZTogbnVsbCwgIHN0YXR1czogdHJ1ZSwgZnJlZURheTogbnVsbCB9LFxuICAgICAgICB7IGlkOiA2LCBuYW1lOiBcIkNyaXN0aWFuXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vd3d3Lm1ldGFsc3Vja3MubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA5L0NVQkxPVFctMDlfMjVfMjAxOS5qcGdcIiwgY3VzdG9tSW1hZ2U6IG51bGwsICBzdGF0dXM6IHRydWUsIGZyZWVEYXk6IG51bGwgfSxcbiAgICAgICAgeyBpZDogNywgbmFtZTogXCJQZXRlclwiLCBpbWFnZVNyYzogXCJodHRwczovL3B1bHBmaWN0aW9uY2luZS5jb20vZG93bmxvYWQvbXVsdGltZWRpYS5ub3JtYWwuOWVkOTEwMGQwZTFkOTNmMS42MjY1NzI3MzY1NzI2YjJkNWY2ZTZmNzI2ZDYxNmMyZTZhNzA2Ny5qcGdcIiwgY3VzdG9tSW1hZ2U6IG51bGwsICBzdGF0dXM6IHRydWUsIGZyZWVEYXk6IG51bGwgfSxcbiAgICAgICAgeyBpZDogNywgbmFtZTogXCJDYXRhbGluYVwiLCBpbWFnZVNyYzogXCJodHRwczovL2kuc3RhY2suaW1ndXIuY29tLzJlMlN3LmpwZ1wiLCBjdXN0b21JbWFnZTogbnVsbCwgIHN0YXR1czogdHJ1ZSwgZnJlZURheTogbnVsbCB9LFxuICAgIF07XG4gICAgZGF5czogeyBkYXk6IHN0cmluZyB9W10gPSBbXG4gICAgICAgIC8veyBkYXk6IFwiTFVORVNcIiB9LFxuICAgICAgICB7IGRheTogXCJNQVJURVNcIiwgfSxcbiAgICAgICAgeyBkYXk6IFwiTUlFUkNPTEVTXCIsIH0sXG4gICAgICAgIHsgZGF5OiBcIkpVRVZFU1wiLCB9LFxuICAgICAgICAvL3sgZGF5OiBcIlZJRVJORVNcIiwgfSxcbiAgICBdO1xuXG5cbmNvdW50ID0gMTtcbiAgICBzaHVmZmxlKCkge1xuXG4gICAgICAgIGxldCBjdXJyZW50SW5kZXggPSB0aGlzLm1qdmVycy5sZW5ndGgsIHRlbXBvcmFyeVZhbHVlLCByYW5kb21JbmRleDtcblxuICAgICAgICB3aGlsZSAoMCAhPT0gY3VycmVudEluZGV4KSB7XG4gICAgICAgICAgICByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICBjdXJyZW50SW5kZXggLT0gMTtcbiAgICAgICAgICAgIHRlbXBvcmFyeVZhbHVlID0gdGhpcy5tanZlcnNbY3VycmVudEluZGV4XTtcbiAgICAgICAgICAgIHRoaXMubWp2ZXJzW2N1cnJlbnRJbmRleF0gPSB0aGlzLm1qdmVyc1tyYW5kb21JbmRleF07XG4gICAgICAgICAgICB0ZW1wb3JhcnlWYWx1ZS5mcmVlRGF5ID0gdGhpcy5zZWxlY3RSYW5kb21EYXkoKTtcbiAgICAgICAgICAgIHRoaXMubWp2ZXJzW3JhbmRvbUluZGV4XSA9IHRlbXBvcmFyeVZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1qdmVycztcbiAgICB9XG5cbiAgICBzZWxlY3RSYW5kb21EYXkoKSB7XG4gICAgICAgIGNvbnN0IHdlZWtEYXkgPSB0aGlzLmRheXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5kYXlzLmxlbmd0aCldO1xuICAgICAgICByZXR1cm4gd2Vla0RheS5kYXk7XG4gICAgfVxuXG4gICAgcHVibGljIHNhdmVUb0dhbGxlcnk6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHB1YmxpYyBjYW1lcmFJbWFnZTogSW1hZ2VBc3NldDtcblxuICAgIG9uVGFrZVBpY3R1cmVUYXAoYXJncywgaWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coaWQpO1xuICAgICAgICByZXF1ZXN0UGVybWlzc2lvbnMoKS50aGVuKFxuICAgICAgICAgICAgKCkgPT4gdGhpcy5jYXB0dXJlKGlkKSxcbiAgICAgICAgICAgICgpID0+IGFsZXJ0KCdwZXJtaXNzaW9ucyByZWplY3RlZCcpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY2FwdHVyZShpZCkge1xuICAgICAgICB0YWtlUGljdHVyZSh7IHdpZHRoOiAyNTAsIGhlaWdodDogMzAwLCBrZWVwQXNwZWN0UmF0aW86IHRydWUsIHNhdmVUb0dhbGxlcnk6IHRoaXMuc2F2ZVRvR2FsbGVyeSB9KVxuICAgICAgICAgICAgLnRoZW4oKGltYWdlQXNzZXQ6IGFueSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmFJbWFnZSA9IGltYWdlQXNzZXQ7XG4gICAgICAgICAgICAgICAgdGhpcy5tanZlcnMuZmluZCggdXNlciA9PiB1c2VyLmlkID09PSBpZCkuY3VzdG9tSW1hZ2UgPSBpbWFnZUFzc2V0O1xuICAgICAgICAgICAgICAgIGltYWdlQXNzZXQuZ2V0SW1hZ2VBc3luYyhmdW5jdGlvbiAobmF0aXZlSW1hZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjYWxlID0gMTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhlaWdodCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGxldCB3aWR0aCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZUFzc2V0LmFuZHJvaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY3VycmVudCBkZW5zaXR5IG9mIHRoZSBzY3JlZW4gKGRwaSkgYW5kIGRpdmlkZSBpdCBieSB0aGUgZGVmYXVsdCBvbmUgdG8gZ2V0IHRoZSBzY2FsZVxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGUgPSBuYXRpdmVJbWFnZS5nZXREZW5zaXR5KCkgLyBpbWFnZUFzc2V0LmFuZHJvaWQudXRpbC5EaXNwbGF5TWV0cmljcy5ERU5TSVRZX0RFRkFVTFQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSBpbWFnZUFzc2V0Lm9wdGlvbnMuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSBpbWFnZUFzc2V0Lm9wdGlvbnMud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZSA9IG5hdGl2ZUltYWdlLnNjYWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSBuYXRpdmVJbWFnZS5zaXplLndpZHRoICogc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSBuYXRpdmVJbWFnZS5zaXplLmhlaWdodCAqIHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBEaXNwbGF5ZWQgU2l6ZTogJHt3aWR0aH14JHtoZWlnaHR9IHdpdGggc2NhbGUgJHtzY2FsZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEltYWdlIFNpemU6ICR7d2lkdGggLyBzY2FsZX14JHtoZWlnaHQgLyBzY2FsZX1gKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==