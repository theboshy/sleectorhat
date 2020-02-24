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
        else {
            this.currentDay = weekDay.day;
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUNvQjtBQUd0RSxJQUFNLFdBQVcsR0FBRyxtQkFBTyxDQUFDLGlFQUFjLENBQUMsQ0FBQztBQVE1QztJQUdJO1FBRUEsZUFBVSxHQUFHLFNBQVMsQ0FBQztRQUN2QixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBV2xCLFdBQU0sR0FBd0Y7WUFDMUYsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLDhFQUE4RSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUNuSixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsNkRBQTZELEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRyxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ3BJLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxxR0FBcUcsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFHLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDL0ssRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLDhHQUE4RyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUcsTUFBTSxFQUFFLElBQUksRUFBRTtZQUNwTCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsbUVBQW1FLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRyxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ3pJLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSw4RUFBOEUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFHLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDdkosRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLG9IQUFvSCxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUcsTUFBTSxFQUFFLElBQUksRUFBRTtZQUMxTCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUscUNBQXFDLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRyxNQUFNLEVBQUUsSUFBSSxFQUFFO1NBQ2pILENBQUM7UUFDRixTQUFJLEdBQXNCO1lBQ3RCLG1CQUFtQjtZQUNuQixFQUFFLEdBQUcsRUFBRSxRQUFRLEdBQUc7WUFDbEIsRUFBRSxHQUFHLEVBQUUsV0FBVyxHQUFHO1lBQ3JCLEVBQUUsR0FBRyxFQUFFLFFBQVEsR0FBRztTQUVyQixDQUFDO1FBa0NLLGtCQUFhLEdBQVksSUFBSSxDQUFDO0lBL0RyQyxDQUFDO0lBR0QsZ0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsbUNBQVcsR0FBWDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBd0JELCtCQUFPLEdBQVA7UUFFSSxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUUsV0FBVyxDQUFDO1FBRW5FLE9BQU8sQ0FBQyxLQUFLLFlBQVksRUFBRTtZQUd2QixXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsWUFBWSxDQUFDLENBQUM7WUFDdkQsWUFBWSxJQUFJLENBQUMsQ0FBQztZQUdsQixjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxjQUFjLENBQUM7U0FDN0M7UUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUdELHVDQUFlLEdBQWY7UUFDSSxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN4RSxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssT0FBTyxDQUFDLEdBQUcsRUFBQztZQUNoQyxPQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUNyQjthQUFLO1lBQ0YsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO1NBQ2pDO1FBQ0QsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDO0lBQ3ZCLENBQUM7SUFLRCx3Q0FBZ0IsR0FBaEIsVUFBaUIsSUFBSSxFQUFFLEVBQUU7UUFBekIsaUJBTUM7UUFMRyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hCLDhFQUFrQixFQUFFLENBQUMsSUFBSSxDQUNyQixjQUFNLFlBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQWhCLENBQWdCLEVBQ3RCLGNBQU0sWUFBSyxDQUFDLHNCQUFzQixDQUFDLEVBQTdCLENBQTZCLENBQ3RDLENBQUM7SUFDTixDQUFDO0lBRUQsK0JBQU8sR0FBUCxVQUFRLEVBQUU7UUFBVixpQkEyQkM7UUExQkcsdUVBQVcsQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDN0YsSUFBSSxDQUFDLFVBQUMsVUFBZTtZQUVsQixLQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztZQUM5QixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBRSxjQUFJLElBQUksV0FBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQWQsQ0FBYyxDQUFDLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztZQUNuRSxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsV0FBVztnQkFDMUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNkLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQ2QsSUFBSSxVQUFVLENBQUMsT0FBTyxFQUFFO29CQUNwQixnR0FBZ0c7b0JBQ2hHLEtBQUssR0FBRyxXQUFXLENBQUMsVUFBVSxFQUFFLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQztvQkFDMUYsTUFBTSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUNuQyxLQUFLLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7aUJBQ3BDO3FCQUFNO29CQUNILEtBQUssR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDO29CQUMxQixLQUFLLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO29CQUN2QyxNQUFNLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2lCQUM1QztnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFtQixLQUFLLFNBQUksTUFBTSxvQkFBZSxLQUFPLENBQUMsQ0FBQztnQkFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBZSxLQUFLLEdBQUcsS0FBSyxTQUFJLE1BQU0sR0FBRyxLQUFPLENBQUMsQ0FBQztZQUNsRSxDQUFDLENBQUMsQ0FBQztRQUVQLENBQUMsRUFBRSxVQUFDLEtBQUs7WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUF6R1EsYUFBYTtRQU56QiwrREFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFFaEIsb0ZBQW9DOztTQUV2QyxDQUFDOztPQUNXLGFBQWEsQ0E0R3pCO0lBQUQsb0JBQUM7Q0FBQTtBQTVHeUIiLCJmaWxlIjoiMC5kODg2NTc4YTNkMWFhNDdlN2UxYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgdGFrZVBpY3R1cmUsIHJlcXVlc3RQZXJtaXNzaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1jYW1lcmEnO1xuaW1wb3J0IHsgSW1hZ2VBc3NldCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvaW1hZ2UtYXNzZXQnO1xuaW1wb3J0IHtBbmltYXRpb25DdXJ2ZX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZW51bXNcIjtcbmNvbnN0IGltYWdlU291cmNlID0gcmVxdWlyZShcImltYWdlLXNvdXJjZVwiKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuICAgIGJ1dHRvblRleHQgPSBcIlNodWZmbGVcIjtcbiAgICBwcm9jZXNzaW5nID0gdHJ1ZTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zaHVmZmxlKCk7XG4gICAgfVxuXG4gICAgb25CdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQnV0dG9uIHdhcyBwcmVzc2VkXCIpO1xuICAgIH1cblxuXG5cbiAgICBtanZlcnM6IHsgaWQ6IG51bWJlciwgbmFtZTogc3RyaW5nLCBpbWFnZVNyYzogc3RyaW5nLCBjdXN0b21JbWFnZTogYW55LCBzdGF0dXM6IGJvb2xlYW4gfVtdID0gW1xuICAgICAgICB7IGlkOiAxLCBuYW1lOiBcIk1hcmlhXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy9mZi9kZC82MC9mZmRkNjAwYTE2NzA0MDkyNzllMmViM2NlZTQxNDgyMi5qcGdcIiwgY3VzdG9tSW1hZ2U6IG51bGwsIHN0YXR1czogdHJ1ZSB9LFxuICAgICAgICB7IGlkOiAyLCBuYW1lOiBcIkRhbmllbFwiLCBpbWFnZVNyYzogXCJodHRwczovL2Rpc2Vub3dlYmFrdXMubmV0L2ltYWdlbmVzL2FydGljdWxvcy9zdGV2ZS1qb2JzLmpwZ1wiLCBjdXN0b21JbWFnZTogbnVsbCwgIHN0YXR1czogdHJ1ZSB9LFxuICAgICAgICB7IGlkOiAzLCBuYW1lOiBcIkpoZW5ueWZlclwiLCBpbWFnZVNyYzogXCJodHRwczovL3d3dy5lY29wZXRpdC5jYXQvd3BpYy9tcGljLzgtODU2NzFfcGlrYWNodS13YWxscGFwZXItaGQtZnJlZS1jdXRlLXBpa2FjaHUtd2FsbHBhcGVycy1oZC5qcGdcIiwgY3VzdG9tSW1hZ2U6IG51bGwsICBzdGF0dXM6IHRydWUgfSxcbiAgICAgICAgeyBpZDogNCwgbmFtZTogXCJLYXJvbFwiLCBpbWFnZVNyYzogXCJodHRwczovL3d3dy5pdGwuY2F0L3BuZ2ZpbGUvYmlnLzIwMC0yMDA1NTgxX3BhbmRhLXdhbGxwYXBlci1oZC1oZC13YWxscGFwZXJtb25rZXktcGFuZGEtd2FsbHBhcGVycy1wYW5kYS5qcGdcIiwgY3VzdG9tSW1hZ2U6IG51bGwsICBzdGF0dXM6IHRydWUgfSxcbiAgICAgICAgeyBpZDogNSwgbmFtZTogXCJFZHdpblwiLCBpbWFnZVNyYzogXCJodHRwczovL2QyZ2c5ZXZoNDdmbjl6LmNsb3VkZnJvbnQubmV0LzgwMHB4X0NPTE9VUkJPWDMwMDA3ODQzLmpwZ1wiLCBjdXN0b21JbWFnZTogbnVsbCwgIHN0YXR1czogdHJ1ZSB9LFxuICAgICAgICB7IGlkOiA2LCBuYW1lOiBcIkNyaXN0aWFuXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vd3d3Lm1ldGFsc3Vja3MubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA5L0NVQkxPVFctMDlfMjVfMjAxOS5qcGdcIiwgY3VzdG9tSW1hZ2U6IG51bGwsICBzdGF0dXM6IHRydWUgfSxcbiAgICAgICAgeyBpZDogNywgbmFtZTogXCJQZXRlclwiLCBpbWFnZVNyYzogXCJodHRwczovL3B1bHBmaWN0aW9uY2luZS5jb20vZG93bmxvYWQvbXVsdGltZWRpYS5ub3JtYWwuOWVkOTEwMGQwZTFkOTNmMS42MjY1NzI3MzY1NzI2YjJkNWY2ZTZmNzI2ZDYxNmMyZTZhNzA2Ny5qcGdcIiwgY3VzdG9tSW1hZ2U6IG51bGwsICBzdGF0dXM6IHRydWUgfSxcbiAgICAgICAgeyBpZDogNywgbmFtZTogXCJDYXRhbGluYVwiLCBpbWFnZVNyYzogXCJodHRwczovL2kuc3RhY2suaW1ndXIuY29tLzJlMlN3LmpwZ1wiLCBjdXN0b21JbWFnZTogbnVsbCwgIHN0YXR1czogdHJ1ZSB9LFxuICAgIF07XG4gICAgZGF5czogeyBkYXk6IHN0cmluZyB9W10gPSBbXG4gICAgICAgIC8veyBkYXk6IFwiTFVORVNcIiB9LFxuICAgICAgICB7IGRheTogXCJNQVJURVNcIiwgfSxcbiAgICAgICAgeyBkYXk6IFwiTUlFUkNPTEVTXCIsIH0sXG4gICAgICAgIHsgZGF5OiBcIkpVRVZFU1wiLCB9LFxuICAgICAgICAvL3sgZGF5OiBcIlZJRVJORVNcIiwgfSxcbiAgICBdO1xuXG5cblxuICAgIHNodWZmbGUoKSB7XG5cbiAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IHRoaXMubWp2ZXJzLmxlbmd0aCwgdGVtcG9yYXJ5VmFsdWUsIHJhbmRvbUluZGV4O1xuXG4gICAgICAgIHdoaWxlICgwICE9PSBjdXJyZW50SW5kZXgpIHtcblxuXG4gICAgICAgICAgICByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICBjdXJyZW50SW5kZXggLT0gMTtcblxuXG4gICAgICAgICAgICB0ZW1wb3JhcnlWYWx1ZSA9IHRoaXMubWp2ZXJzW2N1cnJlbnRJbmRleF07XG4gICAgICAgICAgICB0aGlzLm1qdmVyc1tjdXJyZW50SW5kZXhdID0gdGhpcy5tanZlcnNbcmFuZG9tSW5kZXhdO1xuICAgICAgICAgICAgdGhpcy5tanZlcnNbcmFuZG9tSW5kZXhdID0gdGVtcG9yYXJ5VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5tanZlcnM7XG4gICAgfVxuXG4gICAgY3VycmVudERheTogc3RyaW5nO1xuICAgIHNlbGVjdFJhbmRvbURheSgpIHtcbiAgICAgICAgY29uc3Qgd2Vla0RheSA9IHRoaXMuZGF5c1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmRheXMubGVuZ3RoKV07XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnREYXkgPT09IHdlZWtEYXkuZGF5KXtcbiAgICAgICAgICAgIHdlZWtEYXkuZGF5ICsgXCIyXCI7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERheSA9IHdlZWtEYXkuZGF5O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3ZWVrRGF5LmRheTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2F2ZVRvR2FsbGVyeTogYm9vbGVhbiA9IHRydWU7XG4gICAgcHVibGljIGNhbWVyYUltYWdlOiBJbWFnZUFzc2V0O1xuXG4gICAgb25UYWtlUGljdHVyZVRhcChhcmdzLCBpZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhpZCk7XG4gICAgICAgIHJlcXVlc3RQZXJtaXNzaW9ucygpLnRoZW4oXG4gICAgICAgICAgICAoKSA9PiB0aGlzLmNhcHR1cmUoaWQpLFxuICAgICAgICAgICAgKCkgPT4gYWxlcnQoJ3Blcm1pc3Npb25zIHJlamVjdGVkJylcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjYXB0dXJlKGlkKSB7XG4gICAgICAgIHRha2VQaWN0dXJlKHsgd2lkdGg6IDI1MCwgaGVpZ2h0OiAzMDAsIGtlZXBBc3BlY3RSYXRpbzogdHJ1ZSwgc2F2ZVRvR2FsbGVyeTogdGhpcy5zYXZlVG9HYWxsZXJ5IH0pXG4gICAgICAgICAgICAudGhlbigoaW1hZ2VBc3NldDogYW55KSA9PiB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYUltYWdlID0gaW1hZ2VBc3NldDtcbiAgICAgICAgICAgICAgICB0aGlzLm1qdmVycy5maW5kKCB1c2VyID0+IHVzZXIuaWQgPT09IGlkKS5jdXN0b21JbWFnZSA9IGltYWdlQXNzZXQ7XG4gICAgICAgICAgICAgICAgaW1hZ2VBc3NldC5nZXRJbWFnZUFzeW5jKGZ1bmN0aW9uIChuYXRpdmVJbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2NhbGUgPSAxO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaGVpZ2h0ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHdpZHRoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlQXNzZXQuYW5kcm9pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IGRlbnNpdHkgb2YgdGhlIHNjcmVlbiAoZHBpKSBhbmQgZGl2aWRlIGl0IGJ5IHRoZSBkZWZhdWx0IG9uZSB0byBnZXQgdGhlIHNjYWxlXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZSA9IG5hdGl2ZUltYWdlLmdldERlbnNpdHkoKSAvIGltYWdlQXNzZXQuYW5kcm9pZC51dGlsLkRpc3BsYXlNZXRyaWNzLkRFTlNJVFlfREVGQVVMVDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IGltYWdlQXNzZXQub3B0aW9ucy5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IGltYWdlQXNzZXQub3B0aW9ucy53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlID0gbmF0aXZlSW1hZ2Uuc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IG5hdGl2ZUltYWdlLnNpemUud2lkdGggKiBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IG5hdGl2ZUltYWdlLnNpemUuaGVpZ2h0ICogc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYERpc3BsYXllZCBTaXplOiAke3dpZHRofXgke2hlaWdodH0gd2l0aCBzY2FsZSAke3NjYWxlfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgSW1hZ2UgU2l6ZTogJHt3aWR0aCAvIHNjYWxlfXgke2hlaWdodCAvIHNjYWxlfWApO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9