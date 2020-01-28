import { Component, OnInit } from "@angular/core";
import { takePicture, requestPermissions } from 'nativescript-camera';
import { ImageAsset } from 'tns-core-modules/image-asset';
import {AnimationCurve} from "tns-core-modules/ui/enums";
const imageSource = require("image-source");

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {


    constructor() {
    }
    buttonText = "Shuffle";
    processing = true;
    ngOnInit(): void {
        this.shuffle();
    }

    onButtonTap(): void {
        console.log("Button was pressed");
    }



    mjvers: { id: number, name: string, imageSrc: string, customImage: any, status: boolean }[] = [
        { id: 1, name: "Maria", imageSrc: "https://i.pinimg.com/originals/ff/dd/60/ffdd600a1670409279e2eb3cee414822.jpg", customImage: null, status: true },
        { id: 2, name: "Daniel", imageSrc: "https://disenowebakus.net/imagenes/articulos/steve-jobs.jpg", customImage: null,  status: true },
        { id: 3, name: "Jhennyfer", imageSrc: "https://www.ecopetit.cat/wpic/mpic/8-85671_pikachu-wallpaper-hd-free-cute-pikachu-wallpapers-hd.jpg", customImage: null,  status: true },
        { id: 4, name: "Karol", imageSrc: "https://www.itl.cat/pngfile/big/200-2005581_panda-wallpaper-hd-hd-wallpapermonkey-panda-wallpapers-panda.jpg", customImage: null,  status: true },
        { id: 5, name: "Edwin", imageSrc: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX30007843.jpg", customImage: null,  status: true },
        { id: 6, name: "Cristian", imageSrc: "https://www.metalsucks.net/wp-content/uploads/2019/09/CUBLOTW-09_25_2019.jpg", customImage: null,  status: true },
        { id: 7, name: "Peter", imageSrc: "https://pulpfictioncine.com/download/multimedia.normal.9ed9100d0e1d93f1.6265727365726b2d5f6e6f726d616c2e6a7067.jpg", customImage: null,  status: true },
    ];

    days: { day: string }[] = [
        { day: "LUNES" },
        { day: "MARTES", },
        { day: "MIERCOLES", },
        { day: "JUEVES", },
        { day: "VIERNES", },
    ];



    shuffle() {

        var currentIndex = this.mjvers.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {


            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;


            temporaryValue = this.mjvers[currentIndex];
            this.mjvers[currentIndex] = this.mjvers[randomIndex];
            this.mjvers[randomIndex] = temporaryValue;
        }

        return this.mjvers;
    }

    selectRandomDay() {
        const weekDay = this.days[Math.floor(Math.random() * this.days.length)];
        return weekDay.day;
    }

    public saveToGallery: boolean = true;
    public cameraImage: ImageAsset;

    onTakePictureTap(args, id) {
        console.log(id);
        requestPermissions().then(
            () => this.capture(id),
            () => alert('permissions rejected')
        );
    }

    capture(id) {
        takePicture({ width: 250, height: 300, keepAspectRatio: true, saveToGallery: this.saveToGallery })
            .then((imageAsset: any) => {

                this.cameraImage = imageAsset;
                this.mjvers.find( user => user.id === id).customImage = imageAsset;
                imageAsset.getImageAsync(function (nativeImage) {
                    let scale = 1;
                    let height = 0;
                    let width = 0;
                    if (imageAsset.android) {
                        // get the current density of the screen (dpi) and divide it by the default one to get the scale
                        scale = nativeImage.getDensity() / imageAsset.android.util.DisplayMetrics.DENSITY_DEFAULT;
                        height = imageAsset.options.height;
                        width = imageAsset.options.width;
                    } else {
                        scale = nativeImage.scale;
                        width = nativeImage.size.width * scale;
                        height = nativeImage.size.height * scale;
                    }
                    console.log(`Displayed Size: ${width}x${height} with scale ${scale}`);
                    console.log(`Image Size: ${width / scale}x${height / scale}`);
                });

            }, (error) => {
                console.log("Error: " + error);
            });
    }


}
