class Bottles extends MovableObject {
    IMAGE_BOTTLE = 'img/6_salsa_bottle/salsa_bottle.png';
    
    constructor() {
        super().loadImage(this.IMAGE_BOTTLE);
        this.energy = 1
        this.x = Math.random() * (2500 - 500) + 500;
        this.y = Math.random() * (80 - 120) + 80;
        this.height = 70;
        this.width = 70;
    }
}