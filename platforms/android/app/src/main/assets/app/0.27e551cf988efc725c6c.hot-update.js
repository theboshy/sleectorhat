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
            weekDay.day + "2";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUNvQjtBQUd0RSxJQUFNLFdBQVcsR0FBRyxtQkFBTyxDQUFDLGlFQUFjLENBQUMsQ0FBQztBQVE1QztJQUdJO1FBRUEsZUFBVSxHQUFHLFNBQVMsQ0FBQztRQUN2QixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBV2xCLFdBQU0sR0FBd0Y7WUFDMUYsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLDhFQUE4RSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUNuSixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsNkRBQTZELEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRyxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ3BJLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxxR0FBcUcsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFHLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDL0ssRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLDhHQUE4RyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUcsTUFBTSxFQUFFLElBQUksRUFBRTtZQUNwTCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsbUVBQW1FLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRyxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ3pJLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSw4RUFBOEUsRUFBRSxX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O0lBQ1gsQ0FBQztJQXhHUSxhQUFhO1FBTnpCLCtEQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUVoQixvRkFBb0M7O1NBRXZDLENBQUM7O09BQ1csYUFBYSxDQTJHekI7SUFBRCxvQkFBQztDQUFBO0FBM0d5QiIsImZpbGUiOiIwLjI3ZTU1MWNmOTg4ZWZjNzI1YzZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyB0YWtlUGljdHVyZSwgcmVxdWVzdFBlcm1pc3Npb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWNhbWVyYSc7XG5pbXBvcnQgeyBJbWFnZUFzc2V0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1hc3NldCc7XG5pbXBvcnQge0FuaW1hdGlvbkN1cnZlfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9lbnVtc1wiO1xuY29uc3QgaW1hZ2VTb3VyY2UgPSByZXF1aXJlKFwiaW1hZ2Utc291cmNlXCIpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vaG9tZS5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG4gICAgYnV0dG9uVGV4dCA9IFwiU2h1ZmZsZVwiO1xuICAgIHByb2Nlc3NpbmcgPSB0cnVlO1xuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNodWZmbGUoKTtcbiAgICB9XG5cbiAgICBvbkJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJCdXR0b24gd2FzIHByZXNzZWRcIik7XG4gICAgfVxuXG5cblxuICAgIG1qdmVyczogeyBpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIGltYWdlU3JjOiBzdHJpbmcsIGN1c3RvbUltYWdlOiBhbnksIHN0YXR1czogYm9vbGVhbiB9W10gPSBbXG4gICAgICAgIHsgaWQ6IDEsIG5hbWU6IFwiTWFyaWFcIiwgaW1hZ2VTcmM6IFwiaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzL2ZmL2RkLzYwL2ZmZGQ2MDBhMTY3MDQwOTI3OWUyZWIzY2VlNDE0ODIyLmpwZ1wiLCBjdXN0b21JbWFnZTogbnVsbCwgc3RhdHVzOiB0cnVlIH0sXG4gICAgICAgIHsgaWQ6IDIsIG5hbWU6IFwiRGFuaWVsXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vZGlzZW5vd2ViYWt1cy5uZXQvaW1hZ2VuZXMvYXJ0aWN1bG9zL3N0ZXZlLWpvYnMuanBnXCIsIGN1c3RvbUltYWdlOiBudWxsLCAgc3RhdHVzOiB0cnVlIH0sXG4gICAgICAgIHsgaWQ6IDMsIG5hbWU6IFwiSmhlbm55ZmVyXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vd3d3LmVjb3BldGl0LmNhdC93cGljL21waWMvOC04NTY3MV9waWthY2h1LXdhbGxwYXBlci1oZC1mcmVlLWN1dGUtcGlrYWNodS13YWxscGFwZXJzLWhkLmpwZ1wiLCBjdXN0b21JbWFnZTogbnVsbCwgIHN0YXR1czogdHJ1ZSB9LFxuICAgICAgICB7IGlkOiA0LCBuYW1lOiBcIkthcm9sXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vd3d3Lml0bC5jYXQvcG5nZmlsZS9iaWcvMjAwLTIwMDU1ODFfcGFuZGEtd2FsbHBhcGVyLWhkLWhkLXdhbGxwYXBlcm1vbmtleS1wYW5kYS13YWxscGFwZXJzLXBhbmRhLmpwZ1wiLCBjdXN0b21JbWFnZTogbnVsbCwgIHN0YXR1czogdHJ1ZSB9LFxuICAgICAgICB7IGlkOiA1LCBuYW1lOiBcIkVkd2luXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vZDJnZzlldmg0N2ZuOXouY2xvdWRmcm9udC5uZXQvODAwcHhfQ09MT1VSQk9YMzAwMDc4NDMuanBnXCIsIGN1c3RvbUltYWdlOiBudWxsLCAgc3RhdHVzOiB0cnVlIH0sXG4gICAgICAgIHsgaWQ6IDYsIG5hbWU6IFwiQ3Jpc3RpYW5cIiwgaW1hZ2VTcmM6IFwiaHR0cHM6Ly93d3cubWV0YWxzdWNrcy5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDkvQ1VCTE9UVy0wOV8yNV8yMDE5LmpwZ1wiLCBjdXN0b21JbWFnZTogbnVsbCwgIHN0YXR1czogdHJ1ZSB9LFxuICAgICAgICB7IGlkOiA3LCBuYW1lOiBcIlBldGVyXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vcHVscGZpY3Rpb25jaW5lLmNvbS9kb3dubG9hZC9tdWx0aW1lZGlhLm5vcm1hbC45ZWQ5MTAwZDBlMWQ5M2YxLjYyNjU3MjczNjU3MjZiMmQ1ZjZlNmY3MjZkNjE2YzJlNmE3MDY3LmpwZ1wiLCBjdXN0b21JbWFnZTogbnVsbCwgIHN0YXR1czogdHJ1ZSB9LFxuICAgICAgICB7IGlkOiA3LCBuYW1lOiBcIkNhdGFsaW5hXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vaS5zdGFjay5pbWd1ci5jb20vMmUyU3cuanBnXCIsIGN1c3RvbUltYWdlOiBudWxsLCAgc3RhdHVzOiB0cnVlIH0sXG4gICAgXTtcbiAgICBkYXlzOiB7IGRheTogc3RyaW5nIH1bXSA9IFtcbiAgICAgICAgLy97IGRheTogXCJMVU5FU1wiIH0sXG4gICAgICAgIHsgZGF5OiBcIk1BUlRFU1wiLCB9LFxuICAgICAgICB7IGRheTogXCJNSUVSQ09MRVNcIiwgfSxcbiAgICAgICAgeyBkYXk6IFwiSlVFVkVTXCIsIH0sXG4gICAgICAgIC8veyBkYXk6IFwiVklFUk5FU1wiLCB9LFxuICAgIF07XG5cblxuXG4gICAgc2h1ZmZsZSgpIHtcblxuICAgICAgICB2YXIgY3VycmVudEluZGV4ID0gdGhpcy5tanZlcnMubGVuZ3RoLCB0ZW1wb3JhcnlWYWx1ZSwgcmFuZG9tSW5kZXg7XG5cbiAgICAgICAgd2hpbGUgKDAgIT09IGN1cnJlbnRJbmRleCkge1xuXG5cbiAgICAgICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCAtPSAxO1xuXG5cbiAgICAgICAgICAgIHRlbXBvcmFyeVZhbHVlID0gdGhpcy5tanZlcnNbY3VycmVudEluZGV4XTtcbiAgICAgICAgICAgIHRoaXMubWp2ZXJzW2N1cnJlbnRJbmRleF0gPSB0aGlzLm1qdmVyc1tyYW5kb21JbmRleF07XG4gICAgICAgICAgICB0aGlzLm1qdmVyc1tyYW5kb21JbmRleF0gPSB0ZW1wb3JhcnlWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLm1qdmVycztcbiAgICB9XG5cbiAgICBjdXJyZW50RGF5OiBzdHJpbmc7XG4gICAgc2VsZWN0UmFuZG9tRGF5KCkge1xuICAgICAgICBjb25zdCB3ZWVrRGF5ID0gdGhpcy5kYXlzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuZGF5cy5sZW5ndGgpXTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudERheSA9PT0gd2Vla0RheS5kYXkpe1xuICAgICAgICAgICAgd2Vla0RheS5kYXkgKyBcIjJcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnREYXkgPSB3ZWVrRGF5LmRheTtcbiAgICAgICAgcmV0dXJuIHdlZWtEYXkuZGF5O1xuICAgIH1cblxuICAgIHB1YmxpYyBzYXZlVG9HYWxsZXJ5OiBib29sZWFuID0gdHJ1ZTtcbiAgICBwdWJsaWMgY2FtZXJhSW1hZ2U6IEltYWdlQXNzZXQ7XG5cbiAgICBvblRha2VQaWN0dXJlVGFwKGFyZ3MsIGlkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGlkKTtcbiAgICAgICAgcmVxdWVzdFBlcm1pc3Npb25zKCkudGhlbihcbiAgICAgICAgICAgICgpID0+IHRoaXMuY2FwdHVyZShpZCksXG4gICAgICAgICAgICAoKSA9PiBhbGVydCgncGVybWlzc2lvbnMgcmVqZWN0ZWQnKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNhcHR1cmUoaWQpIHtcbiAgICAgICAgdGFrZVBpY3R1cmUoeyB3aWR0aDogMjUwLCBoZWlnaHQ6IDMwMCwga2VlcEFzcGVjdFJhdGlvOiB0cnVlLCBzYXZlVG9HYWxsZXJ5OiB0aGlzLnNhdmVUb0dhbGxlcnkgfSlcbiAgICAgICAgICAgIC50aGVuKChpbWFnZUFzc2V0OiBhbnkpID0+IHtcblxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhSW1hZ2UgPSBpbWFnZUFzc2V0O1xuICAgICAgICAgICAgICAgIHRoaXMubWp2ZXJzLmZpbmQoIHVzZXIgPT4gdXNlci5pZCA9PT0gaWQpLmN1c3RvbUltYWdlID0gaW1hZ2VBc3NldDtcbiAgICAgICAgICAgICAgICBpbWFnZUFzc2V0LmdldEltYWdlQXN5bmMoZnVuY3Rpb24gKG5hdGl2ZUltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY2FsZSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGxldCBoZWlnaHQgPSAwO1xuICAgICAgICAgICAgICAgICAgICBsZXQgd2lkdGggPSAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VBc3NldC5hbmRyb2lkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGN1cnJlbnQgZGVuc2l0eSBvZiB0aGUgc2NyZWVuIChkcGkpIGFuZCBkaXZpZGUgaXQgYnkgdGhlIGRlZmF1bHQgb25lIHRvIGdldCB0aGUgc2NhbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlID0gbmF0aXZlSW1hZ2UuZ2V0RGVuc2l0eSgpIC8gaW1hZ2VBc3NldC5hbmRyb2lkLnV0aWwuRGlzcGxheU1ldHJpY3MuREVOU0lUWV9ERUZBVUxUO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gaW1hZ2VBc3NldC5vcHRpb25zLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0gaW1hZ2VBc3NldC5vcHRpb25zLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGUgPSBuYXRpdmVJbWFnZS5zY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0gbmF0aXZlSW1hZ2Uuc2l6ZS53aWR0aCAqIHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gbmF0aXZlSW1hZ2Uuc2l6ZS5oZWlnaHQgKiBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRGlzcGxheWVkIFNpemU6ICR7d2lkdGh9eCR7aGVpZ2h0fSB3aXRoIHNjYWxlICR7c2NhbGV9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBJbWFnZSBTaXplOiAke3dpZHRoIC8gc2NhbGV9eCR7aGVpZ2h0IC8gc2NhbGV9YCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=