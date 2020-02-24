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
        if (this.currentDay === weekDay.day) {
            weekDay.day = weekDay.day + "" + this.count + "";
            this.count++;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUNvQjtBQUd0RSxJQUFNLFdBQVcsR0FBRyxtQkFBTyxDQUFDLGlFQUFjLENBQUMsQ0FBQztBQVE1QztJQUdJO1FBRUEsZUFBVSxHQUFHLFNBQVMsQ0FBQztRQUN2QixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBV2xCLFdBQU0sR0FBdUc7WUFDekcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLDhFQUE4RSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO1lBQ2xLLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSw2REFBNkQsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFHLE1BQU0sRUFBRSxJQUFJLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtZQUNsSixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUscUdBQXFHLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRyxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7WUFDOUwsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLDhHQUE4RyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUcsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO1lBQ25NLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxtRUFBbUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFHLE1BQU0sRUFBRSxJQUFJ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QyxNQUFNLEdBQUcsS0FBSyxDQUFDO2lCQUM1QztnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFtQixLQUFLLFNBQUksTUFBTSxvQkFBZSxLQUFPLENBQUMsQ0FBQztnQkFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBZSxLQUFLLEdBQUcsS0FBSyxTQUFJLE1BQU0sR0FBRyxLQUFPLENBQUMsQ0FBQztZQUNsRSxDQUFDLENBQUMsQ0FBQztRQUVQLENBQUMsRUFBRSxVQUFDLEtBQUs7WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUF0R1EsYUFBYTtRQU56QiwrREFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFFaEIsb0ZBQW9DOztTQUV2QyxDQUFDOztPQUNXLGFBQWEsQ0F5R3pCO0lBQUQsb0JBQUM7Q0FBQTtBQXpHeUIiLCJmaWxlIjoiMC5lYzAwMjBjMGI1M2IxNGFlNzgxZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgdGFrZVBpY3R1cmUsIHJlcXVlc3RQZXJtaXNzaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1jYW1lcmEnO1xuaW1wb3J0IHsgSW1hZ2VBc3NldCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvaW1hZ2UtYXNzZXQnO1xuaW1wb3J0IHtBbmltYXRpb25DdXJ2ZX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZW51bXNcIjtcbmNvbnN0IGltYWdlU291cmNlID0gcmVxdWlyZShcImltYWdlLXNvdXJjZVwiKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuICAgIGJ1dHRvblRleHQgPSBcIlNodWZmbGVcIjtcbiAgICBwcm9jZXNzaW5nID0gdHJ1ZTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zaHVmZmxlKCk7XG4gICAgfVxuXG4gICAgb25CdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQnV0dG9uIHdhcyBwcmVzc2VkXCIpO1xuICAgIH1cblxuXG5cbiAgICBtanZlcnM6IHsgaWQ6IG51bWJlciwgbmFtZTogc3RyaW5nLCBpbWFnZVNyYzogc3RyaW5nLCBjdXN0b21JbWFnZTogYW55LCBzdGF0dXM6IGJvb2xlYW4sIGZyZWVEYXk6IG51bGwgfVtdID0gW1xuICAgICAgICB7IGlkOiAxLCBuYW1lOiBcIk1hcmlhXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy9mZi9kZC82MC9mZmRkNjAwYTE2NzA0MDkyNzllMmViM2NlZTQxNDgyMi5qcGdcIiwgY3VzdG9tSW1hZ2U6IG51bGwsIHN0YXR1czogdHJ1ZSwgZnJlZURheTogbnVsbCB9LFxuICAgICAgICB7IGlkOiAyLCBuYW1lOiBcIkRhbmllbFwiLCBpbWFnZVNyYzogXCJodHRwczovL2Rpc2Vub3dlYmFrdXMubmV0L2ltYWdlbmVzL2FydGljdWxvcy9zdGV2ZS1qb2JzLmpwZ1wiLCBjdXN0b21JbWFnZTogbnVsbCwgIHN0YXR1czogdHJ1ZSxmcmVlRGF5OiBudWxsIH0sXG4gICAgICAgIHsgaWQ6IDMsIG5hbWU6IFwiSmhlbm55ZmVyXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vd3d3LmVjb3BldGl0LmNhdC93cGljL21waWMvOC04NTY3MV9waWthY2h1LXdhbGxwYXBlci1oZC1mcmVlLWN1dGUtcGlrYWNodS13YWxscGFwZXJzLWhkLmpwZ1wiLCBjdXN0b21JbWFnZTogbnVsbCwgIHN0YXR1czogdHJ1ZSwgZnJlZURheTogbnVsbCB9LFxuICAgICAgICB7IGlkOiA0LCBuYW1lOiBcIkthcm9sXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vd3d3Lml0bC5jYXQvcG5nZmlsZS9iaWcvMjAwLTIwMDU1ODFfcGFuZGEtd2FsbHBhcGVyLWhkLWhkLXdhbGxwYXBlcm1vbmtleS1wYW5kYS13YWxscGFwZXJzLXBhbmRhLmpwZ1wiLCBjdXN0b21JbWFnZTogbnVsbCwgIHN0YXR1czogdHJ1ZSwgZnJlZURheTogbnVsbCB9LFxuICAgICAgICB7IGlkOiA1LCBuYW1lOiBcIkVkd2luXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vZDJnZzlldmg0N2ZuOXouY2xvdWRmcm9udC5uZXQvODAwcHhfQ09MT1VSQk9YMzAwMDc4NDMuanBnXCIsIGN1c3RvbUltYWdlOiBudWxsLCAgc3RhdHVzOiB0cnVlLCBmcmVlRGF5OiBudWxsIH0sXG4gICAgICAgIHsgaWQ6IDYsIG5hbWU6IFwiQ3Jpc3RpYW5cIiwgaW1hZ2VTcmM6IFwiaHR0cHM6Ly93d3cubWV0YWxzdWNrcy5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDkvQ1VCTE9UVy0wOV8yNV8yMDE5LmpwZ1wiLCBjdXN0b21JbWFnZTogbnVsbCwgIHN0YXR1czogdHJ1ZSwgZnJlZURheTogbnVsbCB9LFxuICAgICAgICB7IGlkOiA3LCBuYW1lOiBcIlBldGVyXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vcHVscGZpY3Rpb25jaW5lLmNvbS9kb3dubG9hZC9tdWx0aW1lZGlhLm5vcm1hbC45ZWQ5MTAwZDBlMWQ5M2YxLjYyNjU3MjczNjU3MjZiMmQ1ZjZlNmY3MjZkNjE2YzJlNmE3MDY3LmpwZ1wiLCBjdXN0b21JbWFnZTogbnVsbCwgIHN0YXR1czogdHJ1ZSwgZnJlZURheTogbnVsbCB9LFxuICAgICAgICB7IGlkOiA3LCBuYW1lOiBcIkNhdGFsaW5hXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vaS5zdGFjay5pbWd1ci5jb20vMmUyU3cuanBnXCIsIGN1c3RvbUltYWdlOiBudWxsLCAgc3RhdHVzOiB0cnVlLCBmcmVlRGF5OiBudWxsIH0sXG4gICAgXTtcbiAgICBkYXlzOiB7IGRheTogc3RyaW5nIH1bXSA9IFtcbiAgICAgICAgLy97IGRheTogXCJMVU5FU1wiIH0sXG4gICAgICAgIHsgZGF5OiBcIk1BUlRFU1wiLCB9LFxuICAgICAgICB7IGRheTogXCJNSUVSQ09MRVNcIiwgfSxcbiAgICAgICAgeyBkYXk6IFwiSlVFVkVTXCIsIH0sXG4gICAgICAgIC8veyBkYXk6IFwiVklFUk5FU1wiLCB9LFxuICAgIF07XG5cblxuXG4gICAgc2h1ZmZsZSgpIHtcblxuICAgICAgICB2YXIgY3VycmVudEluZGV4ID0gdGhpcy5tanZlcnMubGVuZ3RoLCB0ZW1wb3JhcnlWYWx1ZSwgcmFuZG9tSW5kZXg7XG5cbiAgICAgICAgd2hpbGUgKDAgIT09IGN1cnJlbnRJbmRleCkge1xuICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgY3VycmVudEluZGV4IC09IDE7XG4gICAgICAgICAgICB0ZW1wb3JhcnlWYWx1ZSA9IHRoaXMubWp2ZXJzW2N1cnJlbnRJbmRleF07XG4gICAgICAgICAgICB0aGlzLm1qdmVyc1tjdXJyZW50SW5kZXhdID0gdGhpcy5tanZlcnNbcmFuZG9tSW5kZXhdO1xuICAgICAgICAgICAgdGVtcG9yYXJ5VmFsdWUuZnJlZURheSA9IHRoaXMuc2VsZWN0UmFuZG9tRGF5KCk7XG4gICAgICAgICAgICB0aGlzLm1qdmVyc1tyYW5kb21JbmRleF0gPSB0ZW1wb3JhcnlWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tanZlcnM7XG4gICAgfVxuXG4gICAgY3VycmVudERheTogc3RyaW5nO1xuICAgIGNvdW50IDogMTtcbiAgICBzZWxlY3RSYW5kb21EYXkoKSB7XG4gICAgICAgIGNvbnN0IHdlZWtEYXkgPSB0aGlzLmRheXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5kYXlzLmxlbmd0aCldO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50RGF5ID09PSB3ZWVrRGF5LmRheSkge1xuICAgICAgICAgICAgd2Vla0RheS5kYXkgPSB3ZWVrRGF5LmRheSArIFwiXCIgK3RoaXMuY291bnQgKyBcIlwiO1xuICAgICAgICAgICAgdGhpcy5jb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudERheT0gd2Vla0RheS5kYXk7XG4gICAgICAgIHJldHVybiB3ZWVrRGF5LmRheTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2F2ZVRvR2FsbGVyeTogYm9vbGVhbiA9IHRydWU7XG4gICAgcHVibGljIGNhbWVyYUltYWdlOiBJbWFnZUFzc2V0O1xuXG4gICAgb25UYWtlUGljdHVyZVRhcChhcmdzLCBpZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhpZCk7XG4gICAgICAgIHJlcXVlc3RQZXJtaXNzaW9ucygpLnRoZW4oXG4gICAgICAgICAgICAoKSA9PiB0aGlzLmNhcHR1cmUoaWQpLFxuICAgICAgICAgICAgKCkgPT4gYWxlcnQoJ3Blcm1pc3Npb25zIHJlamVjdGVkJylcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjYXB0dXJlKGlkKSB7XG4gICAgICAgIHRha2VQaWN0dXJlKHsgd2lkdGg6IDI1MCwgaGVpZ2h0OiAzMDAsIGtlZXBBc3BlY3RSYXRpbzogdHJ1ZSwgc2F2ZVRvR2FsbGVyeTogdGhpcy5zYXZlVG9HYWxsZXJ5IH0pXG4gICAgICAgICAgICAudGhlbigoaW1hZ2VBc3NldDogYW55KSA9PiB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYUltYWdlID0gaW1hZ2VBc3NldDtcbiAgICAgICAgICAgICAgICB0aGlzLm1qdmVycy5maW5kKCB1c2VyID0+IHVzZXIuaWQgPT09IGlkKS5jdXN0b21JbWFnZSA9IGltYWdlQXNzZXQ7XG4gICAgICAgICAgICAgICAgaW1hZ2VBc3NldC5nZXRJbWFnZUFzeW5jKGZ1bmN0aW9uIChuYXRpdmVJbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2NhbGUgPSAxO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaGVpZ2h0ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHdpZHRoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlQXNzZXQuYW5kcm9pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IGRlbnNpdHkgb2YgdGhlIHNjcmVlbiAoZHBpKSBhbmQgZGl2aWRlIGl0IGJ5IHRoZSBkZWZhdWx0IG9uZSB0byBnZXQgdGhlIHNjYWxlXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZSA9IG5hdGl2ZUltYWdlLmdldERlbnNpdHkoKSAvIGltYWdlQXNzZXQuYW5kcm9pZC51dGlsLkRpc3BsYXlNZXRyaWNzLkRFTlNJVFlfREVGQVVMVDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IGltYWdlQXNzZXQub3B0aW9ucy5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IGltYWdlQXNzZXQub3B0aW9ucy53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlID0gbmF0aXZlSW1hZ2Uuc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IG5hdGl2ZUltYWdlLnNpemUud2lkdGggKiBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IG5hdGl2ZUltYWdlLnNpemUuaGVpZ2h0ICogc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYERpc3BsYXllZCBTaXplOiAke3dpZHRofXgke2hlaWdodH0gd2l0aCBzY2FsZSAke3NjYWxlfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgSW1hZ2UgU2l6ZTogJHt3aWR0aCAvIHNjYWxlfXgke2hlaWdodCAvIHNjYWxlfWApO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9