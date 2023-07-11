class Endboss extends MovableObject {

    height = 400;
    width = 250;
    energy = 100;
    y = 55;
    speed = 1
    isEndboss = true
    animateWaleke;
    world;

    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }

    IMAGES_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    IMAGES_ATTACK = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png'
    ]

    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png'
    ]

    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G24.png'
    ];

    constructor() {
        super()
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 2500;
        this.animate()
    }

    animate() {
        this.animateWaleke =
            setInterval(() => {
                this.playAnimation(this.IMAGES_WALKING);
            }, 90);
        if (this.world) {

        }
        setInterval(() => {
            if (this.world) {
                if (this.world.character.x - this.x > 0 && !this.isDead()) {
                    this.moveRight();
                    this.otherDirection = true;
                }
                if (this.world.character.x - this.x < -0 && !this.isDead()) {
                    this.moveLeft();
                    this.otherDirection = false;
                }
            }
        }, 1000 / 144);
    }

    playDead() {
        if (this.isDead()) {
            this.loadImage('img/4_enemie_boss_chicken/5_dead/G24.png')
            setTimeout(() => {
                this.loadImage('img/4_enemie_boss_chicken/5_dead/G25.png')
            }, 100);
            setTimeout(() => {
                this.loadImage('img/4_enemie_boss_chicken/5_dead/G26.png')

            }, 1000 / 144);
        }
    }

    offsetColliding(obj) {
        console.log('this: ', this);

        return this.x + this.width - this.offset.right > obj.x + obj.offset.left && // R -> L
            this.y + this.height - this.offset.bottom > obj.y + obj.offset.top && // T -> B
            this.x + this.offset.left < obj.x + obj.width - obj.offset.right && // L -> R
            this.y + this.offset.top < obj.y + obj.height - obj.offset.bottom; // B -> T
    }
}