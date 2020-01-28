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
        ];
        this.days = [
            { day: "LUNES" },
            { day: "MARTES", },
            { day: "MIERCOLES", },
            { day: "JUEVES", },
            { day: "VIERNES", },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUNvQjtBQUd0RSxJQUFNLFdBQVcsR0FBRyxtQkFBTyxDQUFDLGlFQUFjLENBQUMsQ0FBQztBQVE1QztJQUdJO1FBRUEsZUFBVSxHQUFHLFNBQVMsQ0FBQztRQUN2QixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBV2xCLFdBQU0sR0FBd0Y7WUFDMUYsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLDhFQUE4RSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUNuSixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsNkRBQTZELEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRyxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ3BJLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxxR0FBcUcsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFHLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDL0ssRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLDhHQUE4RyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUcsTUFBTSxFQUFFLElBQUksRUFBRTtZQUNwTCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsbUVBQW1FLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRyxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ3pJLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSw4RUFBOEUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFHLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDdkosRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLG9IQUFvSCxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUcsTUFBTSxFQUFFLElBQUksRUFBRTtTQUM3TCxDQUFDO1FBRUYsU0FBSSxHQUFzQjtZQUN0QixFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUU7WUFDaEIsRUFBRSxHQUFHLEVBQUUsUUFBUSxHQUFHO1lBQ2xCLEVBQUUsR0FBRyxFQUFFLFdBQVcsR0FBRztZQUNyQixFQUFFLEdBQUcsRUFBRSxRQUFRLEdBQUc7WUFDbEIsRUFBRSxHQUFHLEVBQUUsU0FBUyxHQUFHO1NBQ3RCLENBQUM7UUE0Qkssa0JBQWEsR0FBWSxJQUFJLENBQUM7SUF6RHJDLENBQUM7SUFHRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxtQ0FBVyxHQUFYO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUF3QkQsK0JBQU8sR0FBUDtRQUVJLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLGNBQWMsRUFBRSxXQUFXLENBQUM7UUFFbkUsT0FBTyxDQUFDLEtBQUssWUFBWSxFQUFFO1lBR3ZCLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxZQUFZLENBQUMsQ0FBQztZQUN2RCxZQUFZLElBQUksQ0FBQyxDQUFDO1lBR2xCLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLGNBQWMsQ0FBQztTQUM3QztRQUVELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQsdUNBQWUsR0FBZjtRQUNJLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQztJQUN2QixDQUFDO0lBS0Qsd0NBQWdCLEdBQWhCLFVBQWlCLElBQUksRUFBRSxFQUFFO1FBQXpCLGlCQU1DO1FBTEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoQiw4RUFBa0IsRUFBRSxDQUFDLElBQUksQ0FDckIsY0FBTSxZQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFoQixDQUFnQixFQUN0QixjQUFNLFlBQUssQ0FBQyxzQkFBc0IsQ0FBQyxFQUE3QixDQUE2QixDQUN0QyxDQUFDO0lBQ04sQ0FBQztJQUVELCtCQUFPLEdBQVAsVUFBUSxFQUFFO1FBQVYsaUJBMEJDO1FBekJHLHVFQUFXLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQzdGLElBQUksQ0FBQyxVQUFDLFVBQWU7WUFDbEIsS0FBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7WUFDOUIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUUsVUFBQyxJQUFJLElBQUssV0FBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQWQsQ0FBYyxDQUFDLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztZQUNyRSxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsV0FBVztnQkFDMUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNkLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQ2QsSUFBSSxVQUFVLENBQUMsT0FBTyxFQUFFO29CQUNwQixnR0FBZ0c7b0JBQ2hHLEtBQUssR0FBRyxXQUFXLENBQUMsVUFBVSxFQUFFLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQztvQkFDMUYsTUFBTSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUNuQyxLQUFLLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7aUJBQ3BDO3FCQUFNO29CQUNILEtBQUssR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDO29CQUMxQixLQUFLLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO29CQUN2QyxNQUFNLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2lCQUM1QztnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFtQixLQUFLLFNBQUksTUFBTSxvQkFBZSxLQUFPLENBQUMsQ0FBQztnQkFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBZSxLQUFLLEdBQUcsS0FBSyxTQUFJLE1BQU0sR0FBRyxLQUFPLENBQUMsQ0FBQztZQUNsRSxDQUFDLENBQUMsQ0FBQztRQUVQLENBQUMsRUFBRSxVQUFDLEtBQUs7WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFsR1EsYUFBYTtRQU56QiwrREFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFFaEIsb0ZBQW9DOztTQUV2QyxDQUFDOztPQUNXLGFBQWEsQ0FxR3pCO0lBQUQsb0JBQUM7Q0FBQTtBQXJHeUIiLCJmaWxlIjoiMC5mOWVhZGZjMjJiZTcxZTA2M2U1ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgdGFrZVBpY3R1cmUsIHJlcXVlc3RQZXJtaXNzaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1jYW1lcmEnO1xuaW1wb3J0IHsgSW1hZ2VBc3NldCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvaW1hZ2UtYXNzZXQnO1xuaW1wb3J0IHtBbmltYXRpb25DdXJ2ZX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZW51bXNcIjtcbmNvbnN0IGltYWdlU291cmNlID0gcmVxdWlyZShcImltYWdlLXNvdXJjZVwiKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuICAgIGJ1dHRvblRleHQgPSBcIlNodWZmbGVcIjtcbiAgICBwcm9jZXNzaW5nID0gdHJ1ZTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zaHVmZmxlKCk7XG4gICAgfVxuXG4gICAgb25CdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQnV0dG9uIHdhcyBwcmVzc2VkXCIpO1xuICAgIH1cblxuXG5cbiAgICBtanZlcnM6IHsgaWQ6IG51bWJlciwgbmFtZTogc3RyaW5nLCBpbWFnZVNyYzogc3RyaW5nLCBjdXN0b21JbWFnZTogYW55LCBzdGF0dXM6IGJvb2xlYW4gfVtdID0gW1xuICAgICAgICB7IGlkOiAxLCBuYW1lOiBcIk1hcmlhXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy9mZi9kZC82MC9mZmRkNjAwYTE2NzA0MDkyNzllMmViM2NlZTQxNDgyMi5qcGdcIiwgY3VzdG9tSW1hZ2U6IG51bGwsIHN0YXR1czogdHJ1ZSB9LFxuICAgICAgICB7IGlkOiAyLCBuYW1lOiBcIkRhbmllbFwiLCBpbWFnZVNyYzogXCJodHRwczovL2Rpc2Vub3dlYmFrdXMubmV0L2ltYWdlbmVzL2FydGljdWxvcy9zdGV2ZS1qb2JzLmpwZ1wiLCBjdXN0b21JbWFnZTogbnVsbCwgIHN0YXR1czogdHJ1ZSB9LFxuICAgICAgICB7IGlkOiAzLCBuYW1lOiBcIkpoZW5ueWZlclwiLCBpbWFnZVNyYzogXCJodHRwczovL3d3dy5lY29wZXRpdC5jYXQvd3BpYy9tcGljLzgtODU2NzFfcGlrYWNodS13YWxscGFwZXItaGQtZnJlZS1jdXRlLXBpa2FjaHUtd2FsbHBhcGVycy1oZC5qcGdcIiwgY3VzdG9tSW1hZ2U6IG51bGwsICBzdGF0dXM6IHRydWUgfSxcbiAgICAgICAgeyBpZDogNCwgbmFtZTogXCJLYXJvbFwiLCBpbWFnZVNyYzogXCJodHRwczovL3d3dy5pdGwuY2F0L3BuZ2ZpbGUvYmlnLzIwMC0yMDA1NTgxX3BhbmRhLXdhbGxwYXBlci1oZC1oZC13YWxscGFwZXJtb25rZXktcGFuZGEtd2FsbHBhcGVycy1wYW5kYS5qcGdcIiwgY3VzdG9tSW1hZ2U6IG51bGwsICBzdGF0dXM6IHRydWUgfSxcbiAgICAgICAgeyBpZDogNSwgbmFtZTogXCJFZHdpblwiLCBpbWFnZVNyYzogXCJodHRwczovL2QyZ2c5ZXZoNDdmbjl6LmNsb3VkZnJvbnQubmV0LzgwMHB4X0NPTE9VUkJPWDMwMDA3ODQzLmpwZ1wiLCBjdXN0b21JbWFnZTogbnVsbCwgIHN0YXR1czogdHJ1ZSB9LFxuICAgICAgICB7IGlkOiA2LCBuYW1lOiBcIkNyaXN0aWFuXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vd3d3Lm1ldGFsc3Vja3MubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA5L0NVQkxPVFctMDlfMjVfMjAxOS5qcGdcIiwgY3VzdG9tSW1hZ2U6IG51bGwsICBzdGF0dXM6IHRydWUgfSxcbiAgICAgICAgeyBpZDogNywgbmFtZTogXCJQZXRlclwiLCBpbWFnZVNyYzogXCJodHRwczovL3B1bHBmaWN0aW9uY2luZS5jb20vZG93bmxvYWQvbXVsdGltZWRpYS5ub3JtYWwuOWVkOTEwMGQwZTFkOTNmMS42MjY1NzI3MzY1NzI2YjJkNWY2ZTZmNzI2ZDYxNmMyZTZhNzA2Ny5qcGdcIiwgY3VzdG9tSW1hZ2U6IG51bGwsICBzdGF0dXM6IHRydWUgfSxcbiAgICBdO1xuXG4gICAgZGF5czogeyBkYXk6IHN0cmluZyB9W10gPSBbXG4gICAgICAgIHsgZGF5OiBcIkxVTkVTXCIgfSxcbiAgICAgICAgeyBkYXk6IFwiTUFSVEVTXCIsIH0sXG4gICAgICAgIHsgZGF5OiBcIk1JRVJDT0xFU1wiLCB9LFxuICAgICAgICB7IGRheTogXCJKVUVWRVNcIiwgfSxcbiAgICAgICAgeyBkYXk6IFwiVklFUk5FU1wiLCB9LFxuICAgIF07XG5cblxuXG4gICAgc2h1ZmZsZSgpIHtcblxuICAgICAgICB2YXIgY3VycmVudEluZGV4ID0gdGhpcy5tanZlcnMubGVuZ3RoLCB0ZW1wb3JhcnlWYWx1ZSwgcmFuZG9tSW5kZXg7XG5cbiAgICAgICAgd2hpbGUgKDAgIT09IGN1cnJlbnRJbmRleCkge1xuXG5cbiAgICAgICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCAtPSAxO1xuXG5cbiAgICAgICAgICAgIHRlbXBvcmFyeVZhbHVlID0gdGhpcy5tanZlcnNbY3VycmVudEluZGV4XTtcbiAgICAgICAgICAgIHRoaXMubWp2ZXJzW2N1cnJlbnRJbmRleF0gPSB0aGlzLm1qdmVyc1tyYW5kb21JbmRleF07XG4gICAgICAgICAgICB0aGlzLm1qdmVyc1tyYW5kb21JbmRleF0gPSB0ZW1wb3JhcnlWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLm1qdmVycztcbiAgICB9XG5cbiAgICBzZWxlY3RSYW5kb21EYXkoKSB7XG4gICAgICAgIGNvbnN0IHdlZWtEYXkgPSB0aGlzLmRheXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5kYXlzLmxlbmd0aCldO1xuICAgICAgICByZXR1cm4gd2Vla0RheS5kYXk7XG4gICAgfVxuXG4gICAgcHVibGljIHNhdmVUb0dhbGxlcnk6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHB1YmxpYyBjYW1lcmFJbWFnZTogSW1hZ2VBc3NldDtcblxuICAgIG9uVGFrZVBpY3R1cmVUYXAoYXJncywgaWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coaWQpO1xuICAgICAgICByZXF1ZXN0UGVybWlzc2lvbnMoKS50aGVuKFxuICAgICAgICAgICAgKCkgPT4gdGhpcy5jYXB0dXJlKGlkKSxcbiAgICAgICAgICAgICgpID0+IGFsZXJ0KCdwZXJtaXNzaW9ucyByZWplY3RlZCcpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY2FwdHVyZShpZCkge1xuICAgICAgICB0YWtlUGljdHVyZSh7IHdpZHRoOiAyNTAsIGhlaWdodDogMzAwLCBrZWVwQXNwZWN0UmF0aW86IHRydWUsIHNhdmVUb0dhbGxlcnk6IHRoaXMuc2F2ZVRvR2FsbGVyeSB9KVxuICAgICAgICAgICAgLnRoZW4oKGltYWdlQXNzZXQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhSW1hZ2UgPSBpbWFnZUFzc2V0O1xuICAgICAgICAgICAgICAgIHRoaXMubWp2ZXJzLmZpbmQoICh1c2VyKSA9PiB1c2VyLmlkID09PSBpZCkuY3VzdG9tSW1hZ2UgPSBpbWFnZUFzc2V0O1xuICAgICAgICAgICAgICAgIGltYWdlQXNzZXQuZ2V0SW1hZ2VBc3luYyhmdW5jdGlvbiAobmF0aXZlSW1hZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjYWxlID0gMTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhlaWdodCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGxldCB3aWR0aCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZUFzc2V0LmFuZHJvaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY3VycmVudCBkZW5zaXR5IG9mIHRoZSBzY3JlZW4gKGRwaSkgYW5kIGRpdmlkZSBpdCBieSB0aGUgZGVmYXVsdCBvbmUgdG8gZ2V0IHRoZSBzY2FsZVxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGUgPSBuYXRpdmVJbWFnZS5nZXREZW5zaXR5KCkgLyBpbWFnZUFzc2V0LmFuZHJvaWQudXRpbC5EaXNwbGF5TWV0cmljcy5ERU5TSVRZX0RFRkFVTFQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSBpbWFnZUFzc2V0Lm9wdGlvbnMuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSBpbWFnZUFzc2V0Lm9wdGlvbnMud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZSA9IG5hdGl2ZUltYWdlLnNjYWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSBuYXRpdmVJbWFnZS5zaXplLndpZHRoICogc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSBuYXRpdmVJbWFnZS5zaXplLmhlaWdodCAqIHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBEaXNwbGF5ZWQgU2l6ZTogJHt3aWR0aH14JHtoZWlnaHR9IHdpdGggc2NhbGUgJHtzY2FsZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEltYWdlIFNpemU6ICR7d2lkdGggLyBzY2FsZX14JHtoZWlnaHQgLyBzY2FsZX1gKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==