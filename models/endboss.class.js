class Endboss extends MovableObject {

    height = 400;
    width = 250;
    y = 55;
    isEndboss = true

    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }

    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 2500;
        this.animate();
    }


    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);
    }
    
    dead() {
        setInterval(() => {
            if (this.energy == 0 || this.energy > 0) {
                super.loadImage('img/9_intro_outro_screens/game_over/game over.png')
                console.log("dwadwadwa")
            }
        }, 1000);
    }

    offsetColliding(obj) {
        console.log('this: ', this);
        
        return this.x + this.width - this.offset.right > obj.x + obj.offset.left && // R -> L
            this.y + this.height - this.offset.bottom > obj.y + obj.offset.top && // T -> B
            this.x + this.offset.left < obj.x + obj.width - obj.offset.right && // L -> R
            this.y + this.offset.top < obj.y + obj.height - obj.offset.bottom; // B -> T
    }

}
