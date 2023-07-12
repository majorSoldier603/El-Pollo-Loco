class StatusBarBOTTLE extends DrawableObject {

    BOTTLE = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png', // 0
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png' // 5
    ];

    bottleCount = 100;
    

    constructor() {
        super();
        this.loadImages(this.BOTTLE);
        this.x = 40;
        this.y = 50;
        this.width = 200;
        this.height = 60;
        this.setPath(this.bottleCount);
    }

    setPath(bottleCount) {
        this.bottleCount = bottleCount; // => 0 ... 5
        let path = this.BOTTLE[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


    resolveImageIndex() {
        if (this.bottleCount == 0) {
            return 0;
        } else if (this.bottleCount == 4) {
            return 4;
        } else if (this.bottleCount == 3) {
            return 3;
        } else if (this.bottleCount == 2) {
            return 2;
        } else if (this.bottleCount == 1) {
            return 1;
        } else {
            return 5;
        }
    }
}
