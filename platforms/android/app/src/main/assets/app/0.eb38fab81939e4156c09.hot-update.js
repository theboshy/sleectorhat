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
        this.mjvers.slice(0, this.mjvers.length / 2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUNvQjtBQUd0RSxJQUFNLFdBQVcsR0FBRyxtQkFBTyxDQUFDLGlFQUFjLENBQUMsQ0FBQztBQVE1QztJQUdJO1FBRUEsZUFBVSxHQUFHLFNBQVMsQ0FBQztRQUN2QixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBV2xCLFdBQU0sR0FBdUc7WUFDekcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLDhFQUE4RSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO1lBQ2xLLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSw2REFBNkQsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFHLE1BQU0sRUFBRSxJQUFJLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtZQUNsSixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUscUdBQXFHLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRyxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7WUFDOUwsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLDhHQUE4RyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUcsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO1lBQ25NLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxtRUFBbUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFHLE1BQU0sRUFBRSxJQUFJ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QUssR0FBRyxLQUFLLFNBQUksTUFBTSxHQUFHLEtBQU8sQ0FBQyxDQUFDO1lBQ2xFLENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQyxFQUFFLFVBQUMsS0FBSztZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQWhHUSxhQUFhO1FBTnpCLCtEQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUVoQixvRkFBb0M7O1NBRXZDLENBQUM7O09BQ1csYUFBYSxDQW1HekI7SUFBRCxvQkFBQztDQUFBO0FBbkd5QiIsImZpbGUiOiIwLmViMzhmYWI4MTkzOWU0MTU2YzA5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyB0YWtlUGljdHVyZSwgcmVxdWVzdFBlcm1pc3Npb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWNhbWVyYSc7XG5pbXBvcnQgeyBJbWFnZUFzc2V0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1hc3NldCc7XG5pbXBvcnQge0FuaW1hdGlvbkN1cnZlfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9lbnVtc1wiO1xuY29uc3QgaW1hZ2VTb3VyY2UgPSByZXF1aXJlKFwiaW1hZ2Utc291cmNlXCIpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vaG9tZS5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG4gICAgYnV0dG9uVGV4dCA9IFwiU2h1ZmZsZVwiO1xuICAgIHByb2Nlc3NpbmcgPSB0cnVlO1xuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNodWZmbGUoKTtcbiAgICB9XG5cbiAgICBvbkJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJCdXR0b24gd2FzIHByZXNzZWRcIik7XG4gICAgfVxuXG5cblxuICAgIG1qdmVyczogeyBpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIGltYWdlU3JjOiBzdHJpbmcsIGN1c3RvbUltYWdlOiBhbnksIHN0YXR1czogYm9vbGVhbiwgZnJlZURheTogbnVsbCB9W10gPSBbXG4gICAgICAgIHsgaWQ6IDEsIG5hbWU6IFwiTWFyaWFcIiwgaW1hZ2VTcmM6IFwiaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzL2ZmL2RkLzYwL2ZmZGQ2MDBhMTY3MDQwOTI3OWUyZWIzY2VlNDE0ODIyLmpwZ1wiLCBjdXN0b21JbWFnZTogbnVsbCwgc3RhdHVzOiB0cnVlLCBmcmVlRGF5OiBudWxsIH0sXG4gICAgICAgIHsgaWQ6IDIsIG5hbWU6IFwiRGFuaWVsXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vZGlzZW5vd2ViYWt1cy5uZXQvaW1hZ2VuZXMvYXJ0aWN1bG9zL3N0ZXZlLWpvYnMuanBnXCIsIGN1c3RvbUltYWdlOiBudWxsLCAgc3RhdHVzOiB0cnVlLGZyZWVEYXk6IG51bGwgfSxcbiAgICAgICAgeyBpZDogMywgbmFtZTogXCJKaGVubnlmZXJcIiwgaW1hZ2VTcmM6IFwiaHR0cHM6Ly93d3cuZWNvcGV0aXQuY2F0L3dwaWMvbXBpYy84LTg1NjcxX3Bpa2FjaHUtd2FsbHBhcGVyLWhkLWZyZWUtY3V0ZS1waWthY2h1LXdhbGxwYXBlcnMtaGQuanBnXCIsIGN1c3RvbUltYWdlOiBudWxsLCAgc3RhdHVzOiB0cnVlLCBmcmVlRGF5OiBudWxsIH0sXG4gICAgICAgIHsgaWQ6IDQsIG5hbWU6IFwiS2Fyb2xcIiwgaW1hZ2VTcmM6IFwiaHR0cHM6Ly93d3cuaXRsLmNhdC9wbmdmaWxlL2JpZy8yMDAtMjAwNTU4MV9wYW5kYS13YWxscGFwZXItaGQtaGQtd2FsbHBhcGVybW9ua2V5LXBhbmRhLXdhbGxwYXBlcnMtcGFuZGEuanBnXCIsIGN1c3RvbUltYWdlOiBudWxsLCAgc3RhdHVzOiB0cnVlLCBmcmVlRGF5OiBudWxsIH0sXG4gICAgICAgIHsgaWQ6IDUsIG5hbWU6IFwiRWR3aW5cIiwgaW1hZ2VTcmM6IFwiaHR0cHM6Ly9kMmdnOWV2aDQ3Zm45ei5jbG91ZGZyb250Lm5ldC84MDBweF9DT0xPVVJCT1gzMDAwNzg0My5qcGdcIiwgY3VzdG9tSW1hZ2U6IG51bGwsICBzdGF0dXM6IHRydWUsIGZyZWVEYXk6IG51bGwgfSxcbiAgICAgICAgeyBpZDogNiwgbmFtZTogXCJDcmlzdGlhblwiLCBpbWFnZVNyYzogXCJodHRwczovL3d3dy5tZXRhbHN1Y2tzLm5ldC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOS9DVUJMT1RXLTA5XzI1XzIwMTkuanBnXCIsIGN1c3RvbUltYWdlOiBudWxsLCAgc3RhdHVzOiB0cnVlLCBmcmVlRGF5OiBudWxsIH0sXG4gICAgICAgIHsgaWQ6IDcsIG5hbWU6IFwiUGV0ZXJcIiwgaW1hZ2VTcmM6IFwiaHR0cHM6Ly9wdWxwZmljdGlvbmNpbmUuY29tL2Rvd25sb2FkL211bHRpbWVkaWEubm9ybWFsLjllZDkxMDBkMGUxZDkzZjEuNjI2NTcyNzM2NTcyNmIyZDVmNmU2ZjcyNmQ2MTZjMmU2YTcwNjcuanBnXCIsIGN1c3RvbUltYWdlOiBudWxsLCAgc3RhdHVzOiB0cnVlLCBmcmVlRGF5OiBudWxsIH0sXG4gICAgICAgIHsgaWQ6IDcsIG5hbWU6IFwiQ2F0YWxpbmFcIiwgaW1hZ2VTcmM6IFwiaHR0cHM6Ly9pLnN0YWNrLmltZ3VyLmNvbS8yZTJTdy5qcGdcIiwgY3VzdG9tSW1hZ2U6IG51bGwsICBzdGF0dXM6IHRydWUsIGZyZWVEYXk6IG51bGwgfSxcbiAgICBdO1xuICAgIGRheXM6IHsgZGF5OiBzdHJpbmcgfVtdID0gW1xuICAgICAgICAvL3sgZGF5OiBcIkxVTkVTXCIgfSxcbiAgICAgICAgeyBkYXk6IFwiTUFSVEVTXCIsIH0sXG4gICAgICAgIHsgZGF5OiBcIk1JRVJDT0xFU1wiLCB9LFxuICAgICAgICB7IGRheTogXCJKVUVWRVNcIiwgfSxcbiAgICAgICAgLy97IGRheTogXCJWSUVSTkVTXCIsIH0sXG4gICAgXTtcblxuXG5cbiAgICBzaHVmZmxlKCkge1xuXG4gICAgICAgIGxldCBjdXJyZW50SW5kZXggPSB0aGlzLm1qdmVycy5sZW5ndGgsIHRlbXBvcmFyeVZhbHVlLCByYW5kb21JbmRleDtcbiAgICAgICAgdGhpcy5tanZlcnMuc2xpY2UoMCwgdGhpcy5tanZlcnMubGVuZ3RoIC8gMilcblxuICAgICAgICB3aGlsZSAoMCAhPT0gY3VycmVudEluZGV4KSB7XG4gICAgICAgICAgICByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICBjdXJyZW50SW5kZXggLT0gMTtcbiAgICAgICAgICAgIHRlbXBvcmFyeVZhbHVlID0gdGhpcy5tanZlcnNbY3VycmVudEluZGV4XTtcbiAgICAgICAgICAgIHRoaXMubWp2ZXJzW2N1cnJlbnRJbmRleF0gPSB0aGlzLm1qdmVyc1tyYW5kb21JbmRleF07XG4gICAgICAgICAgICB0ZW1wb3JhcnlWYWx1ZS5mcmVlRGF5ID0gdGhpcy5zZWxlY3RSYW5kb21EYXkoKTtcbiAgICAgICAgICAgIHRoaXMubWp2ZXJzW3JhbmRvbUluZGV4XSA9IHRlbXBvcmFyeVZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1qdmVycztcbiAgICB9XG5cbiAgICBzZWxlY3RSYW5kb21EYXkoKSB7XG4gICAgICAgIGNvbnN0IHdlZWtEYXkgPSB0aGlzLmRheXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5kYXlzLmxlbmd0aCldO1xuICAgICAgICByZXR1cm4gd2Vla0RheS5kYXk7XG4gICAgfVxuXG4gICAgcHVibGljIHNhdmVUb0dhbGxlcnk6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHB1YmxpYyBjYW1lcmFJbWFnZTogSW1hZ2VBc3NldDtcblxuICAgIG9uVGFrZVBpY3R1cmVUYXAoYXJncywgaWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coaWQpO1xuICAgICAgICByZXF1ZXN0UGVybWlzc2lvbnMoKS50aGVuKFxuICAgICAgICAgICAgKCkgPT4gdGhpcy5jYXB0dXJlKGlkKSxcbiAgICAgICAgICAgICgpID0+IGFsZXJ0KCdwZXJtaXNzaW9ucyByZWplY3RlZCcpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY2FwdHVyZShpZCkge1xuICAgICAgICB0YWtlUGljdHVyZSh7IHdpZHRoOiAyNTAsIGhlaWdodDogMzAwLCBrZWVwQXNwZWN0UmF0aW86IHRydWUsIHNhdmVUb0dhbGxlcnk6IHRoaXMuc2F2ZVRvR2FsbGVyeSB9KVxuICAgICAgICAgICAgLnRoZW4oKGltYWdlQXNzZXQ6IGFueSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmFJbWFnZSA9IGltYWdlQXNzZXQ7XG4gICAgICAgICAgICAgICAgdGhpcy5tanZlcnMuZmluZCggdXNlciA9PiB1c2VyLmlkID09PSBpZCkuY3VzdG9tSW1hZ2UgPSBpbWFnZUFzc2V0O1xuICAgICAgICAgICAgICAgIGltYWdlQXNzZXQuZ2V0SW1hZ2VBc3luYyhmdW5jdGlvbiAobmF0aXZlSW1hZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjYWxlID0gMTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhlaWdodCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGxldCB3aWR0aCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZUFzc2V0LmFuZHJvaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY3VycmVudCBkZW5zaXR5IG9mIHRoZSBzY3JlZW4gKGRwaSkgYW5kIGRpdmlkZSBpdCBieSB0aGUgZGVmYXVsdCBvbmUgdG8gZ2V0IHRoZSBzY2FsZVxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGUgPSBuYXRpdmVJbWFnZS5nZXREZW5zaXR5KCkgLyBpbWFnZUFzc2V0LmFuZHJvaWQudXRpbC5EaXNwbGF5TWV0cmljcy5ERU5TSVRZX0RFRkFVTFQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSBpbWFnZUFzc2V0Lm9wdGlvbnMuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSBpbWFnZUFzc2V0Lm9wdGlvbnMud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZSA9IG5hdGl2ZUltYWdlLnNjYWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSBuYXRpdmVJbWFnZS5zaXplLndpZHRoICogc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSBuYXRpdmVJbWFnZS5zaXplLmhlaWdodCAqIHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBEaXNwbGF5ZWQgU2l6ZTogJHt3aWR0aH14JHtoZWlnaHR9IHdpdGggc2NhbGUgJHtzY2FsZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEltYWdlIFNpemU6ICR7d2lkdGggLyBzY2FsZX14JHtoZWlnaHQgLyBzY2FsZX1gKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==