class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    gameover = new Gameover();
    statusBarHEALTH = new StatusBarHEALTH();
    statusBarHEALTHENDBOSS = new StatusBarHEALTHENDBOSS();
    statusBarBOTTLE = new StatusBarBOTTLE();
    statusBarCOIN = new StatusBarCOIN();
    throwableObjects = [];
    isStarted = false
    endboss = this.level.enemies.length - 1

    damage_sound = new Audio('audio/damage.mp3')

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
        this.gameover.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisionsEnemy();
        }, 10);
        setInterval(() => {
            this.convertThrowObjects();
            this.checkCollisionsBottle();
            this.checkCollisionsCoin();
            this.checkCollisionsThrowObjects();
        }, 200);
        setInterval(() => {

        }, 5000);
    }


    checkCollisionsThrowObjects() {
        this.throwableObjects.forEach((bottle) => {
            if (this.level.enemies[this.endboss].isColliding(bottle)) {
                console.log('bottle: ', bottle);
                console.log('this.throwableObjects: ', this.throwableObjects);
                console.log('this.level.enemies[7].energy: ', this.level.enemies[this.endboss].energy);
                console.log('bottle.animateRotation: ', bottle.animateRotation);
                bottle.x = 0
                bottle.speedY = 0
                bottle.energy -= 1                    
                console.log('this.level.enemies[this.endboss].isDead == true: ', this.level.enemies[this.endboss].isDead == true);
                this.level.enemies[this.endboss].energy -= 10
                this.statusBarHEALTHENDBOSS.setPercentage(this.level.enemies[this.endboss].energy);
                bottle.AnimateKaboom()
                if (this.level.enemies[this.endboss].isDead() && world.gameover.gameOver == false) {
                    world.gameover.gameover();
                    this.level.enemies[this.endboss].playDead();
                }
            }
        });
    }

    convertThrowObjects() {
        if (this.keyboard.D && this.statusBarBOTTLE.bottleCount > 0) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.statusBarBOTTLE.bottleCount -= 1;
            this.throwableObjects.push(bottle);
            bottle.trow()
            this.statusBarBOTTLE.setPath(this.statusBarBOTTLE.bottleCount);
        }
    }

    checkCollisionsEnemy() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && this.character.isAboveGround() && this.character.isHurt() < 1 && enemy.isEndboss !== true) {
                if (enemy.isDead() == false && enemy.isEndboss == false) {
                    this.character.jumpOnHead();
                }
                enemy.energy -= 100
                setTimeout(() => {
                    if (enemy.isEndboss == true) {} else {this.removeDeads("enemies")}
                }, 1000);
            } else if (this.character.isColliding(enemy) && enemy.isDead() == false) {
                this.damage_sound.play();
                this.character.lastHit = 0;
                this.character.hit();
                this.keyboard.timeSinceLastInput = 0
                this.statusBarHEALTH.setPercentage(this.character.energy);
            } else if (this.character.isDead()) {
                world.gameover.gameover();
            }
        });

    }

    checkCollisionsBottle() {
        this.level.bottles.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                bottle.energy -= 1
                this.statusBarBOTTLE.bottleCount += 1;
                this.removeDeads("bottles")
                this.statusBarBOTTLE.setPath(this.statusBarBOTTLE.bottleCount);
            }
        });
    }


    checkCollisionsCoin() {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                coin.energy -= 1
                this.statusBarCOIN.coinCount += 1;
                this.removeDeads("coins")
                this.statusBarCOIN.setPath(this.statusBarCOIN.coinCount);
            }
        });
    }

    removeDeads(obj) {
        let arr = world.level[obj]
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == undefined || arr[i].isDead() == true) {
                delete arr[i]
            }
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);




        // ------ Space for fixed objects ------
        this.ctx.translate(-this.camera_x, 0);

        this.addToMap(this.statusBarHEALTH);
        this.addToMap(this.statusBarHEALTHENDBOSS);
        this.addToMap(this.statusBarBOTTLE);
        this.addToMap(this.statusBarCOIN);

        this.ctx.translate(this.camera_x, 0);

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.throwableObjects);

        this.ctx.translate(-this.camera_x, 0);

        this.addToMap(this.gameover);
        // Draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }

    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }


}