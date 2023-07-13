class Chicken extends MovableObject {

    energy = 100;
    height = 55;
    width = 70
    y = 360
    isEndboss = false
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
    ]

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);

        this.x = 300 + Math.random() * 2000; // Zahl zwischen 300 und 2000
        this.speed = 0.15 + Math.random() * 0.5;

        this.animate();

    }



    animate() {
        setInterval(() => {
            try {
                if (world.level.isStarted === true && !world.character.isDead()) {
                    this.moveLeft();
                }
            } catch (e) {
                // https://tenor.com/view/what-kid-awkward-confused-gif-10267418 What?
            }
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 500);
        setInterval(() => {
            if (this.isDead() == true) {
                this.playAnimation(this.IMAGES_DEAD);
                this.moveStop();
            }
        }, 10);

    }
}