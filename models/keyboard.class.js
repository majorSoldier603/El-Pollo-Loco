class Keyboard {
    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;
    D = false;
    F = false;

    startTime = 0;
    endTime = 0;
    timeSinceLastInput = this.endTime - this.startTime;
    world;

    constructor() {
        this.isInactive()
        this.isActive()

        setInterval(() => {
            this.measureTime()
        }, 120);
    }

    isInactive() {
        setInterval(() => {
            if (this.LEFT == false && this.RIGHT == false && this.UP == false && this.DOWN == false && this.SPACE == false && this.D == false && this.F == false) {
                this.startTime = new Date().getTime();
                this.isActive()
            }
        }, 10);
    }

    isActive() {
        setInterval(() => {
            if (this.LEFT == true || this.RIGHT == true || this.UP == true || this.DOWN == true || this.SPACE == true || this.D == true || this.F == true) {
                this.endTime = new Date().getTime();
            }
        }, 10);
    }

    measureTime() {
        this.timeSinceLastInput = this.endTime - this.startTime;
        this.timeSinceLastInput = this.timeSinceLastInput / 1000

    }

    

}

