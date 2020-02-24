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
        var duplicates = this.findElements(this.mjvers, 'freeDay', 'MARTES');
        var duplicates = this.findElements(this.mjvers, 'freeDay', 'MIERCOLES');
        var duplicates = this.findElements(this.mjvers, 'freeDay', 'JUEVES');
        return this.mjvers;
    };
    HomeComponent.prototype.findElements = function (array, property, value) {
        var foundElements = [];
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var element = array_1[_i];
            if (element[property] === value) {
                foundElements.push(element);
            }
        }
        return foundElements;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUNvQjtBQUd0RSxJQUFNLFdBQVcsR0FBRyxtQkFBTyxDQUFDLGlFQUFjLENBQUMsQ0FBQztBQVE1QztJQUdJO1FBRUEsZUFBVSxHQUFHLFNBQVMsQ0FBQztRQUN2QixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBV2xCLFdBQU0sR0FBdUc7WUFDekcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLDhFQUE4RSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO1lBQ2xLLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSw2REFBNkQsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFHLE1BQU0sRUFBRSxJQUFJLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtZQUNsSixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUscUdBQXFHLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRyxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7WUFDOUwsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLDhHQUE4RyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUcsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO1lBQ25NLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxtRUFBbUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFHLE1BQU0sRUFBRSxJQUFJ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LEdBQUcsV0FBVyxDQUFDLFVBQVUsRUFBRSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUM7b0JBQzFGLE1BQU0sR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztvQkFDbkMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2lCQUNwQztxQkFBTTtvQkFDSCxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztvQkFDMUIsS0FBSyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFDdkMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztpQkFDNUM7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBbUIsS0FBSyxTQUFJLE1BQU0sb0JBQWUsS0FBTyxDQUFDLENBQUM7Z0JBQ3RFLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWUsS0FBSyxHQUFHLEtBQUssU0FBSSxNQUFNLEdBQUcsS0FBTyxDQUFDLENBQUM7WUFDbEUsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDLEVBQUUsVUFBQyxLQUFLO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBM0dRLGFBQWE7UUFOekIsK0RBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBRWhCLG9GQUFvQzs7U0FFdkMsQ0FBQzs7T0FDVyxhQUFhLENBOEd6QjtJQUFELG9CQUFDO0NBQUE7QUE5R3lCIiwiZmlsZSI6IjAuYTQ4NDI5NzMwOWIzM2ZhYzIzM2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IHRha2VQaWN0dXJlLCByZXF1ZXN0UGVybWlzc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtY2FtZXJhJztcbmltcG9ydCB7IEltYWdlQXNzZXQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2ltYWdlLWFzc2V0JztcbmltcG9ydCB7QW5pbWF0aW9uQ3VydmV9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2VudW1zXCI7XG5jb25zdCBpbWFnZVNvdXJjZSA9IHJlcXVpcmUoXCJpbWFnZS1zb3VyY2VcIik7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9ob21lLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cbiAgICBidXR0b25UZXh0ID0gXCJTaHVmZmxlXCI7XG4gICAgcHJvY2Vzc2luZyA9IHRydWU7XG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2h1ZmZsZSgpO1xuICAgIH1cblxuICAgIG9uQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkJ1dHRvbiB3YXMgcHJlc3NlZFwiKTtcbiAgICB9XG5cblxuXG4gICAgbWp2ZXJzOiB7IGlkOiBudW1iZXIsIG5hbWU6IHN0cmluZywgaW1hZ2VTcmM6IHN0cmluZywgY3VzdG9tSW1hZ2U6IGFueSwgc3RhdHVzOiBib29sZWFuLCBmcmVlRGF5OiBudWxsIH1bXSA9IFtcbiAgICAgICAgeyBpZDogMSwgbmFtZTogXCJNYXJpYVwiLCBpbWFnZVNyYzogXCJodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvZmYvZGQvNjAvZmZkZDYwMGExNjcwNDA5Mjc5ZTJlYjNjZWU0MTQ4MjIuanBnXCIsIGN1c3RvbUltYWdlOiBudWxsLCBzdGF0dXM6IHRydWUsIGZyZWVEYXk6IG51bGwgfSxcbiAgICAgICAgeyBpZDogMiwgbmFtZTogXCJEYW5pZWxcIiwgaW1hZ2VTcmM6IFwiaHR0cHM6Ly9kaXNlbm93ZWJha3VzLm5ldC9pbWFnZW5lcy9hcnRpY3Vsb3Mvc3RldmUtam9icy5qcGdcIiwgY3VzdG9tSW1hZ2U6IG51bGwsICBzdGF0dXM6IHRydWUsZnJlZURheTogbnVsbCB9LFxuICAgICAgICB7IGlkOiAzLCBuYW1lOiBcIkpoZW5ueWZlclwiLCBpbWFnZVNyYzogXCJodHRwczovL3d3dy5lY29wZXRpdC5jYXQvd3BpYy9tcGljLzgtODU2NzFfcGlrYWNodS13YWxscGFwZXItaGQtZnJlZS1jdXRlLXBpa2FjaHUtd2FsbHBhcGVycy1oZC5qcGdcIiwgY3VzdG9tSW1hZ2U6IG51bGwsICBzdGF0dXM6IHRydWUsIGZyZWVEYXk6IG51bGwgfSxcbiAgICAgICAgeyBpZDogNCwgbmFtZTogXCJLYXJvbFwiLCBpbWFnZVNyYzogXCJodHRwczovL3d3dy5pdGwuY2F0L3BuZ2ZpbGUvYmlnLzIwMC0yMDA1NTgxX3BhbmRhLXdhbGxwYXBlci1oZC1oZC13YWxscGFwZXJtb25rZXktcGFuZGEtd2FsbHBhcGVycy1wYW5kYS5qcGdcIiwgY3VzdG9tSW1hZ2U6IG51bGwsICBzdGF0dXM6IHRydWUsIGZyZWVEYXk6IG51bGwgfSxcbiAgICAgICAgeyBpZDogNSwgbmFtZTogXCJFZHdpblwiLCBpbWFnZVNyYzogXCJodHRwczovL2QyZ2c5ZXZoNDdmbjl6LmNsb3VkZnJvbnQubmV0LzgwMHB4X0NPTE9VUkJPWDMwMDA3ODQzLmpwZ1wiLCBjdXN0b21JbWFnZTogbnVsbCwgIHN0YXR1czogdHJ1ZSwgZnJlZURheTogbnVsbCB9LFxuICAgICAgICB7IGlkOiA2LCBuYW1lOiBcIkNyaXN0aWFuXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vd3d3Lm1ldGFsc3Vja3MubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA5L0NVQkxPVFctMDlfMjVfMjAxOS5qcGdcIiwgY3VzdG9tSW1hZ2U6IG51bGwsICBzdGF0dXM6IHRydWUsIGZyZWVEYXk6IG51bGwgfSxcbiAgICAgICAgeyBpZDogNywgbmFtZTogXCJQZXRlclwiLCBpbWFnZVNyYzogXCJodHRwczovL3B1bHBmaWN0aW9uY2luZS5jb20vZG93bmxvYWQvbXVsdGltZWRpYS5ub3JtYWwuOWVkOTEwMGQwZTFkOTNmMS42MjY1NzI3MzY1NzI2YjJkNWY2ZTZmNzI2ZDYxNmMyZTZhNzA2Ny5qcGdcIiwgY3VzdG9tSW1hZ2U6IG51bGwsICBzdGF0dXM6IHRydWUsIGZyZWVEYXk6IG51bGwgfSxcbiAgICAgICAgeyBpZDogNywgbmFtZTogXCJDYXRhbGluYVwiLCBpbWFnZVNyYzogXCJodHRwczovL2kuc3RhY2suaW1ndXIuY29tLzJlMlN3LmpwZ1wiLCBjdXN0b21JbWFnZTogbnVsbCwgIHN0YXR1czogdHJ1ZSwgZnJlZURheTogbnVsbCB9LFxuICAgIF07XG4gICAgZGF5czogeyBkYXk6IHN0cmluZyB9W10gPSBbXG4gICAgICAgIC8veyBkYXk6IFwiTFVORVNcIiB9LFxuICAgICAgICB7IGRheTogXCJNQVJURVNcIiwgfSxcbiAgICAgICAgeyBkYXk6IFwiTUlFUkNPTEVTXCIsIH0sXG4gICAgICAgIHsgZGF5OiBcIkpVRVZFU1wiLCB9LFxuICAgICAgICAvL3sgZGF5OiBcIlZJRVJORVNcIiwgfSxcbiAgICBdO1xuXG5cblxuICAgIHNodWZmbGUoKSB7XG5cbiAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IHRoaXMubWp2ZXJzLmxlbmd0aCwgdGVtcG9yYXJ5VmFsdWUsIHJhbmRvbUluZGV4O1xuXG4gICAgICAgIHdoaWxlICgwICE9PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCAtPSAxO1xuICAgICAgICAgICAgdGVtcG9yYXJ5VmFsdWUgPSB0aGlzLm1qdmVyc1tjdXJyZW50SW5kZXhdO1xuICAgICAgICAgICAgdGhpcy5tanZlcnNbY3VycmVudEluZGV4XSA9IHRoaXMubWp2ZXJzW3JhbmRvbUluZGV4XTtcbiAgICAgICAgICAgIHRlbXBvcmFyeVZhbHVlLmZyZWVEYXkgPSB0aGlzLnNlbGVjdFJhbmRvbURheSgpO1xuICAgICAgICAgICAgdGhpcy5tanZlcnNbcmFuZG9tSW5kZXhdID0gdGVtcG9yYXJ5VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGR1cGxpY2F0ZXMgPSB0aGlzLmZpbmRFbGVtZW50czxBbnksIG51bWJlcj4odGhpcy5tanZlcnMsICdmcmVlRGF5JywgJ01BUlRFUycpO1xuICAgICAgICBsZXQgZHVwbGljYXRlcyA9IHRoaXMuZmluZEVsZW1lbnRzPEFueSwgbnVtYmVyPih0aGlzLm1qdmVycywgJ2ZyZWVEYXknLCAnTUlFUkNPTEVTJyk7XG4gICAgICAgIGxldCBkdXBsaWNhdGVzID0gdGhpcy5maW5kRWxlbWVudHM8QW55LCBudW1iZXI+KHRoaXMubWp2ZXJzLCAnZnJlZURheScsICdKVUVWRVMnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubWp2ZXJzO1xuICAgIH1cblxuICAgIGZpbmRFbGVtZW50czxULCBWPihhcnJheTogVFtdLCBwcm9wZXJ0eTogc3RyaW5nLCB2YWx1ZTogVik6IFRbXSB7XG4gICAgICAgIGxldCBmb3VuZEVsZW1lbnRzOiBUW10gPSBbXTtcbiAgICAgICAgZm9yKGxldCBlbGVtZW50IG9mIGFycmF5KSB7XG4gICAgICAgICAgICBpZihlbGVtZW50W3Byb3BlcnR5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBmb3VuZEVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvdW5kRWxlbWVudHM7XG4gICAgfVxuICAgIHNlbGVjdFJhbmRvbURheSgpIHtcbiAgICAgICAgY29uc3Qgd2Vla0RheSA9IHRoaXMuZGF5c1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmRheXMubGVuZ3RoKV07XG4gICAgICAgIHJldHVybiB3ZWVrRGF5LmRheTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2F2ZVRvR2FsbGVyeTogYm9vbGVhbiA9IHRydWU7XG4gICAgcHVibGljIGNhbWVyYUltYWdlOiBJbWFnZUFzc2V0O1xuXG4gICAgb25UYWtlUGljdHVyZVRhcChhcmdzLCBpZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhpZCk7XG4gICAgICAgIHJlcXVlc3RQZXJtaXNzaW9ucygpLnRoZW4oXG4gICAgICAgICAgICAoKSA9PiB0aGlzLmNhcHR1cmUoaWQpLFxuICAgICAgICAgICAgKCkgPT4gYWxlcnQoJ3Blcm1pc3Npb25zIHJlamVjdGVkJylcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjYXB0dXJlKGlkKSB7XG4gICAgICAgIHRha2VQaWN0dXJlKHsgd2lkdGg6IDI1MCwgaGVpZ2h0OiAzMDAsIGtlZXBBc3BlY3RSYXRpbzogdHJ1ZSwgc2F2ZVRvR2FsbGVyeTogdGhpcy5zYXZlVG9HYWxsZXJ5IH0pXG4gICAgICAgICAgICAudGhlbigoaW1hZ2VBc3NldDogYW55KSA9PiB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYUltYWdlID0gaW1hZ2VBc3NldDtcbiAgICAgICAgICAgICAgICB0aGlzLm1qdmVycy5maW5kKCB1c2VyID0+IHVzZXIuaWQgPT09IGlkKS5jdXN0b21JbWFnZSA9IGltYWdlQXNzZXQ7XG4gICAgICAgICAgICAgICAgaW1hZ2VBc3NldC5nZXRJbWFnZUFzeW5jKGZ1bmN0aW9uIChuYXRpdmVJbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2NhbGUgPSAxO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaGVpZ2h0ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHdpZHRoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlQXNzZXQuYW5kcm9pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IGRlbnNpdHkgb2YgdGhlIHNjcmVlbiAoZHBpKSBhbmQgZGl2aWRlIGl0IGJ5IHRoZSBkZWZhdWx0IG9uZSB0byBnZXQgdGhlIHNjYWxlXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZSA9IG5hdGl2ZUltYWdlLmdldERlbnNpdHkoKSAvIGltYWdlQXNzZXQuYW5kcm9pZC51dGlsLkRpc3BsYXlNZXRyaWNzLkRFTlNJVFlfREVGQVVMVDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IGltYWdlQXNzZXQub3B0aW9ucy5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IGltYWdlQXNzZXQub3B0aW9ucy53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlID0gbmF0aXZlSW1hZ2Uuc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IG5hdGl2ZUltYWdlLnNpemUud2lkdGggKiBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IG5hdGl2ZUltYWdlLnNpemUuaGVpZ2h0ICogc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYERpc3BsYXllZCBTaXplOiAke3dpZHRofXgke2hlaWdodH0gd2l0aCBzY2FsZSAke3NjYWxlfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgSW1hZ2UgU2l6ZTogJHt3aWR0aCAvIHNjYWxlfXgke2hlaWdodCAvIHNjYWxlfWApO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9