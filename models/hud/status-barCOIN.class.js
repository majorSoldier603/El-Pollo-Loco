class StatusBarCOIN extends DrawableObject {

    COIN = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png', // 0
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png' // 5
    ];

    coinCount = 0;
    

    constructor() {
        super();
        this.loadImages(this.COIN);
        this.x = 40;
        this.y = 100;
        this.width = 200;
        this.height = 60;
        this.setPath(this.coinCount);
    }

    // setPercentage(50);
    setPath(coinCount) {
        this.coinCount = coinCount; // => 0 ... 5
        let path = this.COIN[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


    resolveImageIndex() {
        if (this.coinCount == 10) {
            return 5;
        } else if (this.coinCount > 8) {
            return 4;
        } else if (this.coinCount > 6) {
            return 3;
        } else if (this.coinCount > 4) {
            return 2;
        } else if (this.coinCount > 2) {
            return 1;
        } else {
            return 0;
        }
    }
}
