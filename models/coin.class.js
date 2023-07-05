class Coin extends MovableObject {
    IMAGE_COIN = 'img/8_coin/coin_1.png';
    
    constructor() {
        super().loadImage(this.IMAGE_COIN);
        this.energy = 1
        this.x = Math.random() * (2500 - 500) + 500;
        this.y = Math.random() * (80 - 120) + 80;
        this.height = 150;
        this.width = 150;
    }
}