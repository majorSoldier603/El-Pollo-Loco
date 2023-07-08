class ThrowableObject extends MovableObject {

    animateRotation = setInterval(() => {this.playAnimation(this.IMAGES_ROTATE);}, 50);

    IMAGES_KABOOM = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ]

    IMAGES_ROTATE = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ]
    
    throw_sound = new Audio('audio/throw.mp3');

    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png');
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.energy = 1
        this.loadImages(this.IMAGES_KABOOM);
        this.loadImages(this.IMAGES_ROTATE);
        this.trow();
    }


    trow() {
        this.AnimateRotation()
        this.speedY = 20;
        this.applyGravity();
        this.throw_sound.play();
        setInterval(() => {
            this.x += 15;
        }, 25);
    }

    AnimateRotation() {
        
    }

    AnimateKaboom() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_KABOOM);
        }, 50);
    }

}