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
            { id: 1, name: "Maria", imageSrc: "https://i.pinimg.com/originals/ff/dd/60/ffdd600a1670409279e2eb3cee414822.jpg", customImage: null, status: true },
            { id: 2, name: "Daniel", imageSrc: "https://disenowebakus.net/imagenes/articulos/steve-jobs.jpg", customImage: null, status: true },
            { id: 3, name: "Jhennyfer", imageSrc: "https://www.ecopetit.cat/wpic/mpic/8-85671_pikachu-wallpaper-hd-free-cute-pikachu-wallpapers-hd.jpg", customImage: null, status: true },
            { id: 4, name: "Karol", imageSrc: "https://www.itl.cat/pngfile/big/200-2005581_panda-wallpaper-hd-hd-wallpapermonkey-panda-wallpapers-panda.jpg", customImage: null, status: true },
            { id: 5, name: "Edwin", imageSrc: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX30007843.jpg", customImage: null, status: true },
            { id: 6, name: "Cristian", imageSrc: "https://www.metalsucks.net/wp-content/uploads/2019/09/CUBLOTW-09_25_2019.jpg", customImage: null, status: true },
            { id: 7, name: "Peter", imageSrc: "https://pulpfictioncine.com/download/multimedia.normal.9ed9100d0e1d93f1.6265727365726b2d5f6e6f726d616c2e6a7067.jpg", customImage: null, status: true },
            { id: 7, name: "Catalina", imageSrc: "https://i.stack.imgur.com/2e2Sw.jpg", customImage: null, status: true },
        ];
        this.days = [
            //{ day: "LUNES" },
            { day: "MARTES", },
            { day: "MIERCOLES", },
            { day: "JUEVES", },
        ];
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
            this.mjvers[randomIndex] = temporaryValue;
        }
        return this.mjvers;
    };
    HomeComponent.prototype.selectRandomDay = function () {
        var weekDay = this.days[Math.floor(Math.random() * this.days.length)];
        if (this.currentDay === weekDay.day) {
            weekDay.day = weekDay.day + "2";
        }
        this.currentDay = weekDay.day;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUNvQjtBQUd0RSxJQUFNLFdBQVcsR0FBRyxtQkFBTyxDQUFDLGlFQUFjLENBQUMsQ0FBQztBQVE1QztJQUdJO1FBRUEsZUFBVSxHQUFHLFNBQVMsQ0FBQztRQUN2QixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBV2xCLFdBQU0sR0FBd0Y7WUFDMUYsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLDhFQUE4RSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUNuSixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsNkRBQTZELEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRyxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ3BJLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxxR0FBcUcsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFHLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDL0ssRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLDhHQUE4RyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUcsTUFBTSxFQUFFLElBQUksRUFBRTtZQUNwTCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsbUVBQW1FLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRyxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ3pJLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSw4RUFBOEUsRUFBRSxX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UUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBeEdRLGFBQWE7UUFOekIsK0RBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBRWhCLG9GQUFvQzs7U0FFdkMsQ0FBQzs7T0FDVyxhQUFhLENBMkd6QjtJQUFELG9CQUFDO0NBQUE7QUEzR3lCIiwiZmlsZSI6IjAuZDliM2U4NDE1YzQxMDUwYWI4NGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IHRha2VQaWN0dXJlLCByZXF1ZXN0UGVybWlzc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtY2FtZXJhJztcbmltcG9ydCB7IEltYWdlQXNzZXQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2ltYWdlLWFzc2V0JztcbmltcG9ydCB7QW5pbWF0aW9uQ3VydmV9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2VudW1zXCI7XG5jb25zdCBpbWFnZVNvdXJjZSA9IHJlcXVpcmUoXCJpbWFnZS1zb3VyY2VcIik7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9ob21lLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cbiAgICBidXR0b25UZXh0ID0gXCJTaHVmZmxlXCI7XG4gICAgcHJvY2Vzc2luZyA9IHRydWU7XG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2h1ZmZsZSgpO1xuICAgIH1cblxuICAgIG9uQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkJ1dHRvbiB3YXMgcHJlc3NlZFwiKTtcbiAgICB9XG5cblxuXG4gICAgbWp2ZXJzOiB7IGlkOiBudW1iZXIsIG5hbWU6IHN0cmluZywgaW1hZ2VTcmM6IHN0cmluZywgY3VzdG9tSW1hZ2U6IGFueSwgc3RhdHVzOiBib29sZWFuIH1bXSA9IFtcbiAgICAgICAgeyBpZDogMSwgbmFtZTogXCJNYXJpYVwiLCBpbWFnZVNyYzogXCJodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvZmYvZGQvNjAvZmZkZDYwMGExNjcwNDA5Mjc5ZTJlYjNjZWU0MTQ4MjIuanBnXCIsIGN1c3RvbUltYWdlOiBudWxsLCBzdGF0dXM6IHRydWUgfSxcbiAgICAgICAgeyBpZDogMiwgbmFtZTogXCJEYW5pZWxcIiwgaW1hZ2VTcmM6IFwiaHR0cHM6Ly9kaXNlbm93ZWJha3VzLm5ldC9pbWFnZW5lcy9hcnRpY3Vsb3Mvc3RldmUtam9icy5qcGdcIiwgY3VzdG9tSW1hZ2U6IG51bGwsICBzdGF0dXM6IHRydWUgfSxcbiAgICAgICAgeyBpZDogMywgbmFtZTogXCJKaGVubnlmZXJcIiwgaW1hZ2VTcmM6IFwiaHR0cHM6Ly93d3cuZWNvcGV0aXQuY2F0L3dwaWMvbXBpYy84LTg1NjcxX3Bpa2FjaHUtd2FsbHBhcGVyLWhkLWZyZWUtY3V0ZS1waWthY2h1LXdhbGxwYXBlcnMtaGQuanBnXCIsIGN1c3RvbUltYWdlOiBudWxsLCAgc3RhdHVzOiB0cnVlIH0sXG4gICAgICAgIHsgaWQ6IDQsIG5hbWU6IFwiS2Fyb2xcIiwgaW1hZ2VTcmM6IFwiaHR0cHM6Ly93d3cuaXRsLmNhdC9wbmdmaWxlL2JpZy8yMDAtMjAwNTU4MV9wYW5kYS13YWxscGFwZXItaGQtaGQtd2FsbHBhcGVybW9ua2V5LXBhbmRhLXdhbGxwYXBlcnMtcGFuZGEuanBnXCIsIGN1c3RvbUltYWdlOiBudWxsLCAgc3RhdHVzOiB0cnVlIH0sXG4gICAgICAgIHsgaWQ6IDUsIG5hbWU6IFwiRWR3aW5cIiwgaW1hZ2VTcmM6IFwiaHR0cHM6Ly9kMmdnOWV2aDQ3Zm45ei5jbG91ZGZyb250Lm5ldC84MDBweF9DT0xPVVJCT1gzMDAwNzg0My5qcGdcIiwgY3VzdG9tSW1hZ2U6IG51bGwsICBzdGF0dXM6IHRydWUgfSxcbiAgICAgICAgeyBpZDogNiwgbmFtZTogXCJDcmlzdGlhblwiLCBpbWFnZVNyYzogXCJodHRwczovL3d3dy5tZXRhbHN1Y2tzLm5ldC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOS9DVUJMT1RXLTA5XzI1XzIwMTkuanBnXCIsIGN1c3RvbUltYWdlOiBudWxsLCAgc3RhdHVzOiB0cnVlIH0sXG4gICAgICAgIHsgaWQ6IDcsIG5hbWU6IFwiUGV0ZXJcIiwgaW1hZ2VTcmM6IFwiaHR0cHM6Ly9wdWxwZmljdGlvbmNpbmUuY29tL2Rvd25sb2FkL211bHRpbWVkaWEubm9ybWFsLjllZDkxMDBkMGUxZDkzZjEuNjI2NTcyNzM2NTcyNmIyZDVmNmU2ZjcyNmQ2MTZjMmU2YTcwNjcuanBnXCIsIGN1c3RvbUltYWdlOiBudWxsLCAgc3RhdHVzOiB0cnVlIH0sXG4gICAgICAgIHsgaWQ6IDcsIG5hbWU6IFwiQ2F0YWxpbmFcIiwgaW1hZ2VTcmM6IFwiaHR0cHM6Ly9pLnN0YWNrLmltZ3VyLmNvbS8yZTJTdy5qcGdcIiwgY3VzdG9tSW1hZ2U6IG51bGwsICBzdGF0dXM6IHRydWUgfSxcbiAgICBdO1xuICAgIGRheXM6IHsgZGF5OiBzdHJpbmcgfVtdID0gW1xuICAgICAgICAvL3sgZGF5OiBcIkxVTkVTXCIgfSxcbiAgICAgICAgeyBkYXk6IFwiTUFSVEVTXCIsIH0sXG4gICAgICAgIHsgZGF5OiBcIk1JRVJDT0xFU1wiLCB9LFxuICAgICAgICB7IGRheTogXCJKVUVWRVNcIiwgfSxcbiAgICAgICAgLy97IGRheTogXCJWSUVSTkVTXCIsIH0sXG4gICAgXTtcblxuXG5cbiAgICBzaHVmZmxlKCkge1xuXG4gICAgICAgIHZhciBjdXJyZW50SW5kZXggPSB0aGlzLm1qdmVycy5sZW5ndGgsIHRlbXBvcmFyeVZhbHVlLCByYW5kb21JbmRleDtcblxuICAgICAgICB3aGlsZSAoMCAhPT0gY3VycmVudEluZGV4KSB7XG5cblxuICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgY3VycmVudEluZGV4IC09IDE7XG5cblxuICAgICAgICAgICAgdGVtcG9yYXJ5VmFsdWUgPSB0aGlzLm1qdmVyc1tjdXJyZW50SW5kZXhdO1xuICAgICAgICAgICAgdGhpcy5tanZlcnNbY3VycmVudEluZGV4XSA9IHRoaXMubWp2ZXJzW3JhbmRvbUluZGV4XTtcbiAgICAgICAgICAgIHRoaXMubWp2ZXJzW3JhbmRvbUluZGV4XSA9IHRlbXBvcmFyeVZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubWp2ZXJzO1xuICAgIH1cblxuICAgIGN1cnJlbnREYXk6IHN0cmluZztcbiAgICBzZWxlY3RSYW5kb21EYXkoKSB7XG4gICAgICAgIGNvbnN0IHdlZWtEYXkgPSB0aGlzLmRheXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5kYXlzLmxlbmd0aCldO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50RGF5ID09PSB3ZWVrRGF5LmRheSl7XG4gICAgICAgICAgICB3ZWVrRGF5LmRheSA9ICB3ZWVrRGF5LmRheSArIFwiMlwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudERheSA9IHdlZWtEYXkuZGF5O1xuICAgICAgICByZXR1cm4gd2Vla0RheS5kYXk7XG4gICAgfVxuXG4gICAgcHVibGljIHNhdmVUb0dhbGxlcnk6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHB1YmxpYyBjYW1lcmFJbWFnZTogSW1hZ2VBc3NldDtcblxuICAgIG9uVGFrZVBpY3R1cmVUYXAoYXJncywgaWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coaWQpO1xuICAgICAgICByZXF1ZXN0UGVybWlzc2lvbnMoKS50aGVuKFxuICAgICAgICAgICAgKCkgPT4gdGhpcy5jYXB0dXJlKGlkKSxcbiAgICAgICAgICAgICgpID0+IGFsZXJ0KCdwZXJtaXNzaW9ucyByZWplY3RlZCcpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY2FwdHVyZShpZCkge1xuICAgICAgICB0YWtlUGljdHVyZSh7IHdpZHRoOiAyNTAsIGhlaWdodDogMzAwLCBrZWVwQXNwZWN0UmF0aW86IHRydWUsIHNhdmVUb0dhbGxlcnk6IHRoaXMuc2F2ZVRvR2FsbGVyeSB9KVxuICAgICAgICAgICAgLnRoZW4oKGltYWdlQXNzZXQ6IGFueSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmFJbWFnZSA9IGltYWdlQXNzZXQ7XG4gICAgICAgICAgICAgICAgdGhpcy5tanZlcnMuZmluZCggdXNlciA9PiB1c2VyLmlkID09PSBpZCkuY3VzdG9tSW1hZ2UgPSBpbWFnZUFzc2V0O1xuICAgICAgICAgICAgICAgIGltYWdlQXNzZXQuZ2V0SW1hZ2VBc3luYyhmdW5jdGlvbiAobmF0aXZlSW1hZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjYWxlID0gMTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhlaWdodCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGxldCB3aWR0aCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZUFzc2V0LmFuZHJvaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY3VycmVudCBkZW5zaXR5IG9mIHRoZSBzY3JlZW4gKGRwaSkgYW5kIGRpdmlkZSBpdCBieSB0aGUgZGVmYXVsdCBvbmUgdG8gZ2V0IHRoZSBzY2FsZVxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGUgPSBuYXRpdmVJbWFnZS5nZXREZW5zaXR5KCkgLyBpbWFnZUFzc2V0LmFuZHJvaWQudXRpbC5EaXNwbGF5TWV0cmljcy5ERU5TSVRZX0RFRkFVTFQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSBpbWFnZUFzc2V0Lm9wdGlvbnMuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSBpbWFnZUFzc2V0Lm9wdGlvbnMud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZSA9IG5hdGl2ZUltYWdlLnNjYWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSBuYXRpdmVJbWFnZS5zaXplLndpZHRoICogc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSBuYXRpdmVJbWFnZS5zaXplLmhlaWdodCAqIHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBEaXNwbGF5ZWQgU2l6ZTogJHt3aWR0aH14JHtoZWlnaHR9IHdpdGggc2NhbGUgJHtzY2FsZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEltYWdlIFNpemU6ICR7d2lkdGggLyBzY2FsZX14JHtoZWlnaHQgLyBzY2FsZX1gKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==