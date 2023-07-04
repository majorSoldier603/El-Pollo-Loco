class Bottles extends MovableObject {
    IMAGE_BOTTLE = 'img/6_salsa_bottle/salsa_bottle.png';
    
    constructor(x, y) {
        super().loadImage(this.IMAGE_BOTTLE);
        this.energy = 0
        this.x = x;
        this.y = y;
        this.height = 50;
        this.width = 50;
        
        console.log('this.isDead(): ', this.isDead());
        // this.collectingAnimation(this.x);
    }
}