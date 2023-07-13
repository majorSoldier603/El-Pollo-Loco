class Gameover extends DrawableObject {
    world;
    endboss;
    win_sound = new Audio('audio/win.mp3');
    loose_sound = new Audio('audio/loose.mp3');
    gameOver = false


    constructor() {
        super();
        this.loadImage('img/9_intro_outro_screens/game_over/game over.png');
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
    }

    gameover() {
        this.endboss = this.world.level.enemies.length - 1
        if (this.world.level.enemies[this.endboss].isDead()) {
            this.loadImage('img/9_intro_outro_screens/game_over/game over.png');
            this.x = 0;
            this.y = 0;
            this.width = 720;
            this.height = 480;
            this.win_sound.play();
            this.gameOver = true
        } else if (this.world.character.isDead()) {
            this.loadImage('img/9_intro_outro_screens/game_over/you lost.png');
            this.x = 0;
            this.y = 0;
            this.width = 720;
            this.height = 480;
            this.gameOver = true
        }
    }
}
