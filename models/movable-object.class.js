class MovableObject extends DrawableObject {

    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    timepassedSinceIsHurt
    energy = 2000;
    lastHit = 0;
    applyGravityInterval
    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }

    applyGravity() {
        this.applyGravityInterval =
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) { // Throwable object should always fall
            return true;
        } else {
            return this.y < 180;
        }
    }

    isColliding(obj) {
        if (this instanceof Character) {
            return this.offsetColliding(obj);
        } else {
            return this.noneOffsetColliding(obj);
        }
    }

    noneOffsetColliding(obj) {
        return (this.x + this.width) >= obj.x &&
            this.x <= (obj.x + obj.width) &&
            this.y + this.height > obj.y
    }

    offsetColliding(obj) {
        return this.x + this.width - this.offset.right > obj.x + obj.offset.left && // R -> L
            this.y + this.height - this.offset.bottom > obj.y + obj.offset.top && // T -> B
            this.x + this.offset.left < obj.x + obj.width - obj.offset.right && // L -> R
            this.y + this.offset.top < obj.y + obj.height - obj.offset.bottom; // B -> T
    }

    hit(damageNum) {
        this.energy -= damageNum;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
            return true
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // Difference in ms
        timepassed = timepassed / 1000; // Difference in s
        this.timepassedSinceIsHurt = timepassed
        return timepassed < 1;
    }

    isDead() {
        if (this.energy == 0 || this.energy < 0 || this.energy == -0) {
            return true
        } else {
            return false
        }
    }

    removeDeads(obj) {
        return console.log('HTTP 301 models/world.class.js:71');
    }

    playAnimation(images) {
        let i = this.currentImage % images.length; // let i = 7 % 6; =>  1, Rest 1 
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveStop() {
        this.speed = 0
        this.x += this.speed;
    }

    jump() {
        this.speedY = 30;
    }

    jumpOnHead() {
        this.speedY = 25;
    }

}

