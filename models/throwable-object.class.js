class ThrowableObject extends MovableObject {
    throw_sound = new Audio('audio/throw.mp3');

    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png');
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.trow();
    }


    trow() {
        this.speedY = 25;
        this.applyGravity();
        this.throw_sound.play();
        setInterval(() => {
            this.x += 20;
        }, 25);
    }
}