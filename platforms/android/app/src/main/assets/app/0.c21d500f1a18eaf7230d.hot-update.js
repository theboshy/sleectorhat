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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUNvQjtBQUd0RSxJQUFNLFdBQVcsR0FBRyxtQkFBTyxDQUFDLGlFQUFjLENBQUMsQ0FBQztBQVE1QztJQUdJO1FBRUEsZUFBVSxHQUFHLFNBQVMsQ0FBQztRQUN2QixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBV2xCLFdBQU0sR0FBdUc7WUFDekcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLDhFQUE4RSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO1lBQ2xLLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSw2REFBNkQsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFHLE1BQU0sRUFBRSxJQUFJLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtZQUNsSixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUscUdBQXFHLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRyxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7WUFDOUwsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLDhHQUE4RyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUcsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO1lBQ25NLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxtRUFBbUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFHLE1BQU0sRUFBRSxJQUFJ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QUs7WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUEvRlEsYUFBYTtRQU56QiwrREFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFFaEIsb0ZBQW9DOztTQUV2QyxDQUFDOztPQUNXLGFBQWEsQ0FrR3pCO0lBQUQsb0JBQUM7Q0FBQTtBQWxHeUIiLCJmaWxlIjoiMC5jMjFkNTAwZjFhMThlYWY3MjMwZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgdGFrZVBpY3R1cmUsIHJlcXVlc3RQZXJtaXNzaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1jYW1lcmEnO1xuaW1wb3J0IHsgSW1hZ2VBc3NldCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvaW1hZ2UtYXNzZXQnO1xuaW1wb3J0IHtBbmltYXRpb25DdXJ2ZX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZW51bXNcIjtcbmNvbnN0IGltYWdlU291cmNlID0gcmVxdWlyZShcImltYWdlLXNvdXJjZVwiKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuICAgIGJ1dHRvblRleHQgPSBcIlNodWZmbGVcIjtcbiAgICBwcm9jZXNzaW5nID0gdHJ1ZTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zaHVmZmxlKCk7XG4gICAgfVxuXG4gICAgb25CdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQnV0dG9uIHdhcyBwcmVzc2VkXCIpO1xuICAgIH1cblxuXG5cbiAgICBtanZlcnM6IHsgaWQ6IG51bWJlciwgbmFtZTogc3RyaW5nLCBpbWFnZVNyYzogc3RyaW5nLCBjdXN0b21JbWFnZTogYW55LCBzdGF0dXM6IGJvb2xlYW4sIGZyZWVEYXk6IG51bGwgfVtdID0gW1xuICAgICAgICB7IGlkOiAxLCBuYW1lOiBcIk1hcmlhXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy9mZi9kZC82MC9mZmRkNjAwYTE2NzA0MDkyNzllMmViM2NlZTQxNDgyMi5qcGdcIiwgY3VzdG9tSW1hZ2U6IG51bGwsIHN0YXR1czogdHJ1ZSwgZnJlZURheTogbnVsbCB9LFxuICAgICAgICB7IGlkOiAyLCBuYW1lOiBcIkRhbmllbFwiLCBpbWFnZVNyYzogXCJodHRwczovL2Rpc2Vub3dlYmFrdXMubmV0L2ltYWdlbmVzL2FydGljdWxvcy9zdGV2ZS1qb2JzLmpwZ1wiLCBjdXN0b21JbWFnZTogbnVsbCwgIHN0YXR1czogdHJ1ZSxmcmVlRGF5OiBudWxsIH0sXG4gICAgICAgIHsgaWQ6IDMsIG5hbWU6IFwiSmhlbm55ZmVyXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vd3d3LmVjb3BldGl0LmNhdC93cGljL21waWMvOC04NTY3MV9waWthY2h1LXdhbGxwYXBlci1oZC1mcmVlLWN1dGUtcGlrYWNodS13YWxscGFwZXJzLWhkLmpwZ1wiLCBjdXN0b21JbWFnZTogbnVsbCwgIHN0YXR1czogdHJ1ZSwgZnJlZURheTogbnVsbCB9LFxuICAgICAgICB7IGlkOiA0LCBuYW1lOiBcIkthcm9sXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vd3d3Lml0bC5jYXQvcG5nZmlsZS9iaWcvMjAwLTIwMDU1ODFfcGFuZGEtd2FsbHBhcGVyLWhkLWhkLXdhbGxwYXBlcm1vbmtleS1wYW5kYS13YWxscGFwZXJzLXBhbmRhLmpwZ1wiLCBjdXN0b21JbWFnZTogbnVsbCwgIHN0YXR1czogdHJ1ZSwgZnJlZURheTogbnVsbCB9LFxuICAgICAgICB7IGlkOiA1LCBuYW1lOiBcIkVkd2luXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vZDJnZzlldmg0N2ZuOXouY2xvdWRmcm9udC5uZXQvODAwcHhfQ09MT1VSQk9YMzAwMDc4NDMuanBnXCIsIGN1c3RvbUltYWdlOiBudWxsLCAgc3RhdHVzOiB0cnVlLCBmcmVlRGF5OiBudWxsIH0sXG4gICAgICAgIHsgaWQ6IDYsIG5hbWU6IFwiQ3Jpc3RpYW5cIiwgaW1hZ2VTcmM6IFwiaHR0cHM6Ly93d3cubWV0YWxzdWNrcy5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDkvQ1VCTE9UVy0wOV8yNV8yMDE5LmpwZ1wiLCBjdXN0b21JbWFnZTogbnVsbCwgIHN0YXR1czogdHJ1ZSwgZnJlZURheTogbnVsbCB9LFxuICAgICAgICB7IGlkOiA3LCBuYW1lOiBcIlBldGVyXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vcHVscGZpY3Rpb25jaW5lLmNvbS9kb3dubG9hZC9tdWx0aW1lZGlhLm5vcm1hbC45ZWQ5MTAwZDBlMWQ5M2YxLjYyNjU3MjczNjU3MjZiMmQ1ZjZlNmY3MjZkNjE2YzJlNmE3MDY3LmpwZ1wiLCBjdXN0b21JbWFnZTogbnVsbCwgIHN0YXR1czogdHJ1ZSwgZnJlZURheTogbnVsbCB9LFxuICAgICAgICB7IGlkOiA3LCBuYW1lOiBcIkNhdGFsaW5hXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vaS5zdGFjay5pbWd1ci5jb20vMmUyU3cuanBnXCIsIGN1c3RvbUltYWdlOiBudWxsLCAgc3RhdHVzOiB0cnVlLCBmcmVlRGF5OiBudWxsIH0sXG4gICAgXTtcbiAgICBkYXlzOiB7IGRheTogc3RyaW5nIH1bXSA9IFtcbiAgICAgICAgLy97IGRheTogXCJMVU5FU1wiIH0sXG4gICAgICAgIHsgZGF5OiBcIk1BUlRFU1wiLCB9LFxuICAgICAgICB7IGRheTogXCJNSUVSQ09MRVNcIiwgfSxcbiAgICAgICAgeyBkYXk6IFwiSlVFVkVTXCIsIH0sXG4gICAgICAgIC8veyBkYXk6IFwiVklFUk5FU1wiLCB9LFxuICAgIF07XG5cblxuXG4gICAgc2h1ZmZsZSgpIHtcblxuICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gdGhpcy5tanZlcnMubGVuZ3RoLCB0ZW1wb3JhcnlWYWx1ZSwgcmFuZG9tSW5kZXg7XG5cbiAgICAgICAgd2hpbGUgKDAgIT09IGN1cnJlbnRJbmRleCkge1xuICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgY3VycmVudEluZGV4IC09IDE7XG4gICAgICAgICAgICB0ZW1wb3JhcnlWYWx1ZSA9IHRoaXMubWp2ZXJzW2N1cnJlbnRJbmRleF07XG4gICAgICAgICAgICB0aGlzLm1qdmVyc1tjdXJyZW50SW5kZXhdID0gdGhpcy5tanZlcnNbcmFuZG9tSW5kZXhdO1xuICAgICAgICAgICAgdGVtcG9yYXJ5VmFsdWUuZnJlZURheSA9IHRoaXMuc2VsZWN0UmFuZG9tRGF5KCk7XG4gICAgICAgICAgICB0aGlzLm1qdmVyc1tyYW5kb21JbmRleF0gPSB0ZW1wb3JhcnlWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tanZlcnM7XG4gICAgfVxuXG4gICAgc2VsZWN0UmFuZG9tRGF5KCkge1xuICAgICAgICBjb25zdCB3ZWVrRGF5ID0gdGhpcy5kYXlzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuZGF5cy5sZW5ndGgpXTtcbiAgICAgICAgcmV0dXJuIHdlZWtEYXkuZGF5O1xuICAgIH1cblxuICAgIHB1YmxpYyBzYXZlVG9HYWxsZXJ5OiBib29sZWFuID0gdHJ1ZTtcbiAgICBwdWJsaWMgY2FtZXJhSW1hZ2U6IEltYWdlQXNzZXQ7XG5cbiAgICBvblRha2VQaWN0dXJlVGFwKGFyZ3MsIGlkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGlkKTtcbiAgICAgICAgcmVxdWVzdFBlcm1pc3Npb25zKCkudGhlbihcbiAgICAgICAgICAgICgpID0+IHRoaXMuY2FwdHVyZShpZCksXG4gICAgICAgICAgICAoKSA9PiBhbGVydCgncGVybWlzc2lvbnMgcmVqZWN0ZWQnKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNhcHR1cmUoaWQpIHtcbiAgICAgICAgdGFrZVBpY3R1cmUoeyB3aWR0aDogMjUwLCBoZWlnaHQ6IDMwMCwga2VlcEFzcGVjdFJhdGlvOiB0cnVlLCBzYXZlVG9HYWxsZXJ5OiB0aGlzLnNhdmVUb0dhbGxlcnkgfSlcbiAgICAgICAgICAgIC50aGVuKChpbWFnZUFzc2V0OiBhbnkpID0+IHtcblxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhSW1hZ2UgPSBpbWFnZUFzc2V0O1xuICAgICAgICAgICAgICAgIHRoaXMubWp2ZXJzLmZpbmQoIHVzZXIgPT4gdXNlci5pZCA9PT0gaWQpLmN1c3RvbUltYWdlID0gaW1hZ2VBc3NldDtcbiAgICAgICAgICAgICAgICBpbWFnZUFzc2V0LmdldEltYWdlQXN5bmMoZnVuY3Rpb24gKG5hdGl2ZUltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY2FsZSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGxldCBoZWlnaHQgPSAwO1xuICAgICAgICAgICAgICAgICAgICBsZXQgd2lkdGggPSAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VBc3NldC5hbmRyb2lkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGN1cnJlbnQgZGVuc2l0eSBvZiB0aGUgc2NyZWVuIChkcGkpIGFuZCBkaXZpZGUgaXQgYnkgdGhlIGRlZmF1bHQgb25lIHRvIGdldCB0aGUgc2NhbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlID0gbmF0aXZlSW1hZ2UuZ2V0RGVuc2l0eSgpIC8gaW1hZ2VBc3NldC5hbmRyb2lkLnV0aWwuRGlzcGxheU1ldHJpY3MuREVOU0lUWV9ERUZBVUxUO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gaW1hZ2VBc3NldC5vcHRpb25zLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0gaW1hZ2VBc3NldC5vcHRpb25zLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGUgPSBuYXRpdmVJbWFnZS5zY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0gbmF0aXZlSW1hZ2Uuc2l6ZS53aWR0aCAqIHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gbmF0aXZlSW1hZ2Uuc2l6ZS5oZWlnaHQgKiBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRGlzcGxheWVkIFNpemU6ICR7d2lkdGh9eCR7aGVpZ2h0fSB3aXRoIHNjYWxlICR7c2NhbGV9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBJbWFnZSBTaXplOiAke3dpZHRoIC8gc2NhbGV9eCR7aGVpZ2h0IC8gc2NhbGV9YCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=